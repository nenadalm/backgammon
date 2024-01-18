(ns build.hook
  (:require
   [clojure.java.io :as io]
   [build.create-manifest]
   [build.create-index]
   [build.create-worker]
   [nenadalm.clojure-utils.assets :as assets]))

(defn hook
  {:shadow.build/stage :flush}
  [build-state {:keys [public-dir]}]
  (when-not (.exists (io/file "resources/public/worker.js"))
    (let [assets (merge (assets/from-modules build-state {:public-dir public-dir})
                        (assets/create
                         build-state
                         {:public-dir public-dir
                          :assets {"css/styles.css" "resources/private/css/styles.css"}}))]
      (spit "resources/public/manifest.json" (build.create-manifest/render assets))
      (spit "resources/public/index.html" (build.create-index/render assets))
      (spit "resources/public/worker.js" (build.create-worker/render assets))))
  build-state)
