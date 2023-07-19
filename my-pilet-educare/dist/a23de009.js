"use strict";
(self["webpackChunkpr_mypileteducare"] = self["webpackChunkpr_mypileteducare"] || []).push([["src_component_Department_tsx"],{

/***/ "./src/component/Department.tsx":
/*!**************************************!*\
  !*** ./src/component/Department.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Department)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var _DepartmentData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepartmentData */ "./src/component/DepartmentData.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Department() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_DepartmentData__WEBPACK_IMPORTED_MODULE_1__.departmentsData),
    _useState2 = _slicedToArray(_useState, 2),
    mockData = _useState2[0],
    setMockData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    first = _useState4[0],
    setFirst = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_datatable__WEBPACK_IMPORTED_MODULE_2__.DataTable, {
    value: mockData,
    paginator: true,
    rows: 10,
    first: first,
    onPage: function onPage(e) {
      return setFirst(e.first);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {
    field: "deptname",
    header: "Department",
    sortable: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {
    field: "university",
    header: "University",
    sortable: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__.Column, {
    field: "strength",
    header: "Strength",
    sortable: true
  }))));
}

/***/ }),

/***/ "./src/component/DepartmentData.tsx":
/*!******************************************!*\
  !*** ./src/component/DepartmentData.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   departmentsData: () => (/* binding */ departmentsData)
/* harmony export */ });
var departmentsData = [{
  "deptid": 1,
  "deptname": "Computer Science",
  "university": "Visvweshwaraiah Technological University",
  "strength": 500
}, {
  "deptid": 2,
  "deptname": "Electronice and Communication",
  "university": "Visvweshwaraiah Technological University",
  "strength": 550
}, {
  "deptid": 3,
  "deptname": "Information Science",
  "university": "Visvweshwaraiah Technological University",
  "strength": 550
}, {
  "deptid": 4,
  "deptname": "Computer Science",
  "university": "Reva University",
  "strength": 600
}, {
  "deptid": 5,
  "deptname": "Electronice and Communication",
  "university": "Reva University",
  "strength": 650
}, {
  "deptid": 6,
  "deptname": "Information Science",
  "university": "Reva University",
  "strength": 680
}, {
  "deptid": 7,
  "deptname": "Computer Science",
  "university": "Banglore University",
  "strength": 700
}, {
  "deptid": 8,
  "deptname": "Electronice and Communication",
  "university": "Banglore University",
  "strength": 750
}, {
  "deptid": 9,
  "deptname": "Information Science",
  "university": "Banglore University",
  "strength": 750
}, {
  "deptid": 10,
  "deptname": "Computer Science",
  "university": "Mysore University",
  "strength": 780
}, {
  "deptid": 11,
  "deptname": "Electronice and Communication",
  "university": "Mysore University",
  "strength": 800
}, {
  "deptid": 12,
  "deptname": "Information Science",
  "university": "Mysore University",
  "strength": 850
}, {
  "deptid": 13,
  "deptname": "Robotics Engineering",
  "university": "Manglore University",
  "strength": 880
}, {
  "deptid": 14,
  "deptname": "Artificial Intelligence",
  "university": "Mysore University",
  "strength": 890
}, {
  "deptid": 15,
  "deptname": "Textile Engineering",
  "university": "Mysore University",
  "strength": 850
}];

/***/ })

}]);
//# sourceMappingURL=a23de009.js.map