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
/* harmony import */ var _helpers_timeBarHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/timeBarHelpers.js */ "./features/schedule/helpers/timeBarHelpers.js");


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
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "f1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Select up to 3 times..."), dates && _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(dates).map(function (dateTime) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      key: dateTime[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
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
          lineNumber: 23
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
      lineNumber: 33
    },
    __self: this
  }));
}
TimeBar.propTypes = propTypes;
TimeBar.defaultProps = defaultProps;

var handleNewTime = function handleNewTime(setDates, dates) {
  console.log(setDates, dates);
};

var TimeBlock = function TimeBlock(_ref4) {
  var time = _ref4.time,
      date = _ref4.date,
      setDates = _ref4.setDates,
      dates = _ref4.dates;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: "tc mt5 relative top-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(date), "do MMMM"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "f2 pl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, Object(_helpers_timeBarHelpers_js__WEBPACK_IMPORTED_MODULE_8__["convertToTimeInterval"])(time))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "h3 ma3 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-100 pt0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "flex justify-around relative top-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, new Array(25).fill("").map(function (value, index) {
    if (index === 0) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: index,
        className: "bn flex items-center justify-center w-100 z-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_static_svg_Add__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "grow pb2 pointer gray",
        onClick: function onClick() {
          return handleNewTime(time, date, setDates, dates);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      key: index,
      className: "bn tc w-100 ".concat((index <= 5 || index >= 20) && "bg-light-gray"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "code pb2 tc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
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
      lineNumber: 84
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.812ccba6e685348b941e.hot-update.js.map