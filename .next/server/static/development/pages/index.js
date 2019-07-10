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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
  }))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "flex justify-between items-centre w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("dl", {
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
  }, "min")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "flex flex-column item-start measure-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AgendaItemName__WEBPACK_IMPORTED_MODULE_7__["AgendaItemName"], {
    name: name,
    id: id,
    meetingId: meetingId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), state === "active" && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Prerequisites__WEBPACK_IMPORTED_MODULE_8__["Prerequisites"], {
    meetingId: meetingId,
    id: id,
    prep: prep,
    status: "locked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), (state === "draft" || state === "confirmed") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Prerequisites__WEBPACK_IMPORTED_MODULE_8__["Prerequisites"], {
    meetingId: meetingId,
    id: id,
    prep: prep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), (state === "active" || state === "complete") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Minutes, {
    setShowNotes: setShowNotes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), (state === "active" || state === "complete") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1528990481" + " " + "measure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "task list"), (state === "draft" || state === "active") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_5__["Close"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }),
    onClick: function onClick() {
      return setConfirm(true);
    },
    className: "pointer grow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1528990481",
    __self: this
  }, ".item0.jsx-1528990481{background-color:#fdfce7;}.item1.jsx-1528990481{background-color:#faf4c0;}.item2.jsx-1528990481{background-color:#e0eac3;}.item3.jsx-1528990481{background-color:#c6e0d7;}.item4.jsx-1528990481{background-color:#b2cdd7;}.item5.jsx-1528990481{background-color:#cbb39e;}.item6.jsx-1528990481{background-color:#e79c74;}.item7.jsx-1528990481{background-color:#e49883;}.item8.jsx-1528990481{background-color:#df9598;}.item9.jsx-1528990481{background-color:#d1869f;}.item10.jsx-1528990481{background-color:#bc72a7;}.item11.jsx-1528990481{background-color:#894f9c;}.item12.jsx-1528990481{background-color:#3a2a76;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvZmVhdHVyZXMvYWdlbmRhL2NvbXBvbmVudHMvQWdlbmRhSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZTLEFBR3NDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLHlCQW5DM0IsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9mZWF0dXJlcy9hZ2VuZGEvY29tcG9uZW50cy9BZ2VuZGFJdGVtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGV4dEFyZWEgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgQWRkLCBDbG9zZSB9IGZyb20gXCJncm9tbWV0LWljb25zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi8uLi8uLi9zaWRlRWZmZWN0cy9maXJlYmFzZVwiO1xuaW1wb3J0IHsgQWdlbmRhSXRlbU5hbWUgfSBmcm9tIFwiLi9BZ2VuZGFJdGVtTmFtZVwiO1xuaW1wb3J0IHsgUHJlcmVxdWlzaXRlcyB9IGZyb20gXCIuL1ByZXJlcXVpc2l0ZXNcIjtcblxuY29uc3QgQWdlbmRhSXRlbSA9ICh7IGlkLCBuYW1lLCBwcmVwLCBpbmRleCwgbWVldGluZ0lkLCBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IFtzaG93Tm90ZXMsIHNldFNob3dOb3Rlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IChpdGVtSWQsIG1lZXRpbmdJZCkgPT5cbiAgICBmaXJlYmFzZVxuICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAuZG9jKGBtZWV0aW5ncy8ke21lZXRpbmdJZH1gKVxuICAgICAgLnVwZGF0ZSh7XG4gICAgICAgIFtgaXRlbXMuJHtpdGVtSWR9YF06IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmRlbGV0ZSgpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblxuICBjb25zdCBbY29uZmlybSwgc2V0Q29uZmlybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBpdGVtJHtpbmRleH0gcGw2IG5lYXItYmxhY2tgfT5cbiAgICAgIHtjb25maXJtID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IGZsZXggZmxleC1jb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMTAwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjNcIj5Zb3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtID88L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBEZWxldGlvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVJdGVtKGlkLCBtZWV0aW5nSWQpO1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm0oZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyIG1oNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3M1wiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwiTm8sIEkndmUgY2hhbmdlZCBteSBtaW5kLlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpcm0oZmFsc2UpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgcGxhaW5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50cmUgdy0xMDBcIj5cbiAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwiZmwgZm4tbCB3LTUwIGRpYi1sIHctYXV0by1sIGxoLXRpdGxlIG1yNS1sIHBhM1wiPlxuICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cImYzIGZ3NiBtbDAgdHR1XCI+NTwvZGQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiZjYgZnc0IG1sMCB0dHVcIj5taW48L2RkPlxuICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sdW1uIGl0ZW0tc3RhcnQgbWVhc3VyZS13aWRlYH0+XG4gICAgICAgICAgICA8QWdlbmRhSXRlbU5hbWUgbmFtZT17bmFtZX0gaWQ9e2lkfSBtZWV0aW5nSWQ9e21lZXRpbmdJZH0gLz5cbiAgICAgICAgICAgIHtzdGF0ZSA9PT0gXCJhY3RpdmVcIiAmJiAoXG4gICAgICAgICAgICAgIDxQcmVyZXF1aXNpdGVzXG4gICAgICAgICAgICAgICAgbWVldGluZ0lkPXttZWV0aW5nSWR9XG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIHByZXA9e3ByZXB9XG4gICAgICAgICAgICAgICAgc3RhdHVzPVwibG9ja2VkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyhzdGF0ZSA9PT0gXCJkcmFmdFwiIHx8IHN0YXRlID09PSBcImNvbmZpcm1lZFwiKSAmJiAoXG4gICAgICAgICAgICA8UHJlcmVxdWlzaXRlcyBtZWV0aW5nSWQ9e21lZXRpbmdJZH0gaWQ9e2lkfSBwcmVwPXtwcmVwfSAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7KHN0YXRlID09PSBcImFjdGl2ZVwiIHx8IHN0YXRlID09PSBcImNvbXBsZXRlXCIpICYmIChcbiAgICAgICAgICAgIDxNaW51dGVzIHNldFNob3dOb3Rlcz17c2V0U2hvd05vdGVzfSAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogdGhlcmUgc2hvdWxkIGFsc28gYmUgYSB0YXNrcyBzZWN0aW9uICovfVxuXG4gICAgICAgICAgeyhzdGF0ZSA9PT0gXCJhY3RpdmVcIiB8fCBzdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZWFzdXJlXCI+dGFzayBsaXN0PC9wPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7KHN0YXRlID09PSBcImRyYWZ0XCIgfHwgc3RhdGUgPT09IFwiYWN0aXZlXCIpICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaWNvbj17PENsb3NlIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maXJtKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyIGdyb3dcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLml0ZW0wIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZjZTc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNGMwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWFjMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0zIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmUwZDc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtNCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJjZGQ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjM5ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW02IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzljNzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtNyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ5ODgzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmOTU5ODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW05IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTg2OWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMTAge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JjNzJhNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0xMSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk0ZjljO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTEyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTJhNzY7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW5kYUl0ZW07XG5cbmZ1bmN0aW9uIE1pbnV0ZXMoeyBzZXRTaG93Tm90ZXMgfSkge1xuICBjb25zdCBbZWRpdGFibGUsIHNldEVkaXRhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hMyBoNSBwb2ludGVyIG1lYXN1cmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Tm90ZXModHJ1ZSl9PlxuICAgICAge2VkaXRhYmxlID8gKFxuICAgICAgICA8VGV4dEFyZWEgcmVzaXplPVwidmVydGljYWxcIiBjbGFzc05hbWU9XCJ3LTEwMCBiZy13aGl0ZVwiIGZpbGw9e3RydWV9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hM1wiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249ezxBZGQgLz59XG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBOb3RlcywgVGFza3MsIFZvdGVzIE9yIERlY2lzaW9uc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0YWJsZSh0cnVlKX1cbiAgICAgICAgICAgIHBsYWluXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/features/agenda/components/AgendaItem.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AgendaItem);

