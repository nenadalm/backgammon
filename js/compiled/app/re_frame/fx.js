// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13694 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13695 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13695);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___13730 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13730)){
var new_db_13731 = temp__5804__auto___13730;
var fexpr__13696_13732 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__13696_13732.cljs$core$IFn$_invoke$arity$1 ? fexpr__13696_13732.cljs$core$IFn$_invoke$arity$1(new_db_13731) : fexpr__13696_13732.call(null,new_db_13731));
} else {
}

var seq__13697 = cljs.core.seq(effects_without_db);
var chunk__13698 = null;
var count__13699 = (0);
var i__13700 = (0);
while(true){
if((i__13700 < count__13699)){
var vec__13707 = chunk__13698.cljs$core$IIndexed$_nth$arity$2(null,i__13700);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(1),null);
var temp__5802__auto___13733 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13733)){
var effect_fn_13734 = temp__5802__auto___13733;
(effect_fn_13734.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13734.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13734.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13735 = seq__13697;
var G__13736 = chunk__13698;
var G__13737 = count__13699;
var G__13738 = (i__13700 + (1));
seq__13697 = G__13735;
chunk__13698 = G__13736;
count__13699 = G__13737;
i__13700 = G__13738;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13697);
if(temp__5804__auto__){
var seq__13697__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13697__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13697__$1);
var G__13739 = cljs.core.chunk_rest(seq__13697__$1);
var G__13740 = c__4649__auto__;
var G__13741 = cljs.core.count(c__4649__auto__);
var G__13742 = (0);
seq__13697 = G__13739;
chunk__13698 = G__13740;
count__13699 = G__13741;
i__13700 = G__13742;
continue;
} else {
var vec__13710 = cljs.core.first(seq__13697__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(1),null);
var temp__5802__auto___13743 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13743)){
var effect_fn_13744 = temp__5802__auto___13743;
(effect_fn_13744.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13744.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13744.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13745 = cljs.core.next(seq__13697__$1);
var G__13746 = null;
var G__13747 = (0);
var G__13748 = (0);
seq__13697 = G__13745;
chunk__13698 = G__13746;
count__13699 = G__13747;
i__13700 = G__13748;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13476__auto___13749 = re_frame.interop.now();
var duration__13477__auto___13750 = (end__13476__auto___13749 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13477__auto___13750,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13476__auto___13749);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13694);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5804__auto___13751 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13751)){
var new_db_13752 = temp__5804__auto___13751;
var fexpr__13713_13753 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__13713_13753.cljs$core$IFn$_invoke$arity$1 ? fexpr__13713_13753.cljs$core$IFn$_invoke$arity$1(new_db_13752) : fexpr__13713_13753.call(null,new_db_13752));
} else {
}

