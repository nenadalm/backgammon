// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.db.checkers_per_player = (15);
app.db.winner = (function app$db$winner(game){
var map__13854 = game;
var map__13854__$1 = cljs.core.__destructure_map(map__13854);
var bear_off = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,cljs.core.cst$kw$bear_DASH_off);
if((app.db.checkers_per_player === cljs.core.count(cljs.core.cst$kw$p1.cljs$core$IFn$_invoke$arity$1(bear_off)))){
return cljs.core.cst$kw$p1;
} else {
if((app.db.checkers_per_player === cljs.core.count(cljs.core.cst$kw$p2.cljs$core$IFn$_invoke$arity$1(bear_off)))){
return cljs.core.cst$kw$p2;
} else {
return null;

}
}
});
app.db.game_end_QMARK_ = (function app$db$game_end_QMARK_(game){
return cljs.core.boolean$(app.db.winner(game));
});
app.db.pop_selected_point = (function app$db$pop_selected_point(game){
var selected_point = cljs.core.cst$kw$selected_DASH_point.cljs$core$IFn$_invoke$arity$1(game);
var G__13855 = selected_point;
switch (G__13855) {
case (0):
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bar,cljs.core.cst$kw$p2], null),cljs.core.pop);

break;
case (25):
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bar,cljs.core.cst$kw$p1], null),cljs.core.pop);

break;
default:
var checkers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point_DASH__GT_checkers,selected_point], null));
if(((1) === cljs.core.count(checkers))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,cljs.core.cst$kw$point_DASH__GT_checkers,cljs.core.dissoc,selected_point);
} else {
return cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point_DASH__GT_checkers,selected_point], null),cljs.core.pop(checkers));
}

}
});
app.db.roll_die = (function app$db$roll_die(){
return (cljs.core.rand_int((6)) + (1));
});
app.db.roll = (function app$db$roll(game){
var roll1 = app.db.roll_die();
var roll2 = app.db.roll_die();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game,cljs.core.cst$kw$used_DASH_moves,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rolls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roll1,roll2], null),cljs.core.cst$kw$available_DASH_moves,(((roll1 === roll2))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [roll1,roll2,roll1,roll2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roll1,roll2], null))], 0));
});
app.db.move_direction = (function app$db$move_direction(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$p1)){
return (-1);
} else {
return (1);
}
});
app.db.bear_off_point = (function app$db$bear_off_point(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$p1)){
return (0);
} else {
return (25);
}
});
app.db.bar_point = (function app$db$bar_point(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$p1)){
return (25);
} else {
return (0);
}
});
