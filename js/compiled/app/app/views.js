// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('app.events');
goog.require('app.subs');
goog.require('app.components.icons.views');
app.views.point_up_img = (function app$views$point_up_img(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$point_DASH_img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null),cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$preserve_DASH_aspect_DASH_ratio,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,"0,100 100,100 50,0"], null)], null)], null);
});
app.views.point_down_img = (function app$views$point_down_img(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$point_DASH_img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null),cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$preserve_DASH_aspect_DASH_ratio,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,"0,0 100,0 50,100"], null)], null)], null);
});
app.views.point = (function app$views$point(p__14247){
var map__14248 = p__14247;
var map__14248__$1 = cljs.core.__destructure_map(map__14248);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14248__$1,cljs.core.cst$kw$direction);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14248__$1,cljs.core.cst$kw$point);
var data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_point,point], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["",(cljs.core.truth_(cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(data))?" point--selected":null)].join(''),cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_click_DASH_point,point], null));
})], null),(function (){var G__14249 = direction;
var G__14249__$1 = (((G__14249 instanceof cljs.core.Keyword))?G__14249.fqn:null);
switch (G__14249__$1) {
case "up":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point_up_img], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point_down_img], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14249__$1)].join('')));

}
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checkers], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (checker){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["checker-",cljs.core.name(checker)].join('')], null)], null);
})),cljs.core.cst$kw$checkers.cljs$core$IFn$_invoke$arity$1(data))], null);
});
app.views.die = (function app$views$die(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$die,x], null);
});
app.views.dice = (function app$views$dice(){
var vec__14251 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_rolls], null)));
var roll1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14251,(0),null);
var roll2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14251,(1),null);
var active_player = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_active_DASH_player], null)));
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p1,active_player))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$right,"25%"], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"25%",cljs.core.cst$kw$transform,"rotate(180deg)"], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$rolls,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.die,roll1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.die,roll2], null)], null);
});
app.views.winner = (function app$views$winner(){
var temp__5804__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_winner], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var winner = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$winner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p1,winner))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$right,"calc(25% - 5rem)"], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"calc(25% - 5rem)",cljs.core.cst$kw$transform,"rotate(180deg)"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.crown], null)], null);
} else {
return null;
}
});
app.views.status_bar = (function app$views$status_bar(){
var map__14254 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_status_DASH_bar], null)));
var map__14254__$1 = cljs.core.__destructure_map(map__14254);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14254__$1,cljs.core.cst$kw$active_DASH_player);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14254__$1,cljs.core.cst$kw$available_DASH_moves);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$status_DASH_bar,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$active_DASH_player_DASH_info,"Active player:",goog.string.unescapeEntities("&nbsp;"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["checker-",cljs.core.name(active_player)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$available_DASH_moves_DASH_info,"Available moves: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",available_moves)], null)], null);
});
app.views.bar = (function app$views$bar(p__14255){
var map__14256 = p__14255;
var map__14256__$1 = cljs.core.__destructure_map(map__14256);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14256__$1,cljs.core.cst$kw$player);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14256__$1,cljs.core.cst$kw$direction);
var checkers = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_bar,player], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bar,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bar_DASH_checkers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["bar-checkers-",cljs.core.name(direction)].join('')], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (checker){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["checker-",cljs.core.name(checker)].join('')], null)], null);
})),checkers)], null);
});
app.views.tray_checkers = (function app$views$tray_checkers(player,direction){
var checkers = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_tray,player], null)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tray_DASH_checkers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["tray-checkers-",cljs.core.name(direction)].join('')], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (checker){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$checker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["checker-",cljs.core.name(checker)].join('')], null)], null);
})),checkers);
});
app.views.tray = (function app$views$tray(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$tray,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_bear_DASH_off], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.tray_checkers,cljs.core.cst$kw$p2,cljs.core.cst$kw$down], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tray_DASH_label,"Bear off area"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.tray_checkers,cljs.core.cst$kw$p1,cljs.core.cst$kw$up], null)], null);
});
app.views.game = (function app$views$game(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$table,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$game_DASH_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.status_bar], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$game_DASH_line,(function (){var iter__4622__auto__ = (function app$views$game_$_iter__14257(s__14258){
return (new cljs.core.LazySeq(null,(function (){
var s__14258__$1 = s__14258;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14258__$1);
if(temp__5804__auto__){
var s__14258__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14258__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14258__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14260 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14259 = (0);
while(true){
if((i__14259 < size__4621__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14259);
cljs.core.chunk_append(b__14260,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$down,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__14273 = (i__14259 + (1));
i__14259 = G__14273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14260),app$views$game_$_iter__14257(cljs.core.chunk_rest(s__14258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14260),null);
}
} else {
var n = cljs.core.first(s__14258__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$down,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),app$views$game_$_iter__14257(cljs.core.rest(s__14258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((13),(19)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$down,cljs.core.cst$kw$player,cljs.core.cst$kw$p1], null)], null),(function (){var iter__4622__auto__ = (function app$views$game_$_iter__14261(s__14262){
return (new cljs.core.LazySeq(null,(function (){
var s__14262__$1 = s__14262;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14262__$1);
if(temp__5804__auto__){
var s__14262__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14262__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14262__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14264 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14263 = (0);
while(true){
if((i__14263 < size__4621__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14263);
cljs.core.chunk_append(b__14264,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$down,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__14274 = (i__14263 + (1));
i__14263 = G__14274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14264),app$views$game_$_iter__14261(cljs.core.chunk_rest(s__14262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14264),null);
}
} else {
var n = cljs.core.first(s__14262__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$down,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),app$views$game_$_iter__14261(cljs.core.rest(s__14262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((19),(25)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$center_DASH_bar,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$menu_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$menu], null));
})], null),"M\ne\nn\nu"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$game_DASH_line,(function (){var iter__4622__auto__ = (function app$views$game_$_iter__14265(s__14266){
return (new cljs.core.LazySeq(null,(function (){
var s__14266__$1 = s__14266;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14266__$1);
if(temp__5804__auto__){
var s__14266__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14266__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14266__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14268 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14267 = (0);
while(true){
if((i__14267 < size__4621__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14267);
cljs.core.chunk_append(b__14268,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$up,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__14275 = (i__14267 + (1));
i__14267 = G__14275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14268),app$views$game_$_iter__14265(cljs.core.chunk_rest(s__14266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14268),null);
}
} else {
var n = cljs.core.first(s__14266__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$up,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),app$views$game_$_iter__14265(cljs.core.rest(s__14266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((7),(13))));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$up,cljs.core.cst$kw$player,cljs.core.cst$kw$p2], null)], null),(function (){var iter__4622__auto__ = (function app$views$game_$_iter__14269(s__14270){
return (new cljs.core.LazySeq(null,(function (){
var s__14270__$1 = s__14270;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14270__$1);
if(temp__5804__auto__){
var s__14270__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14270__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14270__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14272 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14271 = (0);
while(true){
if((i__14271 < size__4621__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14271);
cljs.core.chunk_append(b__14272,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$up,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__14276 = (i__14271 + (1));
i__14271 = G__14276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14272),app$views$game_$_iter__14269(cljs.core.chunk_rest(s__14270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14272),null);
}
} else {
var n = cljs.core.first(s__14270__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,cljs.core.cst$kw$up,cljs.core.cst$kw$point,n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),app$views$game_$_iter__14269(cljs.core.rest(s__14270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7))));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.dice], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.winner], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.tray], null)], null)], null);
});
app.views.menu = (function app$views$menu(){
var app_info = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_app_DASH_info], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu_DASH__DASH_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_open_DASH_page,cljs.core.cst$kw$game], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.icons.views.close], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$action,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$events_SLASH_reset], null));
})], null),"Reset game"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu_DASH__DASH_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$rules_DASH_link,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://www.bkgm.com/rules.html"], null),"Rules"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$issue_DASH_link,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/nenadalm/backgammon/issues"], null),"Report issue / request feature"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app_DASH_version,["Version: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(app_info))].join('')], null)], null)], null);
});
app.views.app = (function app$views$app(){
var G__14277 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$subs_SLASH_page], null)));
var G__14277__$1 = (((G__14277 instanceof cljs.core.Keyword))?G__14277.fqn:null);
switch (G__14277__$1) {
case "menu":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.menu], null);

break;
case "game":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.game], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14277__$1)].join('')));

}
});
