(ns build.hook
  (:require
   [clojure.java.io :as io]
   [build.create-manifest]
   [build.create-index]
   [build.create-worker]))

(defn- module-id->output-name [build-state]
  (-> (group-by :module-name (:shadow.build.closure/modules build-state))
      (update-vals #(-> % first :output-name))))

(defn hook
  {:shadow.build/stage :flush}
  [build-state & _args]
  (when-not (.exists (io/file "resources/public/worker.js"))
    (let [outputs (module-id->output-name build-state)]
      (spit "resources/public/manifest.json" (build.create-manifest/render outputs))
      (spit "resources/public/index.html" (build.create-index/render outputs))
      (spit "resources/public/worker.js" (build.create-worker/render outputs))))
  build-state)
