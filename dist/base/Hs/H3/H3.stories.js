import React from 'react';
import { storiesOf } from '@storybook/react';
import { H3 } from '.';
storiesOf('Base/Hs/H3', module).add('standard', function () {
  return React.createElement(H3, {
    text: "Lorem ipsum dolor sit amet"
  });
}).add('big', function () {
  return React.createElement(H3, {
    big: true,
    text: "Lorem ipsum dolor sit amet"
  });
}).add('with custom class', function () {
  return React.createElement(H3, {
    text: "Lorem ipsum dolor sit amet",
    className: "custom-class"
  });
}).add('big, with custom class', function () {
  return React.createElement(H3, {
    big: true,
    text: "Lorem ipsum dolor sit amet",
    className: "custom-class"
  });
});