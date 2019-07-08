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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    className: "pa0 ma0"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_0__["Grommet"], {
    plain: true
  }, children));
}
Layout.propTypes = propTypes;

/***/ }),

/***/ "./features/agenda/components/AgendaItem.jsx":
/*!***************************************************!*\
  !*** ./features/agenda/components/AgendaItem.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sideEffects/firebase */ "./sideEffects/firebase.js");












var AgendaItem = function AgendaItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      prep = _ref.prep,
      index = _ref.index,
      meetingId = _ref.meetingId,
      state = _ref.state;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      showNotes = _useState2[0],
      setShowNotes = _useState2[1];

  var deleteItem = function deleteItem(itemId, meetingId) {
    return _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, "items.".concat(itemId), _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.delete())).catch(function (error) {
      return console.error(error);
    });
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      confirm = _React$useState2[0],
      setConfirm = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "flex items-center item".concat(index, " pl6 near-black")
  }, confirm ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "h5 flex flex-column items-center justify-center w-100"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1528990481" + " " + "f3"
  }, "You sure you want to delete this item ?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "w-100 flex justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    label: "Confirm Deletion",
    onClick: function onClick() {
      deleteItem(id, meetingId);
      setConfirm(false);
    },
    className: "pointer mh5"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "w3"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    label: "No, I've changed my mind.",
    onClick: function onClick() {
      return setConfirm(false);
    },
    className: "pointer",
    plain: true
  }))) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dl", {
    className: "jsx-1528990481" + " " + "fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", {
    className: "jsx-1528990481" + " " + "f3 fw6 ml0 ttu"
  }, "5"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", {
    className: "jsx-1528990481" + " " + "f6 fw4 ml0 ttu"
  }, "min")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(AgendaItemName, {
    name: name,
    id: id,
    meetingId: meetingId
  }), (state === "draft" || state === "confirmed") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Prerequisites, {
    meetingId: meetingId,
    id: id,
    prep: prep
  }), (state === "draft" || state === "active") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_8__["Close"], null),
    onClick: function onClick() {
      return setConfirm(true);
    },
    className: "pointer grow"
  }), (state === "active" || state === "complete") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowNotes(true);
    },
    className: "jsx-1528990481" + " " + "ml5 ma3 w5 h3 pointer"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "ma3"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_8__["Add"], null),
    label: "Add Notes, Tasks, Votes Or Decisions",
    onClick: function onClick() {
      return setItems([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(items), [{
        id: +new Date()
      }]));
    },
    plain: true
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1528990481"
  }, ".item0.jsx-1528990481{background-color:#fdfce7;}.item1.jsx-1528990481{background-color:#faf4c0;}.item2.jsx-1528990481{background-color:#e0eac3;}.item3.jsx-1528990481{background-color:#c6e0d7;}.item4.jsx-1528990481{background-color:#b2cdd7;}.item5.jsx-1528990481{background-color:#cbb39e;}.item6.jsx-1528990481{background-color:#e79c74;}.item7.jsx-1528990481{background-color:#e49883;}.item8.jsx-1528990481{background-color:#df9598;}.item9.jsx-1528990481{background-color:#d1869f;}.item10.jsx-1528990481{background-color:#bc72a7;}.item11.jsx-1528990481{background-color:#894f9c;}.item12.jsx-1528990481{background-color:#3a2a76;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvZmVhdHVyZXMvYWdlbmRhL2NvbXBvbmVudHMvQWdlbmRhSXRlbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVTLEFBR3NDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLHlCQW5DM0IsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9mZWF0dXJlcy9hZ2VuZGEvY29tcG9uZW50cy9BZ2VuZGFJdGVtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUZpZWxkLCBSYWRpb0J1dHRvbiB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgeyBBZGQsIENsb3NlLCBFZGl0IH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uLy4uLy4uL3NpZGVFZmZlY3RzL2ZpcmViYXNlXCI7XG5cbmNvbnN0IEFnZW5kYUl0ZW0gPSAoeyBpZCwgbmFtZSwgcHJlcCwgaW5kZXgsIG1lZXRpbmdJZCwgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2hvd05vdGVzLCBzZXRTaG93Tm90ZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaXRlbUlkLCBtZWV0aW5nSWQpID0+XG4gICAgZmlyZWJhc2VcbiAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgLmRvYyhgbWVldGluZ3MvJHttZWV0aW5nSWR9YClcbiAgICAgIC51cGRhdGUoe1xuICAgICAgICBbYGl0ZW1zLiR7aXRlbUlkfWBdOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5kZWxldGUoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cbiAgY29uc3QgW2NvbmZpcm0sIHNldENvbmZpcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgaXRlbSR7aW5kZXh9IHBsNiBuZWFyLWJsYWNrYH0+XG4gICAgICB7Y29uZmlybSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwMFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYzXCI+WW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbSA/PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gRGVsZXRpb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlSXRlbShpZCwgbWVldGluZ0lkKTtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlciBtaDVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzNcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cIk5vLCBJJ3ZlIGNoYW5nZWQgbXkgbWluZC5cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maXJtKGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgIHBsYWluXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImZsIGZuLWwgdy01MCBkaWItbCB3LWF1dG8tbCBsaC10aXRsZSBtcjUtbCBwYTNcIj5cbiAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJmMyBmdzYgbWwwIHR0dVwiPjU8L2RkPlxuICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cImY2IGZ3NCBtbDAgdHR1XCI+bWluPC9kZD5cbiAgICAgICAgICA8L2RsPlxuICAgICAgICAgIDxBZ2VuZGFJdGVtTmFtZSBuYW1lPXtuYW1lfSBpZD17aWR9IG1lZXRpbmdJZD17bWVldGluZ0lkfSAvPlxuXG4gICAgICAgICAgeyhzdGF0ZSA9PT0gXCJkcmFmdFwiIHx8IHN0YXRlID09PSBcImNvbmZpcm1lZFwiKSAmJiAoXG4gICAgICAgICAgICA8UHJlcmVxdWlzaXRlcyBtZWV0aW5nSWQ9e21lZXRpbmdJZH0gaWQ9e2lkfSBwcmVwPXtwcmVwfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyhzdGF0ZSA9PT0gXCJkcmFmdFwiIHx8IHN0YXRlID09PSBcImFjdGl2ZVwiKSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGljb249ezxDbG9zZSAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29uZmlybSh0cnVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlciBncm93XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7KHN0YXRlID09PSBcImFjdGl2ZVwiIHx8IHN0YXRlID09PSBcImNvbXBsZXRlXCIpICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWw1IG1hMyB3NSBoMyBwb2ludGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd05vdGVzKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hM1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGljb249ezxBZGQgLz59XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBOb3RlcywgVGFza3MsIFZvdGVzIE9yIERlY2lzaW9uc1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJdGVtcyhbLi4uaXRlbXMsIHsgaWQ6ICtuZXcgRGF0ZSgpIH1dKX1cbiAgICAgICAgICAgICAgICAgIHBsYWluXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLml0ZW0wIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZjZTc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNGMwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWFjMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0zIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmUwZDc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtNCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJjZGQ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjM5ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW02IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzljNzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtNyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ5ODgzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmOTU5ODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW05IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMTg2OWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMTAge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JjNzJhNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0xMSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk0ZjljO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTEyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTJhNzY7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW5kYUl0ZW07XG5cbmZ1bmN0aW9uIEFnZW5kYUl0ZW1OYW1lKHsgbmFtZSwgaWQsIG1lZXRpbmdJZCB9KSB7XG4gIGNvbnN0IFtlZGl0TW9kZSwgdG9nZ2xlRWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWFzdXJlLXdpZGUgZmxleC1ncm93LTFcIj5cbiAgICAgIHtlZGl0TW9kZSA/IChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17KHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlRWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgICAgZmlyZWJhc2VcbiAgICAgICAgICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAgICAgICAgIC5kb2MoYG1lZXRpbmdzLyR7bWVldGluZ0lkfWApXG4gICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgIFtgaXRlbXMuJHtpZH0ubmFtZWBdOiB2YWx1ZS5uYW1lXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiQWdlbmRhIEl0ZW1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVhc3VyZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdpdmUgeW91ciBmaXJzdCBhZ2VuZGEgSXRlbSBhIG5hbWVcIlxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGUgfHwgbmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiU2F2ZSBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWVhc3VyZVwiPlxuICAgICAgICAgIDxFZGl0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkaW0gbWEzIHBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRWRpdE1vZGUodHJ1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9pbnRlclwiPntuYW1lfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUHJlcmVxdWlzaXRlcyh7IG1lZXRpbmdJZCwgaWQsIHByZXAgfSkge1xuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBwcmVwSXRlbXMgPSBwcmVwICYmIE9iamVjdC52YWx1ZXMocHJlcCk7XG5cbiAgY29uc3QgW3ZhbHVlLCByZXNldEZvcm1dID0gUmVhY3QudXNlU3RhdGUoeyBuYW1lOiBcIlwiIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWw1IG1hMyBmbGV4LWdyb3ctMSBtZWFzdXJlXCI+XG4gICAgICB7cHJlcEl0ZW1zICYmXG4gICAgICAgIHByZXBJdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPFByZXBJdGVtXG4gICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgIGVkaXRNb2RlPXtlZGl0TW9kZX1cbiAgICAgICAgICAgIG1lZXRpbmdJZD17bWVldGluZ0lkfVxuICAgICAgICAgICAgaXRlbUlkPXtpZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cblxuICAgICAge2VkaXRNb2RlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hMyBwdDQgcGwyXCI+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17KHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmVwSWQgPSArbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgcmVzZXRGb3JtKHsgbmFtZTogXCJcIiB9KTtcbiAgICAgICAgICAgICAgZmlyZWJhc2VcbiAgICAgICAgICAgICAgICAuZmlyZXN0b3JlKClcbiAgICAgICAgICAgICAgICAuZG9jKGBtZWV0aW5ncy8ke21lZXRpbmdJZH1gKVxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgW2BpdGVtcy4ke2lkfS5wcmVwLiR7cHJlcElkfWBdOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcmVwSWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJlcGFyYXRpb25cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIGFueSBwcmVwIHlvdSBuZWVkIHBlb3BsZSB0byBkbyBmb3IgdGhpcyBhZ2VuZGEgaXRlbS5cIlxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkFkZFwiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3MyB0Y1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICBwbGFpblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGMgby01MCB3LTEwMFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICBwcmVwSXRlbXMgJiYgcHJlcEl0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IFwiQ2xpY2sgdG8gYWRkIG1vcmUgcHJlcC5cIlxuICAgICAgICAgICAgICAgIDogXCJDbGljayBoZXJlIHRvIGFkZCBwcmVwLlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGFpblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoM1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBQcmVwSXRlbSh7IG5hbWUsIGlkLCBlZGl0TW9kZSwgbWVldGluZ0lkLCBpdGVtSWQgfSkge1xuICBjb25zb2xlLmxvZyhcIm5hbWVcIiwgbmFtZSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIG1hcmtDb21wbGV0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYTNcIj5cbiAgICAgIHtlZGl0TW9kZSA/IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249ezxDbG9zZSAvPn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBsYWJlbD17bmFtZX1cbiAgICAgICAgICBwbGFpblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBmaXJlYmFzZVxuICAgICAgICAgICAgICAuZmlyZXN0b3JlKClcbiAgICAgICAgICAgICAgLmRvYyhgbWVldGluZ3MvJHttZWV0aW5nSWR9YClcbiAgICAgICAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgW2BpdGVtcy4ke2l0ZW1JZH0ucHJlcC4ke2lkfWBdOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5kZWxldGUoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImRpbVwiXG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgIGNoZWNrZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICBsYWJlbD17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gbWFya0NvbXBsZXRlKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/features/agenda/components/AgendaItem.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AgendaItem);

