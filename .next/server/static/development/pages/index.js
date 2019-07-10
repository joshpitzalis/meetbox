module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_tachyons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/tachyons.css */ "./static/tachyons.css");
/* harmony import */ var _static_tachyons_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_tachyons_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_typeface_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/typeface.css */ "./static/typeface.css");
/* harmony import */ var _static_typeface_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_typeface_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/joshpitzalis/Desktop/agenda/components/Layout.jsx";





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    className: "pa0 ma0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Grommet"], {
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children));
}
Layout.propTypes = propTypes;

/***/ }),

/***/ "./features/agenda/components/AgendaItem.tsx":
/*!***************************************************!*\
  !*** ./features/agenda/components/AgendaItem.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sideEffects/firebase */ "./sideEffects/firebase.js");
/* harmony import */ var _AgendaItemName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AgendaItemName */ "./features/agenda/components/AgendaItemName.tsx");
/* harmony import */ var _Prerequisites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Prerequisites */ "./features/agenda/components/Prerequisites.tsx");


var _jsxFileName = "/Users/joshpitzalis/Desktop/agenda/features/agenda/components/AgendaItem.tsx";









var AgendaItem = function AgendaItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      prep = _ref.prep,
      index = _ref.index,
      meetingId = _ref.meetingId,
      state = _ref.state;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      showNotes = _useState2[0],
      setShowNotes = _useState2[1];

  var deleteItem = function deleteItem(itemId, meetingId) {
    return _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "items.".concat(itemId), _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldValue["delete"]()))["catch"](function (error) {
      return console.error(error);
    });
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "flex items-center item".concat(index, " pl6 near-black"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, confirm ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "h5 flex flex-column items-center justify-center w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1528990481" + " " + "f3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "You sure you want to delete this item ?"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "w-100 flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    label: "Confirm Deletion",
    onClick: function onClick() {
      deleteItem(id, meetingId);
      setConfirm(false);
    },
    className: "pointer mh5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "w3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    label: "No, I've changed my mind.",
    onClick: function onClick() {
      return setConfirm(false);
    },
    className: "pointer",
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("dl", {
    className: "jsx-1528990481" + " " + "fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("dd", {
    className: "jsx-1528990481" + " " + "f3 fw6 ml0 ttu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "5"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("dd", {
    className: "jsx-1528990481" + " " + "f6 fw4 ml0 ttu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "min")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AgendaItemName__WEBPACK_IMPORTED_MODULE_7__["AgendaItemName"], {
    name: name,
    id: id,
    meetingId: meetingId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), (state === "draft" || state === "confirmed") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Prerequisites__WEBPACK_IMPORTED_MODULE_8__["Prerequisites"], {
    meetingId: meetingId,
    id: id,
    prep: prep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), (state === "draft" || state === "active") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_5__["Close"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }),
    onClick: function onClick() {
      return setConfirm(true);
    },
    className: "pointer grow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), (state === "active" || state === "complete") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowNotes(true);
    },
    className: "jsx-1528990481" + " " + "ml5 ma3 w5 h3 pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "ma3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_5__["Add"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }),
    label: "Add Notes, Tasks, Votes Or Decisions",
    onClick: function onClick() {
      return console.log([{
        id: +new Date()
      }]);
    },
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1528990481",
    __self: this
  }, ".item0.jsx-1528990481{background-color:#fdfce7;}.item1.jsx-1528990481{background-color:#faf4c0;}.item2.jsx-1528990481{background-color:#e0eac3;}.item3.jsx-1528990481{background-color:#c6e0d7;}.item4.jsx-1528990481{background-color:#b2cdd7;}.item5.jsx-1528990481{background-color:#cbb39e;}.item6.jsx-1528990481{background-color:#e79c74;}.item7.jsx-1528990481{background-color:#e49883;}.item8.jsx-1528990481{background-color:#df9598;}.item9.jsx-1528990481{background-color:#d1869f;}.item10.jsx-1528990481{background-color:#bc72a7;}.item11.jsx-1528990481{background-color:#894f9c;}.item12.jsx-1528990481{background-color:#3a2a76;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvZmVhdHVyZXMvYWdlbmRhL2NvbXBvbmVudHMvQWdlbmRhSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZTLEFBR3NDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLHlCQW5DM0IsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9mZWF0dXJlcy9hZ2VuZGEvY29tcG9uZW50cy9BZ2VuZGFJdGVtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgeyBBZGQsIENsb3NlIH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uLy4uLy4uL3NpZGVFZmZlY3RzL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBBZ2VuZGFJdGVtTmFtZSB9IGZyb20gXCIuL0FnZW5kYUl0ZW1OYW1lXCI7XG5pbXBvcnQgeyBQcmVyZXF1aXNpdGVzIH0gZnJvbSBcIi4vUHJlcmVxdWlzaXRlc1wiO1xuXG5jb25zdCBBZ2VuZGFJdGVtID0gKHsgaWQsIG5hbWUsIHByZXAsIGluZGV4LCBtZWV0aW5nSWQsIHN0YXRlIH0pID0+IHtcbiAgY29uc3QgW3Nob3dOb3Rlcywgc2V0U2hvd05vdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW1JZCwgbWVldGluZ0lkKSA9PlxuICAgIGZpcmViYXNlXG4gICAgICAuZmlyZXN0b3JlKClcbiAgICAgIC5kb2MoYG1lZXRpbmdzLyR7bWVldGluZ0lkfWApXG4gICAgICAudXBkYXRlKHtcbiAgICAgICAgW2BpdGVtcy4ke2l0ZW1JZH1gXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuZGVsZXRlKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG4gIGNvbnN0IFtjb25maXJtLCBzZXRDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGl0ZW0ke2luZGV4fSBwbDYgbmVhci1ibGFja2B9PlxuICAgICAge2NvbmZpcm0gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgZmxleCBmbGV4LWNvbHVtbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0xMDBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmM1wiPllvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0gPzwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIERlbGV0aW9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0oaWQsIG1lZXRpbmdJZCk7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybShmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXIgbWg1XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJObywgSSd2ZSBjaGFuZ2VkIG15IG1pbmQuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29uZmlybShmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICBwbGFpblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJmbCBmbi1sIHctNTAgZGliLWwgdy1hdXRvLWwgbGgtdGl0bGUgbXI1LWwgcGEzXCI+XG4gICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiZjMgZnc2IG1sMCB0dHVcIj41PC9kZD5cbiAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJmNiBmdzQgbWwwIHR0dVwiPm1pbjwvZGQ+XG4gICAgICAgICAgPC9kbD5cbiAgICAgICAgICA8QWdlbmRhSXRlbU5hbWUgbmFtZT17bmFtZX0gaWQ9e2lkfSBtZWV0aW5nSWQ9e21lZXRpbmdJZH0gLz5cblxuICAgICAgICAgIHsoc3RhdGUgPT09IFwiZHJhZnRcIiB8fCBzdGF0ZSA9PT0gXCJjb25maXJtZWRcIikgJiYgKFxuICAgICAgICAgICAgPFByZXJlcXVpc2l0ZXMgbWVldGluZ0lkPXttZWV0aW5nSWR9IGlkPXtpZH0gcHJlcD17cHJlcH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsoc3RhdGUgPT09IFwiZHJhZnRcIiB8fCBzdGF0ZSA9PT0gXCJhY3RpdmVcIikgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBpY29uPXs8Q2xvc2UgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpcm0odHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXIgZ3Jvd1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyhzdGF0ZSA9PT0gXCJhY3RpdmVcIiB8fCBzdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sNSBtYTMgdzUgaDMgcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dOb3Rlcyh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYTNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpY29uPXs8QWRkIC8+fVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQgTm90ZXMsIFRhc2tzLCBWb3RlcyBPciBEZWNpc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coW3sgaWQ6ICtuZXcgRGF0ZSgpIH1dKX1cbiAgICAgICAgICAgICAgICAgIHBsYWluXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIHRoZXJlIHNob3VsZCBhbHNvIGJlIGEgdGFza3Mgc2VjdGlvbiAqL31cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5pdGVtMCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2U3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjRjMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhYzM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZlMGQ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IyY2RkNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW01IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmIzOWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtNiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5Yzc0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0OTg4MztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW04IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjk1OTg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtOSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE4NjlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTEwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzcyYTc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMTEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5NGY5YztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0xMiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EyYTc2O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZ2VuZGFJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/features/agenda/components/AgendaItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AgendaItem);

