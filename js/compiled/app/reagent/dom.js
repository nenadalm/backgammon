// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__14258 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14259 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14259);

try{var G__14260 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__14261 = container;
var G__14262 = (function (){
var _STAR_always_update_STAR__orig_val__14263 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14264 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14264);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14263);
}});
return reagent.dom.global$module$react_dom.render(G__14260,G__14261,G__14262);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14258);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__14266 = arguments.length;
switch (G__14266) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__14267 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14267,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14267,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__14271_14287 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__14272_14288 = null;
var count__14273_14289 = (0);
var i__14274_14290 = (0);
while(true){
if((i__14274_14290 < count__14273_14289)){
var vec__14281_14291 = chunk__14272_14288.cljs$core$IIndexed$_nth$arity$2(null,i__14274_14290);
var container_14292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14281_14291,(0),null);
var comp_14293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14281_14291,(1),null);
reagent.dom.re_render_component(comp_14293,container_14292);


var G__14294 = seq__14271_14287;
var G__14295 = chunk__14272_14288;
var G__14296 = count__14273_14289;
var G__14297 = (i__14274_14290 + (1));
seq__14271_14287 = G__14294;
chunk__14272_14288 = G__14295;
count__14273_14289 = G__14296;
i__14274_14290 = G__14297;
continue;
} else {
var temp__5804__auto___14298 = cljs.core.seq(seq__14271_14287);
if(temp__5804__auto___14298){
var seq__14271_14299__$1 = temp__5804__auto___14298;
if(cljs.core.chunked_seq_QMARK_(seq__14271_14299__$1)){
var c__4649__auto___14300 = cljs.core.chunk_first(seq__14271_14299__$1);
var G__14301 = cljs.core.chunk_rest(seq__14271_14299__$1);
var G__14302 = c__4649__auto___14300;
var G__14303 = cljs.core.count(c__4649__auto___14300);
var G__14304 = (0);
seq__14271_14287 = G__14301;
chunk__14272_14288 = G__14302;
count__14273_14289 = G__14303;
i__14274_14290 = G__14304;
continue;
} else {
var vec__14284_14305 = cljs.core.first(seq__14271_14299__$1);
var container_14306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14284_14305,(0),null);
var comp_14307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14284_14305,(1),null);
reagent.dom.re_render_component(comp_14307,container_14306);


var G__14308 = cljs.core.next(seq__14271_14299__$1);
var G__14309 = null;
var G__14310 = (0);
var G__14311 = (0);
seq__14271_14287 = G__14308;
chunk__14272_14288 = G__14309;
count__14273_14289 = G__14310;
i__14274_14290 = G__14311;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
