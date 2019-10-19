(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"store-container\">\n\t<mat-toolbar color=\"primary\" class=\"example-toolbar\">\n\t\t<button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\t\t\n\t\t<h1 class=\"example-app-name\">Denim Smart</h1>\n\t</mat-toolbar>\n\t<mat-sidenav-container class=\"example-sidenav-container\">\n\t\t<mat-sidenav #snav fixedTopGap=\"56\">\n\t\t\t<mat-nav-list>\n\t\t\t\t<a mat-list-item routerLink=\".\">Stores</a>\n\t\t\t\t<a mat-list-item routerLink=\".\">test</a>\n\t\t\t\t<a mat-list-item routerLink=\".\">test</a>\n\t\t\t\t<a mat-list-item routerLink=\".\">test</a>\n\t\t\t</mat-nav-list>\t\t\n\t\t</mat-sidenav>\t\t\n\t\t<div class=\"user-actions\">\n\t\t\t<button mat-button [matMenuTriggerFor]=\"menu\">Parameshwer</button>\n\t\t\t<mat-menu #menu=\"matMenu\">\n\t\t\t\t<button mat-menu-item>Logout</button>\t\t  \n\t\t\t</mat-menu>\n\t\t</div>\n\t</mat-sidenav-container>\n</div> -->\n<div class=\"store-container\">\n<mat-toolbar color=\"primary\" class=\"example-toolbar\">\n\t<button mat-button [matMenuTriggerFor]=\"storesmenu\"><mat-icon>menu</mat-icon></button>\n\t<h1 class=\"example-app-name\">Denim Smart <span *ngIf=\"storeDetails\">{{storeDetails[0]?.store_name}}</span></h1>\n\t<mat-menu #storesmenu=\"matMenu\">\n\t\t<button *ngFor=\"let store of stores\" mat-menu-item (click)=\"gotoStore(store.id)\">{{store.store_name}}</button>\n\t</mat-menu>\t\t\t\n\t<div class=\"user-actions\">\n\t\t<button mat-button [matMenuTriggerFor]=\"usermenu\">{{userDetails[0]?.user_name}}</button>\n\t\t<mat-menu #usermenu=\"matMenu\">\n\t\t\t<button mat-menu-item><a href=\"{{App.base_url}}admin/Login/logout\">Logout</a></button>\t\t  \n\t\t</mat-menu>\n\t</div>\n</mat-toolbar>\n</div>\n<app-store-details *ngIf=\"storeId\"></app-store-details>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/store-details/store-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/store-details/store-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"store-detail-container\">\n\t<div class=\"store-detail-sidenav\">\n\t\t<button mat-menu-item>Check Stock</button>\n\t\t<button mat-menu-item>Send Stock</button>\n\t\t<button mat-menu-item>Check Sales</button>\n\t</div>\n\t<div class=\"store-detail-maincontent\">\n\t\t<h2>Send Stock</h2>\n\t\t<mat-form-field *ngIf=\"masterItems\">\n\t\t\t<mat-label>Item Name</mat-label>\n\t\t\t<mat-select>\n\t\t\t\t<mat-option *ngFor=\"let item of masterItems.itemTypes\" [value]=\"item.id\">\n\t\t\t\t\t{{item.item_name}}\n\t\t\t\t</mat-option>\n\t\t\t</mat-select>\n\t\t</mat-form-field>\n\t\t<mat-form-field *ngIf=\"masterItems\">\n\t\t\t<mat-label>Item Size</mat-label>\n\t\t\t<mat-select>\n\t\t\t\t<mat-option *ngFor=\"let itemVariant of masterItems.itemVariants\" [value]=\"itemVariant.id\">\n\t\t\t\t\t{{itemVariant.variant_name}}\n\t\t\t\t</mat-option>\n\t\t\t</mat-select>\n\t\t</mat-form-field>\n\t</div>\n</div>");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");