/***/ }),

/***/ "./features/agenda/components/AgendaItemName.tsx":
/*!*******************************************************!*\
  !*** ./features/agenda/components/AgendaItemName.tsx ***!
  \*******************************************************/
/*! exports provided: AgendaItemName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaItemName", function() { return AgendaItemName; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sideEffects/firebase */ "./sideEffects/firebase.js");


var _jsxFileName = "/Users/joshpitzalis/Desktop/agenda/features/agenda/components/AgendaItemName.tsx";





function AgendaItemName(_ref) {
  var name = _ref.name,
      id = _ref.id,
      meetingId = _ref.meetingId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      editMode = _useState2[0],
      toggleEditMode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var handleSubmit = function handleSubmit(data) {
    var value = data.value;
    toggleEditMode(false);
    _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "items.".concat(id, ".name"), value.name))["catch"](function (error) {
      return console.error(error);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "measure-wide flex-grow-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, editMode ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: function onSubmit(data) {
      return handleSubmit(data);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
    name: "name",
    label: "Agenda Item",
    className: "measure",
    placeholder: "Give your first agenda Item a name",
    required: true,
    value: title || name,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    label: "Save Description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex items-center measure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Edit"], {
    className: "dim ma3 pointer",
    onClick: function onClick() {
      return toggleEditMode(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, name)));
}

