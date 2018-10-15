import { configure } from '@storybook/react'

const requirer = require.context('../src', true, /\.stories\.js$/)

const loadStories = () =>
  requirer.keys().forEach(story => requirer(story))

configure(loadStories, module)
