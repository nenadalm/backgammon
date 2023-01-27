// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('re_frame.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_point,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__14155){
var vec__14156 = p__14155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14156,(0),null);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14156,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checkers,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$point_DASH__GT_checkers,point], null),cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(point,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$selected_DASH_point], null)))], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_rolls,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$rolls], null),cljs.core.PersistentVector.EMPTY);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_active_DASH_player,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$active_DASH_player], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_status_DASH_bar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.select_keys(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_player,cljs.core.cst$kw$used_DASH_moves,cljs.core.cst$kw$available_DASH_moves,cljs.core.cst$kw$bar], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_bar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__14159){
var vec__14160 = p__14159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$bar,player], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_tray,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__14163){
var vec__14164 = p__14163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$bear_DASH_off,player], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_app_DASH_info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$app_DASH_info.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
app.subs.winner = (function app$subs$winner(game){
var map__14167 = game;
var map__14167__$1 = cljs.core.__destructure_map(map__14167);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14167__$1,cljs.core.cst$kw$bar);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14167__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var remaining_players = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.val),bar),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.val),point__GT_checkers));
if((cljs.core.count(remaining_players) < (2))){
var G__14168 = cljs.core.first(remaining_players);
var G__14168__$1 = (((G__14168 instanceof cljs.core.Keyword))?G__14168.fqn:null);
switch (G__14168__$1) {
case "p1":
return cljs.core.cst$kw$p2;

break;
case "p2":
return cljs.core.cst$kw$p2;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14168__$1)].join('')));

}
} else {
return null;
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$subs_SLASH_winner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return app.subs.winner(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(db));
})], 0));
