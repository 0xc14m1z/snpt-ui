import React from 'react'
import moment from 'moment'

import { LongDate } from './LongDate'

const TEST_FORMAT = "DD-MM-YYYY"

export const RelativeDay = ({ date }) => {
  const day = moment(date).format(TEST_FORMAT)
  const today = moment().format(TEST_FORMAT)
  const tomorrow = moment().add(1, 'd').format(TEST_FORMAT)
  switch ( day ) {
    case today: return "Oggi"
    case tomorrow: return "Domani"
    default: return <LongDate value={ date } />
  }
}
