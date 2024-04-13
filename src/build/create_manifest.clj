(ns build.create-manifest
  (:require
   [jsonista.core :as j]
   [build.util :as u]
   [build.config :as c]))

(defn render [module-id->output-name]
  (j/write-value-as-string
   {:name c/name
    :description c/description
    :categories ["games"]
    :icons [{:src (u/asset "img/icon.svg" module-id->output-name)
             :sizes "any"
             :type "image/svg+xml"}
            {:src (u/asset "img/icon.svg" module-id->output-name)
             :sizes "any"
             :type "image/svg+xml"
             :purpose "maskable"}
            {:src (u/asset "img/icon_192.png" module-id->output-name)
             :sizes "192x192"
             :type "image/png"
             :purpose "maskable"}
            {:src (u/asset "img/icon_512.png" module-id->output-name)
             :sizes "512x512"
             :type "image/png"
             :purpose "maskable"}]
    :screenshots [{:src (u/asset "img/screenshot_1.png" module-id->output-name)
                   :sizes "1334x750"
                   :type "image/png"}
                  {:src (u/asset "img/screenshot_2.png" module-id->output-name)
                   :sizes "1334x750"
                   :type "image/png"}]
    :background_color "#121212"
    :theme_color "#121212"
    :display "fullscreen"
    :start_url "index.html"
    :orientation "landscape-primary"}))
