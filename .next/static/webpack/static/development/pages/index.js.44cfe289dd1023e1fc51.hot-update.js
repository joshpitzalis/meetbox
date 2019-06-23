webpackHotUpdate("static/development/pages/index.js",{

/***/ "./features/schedule/components/TimeBar.jsx":
/*!**************************************************!*\
  !*** ./features/schedule/components/TimeBar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Buttons */ "./components/Buttons.jsx");
/* harmony import */ var _static_svg_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/svg/Add */ "./static/svg/Add.jsx");




var _jsxFileName = "/Users/joshpitzalis/Desktop/meetbox/features/schedule/components/TimeBar.jsx";





var propTypes = {
  dates: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string).isRequired,
  send: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
var defaultProps = {};
function TimeBar(_ref) {
  var dates = _ref.dates,
      send = _ref.send,
      setDates = _ref.setDates;
  console.log("dates", dates);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
    className: "w-100 h-75 tc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "f1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Select up to 3 times..."), dates && _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(dates).map(function (_ref2) {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2),
        date = _ref3[0],
        times = _ref3[1];

    console.log("dateTime", date, times);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, times.map(function (time) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TimeBlock, {
        date: date,
        setDates: setDates,
        dates: dates,
        time: time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    }));
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["SecondaryButton"], {
    action: function action() {
      return send("ADDED_NEW_DATE");
    },
    text: "+ Add Another Date",
    className: "mt5 h-25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
}
TimeBar.propTypes = propTypes;
TimeBar.defaultProps = defaultProps;

var handleNewTime = function handleNewTime(time, date, setDates, dates) {
  return setDates(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dates, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, date, [[13, 14]])));
};

var handleChangeTime = function handleChangeTime(times) {
  console.log("times", times);
};

var TimeBlock = function TimeBlock(_ref4) {
  var time = _ref4.time,
      date = _ref4.date,
      setDates = _ref4.setDates,
      dates = _ref4.dates;
  // console.log(time, date, setDates, dates);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
    className: "tc mt5 relative top-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "h3 ma3 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "w-100 pt0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "flex justify-around relative top-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, new Array(25).fill("").map(function (value, index) {
    if (index === 0) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        key: index,
        className: "bn flex items-center justify-center w-100 z-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_static_svg_Add__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "grow pb2 pointer gray",
        onClick: function onClick() {
          return handleNewTime(time, date, setDates, dates);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: index,
      className: "bn tc w-100 ".concat((index <= 5 || index >= 20) && "bg-light-gray"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      className: "code pb2 tc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, index));
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["RangeSelector"], {
    values: time,
    min: 0,
    max: 24,
    step: 1,
    color: "#7D52D8",
    className: "relative  bottom-2 pt1",
    onChange: handleChangeTime,
    round: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.44cfe289dd1023e1fc51.hot-update.js.map