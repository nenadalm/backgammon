(ns build.create-manifest
  (:require
   [jsonista.core :as j]
   [build.util :as u]))

(defn- render []
  (j/write-value-as-string
   {:name "Backgammon"
    :icons [{:src (u/asset "img/icon.svg")
             :sizes "any"
             :type "image/svg+xml"}
            {:src (u/asset "img/icon.svg")
             :sizes "any"
             :type "image/svg+xml"
             :purpose "maskable"}
            {:src (u/asset "img/icon_512.png")
             :sizes "512x512"
             :type "image/png"
             :purpose "maskable"}]
    :background_color "#121212"
    :theme_color "#121212"
    :display "fullscreen"
    :start_url "index.html"}))

(defn -main [& _]
  (println (render)))
