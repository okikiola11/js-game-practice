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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/player */ \"./src/js/player.js\");\n/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game */ \"./src/js/game.js\");\n\n\n\nplayer = new _js_player__WEBPACK_IMPORTED_MODULE_0__.player();\n_js_game__WEBPACK_IMPORTED_MODULE_1__.default;\n\n//# sourceURL=webpack://js-shooter-practice/./src/index.js?");

/***/ }),

/***/ "./src/js/entities.js":
/*!****************************!*\
  !*** ./src/js/entities.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// this script contains all of the classes for the various entities in our game\nclass Entity extends Phaser.GameObjects.Sprite {\n  constructor(scene, x, y, key, type) {\n    super(scene, x, y, key);\n\n    // assign the entity scenes\n    this.scene = scene;\n    this.scene.add.existing(this);\n    this.scene.physics.world.enableBody(this, 0);\n    this.setData('type', type);\n    this.setData('isDead', false);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/entities.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _sceneMainMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sceneMainMenu */ \"./src/js/sceneMainMenu.js\");\n/* harmony import */ var _sceneMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneMain */ \"./src/js/sceneMain.js\");\n/* harmony import */ var _sceneGameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sceneGameOver */ \"./src/js/sceneGameOver.js\");\n\n\n\n\n// configuration properties for the Phaser game instance\nlet config = {\n  type: Phaser.WEBGL,\n  width: 480,\n  height: 640,\n  backgroundColor: 'black',\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      gravity: { x: 0, y: 0 }\n    }\n  },\n  scene: [\n    _sceneMainMenu__WEBPACK_IMPORTED_MODULE_0__.default,\n    _sceneMain__WEBPACK_IMPORTED_MODULE_1__.default,\n    _sceneGameOver__WEBPACK_IMPORTED_MODULE_2__.default\n  ],\n  pixelArt: true,\n  roundPixels: true\n}\n\nconst game = new Phaser.Game(config);\n\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/game.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ \"./src/js/entities.js\");\n\n\nclass Player extends _entities__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(scene, x, y, key) {\n    super(scene, x, y, key);\n  \n    // declare the speed that the player shd move\n    this.setData('speed', 200);\n    // play the player animation\n    this.play('sprPlayer');\n  }\n\n  // the movement functions\n  moveUp() {\n    this.body.velocity.y = -this.getData('speed');\n  }\n\n  moveDown() {\n    this.body.velocity.y = this.getData('speed');\n  }\n  \n  moveLeft() {\n    this.body.velocity.x = -this.getData('speed');\n  }\n  \n  moveRight() {\n    this.body.velocity.x = this.getData('speed');\n  }\n\n  // call the movement func inside this function\n  update() {\n    // every game update the player’s velocity will be set to zero\n    this.body.setVelocity(0, 0);\n\n    // ensures that the player cannot move off screen\n    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);\n    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/player.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n\n\nclass SceneMain extends Phaser.Scene {\n  constructor() {\n    super({ key: \"SceneMain\" })\n  }\n\n  preload() {\n    // load the image files\n    // this.load.image(imageKey, path);\n    this.load.image(\"sprBg0\", \"../src/assets/images/sprBg0.png\");\n    this.load.image(\"sprBg1\", \"../src/assets/images/sprBg1.png\");\n    this.load.spritesheet(\"sprExplosion\", \"../src/assets/images/sprExplosion.png\", {\n      frameWidth: 32,\n      frameHeight: 32\n    });\n    this.load.spritesheet(\"sprEnemy0\", \"../src/assets/images/sprEnemy0.png\", {\n      frameWidth: 16,\n      frameHeight: 16\n    });\n    this.load.image(\"sprEnemy1\", \"../src/assets/images/sprEnemy1.png\");\n    // add animation\n    this.load.spritesheet(\"sprEnemy2\", \"../src/assets/images/sprEnemy2.png\", {\n      frameWidth: 16,\n      frameHeight: 16\n    });\n    this.load.image(\"sprLaserEnemy0\", \"../src/assets/images/sprLaserEnemy0.png\");\n    this.load.image(\"sprLaserPlayer\", \"../src/assets/images/sprLaserPlayer.png\");\n    this.load.spritesheet(\"sprPlayer\", \"../src/assets/images/sprPlayer.png\", {\n      frameWidth: 16,\n      frameHeight: 16\n    });\n    // add the loading code for our sounds\n    this.load.audio(\"sndExplode0\", \"../src/assets/images/sndExplode0.wav\");\n    this.load.audio(\"sndExplode1\", \"../src/assets/images/sndExplode1.wav\");\n    this.load.audio(\"sndLaser\", \"../src/assets/images/sndLaser.wav\");\n  }\n\n  create() {\n    // inorder to create our animations\n    this.anims.create({\n      key: \"sprEnemy0\",\n      frames: this.anims.generateFrameNumbers(\"sprEnemy0\"),\n      frameRate: 20,\n      repeat: -1\n    });\n\n    this.anims.create({\n      key: \"sprEnemy2\",\n      frames: this.anims.generateFrameNumbers(\"sprEnemy2\"),\n      frameRate: 20,\n      repeat: -1\n    });\n\n    this.anims.create({\n      key: \"sprExplosion\",\n      frames: this.anims.generateFrameNumbers(\"sprExplosion\"),\n      frameRate: 20,\n      repeat: 0\n    });\n\n    this.anims.create({\n      key: \"sprPlayer\",\n      frames: this.anims.generateFrameNumbers(\"sprPlayer\"),\n      frameRate: 20,\n      repeat: -1\n    });\n\n    // create sounds\n    this.sfx = {\n      explosions: [\n        this.sound.add(\"sndExplode0\"),\n        this.sound.add(\"sndExplode1\")\n      ],\n      laser: this.sound.add(\"sndLaser\")\n    };\n\n    // an instance of the player function is created here\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(\n      this,\n      this.game.config.width * 0.5,\n      this.game.config.height * 0.5,\n      \"sprPlayer\"\n    );\n\n    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);\n    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);\n    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);\n    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);\n    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);\n\n  }\n\n  // add the movement checks\n  update() {\n    // runs the update code that will keep the player still\n    this.player.update();\n\n    // THESE if statements check if the corresponding key is down, \n    // if so, move the player in the appropriate direction\n    if (this.keyW.isDown) {\n      this.player.moveUp();\n    }\n    else if (this.keyS.isDown) {\n      this.player.moveDown();\n    }\n    \n    if (this.keyA.isDown) {\n      this.player.moveLeft();\n    }\n    else if (this.keyD.isDown) {\n      this.player.moveRight();\n    }\n    \n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneMain);\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/sceneMain.js?");

