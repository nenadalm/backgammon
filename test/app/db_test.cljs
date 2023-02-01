(ns app.db-test
  (:require
   [clojure.test :refer [deftest is]]
   [app.db :as db]))

(deftest game-end?-test
  (is (false? (db/game-end? {:bear-off {:p1 [:p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1]
                                        :p2 []}})))
  (is (true? (db/game-end? {:bear-off {:p1 [:p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1 :p1]
                                       :p2 []}}))))
