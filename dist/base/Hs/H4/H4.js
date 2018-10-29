import React from 'react';
import classNames from 'classnames';
import "./H4.css";
export var H4 = function H4(_ref) {
  var text = _ref.text,
      className = _ref.className;
  return React.createElement("h4", {
    className: className
  }, text);
};