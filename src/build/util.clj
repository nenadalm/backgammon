(ns build.util
  (:require
   [clojure.java.io :as io]
   [clojure.edn]))

(defn- output-name [module-name module-id->output-name]
  (when module-name
    (when-let [s (module-id->output-name module-name)]
      (str "js/" s))))

(defn- sha-1 [s]
  (let [c (java.security.MessageDigest/getInstance "sha-1")]
    (.update c (.getBytes s "utf-8"))
    (reduce (fn [s b] (str s (format "%02x" b))) "" (.digest c))))

(defn- file-hash [f]
  (-> f
      slurp
      sha-1))

(defn asset-hash [path]
  (if-let [url (io/resource (str "public/" path))]
    (file-hash url)
    (throw (ex-info "Asset not found." {:path path}))))

(defn- module-name [path]
  (-> (re-matches #"^js/(.+\.js)" path)
      second))

(defn asset [path module-id->output-name]
  (or
   (-> (module-name path)
       (output-name module-id->output-name))
   (str path "?v=" (asset-hash path))))
