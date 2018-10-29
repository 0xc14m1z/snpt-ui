import React from 'react';
import classNames from 'classnames';
import "./H1.css";
export var H1 = function H1(_ref) {
  var text = _ref.text,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      className = _ref.className;
  return React.createElement("h1", {
    className: classNames(className, {
      "small": small
    })
  }, text);
};