/***/ }),

/***/ "./features/agenda/components/PrepItem.tsx":
/*!*************************************************!*\
  !*** ./features/agenda/components/PrepItem.tsx ***!
  \*************************************************/
/*! exports provided: PrepItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepItem", function() { return PrepItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sideEffects/firebase */ "./sideEffects/firebase.js");


var _jsxFileName = "/Users/joshpitzalis/Desktop/agenda/features/agenda/components/PrepItem.tsx";





function PrepItem(_ref) {
  var name = _ref.name,
      id = _ref.id,
      editMode = _ref.editMode,
      meetingId = _ref.meetingId,
      itemId = _ref.itemId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      completed = _useState2[0],
      markComplete = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ma3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, editMode ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Close"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }),
    type: "button",
    label: name,
    plain: true,
    onClick: function onClick() {
      return _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "items.".concat(itemId, ".prep.").concat(id), _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue["delete"]()))["catch"](function (error) {
        return console.error(error);
      });
    },
    className: "dim",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["RadioButton"], {
    name: name,
    key: id,
    checked: completed,
    label: name,
    onChange: function onChange() {
      return markComplete(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
}

/***/ }),

/***/ "./features/agenda/components/Prerequisites.tsx":
/*!******************************************************!*\
  !*** ./features/agenda/components/Prerequisites.tsx ***!
  \******************************************************/
/*! exports provided: Prerequisites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prerequisites", function() { return Prerequisites; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sideEffects/firebase */ "./sideEffects/firebase.js");
/* harmony import */ var _PrepItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PrepItem */ "./features/agenda/components/PrepItem.tsx");



var _jsxFileName = "/Users/joshpitzalis/Desktop/agenda/features/agenda/components/Prerequisites.tsx";





