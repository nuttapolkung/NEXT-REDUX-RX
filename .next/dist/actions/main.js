"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onReady = undefined;

var _main = require("./../stores/main");

var onReady = exports.onReady = function onReady() {
    return function (dispatch) {
        return dispatch({ type: _main.actionTypes.READY, data: true });
    };
};