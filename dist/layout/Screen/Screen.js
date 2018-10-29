import React from 'react';
import './Screen.css';
export var Screen = function Screen(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "screen"
  }, children);
};