import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { Page } from '.'

storiesOf('Layout/Page', module)
  .addDecorator(StoryRouter())
  .add('standard', () => (
    <Page>
      content of the page
    </Page>
  ))
