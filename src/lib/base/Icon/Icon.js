import React from 'react'
import classNames from 'classnames'

import './Icon.css'

export const Icon = ({ weight = "fal", name, size, className }) => (
  <i
    className={ classNames(
      "icon",
      weight,
      `fa-${name}`,
      size ? `fa-${size}` : null,
      className
    ) }
  />
)
