(ns app.events
  (:require
   [clojure.edn :as edn]
   [re-frame.core :as re-frame]
   [app.db :as db]
   [nenadalm.clojure-utils.cljs :as cljs-utils]))

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

(defn- reset-game [db]
  (assoc db
         :game (db/init)
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

(re-frame/reg-event-fx
 ::update-available
 (fn [{:keys [db]} _]
   {:db (assoc-in db [:app-info :update-available] true)}))

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

(re-frame/reg-event-db
 ::click-point
 (fn [db [_ point]]
   (update db :game db/click-point point)))

(re-frame/reg-event-db
 ::bear-off
 (fn [db _]
   (update db :game db/bear-off)))

(re-frame/reg-event-db
 ::open-page
 (fn [db [_ page]]
   (assoc db :page page)))
