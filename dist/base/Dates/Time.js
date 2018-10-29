import React from 'react';
import { FormatDate } from './FormatDate';
export var Time = function Time(_ref) {
  var value = _ref.value;
  return React.createElement(FormatDate, {
    value: value,
    format: "HH:mm"
  });
};