// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('app.config');
goog.require('app.views');
goog.require('app.events');
app.core.mount_root = (function app$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app], null),document.getElementById("app"));
});
app.core.register_worker = (function app$core$register_worker(){
var G__14320 = navigator;
var G__14320__$1 = (((G__14320 == null))?null:G__14320.serviceWorker);
if((G__14320__$1 == null)){
return null;
} else {
return G__14320__$1.register("worker.js");
}
});
app.core.dev_setup = (function app$core$dev_setup(){
if(app.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
app.core.prod_setup = (function app$core$prod_setup(){
if(app.config.debug_QMARK_){
return null;
} else {
return app.core.register_worker();
}
});
app.core.prevent_screen_lock = (function app$core$prevent_screen_lock(){
var temp__5808__auto__ = navigator.wakeLock;
if((temp__5808__auto__ == null)){
return null;
} else {
var wake_lock = temp__5808__auto__;
return wake_lock.request("screen").then((function (){
return document.addEventListener("visibilitychange",(function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",document.visibilityState)){
return wake_lock.request("screen").catch((function (___$1){
return alert("Cannot prevent screen from locking.");
}));
} else {
return null;
}
}));
})).catch((function (_){
return alert("Cannot prevent screen from locking.");
}));
}
});
app.core.init = (function app$core$init(){
app.core.dev_setup();

app.core.prod_setup();

app.core.prevent_screen_lock();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_init], null));

return app.core.mount_root();
});
goog.exportSymbol('app.core.init', app.core.init);
app.core.after_load = (function app$core$after_load(){
return app.core.mount_root();
});
