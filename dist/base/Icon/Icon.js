import React from 'react';
import classNames from 'classnames';
import './Icon.css';
export var Icon = function Icon(_ref) {
  var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? "fal" : _ref$weight,
      name = _ref.name,
      size = _ref.size,
      className = _ref.className;
  return React.createElement("i", {
    className: classNames("icon", weight, "fa-".concat(name), size ? "fa-".concat(size) : null, className)
  });
};