function AgendaItemName(_ref2) {
  var name = _ref2.name,
      id = _ref2.id,
      meetingId = _ref2.meetingId;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      editMode = _useState4[0],
      toggleEditMode = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      title = _useState6[0],
      setTitle = _useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "measure-wide flex-grow-1"
  }, editMode ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: function onSubmit(_ref3) {
      var value = _ref3.value;
      toggleEditMode(false);
      _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, "items.".concat(id, ".name"), value.name)).catch(function (error) {
        return console.error(error);
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["FormField"], {
    name: "name",
    label: "Agenda Item",
    className: "measure",
    placeholder: "Give your first agenda Item a name",
    size: "large",
    required: true,
    value: title || name,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    label: "Save Description"
  })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "flex items-center measure"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_8__["Edit"], {
    className: "dim ma3 pointer",
    onClick: function onClick() {
      return toggleEditMode(true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    className: "pointer"
  }, name)));
}

function Prerequisites(_ref4) {
  var meetingId = _ref4.meetingId,
      id = _ref4.id,
      prep = _ref4.prep;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      editMode = _React$useState4[0],
      setEditMode = _React$useState4[1];

  var prepItems = prep && _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(prep);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({
    name: ""
  }),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState5, 2),
      value = _React$useState6[0],
      resetForm = _React$useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "ml5 ma3 flex-grow-1 measure"
  }, prepItems && prepItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrepItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      editMode: editMode,
      meetingId: meetingId,
      itemId: id
    }));
  }), editMode ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "ma3 pt4 pl2"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    value: value,
    size: "small",
    onSubmit: function onSubmit(_ref5) {
      var value = _ref5.value;
      var prepId = +new Date();
      var name = value.name;
      resetForm({
        name: ""
      });
      _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, "items.".concat(id, ".prep.").concat(prepId), {
        id: prepId,
        name: name
      })).catch(function (error) {
        return console.error(error);
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["FormField"], {
    name: "name",
    label: "Preparation",
    placeholder: "Describe any prep you need people to do for this agenda item.",
    size: "small",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "w-100 flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    label: "Add",
    className: "pointer"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "w3 tc"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "button",
    label: "Close",
    plain: true,
    onClick: function onClick() {
      return setEditMode(false);
    },
    className: "pointer"
  }))))) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "tc o-50 w-100"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "button",
    label: prepItems && prepItems.length > 0 ? "Click to add more prep." : "Click here to add prep.",
    plain: true,
    onClick: function onClick() {
      return setEditMode(true);
    },
    className: "h3"
  })));
}