const routes = [
    {
        path: '',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    },
    {
        path: 'store/:id',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _store_details_store_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store-details/store-details.component */ "./src/app/admin/store-details/store-details.component.ts");









let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _store_details_store_details_component__WEBPACK_IMPORTED_MODULE_8__["StoreDetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/admin/admin.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".store-container .mat-button {\n  min-width: 40px;\n}\n.store-container .user-actions {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4vQzpcXHhhbXBwXFxodGRvY3NcXHN0b3JlLW1hbmFnZXItbmV3XFxhbmd1bGFyL3NyY1xcYXBwXFxhZG1pblxcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGVBQUE7QUNBRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yZS1jb250YWluZXIge1xyXG5cdC5tYXQtYnV0dG9uIHtcclxuXHRcdG1pbi13aWR0aDogNDBweDtcdFx0XHJcblx0fVx0XHJcblx0LnVzZXItYWN0aW9ucyB7XHRcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAwO1x0XHRcclxuXHR9XHJcbn0iLCIuc3RvcmUtY29udGFpbmVyIC5tYXQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuLnN0b3JlLWNvbnRhaW5lciAudXNlci1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");




/** @title Responsive sidenav */
let AdminComponent = class AdminComponent {
    constructor(adminService, route, router) {
        this.adminService = adminService;
        this.route = route;
        this.router = router;
        this.App = App;
        this.userDetails = [];
    }
    ngOnInit() {
        this.getUserDetails();
        this.getStoreDetails();
        this.getStores();
    }
    getStoreDetails() {
        this.route.params.subscribe(params => {
            this.storeId = params.id;
            this.adminService.getStoreDetails(this.storeId).subscribe(response => {
                this.storeDetails = response;
            });
        });
    }
    gotoStore(id) {
        this.router.navigate(['admin/store', id]);
    }
    getUserDetails() {
        this.adminService.getUserDetails().subscribe(response => {
            this.userDetails.push(response);
        });
    }
    getStores() {
        this.adminService.getStores().subscribe(response => {
            console.log(response);
            this.stores = response;
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html")).default,
        providers: [_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/store-details/store-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/store-details/store-details.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".store-detail-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 65px;\n  bottom: 0;\n}\n.store-detail-container .store-detail-sidenav {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  overflow: auto;\n  width: 150px;\n  border-right: 1px solid #ccc;\n}\n.store-detail-container .store-detail-maincontent {\n  position: absolute;\n  left: 150px;\n  top: 0;\n  bottom: 0;\n  overflow: auto;\n  padding: 20px;\n}\n.store-detail-container .store-detail-maincontent h2 {\n  font-size: 25px;\n  font-weight: 500;\n  margin: 0 0 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3RvcmUtZGV0YWlscy9DOlxceGFtcHBcXGh0ZG9jc1xcc3RvcmUtbWFuYWdlci1uZXdcXGFuZ3VsYXIvc3JjXFxhcHBcXGFkbWluXFxzdG9yZS1kZXRhaWxzXFxzdG9yZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zdG9yZS1kZXRhaWxzL3N0b3JlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNDRDtBREFDO0VBQ0Msa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDRUY7QURBQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNFRjtBRERFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0b3JlLWRldGFpbHMvc3RvcmUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yZS1kZXRhaWwtY29udGFpbmVye1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiA2NXB4O1xyXG5cdGJvdHRvbTowO1xyXG5cdC5zdG9yZS1kZXRhaWwtc2lkZW5hdiB7XHJcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHRcdFxyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOjA7XHJcblx0XHRvdmVyZmxvdzphdXRvO1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuXHR9XHJcblx0LnN0b3JlLWRldGFpbC1tYWluY29udGVudCB7XHJcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDE1MHB4O1x0XHRcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTowO1xyXG5cdFx0b3ZlcmZsb3c6YXV0bztcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRoMiB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0bWFyZ2luOiAwIDAgMTVweCAwO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi5zdG9yZS1kZXRhaWwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA2NXB4O1xuICBib3R0b206IDA7XG59XG4uc3RvcmUtZGV0YWlsLWNvbnRhaW5lciAuc3RvcmUtZGV0YWlsLXNpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuLnN0b3JlLWRldGFpbC1jb250YWluZXIgLnN0b3JlLWRldGFpbC1tYWluY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTUwcHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cbi5zdG9yZS1kZXRhaWwtY29udGFpbmVyIC5zdG9yZS1kZXRhaWwtbWFpbmNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/store-details/store-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/store-details/store-details.component.ts ***!
  \****************************************************************/
/*! exports provided: StoreDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDetailsComponent", function() { return StoreDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");



let StoreDetailsComponent = class StoreDetailsComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.getMasterItems();
    }
    getMasterItems() {
        this.adminService.getMasterItems().subscribe(response => {
            this.masterItems = response;
        });
    }
};
StoreDetailsComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
StoreDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/store-details/store-details.component.html")).default,
        providers: [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store-details.component.scss */ "./src/app/admin/store-details/store-details.component.scss")).default]
    })
], StoreDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map