// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12397__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12398__i = 0, G__12398__a = new Array(arguments.length -  0);
while (G__12398__i < G__12398__a.length) {G__12398__a[G__12398__i] = arguments[G__12398__i + 0]; ++G__12398__i;}
  args = new cljs.core.IndexedSeq(G__12398__a,0,null);
} 
return G__12397__delegate.call(this,args);};
G__12397.cljs$lang$maxFixedArity = 0;
G__12397.cljs$lang$applyTo = (function (arglist__12399){
var args = cljs.core.seq(arglist__12399);
return G__12397__delegate(args);
});
G__12397.cljs$core$IFn$_invoke$arity$variadic = G__12397__delegate;
return G__12397;
})()
);

(o.error = (function() { 
var G__12400__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12401__i = 0, G__12401__a = new Array(arguments.length -  0);
while (G__12401__i < G__12401__a.length) {G__12401__a[G__12401__i] = arguments[G__12401__i + 0]; ++G__12401__i;}
  args = new cljs.core.IndexedSeq(G__12401__a,0,null);
} 
return G__12400__delegate.call(this,args);};
G__12400.cljs$lang$maxFixedArity = 0;
G__12400.cljs$lang$applyTo = (function (arglist__12402){
var args = cljs.core.seq(arglist__12402);
return G__12400__delegate(args);
});
G__12400.cljs$core$IFn$_invoke$arity$variadic = G__12400__delegate;
return G__12400;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
