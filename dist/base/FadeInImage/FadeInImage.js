import _classCallCheck from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/home/xc14m1z/Scrivania/snpt-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import classNames from "classnames";
import './FadeInImage.css';
var DEFAULT_ALT = "";
var DEFAULT_TITLE = "";
var DEFAULT_BLUR = "10px";
var DEFAULT_TRANSITION = "400ms";
export var FadeInImage =
/*#__PURE__*/
function (_Component) {
  _inherits(FadeInImage, _Component);

  function FadeInImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FadeInImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FadeInImage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loaded: false
    };
    _this.image = null;

    _this.loadImage = function (imageUrl) {
      _this.image = new Image();

      _this.image.onload = function () {
        return _this.setState({
          loaded: true
        });
      };

      _this.image.src = imageUrl;
    };

    return _this;
  }

  _createClass(FadeInImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadImage(this.props.fullSize);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var preview = _ref.preview,
          fullSize = _ref.fullSize;

      if (this.props.preview !== preview || this.props.fullSize !== fullSize) {
        this.loadImage(fullSize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          preview = _this$props.preview,
          className = _this$props.className,
          _this$props$alt = _this$props.alt,
          alt = _this$props$alt === void 0 ? DEFAULT_ALT : _this$props$alt,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? DEFAULT_TITLE : _this$props$title,
          _this$props$blur = _this$props.blur,
          blur = _this$props$blur === void 0 ? DEFAULT_BLUR : _this$props$blur,
          _this$props$transitio = _this$props.transition,
          transition = _this$props$transitio === void 0 ? DEFAULT_TRANSITION : _this$props$transitio,
          style = _this$props.style;
      var loaded = this.state.loaded;
      return React.createElement("figure", {
        className: classNames("fade-in-image", {
          "loaded": loaded
        }, className),
        style: style
      }, React.createElement("img", {
        src: preview,
        className: classNames("preview", {
          hidden: loaded
        }),
        alt: alt,
        title: title,
        style: {
          filter: "blur(".concat(blur, ")"),
          transitionDuration: transition
        }
      }), React.createElement("img", {
        src: loaded ? this.image.src : null,
        className: "full-size",
        alt: alt,
        title: title
      }));
    }
  }]);

  return FadeInImage;
}(Component);