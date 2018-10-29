import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1 } from '.';
storiesOf('Base/Hs/H1', module).add('standard', function () {
  return React.createElement(H1, {
    text: "Lorem ipsum dolor sit amet"
  });
}).add('small', function () {
  return React.createElement(H1, {
    small: true,
    text: "Lorem ipsum dolor sit amet"
  });
}).add('with custom class', function () {
  return React.createElement(H1, {
    text: "Lorem ipsum dolor sit amet",
    className: "custom-class"
  });
}).add('small, with custom class', function () {
  return React.createElement(H1, {
    small: true,
    text: "Lorem ipsum dolor sit amet",
    className: "custom-class"
  });
});