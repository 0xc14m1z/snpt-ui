import React from 'react'
import classNames from 'classnames'

import "./H3.css"

export const H3 = ({ text, big = false, className }) => (
  <h3 className={ classNames(className, { "big": big }) }>{ text }</h3>
)
