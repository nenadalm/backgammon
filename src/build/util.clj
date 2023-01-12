(ns build.util
  (:require
   [clojure.java.io :as io]))

(defn- sha-1 [s]
  (let [c (java.security.MessageDigest/getInstance "sha-1")]
    (.update c (.getBytes s "utf-8"))
    (.encodeHex (at.favre.lib.bytes.Bytes/wrap (.digest c)))))

(defn- file-hash [f]
  (-> f
      slurp
      sha-1))

(defn asset-hash [path]
  (if-let [url (io/resource (str "public/" path))]
    (file-hash url)
    (throw (ex-info "Asset not found." {:path path}))))

(defn asset [path]
  (str path "?v=" (asset-hash path)))
