import React from 'react'
import classNames from 'classnames'

import "./P.css"

export const P = ({ children, italic = false, className }) => (
  <p className={ classNames(className, { "italic": italic }) }>{ children }</p>
)
