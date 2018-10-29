import React from 'react'
import { storiesOf } from '@storybook/react'

import { Icon } from '.'

storiesOf('Base/Icon', module)
  .add('standard', () => (
    <Icon name="exclamation-circle" />
  ))
  .add('with size', () => (
    <Icon name="exclamation-triangle" size="5x" />
  ))
  .add('light', () => (
    <Icon name="exclamation-square" />
  ))
  .add('regular', () => (
    <Icon name="exclamation-square" weight="far" />
  ))
  .add('solid', () => (
    <Icon name="exclamation-square" weight="fas" />
  ))
