(ns nenadalm.clojure-utils.cljs)

(defn- request-screen [wake-lock]
  (.request wake-lock "screen"))

(defn prevent-screen-lock []
  (when-some [wake-lock (.-wakeLock js/navigator)]
    (-> (request-screen wake-lock)
        (.then (fn []
                 (js/document.addEventListener
                  "visibilitychange"
                  (fn [_]
                    (when (= "visible" (.-visibilityState js/document))
                      (request-screen wake-lock)))))))))

(defn app-version []
  (some-> (js/document.querySelector "meta[name=app-version]")
          (.getAttribute "content")))
