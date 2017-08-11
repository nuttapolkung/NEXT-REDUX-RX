'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapDispatchToProps = exports.mapStatetoProps = undefined;

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _main = require('./../stores/main');

var _main2 = require('./../actions/main');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pir2developermacpro/100BrandFace/dev/pages/index.js?entry';


var Main = function (_React$Component) {
    (0, _inherits3.default)(Main, _React$Component);

    function Main() {
        (0, _classCallCheck3.default)(this, Main);

        return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments));
    }

    (0, _createClass3.default)(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onReady();
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("App ", this.props.isReady);
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Hello');
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var store = _ref.store,
                isServer = _ref.isServer;

            return { isServer: isServer };
        }
    }]);

    return Main;
}(_react2.default.Component);

var mapStatetoProps = exports.mapStatetoProps = function mapStatetoProps(state) {
    return {
        isReady: state.isReady
    };
};
var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onReady: (0, _redux.bindActionCreators)(_main2.onReady, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_main.initStore, mapStatetoProps, mapDispatchToProps)(Main);