(ns nenadalm.clojure-utils.assets
  (:require
   [clojure.java.io :as io]))

(defn- sha-1 [s]
  (let [c (java.security.MessageDigest/getInstance "sha-1")]
    (.update c (.getBytes s "utf-8"))
    (reduce (fn [s b] (str s (format "%02x" b))) "" (.digest c))))

(defn- file-hash [f]
  (-> f
      slurp
      sha-1))

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

(defn- file-name->file-name-and-extension [s]
  (let [ext-index (.lastIndexOf s ".")]
    (if (== -1 ext-index)
      [s]
      [(.substring s 0 ext-index) (.substring s (inc ext-index))])))

(defn- hashed-asset [asset hash]
  (let [asset-path (path asset)
        dir (.getParent asset-path)
        asset-file-name (.getFileName asset-path)
        [asset-name asset-ext] (file-name->file-name-and-extension (.toString asset-file-name))
        target (str (when dir (str dir "/")) asset-name "." hash (when asset-ext (str "." asset-ext)))]
    target))

(comment
  (hashed-asset "app" "hash")
  (hashed-asset "app.js" "hash")
  (hashed-asset "js/app.js" "hash")
  ;;
  )

(defn- symlink-assets [{:keys [public-dir assets]}]
  (doseq [[asset src] assets]
    (symlink (str public-dir "/" asset) src))
  {})

(defn- hash-assets [{:keys [public-dir assets]}]
  (reduce
   (fn [acc [asset src]]
     (let [hash (file-hash src)
           asset-path (hashed-asset asset hash)
           target (str public-dir "/" asset-path)]
       (copy src target)
       (assoc acc asset asset-path)))
   {}
   assets))

(defn create
  "opts:
  - `:public-dir`
  - `:assets` - map where key is asset path and value file path"
  [build-state asset-opts]
  (case (:shadow.build/mode build-state)
    :release (hash-assets asset-opts)
    (symlink-assets asset-opts)))

(defn from-modules
  "opts:
  - `:public-dir`"
  [build-state {:keys [public-dir]}]
  (let [output-dir (get-in build-state [:shadow.build/config :output-dir])
        path-prefix (str (.relativize
                          (path public-dir)
                          (path output-dir))
                         "/")]
    (-> (group-by (fn [m]
                    (str path-prefix (m :module-name)))
                  (:shadow.build.closure/modules build-state))
        (update-vals (fn [coll]
                       (str path-prefix (-> coll first :output-name)))))))
