import React from 'react';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import { P } from './P';

var replace = function replace(domElement) {
  var name = domElement.name,
      children = domElement.children;
  if (name !== "p") return domElement;
  return React.createElement(P, null, domToReact(children, parserOptions));
};

var parserOptions = {
  replace: replace
};
export var HTML = function HTML(_ref) {
  var children = _ref.children;
  return Parser(children, parserOptions);
};