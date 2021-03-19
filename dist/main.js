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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/game */ \"./src/js/game.js\");\n// SceneMainMenu();\n// SceneMain();\n// SceneGameOver();\n\n\n(0,_src_js_game__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://js-shooter-practice/./src/index.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _sceneMainMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sceneMainMenu */ \"./src/js/sceneMainMenu.js\");\n/* harmony import */ var _sceneMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneMain */ \"./src/js/sceneMain.js\");\n/* harmony import */ var _sceneGameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sceneGameOver */ \"./src/js/sceneGameOver.js\");\n\n\n\n\n// configuration properties for the Phaser game instance\nlet config = {\n  type: Phaser.WEBGL,\n  width: 480,\n  height: 640,\n  backgroundColor: 'black',\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      gravity: { x: 0, y: 0 }\n    }\n  },\n  scene: [\n    _sceneMainMenu__WEBPACK_IMPORTED_MODULE_0__.default,\n    _sceneMain__WEBPACK_IMPORTED_MODULE_1__.default,\n    _sceneGameOver__WEBPACK_IMPORTED_MODULE_2__.default\n  ],\n  pixelArt: true,\n  roundPixels: true\n}\n\nconst game = new Phaser.Game(config);\n\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/game.js?");

/***/ }),

/***/ "./src/js/sceneGameOver.js":
/*!*********************************!*\
  !*** ./src/js/sceneGameOver.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SceneGameOver extends Phaser.Scene {\n  constructor() {\n    super({ key: \"SceneGameOver\" })\n  }\n\n  create() {\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneGameOver);\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/sceneGameOver.js?");

/***/ }),

/***/ "./src/js/sceneMain.js":
/*!*****************************!*\
  !*** ./src/js/sceneMain.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SceneMain extends Phaser.Scene {\n  constructor() {\n    super({ key: \"SceneMain\" })\n  }\n\n  create() {\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneMain);\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/sceneMain.js?");

/***/ }),

/***/ "./src/js/sceneMainMenu.js":
/*!*********************************!*\
  !*** ./src/js/sceneMainMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SceneMainMenu extends Phaser.Scene {\n  constructor() {\n    super({ key: \"SceneMainMenu\" })\n  }\n\n  create() {\n    this.scene.start(\"SceneMain\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneMainMenu);\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/sceneMainMenu.js?");

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