"use strict";
self["webpackHotUpdatepiral"]("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _component_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Login */ "./src/component/Login.tsx");



// change to your feed URL here (either using feed.piral.cloud or your own service)
var feedUrl = 'https://feed.piral.cloud/api/v1/pilet/my-app-educare-pilet1-feed';
// const instance = createInstance({
//   state: {
//     components: layout,
//     errorComponents: errors,
//   },
//   plugins: [...createStandardApi()],
//   requestPilets() {
//     return fetch(feedUrl)
//       .then((res) => res.json())
//       .then((res) => res.items);
//   },
// });
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector('#app'));
//root.render(<Piral instance={instance} />);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Login__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9d9d04d5c0d3f54bbc6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e2cfa30c52b72884265c.hot-update.js.map