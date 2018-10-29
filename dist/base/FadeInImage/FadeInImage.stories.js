import React from 'react';
import { storiesOf } from '@storybook/react';
import { FadeInImage } from '.';
var BASE_URL = "http://operaclick-backend-mock.hvwsnkehuw.eu-central-1.elasticbeanstalk.com/images/articles";
var PREVIEW = "".concat(BASE_URL, "/preview/1.jpg");
var FULL_SIZE = "".concat(BASE_URL, "/full-size/1.jpg");
storiesOf('Base/FadeInImage', module).add('standard', function () {
  return React.createElement("div", {
    style: {
      position: "relative",
      width: "1000px",
      height: "500px"
    }
  }, React.createElement(FadeInImage, {
    preview: PREVIEW,
    fullSize: FULL_SIZE,
    alt: "ALT",
    title: "TITLE"
  }));
}).add('with transition', function () {
  return React.createElement(FadeInImage, {
    style: {
      width: "1000px",
      height: "500px"
    },
    transition: "5000ms",
    preview: PREVIEW,
    fullSize: FULL_SIZE
  });
}).add('with blur', function () {
  return React.createElement(FadeInImage, {
    style: {
      width: "1000px",
      height: "500px"
    },
    transition: "5000ms",
    blur: "50px",
    preview: PREVIEW,
    fullSize: FULL_SIZE
  });
});