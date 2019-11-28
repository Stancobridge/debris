/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/index.js":
/*!**************************!*\
  !*** ./app/src/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _debris_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../debris/index */ \"./debris/index.js\");\n/* harmony import */ var _login_login_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.template */ \"./app/src/login/login.template.js\");\n\n\n\n\nlet App = document.querySelector('[debris-app]')\n\nApp.innerHTML = _login_login_template__WEBPACK_IMPORTED_MODULE_1__[\"loginElement\"].innerHTML//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9pbmRleC5qcz83MDdhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtEZWJyaXN9IGZyb20gXCIuLi8uLi9kZWJyaXMvaW5kZXhcIlxuaW1wb3J0IHsgbG9naW5FbGVtZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4udGVtcGxhdGVcIlxuXG5sZXQgQXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RlYnJpcy1hcHBdJylcblxuQXBwLmlubmVySFRNTCA9IGxvZ2luRWxlbWVudC5pbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/src/index.js\n");

/***/ }),

/***/ "./app/src/login/login.template.js":
/*!*****************************************!*\
  !*** ./app/src/login/login.template.js ***!
  \*****************************************/
/*! exports provided: loginElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginElement\", function() { return loginElement; });\n/* harmony import */ var _debris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../debris */ \"./debris/index.js\");\n\n\nconst login = `<div>\n    <form>\n        <input>\n        <br>\n        <input type=\"password\" />\n        <br />\n        <input type=\"button\" />\n    </form>\n</div>`\n\nlet loginElement = _debris__WEBPACK_IMPORTED_MODULE_0__[\"debris\"].FragmentElement.buildElement(login)\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3JjL2xvZ2luL2xvZ2luLnRlbXBsYXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9sb2dpbi9sb2dpbi50ZW1wbGF0ZS5qcz80MGE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlYnJpcyB9IGZyb20gXCIuLi8uLi8uLi9kZWJyaXNcIjtcblxuY29uc3QgbG9naW4gPSBgPGRpdj5cbiAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0PlxuICAgICAgICA8YnI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiAvPlxuICAgIDwvZm9ybT5cbjwvZGl2PmBcblxuZXhwb3J0IGxldCBsb2dpbkVsZW1lbnQgPSBkZWJyaXMuRnJhZ21lbnRFbGVtZW50LmJ1aWxkRWxlbWVudChsb2dpbilcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/src/login/login.template.js\n");

/***/ }),

/***/ "./debris/index.js":
/*!*************************!*\
  !*** ./debris/index.js ***!
  \*************************/
/*! exports provided: debris */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debris\", function() { return debris; });\n/* harmony import */ var _src_element_FragmentElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/element/FragmentElement */ \"./debris/src/element/FragmentElement.js\");\n/* harmony import */ var _src_element_FragmentElement__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_element_FragmentElement__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * Core DebrisJS Framework\n * all modules are included here\n */\n\n//  Import Element module\n// import {DebrisElement} from \"./src/element/index\"\n\nconst  debris = {};\n\ndebris.FragmentElement = new _src_element_FragmentElement__WEBPACK_IMPORTED_MODULE_0__[\"FragmentElement\"]\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZWJyaXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZWJyaXMvaW5kZXguanM/MjEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudEVsZW1lbnQgfSBmcm9tIFwiLi9zcmMvZWxlbWVudC9GcmFnbWVudEVsZW1lbnRcIjtcblxuLyoqXG4gKiBDb3JlIERlYnJpc0pTIEZyYW1ld29ya1xuICogYWxsIG1vZHVsZXMgYXJlIGluY2x1ZGVkIGhlcmVcbiAqL1xuXG4vLyAgSW1wb3J0IEVsZW1lbnQgbW9kdWxlXG4vLyBpbXBvcnQge0RlYnJpc0VsZW1lbnR9IGZyb20gXCIuL3NyYy9lbGVtZW50L2luZGV4XCJcblxuZXhwb3J0IGNvbnN0ICBkZWJyaXMgPSB7fTtcblxuZGVicmlzLkZyYWdtZW50RWxlbWVudCA9IG5ldyBGcmFnbWVudEVsZW1lbnRcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./debris/index.js\n");

