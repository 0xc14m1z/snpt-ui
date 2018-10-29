import React from "react";
import { FormatDate } from "./FormatDate";
export var ShortDate = function ShortDate(_ref) {
  var value = _ref.value;
  return React.createElement(FormatDate, {
    value: value,
    format: "DD MMMM YYYY"
  });
};