import React from 'react'
import { storiesOf } from '@storybook/react'

import { H2 } from '.'

storiesOf('Base/Hs/H2', module)
  .add('standard', () => (
    <H2 text="Lorem ipsum dolor sit amet" />
  ))
  .add('with custom class', () => (
    <H2 text="Lorem ipsum dolor sit amet" className="custom-class" />
  ))
