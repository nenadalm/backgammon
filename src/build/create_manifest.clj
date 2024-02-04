(ns build.create-manifest
  (:require
   [jsonista.core :as j]
   [build.util :as u]))

(defn render [module-id->output-name]
  (j/write-value-as-string
   {:name "Backgammon"
    :description "Backgammon game with local multiplayer (no single player)."
    :icons [{:src (u/asset "img/icon.svg" module-id->output-name)
             :sizes "any"
             :type "image/svg+xml"}
            {:src (u/asset "img/icon.svg" module-id->output-name)
             :sizes "any"
             :type "image/svg+xml"
             :purpose "maskable"}
            {:src (u/asset "img/icon_512.png" module-id->output-name)
             :sizes "512x512"
             :type "image/png"
             :purpose "maskable"}]
    :background_color "#121212"
    :theme_color "#121212"
    :display "fullscreen"
    :start_url "index.html"
    :orientation "landscape-primary"}))
