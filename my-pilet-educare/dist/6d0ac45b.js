"use strict";
(self["webpackChunkpr_mypileteducare"] = self["webpackChunkpr_mypileteducare"] || []).push([["src_component_University_tsx"],{

/***/ "./src/component/University.tsx":
/*!**************************************!*\
  !*** ./src/component/University.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ University)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var _UniversityData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UniversityData */ "./src/component/UniversityData.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function University() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_UniversityData__WEBPACK_IMPORTED_MODULE_1__.universities),
    _useState2 = _slicedToArray(_useState, 2),
    mockData = _useState2[0],
    setMockData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    first = _useState4[0],
    setFirst = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Universities")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_datatable__WEBPACK_IMPORTED_MODULE_2__.DataTable, {
    value: mockData,
    paginator: true,
    rows: 10,
    first: first,
    onPage: function onPage(e) {
      return setFirst(e.first);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {
    field: "universityname",
    header: "University",
    sortable: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {
    field: "place",
    header: "Location",
    sortable: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {
    field: "origin",
    header: "Established year",
    sortable: true
  }))));
}

/***/ }),

/***/ "./src/component/UniversityData.tsx":
/*!******************************************!*\
  !*** ./src/component/UniversityData.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   universities: () => (/* binding */ universities)
/* harmony export */ });
var universities = [{
  "universityid": 1,
  "universityname": "Visvweshwaraiah Technological University",
  "origin": 1990,
  "place": "Belagavi"
}, {
  "universityid": 2,
  "universityname": "Mysore University",
  "origin": 1950,
  "place": "Mysore"
}, {
  "universityid": 3,
  "universityname": "Manglore University",
  "origin": 1980,
  "place": "Manglore"
}, {
  "universityid": 4,
  "universityname": "Banglore University",
  "origin": 1965,
  "place": "Banglore"
}];

/***/ })

}]);
//# sourceMappingURL=6d0ac45b.js.map