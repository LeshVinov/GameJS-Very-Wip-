/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_rg_move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/rg-move */ \"./src/modules/rg-move.js\");\n\r\n\r\n(0,_modules_rg_move__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://eto_tochno_nachalo_goda/./src/index.js?");

/***/ }),

/***/ "./src/modules/rg-move.js":
/*!********************************!*\
  !*** ./src/modules/rg-move.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movementModule = () => {\r\n    const hero = document.getElementById(\"rg-hero\")\r\n    const escapeScreen = document.querySelector('.escape-screen')\r\n    let xPosition = 0\r\n    let yPosition = 0\r\n    let escapeCount = 0\r\n    document.addEventListener('keydown', function(event) {\r\n        if (event.code == 'ArrowUp') {\r\n            // console.log('Гослинг идёт вверх');\r\n            yPosition = +yPosition - 10\r\n            hero.style.top= yPosition+'px'\r\n        } else if (event.code == 'ArrowRight') {\r\n            // console.log('Гослинг идёт вправо'); \r\n            xPosition = +xPosition + 10\r\n            hero.style.left= xPosition+'px'\r\n            hero.style.transform='scale(-1,1)'\r\n        } else if (event.code == 'ArrowDown') {\r\n            // console.log('Гослинг идёт вниз');\r\n            yPosition = +yPosition + 10\r\n            hero.style.top= yPosition+'px'\r\n        } else if (event.code == 'ArrowLeft') {\r\n            // console.log('Гослинг идёт влево');\r\n            xPosition = +xPosition - 10\r\n            hero.style.left= xPosition+'px'\r\n            hero.style.transform='scale(1,1)'\r\n        } else if (event.code == 'Escape') {\r\n            if (escapeCount == 0) {\r\n                escapeScreen.style.display=\"block\" \r\n                escapeCount = 1\r\n            } else {\r\n                escapeScreen.style.display=\"none\"\r\n                escapeCount = 0\r\n            }\r\n        }\r\n      });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movementModule);\n\n//# sourceURL=webpack://eto_tochno_nachalo_goda/./src/modules/rg-move.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;