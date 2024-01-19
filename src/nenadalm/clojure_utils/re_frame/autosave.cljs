(ns nenadalm.clojure-utils.re-frame.autosave
  (:require
   [re-frame.core :as re-frame]
   [clojure.edn :as edn]
   [nenadalm.clojure-utils.re-frame.local-storage :as ls]))

(defn init [autosave-key]
  (re-frame/reg-event-fx
   ::autosave
   (fn [{:keys [db]}]
     {::ls/set {autosave-key (pr-str db)}}))

  (re-frame/reg-event-fx
   ::autosave-remove
   (fn [_]
     {::ls/remove [autosave-key]}))

  (re-frame/reg-event-fx
   ::autosave-load
   [(re-frame/inject-cofx ::ls/get {:autosave-str autosave-key})]
   (fn [cofx]
     (if-let [autosave (edn/read-string (:autosave-str cofx))]
       {:db autosave
        ::ls/remove [autosave-key]}
       {})))

  (re-frame/dispatch-sync [::autosave-load])
  (js/document.addEventListener
   "visibilitychange"
   (fn []
     (case (.-visibilityState js/document)
       "visible" (re-frame/dispatch [::autosave-remove])
       "hidden" (re-frame/dispatch [::autosave])
       nil))))
