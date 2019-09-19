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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(elArr) {\n    this.elArr = elArr;\n  }\n\n  html(string = null) {\n    // debugger;\n   if (string === null) {\n      return this.elArr[0].innerHTML;\n   } else {\n     this.elArr.forEach (el => {\n       el.innerHTML = string;\n     })\n   }\n  }\n\n  empty() {\n    this.elArr.forEach(el => {\n      el.innerHTML = \"\";\n    })\n  }\n\n  append(arg) { \n    if (typeof arg === \"string\") {\n      // debugger;\n      this.elArr.forEach(el => {\n        el.innerHTML += arg;\n      })\n    }\n\n\n    if (arg instanceof HTMLElement) {\n      arg = $l(arg);\n    }\n\n\n    if (arg instanceof DOMNodeCollection){\n      this.elArr.forEach(el => {\n        arg.elArr.forEach(argEl => {\n          el.innerHTML += argEl.outerHTML;\n        })\n      })\n    }\n  \n  }\n\n  attr(name, value = null) {\n    if (value === null) {\n    return this.elArr[0].getAttribute(name);\n    } else {\n      this.elArr[0].setAttribute(name, value);\n    }\n  }\n\n  addClass(value) {\n    this.elArr.forEach(attr =>{\n      attr.setAttribute('class', value)\n    })\n  }\n\n  removeClass(name) {\n    this.elArr.forEach(attr => {\n      attr.classList.remove(name);\n    })\n  }\n\n  children() {\n    let childNodes = [];\n    this.elArr.forEach(parentNode => {\n      childNodes = childNodes.concat(parentNode.children);\n    })\n    return new DOMNodeCollection(childNodes);\n  }\n\n  parent() {\n    let parents = [];\n    this.elArr.forEach(childNode => {\n      parents.push(childNode.parentNode);\n    });\n    // parentNode.push(this.elArr[0].parentNode);\n    return new DOMNodeCollection(parents);\n  }\n\n  find(selector) {\n    let allNodes = [];\n    this.elArr.forEach(node => {\n      // debugger;\n      let foundNodes = Array.from(node.querySelectorAll(selector));\n      if (foundNodes.length !== 0) {\n        allNodes = allNodes.concat(foundNodes);\n      }\n    });\n    return new DOMNodeCollection(allNodes);\n  }\n\n  remove() {\n    this.elArr.forEach(node => {\n      node.remove();\n    })\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_node_collection__WEBPACK_IMPORTED_MODULE_0__);\n\nWindow.prototype.$l = function(selector) {\n  \n  if (selector instanceof HTMLElement) {\n    let argsArr = [selector];\n    return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0___default.a(argsArr);\n  } else {\n    const selected = document.querySelectorAll(selector);\n    let arr = Array.from(selected);\n    return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0___default.a(arr);\n  }\n  \n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });