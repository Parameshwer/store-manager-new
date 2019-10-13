(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing/billing.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing/billing.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>billing works!</p>\n");

/***/ }),

/***/ "./src/app/billing/billing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/billing/billing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BillingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function() { return BillingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing/billing.component.ts");




const routes = [
    {
        path: '',
        component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_3__["BillingComponent"]
    }
];
let BillingRoutingModule = class BillingRoutingModule {
};
BillingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BillingRoutingModule);



/***/ }),

/***/ "./src/app/billing/billing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/billing/billing.module.ts ***!
  \*******************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/billing/billing-routing.module.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing/billing.component.ts");





let BillingModule = class BillingModule {
};
BillingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_billing_billing_component__WEBPACK_IMPORTED_MODULE_4__["BillingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _billing_routing_module__WEBPACK_IMPORTED_MODULE_3__["BillingRoutingModule"]
        ]
    })
], BillingModule);



/***/ }),

/***/ "./src/app/billing/billing/billing.component.scss":
/*!********************************************************!*\
  !*** ./src/app/billing/billing/billing.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvYmlsbGluZy9iaWxsaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/billing/billing/billing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/billing/billing/billing.component.ts ***!
  \******************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BillingComponent = class BillingComponent {
    constructor() { }
    ngOnInit() {
    }
};
BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./billing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing/billing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./billing.component.scss */ "./src/app/billing/billing/billing.component.scss")).default]
    })
], BillingComponent);



/***/ })

}]);
//# sourceMappingURL=billing-billing-module.js.map