var Prerequisites = function Prerequisites(_ref) {
  var meetingId = _ref.meetingId,
      id = _ref.id,
      prep = _ref.prep;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      editMode = _useState2[0],
      setEditMode = _useState2[1];

  var prepItems = prep && _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(prep);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: ""
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      value = _useState4[0],
      resetForm = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ml5 ma3 flex-grow-1 measure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, prepItems && prepItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PrepItem__WEBPACK_IMPORTED_MODULE_6__["PrepItem"], {
      name: item.name,
      id: item.id,
      editMode: editMode,
      meetingId: meetingId,
      itemId: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }), editMode ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ma3 pt4 pl2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    value: value,
    onSubmit: function onSubmit(data) {
      var value = data.value;
      var prepId = +new Date();
      var name = value.name;
      resetForm({
        name: ""
      });
      _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "items.".concat(id, ".prep.").concat(prepId), {
        id: prepId,
        name: name
      }))["catch"](function (error) {
        return console.error(error);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["FormField"], {
    name: "name",
    label: "Preparation",
    placeholder: "Describe any prep you need people to do for this agenda item.",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-100 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    label: "Add",
    className: "pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "w3 tc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "button",
    label: "Close",
    plain: true,
    onClick: function onClick() {
      return setEditMode(false);
    },
    className: "pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "tc o-50 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "button",
    label: prepItems && prepItems.length > 0 ? "Click to add more prep." : "Click here to add prep.",
    plain: true,
    onClick: function onClick() {
      return setEditMode(true);
    },
    className: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @xstate/react */ "@xstate/react");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxfire/firestore */ "rxfire/firestore");
/* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxfire_firestore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xstate */ "xstate");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _features_agenda_components_AgendaItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../features/agenda/components/AgendaItem */ "./features/agenda/components/AgendaItem.tsx");
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sideEffects/firebase */ "./sideEffects/firebase.js");





var _jsxFileName = "/Users/joshpitzalis/Desktop/agenda/pages/index.jsx";











var offline = false;
var meetingId = "1l3wk";

var createAgenda = function createAgenda(event) {
  if (offline) {
    return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/meeting/".concat(meetingId));
  }

  var doc = _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_15__["default"].firestore().collection("meetings").doc(); // return Router.push(`/meeting/${doc.id}`);

  return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push({
    pathname: "/meeting/".concat(doc.id),
    query: {
      meetingId: doc.id
    }
  });
};

var propTypes = {};
var defaultProps = {};
var agendaMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_12__["Machine"])({
  id: "agenda",
  initial: "loading",
  states: {
    loading: {
      on: {
        NEW_AGENDA_CREATED: "creatingAgenda",
        REDIRECTED_TO_EXISTING_AGENDA: "draft"
      }
    },
    creatingAgenda: {
      invoke: {
        id: "createAgenda",
        src: function src(context, event) {
          return createAgenda(event);
        },
        onDone: {
          target: "draft" // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8

        },
        onError: {
          target: "loading"
        }
      }
    },
    draft: {
      on: {
        SAVED_DRAFT: "confirmed"
      }
    },
    confirmed: {
      on: {
        STARTED: "active"
      }
    },
    active: {
      on: {
        ENDED: "complete"
      }
    },
    complete: {
      type: "final"
    }
  }
});

var useStreamMeeting = function useStreamMeeting(id) {
  var stream$ = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_11__["doc"])(_sideEffects_firebase__WEBPACK_IMPORTED_MODULE_15__["default"].firestore().doc("meetings/".concat(id)));

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      meeting = _React$useState2[0],
      updateMeeting = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    var stream = stream$.subscribe(function (snapshot) {
      return updateMeeting(snapshot.data());
    });
    return function () {
      return stream.unsubscribe();
    };
  }, []);
  return meeting;
}; // const getInitialProps = async () => {
//   // const slug = url.query.slug;
//   // const meetings = await firebase
//   //   .firestore()
//   //   .collection("meetings")
//   //   .doc(slug)
//   //   .get()
//   //   .then(doc => doc.exists && doc.data())
//   //   .catch(error => error);
//   // return { meetings };
//   const router = useRouter();
//   const { meetingId } = router.query;
//   return { meetingId };
// };


