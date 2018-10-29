import React from 'react'
import { storiesOf } from '@storybook/react'

import { H1 } from '.'

storiesOf('Base/Hs/H1', module)
  .add('standard', () => (
    <H1 text="Lorem ipsum dolor sit amet" />
  ))
  .add('small', () => (
    <H1 small text="Lorem ipsum dolor sit amet" />
  ))
  .add('with custom class', () => (
    <H1 text="Lorem ipsum dolor sit amet" className="custom-class" />
  ))
  .add('small, with custom class', () => (
    <H1 small text="Lorem ipsum dolor sit amet" className="custom-class" />
  ))
