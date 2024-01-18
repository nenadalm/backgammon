# Clojure utils

This repo contains various utils, guides, … on writing apps using Clojure. It’s not meant to be anything universal, just some stuff I would copy-paste among projects without it + some guides/notes on how I do some things.

## App version

App version should be specified using [meta element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta).

example
```html
<meta name="app-version" content="1">
```

## App state

Should be fully serializable to support autosave feature (`nenadalm.clojure-utils.re-frame.autosave`). Without this feature, app state is lost when app is closed (can easilly happen accidentaly).

## Cache busting

Shadow cljs [build hooks](https://shadow-cljs.github.io/docs/UsersGuide.html#build-hooks) should be used to render html and other resources to make everything work smoothly. `nenadalm.clojure-utils.assets` ns helps with asset names.
