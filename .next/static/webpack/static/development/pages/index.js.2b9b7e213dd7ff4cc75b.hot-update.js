webpackHotUpdate("static/development/pages/index.js",{

/***/ "./features/schedule/components/Calendar.jsx":
/*!***************************************************!*\
  !*** ./features/schedule/components/Calendar.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calendar; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_calendarHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/calendarHelpers */ "./features/schedule/helpers/calendarHelpers.js");

var _jsxFileName = "/Users/joshpitzalis/Desktop/meetbox/features/schedule/components/Calendar.jsx";




var propTypes = {
  handleSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dates: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string).isRequired
};
var defaultProps = {};
function calendar(_ref) {
  var handleSelect = _ref.handleSelect,
      dates = _ref.dates;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "center ma4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Calendar"], {
    onSelect: function onSelect(date) {
      return Object(_helpers_calendarHelpers__WEBPACK_IMPORTED_MODULE_4__["handleSelectDate"])(dates, date, handleSelect);
    },
    size: "medium",
    showAdjacentDays: true,
    animate: true,
    dates: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(dates),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}
calendar.propTypes = propTypes;
calendar.defaultProps = defaultProps;

/***/ })

})
//# sourceMappingURL=index.js.2b9b7e213dd7ff4cc75b.hot-update.js.map