(ns app.events-test
  (:require
   [clojure.test :refer [deftest is testing]]
   [app.events :as events]))

(deftest use-move-test
  (is (= {:used-moves [1]
          :available-moves [2 3]
          :active-player :p1
          :point->checkers {24 [:p1]}}
         (events/use-move {:used-moves []
                           :available-moves [1 2 3]
                           :active-player :p1
                           :point->checkers {24 [:p1]}}
                          1)))
  (is (= {:used-moves [2]
          :available-moves [1 3]
          :active-player :p1
          :point->checkers {24 [:p1]}}
         (events/use-move {:used-moves []
                           :available-moves [1 2 3]
                           :active-player :p1
                           :point->checkers {24 [:p1]}}
                          2)))
  (is (= {:used-moves [3]
          :available-moves [1 2]
          :active-player :p1
          :point->checkers {24 [:p1]}}
         (events/use-move {:used-moves []
                           :available-moves [1 2 3]
                           :active-player :p1
                           :point->checkers {24 [:p1]}}
                          3))))

(deftest has-valid-move?-test
  (testing "entering"
    (is (true? (events/has-valid-move?
                {:bar {:p1 [:p1]}
                 :available-moves [1]
                 :active-player :p1
                 :point->checkers {24 [:p1]
                                   23 [:p2 :p2]}}))))
  (testing "not entering"
    (is (false? (events/has-valid-move?
                 {:bar {:p1 [:p1]}
                  :available-moves [1]
                  :active-player :p1
                  :point->checkers {24 [:p2 :p2]
                                    23 [:p1]}}))))
  (testing "move to empty point"
    (is (true? (events/has-valid-move?
                {:available-moves [1]
                 :active-player :p1
                 :point->checkers {24 [:p1]}}))))
  (testing "move to point occupied by 1 opponent"
    (is (true? (events/has-valid-move?
                {:available-moves [1]
                 :active-player :p1
                 :point->checkers {24 [:p1]
                                   23 [:p2]}}))))
  (testing "move to point occupied by 2 friends"
    (is (true? (events/has-valid-move?
                {:available-moves [1]
                 :active-player :p1
                 :point->checkers {24 [:p1]
                                   23 [:p1 :p1]}}))))
  (testing "not move to point occupied by 2 opponents"
    (is (false? (events/has-valid-move?
                 {:available-moves [1]
                  :active-player :p1
                  :point->checkers {24 [:p1]
                                    23 [:p2 :p2]}}))))
  (testing "bear off"
    (is (true? (events/has-valid-move?
                {:available-moves [1]
                 :active-player :p1
                 :point->checkers {1 [:p1]}}))))
  (testing "bear off - highest point"
    (is (true? (events/has-valid-move?
                {:available-moves [6]
                 :active-player :p1
                 :point->checkers {1 [:p1]}}))))
  (testing "not bear off"
    (is (false? (events/has-valid-move?
                 {:available-moves [1]
                  :active-player :p1
                  :point->checkers {24 [:p1]
                                    23 [:p2 :p2]
                                    1 [:p1]}}))))
  (testing "not bear off - higher point blocked"
    (is (false? (events/has-valid-move?
                 {:available-moves [5]
                  :active-player :p1
                  :point->checkers {1 [:p2 :p2]
                                    4 [:p1 :p1]
                                    6 [:p1]}})))))

(deftest has-valid-move2?-test
  (testing "entering 2"
    (is (true? (events/has-valid-move2?
                {:bar {:p1 [:p1 :p1]}
                 :available-moves [1 3]
                 :active-player :p1
                 :point->checkers {24 [:p1]
                                   23 [:p2 :p2]}})))
    (is (true? (events/has-valid-move2?
                {:bar {:p1 [:p1 :p1]}
                 :available-moves [3 1]
                 :active-player :p1
                 :point->checkers {24 [:p1]
                                   23 [:p2 :p2]}}))))
  (testing "entering 2 - 2nd move blocked"
    (is (false? (events/has-valid-move2?
                 {:bar {:p1 [:p1 :p1]}
                  :available-moves [1 2]
                  :active-player :p1
                  :point->checkers {24 [:p1]
                                    23 [:p2 :p2]}})))
    (is (false? (events/has-valid-move2?
                 {:bar {:p1 [:p1 :p1]}
                  :available-moves [2 1]
                  :active-player :p1
                  :point->checkers {24 [:p1]
                                    23 [:p2 :p2]}}))))
  (testing "move to empty point with 1 checker"
    (is (true? (events/has-valid-move2?
                {:available-moves [3 1]
                 :active-player :p1
                 :point->checkers {24 [:p1 :p1]
                                   23 [:p2 :p2]}})))
    (is (true? (events/has-valid-move2?
                {:available-moves [1 3]
                 :active-player :p1
                 :point->checkers {24 [:p1 :p1]
                                   23 [:p2 :p2]}}))))
  (testing "move to point occupied with 1 opponent"
    (is (true? (events/has-valid-move2?
                {:available-moves [3 1]
                 :active-player :p1
                 :point->checkers {24 [:p1 :p1]
                                   23 [:p2 :p2]
                                   21 [:p2]}})))
    (is (true? (events/has-valid-move2?
                {:available-moves [1 3]
                 :active-player :p1
                 :point->checkers {24 [:p1 :p1]
                                   23 [:p2 :p2]
                                   21 [:p2]}}))))
  (testing "move to point occupied by 2 friends"
    (is (true? (events/has-valid-move2?
                {:available-moves [3 1]
                 :active-player :p1
                 :point->checkers {24 [:p1 :p1]
                                   23 [:p2 :p2]
                                   21 [:p1 :p1]}})))
    (is (true? (events/has-valid-move2?
                {:available-moves [1 3]
                 :active-player :p1
                 :point->checkers {24 [:p1 :p1]
                                   23 [:p2 :p2]
                                   21 [:p1 :p1]}}))))
  (testing "move to point occupied by 2 opponents"
    (is (false? (events/has-valid-move2?
                 {:available-moves [3 1]
                  :active-player :p1
                  :point->checkers {24 [:p1 :p1]
                                    23 [:p2 :p2]
                                    21 [:p2 :p2]}})))
    (is (false? (events/has-valid-move2?
                 {:available-moves [1 3]
                  :active-player :p1
                  :point->checkers {24 [:p1 :p1]
                                    23 [:p2 :p2]
                                    21 [:p2 :p2]}}))))
  (testing "bear off"
    (is (true? (events/has-valid-move2?
                {:available-moves [1 3]
                 :active-player :p1
                 :point->checkers {1 [:p1] 3 [:p1]}}))))
  (testing "bear off - highest point"
    (is (true? (events/has-valid-move2?
                {:available-moves [6 5]
                 :active-player :p1
                 :point->checkers {1 [:p1 :p1]}}))))
  (testing "not bear off"
    (is (false? (events/has-valid-move2?
                 {:available-moves [1 1]
                  :active-player :p1
                  :point->checkers {24 [:p1 :p1]
                                    23 [:p2 :p2]
                                    1 [:p1 :p1]}}))))
  (testing "not bear off - higher point blocked"
    (is (false? (events/has-valid-move2?
                 {:available-moves [5 4]
                  :active-player :p1
                  :point->checkers {1 [:p2 :p2]
                                    4 [:p1 :p1]
                                    6 [:p1 :p1]}})))))