var seq__13714 = cljs.core.seq(effects_without_db);
var chunk__13715 = null;
var count__13716 = (0);
var i__13717 = (0);
while(true){
if((i__13717 < count__13716)){
var vec__13724 = chunk__13715.cljs$core$IIndexed$_nth$arity$2(null,i__13717);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13724,(1),null);
var temp__5802__auto___13754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13754)){
var effect_fn_13755 = temp__5802__auto___13754;
(effect_fn_13755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13756 = seq__13714;
var G__13757 = chunk__13715;
var G__13758 = count__13716;
var G__13759 = (i__13717 + (1));
seq__13714 = G__13756;
chunk__13715 = G__13757;
count__13716 = G__13758;
i__13717 = G__13759;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13714);
if(temp__5804__auto__){
var seq__13714__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13714__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13714__$1);
var G__13760 = cljs.core.chunk_rest(seq__13714__$1);
var G__13761 = c__4649__auto__;
var G__13762 = cljs.core.count(c__4649__auto__);
var G__13763 = (0);
seq__13714 = G__13760;
chunk__13715 = G__13761;
count__13716 = G__13762;
i__13717 = G__13763;
continue;
} else {
var vec__13727 = cljs.core.first(seq__13714__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,(1),null);
var temp__5802__auto___13764 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13764)){
var effect_fn_13765 = temp__5802__auto___13764;
(effect_fn_13765.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13765.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13765.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13766 = cljs.core.next(seq__13714__$1);
var G__13767 = null;
var G__13768 = (0);
var G__13769 = (0);
seq__13714 = G__13766;
chunk__13715 = G__13767;
count__13716 = G__13768;
i__13717 = G__13769;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13770){
var map__13771 = p__13770;
var map__13771__$1 = cljs.core.__destructure_map(map__13771);
var effect = map__13771__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13771__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13771__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__13772 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13773 = null;
var count__13774 = (0);
var i__13775 = (0);
while(true){
if((i__13775 < count__13774)){
var effect = chunk__13773.cljs$core$IIndexed$_nth$arity$2(null,i__13775);
re_frame.fx.dispatch_later(effect);


var G__13776 = seq__13772;
var G__13777 = chunk__13773;
var G__13778 = count__13774;
var G__13779 = (i__13775 + (1));
seq__13772 = G__13776;
chunk__13773 = G__13777;
count__13774 = G__13778;
i__13775 = G__13779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13772);
if(temp__5804__auto__){
var seq__13772__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13772__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13772__$1);
var G__13780 = cljs.core.chunk_rest(seq__13772__$1);
var G__13781 = c__4649__auto__;
var G__13782 = cljs.core.count(c__4649__auto__);
var G__13783 = (0);
seq__13772 = G__13780;
chunk__13773 = G__13781;
count__13774 = G__13782;
i__13775 = G__13783;
continue;
} else {
var effect = cljs.core.first(seq__13772__$1);
re_frame.fx.dispatch_later(effect);


var G__13784 = cljs.core.next(seq__13772__$1);
var G__13785 = null;
var G__13786 = (0);
var G__13787 = (0);
seq__13772 = G__13784;
chunk__13773 = G__13785;
count__13774 = G__13786;
i__13775 = G__13787;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13788 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13789 = null;
var count__13790 = (0);
var i__13791 = (0);
while(true){
if((i__13791 < count__13790)){
var vec__13798 = chunk__13789.cljs$core$IIndexed$_nth$arity$2(null,i__13791);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13798,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13798,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13804 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13804)){
var effect_fn_13805 = temp__5802__auto___13804;
(effect_fn_13805.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13805.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13805.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13806 = seq__13788;
var G__13807 = chunk__13789;
var G__13808 = count__13790;
var G__13809 = (i__13791 + (1));
seq__13788 = G__13806;
chunk__13789 = G__13807;
count__13790 = G__13808;
i__13791 = G__13809;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13788);
if(temp__5804__auto__){
var seq__13788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13788__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13788__$1);
var G__13810 = cljs.core.chunk_rest(seq__13788__$1);
var G__13811 = c__4649__auto__;
var G__13812 = cljs.core.count(c__4649__auto__);
var G__13813 = (0);
seq__13788 = G__13810;
chunk__13789 = G__13811;
count__13790 = G__13812;
i__13791 = G__13813;
continue;
} else {
var vec__13801 = cljs.core.first(seq__13788__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13801,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13801,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13814 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13814)){
var effect_fn_13815 = temp__5802__auto___13814;
(effect_fn_13815.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13815.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13815.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13816 = cljs.core.next(seq__13788__$1);
var G__13817 = null;
var G__13818 = (0);
var G__13819 = (0);
seq__13788 = G__13816;
chunk__13789 = G__13817;
count__13790 = G__13818;
i__13791 = G__13819;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13820 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13821 = null;
var count__13822 = (0);
var i__13823 = (0);
while(true){
if((i__13823 < count__13822)){
var event = chunk__13821.cljs$core$IIndexed$_nth$arity$2(null,i__13823);
re_frame.router.dispatch(event);


var G__13824 = seq__13820;
var G__13825 = chunk__13821;
var G__13826 = count__13822;
var G__13827 = (i__13823 + (1));
seq__13820 = G__13824;
chunk__13821 = G__13825;
count__13822 = G__13826;
i__13823 = G__13827;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13820);
if(temp__5804__auto__){
var seq__13820__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13820__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13820__$1);
var G__13828 = cljs.core.chunk_rest(seq__13820__$1);
var G__13829 = c__4649__auto__;
var G__13830 = cljs.core.count(c__4649__auto__);
var G__13831 = (0);
seq__13820 = G__13828;
chunk__13821 = G__13829;
count__13822 = G__13830;
i__13823 = G__13831;
continue;
} else {
var event = cljs.core.first(seq__13820__$1);
re_frame.router.dispatch(event);


var G__13832 = cljs.core.next(seq__13820__$1);
var G__13833 = null;
var G__13834 = (0);
var G__13835 = (0);
seq__13820 = G__13832;
chunk__13821 = G__13833;
count__13822 = G__13834;
i__13823 = G__13835;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13836 = cljs.core.seq(value);
var chunk__13837 = null;
var count__13838 = (0);
var i__13839 = (0);
while(true){
if((i__13839 < count__13838)){
var event = chunk__13837.cljs$core$IIndexed$_nth$arity$2(null,i__13839);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13840 = seq__13836;
var G__13841 = chunk__13837;
var G__13842 = count__13838;
var G__13843 = (i__13839 + (1));
seq__13836 = G__13840;
chunk__13837 = G__13841;
count__13838 = G__13842;
i__13839 = G__13843;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13836);
if(temp__5804__auto__){
var seq__13836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13836__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13836__$1);
var G__13844 = cljs.core.chunk_rest(seq__13836__$1);
var G__13845 = c__4649__auto__;
var G__13846 = cljs.core.count(c__4649__auto__);
var G__13847 = (0);
seq__13836 = G__13844;
chunk__13837 = G__13845;
count__13838 = G__13846;
i__13839 = G__13847;
continue;
} else {
var event = cljs.core.first(seq__13836__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13848 = cljs.core.next(seq__13836__$1);
var G__13849 = null;
var G__13850 = (0);
var G__13851 = (0);
seq__13836 = G__13848;
chunk__13837 = G__13849;
count__13838 = G__13850;
i__13839 = G__13851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
