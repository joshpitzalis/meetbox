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

/***/ }),

/***/ "./features/schedule/components/TimeBar.jsx":
/*!**************************************************!*\
  !*** ./features/schedule/components/TimeBar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Buttons */ "./components/Buttons.jsx");
/* harmony import */ var _static_svg_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../static/svg/Add */ "./static/svg/Add.jsx");


var _jsxFileName = "/Users/joshpitzalis/Desktop/meetbox/features/schedule/components/TimeBar.jsx";






var propTypes = {
  dates: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string).isRequired,
  send: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
var defaultProps = {};
function TimeBar(_ref) {
  var dates = _ref.dates,
      send = _ref.send,
      setDates = _ref.setDates;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: "w-100 h-75 tc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "f1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Select up to 3 times..."), dates && _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(dates).map(function (dateTime) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      key: dateTime[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, dateTime.map(function (_ref2) {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          date = _ref3[0],
          time = _ref3[1];

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TimeBlock, {
        date: date,
        setDates: setDates,
        dates: dates,
        time: time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    }));
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["SecondaryButton"], {
    action: function action() {
      return send("ADDED_NEW_DATE");
    },
    text: "+ Add Another Date",
    className: "mt5 h-25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
}
TimeBar.propTypes = propTypes;
TimeBar.defaultProps = defaultProps;

var handleNewTime = function handleNewTime(setDates, dates) {
  console.log(setDates, dates);
};

function TimeBlock(_ref4) {
  var date = _ref4.date,
      setDates = _ref4.setDates,
      dates = _ref4.dates;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState([12, 13]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      values = _React$useState2[0],
      handleChange = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: "tc mt5 relative top-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(date), "do MMMM"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "f2 pl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, convertToTimeInterval(values))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "h3 ma3 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-100 pt0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "flex justify-around relative top-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, new Array(25).fill("").map(function (value, index) {
    if (index === 0) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: index,
        className: "bn flex items-center justify-center w-100 z-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_static_svg_Add__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "grow pb2 pointer gray",
        onClick: function onClick() {
          return handleNewTime(setDates, dates);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      key: index,
      className: "bn tc w-100 ".concat((index <= 5 || index >= 20) && "bg-light-gray"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "code pb2 tc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, index));
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["RangeSelector"], {
    values: values,
    min: 0,
    max: 24,
    step: 1,
    color: "#7D52D8",
    className: "relative  bottom-2 pt1",
    onChange: handleChange,
    round: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.0fb2816107593c9fcd3b.hot-update.js.map