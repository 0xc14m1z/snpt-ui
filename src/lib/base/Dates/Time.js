import React from 'react'

import { FormatDate } from './FormatDate'

export const Time = ({ value }) => (
  <FormatDate value={ value } format="HH:mm" />
)
