// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('re_frame.core');
re_frame.core.reg_cofx(cljs.core.cst$kw$app_DASH_version,(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$app_DASH_version,(function (){var or__4223__auto__ = (function (){var G__14169 = "meta[name=app-version]";
var G__14169__$1 = (((G__14169 == null))?null:document.querySelector(G__14169));
if((G__14169__$1 == null)){
return null;
} else {
return G__14169__$1.getAttribute("content");
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "unknown";
}
})());
}));
app.events.roll_die = (function app$events$roll_die(){
return (cljs.core.rand_int((6)) + (1));
});
app.events.roll = (function app$events$roll(game){
var roll1 = app.events.roll_die();
var roll2 = app.events.roll_die();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game,cljs.core.cst$kw$used_DASH_moves,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rolls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roll1,roll2], null),cljs.core.cst$kw$available_DASH_moves,((((((6) === roll1)) && ((roll1 === roll2))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(6),(6)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roll1,roll2], null))], 0));
});
app.events.opponent = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p1], null);
app.events.entering_selected_point = (function app$events$entering_selected_point(game){
var map__14170 = game;
var map__14170__$1 = cljs.core.__destructure_map(map__14170);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14170__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14170__$1,cljs.core.cst$kw$bar);
var hitted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player);
if(cljs.core.seq(hitted)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$selected_DASH_point,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?(25):(0)));
} else {
return game;
}
});
app.events.blocked_points = (function app$events$blocked_points(game){
var map__14171 = game;
var map__14171__$1 = cljs.core.__destructure_map(map__14171);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,cljs.core.cst$kw$active_DASH_player);
var opponent = (app.events.opponent.cljs$core$IFn$_invoke$arity$1 ? app.events.opponent.cljs$core$IFn$_invoke$arity$1(active_player) : app.events.opponent.call(null,active_player));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__14172){
var vec__14173 = p__14172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(0),null);
var checkers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(1),null);
return ((((1) < cljs.core.count(checkers))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opponent,cljs.core.first(checkers))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key)),point__GT_checkers);
});
app.events.available_points = (function app$events$available_points(game){
var all_points = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
var blocked_points = app.events.blocked_points(game);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_points,blocked_points);
});
app.events.occupied_points = (function app$events$occupied_points(game){
var map__14176 = game;
var map__14176__$1 = cljs.core.__destructure_map(map__14176);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$active_DASH_player);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__14177){
var vec__14178 = p__14177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(0),null);
var checkers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.first(checkers));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__14181){
var vec__14182 = p__14181;
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(0),null);
var checkers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,cljs.core.count(checkers)], null);
}))),point__GT_checkers);
});
app.events.bear_off_active_QMARK_ = (function app$events$bear_off_active_QMARK_(game){
var map__14187 = game;
var map__14187__$1 = cljs.core.__destructure_map(map__14187);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14187__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14187__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14187__$1,cljs.core.cst$kw$bar);
var points_presence = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__14188){
var vec__14189 = p__14188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(0),null);
var checkers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.first(checkers));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key)),point__GT_checkers);
var home_range_QMARK_ = (function (){var G__14192 = active_player;
var G__14192__$1 = (((G__14192 instanceof cljs.core.Keyword))?G__14192.fqn:null);
switch (G__14192__$1) {
case "p1":
return (function (p1__14185_SHARP_){
return ((((1) <= p1__14185_SHARP_)) && ((p1__14185_SHARP_ <= (6))));
});

break;
case "p2":
return (function (p1__14186_SHARP_){
return ((((19) <= p1__14186_SHARP_)) && ((p1__14186_SHARP_ <= (24))));
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14192__$1)].join('')));

}
})();
var bar_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player);
return ((cljs.core.empty_QMARK_(bar_checkers)) && (cljs.core.every_QMARK_(home_range_QMARK_,points_presence)));
});
app.events.compare_SINGLEQUOTE_ = (function app$events$compare_SINGLEQUOTE_(p1__14195_SHARP_,p2__14194_SHARP_){
return cljs.core.compare(p2__14194_SHARP_,p1__14195_SHARP_);
});
app.events.legal_move_QMARK_ = (function app$events$legal_move_QMARK_(game,move){
var map__14196 = game;
var map__14196__$1 = cljs.core.__destructure_map(map__14196);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,cljs.core.cst$kw$bar);
var available_points = app.events.available_points(game);
var bar_cnt = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player));
var bar_point = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?(25):(0));
var occupied_points = ((((0) < bar_cnt))?cljs.core.PersistentArrayMap.createAsIfByAssoc([bar_point,bar_cnt]):app.events.occupied_points(game));
var bear_off_active = app.events.bear_off_active_QMARK_(game);
return cljs.core.boolean$((function (){var move_by = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?((-1) * move):move);
return cljs.core.some((function (occupied_point){
var target_point = (occupied_point + move_by);
var or__4223__auto__ = (available_points.cljs$core$IFn$_invoke$arity$1 ? available_points.cljs$core$IFn$_invoke$arity$1(target_point) : available_points.call(null,target_point));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = bear_off_active;
if(and__4221__auto__){
var G__14197 = active_player;
var G__14197__$1 = (((G__14197 instanceof cljs.core.Keyword))?G__14197.fqn:null);
switch (G__14197__$1) {
case "p1":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_point,(0));

break;
case "p2":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((25),target_point);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14197__$1)].join('')));

}
} else {
return and__4221__auto__;
}
}
}),cljs.core.keys(occupied_points));
})());
});
app.events.has_valid_move_QMARK_ = (function app$events$has_valid_move_QMARK_(game){
var map__14199 = game;
var map__14199__$1 = cljs.core.__destructure_map(map__14199);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14199__$1,cljs.core.cst$kw$available_DASH_moves);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14199__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14199__$1,cljs.core.cst$kw$bar);
var bar_cnt = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player));
var bar_point = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?(25):(0));
var occupied_points = ((((0) < bar_cnt))?cljs.core.PersistentArrayMap.createAsIfByAssoc([bar_point,bar_cnt]):app.events.occupied_points(game));
var highest_occupied_point = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?app.events.compare_SINGLEQUOTE_:cljs.core.compare),cljs.core.keys(occupied_points)));
var bear_off_active = app.events.bear_off_active_QMARK_(game);
return cljs.core.boolean$((function (){var or__4223__auto__ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.legal_move_QMARK_,game),available_moves);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = bear_off_active;
if(and__4221__auto__){
return cljs.core.some((function (move){
var move_by = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?((-1) * move):move);
return cljs.core.some((function (occupied_point){
var target_point = (occupied_point + move_by);
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highest_occupied_point,occupied_point);
if(and__4221__auto____$1){
var G__14200 = active_player;
var G__14200__$1 = (((G__14200 instanceof cljs.core.Keyword))?G__14200.fqn:null);
switch (G__14200__$1) {
case "p1":
return (target_point < (0));

break;
case "p2":
return ((25) < target_point);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14200__$1)].join('')));

}
} else {
return and__4221__auto____$1;
}
}),cljs.core.keys(occupied_points));
}),available_moves);
} else {
return and__4221__auto__;
}
}
})());
});
app.events.game_end_QMARK_ = (function app$events$game_end_QMARK_(game){
var map__14202 = game;
var map__14202__$1 = cljs.core.__destructure_map(map__14202);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202__$1,cljs.core.cst$kw$bar);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
return (cljs.core.count(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.val),bar),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.val),point__GT_checkers))) < (2));
});
app.events.next_turn = (function app$events$next_turn(game){
while(true){
if(((app.events.game_end_QMARK_(game)) || (app.events.has_valid_move_QMARK_(game)))){
return game;
} else {
var G__14203 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.events.roll(game),cljs.core.cst$kw$active_DASH_player,app.events.opponent);
game = G__14203;
continue;
}
break;
}
});
app.events.use_move = (function app$events$use_move(game,move_by){
return app.events.entering_selected_point(app.events.next_turn(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,cljs.core.cst$kw$used_DASH_moves,cljs.core.conj,move_by),cljs.core.cst$kw$available_DASH_moves,(function (moves){
var idx = moves.indexOf(move_by);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(moves,(0),idx),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(moves,(idx + (1))));
}))));
});
app.events.reset_game = (function app$events$reset_game(db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game,app.events.roll(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$active_DASH_player,cljs.core.cst$kw$p1,cljs.core.cst$kw$bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p1,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$p2,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$bear_DASH_off,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p1,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$p2,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$point_DASH__GT_checkers,new cljs.core.PersistentArrayMap(null, 8, [(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(12),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(17),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(19),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(6),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null),(13),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null),(24),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null)], null)], null)));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_init,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$app_DASH_version)], null),(function (p__14204,_){
var map__14205 = p__14204;
var map__14205__$1 = cljs.core.__destructure_map(map__14205);
var app_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14205__$1,cljs.core.cst$kw$app_DASH_version);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,app.events.reset_game(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$version,app_version], null)], null))], null);
}));
app.events.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
app.events.pop_selected_point = (function app$events$pop_selected_point(game){
var selected_point = cljs.core.cst$kw$selected_DASH_point.cljs$core$IFn$_invoke$arity$1(game);
var G__14206 = selected_point;
switch (G__14206) {
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
app.events.move = (function app$events$move(game,point){
var map__14208 = game;
var map__14208__$1 = cljs.core.__destructure_map(map__14208);
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$selected_DASH_point);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$active_DASH_player);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$available_DASH_moves);
var existing_checkers = (point__GT_checkers.cljs$core$IFn$_invoke$arity$1 ? point__GT_checkers.cljs$core$IFn$_invoke$arity$1(point) : point__GT_checkers.call(null,point));
var opponent_player = (app.events.opponent.cljs$core$IFn$_invoke$arity$1 ? app.events.opponent.cljs$core$IFn$_invoke$arity$1(active_player) : app.events.opponent.call(null,active_player));
var move_by = (function (){var G__14209 = (selected_point - point);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p2)){
return (G__14209 * (-1));
} else {
return G__14209;
}
})();
if((!(((-1) === available_moves.indexOf(move_by))))){
if(((cljs.core.not(cljs.core.seq(existing_checkers))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.first(existing_checkers))))){
return app.events.use_move(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.events.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point_DASH__GT_checkers,point], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),move_by);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(existing_checkers))){
return app.events.use_move(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.events.pop_selected_point(cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point_DASH__GT_checkers,point], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_player], null))),cljs.core.cst$kw$selected_DASH_point),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bar,opponent_player], null),app.events.conjv,opponent_player),move_by);
} else {
return game;

}
}
} else {
return game;
}
});
app.events.select_point = (function app$events$select_point(game,point){
var map__14210 = game;
var map__14210__$1 = cljs.core.__destructure_map(map__14210);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14210__$1,cljs.core.cst$kw$active_DASH_player);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14210__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14210__$1,cljs.core.cst$kw$bar);
var existing_checker = cljs.core.first((point__GT_checkers.cljs$core$IFn$_invoke$arity$1 ? point__GT_checkers.cljs$core$IFn$_invoke$arity$1(point) : point__GT_checkers.call(null,point)));
if(((cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(existing_checker,active_player)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$selected_DASH_point,point);
} else {
return game;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_click_DASH_point,(function (db,p__14211){
var vec__14212 = p__14211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14212,(0),null);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14212,(1),null);
var game = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(db);
var selected_point = cljs.core.cst$kw$selected_DASH_point.cljs$core$IFn$_invoke$arity$1(game);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game,(cljs.core.truth_(selected_point)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_point,point))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(game,cljs.core.cst$kw$selected_DASH_point):app.events.move(game,point)):app.events.select_point(game,point)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_bear_DASH_off,(function (db,_){
var game = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(db);
var map__14215 = game;
var map__14215__$1 = cljs.core.__destructure_map(map__14215);
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14215__$1,cljs.core.cst$kw$selected_DASH_point);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14215__$1,cljs.core.cst$kw$active_DASH_player);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14215__$1,cljs.core.cst$kw$available_DASH_moves);
var highest_available_move = cljs.core.first(cljs.core.rseq(cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(available_moves))));
var target_point = (selected_point + (function (){var G__14216 = highest_available_move;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1)){
return (G__14216 * (-1));
} else {
return G__14216;
}
})());
var occupied_points = app.events.occupied_points(game);
var highest_occupied_point = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?app.events.compare_SINGLEQUOTE_:cljs.core.compare),cljs.core.keys(occupied_points)));
var legal_move = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.legal_move_QMARK_,game),available_moves);
if(app.events.bear_off_active_QMARK_(game)){
if(cljs.core.truth_(legal_move)){
var move_by = (function (){var G__14217 = (selected_point - (function (){var G__14218 = active_player;
var G__14218__$1 = (((G__14218 instanceof cljs.core.Keyword))?G__14218.fqn:null);
switch (G__14218__$1) {
case "p1":
return (0);

break;
case "p2":
return (25);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14218__$1)].join('')));

}
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p2)){
return (G__14217 * (-1));
} else {
return G__14217;
}
})();
if((!(((-1) === available_moves.indexOf(move_by))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game,app.events.use_move(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.events.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bear_DASH_off,active_player], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),move_by));
} else {
return db;
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highest_occupied_point,selected_point);
if(and__4221__auto__){
var G__14219 = active_player;
var G__14219__$1 = (((G__14219 instanceof cljs.core.Keyword))?G__14219.fqn:null);
switch (G__14219__$1) {
case "p1":
return (target_point < (0));

break;
case "p2":
return ((25) < target_point);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14219__$1)].join('')));

}
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game,app.events.use_move(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.events.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bear_DASH_off,active_player], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),highest_available_move));
} else {
return db;
}
}
} else {
return db;
}
}));
