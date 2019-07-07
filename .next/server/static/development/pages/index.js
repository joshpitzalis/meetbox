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
/*! exports provided: AgendaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaItem", function() { return AgendaItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_5__);







function AgendaItem(_ref) {
  var index = _ref.index;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    id: 0
  }]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      showNotes = _useState4[0],
      setShowNotes = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "flex items-center item".concat(index)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("dl", {
    className: "jsx-1528990481" + " " + "fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("dd", {
    className: "jsx-1528990481" + " " + "f3 fw6 ml0 ttu"
  }, "5"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("dd", {
    className: "jsx-1528990481" + " " + "f6 fw4 ml0 ttu"
  }, "min")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "measure"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "jsx-1528990481"
  }, "Agenda Item Name")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "ml5 ma3"
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1528990481" + " " + "ma3"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["RadioButton"], {
      checked: false,
      label: "check me off once discussed",
      onChange: function onChange(event) {
        return console.log(event.target.checked);
      }
    }));
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "ma3 pl2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_5__["Add"], {
      size: "small"
    }),
    label: "Add Talking Point",
    onClick: function onClick() {
      return setItems([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items), [{
        id: +new Date()
      }]));
    },
    plain: true
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowNotes(true);
    },
    className: "jsx-1528990481" + " " + "ml5 ma3 w5 h3 pointer"
  }, showNotes && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1528990481" + " " + "ma3"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_5__["Add"], null),
    label: "Add Notes, Tasks, Votes Or Decisions",
    onClick: function onClick() {
      return setItems([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items), [{
        id: +new Date()
      }]));
    },
    plain: true
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1528990481"
  }, ".item0.jsx-1528990481{background-color:#fdfce7;}.item1.jsx-1528990481{background-color:#faf4c0;}.item2.jsx-1528990481{background-color:#e0eac3;}.item3.jsx-1528990481{background-color:#c6e0d7;}.item4.jsx-1528990481{background-color:#b2cdd7;}.item5.jsx-1528990481{background-color:#cbb39e;}.item6.jsx-1528990481{background-color:#e79c74;}.item7.jsx-1528990481{background-color:#e49883;}.item8.jsx-1528990481{background-color:#df9598;}.item9.jsx-1528990481{background-color:#d1869f;}.item10.jsx-1528990481{background-color:#bc72a7;}.item11.jsx-1528990481{background-color:#894f9c;}.item12.jsx-1528990481{background-color:#3a2a76;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvZmVhdHVyZXMvYWdlbmRhL2NvbXBvbmVudHMvQWdlbmRhSXRlbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURTLEFBR3NDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLHlCQW5DM0IsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9mZWF0dXJlcy9hZ2VuZGEvY29tcG9uZW50cy9BZ2VuZGFJdGVtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgUmFkaW9CdXR0b24gfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgQWRkIH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBZ2VuZGFJdGVtKHsgaW5kZXggfSkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFt7IGlkOiAwIH1dKTtcbiAgY29uc3QgW3Nob3dOb3Rlcywgc2V0U2hvd05vdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGl0ZW0ke2luZGV4fWB9PlxuICAgICAgPGRsIGNsYXNzTmFtZT1cImZsIGZuLWwgdy01MCBkaWItbCB3LWF1dG8tbCBsaC10aXRsZSBtcjUtbCBwYTNcIj5cbiAgICAgICAgPGRkIGNsYXNzTmFtZT1cImYzIGZ3NiBtbDAgdHR1XCI+NTwvZGQ+XG4gICAgICAgIDxkZCBjbGFzc05hbWU9XCJmNiBmdzQgbWwwIHR0dVwiPm1pbjwvZGQ+XG4gICAgICA8L2RsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWFzdXJlXCI+XG4gICAgICAgIDxoMj5BZ2VuZGEgSXRlbSBOYW1lPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbDUgbWEzXCI+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYTNcIj5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblxuICAgICAgICAgICAgICBjaGVja2VkPXtmYWxzZX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJjaGVjayBtZSBvZmYgb25jZSBkaXNjdXNzZWRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYTMgcGwyXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj17PEFkZCBzaXplPVwic21hbGxcIiAvPn1cbiAgICAgICAgICAgIGxhYmVsPVwiQWRkIFRhbGtpbmcgUG9pbnRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXRlbXMoWy4uLml0ZW1zLCB7IGlkOiArbmV3IERhdGUoKSB9XSl9XG4gICAgICAgICAgICBwbGFpblxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sNSBtYTMgdzUgaDMgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dOb3Rlcyh0cnVlKX0+XG4gICAgICAgIHtzaG93Tm90ZXMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWEzXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGljb249ezxBZGQgLz59XG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkIE5vdGVzLCBUYXNrcywgVm90ZXMgT3IgRGVjaXNpb25zXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXRlbXMoWy4uLml0ZW1zLCB7IGlkOiArbmV3IERhdGUoKSB9XSl9XG4gICAgICAgICAgICAgIHBsYWluXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5pdGVtMCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2U3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjRjMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhYzM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZlMGQ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IyY2RkNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW01IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmIzOWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtNiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5Yzc0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0OTg4MztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW04IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjk1OTg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtOSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE4NjlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbTEwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzcyYTc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtMTEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5NGY5YztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0xMiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EyYTc2O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/features/agenda/components/AgendaItem.jsx */"));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xstate/react */ "@xstate/react");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xstate */ "xstate");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _features_agenda_components_AgendaItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../features/agenda/components/AgendaItem */ "./features/agenda/components/AgendaItem.jsx");
