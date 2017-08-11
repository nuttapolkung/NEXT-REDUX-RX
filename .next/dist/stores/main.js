'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initStore = exports.reducer = exports.actionTypes = undefined;

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
    isReady: false
};

var actionTypes = exports.actionTypes = {
    READY: 'READY'
};

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.READY:
            return (0, _assign2.default)({}, state, {
                isReady: action.data
            });
            break;

        default:
            return state;
    }
};

var initStore = exports.initStore = function initStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;

    return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};