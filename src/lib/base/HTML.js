import React from 'react'
import Parser from 'html-react-parser'
import domToReact from 'html-react-parser/lib/dom-to-react'

import { P } from './P'

const replace = domElement => {
  const { name, children } = domElement
  if ( name !== "p" ) return domElement
  return <P>{ domToReact(children, parserOptions) }</P>
}

const parserOptions = { replace }

export const HTML = ({ children }) =>
  Parser(children, parserOptions)
