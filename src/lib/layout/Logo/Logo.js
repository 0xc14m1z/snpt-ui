import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { isMobile } from 'react-device-detect'

import './Logo.css'

const Logo = ({ full, mobile }) => (
  <Link
    to="/"
    className={
      classNames('logo', {
        'full': full,
        'mobile': isMobile || mobile
      })
    }
    title="Home"
  />
)

Logo.propTypes = {
  full: PropTypes.bool,
  mobile: PropTypes.bool
}

export { Logo }
