(ns build.create-worker
  (:require
   [clojure.string :as str]
   [build.util :as u]))

(defn- urls-to-cache [module-id->output-name]
  ["index.html"
   "manifest.json"
   "img/icon.svg"
   (u/asset "js/app.js" module-id->output-name)
   (u/asset "css/styles.css" module-id->output-name)])

(defn render [module-id->output-name]
  (-> (slurp "./resources/private/worker.js")
      (str/replace
       #".*prop:urlsToCache.*"
       (str
        "const urlsToCache = ["
        (str/join "," (mapv #(str "\"" % "\"") (urls-to-cache module-id->output-name)))
        "];"))
      (str/replace
       #".*prop:relatedAppVersion.*"
       (str
        "const relatedAppVersion = \"" (u/app-version) "\";"))))
