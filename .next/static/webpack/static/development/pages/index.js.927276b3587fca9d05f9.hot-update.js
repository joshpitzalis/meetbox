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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/lib/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _features_schedule_components_Calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../features/schedule/components/Calendar */ "./features/schedule/components/Calendar.jsx");
/* harmony import */ var _features_schedule_components_TimeBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../features/schedule/components/TimeBar */ "./features/schedule/components/TimeBar/index.jsx");
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sideEffects/firebase */ "./sideEffects/firebase.js");
/* harmony import */ var _static_svg_NextStep_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/svg/NextStep.jsx */ "./static/svg/NextStep.jsx");
















var createMeeting =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
    var payload;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = event.payload;
            _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("meetings").add({
              options: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(payload)
            }).catch(function (error) {
              return error;
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createMeeting(_x) {
    return _ref.apply(this, arguments);
  };
}();

var scheduleMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_8__["Machine"])({
  id: "schedule",
  initial: "calendar",
  states: {
    calendar: {
      on: {
        CONFIRMED_DATES: "times"
      }
    },
    times: {
      on: {
        CONFIRMED_TIMES: "loading",
        ADDED_NEW_DATE: "calendar"
      }
    },
    loading: {
      invoke: {
        id: "createMeeting",
        src: function src(context, event) {
          return createMeeting(event);
        },
        onDone: {
          target: "ready"
        },
        onError: {
          target: "failure",
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_8__["assign"])({
            error: function error(context, event) {
              return event.data;
            }
          })
        }
      }
    },
    ready: {
      on: {
        SELECTED_A_DATE: "confirmed"
      }
    },
    confirmed: {
      type: "final"
    },
    failure: {
      type: "final"
    }
  }
});
var propTypes = {};
var defaultProps = {};

var getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
    var meetings;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection("meetings").get().then(function (collection) {
              return collection.docs.map(function (doc) {
                return doc.data();
              });
            }).catch(function (error) {
              return error;
            });

          case 2:
            meetings = _context2.sent;
            return _context2.abrupt("return", {
              meetings: meetings
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getInitialProps() {
    return _ref2.apply(this, arguments);
  };
}();

function index(_ref3) {
  var meetings = _ref3.meetings;
  var tomorrow = new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tomorrow, [[13, 14]])),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      dates = _useState2[0],
      setDates = _useState2[1];

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_6__["useMachine"])(scheduleMachine),
      _useMachine2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMachine, 2),
      current = _useMachine2[0],
      send = _useMachine2[1];

  console.log("meetings", meetings);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: "vh-100 vw-100 flex flex-column items-center justify-around pa0 ma0"
  }, current.value === "calendar" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "f1"
  }, "Pick up to 3 dates to meet..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_features_schedule_components_Calendar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleSelect: setDates,
    dates: dates
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_static_svg_NextStep_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
    action: function action() {
      return send("CONFIRMED_DATES");
    },
    className: "pointer grow"
  })), current.value === "times" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_features_schedule_components_TimeBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    dates: dates,
    send: send,
    setDates: setDates
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_static_svg_NextStep_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
    action: function action() {
      return send({
        type: "CONFIRMED_TIMES",
        payload: dates
      });
    },
    className: "pointer grow gray"
  })), current.value === "ready" && next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/meet/123")));
}
index.propTypes = propTypes;
index.defaultProps = defaultProps;
index.getInitialProps = getInitialProps;

/***/ })

})
//# sourceMappingURL=index.js.927276b3587fca9d05f9.hot-update.js.map