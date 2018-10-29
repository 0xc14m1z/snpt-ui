import React from 'react';
import "./H2.css";
export var H2 = function H2(_ref) {
  var text = _ref.text,
      className = _ref.className;
  return React.createElement("h2", {
    className: className
  }, text);
};