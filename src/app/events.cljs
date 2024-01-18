(ns app.events
  (:require
   [clojure.edn :as edn]
   [clojure.set :as set]
   [re-frame.core :as re-frame]
   [app.db :as db]
   [nenadalm.clojure-utils.cljs :as cljs-utils]))

(def ^:private conjv (fnil conj []))

(re-frame/reg-cofx
 :app-version
 (fn [coeffects _]
   (assoc coeffects :app-version (cljs-utils/app-version))))

(re-frame/reg-cofx
 :settings
 (fn [coeffects _]
   (assoc coeffects
          :settings
          (or
           (edn/read-string
            (js/window.localStorage.getItem "nenadalm.backgammon/settings"))
           {}))))

(re-frame/reg-fx
 :settings
 (fn [settings]
   (js/window.localStorage.setItem "nenadalm.backgammon/settings" (pr-str settings))))

(defn- entering-selected-point [game]
  (let [{:keys [active-player bar]} game
        hitted (get bar active-player)]
    (if (seq hitted)
      (assoc game :selected-point (db/bar-point active-player))
      game)))

(defn- blocked-points [game]
  (let [{:keys [point->checkers active-player]} game
        opponent (db/opponent active-player)]
    (into
     #{}
     (comp
      (filter
       (fn [[_ checkers]]
         (and
          (< 1 (count checkers))
          (= opponent (first checkers)))))
      (map key))
     point->checkers)))

(defn- available-points [game]
  (let [all-points (set (range 1 25))
        blocked-points (blocked-points game)]
    (set/difference all-points blocked-points)))

(defn- occupied-points [game]
  (let [{:keys [point->checkers active-player]} game]
    (into
     #{}
     (comp
      (filter
       (fn [[_ checkers]]
         (= active-player (first checkers))))
      (map key))
     point->checkers)))