function Minutes(_ref2) {
  var setShowNotes = _ref2.setShowNotes;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      editable = _useState6[0],
      setEditable = _useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ma3 h5 pointer measure",
    onClick: function onClick() {
      return setShowNotes(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, editable ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["TextArea"], {
    resize: "vertical",
    className: "w-100 bg-white",
    fill: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ma3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_5__["Add"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }),
    label: "Add Notes, Tasks, Votes Or Decisions",
    onClick: function onClick() {
      return setEditable(true);
    },
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })));
}

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
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
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    label: "Save Description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex items-center measure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Edit"], {
    className: "dim ma3 pointer",
    onClick: function onClick() {
      return toggleEditMode(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, title || name)));
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





var PrepItem = function PrepItem(_ref) {
  var name = _ref.name,
      id = _ref.id,
      editMode = _ref.editMode,
      meetingId = _ref.meetingId,
      itemId = _ref.itemId,
      status = _ref.status;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      completed = _useState2[0],
      markComplete = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ma3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, editMode && !status ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Close"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
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
      lineNumber: 27
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
      lineNumber: 44
    },
    __self: this
  }));
};

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sideEffects/firebase */ "./sideEffects/firebase.js");
/* harmony import */ var _PrepItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PrepItem */ "./features/agenda/components/PrepItem.tsx");




