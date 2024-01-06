(ns build.hook
  (:require
   [clojure.java.io :as io]
   [build.create-manifest]
   [build.create-index]
   [build.create-worker]
   [build.util :as u]))

(defn- file->output-name [build-state]
  (-> (group-by (fn [m]
                  (str "js/" (m :module-name))) (:shadow.build.closure/modules build-state))
      (update-vals (fn [coll]
                     (str "js/" (-> coll first :output-name))))))

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
  (let [src "resources/private/css/styles.css"]
    (case build-mode
      :release
      (let [hash (u/file-hash src)
            target (str "resources/public/css/styles." hash ".css")]
        (copy src target)
        {"css/styles.css" (str "css/styles." hash ".css")})
      (do
        (symlink "resources/public/css/styles.css" src)
        {}))))

(defn hook
  {:shadow.build/stage :flush}
  [build-state & _args]
  (when-not (.exists (io/file "resources/public/worker.js"))
    (let [outputs (merge (file->output-name build-state)
                         (create-styles (:shadow.build/mode build-state)))]
      (spit "resources/public/manifest.json" (build.create-manifest/render outputs))
      (spit "resources/public/index.html" (build.create-index/render outputs))
      (spit "resources/public/worker.js" (build.create-worker/render outputs))))
  build-state)
