import React from 'react'
import { storiesOf } from '@storybook/react'

import { H3 } from '.'

storiesOf('Base/Hs/H3', module)
  .add('standard', () => (
    <H3 text="Lorem ipsum dolor sit amet" />
  ))
  .add('big', () => (
    <H3 big text="Lorem ipsum dolor sit amet" />
  ))
  .add('with custom class', () => (
    <H3 text="Lorem ipsum dolor sit amet" className="custom-class" />
  ))
  .add('big, with custom class', () => (
    <H3 big text="Lorem ipsum dolor sit amet" className="custom-class" />
  ))
