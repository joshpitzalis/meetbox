webpackHotUpdate("static/development/pages/index.js",{

/***/ "./features/schedule/helpers/calendarHelpers.js":
/*!******************************************************!*\
  !*** ./features/schedule/helpers/calendarHelpers.js ***!
  \******************************************************/
/*! exports provided: handleSelectDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelectDate", function() { return handleSelectDate; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");

var handleSelectDate = function handleSelectDate(dates, date, handleSelect) {
  if (dates && dates.includes(date.toString())) {
    return handleSelect(dates.filter(function (item) {
      return item !== date.toString();
    }));
  }

  return handleSelect([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dates), [format(new Date(new Date().setDate(new Date().getDate() + 1)), "do MMMM")]));
};

/***/ })

})
//# sourceMappingURL=index.js.8f97d42fe4dea60ffef8.hot-update.js.map