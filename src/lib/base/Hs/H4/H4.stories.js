import React from 'react'
import { storiesOf } from '@storybook/react'

import { H4 } from '.'

storiesOf('Base/Hs/H4', module)
  .add('standard', () => (
    <H4 text="Lorem ipsum dolor sit amet" />
  ))
  .add('with custom class', () => (
    <H4 text="Lorem ipsum dolor sit amet" className="custom-class" />
  ))
