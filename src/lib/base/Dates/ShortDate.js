import React from "react"

import { FormatDate } from "./FormatDate"

export const ShortDate = ({ value }) => (
  <FormatDate value={value} format="DD MMMM YYYY" />
)
