import _classCallCheck from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { withRouter } from 'react-router';
export var ScrollTop = withRouter(
/*#__PURE__*/
function (_Component) {
  _inherits(_class2, _Component);

  function _class2() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.render = function () {
      return _this.props.children;
    };

    return _this;
  }

  _createClass(_class2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        if (this.props.animate) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } else {
          window.scrollTo(0, 0);
        }
      }
    }
  }]);

  return _class2;
}(Component));