/* harmony import */ var _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sideEffects/firebase */ "./sideEffects/firebase.js");














var createAgenda = function createAgenda(event) {
  var doc = _sideEffects_firebase__WEBPACK_IMPORTED_MODULE_11__["default"].firestore().collection("meetings").doc();
  console.log("doc.id", doc.id);
  return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/meeting/".concat(doc.id));
}; // export const createMeeting = async event => {
//   const { payload } = event;
//   const options = {
//     options: JSON.stringify(payload)
//   };
//   const doc = firebase
//     .firestore()
//     .collection("meetings")
//     .doc();
//   await doc.set({
//     ...options
//   });
//   return doc.id;
// };


var propTypes = {};
var defaultProps = {};
var agendaMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_8__["Machine"])({
  id: "agenda",
  initial: "temporary",
  states: {
    temporary: {
      on: {
        AGENDA_CREATED: "creatingAgendaPage"
      }
    },
    creatingAgendaPage: {
      invoke: {
        id: "createAgenda",
        src: function src(context, event) {
          return createAgenda(event);
        },
        onDone: {
          target: "created" // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8

        },
        onError: {
          target: "failure"
        }
      }
    },
    created: {
      on: {
        CONFIRMED_TIMES: "temporary",
        ADDED_NEW_DATE: "temporary"
      }
    },
    failure: {
      type: "final" // loading: {
      //   invoke: {
      //     id: "createMeeting",
      //     src: (context, event) => createMeeting(event),
      //     onDone: {
      //       target: "ready"
      //       // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8
      //     },
      //     onError: {
      //       target: "failure"
      //     }
      //   }
      // },
      // ready: {
      //   on: { SELECTED_A_DATE: "confirmed" }
      // },
      // confirmed: {
      //   type: "final"
      // },

    }
  }
});
function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    id: 0
  }]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_4__["useMachine"])(agendaMachine),
      _useMachine2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMachine, 2),
      current = _useMachine2[0],
      send = _useMachine2[1];

  var handleCreateAgenda = function handleCreateAgenda() {
    return send({
      type: "AGENDA_CREATED"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, (current.value === "temporary" || current.value === "created") && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "jsx-2034684555" + " " + "flex  vh-100 w-100"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("aside", {
    className: "jsx-2034684555" + " " + " flex flex-column justify-around"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-2034684555"
  }, "Add people"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-2034684555" + " " + "ph4 title"
  }, "Agenda"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: handleCreateAgenda,
    className: "jsx-2034684555" + " " + "pointer"
  }, "Create Agenda")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "flex-grow-1 w-100 flex flex-column"
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_features_agenda_components_AgendaItem__WEBPACK_IMPORTED_MODULE_10__["AgendaItem"], {
      index: index,
      key: item.id
    });
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "pa5   tc flex items-center justify-center grow"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_6__["Add"], null),
    primary: true,
    label: "Add Agenda Item",
    onClick: function onClick() {
      return setItems([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items), [{
        id: +new Date()
      }]));
    }
  })))), current.value === "creatingAgendaPage" && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "vh-100 vw-100 flex items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Clock"], {
    type: "digital"
  })), current.value === "failure" && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2034684555" + " " + "vh-100 vw-100 flex items-center justify-center"
  }, "FAILURE"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2034684555"
  }, ".title.jsx-2034684555{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);text-align:center;font-size:4rem;text-transform:uppercase;font-family:Futura,\"Trebuchet MS\",Arial,sans-serif;font-size:23px !important;font-style:normal;font-variant:normal;font-weight:700;line-height:23px;color:#363d87;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NocGl0emFsaXMvRGVza3RvcC9hZ2VuZGEvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJUyxBQUdzQyxpRkFDQSx1RkFDUCxrQkFDSCxlQUNVLHlCQUU2QixtREFDNUIsMEJBQ1Isa0JBQ0Usb0JBQ0osZ0JBQ0MsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2pvc2hwaXR6YWxpcy9EZXNrdG9wL2FnZW5kYS9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2xvY2sgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgQWRkIH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBBZ2VuZGFJdGVtIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2FnZW5kYS9jb21wb25lbnRzL0FnZW5kYUl0ZW1cIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vc2lkZUVmZmVjdHMvZmlyZWJhc2VcIjtcblxuY29uc3QgY3JlYXRlQWdlbmRhID0gZXZlbnQgPT4ge1xuICBjb25zdCBkb2MgPSBmaXJlYmFzZVxuICAgIC5maXJlc3RvcmUoKVxuICAgIC5jb2xsZWN0aW9uKFwibWVldGluZ3NcIilcbiAgICAuZG9jKCk7XG4gIGNvbnNvbGUubG9nKFwiZG9jLmlkXCIsIGRvYy5pZCk7XG4gIHJldHVybiBSb3V0ZXIucHVzaChgL21lZXRpbmcvJHtkb2MuaWR9YCk7XG59O1xuXG4vLyBleHBvcnQgY29uc3QgY3JlYXRlTWVldGluZyA9IGFzeW5jIGV2ZW50ID0+IHtcbi8vICAgY29uc3QgeyBwYXlsb2FkIH0gPSBldmVudDtcbi8vICAgY29uc3Qgb3B0aW9ucyA9IHtcbi8vICAgICBvcHRpb25zOiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxuLy8gICB9O1xuXG4vLyAgIGNvbnN0IGRvYyA9IGZpcmViYXNlXG4vLyAgICAgLmZpcmVzdG9yZSgpXG4vLyAgICAgLmNvbGxlY3Rpb24oXCJtZWV0aW5nc1wiKVxuLy8gICAgIC5kb2MoKTtcblxuLy8gICBhd2FpdCBkb2Muc2V0KHtcbi8vICAgICAuLi5vcHRpb25zXG4vLyAgIH0pO1xuLy8gICByZXR1cm4gZG9jLmlkO1xuLy8gfTtcblxuY29uc3QgcHJvcFR5cGVzID0ge307XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHt9O1xuXG5jb25zdCBhZ2VuZGFNYWNoaW5lID0gTWFjaGluZSh7XG4gIGlkOiBcImFnZW5kYVwiLFxuICBpbml0aWFsOiBcInRlbXBvcmFyeVwiLFxuICBzdGF0ZXM6IHtcbiAgICB0ZW1wb3Jhcnk6IHtcbiAgICAgIG9uOiB7IEFHRU5EQV9DUkVBVEVEOiBcImNyZWF0aW5nQWdlbmRhUGFnZVwiIH1cbiAgICB9LFxuICAgIGNyZWF0aW5nQWdlbmRhUGFnZToge1xuICAgICAgaW52b2tlOiB7XG4gICAgICAgIGlkOiBcImNyZWF0ZUFnZW5kYVwiLFxuICAgICAgICBzcmM6IChjb250ZXh0LCBldmVudCkgPT4gY3JlYXRlQWdlbmRhKGV2ZW50KSxcbiAgICAgICAgb25Eb25lOiB7XG4gICAgICAgICAgdGFyZ2V0OiBcImNyZWF0ZWRcIlxuICAgICAgICAgIC8vIFRoZSByZXNvbHZlZCBkYXRhIGlzIHBsYWNlZCBpbnRvIGEgJ2RvbmUuaW52b2tlLjxpZD4nIGV2ZW50LCB1bmRlciB0aGUgZGF0YSBwcm9wZXJ0eSBodHRwOi8vYml0Lmx5LzJGdDJXUjhcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjoge1xuICAgICAgICAgIHRhcmdldDogXCJmYWlsdXJlXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDoge1xuICAgICAgb246IHtcbiAgICAgICAgQ09ORklSTUVEX1RJTUVTOiBcInRlbXBvcmFyeVwiLFxuICAgICAgICBBRERFRF9ORVdfREFURTogXCJ0ZW1wb3JhcnlcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZmFpbHVyZTogeyB0eXBlOiBcImZpbmFsXCIgfVxuXG4gICAgLy8gbG9hZGluZzoge1xuICAgIC8vICAgaW52b2tlOiB7XG4gICAgLy8gICAgIGlkOiBcImNyZWF0ZU1lZXRpbmdcIixcbiAgICAvLyAgICAgc3JjOiAoY29udGV4dCwgZXZlbnQpID0+IGNyZWF0ZU1lZXRpbmcoZXZlbnQpLFxuICAgIC8vICAgICBvbkRvbmU6IHtcbiAgICAvLyAgICAgICB0YXJnZXQ6IFwicmVhZHlcIlxuICAgIC8vICAgICAgIC8vIFRoZSByZXNvbHZlZCBkYXRhIGlzIHBsYWNlZCBpbnRvIGEgJ2RvbmUuaW52b2tlLjxpZD4nIGV2ZW50LCB1bmRlciB0aGUgZGF0YSBwcm9wZXJ0eSBodHRwOi8vYml0Lmx5LzJGdDJXUjhcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25FcnJvcjoge1xuICAgIC8vICAgICAgIHRhcmdldDogXCJmYWlsdXJlXCJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0sXG4gICAgLy8gcmVhZHk6IHtcbiAgICAvLyAgIG9uOiB7IFNFTEVDVEVEX0FfREFURTogXCJjb25maXJtZWRcIiB9XG4gICAgLy8gfSxcbiAgICAvLyBjb25maXJtZWQ6IHtcbiAgICAvLyAgIHR5cGU6IFwiZmluYWxcIlxuICAgIC8vIH0sXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbeyBpZDogMCB9XSk7XG4gIGNvbnN0IFtjdXJyZW50LCBzZW5kXSA9IHVzZU1hY2hpbmUoYWdlbmRhTWFjaGluZSk7XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUFnZW5kYSA9ICgpID0+IHNlbmQoeyB0eXBlOiBcIkFHRU5EQV9DUkVBVEVEXCIgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyhjdXJyZW50LnZhbHVlID09PSBcInRlbXBvcmFyeVwiIHx8IGN1cnJlbnQudmFsdWUgPT09IFwiY3JlYXRlZFwiKSAmJiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggIHZoLTEwMCB3LTEwMFwiPlxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbj5BZGQgcGVvcGxlPC9idXR0b24+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGg0IHRpdGxlXCI+QWdlbmRhPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlQWdlbmRhfSBjbGFzc05hbWU9XCJwb2ludGVyXCI+XG4gICAgICAgICAgICAgIENyZWF0ZSBBZ2VuZGFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMSB3LTEwMCBmbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8QWdlbmRhSXRlbSBpbmRleD17aW5kZXh9IGtleT17aXRlbS5pZH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTUgICB0YyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpY29uPXs8QWRkIC8+fVxuICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBBZ2VuZGEgSXRlbVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXRlbXMoWy4uLml0ZW1zLCB7IGlkOiArbmV3IERhdGUoKSB9XSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKX1cblxuICAgICAge2N1cnJlbnQudmFsdWUgPT09IFwiY3JlYXRpbmdBZ2VuZGFQYWdlXCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZoLTEwMCB2dy0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8Q2xvY2sgdHlwZT1cImRpZ2l0YWxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtjdXJyZW50LnZhbHVlID09PSBcImZhaWx1cmVcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmgtMTAwIHZ3LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIEZBSUxVUkVcbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmEsIFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzYzZDg3O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmluZGV4LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbmluZGV4LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ== */\n/*@ sourceURL=/Users/joshpitzalis/Desktop/agenda/pages/index.jsx */"));
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