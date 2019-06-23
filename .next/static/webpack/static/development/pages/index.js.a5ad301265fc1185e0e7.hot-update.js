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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);


var handleSelectDate = function handleSelectDate(dates, date, handleSelect) {
  if (dates && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(dates).includes(date.toString())) {
    var newDates = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dates);

    return handleSelect(dates.filter(function (item) {
      return item !== date.toString();
    }));
  }

  return handleSelect(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dates, {
    date: []
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.a5ad301265fc1185e0e7.hot-update.js.map