import React from 'react';
import { storiesOf } from '@storybook/react';
import { H4 } from '.';
storiesOf('Base/Hs/H4', module).add('standard', function () {
  return React.createElement(H4, {
    text: "Lorem ipsum dolor sit amet"
  });
}).add('with custom class', function () {
  return React.createElement(H4, {
    text: "Lorem ipsum dolor sit amet",
    className: "custom-class"
  });
});