/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var butInstall = document.getElementById('buttonInstall');\n\n// TODO: Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', function (event) {\n  // defer prompt event for install\n  window.deferredPrompt = event;\n  butInstall.style.visibility = 'visible';\n});\n\n// TODO: Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', function (event) {\n  // set promptEvent equal to the deferred prompt\n  var promptEvent = window.deferredPrompt;\n\n  // check for promptEvent\n  if (!promptEvent) {\n    return;\n  }\n  // call prompt method on the deferred promptEvent\n  promptEvent.prompt();\n  // set window's deferredPrompt to null\n  window.deferredPrompt = null;\n});\n\n// TODO: Add an handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', function (event) {\n  window.deferredPrompt = null;\n  console.log('app installed', event);\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;