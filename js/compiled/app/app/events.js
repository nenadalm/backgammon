// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('re_frame.core');
goog.require('app.db');
app.events.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
re_frame.core.reg_cofx(cljs.core.cst$kw$app_DASH_version,(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$app_DASH_version,(function (){var or__4223__auto__ = (function (){var G__14174 = "meta[name=app-version]";
var G__14174__$1 = (((G__14174 == null))?null:document.querySelector(G__14174));
if((G__14174__$1 == null)){
return null;
} else {
return G__14174__$1.getAttribute("content");
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "unknown";
}
})());
}));
app.events.opponent = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p1], null);
app.events.entering_selected_point = (function app$events$entering_selected_point(game){
var map__14175 = game;
var map__14175__$1 = cljs.core.__destructure_map(map__14175);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$bar);
var hitted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player);
if(cljs.core.seq(hitted)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$selected_DASH_point,app.db.bar_point(active_player));
} else {
return game;
}
});
app.events.blocked_points = (function app$events$blocked_points(game){
var map__14176 = game;
var map__14176__$1 = cljs.core.__destructure_map(map__14176);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$active_DASH_player);
var opponent = (app.events.opponent.cljs$core$IFn$_invoke$arity$1 ? app.events.opponent.cljs$core$IFn$_invoke$arity$1(active_player) : app.events.opponent.call(null,active_player));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__14177){
var vec__14178 = p__14177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(0),null);
var checkers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(1),null);
return ((((1) < cljs.core.count(checkers))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opponent,cljs.core.first(checkers))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key)),point__GT_checkers);
});
app.events.available_points = (function app$events$available_points(game){
var all_points = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
var blocked_points = app.events.blocked_points(game);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_points,blocked_points);
});
app.events.occupied_points = (function app$events$occupied_points(game){
var map__14181 = game;
var map__14181__$1 = cljs.core.__destructure_map(map__14181);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14181__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14181__$1,cljs.core.cst$kw$active_DASH_player);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__14182){
var vec__14183 = p__14182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(0),null);
var checkers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.first(checkers));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key)),point__GT_checkers);
});
app.events.bear_off_active_QMARK_ = (function app$events$bear_off_active_QMARK_(game){
var map__14188 = game;
var map__14188__$1 = cljs.core.__destructure_map(map__14188);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14188__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14188__$1,cljs.core.cst$kw$bar);
var home_range_QMARK_ = (function (){var G__14189 = active_player;
var G__14189__$1 = (((G__14189 instanceof cljs.core.Keyword))?G__14189.fqn:null);
switch (G__14189__$1) {
case "p1":
return (function (p1__14186_SHARP_){
return ((((1) <= p1__14186_SHARP_)) && ((p1__14186_SHARP_ <= (6))));
});

break;
case "p2":
return (function (p1__14187_SHARP_){
return ((((19) <= p1__14187_SHARP_)) && ((p1__14187_SHARP_ <= (24))));
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14189__$1)].join('')));

}
})();
var bar_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player);
return ((cljs.core.empty_QMARK_(bar_checkers)) && (cljs.core.every_QMARK_(home_range_QMARK_,app.events.occupied_points(game))));
});
app.events.compare_SINGLEQUOTE_ = (function app$events$compare_SINGLEQUOTE_(p1__14192_SHARP_,p2__14191_SHARP_){
return cljs.core.compare(p2__14191_SHARP_,p1__14192_SHARP_);
});
app.events.use_move_STAR_ = (function app$events$use_move_STAR_(game,move_by){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,cljs.core.cst$kw$used_DASH_moves,cljs.core.conj,move_by),cljs.core.cst$kw$available_DASH_moves,(function (moves){
var idx = moves.indexOf(move_by);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(moves,(0),idx),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(moves,(idx + (1))));
}));
});
app.events.legal_move_QMARK_ = (function app$events$legal_move_QMARK_(game,move){
var map__14193 = game;
var map__14193__$1 = cljs.core.__destructure_map(map__14193);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14193__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14193__$1,cljs.core.cst$kw$bar);
var available_points = app.events.available_points(game);
var bar_cnt = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player));
var bar_point = app.db.bar_point(active_player);
var occupied_points = ((((0) < bar_cnt))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bar_point], null):app.events.occupied_points(game));
var bear_off_active = app.events.bear_off_active_QMARK_(game);
return cljs.core.boolean$((function (){var move_by = (move * app.db.move_direction(active_player));
return cljs.core.some((function (occupied_point){
var target_point = (occupied_point + move_by);
var or__4223__auto__ = (available_points.cljs$core$IFn$_invoke$arity$1 ? available_points.cljs$core$IFn$_invoke$arity$1(target_point) : available_points.call(null,target_point));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ((bear_off_active) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_point,app.db.bear_off_point(active_player))));
}
}),occupied_points);
})());
});
app.events.has_legal_move_QMARK_ = (function app$events$has_legal_move_QMARK_(game){
var map__14194 = game;
var map__14194__$1 = cljs.core.__destructure_map(map__14194);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,cljs.core.cst$kw$available_DASH_moves);
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.legal_move_QMARK_,game),available_moves);
});
/**
 * Doesn't check for legal move.
 */
