.DEFAULT_GOAL := all

resources/public/js/app.js:
	clojure -M -m figwheel.main -bo min

resources/public/manifest.json:
	clojure -M -m build.create-manifest > $@

resources/public/index.html: resources/public/js/app.js resources/public/manifest.json
	clojure -M -m build.create-index > $@

resources/public/worker.js: resources/public/index.html
	clojure -M -m build.create-worker > $@

.PHONY: clean
clean:
	rm -rf resources/public/js resources/public/index.html resources/public/worker.js resources/public/manifest.json

.PHONY: all
all: resources/public/worker.js

.PHONY: test
test:
	clojure -M:cljfmt check
	clojure -M:clj-kondo
	clojure -M -m figwheel.main -t nodejs -c app.run-tests
	node target/node/main.js
