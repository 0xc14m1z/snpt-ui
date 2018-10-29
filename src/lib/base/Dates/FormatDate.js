import moment from "moment"
import "moment/locale/it"

export const FormatDate = ({ value, format = "DD-MM-YYYY" }) =>
  moment(value).format(format)
