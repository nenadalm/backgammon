// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13498){
var map__13499 = p__13498;
var map__13499__$1 = cljs.core.__destructure_map(map__13499);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13499__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13499__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13499__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13499__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__13500_13524 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__13501_13525 = null;
var count__13502_13526 = (0);
var i__13503_13527 = (0);
while(true){
if((i__13503_13527 < count__13502_13526)){
var vec__13514_13528 = chunk__13501_13525.cljs$core$IIndexed$_nth$arity$2(null,i__13503_13527);
var k_13529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13514_13528,(0),null);
var cb_13530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13514_13528,(1),null);
try{var G__13518_13531 = cljs.core.deref(re_frame.trace.traces);
(cb_13530.cljs$core$IFn$_invoke$arity$1 ? cb_13530.cljs$core$IFn$_invoke$arity$1(G__13518_13531) : cb_13530.call(null,G__13518_13531));
}catch (e13517){var e_13532 = e13517;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13529,"while storing",cljs.core.deref(re_frame.trace.traces),e_13532], 0));
}

var G__13533 = seq__13500_13524;
var G__13534 = chunk__13501_13525;
var G__13535 = count__13502_13526;
var G__13536 = (i__13503_13527 + (1));
seq__13500_13524 = G__13533;
chunk__13501_13525 = G__13534;
count__13502_13526 = G__13535;
i__13503_13527 = G__13536;
continue;
} else {
var temp__5804__auto___13537 = cljs.core.seq(seq__13500_13524);
if(temp__5804__auto___13537){
var seq__13500_13538__$1 = temp__5804__auto___13537;
if(cljs.core.chunked_seq_QMARK_(seq__13500_13538__$1)){
var c__4649__auto___13539 = cljs.core.chunk_first(seq__13500_13538__$1);
var G__13540 = cljs.core.chunk_rest(seq__13500_13538__$1);
var G__13541 = c__4649__auto___13539;
var G__13542 = cljs.core.count(c__4649__auto___13539);
var G__13543 = (0);
seq__13500_13524 = G__13540;
chunk__13501_13525 = G__13541;
count__13502_13526 = G__13542;
i__13503_13527 = G__13543;
continue;
} else {
var vec__13519_13544 = cljs.core.first(seq__13500_13538__$1);
var k_13545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13519_13544,(0),null);
var cb_13546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13519_13544,(1),null);
try{var G__13523_13547 = cljs.core.deref(re_frame.trace.traces);
(cb_13546.cljs$core$IFn$_invoke$arity$1 ? cb_13546.cljs$core$IFn$_invoke$arity$1(G__13523_13547) : cb_13546.call(null,G__13523_13547));
}catch (e13522){var e_13548 = e13522;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13545,"while storing",cljs.core.deref(re_frame.trace.traces),e_13548], 0));
}

var G__13549 = cljs.core.next(seq__13500_13538__$1);
var G__13550 = null;
var G__13551 = (0);
var G__13552 = (0);
seq__13500_13524 = G__13549;
chunk__13501_13525 = G__13550;
count__13502_13526 = G__13551;
i__13503_13527 = G__13552;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
