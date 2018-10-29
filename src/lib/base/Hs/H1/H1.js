import React from 'react'
import classNames from 'classnames'

import "./H1.css"

export const H1 = ({ text, small = false, className }) => (
  <h1 className={ classNames(className, { "small": small }) }>{ text }</h1>
)
