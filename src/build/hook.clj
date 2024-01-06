(ns build.hook
  (:require
   [clojure.java.io :as io]
   [build.create-manifest]
   [build.create-index]
   [build.create-worker]))

(defn hook
  {:shadow.build/stage :flush}
  [build-state & _args]
  (when-not (.exists (io/file "resources/public/worker.js"))
    (spit "resources/public/manifest.json" (build.create-manifest/render))
    (spit "resources/public/index.html" (build.create-index/render))
    (spit "resources/public/worker.js" (build.create-worker/render)))
  build-state)
