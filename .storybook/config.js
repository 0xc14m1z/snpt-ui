import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter())
addDecorator(story => (
  <div style={{ padding: "50px", background: "#EBEBEB" }}>
    { story() }
  </div>
))

const req = require.context('../src/lib', true, /\.stories\.js$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