function index(props) {
  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_7__["useMachine"])(agendaMachine),
      _useMachine2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMachine, 2),
      current = _useMachine2[0],
      send = _useMachine2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  var meetingId = router.query.meetingId;
  console.log("meetingIdA", meetingId); // React.useEffect(() => {
  //   if (!meetingId) {
  //     send("NEW_AGENDA_CREATED");
  //   }
  //   // send("REDIRECTED_TO_EXISTING_AGENDA");
  // }, [meetingId]);

  var meeting = useStreamMeeting(meetingId);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(offline ? [] : meeting && _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default()(meeting.items)),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      listOfMeetings = _React$useState4[0],
      setMeetings = _React$useState4[1];

  var handleAddMeeting = function handleAddMeeting() {
    var timestamp = +new Date();

    if (offline) {
      var newMeetings = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(listOfMeetings), [Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "items.".concat(timestamp, ".id"), timestamp)]);
      return setMeetings(newMeetings);
    }

    _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_15__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "items.".concat(timestamp, ".id"), timestamp))["catch"](function (error) {
      return console.error(error);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, (current.value === "loading" || current.value === "creatingAgenda") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "vh-100 vw-100 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_8__["Clock"], {
    type: "digital",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), (current.value === "draft" || current.value === "confirmed" || current.value === "active" || current.value === "complete") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
    className: "jsx-2034684555" + " " + "flex  vh-100 w-100 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("aside", {
    className: "jsx-2034684555" + " " + " flex flex-column justify-around items-center fixed vh-100 bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, current.value === "confirmed" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Play"], {
    onClick: function onClick() {
      return send({
        type: "STARTED"
      });
    },
    className: "pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }) : current.value === "active" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Stop"], {
    className: "pointer ",
    onClick: function onClick() {
      return send("ENDED");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2034684555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-2034684555" + " " + "ph4 title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Meetbox"), current.value === "draft" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Send"], {
    className: "pointer ",
    onClick: function onClick() {
      return send("SAVED_DRAFT");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2034684555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "flex-grow-1 w-100 flex flex-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, listOfMeetings.map(function (props, index) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_features_agenda_components_AgendaItem__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      index: index,
      meetingId: meetingId,
      state: current.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }));
  }), (current.value === "draft" || current.value === "active") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "pa5 tc w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Add"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }),
    className: "pointer grow",
    size: "large",
    primary: true,
    label: "Add Agenda Item",
    onClick: handleAddMeeting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  })))), current.value === "failure" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "vh-100 vw-100 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "FAILURE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2034684555",
    __self: this
  }, ".title.jsx-2034684555{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);text-align:center;font-size:4rem;text-transform:uppercase;font-family:Futura,\"Trebuchet MS\",Arial,sans-serif;font-size:23px !important;font-style:normal;font-variant:normal;font-weight:700;line-height:23px;color:#363d87;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFOUyxBQUdzQyxpRkFDQSx1RkFDUCxrQkFDSCxlQUNVLHlCQUU2QixtREFDNUIsMEJBQ1Isa0JBQ0Usb0JBQ0osZ0JBQ0MsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2xvY2sgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgQWRkLCBQbGF5LCBTZW5kLCBTdG9wIH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBkb2MgfSBmcm9tIFwicnhmaXJlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQWdlbmRhSXRlbSBmcm9tIFwiLi4vZmVhdHVyZXMvYWdlbmRhL2NvbXBvbmVudHMvQWdlbmRhSXRlbVwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9zaWRlRWZmZWN0cy9maXJlYmFzZVwiO1xuXG5jb25zdCBvZmZsaW5lID0gZmFsc2U7XG5jb25zdCBtZWV0aW5nSWQgPSBcIjFsM3drXCI7XG5cbmNvbnN0IGNyZWF0ZUFnZW5kYSA9IGV2ZW50ID0+IHtcbiAgaWYgKG9mZmxpbmUpIHtcbiAgICByZXR1cm4gUm91dGVyLnB1c2goYC9tZWV0aW5nLyR7bWVldGluZ0lkfWApO1xuICB9XG4gIGNvbnN0IGRvYyA9IGZpcmViYXNlXG4gICAgLmZpcmVzdG9yZSgpXG4gICAgLmNvbGxlY3Rpb24oXCJtZWV0aW5nc1wiKVxuICAgIC5kb2MoKTtcbiAgLy8gcmV0dXJuIFJvdXRlci5wdXNoKGAvbWVldGluZy8ke2RvYy5pZH1gKTtcbiAgcmV0dXJuIFJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogYC9tZWV0aW5nLyR7ZG9jLmlkfWAsXG4gICAgcXVlcnk6IHsgbWVldGluZ0lkOiBkb2MuaWQgfVxuICB9KTtcbn07XG5cbmNvbnN0IHByb3BUeXBlcyA9IHt9O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcblxuY29uc3QgYWdlbmRhTWFjaGluZSA9IE1hY2hpbmUoe1xuICBpZDogXCJhZ2VuZGFcIixcblxuICBpbml0aWFsOiBcImxvYWRpbmdcIixcbiAgc3RhdGVzOiB7XG4gICAgbG9hZGluZzoge1xuICAgICAgb246IHtcbiAgICAgICAgTkVXX0FHRU5EQV9DUkVBVEVEOiBcImNyZWF0aW5nQWdlbmRhXCIsXG4gICAgICAgIFJFRElSRUNURURfVE9fRVhJU1RJTkdfQUdFTkRBOiBcImRyYWZ0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0aW5nQWdlbmRhOiB7XG4gICAgICBpbnZva2U6IHtcbiAgICAgICAgaWQ6IFwiY3JlYXRlQWdlbmRhXCIsXG4gICAgICAgIHNyYzogKGNvbnRleHQsIGV2ZW50KSA9PiBjcmVhdGVBZ2VuZGEoZXZlbnQpLFxuICAgICAgICBvbkRvbmU6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwiZHJhZnRcIlxuICAgICAgICAgIC8vIFRoZSByZXNvbHZlZCBkYXRhIGlzIHBsYWNlZCBpbnRvIGEgJ2RvbmUuaW52b2tlLjxpZD4nIGV2ZW50LCB1bmRlciB0aGUgZGF0YSBwcm9wZXJ0eSBodHRwOi8vYml0Lmx5LzJGdDJXUjhcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjoge1xuICAgICAgICAgIHRhcmdldDogXCJsb2FkaW5nXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZnQ6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFNBVkVEX0RSQUZUOiBcImNvbmZpcm1lZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25maXJtZWQ6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFNUQVJURUQ6IFwiYWN0aXZlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZToge1xuICAgICAgb246IHtcbiAgICAgICAgRU5ERUQ6IFwiY29tcGxldGVcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcGxldGU6IHsgdHlwZTogXCJmaW5hbFwiIH1cbiAgfVxufSk7XG5cbmNvbnN0IHVzZVN0cmVhbU1lZXRpbmcgPSBpZCA9PiB7XG4gIGNvbnN0IHN0cmVhbSQgPSBkb2MoZmlyZWJhc2UuZmlyZXN0b3JlKCkuZG9jKGBtZWV0aW5ncy8ke2lkfWApKTtcbiAgY29uc3QgW21lZXRpbmcsIHVwZGF0ZU1lZXRpbmddID0gUmVhY3QudXNlU3RhdGUoKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdHJlYW0gPSBzdHJlYW0kLnN1YnNjcmliZShzbmFwc2hvdCA9PlxuICAgICAgdXBkYXRlTWVldGluZyhzbmFwc2hvdC5kYXRhKCkpXG4gICAgKTtcbiAgICByZXR1cm4gKCkgPT4gc3RyZWFtLnVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIG1lZXRpbmc7XG59O1xuXG4vLyBjb25zdCBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIC8vIGNvbnN0IHNsdWcgPSB1cmwucXVlcnkuc2x1Zztcbi8vICAgLy8gY29uc3QgbWVldGluZ3MgPSBhd2FpdCBmaXJlYmFzZVxuLy8gICAvLyAgIC5maXJlc3RvcmUoKVxuLy8gICAvLyAgIC5jb2xsZWN0aW9uKFwibWVldGluZ3NcIilcbi8vICAgLy8gICAuZG9jKHNsdWcpXG4vLyAgIC8vICAgLmdldCgpXG4vLyAgIC8vICAgLnRoZW4oZG9jID0+IGRvYy5leGlzdHMgJiYgZG9jLmRhdGEoKSlcbi8vICAgLy8gICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IpO1xuLy8gICAvLyByZXR1cm4geyBtZWV0aW5ncyB9O1xuXG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIGNvbnN0IHsgbWVldGluZ0lkIH0gPSByb3V0ZXIucXVlcnk7XG5cbi8vICAgcmV0dXJuIHsgbWVldGluZ0lkIH07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleChwcm9wcykge1xuICBjb25zdCBbY3VycmVudCwgc2VuZF0gPSB1c2VNYWNoaW5lKGFnZW5kYU1hY2hpbmUpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgbWVldGluZ0lkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc29sZS5sb2coXCJtZWV0aW5nSWRBXCIsIG1lZXRpbmdJZCk7XG5cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoIW1lZXRpbmdJZCkge1xuICAvLyAgICAgc2VuZChcIk5FV19BR0VOREFfQ1JFQVRFRFwiKTtcbiAgLy8gICB9XG4gIC8vICAgLy8gc2VuZChcIlJFRElSRUNURURfVE9fRVhJU1RJTkdfQUdFTkRBXCIpO1xuICAvLyB9LCBbbWVldGluZ0lkXSk7XG5cbiAgY29uc3QgbWVldGluZyA9IHVzZVN0cmVhbU1lZXRpbmcobWVldGluZ0lkKTtcblxuICBjb25zdCBbbGlzdE9mTWVldGluZ3MsIHNldE1lZXRpbmdzXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIG9mZmxpbmUgPyBbXSA6IG1lZXRpbmcgJiYgT2JqZWN0LnZhbHVlcyhtZWV0aW5nLml0ZW1zKVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUFkZE1lZXRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gK25ldyBEYXRlKCk7XG5cbiAgICBpZiAob2ZmbGluZSkge1xuICAgICAgY29uc3QgbmV3TWVldGluZ3MgPSBbXG4gICAgICAgIC4uLmxpc3RPZk1lZXRpbmdzLFxuICAgICAgICB7XG4gICAgICAgICAgW2BpdGVtcy4ke3RpbWVzdGFtcH0uaWRgXTogdGltZXN0YW1wXG4gICAgICAgIH1cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBzZXRNZWV0aW5ncyhuZXdNZWV0aW5ncyk7XG4gICAgfVxuXG4gICAgZmlyZWJhc2VcbiAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgLmRvYyhgbWVldGluZ3MvJHttZWV0aW5nSWR9YClcbiAgICAgIC51cGRhdGUoe1xuICAgICAgICBbYGl0ZW1zLiR7dGltZXN0YW1wfS5pZGBdOiB0aW1lc3RhbXBcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHsoY3VycmVudC52YWx1ZSA9PT0gXCJsb2FkaW5nXCIgfHwgY3VycmVudC52YWx1ZSA9PT0gXCJjcmVhdGluZ0FnZW5kYVwiKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmgtMTAwIHZ3LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxDbG9jayB0eXBlPVwiZGlnaXRhbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgeyhjdXJyZW50LnZhbHVlID09PSBcImRyYWZ0XCIgfHxcbiAgICAgICAgY3VycmVudC52YWx1ZSA9PT0gXCJjb25maXJtZWRcIiB8fFxuICAgICAgICBjdXJyZW50LnZhbHVlID09PSBcImFjdGl2ZVwiIHx8XG4gICAgICAgIGN1cnJlbnQudmFsdWUgPT09IFwiY29tcGxldGVcIikgJiYgKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4ICB2aC0xMDAgdy0xMDAgXCI+XG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBmaXhlZCB2aC0xMDAgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIHtjdXJyZW50LnZhbHVlID09PSBcImNvbmZpcm1lZFwiID8gKFxuICAgICAgICAgICAgICA8UGxheVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbmQoeyB0eXBlOiBcIlNUQVJURURcIiB9KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBjdXJyZW50LnZhbHVlID09PSBcImFjdGl2ZVwiID8gKFxuICAgICAgICAgICAgICA8U3RvcCBjbGFzc05hbWU9XCJwb2ludGVyIFwiIG9uQ2xpY2s9eygpID0+IHNlbmQoXCJFTkRFRFwiKX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBoNCB0aXRsZVwiPk1lZXRib3g8L2gxPlxuICAgICAgICAgICAge2N1cnJlbnQudmFsdWUgPT09IFwiZHJhZnRcIiA/IChcbiAgICAgICAgICAgICAgPFNlbmQgY2xhc3NOYW1lPVwicG9pbnRlciBcIiBvbkNsaWNrPXsoKSA9PiBzZW5kKFwiU0FWRURfRFJBRlRcIil9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTEgdy0xMDAgZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAge2xpc3RPZk1lZXRpbmdzLm1hcCgocHJvcHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxBZ2VuZGFJdGVtXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBtZWV0aW5nSWQ9e21lZXRpbmdJZH1cbiAgICAgICAgICAgICAgICBzdGF0ZT17Y3VycmVudC52YWx1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgeyhjdXJyZW50LnZhbHVlID09PSBcImRyYWZ0XCIgfHwgY3VycmVudC52YWx1ZSA9PT0gXCJhY3RpdmVcIikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhNSB0YyB3LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGljb249ezxBZGQgLz59XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyIGdyb3dcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkIEFnZW5kYSBJdGVtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZE1lZXRpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApfVxuXG4gICAgICB7Y3VycmVudC52YWx1ZSA9PT0gXCJmYWlsdXJlXCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZoLTEwMCB2dy0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICBGQUlMVVJFXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgICBmb250LWZhbWlseTogRnV0dXJhLCBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICBjb2xvcjogIzM2M2Q4NztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5pbmRleC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5pbmRleC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0= */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/pages/index.jsx */"));
}
index.propTypes = propTypes;
index.defaultProps = defaultProps;