/***/ }),

/***/ "./debris/src/element/FragmentElement.js":
/*!***********************************************!*\
  !*** ./debris/src/element/FragmentElement.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Module for working with html fragment \n */\n\n class FragmentElement {\n    \n    constructor() {\n        this.doc = '';\n    }\n\n    // Create fragment element\n    create() {\n        return document.createDocumentFragment()\n    }\n\n    // build html element from string and return it as node\n    // when second parameter is passed, it must be a node, fragment or\n    // real dom element, the new created element will be appended to \n    // the element in second parameter as a new child element\n    buildElement(htmlString, into) {\n\n        if(htmlString == '' || typeof htmlString != \"string\") return;\n\n        let element = document.createElement('div');\n\n        element.innerHTML = htmlString;\n\n        const {childNodes} = element;\n\n        console.log(childNodes[0].nodeName)\n\n        if(childNodes.length > 1) {\n            // handle Mutiple document creation\n\n            \n            \n        } else if(childNodes.length == 1) {\n            // handle single insertion\n            return childNodes[0];\n        }\n\n    }\n\n    removeElement(element) {\n        return element.remove()\n    }\n }\n\n\n module.exports.FragmentElement = FragmentElement//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZWJyaXMvc3JjL2VsZW1lbnQvRnJhZ21lbnRFbGVtZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGVicmlzL3NyYy9lbGVtZW50L0ZyYWdtZW50RWxlbWVudC5qcz8yMTgwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9kdWxlIGZvciB3b3JraW5nIHdpdGggaHRtbCBmcmFnbWVudCBcbiAqL1xuXG4gY2xhc3MgRnJhZ21lbnRFbGVtZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kb2MgPSAnJztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZnJhZ21lbnQgZWxlbWVudFxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIH1cblxuICAgIC8vIGJ1aWxkIGh0bWwgZWxlbWVudCBmcm9tIHN0cmluZyBhbmQgcmV0dXJuIGl0IGFzIG5vZGVcbiAgICAvLyB3aGVuIHNlY29uZCBwYXJhbWV0ZXIgaXMgcGFzc2VkLCBpdCBtdXN0IGJlIGEgbm9kZSwgZnJhZ21lbnQgb3JcbiAgICAvLyByZWFsIGRvbSBlbGVtZW50LCB0aGUgbmV3IGNyZWF0ZWQgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIFxuICAgIC8vIHRoZSBlbGVtZW50IGluIHNlY29uZCBwYXJhbWV0ZXIgYXMgYSBuZXcgY2hpbGQgZWxlbWVudFxuICAgIGJ1aWxkRWxlbWVudChodG1sU3RyaW5nLCBpbnRvKSB7XG5cbiAgICAgICAgaWYoaHRtbFN0cmluZyA9PSAnJyB8fCB0eXBlb2YgaHRtbFN0cmluZyAhPSBcInN0cmluZ1wiKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG5cbiAgICAgICAgY29uc3Qge2NoaWxkTm9kZXN9ID0gZWxlbWVudDtcblxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZE5vZGVzWzBdLm5vZGVOYW1lKVxuXG4gICAgICAgIGlmKGNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gaGFuZGxlIE11dGlwbGUgZG9jdW1lbnQgY3JlYXRpb25cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmKGNoaWxkTm9kZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBzaW5nbGUgaW5zZXJ0aW9uXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuIH1cblxuXG4gbW9kdWxlLmV4cG9ydHMuRnJhZ21lbnRFbGVtZW50ID0gRnJhZ21lbnRFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./debris/src/element/FragmentElement.js\n");

/***/ })

/******/ });