"use strict";
self["webpackHotUpdatepiral"]("main",{

/***/ "./src/layout/DashboardContainer.tsx":
/*!*******************************************!*\
  !*** ./src/layout/DashboardContainer.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyDashboardContainer: () => (/* binding */ MyDashboardContainer),
/* harmony export */   MyDashboardTile: () => (/* binding */ MyDashboardTile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Login */ "./src/component/Login.tsx");


var MyDashboardContainer = function MyDashboardContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fullLayout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Login__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mainData"
  }, children));
};
var MyDashboardTile = function MyDashboardTile(_ref2) {
  var columns = _ref2.columns,
    rows = _ref2.rows,
    resizable = _ref2.resizable,
    children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tile",
    "data-rows": rows,
    "data-columns": columns
  }, children, resizable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tile-resizer"
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("97bad0cccefd4a128b31")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e0f77d51da8e6568a0c2.hot-update.js.map