/***/ }),

/***/ "./sideEffects/firebase.js":
/*!*********************************!*\
  !*** ./sideEffects/firebase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);


var config = {
  apiKey: "AIzaSyD0_c1V4vvrHVwVD941n_KLnbj55f0c5gI",
  authDomain: "decision-dev.firebaseapp.com",
  databaseURL: "https://decision-dev.firebaseio.com",
  projectId: "decision-dev",
  storageBucket: "decision-dev.appspot.com",
  messagingSenderId: "1006893299756",
  appId: "1:1006893299756:web:0581850d4e51ba77"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
} else {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); // export default async function loadDb() {
//   const firebase = await import("firebase/app");
//   await import("@firebase/firestore");
//   try {
//     // if (!firebase.apps.length) {
//     firebase.initializeApp({
//       apiKey: "AIzaSyD0_c1V4vvrHVwVD941n_KLnbj55f0c5gI",
//       authDomain: "decision-dev.firebaseapp.com",
//       databaseURL: "https://decision-dev.firebaseio.com",
//       projectId: "decision-dev",
//       storageBucket: "decision-dev.appspot.com",
//       messagingSenderId: "1006893299756",
//       appId: "1:1006893299756:web:0581850d4e51ba77"
//     });
//     // } else {
//     //   firebase.app();
//     // }
//   } catch (err) {
//     // we skip the "already exists" message which is
//     // not an actual error when we're hot-reloading
//     if (!/already exists/.test(err.message)) {
//       console.error("Firebase initialization error", err.stack);
//     }
//   }
//   return firebase.firestore();
// }

/***/ }),

/***/ "./static/tachyons.css":
/*!*****************************!*\
  !*** ./static/tachyons.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/typeface.css":
/*!*****************************!*\
  !*** ./static/typeface.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshpitzalis/Desktop/agenda/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@xstate/react":
/*!********************************!*\
  !*** external "@xstate/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@xstate/react");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "grommet":
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "grommet-icons":
/*!********************************!*\
  !*** external "grommet-icons" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet-icons");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rxfire/firestore":
/*!***********************************!*\
  !*** external "rxfire/firestore" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxfire/firestore");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "xstate":
/*!*************************!*\
  !*** external "xstate" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xstate");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map