import React, { Component } from "react"
import classNames from "classnames"

import './FadeInImage.css'

const DEFAULT_ALT = ""
const DEFAULT_TITLE = ""
const DEFAULT_BLUR = "10px"
const DEFAULT_TRANSITION = "400ms"

export class FadeInImage extends Component {

  state = { loaded: false }
  image = null

  componentDidMount() {
    this.loadImage(this.props.fullSize)
  }

  componentWillReceiveProps({ preview, fullSize }) {
    if (this.props.preview !== preview || this.props.fullSize !== fullSize) {
      this.loadImage(fullSize)
    }
  }

  loadImage = imageUrl => {
    this.image = new Image()
    this.image.onload = () => this.setState({ loaded: true })
    this.image.src = imageUrl
  }

  render() {
    const {
      preview,
      className,
      alt = DEFAULT_ALT,
      title = DEFAULT_TITLE,
      blur = DEFAULT_BLUR,
      transition = DEFAULT_TRANSITION,
      style
    } = this.props

    const { loaded } = this.state

    return (
      <figure
        className={
          classNames("fade-in-image", { "loaded": loaded }, className)
        }
        style={ style }
      >
        <img
          src={ preview }
          className={ classNames("preview", { hidden: loaded }) }
          alt={ alt }
          title={ title }
          style={{
            filter: `blur(${blur})`,
            transitionDuration: transition
          }}
        />
        <img
          src={ loaded ? this.image.src : null }
          className="full-size"
          alt={ alt }
          title={ title }
        />
      </figure>
    )
  }

}
