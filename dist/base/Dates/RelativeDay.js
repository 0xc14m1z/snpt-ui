import React from 'react';
import moment from 'moment';
import { LongDate } from './LongDate';
var TEST_FORMAT = "DD-MM-YYYY";
export var RelativeDay = function RelativeDay(_ref) {
  var date = _ref.date;
  var day = moment(date).format(TEST_FORMAT);
  var today = moment().format(TEST_FORMAT);
  var tomorrow = moment().add(1, 'd').format(TEST_FORMAT);

  switch (day) {
    case today:
      return "Oggi";

    case tomorrow:
      return "Domani";

    default:
      return React.createElement(LongDate, {
        value: date
      });
  }
};