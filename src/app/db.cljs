(ns app.db)

(def ^:private checkers-per-player 15)

(def opponent
  {:p1 :p2
   :p2 :p1})

(defn winner [game]
  (let [{:keys [bear-off]} game]
    (cond
      (== checkers-per-player (count (:p1 bear-off))) :p1
      (== checkers-per-player (count (:p2 bear-off))) :p2
      :else nil)))

(defn game-end? [game]
  (boolean (winner game)))

(defn pop-selected-point [game]
  (let [selected-point (:selected-point game)]
    (case selected-point
      0 (update-in game [:bar :p2] pop)
      25 (update-in game [:bar :p1] pop)
      (let [checkers (get-in game [:point->checkers selected-point])]
        (if (== 1 (count checkers))
          (update game :point->checkers dissoc selected-point)
          (assoc-in game [:point->checkers selected-point] (pop checkers)))))))

(defn- roll-die []
  (inc (rand-int 6)))

(defn roll [game]
  (let [roll1 (roll-die)
        roll2 (roll-die)
        prev-rolls (:rolls game)]
    (cond-> (assoc game
                   :used-moves []
                   :rolls [roll1 roll2]
                   :available-moves (if (== roll1 roll2)
                                      [roll1 roll2 roll1 roll2]
                                      [roll1 roll2]))
      prev-rolls (assoc :prev-rolls prev-rolls))))

(defn move-direction [player]
  (if (= player :p1) -1 1))

(defn bear-off-point [player]
  (if (= player :p1) 0 25))

(defn bar-point [player]
  (if (= player :p1) 25 0))
