webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/lib/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _features_schedule_components_Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/schedule/components/Calendar */ "./features/schedule/components/Calendar.jsx");
/* harmony import */ var _features_schedule_components_TimeBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../features/schedule/components/TimeBar */ "./features/schedule/components/TimeBar.jsx");
/* harmony import */ var _static_svg_NextStep_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/svg/NextStep.jsx */ "./static/svg/NextStep.jsx");


var _jsxFileName = "/Users/joshpitzalis/Desktop/meetbox/pages/index.jsx";









var scheduleMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_5__["Machine"])({
  id: "schedule",
  initial: "times",
  states: {
    calendar: {
      on: {
        CONFIRMED_DATES: "times"
      }
    },
    times: {
      on: {
        CONFIRMED_TIMES: "ready",
        ADDED_NEW_DATE: "calendar"
      }
    },
    ready: {
      on: {
        SELECTED_A_DATE: "confirmed"
      }
    },
    confirmed: {
      type: "final"
    }
  }
});
var propTypes = {};
var defaultProps = {};
function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(new Date().setDate(new Date().getDate() + 1)), "do MMMM"), [])),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      dates = _useState2[0],
      setDates = _useState2[1];

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_3__["useMachine"])(scheduleMachine),
      _useMachine2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMachine, 2),
      current = _useMachine2[0],
      send = _useMachine2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "vh-100 vw-100 flex flex-column items-center justify-around pa0 ma0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, current.value === "calendar" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "f1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Pick up to 3 dates to meet..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_features_schedule_components_Calendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleSelect: setDates,
    dates: dates,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_static_svg_NextStep_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    action: function action() {
      return send("CONFIRMED_DATES");
    },
    className: "pointer grow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), current.value === "times" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_features_schedule_components_TimeBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dates: dates,
    send: send,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_static_svg_NextStep_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    action: function action() {
      return send("CONFIRMED_TIMES");
    },
    className: "pointer grow gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
}
index.propTypes = propTypes;
index.defaultProps = defaultProps;

/***/ })

})
//# sourceMappingURL=index.js.bb80ee512c95a1d79e16.hot-update.js.map