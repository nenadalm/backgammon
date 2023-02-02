.DEFAULT_GOAL := all

node_modules: yarn.lock
	yarn install

resources/public/js/app.js: node_modules
	yarn release

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
test: node_modules
	clojure -M:cljfmt check
	clojure -M:clj-kondo
	yarn test
