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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


var handleSelectDate = function handleSelectDate(dates, date, handleSelect) {
  console.log(dates, new Date(date).setHours(0, 0, 0, 0));

  if (dates && dates[new Date(date)]) {
    var newDates = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dates);

    delete newDates[new Date(date)];
    return newDates;
  }

  return handleSelect(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dates, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date(date), [])));
};

/***/ })

})
//# sourceMappingURL=index.js.ccb423ea2b40f91e4714.hot-update.js.map