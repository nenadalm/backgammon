(ns app.components.icons.views
  (:require
   [goog.string :as gstring]))

(defn close []
  [:span (gstring/unescapeEntities "&#10799;")])
