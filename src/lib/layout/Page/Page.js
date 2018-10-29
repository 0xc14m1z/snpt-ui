import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames'

import './Page.css'
import { Screen } from '../'
// import { Footer, Header } from '../'

import smoothScroll from 'smoothscroll-polyfill'
smoothScroll.polyfill()

const DEFAULT_TITLE = "SNPT | Formiamo i migliori professionisti dell'allenamento"

export const Page = ({
  title = DEFAULT_TITLE,
  className,
  children
}) => (
  <Fragment>
    <Helmet>
      <title>{ title }</title>
    </Helmet>
    <Screen>
      <div className={ classNames("page", className) }>
        <main>
          { children }
        </main>
      </div>
    </Screen>
  </Fragment>
)
