import React from "react"

import { FormatDate } from "./FormatDate"

export const LongDate = ({ value }) => (
  <FormatDate value={value} format="dddd DD MMMM YYYY" />
)
