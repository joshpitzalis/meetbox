webpackHotUpdate("static/development/pages/index.js",{

/***/ "./features/schedule/components/TimeBar.jsx":
/*!**************************************************!*\
  !*** ./features/schedule/components/TimeBar.jsx ***!
  \**************************************************/
/*! exports provided: default, convertToTimeInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToTimeInterval", function() { return convertToTimeInterval; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Buttons */ "./components/Buttons.jsx");
/* harmony import */ var _static_svg_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/svg/Add */ "./static/svg/Add.jsx");

var _jsxFileName = "/Users/joshpitzalis/Desktop/meetbox/features/schedule/components/TimeBar.jsx";






var propTypes = {
  dates: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string).isRequired,
  send: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
var defaultProps = {};
function TimeBar(_ref) {
  var dates = _ref.dates,
      send = _ref.send;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([1]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      times = _React$useState2[0],
      setTimes = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "w-100 tc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, dates && dates.map(function (date) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "pa5",
      key: date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, times && times.map(function (time) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeBlock, {
        date: date,
        setTimes: setTimes,
        times: times,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });
    }));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_5__["SecondaryButton"], {
    action: function action() {
      return send("ADDED_NEW_DATE");
    },
    text: "+ Add Another Date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
}
TimeBar.propTypes = propTypes;
TimeBar.defaultProps = defaultProps;
var convertToTimeInterval = function convertToTimeInterval(times) {
  var timeA = times[0];
  var timeB = times[1];

  var TwelveHourFormat = function TwelveHourFormat(time) {
    if (time > 12) {
      return "".concat(time - 12, " pm");
    }

    return "".concat(time, " am");
  };

  return "".concat(TwelveHourFormat(timeA), " to ").concat(TwelveHourFormat(timeB));
};

function TimeBlock(_ref2) {
  var date = _ref2.date,
      setTimes = _ref2.setTimes,
      times = _ref2.times;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([12, 13]),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      values = _React$useState4[0],
      handleChange = _React$useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "tc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(date), "do MMMM"), " at ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "f2 pl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, convertToTimeInterval(values))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "h3 ma3 flex ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "flex justify-around relative top-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, new Array(25).fill("").map(function (value, index) {
    if (index === 0) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: index,
        className: "bn flex items-center justify-center w-100 z-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_static_svg_Add__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "grow pb2 pointer gray",
        onClick: function onClick() {
          return setTimes(times.concat(1));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: index,
      className: "bn tc w-100 ".concat((index <= 5 || index >= 20) && "bg-light-gray"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "code pb2 tc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, index));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["RangeSelector"], {
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
      lineNumber: 90
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.fe832acddda24fbaadf5.hot-update.js.map