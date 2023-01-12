(ns app.views
  (:require
   [goog.string :refer [unescapeEntities]]
   [clojure.string :as str]
   [re-frame.core :as re-frame]
   [app.events :as events]
   [app.subs :as subs]))

(defn- point-up-img []
  [:svg.point-img
   {:style {:width "100%" :height "100%"}
    :viewBox "0 0 100 100"
    :preserve-aspect-ratio "none"}
   [:polygon
    {:points "0,100 100,100 50,0"}]])

(defn- point-down-img []
  [:svg.point-img
   {:style {:width "100%" :height "100%"}
    :viewBox "0 0 100 100"
    :preserve-aspect-ratio "none"}
   [:polygon
    {:points "0,0 100,0 50,100"}]])

(defn- point [{:keys [direction point]}]
  (let [data @(re-frame/subscribe [::subs/point point])]
    [:button.point
     {:class (str "" (when (:selected data) " point--selected"))
      :on-click #(re-frame/dispatch [::events/click-point point])}
     (case direction
       :up [point-up-img]
       :down [point-down-img])
     (into
      [:div.checkers]
      (map (fn [checker]
             [:div.checker
              {:class (str "checker-" (name checker))}]))
      (:checkers data))]))

(defn die [x]
  [:div.die x])

(defn dice []
  (let [[roll1 roll2] @(re-frame/subscribe [::subs/rolls])
        active-player @(re-frame/subscribe [::subs/active-player])
        style (if (= :p1 active-player) {:right "25%"} {:left "25%" :transform "rotate(180deg)"})]
    [:div.rolls
     {:style style}
     [die roll1]
     [die roll2]]))

(defn- status-bar []
  (let [{:keys [active-player available-moves]} @(re-frame/subscribe [::subs/status-bar])]
    [:div.status-bar
     [:div.active-player-info
      "Active player:"
      (unescapeEntities "&nbsp;")
      [:div.checker {:class (str "checker-" (name active-player))}]]
     [:div.available-moves-info
      "Available moves: "
      (str/join ", " available-moves)]]))

(defn- bar [{:keys [player direction]}]
  (let [checkers @(re-frame/subscribe [::subs/bar player])]
    [:div.bar
     (into
      [:div.bar-checkers
       {:class (str "bar-checkers-" (name direction))}]
      (map (fn [checker]
             [:div.checker
              {:class (str "checker-" (name checker))}]))
      checkers)]))

(defn- tray-checkers [player direction]
  (let [checkers @(re-frame/subscribe [::subs/tray player])]
    (into
     [:div.tray-checkers
      {:class (str "tray-checkers-" (name direction))}]
     (map (fn [checker]
            [:div.checker
             {:class (str "checker-" (name checker))}]))
     checkers)))

(defn- tray []
  [:button.tray
   {:on-click #(re-frame/dispatch [::events/bear-off])}
   [tray-checkers :p2 :down]
   [:div.tray-label
    "Bear off area"]
   [tray-checkers :p1 :up]])

(defn- game []
  [:div.table
   [:div.game-box
    [:div.game
     [:div.game-line
      (for [n (range 13 19)]
        ^{:key n} [point {:direction :down
                          :point n}])
      [bar {:direction :down
            :player :p1}]
      (for [n (range 19 25)]
        ^{:key n} [point {:direction :down
                          :point n}])]
     [:div.center-bar]
     [:div.game-line
      (for [n (reverse (range 7 13))]
        ^{:key n} [point {:direction :up
                          :point n}])
      [bar {:direction :up
            :player :p2}]
      (for [n (reverse (range 1 7))]
        ^{:key n} [point {:direction :up
                          :point n}])]
     [dice]]
    [tray]]

   [status-bar]])

(defn app []
  [game])
