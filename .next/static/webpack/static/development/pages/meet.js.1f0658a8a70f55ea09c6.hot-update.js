webpackHotUpdate("static/development/pages/meet.js",{

/***/ "./pages/meet/index.jsx":
/*!******************************!*\
  !*** ./pages/meet/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _features_schedule_helpers_timeBarHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/schedule/helpers/timeBarHelpers */ "./features/schedule/helpers/timeBarHelpers.js");
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sideEffects/firebase */ "./sideEffects/firebase.js");









var propTypes = {};
var defaultProps = {};

var getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(url) {
    var slug, meetings;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = url.query.slug;
            _context.next = 3;
            return _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_8__["default"].firestore().collection("meetings").doc(slug).get().then(function (doc) {
              return doc.exists && doc.data();
            }).catch(function (error) {
              return error;
            });

          case 3:
            meetings = _context.sent;
            return _context.abrupt("return", {
              meetings: meetings
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInitialProps(_x) {
    return _ref.apply(this, arguments);
  };
}();

function index(_ref2) {
  var meetings = _ref2.meetings;

  var options = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(JSON.parse(meetings.options));

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "f1 tc"
  }, "Pick a time..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: "flex items-center justify-center"
  }, options && options.map(function (_ref3) {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
        date = _ref4[0],
        _ref4$ = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4[1], 1),
        time = _ref4$[0];

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
      className: "mw5  center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 pointer grow"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "tc"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
      className: "f4 black-70"
    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(date), "do MMMM")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
      className: "mw3 bb bw1 b--black-10"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "lh-copy measure center f3 "
    }, Object(_features_schedule_helpers_timeBarHelpers__WEBPACK_IMPORTED_MODULE_7__["convertToTimeInterval"])(time)));
  })));
}
index.propTypes = propTypes;
index.defaultProps = defaultProps;
index.getInitialProps = getInitialProps;

/***/ })

})
//# sourceMappingURL=meet.js.1f0658a8a70f55ea09c6.hot-update.js.map