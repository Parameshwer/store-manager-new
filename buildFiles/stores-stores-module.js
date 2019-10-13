(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stores-stores-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stores/stores-list/stores-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stores/stores-list/stores-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"stores-wrap\">\n\t<h1>Denim Smart Stores</h1>\n\t<div class=\"store-box\" *ngFor=\"let store of storesData\">\n\t\t<p>{{store.store_name}}</p>\n\t</div>\n\t<div><a href=\"http://localhost/store-manager-new/admin/login\">Login as Admin</a></div>\n</div>");

/***/ }),

/***/ "./src/app/stores/stores-list/stores-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/stores/stores-list/stores-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stores-wrap {\n  font-family: arial;\n  width: 880px;\n  margin: 0 auto;\n}\n.stores-wrap h1 {\n  color: #138aff;\n  margin: 40px 0 10px 10px;\n}\n.stores-wrap div a {\n  margin: 0 0 0 10px;\n}\n.stores-wrap .store-box {\n  color: #fff;\n  width: 200px;\n  height: 200px;\n  align-content: space-between;\n  margin: 10px;\n  background-color: DodgerBlue;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  line-height: 160px;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 20px;\n  letter-spacing: 1px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmVzL3N0b3Jlcy1saXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxzdG9yZS1tYW5hZ2VyLW5ld1xcYW5ndWxhci9zcmNcXGFwcFxcc3RvcmVzXFxzdG9yZXMtbGlzdFxcc3RvcmVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0b3Jlcy9zdG9yZXMtbGlzdC9zdG9yZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0YsY0FBQTtFQUNBLHdCQUFBO0FDRUY7QURDRTtFQUNDLGtCQUFBO0FDQ0g7QURFSTtFQUNGLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc3RvcmVzL3N0b3Jlcy1saXN0L3N0b3Jlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b3Jlcy13cmFwIHtcdFxyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgd2lkdGg6IDg4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87ICAgIFxyXG4gICAgaDEge1xyXG5cdFx0Y29sb3I6ICMxMzhhZmY7XHRcdFxyXG5cdFx0bWFyZ2luOiA0MHB4IDAgMTBweCAxMHB4O1xyXG5cdH1cclxuXHRkaXYge1xyXG5cdFx0YSB7XHJcblx0XHRcdG1hcmdpbjogMCAwIDAgMTBweDtcclxuXHRcdH1cdFxyXG5cdH1cclxuICAgIC5zdG9yZS1ib3gge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0YWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdG1hcmdpbjogMTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMTYwcHg7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcdCAgICBcclxuXHR9XHJcbn1cclxuXHJcbiIsIi5zdG9yZXMtd3JhcCB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgd2lkdGg6IDg4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zdG9yZXMtd3JhcCBoMSB7XG4gIGNvbG9yOiAjMTM4YWZmO1xuICBtYXJnaW46IDQwcHggMCAxMHB4IDEwcHg7XG59XG4uc3RvcmVzLXdyYXAgZGl2IGEge1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG4uc3RvcmVzLXdyYXAgLnN0b3JlLWJveCB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE2MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/stores/stores-list/stores-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/stores/stores-list/stores-list.component.ts ***!
  \*************************************************************/
/*! exports provided: StoresListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresListComponent", function() { return StoresListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores.service */ "./src/app/stores/stores.service.ts");



let StoresListComponent = class StoresListComponent {
    constructor(storesService) {
        this.storesService = storesService;
    }
    ngOnInit() {
        this.getStores();
        console.log(15);
    }
    getStores() {
        this.storesService.getStores().subscribe((data) => {
            this.storesData = data;
        });
    }
};
StoresListComponent.ctorParameters = () => [
    { type: _stores_service__WEBPACK_IMPORTED_MODULE_2__["StoresService"] }
];
StoresListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stores-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stores-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stores/stores-list/stores-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stores-list.component.scss */ "./src/app/stores/stores-list/stores-list.component.scss")).default]
    })
], StoresListComponent);



/***/ }),

/***/ "./src/app/stores/stores-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/stores/stores-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresRoutingModule", function() { return StoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores-list/stores-list.component */ "./src/app/stores/stores-list/stores-list.component.ts");




const routes = [
    {
        path: '',
        component: _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_3__["StoresListComponent"]
    }
];
let StoresRoutingModule = class StoresRoutingModule {
};
StoresRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StoresRoutingModule);



/***/ }),

/***/ "./src/app/stores/stores.module.ts":
/*!*****************************************!*\
  !*** ./src/app/stores/stores.module.ts ***!
  \*****************************************/
/*! exports provided: StoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresModule", function() { return StoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _stores_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores-routing.module */ "./src/app/stores/stores-routing.module.ts");
/* harmony import */ var _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores-list/stores-list.component */ "./src/app/stores/stores-list/stores-list.component.ts");





let StoresModule = class StoresModule {
};
StoresModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_4__["StoresListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _stores_routing_module__WEBPACK_IMPORTED_MODULE_3__["StoresRoutingModule"]
        ]
    })
], StoresModule);



/***/ }),

/***/ "./src/app/stores/stores.service.ts":
/*!******************************************!*\
  !*** ./src/app/stores/stores.service.ts ***!
  \******************************************/
/*! exports provided: StoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresService", function() { return StoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StoresService = class StoresService {
    constructor(http) {
        this.http = http;
    }
    getStores() {
        return this.http.get('http://localhost/store-manager-new/stores/getStores');
    }
};
StoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoresService);



/***/ })

}]);
//# sourceMappingURL=stores-stores-module.js.map