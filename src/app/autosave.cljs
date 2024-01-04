(ns app.autosave
  (:require
   [re-frame.core :as re-frame]
   [clojure.edn :as edn]))

(defn init [autosave-key]
  (re-frame/reg-cofx
   ::autosave
   (fn [coeffects _]
     (assoc coeffects
            :autosave
            (edn/read-string
             (js/window.localStorage.getItem autosave-key)))))

  (re-frame/reg-fx
   ::autosave
   (fn [db]
     (js/window.localStorage.setItem autosave-key (pr-str db))))

  (re-frame/reg-fx
   ::autosave-remove
   (fn [_]
     (js/window.localStorage.removeItem autosave-key)))

  (re-frame/reg-event-fx
   ::autosave
   (fn [{:keys [db]}]
     {::autosave db}))

  (re-frame/reg-event-fx
   ::autosave-remove
   (fn [_]
     {::autosave-remove nil}))

  (re-frame/reg-event-fx
   ::autosave-load
   [(re-frame/inject-cofx ::autosave)]
   (fn [cofx]
     (if-let [autosave (:autosave cofx)]
       {:db autosave
        ::autosave-remove nil}
       {})))

  (re-frame/dispatch [::autosave-load])
  (js/document.addEventListener
   "visibilitychange"
   (fn []
     (case (.-visibilityState js/document)
       "visible" (re-frame/dispatch [::autosave-remove])
       "hidden" (re-frame/dispatch [::autosave])
       nil))))
