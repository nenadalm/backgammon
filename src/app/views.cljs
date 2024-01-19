(ns app.views
  (:require
   [goog.string :refer [unescapeEntities]]
   [clojure.string :as str]
   [re-frame.core :as re-frame]
   [app.events :as events]
   [app.subs :as subs]
   [app.components.icons.views :as i]))

(defn- form-data [form-el]
  (into {}
        (map (fn [[k v]]
               [(keyword k) v]))
        (.entries (js/FormData. form-el))))

(defn- parse-bool [s]
  (boolean s))

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

(defn dice-rolls [player [roll1 roll2]]
  (let [active-player @(re-frame/subscribe [::subs/active-player])
        style (if (= :p1 player) {:right "25%"} {:left "25%" :transform "rotate(180deg)"})]
    [:div.rolls
     {:style style
      :class (str "rolls--" (if (= active-player player) "active" "inactive"))}
     [die roll1]
     [die roll2]]))

(defn dice []
  [:<>
   (for [[player rolls] @(re-frame/subscribe [::subs/rolls])]
     ^{:key (name player)} [dice-rolls player rolls])])

(defn winner []
  (when-let [winner @(re-frame/subscribe [::subs/winner])]
    [:div.winner
     {:style (if (= :p1 winner)
               {:right "calc(25% - 5rem)"}
               {:left "calc(25% - 5rem)" :transform "rotate(180deg)"})}
     [i/crown]]))

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
    [status-bar]
    [:div.game
     [:div.game-line.game-line1
      (for [n (range 13 19)]
        ^{:key n} [point {:direction :down
                          :point n}])
      [bar {:direction :down
            :player :p1}]
      (for [n (range 19 25)]
        ^{:key n} [point {:direction :down
                          :point n}])]
     [:div.center-bar
      [:button.menu-button
       {:on-click (fn [_] (re-frame/dispatch [::events/open-page :menu]))}
       "M\ne\nn\nu"]]
     [:div.game-line.game-line2
      (for [n (reverse (range 7 13))]
        ^{:key n} [point {:direction :up
                          :point n}])
      [bar {:direction :up
            :player :p2}]
      (for [n (reverse (range 1 7))]
        ^{:key n} [point {:direction :up
                          :point n}])]
     [dice]
     [winner]]
    [tray]]])

(defn menu []
  (let [settings @(re-frame/subscribe [::subs/settings])
        app-info @(re-frame/subscribe [::subs/app-info])
        messages @(re-frame/subscribe [::subs/messages])]
    [:div.menu
     [:div.menu--header
      [:button.close
       {:on-click (fn [_] (re-frame/dispatch [::events/open-page :game]))}
       [i/close]]]
     (when (seq messages)
       [:div.messages
        (for [message messages]
          ^{:key (:text message)} [:div.message (:text message)])
        [:hr]])
     [:form
      {:on-submit (fn [e]
                    (.preventDefault e)
                    (re-frame/dispatch
                     [::events/save-settings
                      (-> (form-data (.-currentTarget e))
                          (update :show-prev-roll parse-bool))]))}
      [:label.form-label
       [:input
        {:type "checkbox"
         :name "show-prev-roll"
         :default-checked (:show-prev-roll settings)}]
       "Show prev roll"]
      [:button.action "Save & reset game"]]
     [:button.action
      {:on-click (fn [_] (re-frame/dispatch [::events/reset]))}
      "Reset game"]
     [:div.menu--footer
      [:div.rules-link
       [:a
        {:href "https://www.bkgm.com/rules.html"}
        "Rules"]]
      [:div.issue-link
       [:a
        {:href "https://github.com/nenadalm/backgammon/issues"}
        "Report issue / request feature"]]
      [:div.app-version
       (str "Version: " (:version app-info))]]]))

(defn app []
  (case @(re-frame/subscribe [::subs/page])
    :menu [menu]
    :game [game]))
