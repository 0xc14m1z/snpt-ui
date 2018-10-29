import React from 'react';
import { storiesOf } from '@storybook/react';
import { P } from '.';
storiesOf('Base/P', module).add('standard', function () {
  return React.createElement(P, null, "Lorem ipsum dolor sit amet");
}).add('italic', function () {
  return React.createElement(P, {
    italic: true
  }, "Lorem ipsum dolor sit amet");
}).add('with custom class', function () {
  return React.createElement(P, {
    className: "custom-class"
  }, "Lorem ipsum dolor sit amet");
}).add('italic, with custom class', function () {
  return React.createElement(P, {
    italic: true,
    className: "custom-class"
  }, "Lorem ipsum dolor sit amet");
}).add('with other tags', function () {
  return React.createElement(P, null, "Lorem ipsum ", React.createElement("strong", null, "dolor"), " sit amet, consectetur adipiscing elit. Duis fringilla ", React.createElement("b", null, "bibendum"), " risus sodales laoreet. Pellentesque ", React.createElement("em", null, "semper"), " id neque vitae suscipit. Mauris eu magna ", React.createElement("i", null, "viverra"), ", aliquam sapien at, porta odio.");
});