function PrepItem(_ref6) {
  var name = _ref6.name,
      id = _ref6.id,
      editMode = _ref6.editMode,
      meetingId = _ref6.meetingId,
      itemId = _ref6.itemId;
  console.log("name", name);

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState7, 2),
      completed = _React$useState8[0],
      markComplete = _React$useState8[1];

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "ma3"
  }, editMode ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_8__["Close"], null),
    type: "button",
    label: name,
    plain: true,
    onClick: function onClick() {
      return _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, "items.".concat(itemId, ".prep.").concat(id), _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.delete())).catch(function (error) {
        return console.error(error);
      });
    },
    className: "dim"
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["RadioButton"], {
    key: id,
    checked: completed,
    label: name,
    onChange: function onChange() {
      return markComplete(true);
    }
  }));
}

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

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
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
/* harmony import */ var _features_agenda_components_AgendaItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../features/agenda/components/AgendaItem */ "./features/agenda/components/AgendaItem.jsx");
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sideEffects/firebase */ "./sideEffects/firebase.js");
















var offline = true;
var meetingId = "1l3wk";

var createAgenda = function createAgenda(event) {
  if (offline) {
    return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/meeting/".concat(meetingId));
  }

  var doc = _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_15__["default"].firestore().collection("meetings").doc();
  return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/meeting/".concat(doc.id));
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
}; // const getInitialProps = async url => {
//   const slug = url.query.slug;
//   const meetings = await firebase
//     .firestore()
//     .collection("meetings")
//     .doc(slug)
//     .get()
//     .then(doc => doc.exists && doc.data())
//     .catch(error => error);
//   return { meetings };
// };


