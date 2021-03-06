import React from "react";
import { FormatDate } from "./FormatDate";
export var LongDate = function LongDate(_ref) {
  var value = _ref.value;
  return React.createElement(FormatDate, {
    value: value,
    format: "dddd DD MMMM YYYY"
  });
};