/***/ }),

/***/ "./src/js/sceneMainMenu.js":
/*!*********************************!*\
  !*** ./src/js/sceneMainMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SceneMainMenu extends Phaser.Scene {\n  constructor() {\n    super({ key: \"SceneMainMenu\" })\n  }\n\n  preload() {\n    this.load.image(\"sprBtnPlay\", \"../src/assets/images/sprBtnPlay.png\");\n    this.load.image(\"sprBtnPlayHover\", \"../src/assets/images/sprBtnPlayHover.png\");\n    this.load.image(\"sprBtnPlayDown\", \"../src/assets/images/sprBtnPlayDown.png\");\n    this.load.image(\"sprBtnRestart\", \"../src/assets/images/sprBtnRestart.png\");\n    this.load.image(\"sprBtnRestartHover\", \"../src/assets/images/sprBtnRestartHover.png\");\n    this.load.image(\"sprBtnRestartDown\", \"../src/assets/images/sprBtnRestartDown.png\");\n\n    this.load.audio(\"sndBtnOver\", \"../src/assets/images/sndBtnOver.wav\");\n    this.load.audio(\"sndBtnDown\", \"../src/assets/images/sndBtnDown.wav\");\n  }\n\n  create() {\n    this.scene.start(\"SceneMain\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneMainMenu);\n\n//# sourceURL=webpack://js-shooter-practice/./src/js/sceneMainMenu.js?");

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