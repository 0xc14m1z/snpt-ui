import React from 'react'
import { storiesOf } from '@storybook/react'

import { FadeInImage } from '.'

const BASE_URL = "http://operaclick-backend-mock.hvwsnkehuw.eu-central-1.elasticbeanstalk.com/images/articles"
const PREVIEW = `${BASE_URL}/preview/1.jpg`
const FULL_SIZE = `${BASE_URL}/full-size/1.jpg`

storiesOf('Base/FadeInImage', module)
  .add('standard', () => (
    <div style={{ position: "relative", width: "1000px", height: "500px" }}>
      <FadeInImage
        preview={ PREVIEW }
        fullSize={ FULL_SIZE }
        alt="ALT"
        title="TITLE"
      />
    </div>
  ))
  .add('with transition', () => (
    <FadeInImage
      style={{ width: "1000px", height: "500px" }}
      transition="5000ms"
      preview={ PREVIEW }
      fullSize={ FULL_SIZE }
    />
  ))
  .add('with blur', () => (
    <FadeInImage
      style={{ width: "1000px", height: "500px" }}
      transition="5000ms"
      blur="50px"
      preview={ PREVIEW }
      fullSize={ FULL_SIZE }
    />
  ))
