import React from 'react';
import classNames from 'classnames';
import "./H3.css";
export var H3 = function H3(_ref) {
  var text = _ref.text,
      _ref$big = _ref.big,
      big = _ref$big === void 0 ? false : _ref$big,
      className = _ref.className;
  return React.createElement("h3", {
    className: classNames(className, {
      "big": big
    })
  }, text);
};