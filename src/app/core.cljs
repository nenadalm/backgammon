(ns app.core
  (:require
   [re-frame.core :as re-frame]
   [reagent.dom :as reagent-dom]
   [app.config :as config]
   [app.views :as views]
   [app.events :as events]))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent-dom/render [views/app]
                      (.getElementById js/document "app")))

(defn register-worker []
  (some-> js/navigator
          .-serviceWorker
          (.register "worker.js")))

(defn- dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn- prod-setup []
  (when-not config/debug?
    (register-worker)))

(defn- prevent-screen-lock []
  (when-some [wake-lock (.-wakeLock js/navigator)]
    (-> wake-lock
        (.request "screen")
        (.then (fn []
                 (js/document.addEventListener
                  "visibilitychange"
                  (fn [_]
                    (when (= "visible" (.-visibilityState js/document))
                      (-> wake-lock
                          (.request "screen")
                          (.catch (fn [_] (js/alert "Cannot prevent screen from locking.")))))))))
        (.catch (fn [_] (js/alert "Cannot prevent screen from locking."))))))

(defn ^:export init []
  (dev-setup)
  (prod-setup)
  (prevent-screen-lock)
  (re-frame/dispatch-sync [::events/init])
  (mount-root))

(defn ^:dev/after-load after-load []
  (mount-root))