var _jsxFileName = "/Users/joshpitzalis/Desktop/agenda/features/agenda/components/Prerequisites.tsx";





var offline = true;
var Prerequisites = function Prerequisites(_ref) {
  var meetingId = _ref.meetingId,
      id = _ref.id,
      prep = _ref.prep,
      status = _ref.status;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(!!status),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      editMode = _useState2[0],
      setEditMode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(offline ? [{
    id: "1",
    name: "kk"
  }] : prep && _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(prep)),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      prepItems = _useState4[0],
      setPrepItems = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: ""
  }),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      value = _useState6[0],
      resetForm = _useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: " flex-grow-1 measure ".concat(!status && "ml5 ma3"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, prepItems && prepItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PrepItem__WEBPACK_IMPORTED_MODULE_7__["PrepItem"], {
      name: item.name,
      id: item.id,
      editMode: editMode,
      meetingId: meetingId,
      itemId: id,
      status: status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  }), !status && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, editMode ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "ma3 pt4 pl2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    value: value,
    onSubmit: function onSubmit(data) {
      var value = data.value;
      var prepId = "".concat(+new Date());
      var name = value.name;
      resetForm({
        name: ""
      });

      if (offline) {
        return setPrepItems([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prepItems), [{
          id: prepId,
          name: name
        }]));
      }

      _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "items.".concat(id, ".prep.").concat(prepId), {
        id: prepId,
        name: name
      }))["catch"](function (error) {
        return console.error(error);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["FormField"], {
    name: "name",
    label: "Preparation",
    placeholder: "Describe any prep you need people to do for this agenda item.",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-100 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    label: "Add",
    className: "pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "w3 tc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "button",
    label: "Close",
    plain: true,
    onClick: function onClick() {
      return setEditMode(false);
    },
    className: "pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "tc o-50 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "button",
    label: prepItems && prepItems.length > 0 ? "Click to add more prep." : "Click here to add prep.",
    plain: true,
    onClick: function onClick() {
      return setEditMode(true);
    },
    className: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))));
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











