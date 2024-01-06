(ns build.create-index
  (:require
   [clojure.java.shell :as shell]
   [clojure.string :as str]
   [build.util :as u]))

(defn- sh [& args]
  (let [result (apply shell/sh args)]
    (if (= 0 (:exit result))
      (str/trim-newline (:out result))
      (throw (ex-info "Shell command failed." {:result result})))))

(defn- app-version []
  (sh "git" "rev-parse" "HEAD"))

(defn render [module-id->output-name]
  (str
   "<!doctype html>
<html lang=\"en-US\">
  <head>
    <meta charset=\"utf-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <meta name=\"theme-color\" content=\"#121212\">
    <meta name=\"app-version\" content=\"" (app-version) "\">
    <meta name=\"description\" content=\"Backgammon app that works offline.\">
    <title>Backgammon</title>
    <link rel=\"stylesheet\" href=\"" (u/asset "css/styles.css" module-id->output-name) "\">
    <link rel=\"icon\" href=\"" (u/asset "img/icon.svg" module-id->output-name) "\" type=\"image/svg+xml\">
    <link rel=\"apple-touch-icon\" href=\"" (u/asset "img/icon_192.png" module-id->output-name) "\">
    <link rel=\"manifest\" href=\"" (u/asset "manifest.json" module-id->output-name) "\">
  </head>
  <body>
    <div id=\"app\"></div>
    <script src=\"" (u/asset "js/app.js" module-id->output-name) "\"></script>
    <script>app.core.init();</script>
  </body>
</html>"))
