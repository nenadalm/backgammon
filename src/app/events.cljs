(ns app.events
  (:require
   [clojure.set :as set]
   [re-frame.core :as re-frame]))

(def ^:private conjv (fnil conj []))

(defn- pop-selected-point [game]
  (let [selected-point (:selected-point game)]
    (case selected-point
      0 (update-in game [:bar :p2] pop)
      25 (update-in game [:bar :p1] pop)
      (let [checkers (get-in game [:point->checkers selected-point])]
        (if (== 1 (count checkers))
          (update game :point->checkers dissoc selected-point)
          (assoc-in game [:point->checkers selected-point] (pop checkers)))))))

(re-frame/reg-cofx
 :app-version
 (fn [coeffects _]
   (assoc coeffects
          :app-version
          (or (some-> "meta[name=app-version]"
                      js/document.querySelector
                      (.getAttribute "content"))
              "unknown"))))

(defn- roll-die []
  (inc (rand-int 6)))

(defn- roll [game]
  (let [roll1 (roll-die)
        roll2 (roll-die)]
    (assoc game
           :used-moves []
           :rolls [roll1 roll2]
           :available-moves (if (== roll1 roll2)
                              [roll1 roll2 roll1 roll2]
                              [roll1 roll2]))))

(def ^:private opponent
  {:p1 :p2
   :p2 :p1})

(defn- entering-selected-point [game]
  (let [{:keys [active-player bar]} game
        hitted (get bar active-player)]
    (if (seq hitted)
      (assoc game :selected-point (if (= active-player :p1) 25 0))
      game)))

(defn- blocked-points [game]
  (let [{:keys [point->checkers active-player]} game
        opponent (opponent active-player)]
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
     {}
     (comp
      (filter
       (fn [[_ checkers]]
         (= active-player (first checkers))))
      (map (fn [[point checkers]]
             [point (count checkers)])))
     point->checkers)))