app.events.can_bear_off_QMARK_ = (function app$events$can_bear_off_QMARK_(game){
var map__14195 = game;
var map__14195__$1 = cljs.core.__destructure_map(map__14195);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14195__$1,cljs.core.cst$kw$available_DASH_moves);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14195__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14195__$1,cljs.core.cst$kw$bar);
var bar_cnt = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player));
var bar_point = app.db.bar_point(active_player);
var occupied_points = ((((0) < bar_cnt))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bar_point], null):app.events.occupied_points(game));
var highest_occupied_point = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?app.events.compare_SINGLEQUOTE_:cljs.core.compare),occupied_points));
var bear_off_active = app.events.bear_off_active_QMARK_(game);
return cljs.core.boolean$((function (){var and__4221__auto__ = bear_off_active;
if(and__4221__auto__){
return cljs.core.some((function (move){
var move_by = (move * app.db.move_direction(active_player));
return cljs.core.some((function (occupied_point){
var target_point = (occupied_point + move_by);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highest_occupied_point,occupied_point)) && ((!(((((0) <= target_point)) && ((target_point <= (25))))))));
}),occupied_points);
}),available_moves);
} else {
return and__4221__auto__;
}
})());
});
app.events.has_valid_move_QMARK_ = (function app$events$has_valid_move_QMARK_(game){
var or__4223__auto__ = app.events.has_legal_move_QMARK_(game);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return app.events.can_bear_off_QMARK_(game);
}
});
app.events.make_move = (function app$events$make_move(game,move,occupied_point,target_point){
var map__14196 = game;
var map__14196__$1 = cljs.core.__destructure_map(map__14196);
var point__GT_checkers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,cljs.core.cst$kw$point_DASH__GT_checkers);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,cljs.core.cst$kw$active_DASH_player);
var opponent_player = (app.events.opponent.cljs$core$IFn$_invoke$arity$1 ? app.events.opponent.cljs$core$IFn$_invoke$arity$1(active_player) : app.events.opponent.call(null,active_player));
var existing_checkers = (point__GT_checkers.cljs$core$IFn$_invoke$arity$1 ? point__GT_checkers.cljs$core$IFn$_invoke$arity$1(target_point) : point__GT_checkers.call(null,target_point));
var game__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$selected_DASH_point,occupied_point);
if(((cljs.core.not(cljs.core.seq(existing_checkers))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.first(existing_checkers))))){
return app.events.use_move_STAR_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.db.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point_DASH__GT_checkers,target_point], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),move);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(existing_checkers))){
return app.events.use_move_STAR_(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.db.pop_selected_point(cljs.core.assoc_in(game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point_DASH__GT_checkers,target_point], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_player], null))),cljs.core.cst$kw$selected_DASH_point),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bar,opponent_player], null),app.events.conjv,opponent_player),move);
} else {
return game__$1;

}
}
});
app.events.has_valid_move2_QMARK_ = (function app$events$has_valid_move2_QMARK_(game){
var map__14197 = game;
var map__14197__$1 = cljs.core.__destructure_map(map__14197);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14197__$1,cljs.core.cst$kw$active_DASH_player);
var bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14197__$1,cljs.core.cst$kw$bar);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14197__$1,cljs.core.cst$kw$available_DASH_moves);
var available_points = app.events.available_points(game);
var bar_cnt = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bar,active_player));
var bar_point = app.db.bar_point(active_player);
var occupied_points = ((((0) < bar_cnt))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bar_point], null):app.events.occupied_points(game));
var highest_available_move = cljs.core.first(cljs.core.rseq(cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(available_moves))));
var highest_occupied_point = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?app.events.compare_SINGLEQUOTE_:cljs.core.compare),occupied_points));
return cljs.core.boolean$(cljs.core.some((function (move){
var move_by = (move * app.db.move_direction(active_player));
return cljs.core.some((function (occupied_point){
var target_point = (occupied_point + move_by);
var or__4223__auto__ = (function (){var and__4221__auto__ = (available_points.cljs$core$IFn$_invoke$arity$1 ? available_points.cljs$core$IFn$_invoke$arity$1(target_point) : available_points.call(null,target_point));
if(cljs.core.truth_(and__4221__auto__)){
return app.events.has_valid_move_QMARK_(app.events.make_move(game,move,occupied_point,target_point));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = app.events.bear_off_active_QMARK_(game);
if(and__4221__auto__){
var game__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$selected_DASH_point,occupied_point);
if(app.events.legal_move_QMARK_(game__$1,move)){
var move_by__$1 = ((app.db.bear_off_point(active_player) - occupied_point) * app.db.move_direction(active_player));
if((!(((-1) === available_moves.indexOf(move_by__$1))))){
var next_game = app.events.use_move_STAR_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.db.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bear_DASH_off,active_player], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),move_by__$1);
return app.events.has_valid_move_QMARK_(next_game);
} else {
return false;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highest_occupied_point,occupied_point)) && ((!(((((0) <= target_point)) && ((target_point <= (25))))))))){
var next_game = app.events.use_move_STAR_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.db.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bear_DASH_off,active_player], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),highest_available_move);
return app.events.has_valid_move_QMARK_(next_game);
} else {
return false;
}
}
} else {
return and__4221__auto__;
}
}
}),occupied_points);
}),available_moves));
});
app.events.next_turn = (function app$events$next_turn(game){
while(true){
if(cljs.core.truth_((function (){var or__4223__auto__ = app.db.game_end_QMARK_(game);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return app.events.has_valid_move_QMARK_(game);
}
})())){
return game;
} else {
var G__14198 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.db.roll(game),cljs.core.cst$kw$active_DASH_player,app.events.opponent);
game = G__14198;
continue;
}
break;
}
});
app.events.maybe_switch_players = (function app$events$maybe_switch_players(game){
return app.events.entering_selected_point(app.events.next_turn(game));
});
app.events.use_move = (function app$events$use_move(game,move_by){
return app.events.maybe_switch_players(app.events.use_move_STAR_(game,move_by));
});
app.events.first_roll = (function app$events$first_roll(game){
var game__$1 = app.db.roll(game);
while(true){
var vec__14202 = cljs.core.cst$kw$rolls.cljs$core$IFn$_invoke$arity$1(game__$1);
var roll1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14202,(0),null);
var roll2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14202,(1),null);
if((roll1 === roll2)){
var G__14205 = app.db.roll(game__$1);
game__$1 = G__14205;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game__$1,cljs.core.cst$kw$active_DASH_player,(((roll1 < roll2))?cljs.core.cst$kw$p2:cljs.core.cst$kw$p1));
}
break;
}
});
app.events.reset_game = (function app$events$reset_game(db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$game,app.events.first_roll(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p1,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$p2,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$bear_DASH_off,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p1,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$p2,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$point_DASH__GT_checkers,new cljs.core.PersistentArrayMap(null, 8, [(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(12),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(17),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(19),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2,cljs.core.cst$kw$p2], null),(6),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null),(13),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null),(24),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p1,cljs.core.cst$kw$p1], null)], null)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$page,cljs.core.cst$kw$game], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app$events_SLASH_init,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$app_DASH_version)], null),(function (p__14206,_){
var map__14207 = p__14206;
var map__14207__$1 = cljs.core.__destructure_map(map__14207);
var app_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14207__$1,cljs.core.cst$kw$app_DASH_version);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,app.events.reset_game(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$version,app_version], null)], null))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_reset,(function (db,_){
return app.events.reset_game(db);
}));
app.events.move_STAR_ = (function app$events$move_STAR_(game,point){
var map__14208 = game;
var map__14208__$1 = cljs.core.__destructure_map(map__14208);
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$selected_DASH_point);
var active_player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$active_DASH_player);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$available_DASH_moves);
var move_by = ((point - selected_point) * app.db.move_direction(active_player));
if((!(((-1) === available_moves.indexOf(move_by))))){
return app.events.make_move(game,move_by,selected_point,point);
} else {
return game;
}
});
app.events.move = (function app$events$move(game,point){
var map__14209 = game;
var map__14209__$1 = cljs.core.__destructure_map(map__14209);
var available_moves = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14209__$1,cljs.core.cst$kw$available_DASH_moves);
var highest_available_move = cljs.core.first(cljs.core.rseq(cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(available_moves))));
var possible_2_moves = ((((2) === cljs.core.count(available_moves))) && (app.events.has_valid_move2_QMARK_(game)));
var possible_highest_move = app.events.has_valid_move_QMARK_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,cljs.core.cst$kw$available_DASH_moves,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highest_available_move], null)));
var next_game = app.events.move_STAR_(game,point);
var used_highest_move = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.cst$kw$used_DASH_moves.cljs$core$IFn$_invoke$arity$1(next_game)),highest_available_move);
if(possible_2_moves){
if(cljs.core.truth_(app.events.has_valid_move_QMARK_(next_game))){
return app.events.maybe_switch_players(next_game);
} else {
return game;
}
} else {
if(((used_highest_move) || (cljs.core.not(possible_highest_move)))){
return app.events.maybe_switch_players(next_game);
} else {
return game;
}
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
var target_point = (selected_point + (highest_available_move * app.db.move_direction(active_player)));
var occupied_points = app.events.occupied_points(game);
var highest_occupied_point = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_player,cljs.core.cst$kw$p1))?app.events.compare_SINGLEQUOTE_:cljs.core.compare),occupied_points));
var legal_move = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.legal_move_QMARK_,game),available_moves);
if(app.events.bear_off_active_QMARK_(game)){
if(cljs.core.truth_(legal_move)){
var move_by = ((app.db.bear_off_point(active_player) - selected_point) * app.db.move_direction(active_player));
if((!(((-1) === available_moves.indexOf(move_by))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game,app.events.use_move(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.db.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bear_DASH_off,active_player], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),move_by));
} else {
return db;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highest_occupied_point,selected_point)) && ((!(((((0) <= target_point)) && ((target_point <= (25))))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game,app.events.use_move(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.db.pop_selected_point(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bear_DASH_off,active_player], null),app.events.conjv,active_player)),cljs.core.cst$kw$selected_DASH_point),highest_available_move));
} else {
return db;
}
}
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$events_SLASH_open_DASH_page,(function (db,p__14216){
var vec__14217 = p__14216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14217,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14217,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,page);
}));
