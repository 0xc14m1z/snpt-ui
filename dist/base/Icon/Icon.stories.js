import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '.';
storiesOf('Base/Icon', module).add('standard', function () {
  return React.createElement(Icon, {
    name: "exclamation-circle"
  });
}).add('with size', function () {
  return React.createElement(Icon, {
    name: "exclamation-triangle",
    size: "5x"
  });
}).add('light', function () {
  return React.createElement(Icon, {
    name: "exclamation-square"
  });
}).add('regular', function () {
  return React.createElement(Icon, {
    name: "exclamation-square",
    weight: "far"
  });
}).add('solid', function () {
  return React.createElement(Icon, {
    name: "exclamation-square",
    weight: "fas"
  });
});