var offline = true;
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
  console.log("meetingIdA", meetingId);
  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (!meetingId) {
      send("NEW_AGENDA_CREATED");
    }

    send("REDIRECTED_TO_EXISTING_AGENDA");
  }, [meetingId]);
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
  }, ".title.jsx-2034684555{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);text-align:center;font-size:4rem;text-transform:uppercase;font-family:Futura,\"Trebuchet MS\",Arial,sans-serif;font-size:23px !important;font-style:normal;font-variant:normal;font-weight:700;line-height:23px;color:#363d87;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFOUyxBQUdzQyxpRkFDQSx1RkFDUCxrQkFDSCxlQUNVLHlCQUU2QixtREFDNUIsMEJBQ1Isa0JBQ0Usb0JBQ0osZ0JBQ0MsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2xvY2sgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgQWRkLCBQbGF5LCBTZW5kLCBTdG9wIH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBkb2MgfSBmcm9tIFwicnhmaXJlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQWdlbmRhSXRlbSBmcm9tIFwiLi4vZmVhdHVyZXMvYWdlbmRhL2NvbXBvbmVudHMvQWdlbmRhSXRlbVwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9zaWRlRWZmZWN0cy9maXJlYmFzZVwiO1xuXG5jb25zdCBvZmZsaW5lID0gdHJ1ZTtcbmNvbnN0IG1lZXRpbmdJZCA9IFwiMWwzd2tcIjtcblxuY29uc3QgY3JlYXRlQWdlbmRhID0gZXZlbnQgPT4ge1xuICBpZiAob2ZmbGluZSkge1xuICAgIHJldHVybiBSb3V0ZXIucHVzaChgL21lZXRpbmcvJHttZWV0aW5nSWR9YCk7XG4gIH1cbiAgY29uc3QgZG9jID0gZmlyZWJhc2VcbiAgICAuZmlyZXN0b3JlKClcbiAgICAuY29sbGVjdGlvbihcIm1lZXRpbmdzXCIpXG4gICAgLmRvYygpO1xuICAvLyByZXR1cm4gUm91dGVyLnB1c2goYC9tZWV0aW5nLyR7ZG9jLmlkfWApO1xuICByZXR1cm4gUm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiBgL21lZXRpbmcvJHtkb2MuaWR9YCxcbiAgICBxdWVyeTogeyBtZWV0aW5nSWQ6IGRvYy5pZCB9XG4gIH0pO1xufTtcblxuY29uc3QgcHJvcFR5cGVzID0ge307XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHt9O1xuXG5jb25zdCBhZ2VuZGFNYWNoaW5lID0gTWFjaGluZSh7XG4gIGlkOiBcImFnZW5kYVwiLFxuXG4gIGluaXRpYWw6IFwibG9hZGluZ1wiLFxuICBzdGF0ZXM6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICBvbjoge1xuICAgICAgICBORVdfQUdFTkRBX0NSRUFURUQ6IFwiY3JlYXRpbmdBZ2VuZGFcIixcbiAgICAgICAgUkVESVJFQ1RFRF9UT19FWElTVElOR19BR0VOREE6IFwiZHJhZnRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRpbmdBZ2VuZGE6IHtcbiAgICAgIGludm9rZToge1xuICAgICAgICBpZDogXCJjcmVhdGVBZ2VuZGFcIixcbiAgICAgICAgc3JjOiAoY29udGV4dCwgZXZlbnQpID0+IGNyZWF0ZUFnZW5kYShldmVudCksXG4gICAgICAgIG9uRG9uZToge1xuICAgICAgICAgIHRhcmdldDogXCJkcmFmdFwiXG4gICAgICAgICAgLy8gVGhlIHJlc29sdmVkIGRhdGEgaXMgcGxhY2VkIGludG8gYSAnZG9uZS5pbnZva2UuPGlkPicgZXZlbnQsIHVuZGVyIHRoZSBkYXRhIHByb3BlcnR5IGh0dHA6Ly9iaXQubHkvMkZ0MldSOFxuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiB7XG4gICAgICAgICAgdGFyZ2V0OiBcImxvYWRpbmdcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFmdDoge1xuICAgICAgb246IHtcbiAgICAgICAgU0FWRURfRFJBRlQ6IFwiY29uZmlybWVkXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmZpcm1lZDoge1xuICAgICAgb246IHtcbiAgICAgICAgU1RBUlRFRDogXCJhY3RpdmVcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZlOiB7XG4gICAgICBvbjoge1xuICAgICAgICBFTkRFRDogXCJjb21wbGV0ZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogeyB0eXBlOiBcImZpbmFsXCIgfVxuICB9XG59KTtcblxuY29uc3QgdXNlU3RyZWFtTWVldGluZyA9IGlkID0+IHtcbiAgY29uc3Qgc3RyZWFtJCA9IGRvYyhmaXJlYmFzZS5maXJlc3RvcmUoKS5kb2MoYG1lZXRpbmdzLyR7aWR9YCkpO1xuICBjb25zdCBbbWVldGluZywgdXBkYXRlTWVldGluZ10gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0cmVhbSA9IHN0cmVhbSQuc3Vic2NyaWJlKHNuYXBzaG90ID0+XG4gICAgICB1cGRhdGVNZWV0aW5nKHNuYXBzaG90LmRhdGEoKSlcbiAgICApO1xuICAgIHJldHVybiAoKSA9PiBzdHJlYW0udW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gbWVldGluZztcbn07XG5cbi8vIGNvbnN0IGdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgLy8gY29uc3Qgc2x1ZyA9IHVybC5xdWVyeS5zbHVnO1xuLy8gICAvLyBjb25zdCBtZWV0aW5ncyA9IGF3YWl0IGZpcmViYXNlXG4vLyAgIC8vICAgLmZpcmVzdG9yZSgpXG4vLyAgIC8vICAgLmNvbGxlY3Rpb24oXCJtZWV0aW5nc1wiKVxuLy8gICAvLyAgIC5kb2Moc2x1Zylcbi8vICAgLy8gICAuZ2V0KClcbi8vICAgLy8gICAudGhlbihkb2MgPT4gZG9jLmV4aXN0cyAmJiBkb2MuZGF0YSgpKVxuLy8gICAvLyAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XG4vLyAgIC8vIHJldHVybiB7IG1lZXRpbmdzIH07XG5cbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vICAgY29uc3QgeyBtZWV0aW5nSWQgfSA9IHJvdXRlci5xdWVyeTtcblxuLy8gICByZXR1cm4geyBtZWV0aW5nSWQgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KHByb3BzKSB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZW5kXSA9IHVzZU1hY2hpbmUoYWdlbmRhTWFjaGluZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBtZWV0aW5nSWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zb2xlLmxvZyhcIm1lZXRpbmdJZEFcIiwgbWVldGluZ0lkKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbWVldGluZ0lkKSB7XG4gICAgICBzZW5kKFwiTkVXX0FHRU5EQV9DUkVBVEVEXCIpO1xuICAgIH1cbiAgICBzZW5kKFwiUkVESVJFQ1RFRF9UT19FWElTVElOR19BR0VOREFcIik7XG4gIH0sIFttZWV0aW5nSWRdKTtcblxuICBjb25zdCBtZWV0aW5nID0gdXNlU3RyZWFtTWVldGluZyhtZWV0aW5nSWQpO1xuXG4gIGNvbnN0IFtsaXN0T2ZNZWV0aW5ncywgc2V0TWVldGluZ3NdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgb2ZmbGluZSA/IFtdIDogbWVldGluZyAmJiBPYmplY3QudmFsdWVzKG1lZXRpbmcuaXRlbXMpXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQWRkTWVldGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSArbmV3IERhdGUoKTtcblxuICAgIGlmIChvZmZsaW5lKSB7XG4gICAgICBjb25zdCBuZXdNZWV0aW5ncyA9IFtcbiAgICAgICAgLi4ubGlzdE9mTWVldGluZ3MsXG4gICAgICAgIHtcbiAgICAgICAgICBbYGl0ZW1zLiR7dGltZXN0YW1wfS5pZGBdOiB0aW1lc3RhbXBcbiAgICAgICAgfVxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIHNldE1lZXRpbmdzKG5ld01lZXRpbmdzKTtcbiAgICB9XG5cbiAgICBmaXJlYmFzZVxuICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAuZG9jKGBtZWV0aW5ncy8ke21lZXRpbmdJZH1gKVxuICAgICAgLnVwZGF0ZSh7XG4gICAgICAgIFtgaXRlbXMuJHt0aW1lc3RhbXB9LmlkYF06IHRpbWVzdGFtcFxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyhjdXJyZW50LnZhbHVlID09PSBcImxvYWRpbmdcIiB8fCBjdXJyZW50LnZhbHVlID09PSBcImNyZWF0aW5nQWdlbmRhXCIpICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aC0xMDAgdnctMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPENsb2NrIHR5cGU9XCJkaWdpdGFsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7KGN1cnJlbnQudmFsdWUgPT09IFwiZHJhZnRcIiB8fFxuICAgICAgICBjdXJyZW50LnZhbHVlID09PSBcImNvbmZpcm1lZFwiIHx8XG4gICAgICAgIGN1cnJlbnQudmFsdWUgPT09IFwiYWN0aXZlXCIgfHxcbiAgICAgICAgY3VycmVudC52YWx1ZSA9PT0gXCJjb21wbGV0ZVwiKSAmJiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggIHZoLTEwMCB3LTEwMCBcIj5cbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIGZpeGVkIHZoLTEwMCBiZy13aGl0ZVwiPlxuICAgICAgICAgICAge2N1cnJlbnQudmFsdWUgPT09IFwiY29uZmlybWVkXCIgPyAoXG4gICAgICAgICAgICAgIDxQbGF5XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VuZCh7IHR5cGU6IFwiU1RBUlRFRFwiIH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IGN1cnJlbnQudmFsdWUgPT09IFwiYWN0aXZlXCIgPyAoXG4gICAgICAgICAgICAgIDxTdG9wIGNsYXNzTmFtZT1cInBvaW50ZXIgXCIgb25DbGljaz17KCkgPT4gc2VuZChcIkVOREVEXCIpfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGg0IHRpdGxlXCI+TWVldGJveDwvaDE+XG4gICAgICAgICAgICB7Y3VycmVudC52YWx1ZSA9PT0gXCJkcmFmdFwiID8gKFxuICAgICAgICAgICAgICA8U2VuZCBjbGFzc05hbWU9XCJwb2ludGVyIFwiIG9uQ2xpY2s9eygpID0+IHNlbmQoXCJTQVZFRF9EUkFGVFwiKX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMSB3LTEwMCBmbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICB7bGlzdE9mTWVldGluZ3MubWFwKChwcm9wcywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEFnZW5kYUl0ZW1cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIG1lZXRpbmdJZD17bWVldGluZ0lkfVxuICAgICAgICAgICAgICAgIHN0YXRlPXtjdXJyZW50LnZhbHVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7KGN1cnJlbnQudmFsdWUgPT09IFwiZHJhZnRcIiB8fCBjdXJyZW50LnZhbHVlID09PSBcImFjdGl2ZVwiKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGE1IHRjIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWNvbj17PEFkZCAvPn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXIgZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQgQWdlbmRhIEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkTWVldGluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG5cbiAgICAgIHtjdXJyZW50LnZhbHVlID09PSBcImZhaWx1cmVcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmgtMTAwIHZ3LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIEZBSUxVUkVcbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmEsIFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzYzZDg3O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmluZGV4LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbmluZGV4LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ== */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/pages/index.jsx */"));
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

/***/ 4:
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