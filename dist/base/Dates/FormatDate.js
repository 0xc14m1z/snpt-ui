import moment from "moment";
import "moment/locale/it";
export var FormatDate = function FormatDate(_ref) {
  var value = _ref.value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "DD-MM-YYYY" : _ref$format;
  return moment(value).format(format);
};