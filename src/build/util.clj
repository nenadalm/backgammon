(ns build.util
  (:require
   [clojure.java.io :as io]
   [clojure.edn]
   [clojure.java.shell :as shell]
   [clojure.string :as str]))

(defn- output-name [module-name file->output-name]
  (file->output-name module-name))

(defn- sha-1 [s]
  (let [c (java.security.MessageDigest/getInstance "sha-1")]
    (.update c (.getBytes s "utf-8"))
    (reduce (fn [s b] (str s (format "%02x" b))) "" (.digest c))))

(defn file-hash [f]
  (-> f
      slurp
      sha-1))

(defn asset-hash [path]
  (if-let [url (io/resource (str "public/" path))]
    (file-hash url)
    (throw (ex-info "Asset not found." {:path path}))))

(defn asset [path module-id->output-name]
  (or
   (output-name path module-id->output-name)
   (str path "?v=" (asset-hash path))))

(defn- sh [& args]
  (let [result (apply shell/sh args)]
    (if (= 0 (:exit result))
      (str/trim-newline (:out result))
      (throw (ex-info "Shell command failed." {:result result})))))

(defn app-version []
  (sh "git" "rev-parse" "HEAD"))
