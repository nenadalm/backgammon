(ns app.subs
  (:require
   [re-frame.core :as re-frame]
   [app.db :as db]))

(re-frame/reg-sub
 ::point
 (fn [db [_ point]]
   {:checkers (get-in db [:game :point->checkers point] [])
    :selected (= point (get-in db [:game :selected-point]))}))

(re-frame/reg-sub
 ::rolls
 (fn [db _]
   (let [game (:game db)
         active-player (:active-player game)
         opponent-player (db/opponent active-player)
         prev-rolls (:prev-rolls game)]
     (cond-> [[active-player (:rolls game)]]
       prev-rolls (conj [opponent-player prev-rolls])))))

(re-frame/reg-sub
 ::active-player
 (fn [db _]
   (get-in db [:game :active-player])))

(re-frame/reg-sub
 ::status-bar
 (fn [db _]
   (select-keys (:game db) [:active-player
                            :used-moves
                            :available-moves
                            :bar])))

(re-frame/reg-sub
 ::bar
 (fn [db [_ player]]
   (get-in db [:game :bar player])))

(re-frame/reg-sub
 ::tray
 (fn [db [_ player]]
   (get-in db [:game :bear-off player])))

(re-frame/reg-sub
 ::page
 (fn [db _]
   (:page db)))

(re-frame/reg-sub
 ::app-info
 (fn [db _]
   (:app-info db)))

(re-frame/reg-sub
 ::winner
 (fn [db _]
   (db/winner (:game db))))

(re-frame/reg-sub
 ::settings
 (fn [db _]
   (:settings db)))
