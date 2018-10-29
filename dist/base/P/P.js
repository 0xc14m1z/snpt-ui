import React from 'react';
import classNames from 'classnames';
import "./P.css";
export var P = function P(_ref) {
  var children = _ref.children,
      _ref$italic = _ref.italic,
      italic = _ref$italic === void 0 ? false : _ref$italic,
      className = _ref.className;
  return React.createElement("p", {
    className: classNames(className, {
      "italic": italic
    })
  }, children);
};