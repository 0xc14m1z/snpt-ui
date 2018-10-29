import React, { Component } from 'react'
import { withRouter } from 'react-router'

export const ScrollTop = withRouter(
  class extends Component {
    componentDidUpdate(prevProps) {
      if ( this.props.location !== prevProps.location ) {
        if ( this.props.animate ) {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
          window.scrollTo(0, 0)
        }
      }
    }
    render = () => this.props.children
  }
)
