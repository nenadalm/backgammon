(ns nenadalm.clojure-utils.re-frame.local-storage
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-fx
 ::set
 (fn [kv]
   (doseq [[k v] kv]
     (js/window.localStorage.setItem k v))))

(re-frame/reg-cofx
 ::get
 (fn [coeffects kv]
   (reduce-kv
    (fn [m k v]
      (assoc m k (js/window.localStorage.getItem v)))
    coeffects
    kv)))

(re-frame/reg-fx
 ::remove
 (fn [ks]
   (doseq [k ks]
     (js/window.localStorage.removeItem k))))
