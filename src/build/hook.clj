(ns build.hook
  (:require
   [clojure.java.io :as io]
   [build.create-manifest]
   [build.create-index]
   [build.create-worker]))

(defn- module-id->output-name [build-state]
  (-> (group-by :module-name (:shadow.build.closure/modules build-state))
      (update-vals #(-> % first :output-name))))

(defn- path [s]
  (java.nio.file.Paths/get s (make-array java.lang.String 0)))

(defn- symlink [link target]
  (let [link-path (path link)
        target-rel (.relativize (.getParent link-path)
                                (path target))]
    (.mkdirs (.toFile (.getParent link-path)))
    (java.nio.file.Files/createSymbolicLink link-path target-rel (make-array java.nio.file.attribute.FileAttribute 0))))

(defn- copy [src target]
  (let [target-f (io/file target)]
    (.mkdirs (.getParentFile target-f))
    (io/copy
     (io/file src)
     target-f)))

(defn- create-styles [build-mode]
  (let [src "resources/private/css/styles.css"
        target "resources/public/css/styles.css"]
    (case build-mode
      :release (copy src target)
      (symlink target src))))

(defn hook
  {:shadow.build/stage :flush}
  [build-state & _args]
  (when-not (.exists (io/file "resources/public/worker.js"))
    (let [outputs (module-id->output-name build-state)]
      (create-styles (:shadow.build/mode build-state))
      (spit "resources/public/manifest.json" (build.create-manifest/render outputs))
      (spit "resources/public/index.html" (build.create-index/render outputs))
      (spit "resources/public/worker.js" (build.create-worker/render outputs))))
  build-state)
