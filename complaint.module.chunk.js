webpackJsonp(["complaint.module"],{

/***/ "../../../../../src/app/component/complaint/complaint.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintModule", function() { return ComplaintModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__complaint_component__ = __webpack_require__("../../../../../src/app/component/complaint/complaint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_complaint_service__ = __webpack_require__("../../../../../src/app/providers/complaint.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComplaintModule = (function () {
    function ComplaintModule() {
    }
    ComplaintModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__complaint_component__["a" /* ComplaintComponent */]
                    },
                    {
                        path: 'status/:statusId',
                        component: __WEBPACK_IMPORTED_MODULE_1__complaint_component__["a" /* ComplaintComponent */]
                    },
                    {
                        path: 'category-status/category/:categoryId',
                        component: __WEBPACK_IMPORTED_MODULE_1__complaint_component__["a" /* ComplaintComponent */]
                    },
                    {
                        path: 'category-status/:categoryId/:statusId',
                        component: __WEBPACK_IMPORTED_MODULE_1__complaint_component__["a" /* ComplaintComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__complaint_component__["a" /* ComplaintComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_complaint_service__["a" /* ComplaintService */]]
        })
    ], ComplaintModule);
    return ComplaintModule;
}());



/***/ })

});
//# sourceMappingURL=complaint.module.chunk.js.map