(defn- bear-off-active? [game]
  (let [{:keys [active-player bar]} game
        home-range? (case active-player
                      :p1 #(<= 1 % 6)
                      :p2 #(<= 19 % 24))
        bar-checkers (get bar active-player)]
    (and
     (empty? bar-checkers)
     (every? home-range? (occupied-points game)))))

(def ^:private compare' #(compare %2 %1))

(defn- use-move* [game move-by]
  (-> game
      (update :used-moves conj move-by)
      (update :available-moves (fn [moves]
                                 (let [idx (.indexOf moves move-by)]
                                   (into (subvec moves 0 idx)
                                         (subvec moves (inc idx))))))))

(defn- legal-move? [game move]
  (let [{:keys [active-player bar]} game
        available-points (available-points game)
        bar-cnt (count (get bar active-player))
        bar-point (db/bar-point active-player)
        occupied-points (if (< 0 bar-cnt)
                          [bar-point]
                          (occupied-points game))
        bear-off-active (bear-off-active? game)]
    (boolean
     (let [move-by (* move (db/move-direction active-player))]
       (some
        (fn [occupied-point]
          (let [target-point (+ occupied-point move-by)]
            (or
             (available-points target-point)
             (and bear-off-active
                  (= target-point (db/bear-off-point active-player))))))
        occupied-points)))))

(defn- has-legal-move? [game]
  (let [{:keys [available-moves]} game]
    (some (partial legal-move? game) available-moves)))

(defn- can-bear-off?
  "Doesn't check for legal move."
  [game]
  (let [{:keys [available-moves active-player bar]} game
        bar-cnt (count (get bar active-player))
        bar-point (db/bar-point active-player)
        occupied-points (if (< 0 bar-cnt)
                          [bar-point]
                          (occupied-points game))
        highest-occupied-point (first (sort (if (= active-player :p1)
                                              compare'
                                              compare) occupied-points))
        bear-off-active (bear-off-active? game)]
    (boolean
     (and bear-off-active
          (some
           (fn [move]
             (let [move-by (* move (db/move-direction active-player))]
               (some
                (fn [occupied-point]
                  (let [target-point (+ occupied-point move-by)]
                    (and (= highest-occupied-point occupied-point)
                         (not (<= 0 target-point 25)))))
                occupied-points)))
           available-moves)))))

(defn has-valid-move? [game]
  (or
   (has-legal-move? game)
   (can-bear-off? game)))

(defn- make-move [game move occupied-point target-point]
  (let [{:keys [point->checkers active-player]} game
        opponent-player (db/opponent active-player)
        existing-checkers (point->checkers target-point)
        game (assoc game :selected-point occupied-point)]
    (cond
      (or
       (not (seq existing-checkers))
       (= active-player (first existing-checkers)))
      (-> game
          (update-in [:point->checkers target-point] conjv active-player)
          db/pop-selected-point
          (dissoc :selected-point)
          (use-move* move))

      (= 1 (count existing-checkers))
      (-> game
          (assoc-in [:point->checkers target-point] [active-player])
          db/pop-selected-point
          (dissoc :selected-point)
          (update-in [:bar opponent-player] conjv opponent-player)
          (use-move* move))

      :else game)))

(defn has-valid-move2? [game]
  (let [{:keys [active-player bar available-moves]} game
        available-points (available-points game)
        bar-cnt (count (get bar active-player))
        bar-point (db/bar-point active-player)
        occupied-points (if (< 0 bar-cnt)
                          [bar-point]
                          (occupied-points game))
        highest-available-move (first (rseq (vec (sort available-moves))))
        highest-occupied-point (first (sort (if (= active-player :p1)
                                              compare'
                                              compare) occupied-points))]
    (boolean
     (some
      (fn [move]
        (let [move-by (* move (db/move-direction active-player))]
          (some
           (fn [occupied-point]
             (let [target-point (+ occupied-point move-by)]
               (or
                (and (available-points target-point)
                     (-> (make-move game move occupied-point target-point)
                         has-valid-move?))
                (and (bear-off-active? game)
                     (let [game (assoc game :selected-point occupied-point)]
                       (if (legal-move? game move)
                         (let [move-by (* (- (db/bear-off-point active-player) occupied-point)
                                          (db/move-direction active-player))]
                           (if (not (== -1 (.indexOf available-moves move-by)))
                             (let [next-game (-> game
                                                 (update-in [:bear-off active-player] conjv active-player)
                                                 db/pop-selected-point
                                                 (dissoc :selected-point)
                                                 (use-move* move-by))]
                               (has-valid-move? next-game))
                             false))
                         (if (and (= highest-occupied-point occupied-point)
                                  (not (<= 0 target-point 25)))
                           (let [next-game (-> game
                                               (update-in [:bear-off active-player] conjv active-player)
                                               db/pop-selected-point
                                               (dissoc :selected-point)
                                               (use-move* highest-available-move))]
                             (has-valid-move? next-game))
                           false)))))))
           occupied-points)))
      available-moves))))

(defn- next-turn [game]
  (if (or (db/game-end? game) (has-valid-move? game))
    game
    (recur (-> game
               db/roll
               (update :active-player db/opponent)))))

(defn- maybe-switch-players [game]
  (-> game
      next-turn
      entering-selected-point))

(defn use-move [game move-by]
  (-> game
      (use-move* move-by)
      maybe-switch-players))

(defn- first-roll [game]
  (loop [next-game (db/roll game)]
    (let [[roll1 roll2] (:rolls next-game)]
      (if (== roll1 roll2)
        (recur (db/roll game))
        (assoc next-game :active-player (if (< roll1 roll2) :p2 :p1))))))

(defn- reset-game [db]
  (assoc db
         :game (-> {;; :active-player :p1
                    ;; :selected-point 0
                    ;; :rolls [3 5]
                    ;; :available-moves [3 5]
                    ;; :used-moves []
                    :bar {:p1 []
                          :p2 []}
                    :bear-off {:p1 []
                               :p2 []}
                    :point->checkers {1 [:p2 :p2]
                                      12 [:p2 :p2 :p2 :p2 :p2]
                                      17 [:p2 :p2 :p2]
                                      19 [:p2 :p2 :p2 :p2 :p2]
                                      6 [:p1 :p1 :p1 :p1 :p1]
                                      8 [:p1 :p1 :p1]
                                      13 [:p1 :p1 :p1 :p1 :p1]
                                      24 [:p1 :p1]}}
                   first-roll)
         :page :game))

(def ^:private default-settings
  {:show-prev-roll true})

(re-frame/reg-event-fx
 ::init
 [(re-frame/inject-cofx :app-version)
  (re-frame/inject-cofx :settings)]
 (fn [{:keys [app-version settings db]} _]
   (let [data {:settings (merge default-settings settings)
               :app-info {:version app-version}}]
     {:db (if (seq db)
            (merge db data)
            (reset-game data))})))

(re-frame/reg-event-db
 ::reset
 (fn [db _]
   (reset-game db)))

(re-frame/reg-event-fx
 ::save-settings
 (fn [{:keys [db]} [_ settings]]
   {:db (-> db
            (update :settings merge settings)
            reset-game)
    :settings settings}))

(defn- move* [game point]
  (let [{:keys [selected-point active-player available-moves]} game
        move-by (* (- point selected-point) (db/move-direction active-player))]
    (if (not (== -1 (.indexOf available-moves move-by)))
      (make-move game move-by selected-point point)
      game)))

(defn- move [game point]
  (let [{:keys [available-moves]} game
        highest-available-move (first (rseq (vec (sort available-moves))))
        possible-2-moves (and (== 2 (count available-moves)) (has-valid-move2? game))
        possible-highest-move (has-valid-move? (assoc game :available-moves [highest-available-move]))
        next-game (move* game point)
        used-highest-move (contains? (set (:used-moves next-game)) highest-available-move)]
    (if possible-2-moves
      (if (has-valid-move? next-game)
        (maybe-switch-players next-game)
        game)
      (if (or used-highest-move
              (not possible-highest-move))
        (maybe-switch-players next-game)
        game))))

(defn- select-point [game point]
  (let [{:keys [active-player point->checkers bar]} game
        existing-checker (first (point->checkers point))]
    (if (and (empty? (get bar active-player))
             (= existing-checker active-player))
      (assoc game :selected-point point)
      game)))

(re-frame/reg-event-db
 ::click-point
 (fn [db [_ point]]
   (let [game (:game db)
         selected-point (:selected-point game)]
     (assoc db
            :game
            (if selected-point
              (if (= selected-point point)
                (dissoc game :selected-point)
                (move game point))
              (select-point game point))))))

(re-frame/reg-event-db
 ::bear-off
 (fn [db _]
   (let [game (:game db)
         {:keys [selected-point active-player available-moves]} game
         highest-available-move (first (rseq (vec (sort available-moves))))
         target-point (+ selected-point (* highest-available-move (db/move-direction active-player)))
         occupied-points (occupied-points game)
         highest-occupied-point (first (sort (if (= active-player :p1)
                                               compare'
                                               compare) occupied-points))
         legal-move (some (partial legal-move? game) available-moves)]
     (if (bear-off-active? game)
       (if legal-move
         (let [move-by (* (- (db/bear-off-point active-player)
                             selected-point)
                          (db/move-direction active-player))]
           (if (not (== -1 (.indexOf available-moves move-by)))
             (assoc
              db
              :game
              (-> game
                  (update-in [:bear-off active-player] conjv active-player)
                  db/pop-selected-point
                  (dissoc :selected-point)
                  (use-move move-by)))
             db))
         (if (and (= highest-occupied-point selected-point)
                  (not (<= 0 target-point 25)))
           (assoc
            db
            :game
            (-> game
                (update-in [:bear-off active-player] conjv active-player)
                db/pop-selected-point
                (dissoc :selected-point)
                (use-move highest-available-move)))
           db))
       db))))

(re-frame/reg-event-db
 ::open-page
 (fn [db [_ page]]
   (assoc db :page page)))