(defn- bear-off-active? [game]
  (let [{:keys [point->checkers active-player bar]} game
        points-presence (into
                         []
                         (comp
                          (filter
                           (fn [[_ checkers]]
                             (= active-player (first checkers))))
                          (map key))
                         point->checkers)
        home-range? (case active-player
                      :p1 #(<= 1 % 6)
                      :p2 #(<= 19 % 24))
        bar-checkers (get bar active-player)]
    (and
     (empty? bar-checkers)
     (every? home-range? points-presence))))

(def ^:private compare' #(compare %2 %1))

(defn- legal-move? [game move]
  (let [{:keys [active-player bar]} game
        available-points (available-points game)
        bar-cnt (count (get bar active-player))
        bar-point (if (= active-player :p1) 25 0)
        occupied-points (if (< 0 bar-cnt)
                          {bar-point bar-cnt}
                          (occupied-points game))
        bear-off-active (bear-off-active? game)]
    (boolean
     (let [move-by (if (= active-player :p1) (* -1 move) move)]
       (some
        (fn [occupied-point]
          (let [target-point (+ occupied-point move-by)]
            (or
             (available-points target-point)
             (and bear-off-active
                  (case active-player
                    :p1 (= target-point 0)
                    :p2 (= 25 target-point))))))
        (keys occupied-points))))))

(defn- use-move* [game move-by]
  (-> game
      (update :used-moves conj move-by)
      (update :available-moves (fn [moves]
                                 (let [idx (.indexOf moves move-by)]
                                   (into (subvec moves 0 idx)
                                         (subvec moves (inc idx))))))))

(defn has-valid-move? [game]
  (let [{:keys [available-moves active-player bar]} game
        bar-cnt (count (get bar active-player))
        bar-point (if (= active-player :p1) 25 0)
        occupied-points (if (< 0 bar-cnt)
                          {bar-point bar-cnt}
                          (occupied-points game))
        highest-occupied-point (first (sort (if (= active-player :p1)
                                              compare'
                                              compare) (keys occupied-points)))
        bear-off-active (bear-off-active? game)]
    (boolean
     (or
      (some (partial legal-move? game) available-moves)
      (and bear-off-active
           (some
            (fn [move]
              (let [move-by (if (= active-player :p1) (* -1 move) move)]
                (some
                 (fn [occupied-point]
                   (let [target-point (+ occupied-point move-by)]
                     (and (= highest-occupied-point occupied-point)
                          (case active-player
                            :p1 (< target-point 0)
                            :p2 (< 25 target-point)))))
                 (keys occupied-points))))
            available-moves))))))

(defn has-valid-move2? [game]
  (let [{:keys [active-player bar available-moves point->checkers]} game
        opponent-player (opponent active-player)
        available-points (available-points game)
        bar-cnt (count (get bar active-player))
        bar-point (if (= active-player :p1) 25 0)
        occupied-points (if (< 0 bar-cnt)
                          {bar-point bar-cnt}
                          (occupied-points game))
        bear-off-active (bear-off-active? game)
        highest-available-move (first (rseq (vec (sort available-moves))))
        highest-occupied-point (first (sort (if (= active-player :p1)
                                              compare'
                                              compare) (keys occupied-points)))]
    (boolean
     (some
      (fn [move1]
        (let [move-by1 (if (= active-player :p1) (* -1 move1) move1)]
          (some
           (fn [occupied-point]
             (let [target-point (+ occupied-point move-by1)]
               (or
                (and (available-points target-point)
                     (let [existing-checkers (point->checkers target-point)
                           game (assoc game :selected-point occupied-point)
                           next-game (cond
                                       (or
                                        (not (seq existing-checkers))
                                        (= active-player (first existing-checkers)))
                                       (-> game
                                           (update-in [:point->checkers target-point] conjv active-player)
                                           pop-selected-point
                                           (dissoc :selected-point)
                                           (use-move* move1))

                                       (= 1 (count existing-checkers))
                                       (-> game
                                           (assoc-in [:point->checkers target-point] [active-player])
                                           pop-selected-point
                                           (dissoc :selected-point)
                                           (update-in [:bar opponent-player] conjv opponent-player)
                                           (use-move* move1)))]
                       (has-valid-move? next-game)))
                (and bear-off-active
                     (let [legal-move (legal-move? game move1)
                           game (assoc game :selected-point occupied-point)]
                       (if legal-move
                         (let [move-by (cond-> (- occupied-point (case active-player
                                                                   :p1 0
                                                                   :p2 25))
                                         (= active-player :p2) (* -1))]
                           (if (not (== -1 (.indexOf available-moves move-by)))
                             (let [next-game (-> game
                                                 (update-in [:bear-off active-player] conjv active-player)
                                                 pop-selected-point
                                                 (dissoc :selected-point)
                                                 (use-move* move-by))]
                               (has-valid-move? next-game))
                             false))
                         (if (and (= highest-occupied-point occupied-point)
                                  (case active-player
                                    :p1 (< target-point 0)
                                    :p2 (< 25 target-point)))
                           (let [next-game (-> game
                                               (update-in [:bear-off active-player] conjv active-player)
                                               pop-selected-point
                                               (dissoc :selected-point)
                                               (use-move* highest-available-move))]
                             (has-valid-move? next-game))
                           false)))))))
           (keys occupied-points))))
      available-moves))))

(defn game-end? [game]
  (let [{:keys [bar point->checkers]} game]
    (< (count (set/union
               (into
                #{}
                (mapcat val)
                bar)
               (into
                #{}
                (mapcat val)
                point->checkers)))
       2)))

(defn- next-turn [game]
  (if (or (game-end? game) (has-valid-move? game))
    game
    (recur (-> game
               roll
               (update :active-player opponent)))))

(defn- maybe-switch-players [game]
  (-> game
      next-turn
      entering-selected-point))

(defn use-move [game move-by]
  (-> game
      (use-move* move-by)
      maybe-switch-players))

(defn- first-roll [game]
  (loop [game (roll game)]
    (let [[roll1 roll2] (:rolls game)]
      (if (== roll1 roll2)
        (recur (roll game))
        (assoc game :active-player (if (< roll1 roll2) :p2 :p1))))))

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

(re-frame/reg-event-fx
 ::init
 [(re-frame/inject-cofx :app-version)]
 (fn [{:keys [app-version]} _]
   {:db (reset-game {:app-info {:version app-version}})}))

(re-frame/reg-event-db
 ::reset
 (fn [db _]
   (reset-game db)))

(defn- move* [game point]
  (let [{:keys [selected-point active-player point->checkers available-moves]} game
        existing-checkers (point->checkers point)
        opponent-player (opponent active-player)
        move-by (cond-> (- selected-point point)
                  (= active-player :p2) (* -1))]
    (if (not (== -1 (.indexOf available-moves move-by)))
      (cond
        (or
         (not (seq existing-checkers))
         (= active-player (first existing-checkers)))
        (-> game
            (update-in [:point->checkers point] conjv active-player)
            pop-selected-point
            (dissoc :selected-point)
            (use-move* move-by))

        (= 1 (count existing-checkers))
        (-> game
            (assoc-in [:point->checkers point] [active-player])
            pop-selected-point
            (dissoc :selected-point)
            (update-in [:bar opponent-player] conjv opponent-player)
            (use-move* move-by))

        :else game)
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
         target-point (+ selected-point (cond-> highest-available-move
                                          (= active-player :p1) (* -1)))
         occupied-points (occupied-points game)
         highest-occupied-point (first (sort (if (= active-player :p1)
                                               compare'
                                               compare) (keys occupied-points)))
         legal-move (some (partial legal-move? game) available-moves)]
     (if (bear-off-active? game)
       (if legal-move
         (let [move-by (cond-> (- selected-point (case active-player
                                                   :p1 0
                                                   :p2 25))
                         (= active-player :p2) (* -1))]
           (if (not (== -1 (.indexOf available-moves move-by)))
             (assoc
              db
              :game
              (-> game
                  (update-in [:bear-off active-player] conjv active-player)
                  pop-selected-point
                  (dissoc :selected-point)
                  (use-move move-by)))
             db))
         (if (and (= highest-occupied-point selected-point)
                  (case active-player
                    :p1 (< target-point 0)
                    :p2 (< 25 target-point)))
           (assoc
            db
            :game
            (-> game
                (update-in [:bear-off active-player] conjv active-player)
                pop-selected-point
                (dissoc :selected-point)
                (use-move highest-available-move)))
           db))
       db))))

(re-frame/reg-event-db
 ::open-page
 (fn [db [_ page]]
   (assoc db :page page)))
