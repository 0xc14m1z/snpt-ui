import React from 'react';
import { storiesOf } from '@storybook/react';
import { H2 } from '.';
storiesOf('Base/Hs/H2', module).add('standard', function () {
  return React.createElement(H2, {
    text: "Lorem ipsum dolor sit amet"
  });
}).add('with custom class', function () {
  return React.createElement(H2, {
    text: "Lorem ipsum dolor sit amet",
    className: "custom-class"
  });
});