(ns build.util
  (:require
   [clojure.java.io :as io]
   [clojure.edn]))

(def ^:private module-id->output-name (atom nil))

(defn- output-name [module-id]
  (when module-id
    (when-not @module-id->output-name
      (reset!
       module-id->output-name
       (into {}
             (map (juxt :module-id :output-name))
             (clojure.edn/read-string (slurp (io/resource "public/js/manifest.edn"))))))
    (when-let [s (@module-id->output-name module-id)]
      (str "js/" s))))

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

(defn- module-id [path]
  (-> (re-matches #"^js/(.+)\.js" path)
      second
      keyword))

(defn asset [path]
  (or
   (-> (module-id path)
       output-name)
   (str path "?v=" (asset-hash path))))