function index(_ref) {
  var url = _ref.url;

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_7__["useMachine"])(agendaMachine),
      _useMachine2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMachine, 2),
      current = _useMachine2[0],
      send = _useMachine2[1];

  var slug = url.query.slug;
  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (!slug) {
      send("NEW_AGENDA_CREATED");
    }

    send("REDIRECTED_TO_EXISTING_AGENDA");
  }, [slug]);
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

    _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_15__["default"].firestore().doc("meetings/".concat(meetingId)).update(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "items.".concat(timestamp, ".id"), timestamp)).catch(function (error) {
      return console.error(error);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], null, (current.value === "loading" || current.value === "creatingAgenda") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "vh-100 vw-100 flex items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_8__["Clock"], {
    type: "digital"
  })), (current.value === "draft" || current.value === "confirmed" || current.value === "active" || current.value === "complete") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
    className: "jsx-2034684555" + " " + "flex  vh-100 w-100 "
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("aside", {
    className: "jsx-2034684555" + " " + " flex flex-column justify-around items-center fixed vh-100 bg-white"
  }, current.value === "confirmed" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Play"], {
    onClick: function onClick() {
      return send({
        type: "STARTED"
      });
    },
    className: "pointer"
  }) : current.value === "active" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Stop"], {
    className: "pointer ",
    onClick: function onClick() {
      return send("ENDED");
    }
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2034684555"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-2034684555" + " " + "ph4 title"
  }, "Meetbox"), current.value === "draft" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Send"], {
    className: "pointer ",
    onClick: function onClick() {
      return send("SAVED_DRAFT");
    }
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2034684555"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "flex-grow-1 w-100 flex flex-column"
  }, listOfMeetings.map(function (props, index) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_features_agenda_components_AgendaItem__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      index: index,
      meetingId: meetingId,
      state: current.value
    }));
  }), (current.value === "draft" || current.value === "active") && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "pa5 tc w-100"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_9__["Add"], null),
    className: "pointer grow",
    size: "large",
    primary: true,
    label: "Add Agenda Item",
    onClick: handleAddMeeting
  })))), current.value === "failure" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "vh-100 vw-100 flex items-center justify-center"
  }, "FAILURE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2034684555"
  }, ".title.jsx-2034684555{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);text-align:center;font-size:4rem;text-transform:uppercase;font-family:Futura,\"Trebuchet MS\",Arial,sans-serif;font-size:23px !important;font-style:normal;font-variant:normal;font-weight:700;line-height:23px;color:#363d87;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNNUyxBQUdzQyxpRkFDQSx1RkFDUCxrQkFDSCxlQUNVLHlCQUU2QixtREFDNUIsMEJBQ1Isa0JBQ0Usb0JBQ0osZ0JBQ0MsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2xvY2sgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgQWRkLCBQbGF5LCBTZW5kLCBTdG9wIH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBkb2MgfSBmcm9tIFwicnhmaXJlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQWdlbmRhSXRlbSBmcm9tIFwiLi4vZmVhdHVyZXMvYWdlbmRhL2NvbXBvbmVudHMvQWdlbmRhSXRlbVwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9zaWRlRWZmZWN0cy9maXJlYmFzZVwiO1xuXG5jb25zdCBvZmZsaW5lID0gdHJ1ZTtcbmNvbnN0IG1lZXRpbmdJZCA9IFwiMWwzd2tcIjtcblxuY29uc3QgY3JlYXRlQWdlbmRhID0gZXZlbnQgPT4ge1xuICBpZiAob2ZmbGluZSkge1xuICAgIHJldHVybiBSb3V0ZXIucHVzaChgL21lZXRpbmcvJHttZWV0aW5nSWR9YCk7XG4gIH1cbiAgY29uc3QgZG9jID0gZmlyZWJhc2VcbiAgICAuZmlyZXN0b3JlKClcbiAgICAuY29sbGVjdGlvbihcIm1lZXRpbmdzXCIpXG4gICAgLmRvYygpO1xuICByZXR1cm4gUm91dGVyLnB1c2goYC9tZWV0aW5nLyR7ZG9jLmlkfWApO1xufTtcblxuY29uc3QgcHJvcFR5cGVzID0ge307XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHt9O1xuXG5jb25zdCBhZ2VuZGFNYWNoaW5lID0gTWFjaGluZSh7XG4gIGlkOiBcImFnZW5kYVwiLFxuXG4gIGluaXRpYWw6IFwibG9hZGluZ1wiLFxuICBzdGF0ZXM6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICBvbjoge1xuICAgICAgICBORVdfQUdFTkRBX0NSRUFURUQ6IFwiY3JlYXRpbmdBZ2VuZGFcIixcbiAgICAgICAgUkVESVJFQ1RFRF9UT19FWElTVElOR19BR0VOREE6IFwiZHJhZnRcIlxuICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGluZ0FnZW5kYToge1xuICAgICAgaW52b2tlOiB7XG4gICAgICAgIGlkOiBcImNyZWF0ZUFnZW5kYVwiLFxuICAgICAgICBzcmM6IChjb250ZXh0LCBldmVudCkgPT4gY3JlYXRlQWdlbmRhKGV2ZW50KSxcbiAgICAgICAgb25Eb25lOiB7XG4gICAgICAgICAgdGFyZ2V0OiBcImRyYWZ0XCJcbiAgICAgICAgICAvLyBUaGUgcmVzb2x2ZWQgZGF0YSBpcyBwbGFjZWQgaW50byBhICdkb25lLmludm9rZS48aWQ+JyBldmVudCwgdW5kZXIgdGhlIGRhdGEgcHJvcGVydHkgaHR0cDovL2JpdC5seS8yRnQyV1I4XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwibG9hZGluZ1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWZ0OiB7XG4gICAgICBvbjoge1xuICAgICAgICBTQVZFRF9EUkFGVDogXCJjb25maXJtZWRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmlybWVkOiB7XG4gICAgICBvbjoge1xuICAgICAgICBTVEFSVEVEOiBcImFjdGl2ZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmU6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIEVOREVEOiBcImNvbXBsZXRlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBsZXRlOiB7IHR5cGU6IFwiZmluYWxcIiB9XG4gIH1cbn0pO1xuXG5jb25zdCB1c2VTdHJlYW1NZWV0aW5nID0gaWQgPT4ge1xuICBjb25zdCBzdHJlYW0kID0gZG9jKGZpcmViYXNlLmZpcmVzdG9yZSgpLmRvYyhgbWVldGluZ3MvJHtpZH1gKSk7XG4gIGNvbnN0IFttZWV0aW5nLCB1cGRhdGVNZWV0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RyZWFtID0gc3RyZWFtJC5zdWJzY3JpYmUoc25hcHNob3QgPT5cbiAgICAgIHVwZGF0ZU1lZXRpbmcoc25hcHNob3QuZGF0YSgpKVxuICAgICk7XG4gICAgcmV0dXJuICgpID0+IHN0cmVhbS51bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiBtZWV0aW5nO1xufTtcblxuLy8gY29uc3QgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgdXJsID0+IHtcbi8vICAgY29uc3Qgc2x1ZyA9IHVybC5xdWVyeS5zbHVnO1xuLy8gICBjb25zdCBtZWV0aW5ncyA9IGF3YWl0IGZpcmViYXNlXG4vLyAgICAgLmZpcmVzdG9yZSgpXG4vLyAgICAgLmNvbGxlY3Rpb24oXCJtZWV0aW5nc1wiKVxuLy8gICAgIC5kb2Moc2x1Zylcbi8vICAgICAuZ2V0KClcbi8vICAgICAudGhlbihkb2MgPT4gZG9jLmV4aXN0cyAmJiBkb2MuZGF0YSgpKVxuLy8gICAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XG4vLyAgIHJldHVybiB7IG1lZXRpbmdzIH07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHVybCB9KSB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZW5kXSA9IHVzZU1hY2hpbmUoYWdlbmRhTWFjaGluZSk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gdXJsLnF1ZXJ5O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2x1Zykge1xuICAgICAgc2VuZChcIk5FV19BR0VOREFfQ1JFQVRFRFwiKTtcbiAgICB9XG4gICAgc2VuZChcIlJFRElSRUNURURfVE9fRVhJU1RJTkdfQUdFTkRBXCIpO1xuICB9LCBbc2x1Z10pO1xuXG4gIGNvbnN0IG1lZXRpbmcgPSB1c2VTdHJlYW1NZWV0aW5nKG1lZXRpbmdJZCk7XG5cbiAgY29uc3QgW2xpc3RPZk1lZXRpbmdzLCBzZXRNZWV0aW5nc10gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBvZmZsaW5lID8gW10gOiBtZWV0aW5nICYmIE9iamVjdC52YWx1ZXMobWVldGluZy5pdGVtcylcbiAgKTtcblxuICBjb25zdCBoYW5kbGVBZGRNZWV0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKG9mZmxpbmUpIHtcbiAgICAgIGNvbnN0IG5ld01lZXRpbmdzID0gW1xuICAgICAgICAuLi5saXN0T2ZNZWV0aW5ncyxcbiAgICAgICAge1xuICAgICAgICAgIFtgaXRlbXMuJHt0aW1lc3RhbXB9LmlkYF06IHRpbWVzdGFtcFxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgICByZXR1cm4gc2V0TWVldGluZ3MobmV3TWVldGluZ3MpO1xuICAgIH1cblxuICAgIGZpcmViYXNlXG4gICAgICAuZmlyZXN0b3JlKClcbiAgICAgIC5kb2MoYG1lZXRpbmdzLyR7bWVldGluZ0lkfWApXG4gICAgICAudXBkYXRlKHtcbiAgICAgICAgW2BpdGVtcy4ke3RpbWVzdGFtcH0uaWRgXTogdGltZXN0YW1wXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7KGN1cnJlbnQudmFsdWUgPT09IFwibG9hZGluZ1wiIHx8IGN1cnJlbnQudmFsdWUgPT09IFwiY3JlYXRpbmdBZ2VuZGFcIikgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZoLTEwMCB2dy0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8Q2xvY2sgdHlwZT1cImRpZ2l0YWxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsoY3VycmVudC52YWx1ZSA9PT0gXCJkcmFmdFwiIHx8XG4gICAgICAgIGN1cnJlbnQudmFsdWUgPT09IFwiY29uZmlybWVkXCIgfHxcbiAgICAgICAgY3VycmVudC52YWx1ZSA9PT0gXCJhY3RpdmVcIiB8fFxuICAgICAgICBjdXJyZW50LnZhbHVlID09PSBcImNvbXBsZXRlXCIpICYmIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCAgdmgtMTAwIHctMTAwIFwiPlxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgZml4ZWQgdmgtMTAwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICB7Y3VycmVudC52YWx1ZSA9PT0gXCJjb25maXJtZWRcIiA/IChcbiAgICAgICAgICAgICAgPFBsYXlcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZW5kKHsgdHlwZTogXCJTVEFSVEVEXCIgfSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogY3VycmVudC52YWx1ZSA9PT0gXCJhY3RpdmVcIiA/IChcbiAgICAgICAgICAgICAgPFN0b3AgY2xhc3NOYW1lPVwicG9pbnRlciBcIiBvbkNsaWNrPXsoKSA9PiBzZW5kKFwiRU5ERURcIil9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwaDQgdGl0bGVcIj5NZWV0Ym94PC9oMT5cbiAgICAgICAgICAgIHtjdXJyZW50LnZhbHVlID09PSBcImRyYWZ0XCIgPyAoXG4gICAgICAgICAgICAgIDxTZW5kIGNsYXNzTmFtZT1cInBvaW50ZXIgXCIgb25DbGljaz17KCkgPT4gc2VuZChcIlNBVkVEX0RSQUZUXCIpfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIHctMTAwIGZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgIHtsaXN0T2ZNZWV0aW5ncy5tYXAoKHByb3BzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8QWdlbmRhSXRlbVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgbWVldGluZ0lkPXttZWV0aW5nSWR9XG4gICAgICAgICAgICAgICAgc3RhdGU9e2N1cnJlbnQudmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHsoY3VycmVudC52YWx1ZSA9PT0gXCJkcmFmdFwiIHx8IGN1cnJlbnQudmFsdWUgPT09IFwiYWN0aXZlXCIpICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTUgdGMgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpY29uPXs8QWRkIC8+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlciBncm93XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBBZ2VuZGEgSXRlbVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRNZWV0aW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKX1cblxuICAgICAge2N1cnJlbnQudmFsdWUgPT09IFwiZmFpbHVyZVwiICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aC0xMDAgdnctMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgRkFJTFVSRVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZ1dHVyYSwgXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgY29sb3I6ICMzNjNkODc7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuaW5kZXgucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuaW5kZXguZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19 */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/pages/index.jsx */"));
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

/***/ 3:
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