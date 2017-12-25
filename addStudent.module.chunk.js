webpackJsonp(["addStudent.module"],{

/***/ "../../../../../src/app/component/addStudent/addStudent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n\r\n  font-weight: bold;\r\n  letter-spacing: 0.1em;\r\n}\r\n.student > ul{\r\n  width: 100%;  \r\n}\r\n.student > ul > li{\r\n  width:50%;\r\n}\r\n\r\n.nav-option  li{\r\n  padding: 10px;\r\n  background:white;\r\n  text-align: center;\r\n \r\n  /* box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28),\r\n   0 4px 20px 0px rgba(0, 0, 0, 0.12), \r\n   0 7px 8px -5px rgba(156, 39, 176, 0.2); */\r\n   border-radius: 3px;\r\n   border-top-left-radius: 0px;\r\n   border-bottom-left-radius: 0px;\r\n   border-bottom-right-radius: 0px;\r\n   border-top-right-radius: 0px;\r\n   border:1px solid black;\r\n   color:black;\r\n}\r\n\r\n.nav-option li a i{\r\n  margin: -1px 5px 0 0;\r\n  vertical-align: middle;\r\n  padding: 0 10px;\r\n}\r\n.nav-option li:focus {\r\n  outline: -webkit-focus-ring-color auto 0px!important;\r\n}\r\n.nav-option li a:focus, .nav-option li a:hover{\r\n  color: black!important;\r\n}\r\n\r\n.nav-option li a{\r\n  background: transparent;\r\n  box-shadow: 0px;\r\n  text-decoration: none;\r\n  box-shadow: 0 0 0 0 rgba(156, 39, 176, 0.28),\r\n  0 0 0 0 rgba(0, 0, 0, 0.12), \r\n  0 0 0 0 rgba(156, 39, 176, 0.2);\r\n  /* color:black; */\r\n\r\n  \r\n}\r\n.activeList{\r\nbackground:#9c27b0!important;\r\nbox-shadow:  0 12px 20px -10px rgba(156, 39, 176, 0.28),\r\n0 4px 20px 0px rgba(0, 0, 0, 0.12), \r\n0 7px 8px -5px rgba(156, 39, 176, 0.2)!important;\r\ncolor:white!important;\r\n}\r\n\r\n.activeList:focus{\r\n  outline: -webkit-focus-ring-color auto 0px!important;\r\n}\r\n\r\n.student > ul>li.active>a, .student > ul>li.active>a:focus, .student > ul>li.active>a:hover {\r\n    color: #f8f8f8;\r\n    cursor: pointer;\r\n    background-color: #337ab7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/addStudent/addStudent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"student\">\r\n  <ul class=\"nav nav-option\">\r\n    <li routerLinkActive=\"activeList\" [routerLink]=\"['/add-student/new-student']\">\r\n      <a>New Student</a></li>\r\n    <li routerLinkActive=\"activeList\" [routerLink]=\"['/add-student/existing-student']\">\r\n      <a>Existing Student</a></li>\r\n  </ul>\r\n  <div class=\"tab-content\" style=\"width:100%;\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/addStudent/addStudent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddStudentComponent = (function () {
    function AddStudentComponent() {
    }
    AddStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-student',
            template: __webpack_require__("../../../../../src/app/component/addStudent/addStudent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/addStudent/addStudent.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AddStudentComponent);
    return AddStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/addStudent/addStudent.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentModule", function() { return AddStudentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addStudent_component__ = __webpack_require__("../../../../../src/app/component/addStudent/addStudent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__existingStudent_existingStudent_component__ = __webpack_require__("../../../../../src/app/component/addStudent/existingStudent/existingStudent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newStudent_newStudent_component__ = __webpack_require__("../../../../../src/app/component/addStudent/newStudent/newStudent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddStudentModule = (function () {
    function AddStudentModule() {
    }
    AddStudentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    { path: '', redirectTo: 'new-student', pathMatch: 'full' },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__addStudent_component__["a" /* AddStudentComponent */],
                        children: [
                            {
                                path: 'existing-student',
                                component: __WEBPACK_IMPORTED_MODULE_4__existingStudent_existingStudent_component__["a" /* ExistingStudentComponent */]
                            },
                            {
                                path: 'existing-student/:standardId/:studentId',
                                component: __WEBPACK_IMPORTED_MODULE_4__existingStudent_existingStudent_component__["a" /* ExistingStudentComponent */]
                            },
                            {
                                path: 'new-student',
                                component: __WEBPACK_IMPORTED_MODULE_5__newStudent_newStudent_component__["a" /* NewStudentComponent */]
                            }
                        ]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__addStudent_component__["a" /* AddStudentComponent */], __WEBPACK_IMPORTED_MODULE_4__existingStudent_existingStudent_component__["a" /* ExistingStudentComponent */], __WEBPACK_IMPORTED_MODULE_5__newStudent_newStudent_component__["a" /* NewStudentComponent */]]
        })
    ], AddStudentModule);
    return AddStudentModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/addStudent/existingStudent/existingStudent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*Btn css*/\r\n.existing{\r\n  min-width: 400px;\r\n\r\n}\r\n.button\r\n{\r\n    text-transform: uppercase;\r\n    /* letter-spacing: 2px; */\r\n    /* text-align: center; */\r\n    color: #303342;\r\n    font-size: 114%;\r\n    font-weight: 500;\r\n    /* margin: 10px; */\r\n    padding: 9px;\r\n    width: 220px;\r\n    height: 30px;\r\n    background: #FFF;\r\n    border: 1px solid #303342;\r\n    color: #303342;\r\n    overflow: hidden;\r\n    transition: all 0.5s;\r\n}\r\n\r\n .selectedbtn ,.button:hover\r\n{\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  border-color: #303342;\r\n  background:#303342 ;\r\n}\r\n\r\n.button span \r\n{\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-right: 0;\r\n  \r\n  transition: padding-right 0.5s;\r\n}\r\n\r\n.button span:after \r\n{\r\n  content: ' ';  \r\n  position: absolute;\r\n  top: 0;\r\n  right: -18px;\r\n  opacity: 0;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin-top: -10px;\r\n\r\n  background: #e4e9f4;\r\n  border: 3px solid #FFF;\r\n  border-top: none;\r\n  border-right: none;\r\n\r\n  transition: opacity 0.5s, top 0.5s, right 0.5s;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n .button:active span ,.button:hover span\r\n{\r\n  padding-right: 30px;\r\n}\r\n\r\n.button:hover span:after, .button:active span:after \r\n{\r\n  transition: opacity 0.5s, top 0.5s, right 0.5s;\r\n  opacity: 1;\r\n  border-color: #303342;\r\n  right: 0;\r\n  top: 50%;\r\n}\r\n\r\n/*Form*/\r\n\r\n.form-div{\r\n\r\n      margin: 5% auto;\r\n\r\n}\r\n\r\n.arrayForm{\r\n  margin-top: 3%;\r\n}\r\n\r\n.arrayRow{\r\n    padding: 0% 3% 2% 1%;\r\n    background: #f6f6f7;\r\n    margin: 2%;\r\n}\r\n\r\np{\r\n  font-size: 15px;\r\n}\r\n\r\n.profilePic\r\n{\r\n  width: 100px;\r\n    height: 100px;\r\n    border-radius: 100%;\r\n    margin-bottom: 4%;\r\n    border: 3px solid white;\r\n    box-shadow: 0px 9px 16px grey;\r\n}\r\n\r\n.profilePic1\r\n{\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 20%;\r\n    margin-bottom: 4%;\r\n    border: 3px solid white;\r\n    box-shadow: 0px 9px 16px grey;\r\n}\r\n\r\n.profilePic:hover{\r\n    border-radius: 100%;\r\n    opacity: 0.5;\r\n}\r\n\r\n.profilePic1:hover{\r\n    border-radius: 20%;\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\n\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n    vertical-align: middle !important;\r\n}\r\n\r\n\r\n.studentList \r\n{\r\n  width:100%;  \r\n  max-height: 200px;\r\n  overflow:hidden;\r\n  overflow-y:scroll;\r\n }\r\n\r\n/* .custom-icon{\r\n       position: relative; \r\n     top: 1px;  \r\n \r\n   \r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n} */\r\n\r\n.loader {\r\n  text-align: center !important;\r\n}\r\n\r\n\r\n.badge{\r\n  float: right;\r\n   /* margin-right: 5%; */\r\n}\r\n\r\n/* .view-btn{\r\n  float: right;\r\n} */\r\n\r\n.student-image{\r\n  width: 30px;\r\n  border-radius: 100%\r\n}\r\n\r\n.inner-table{\r\n  width: 100%;\r\n    max-width: 100%;\r\n    /* margin-bottom: 20px; */\r\n}\r\n\r\n.inner-table>tbody>tr>td, .inner-table>tbody>tr>th, .inner-table>thead>tr>td, .inner-table>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: top;\r\n    border-top:none !important;\r\n    border-right: 1px solid #ddd !important;\r\n}\r\n  .inner-table>thead>tr>td{\r\n    border-bottom:1px solid #ddd !important;\r\n  }\r\n\r\n\r\n .detail-table>tbody>tr>td{\r\n  border-right:1px solid #ddd !important;\r\n} \r\n\r\n.detail-table{\r\n  border:1px solid #e9ecef;\r\n}\r\n.glyphicon-pencil{\r\n  top:-32px !important;\r\n}\r\n\r\n.searchStu{\r\n  margin-top:15px !important;\r\n}\r\n\r\n\r\n.list-btn{\r\n  float: right;\r\n    margin-top: -30px;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\n\r\n.pointer:hover{\r\n  background: rgba(48, 51, 66, 0.04);\r\n}\r\n\r\n/* new code by saba */\r\n.existing-card{\r\n  \r\n    display: inline-block;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 25px 0;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n    border-radius: 6px;\r\n    color: rgba(0,0,0,.87);\r\n    background: #fff;\r\n  }\r\n\r\n\r\n.existing-card .header-card{\r\n    background: linear-gradient(60deg,#ec407a,#d81b60);\r\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin: -35px -6px 0;\r\n    border-radius: 3px;\r\n    padding: 12px;\r\n    background-color: #999;\r\n    position: relative;\r\n    z-index:2;\r\n    float: left;\r\n  \r\n}\r\n.existing-card .card-title{\r\n  margin-top: 0;\r\n  margin-bottom: 3px;\r\n  color: #fff;\r\n  font-weight: 300;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.existing-card .card-content{\r\n  padding: 30px 20px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n.view-btn{\r\n  margin-right: -10px;\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  border-color: #ea3d78;\r\n\r\n}\r\n\r\n.btn-success[disabled]{\r\n  background:linear-gradient(60deg,#ec407a,#d81b60);\r\n  color: gray!important; \r\n  opacity: 1;\r\n}\r\n\r\n.margin-top{\r\n  margin-top:15px;\r\n}\r\n\r\n.student-card{\r\n  width: 100%;\r\n}\r\n\r\n.btn-edit{\r\n  width: 30%;\r\n  margin: auto;\r\n  display: block;\r\n}\r\n\r\n.profile-table{\r\n  text-align: left;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btn-detail{\r\n  background-color: #9c27b0!important;\r\n  border-color: #9c27b0!important;\r\n  box-shadow: 0 0 0 0.2rem rgb(156, 39, 176)!important;\r\n}\r\n\r\n.nav-tabs .nav-link.active {\r\n  background-color: #9c27b0!important;\r\n  color:white;\r\n}\r\n\r\n.fliter{\r\n  margin: auto;\r\n  text-align: right;\r\n  padding-top: 23px;\r\n}\r\n\r\n.fliter p{\r\n  margin-top: 10px;\r\n}\r\n\r\n.detail-card{\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 25px 0;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n  border-radius: 6px;\r\n  color: rgba(0,0,0,.87);\r\n  background: #fff;\r\n}\r\n\r\n.detail-card .header-card{\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n  display: inline-block;\r\n  color: #fff;\r\n  margin: -20px 42px 0;\r\n  border-radius: 3px;\r\n  padding: 12px;\r\n  background-color: #999;\r\n  position: relative;\r\n  z-index:2;\r\n  float: left;\r\n}\r\n\r\n.detail-card .card-title{\r\n  margin-top: 0;\r\n  margin-bottom: 3px;\r\n  color: #fff;\r\n  font-weight: 300;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.detail-card .card-content{\r\n  padding: 30px 20px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n.sibling-list-element{\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n  border-radius:6px;\r\n  padding:15px;\r\n  position:relative;\r\n  margin-bottom: 5px;\r\n  padding-right: 100px;\r\n}\r\n\r\n.sibling-list-element .add-remove-btn{\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.sibling-list-element .add-remove-btn .btn{\r\n  cursor: pointer;\r\n}\r\n\r\n.head-only{\r\n background: #9c27b0;\r\n color: white;\r\n text-align: center;\r\n padding: 10px;\r\n\r\n}\r\n\r\n.student-badge{\r\n  background-color: #e63673;\r\n  color: white;\r\n  padding: 10px;\r\n}\r\n\r\n/* modal */\r\n.modal-header{\r\nbackground:#9c27b0;\r\ncolor:white;\r\n}\r\n\r\n\r\n.load-btn{\r\n background: #9c27b0;\r\n border-color:#9c27b0; \r\n border-radius:3px!important;\r\n}\r\n.btn-primary:not([disabled]):not(.disabled):active{\r\n    background: #9c27b0;\r\n    border-color:#9c27b0; \r\n}\r\n\r\n.close{\r\n  color:white;\r\n}\r\n\r\n\r\n.btn-success:not([disabled]):not(.disabled).active, .btn-success:not([disabled]):not(.disabled):active{\r\n  color: #fff;\r\n  background-color: #db2064;\r\n  border-color: #db2164;\r\n  box-shadow: 0 0 0 0.2rem rgba(219, 33, 100, 0.34);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/addStudent/existingStudent/existingStudent.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- new code by saba -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card existing-card\">\r\n      <div class=\"header-card\">\r\n        <h5 class=\"card-title\">Existing Students</h5>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"row\" style=\"margin-top:15px;\">\r\n          <div class=\"col-sm-2\">\r\n            <label for=\"standardId\">Standard</label>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <select [(ngModel)]=\"standardId\" (change)=\"onSelectStandard($event.target.value)\" class=\"form-control\">\r\n\r\n              <option disabled=\"disabled\" selected=\"selected\" value=\"\">Select a standard</option>\r\n\r\n              <option *ngFor=\"let s of standards\" [value]=\"s.id\">{{s.name}}</option>\r\n            </select>\r\n            <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <button class=\"btn btn-success view-btn pull-right\" [disabled]=\"!selectedStandardId\" (click)=\"getStudentsByStd()\">View All Students</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row margin-top\" *ngIf=\"showSearch\">\r\n          <div class=\"col-sm-2\">\r\n            <label>Student</label>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <input class=\"form-control\" *ngIf=\"selectedStudent==null\" type=\"text\" placeholder=\"Search by Student Name ... \" (keyup)=\"searchStudents($event)\">\r\n            <input *ngIf=\"selectedStudent\" class=\"form-control\" type=\"text\" value=\"{{selectedStudent.name}}\" onfocus=\"this.value= ''\"\r\n              (keyup)=\"searchStudents($event)\">\r\n            <loader [condition]=\"studentLoader\" class=\"dropdownLoader\"></loader>\r\n            <button class=\"list-btn\" (click)=\"dropdown ? dropdown = false : dropdown = true;selected=false\">\r\n              <span class=\"glyphicon glyphicon-chevron-down custom-icon\"></span>\r\n            </button>\r\n            <div class=\"studentList\" *ngIf=\"(selected)\">\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngIf=\"(emptySearchResult && !loader) || noStudents\">No Data to Display</li>\r\n                <span *ngFor=\"let s of students\">\r\n                  <li class=\"list-group-item\" (click)=\"addForm=null;getStudentDetails(s.id)\"> {{s.name}} </li>\r\n                </span>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <span class=\"badge student-badge\" *ngIf=\"students && selectedStudent==null \">Total Students : {{totalStudents}}</span>\r\n          </div>\r\n          <div class=\"studentList\" *ngIf=\"(dropdown)\">\r\n            <ul class=\"list-group\">\r\n              <span *ngFor=\"let s of studentsCOPY\">\r\n                <li *ngIf=\"noStudents\">No students are added in this class</li>\r\n                <li class=\"list-group-item\" (click)=\"dropdown=false;addForm=null;getStudentDetails(s.id)\"> {{s.name}} </li>\r\n              </span>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- all -detail card -->\r\n      <div class=\"row\" *ngIf=\"selectedStudent && showSearch\">\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\" style=\"width:100%;border:none!important;\">\r\n          <li class=\"nav-item\" style=\"width:33%\">\r\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Student Details</a>\r\n          </li>\r\n          <li class=\"nav-item\" style=\"width:33%\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Sibling Details</a>\r\n          </li>\r\n          <li class=\"nav-item\" style=\"width:33%\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu2\">Praent Details</a>\r\n          </li>\r\n        </ul>\r\n\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content\" style=\"width:100%\">\r\n          <div id=\"home\" class=\"container tab-pane active\">\r\n            <br>\r\n            <div class=\"card card-body student-card\">\r\n              <div class=\"profile-pic\">\r\n                <img *ngIf=\"selectedStudent.picTimestamp\" [attr.src]=\"fileUrl+'/' + selectedStudent.picTimestamp\" class=\"profilePic\" data-target='#uploadStudentModal'\r\n                  data-toggle='modal' (click)=\"selectedImageUpload=selectedStudent;uploadPicForm.controls['file'].reset();\">\r\n                <img *ngIf=\"!selectedStudent.picTimestamp\" [attr.src]=\"fileUrl+'/parent%2f39945169084408330481.jpg?alt=media'\" class=\"profilePic\"\r\n                  data-target='#uploadParentModal' data-toggle='modal' (click)=\"selectedImageUpload=selectedStudent;uploadPicForm.controls['file'].reset();\">\r\n                <a data-target='#uploadParentModal' data-toggle='modal'>\r\n                  <i class=\"glyphicon glyphicon-pencil\"></i>\r\n                </a>\r\n              </div>\r\n              <table class=\"profile-table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Name :</td>\r\n                    <td> {{selectedStudent.name}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Standard :</td>\r\n                    <td>\r\n                      <span *ngFor=\"let s of standards\">\r\n                        <span *ngIf=\"s.id==selectedStudent.standardId\">{{s.name}}</span>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <button type=\"button\" class=\"btn btn-outline-info center-block btn-edit\" data-toggle=\"modal\" data-target=\"#editSiblingModal\"\r\n                (click)=\"selectedSibling = selectedStudent;initEditStudentForm()\">Edit</button>\r\n\r\n            </div>\r\n          </div>\r\n          <div id=\"menu1\" class=\"container tab-pane fade\">\r\n            <br>\r\n            <div class=\"card card-body student-card\" *ngIf=\"selectedStudent.siblings.length==0\">\r\n              No Sibling Added.\r\n            </div>\r\n\r\n            <div class=\"card card-body student-card\" *ngFor=\"let s of selectedStudent.siblings\">\r\n              <div class=\"profile-pic\">\r\n                <img *ngIf=\"s.picTimestamp\" [attr.src]=\"fileUrl+'/' + s.picTimestamp\" class=\"profilePic1\" data-target='#uploadStudentModal'\r\n                  data-toggle='modal' (click)=\"selectedImageUpload=s;uploadPicForm.controls['file'].reset();\">\r\n                <img *ngIf=\"!s.picTimestamp\" [attr.src]=\"fileUrl+'/parent%2f39945169084408330481.jpg?alt=media'\" class=\"profilePic1\" data-target='#uploadStudentModal'\r\n                  data-toggle='modal' (click)=\"selectedImageUpload=s;uploadPicForm.controls['file'].reset();\">\r\n                <a data-target='#uploadStudentModal' data-toggle=\"modal\">\r\n                  <i class=\"glyphicon glyphicon-pencil\"></i>\r\n                </a>\r\n              </div>\r\n\r\n              <table class=\"profile-table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Name :</td>\r\n                    <td> {{s.name}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Standard :</td>\r\n                    <td>\r\n                      <span *ngFor=\"let p of standards\">\r\n                        <span *ngIf=\"p.id==s.standardId\">{{p.name}}</span>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <button type=\"button\" class=\"btn btn-outline-info center-block btn-edit\" data-target=\"#editSiblingModal\" (click)=\"selectedSibling = s;initEditStudentForm()\">Edit</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"menu2\" class=\"container tab-pane fade\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\" *ngFor=\"let p of selectedStudent.parents\">\r\n                <div class=\"card card-body student-card\">\r\n                  <div class=\"profile-pic\">\r\n                    <img *ngIf=\"p.picTimestamp\" [attr.src]=\"fileUrl+'/' + p.picTimestamp\" class=\"profilePic1\" data-target='#uploadParentModal'\r\n                      (click)=\"selectedImageUpload=p;uploadPicForm.controls['file'].reset();\" data-toggle='modal'>\r\n                    <img *ngIf=\"!p.picTimestamp\" [attr.src]=\"fileUrl+'/parent%2f39945169084408330481.jpg?alt=media'\" class=\"profilePic1\" data-target='#uploadParentModal'\r\n                      (click)=\"selectedImageUpload=p;uploadPicForm.controls['file'].reset();\" data-toggle='modal'>\r\n                    <a data-target='#uploadParentModal' data-toggle='modal'>\r\n                      <i class=\"glyphicon glyphicon-pencil\"></i>\r\n                    </a>\r\n                  </div>\r\n                  <table class=\"profile-table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Name :</td>\r\n                        <td>\r\n                          <span>\r\n                            <p *ngIf=\"(p.name==null)||(p.name=='')\"></p>\r\n                            <p *ngIf=\"p.name!=null\">{{p.name}}-</p>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Nickname :</td>\r\n                        <td>\r\n                          <span>\r\n                            <p *ngIf=\"(p.nickName==null)||(p.nickName=='')\">-</p>\r\n                            <p *ngIf=\"p.nickName!=null\">{{p.nickName}}</p>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Contact Number :</td>\r\n                        <td>{{p.contactNo}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Email ID :</td>\r\n                        <td>\r\n                          <span>\r\n                            <p *ngIf=\"(p.email==null)||(p.email=='')\">-</p>\r\n                            <p *ngIf=\"p.email!=null\">{{p.email}}</p>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <button type=\"button\" class=\"btn btn-outline-info center-block btn-edit\" data-toggle=\"modal\" data-target=\"#editParentModal\"\r\n                    (click)=\"selectedParent = p;initEditParentForm()\">Edit</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"selectedStudent && showSearch\" style=\"margin-top: 25px;\">\r\n        <div class=\"col-sm-12\">\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"addForm=1;initAddSiblingForm()\" [ngClass]=\"{'selectedbtn': (addForm === 1) }\"\r\n            *ngIf=\"siblingLimit!=0\" data-toggle=\"modal\" data-target=\"#add-siblings-Modal\">Add sibling</button>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"addForm=2;initAddParentForm()\" [ngClass]=\"{ 'selectedbtn': (addForm === 2) }\"\r\n          *ngIf=\"parentLimit!=0\" data-toggle=\"modal\" data-target=\"#add-parent-Modal\"> Add Parent</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- view all student details table start -->\r\n<div class=\"row\" *ngIf=\" !showSearch && showTable\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"detail-card\">\r\n      <div class=\"header-card\">\r\n        <div class=\"card-titile\">Total Students : {{totalStudents}}</div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row fliter\">\r\n        <div class=\"col-sm-1\">\r\n          <p>Filter</p>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <select (ngModelChange)=\"filterDetails($event)\" [(ngModel)]=\"filter\" class=\"form-control\">\r\n            <option [value]=\"1\">All Details</option>\r\n            <option [value]=\"2\">Only Sibling Details</option>\r\n            <option [value]=\"3\">Only Parent Details</option>\r\n            <option [value]=\"4\">Only Student List</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <loader [condition]=\"loader\"></loader>\r\n      </div>\r\n\r\n      <div class=\"card-content\">\r\n        <table class=\"table detail-table\">\r\n          <thead class=\"head-only\">\r\n            <tr>\r\n              <th></th>\r\n              <th>Student's Name</th>\r\n              <th *ngIf=\"showParent && !showStudentOnly\">Parent's Details</th>\r\n              <th *ngIf=\"showSibling && !showStudentOnly\">Sibling's Details</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let s of studentsInfo\" style=\"text-align: -webkit-center;\">\r\n            <tr (click)=\"getStudentDetails(s.id)\" class=\"pointer\">\r\n              <td>\r\n                <a>\r\n                  <img class=\"student-image\" [attr.src]=\"fileUrl+'/' + s.picTimestamp\">\r\n                </a>\r\n              </td>\r\n              <td>{{s.name}}</td>\r\n              <td *ngIf=\"showParent && !showStudentOnly\">\r\n                <table class=\"inner-table table-bordered\"  *ngIf=\"s.parents.length>0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <td>Name</td>\r\n                      <td>Contact No</td>\r\n                      <td>Email</td>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let p of s.parents\">\r\n                      <td>{{p.name}}</td>\r\n                      <td>{{p.contactNo}}</td>\r\n                      <td *ngIf=\"p.email\">{{p.email}}</td>\r\n                      <td *ngIf=\"!p.email\">-</td>\r\n                    </tr>      \r\n                  </tbody>\r\n                </table>\r\n                <table  *ngIf=\"s.parents.length<=0\">\r\n                  <tr>\r\n                    <td style=\"border-top:0px!important\"> No Details Added</td>\r\n                   </tr>\r\n                </table>\r\n              </td>\r\n              <td *ngIf=\"showSibling && !showStudentOnly\">\r\n                <table class=\" inner-table table-bordered\" *ngIf=\"s.siblings.length>0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <td>Name</td>\r\n                      <td style=\"border-right:none !important\">Standard</td>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let sibling of s.siblings\">\r\n                      <td>{{sibling.name}}</td>\r\n                      <td style=\"border-right:none !important\">{{sibling.standardName}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <table *ngIf=\"s.siblings.length<=0\">\r\n                  <tr>No Siblings added</tr>\r\n                </table>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- view all student details table end -->\r\n<!-- new code by saba end -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"existing\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"fixed\">\r\n        <div>\r\n          <div class=\"col-sm-12\">\r\n            <button class=\"btn btn-primary view-btn pull-right\" [disabled]=\"!selectedStandardId\" (click)=\"getStudentsByStd()\">View All Students</button>\r\n          </div>\r\n          <div class=\"row\">\r\n            <label for=\"standardId\">Standard</label>\r\n            <select [(ngModel)]=\"standardId\" (change)=\"onSelectStandard($event.target.value)\" class=\"form-control\">\r\n                \r\n                <option disabled=\"disabled\" selected=\"selected\" value=\"\" >Select a standard</option>\r\n                \r\n                <option *ngFor=\"let s of standards\" [value]=\"s.id\" >{{s.name}}</option>\r\n              </select>\r\n            <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"showSearch\" style=\"margin-top:20px;\">\r\n          <!-- <div class=\"form-group row\">\r\n          <div class=\"col-lg-12\">\r\n            <input class=\"form-control\" type=\"search\" placeholder=\"Search by complaint title .,. \" id=\"example-search-input\" (keyup)=\"searchStudents($event)\">\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n<!-- <div class=\"row searchStu\">\r\n            <label>Student</label>\r\n            <span class=\"badge\" *ngIf=\"students && selectedStudent==null \">Total Students : {{totalStudents}}</span>\r\n\r\n            <input class=\"form-control\" *ngIf=\"selectedStudent==null\" type=\"text\" placeholder=\"Search by Student Name ... \" (keyup)=\"searchStudents($event)\">\r\n            <input *ngIf=\"selectedStudent\" class=\"form-control\" type=\"text\" value=\"{{selectedStudent.name}}\" onfocus=\"this.value= ''\"\r\n              (keyup)=\"searchStudents($event)\">\r\n            <loader [condition]=\"studentLoader\" class=\"dropdownLoader\"></loader>\r\n            <button class=\"list-btn\" (click)=\"dropdown ? dropdown = false : dropdown = true;selected=false\"> <span class=\"glyphicon glyphicon-chevron-down custom-icon\" ></span></button>\r\n            <div class=\"studentList\" *ngIf=\"(selected)\">\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngIf=\"(emptySearchResult && !loader) || noStudents\">No Data to Display</li>\r\n                <span *ngFor=\"let s of students\">\r\n                      <li class=\"list-group-item\" (click)=\"addForm=null;getStudentDetails(s.id)\"> {{s.name}} </li> \r\n                  </span>\r\n              </ul>\r\n            </div> -->\r\n<!-- \r\n            <div class=\"studentList\" *ngIf=\"(dropdown)\">\r\n              <ul class=\"list-group\">\r\n                <span *ngFor=\"let s of studentsCOPY\">\r\n                        <li *ngIf=\"noStudents\">No students are added in this class</li>\r\n                        <li class=\"list-group-item\" (click)=\"dropdown=false;addForm=null;getStudentDetails(s.id)\"> {{s.name}} </li> \r\n                  </span>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n<!-- showing a table of detail after selecting view all student start -->\r\n<!-- <div class=\"row\" *ngIf=\" !showSearch && showTable\">\r\n        <div>\r\n          <div class=\"  col-sm-offset-5 col-sm-3 col-xs-6\">\r\n            <span class=\"badge\" style=\"margin-top:32px;\">Total Students : {{totalStudents}}</span>\r\n          </div>\r\n\r\n          <div class=\" col-sm-4 col-xs-6\">\r\n            <label>Filter</label>\r\n            <select (ngModelChange)=\"filterDetails($event)\" [(ngModel)]=\"filter\" class=\"form-control\">\r\n            <option [value]=\"1\">All Details</option>\r\n            <option [value]=\"2\">Only Sibling Details</option>\r\n            <option [value]=\"3\">Only Parent Details</option> \r\n            <option [value]=\"4\">Only Student List</option>                                   \r\n          </select>\r\n          </div>\r\n        </div>  -->\r\n<!-- table of all deatils -->\r\n<!-- <div>\r\n          <div class=\"row text-center\">\r\n            <loader [condition]=\"loader\"></loader>\r\n          </div>\r\n          <table class=\"table detail-table\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th>Student's Name</th>\r\n                <th *ngIf=\"showParent && !showStudentOnly\">Parent's Details</th>\r\n                <th *ngIf=\"showSibling && !showStudentOnly\">Sibling's Details</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let s of studentsInfo\">\r\n              <tr (click)=\"getStudentDetails(s.id)\" class=\"pointer\">\r\n                <td><a><img class=\"student-image\" [attr.src]=\"fileUrl+'/' + s.picTimestamp\"></a></td>\r\n                <td>{{s.name}}</td> -->\r\n\r\n<!-- <td *ngIf=\"showParent && !showStudentOnly\">\r\n                  <table class=\"inner-table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <td>Name</td>\r\n                        <td>Contact No</td>\r\n                        <td style=\"border-right:none !important\">Email</td>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let p of s.parents\">\r\n                        <td>{{p.name}}</td>\r\n                        <td>{{p.contactNo}}</td>\r\n                        <td *ngIf=\"p.email\" style=\"border-right:none !important\">{{p.email}}</td>\r\n                        <td *ngIf=\"!p.email\" style=\"border-right:none !important\">-</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </td>\r\n                <td *ngIf=\"showSibling && !showStudentOnly\">\r\n                  <table class=\" inner-table\" *ngIf=\"s.siblings.length>0\">\r\n                    <thead>\r\n                      <tr>\r\n                        <td>Name</td>\r\n                        <td style=\"border-right:none !important\">Standard</td>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let sibling of s.siblings\">\r\n                        <td>{{sibling.name}}</td>\r\n                        <td style=\"border-right:none !important\">{{sibling.standardName}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <table *ngIf=\"s.siblings.length<=0\">\r\n                    <tr>No Siblings added</tr>\r\n                  </table>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div> -->\r\n<!-- showing a table of detail after selecting view all student end-->\r\n\r\n\r\n<!-- <div class=\"row\" *ngIf=\"selectedStudent && showSearch\">\r\n        <div class=\"panel-group\" id=\"accordion\" *ngIf=\"selectedStudent\" style=\"margin:5%;\">\r\n          <div class=\"panel panel-default\">\r\n            <!-- <div class=\"row text-center\"><loader [condition]=\"loader\"></loader></div> -->\r\n<!-- <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseOne\">\r\n              <h4 class=\"panel-title\">\r\n                Student Details\r\n              </h4>\r\n            </div>\r\n            <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\r\n              <div class=\"panel-body\">\r\n                <table class=\"table col-sm-12\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td colspan=\"3\" class=\"text-center\">\r\n                        <img *ngIf=\"selectedStudent.picTimestamp\" [attr.src]=\"fileUrl+'/' + selectedStudent.picTimestamp\" class=\"profilePic\" data-target='#uploadStudentModal'\r\n                          data-toggle='modal' (click)=\"selectedImageUpload=selectedStudent;uploadPicForm.controls['file'].reset();\">\r\n                        <img *ngIf=\"!selectedStudent.picTimestamp\" [attr.src]=\"fileUrl+'/parent%2f39945169084408330481.jpg?alt=media'\" class=\"profilePic\"\r\n                          data-target='#uploadParentModal' data-toggle='modal' (click)=\"selectedImageUpload=selectedStudent;uploadPicForm.controls['file'].reset();\">\r\n                        <a data-target='#uploadParentModal' data-toggle='modal'><i class=\"glyphicon glyphicon-pencil\"></i></a>\r\n                      </td>\r\n                    </tr> -->\r\n\r\n<!-- <tr>\r\n                      <td>\r\n                        <label for=\"sname1\">Name</label>\r\n                        <p>{{selectedStudent.name}}</p>\r\n                      </td>\r\n                      <td>\r\n                        <label for=\"stnd1\">Standard</label>\r\n                        <p><span *ngFor=\"let s of standards\"><span *ngIf=\"s.id==selectedStudent.standardId\">{{s.name}}</span></span>\r\n                        </p>\r\n                      </td>\r\n                      <td>\r\n                        <button class=\"btn btn-primary pull-right \" data-toggle=\"modal\" data-target=\"#editSiblingModal\" (click)=\"selectedSibling = selectedStudent;initEditStudentForm()\">Edit</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n<!-- <div class=\"panel panel-default\" *ngIf=\"selectedStudent.siblings\">\r\n            <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseTwo\">\r\n              <h4 class=\"panel-title\">\r\n                Sibling Details\r\n              </h4>\r\n            </div>\r\n            <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row col-sm-12\" *ngIf=\"selectedStudent.siblings.length==0\">\r\n                  No Siblings added.\r\n                </div>\r\n\r\n                <table class=\"table col-sm-12\">\r\n                  <tbody *ngFor=\"let s of selectedStudent.siblings\" style=\"border:none !important\">\r\n                    <tr>\r\n                      <td>\r\n                        <img *ngIf=\"s.picTimestamp\" [attr.src]=\"fileUrl+'/' + s.picTimestamp\" class=\"profilePic1\" data-target='#uploadStudentModal'\r\n                          data-toggle='modal' (click)=\"selectedImageUpload=s;uploadPicForm.controls['file'].reset();\">\r\n                        <img *ngIf=\"!s.picTimestamp\" [attr.src]=\"fileUrl+'/parent%2f39945169084408330481.jpg?alt=media'\" class=\"profilePic1\" data-target='#uploadStudentModal'\r\n                          data-toggle='modal' (click)=\"selectedImageUpload=s;uploadPicForm.controls['file'].reset();\">\r\n                        <a data-target='#uploadStudentModal' data-toggle=\"modal\"><i class=\"glyphicon glyphicon-pencil\"></i></a>\r\n                      </td>\r\n                      <td>\r\n                        <label for=\"sname2\">Name</label>\r\n                        <p>{{s.name}}</p>\r\n                      </td>\r\n                      <td>\r\n                        <label for=\"stnd2\">Standard</label>\r\n                        <p><span *ngFor=\"let p of standards\"><span *ngIf=\"p.id==s.standardId\">{{p.name}}</span></span>\r\n                        </p>\r\n                      </td>\r\n                      <td>\r\n                        <button class=\"btn btn-primary pull-right \" data-toggle=\"modal\" data-target=\"#editSiblingModal\" (click)=\"selectedSibling = s;initEditStudentForm()\">Edit</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n<!-- <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseThree\">\r\n              <h4 class=\"panel-title\">\r\n                Parent Details\r\n              </h4>\r\n            </div>\r\n            <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n              <table class=\"table col-sm-12\">\r\n                <tbody style=\"border:white 10px solid;background:#fcf9f9\" *ngFor=\"let p of selectedStudent.parents\">\r\n                  <tr>\r\n                    <td rowspan=\"2\">\r\n                      <img *ngIf=\"p.picTimestamp\" [attr.src]=\"fileUrl+'/' + p.picTimestamp\" class=\"profilePic1\" data-target='#uploadParentModal'\r\n                        (click)=\"selectedImageUpload=p;uploadPicForm.controls['file'].reset();\" data-toggle='modal'>\r\n                      <img *ngIf=\"!p.picTimestamp\" [attr.src]=\"fileUrl+'/parent%2f39945169084408330481.jpg?alt=media'\" class=\"profilePic1\" data-target='#uploadParentModal'\r\n                        (click)=\"selectedImageUpload=p;uploadPicForm.controls['file'].reset();\" data-toggle='modal'>\r\n                      <a data-target='#uploadParentModal' data-toggle='modal'><i class=\"glyphicon glyphicon-pencil\"></i></a>\r\n                    </td>\r\n                    <td>\r\n                      <label for=\"sname3\">Name</label>\r\n                      <span>\r\n                      <p *ngIf=\"(p.name==null)||(p.name=='')\">-</p>\r\n                      <p *ngIf=\"p.name!=null\">{{p.name}}</p>\r\n                    </span>\r\n                    </td>\r\n                    <td> -->\r\n<!-- <label for=\"stnd3\">Nickname</label>\r\n                      <span>\r\n                      <p *ngIf=\"(p.nickName==null)||(p.nickName=='')\">-</p>\r\n                      <p *ngIf=\"p.nickName!=null\">{{p.nickName}}</p>\r\n                    </span>\r\n                    </td>\r\n                    <td rowspan=\"2\">\r\n                      <button class=\"btn btn-primary pull-right \" data-toggle=\"modal\" data-target=\"#editParentModal\" (click)=\"selectedParent = p;initEditParentForm()\">Edit</button>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"sname4\">Contact Number</label>\r\n                      <p>{{p.contactNo}}</p>\r\n                    </td>\r\n                    <td>\r\n                      <label for=\"stnd4\">Email ID</label>\r\n                      <span>\r\n            <p *ngIf=\"(p.email==null)||(p.email=='')\">-</p>\r\n            <p *ngIf=\"p.email!=null\">{{p.email}}</p>\r\n            </span>\r\n                    </td>\r\n\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n<!-- \r\n        <div class=\"row\">\r\n          <div style=\"position:relative;margin:auto;left:0;right:0;width:300px\">\r\n            <a (click)=\"addForm=1;initAddSiblingForm()\" class=\"button\" [ngClass]=\"{'selectedbtn': (addForm === 1) }\" *ngIf=\"siblingLimit!=0\">\r\n              <span>Add Siblings</span>\r\n            </a>\r\n\r\n            <a (click)=\"addForm=2;initAddParentForm()\" class=\"button\" [ngClass]=\"{ 'selectedbtn': (addForm === 2) }\" *ngIf=\"parentLimit!=0\">\r\n            <span>Add Parents</span>\r\n          </a>\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n\r\n  <div class=\"modal fade  \" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">Student Updated</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          You have successfully updated the information.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade  \" id=\"errModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">Parent Already exists</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Parent is already added to our records.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade  \" id=\"editSiblingModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">Edit Details</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <form *ngIf=\"selectedSibling\" [formGroup]=\"editStudentForm\">\r\n          <div class=\"modal-body\">\r\n            <label for=\"sname8\">Name</label>\r\n            <input type=\"text\" id=\"sname8\" class=\"form-control\" formControlName=\"name\">\r\n            <label for=\"stnd8\">Standard</label>\r\n            <select id=\"stnd8\" class=\"form-control\" formControlName=\"standardId\">\r\n              <option disabled=\"disabled\" selected=\"selected\">Select Standard</option>\r\n              <option *ngFor=\"let s of standards\" [value]=\"s.id\">{{s.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-primary pull-right load-btn\" type=\"button\" [disabled]=\"(!editStudentForm.dirty)||(editStudentForm.invalid)\"\r\n              (click)=\"submitEditStudentForm()\" data-dismiss=\"modal\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade  \" id=\"editParentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">Edit Details</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <form [formGroup]=\"editParentForm\" *ngIf=\"selectedParent\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sname9\">Name</label>\r\n              <input type=\"text\" id=\"sname9\" class=\"form-control\" formControlName=\"name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"stnd8\">Nick Name</label>\r\n              <input type=\"text\" id=\"stnd8\" class=\"form-control\" formControlName=\"nickName\">\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"mail\">Email</label>\r\n              <input type=\"text\" id=\"mail\" class=\"form-control\" formControlName=\"email\">\r\n              <div [hidden]=\"editParentForm.controls.email.valid||editParentForm.controls.email.untouched\" class=\"alert alert-warning\">Please enter a valid Email Id</div>\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"contactNo\">Contact No</label>\r\n              <input type=\"text\" maxlength=\"12\" minlength=\"9\" id=\"contactNo\" class=\"form-control\" name=\"contactNo\" value=\"selectedParent.contactNo\"\r\n                [(ngModel)]=\"contactNo\" (ngModelChange)=\"onContact($event)\" [ngModelOptions]=\"{standalone:true}\">\r\n              <div *ngIf=\"contactControl\">\r\n                <div *ngIf=\"!editParentForm.controls.contactNo.valid||!editParentForm.controls.contactNo.untouched\" class=\"alert alert-warning\">Please enter a valid Contact Number\r\n                  <div>The contact no should be between 9 to 12 digits</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button id=\"submitBtn\" class=\"btn btn-primary pull-right load-btn\" type=\"button\" [disabled]=\"(editParentForm.invalid)\" (click)=\"submitEditParentForm()\"\r\n              data-dismiss=\"modal\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade  \" id=\"uploadStudentModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Update Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Update Profile Picture </h4>\r\n        </div>\r\n        <form [formGroup]=\"uploadPicForm\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"row text-center\">\r\n              <loader [condition]=\"loader\"></loader>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" (change)=\"getFile($event)\"\r\n                formControlName='file'>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"uploadStudentImage()\" class=\"btn btn-default\" data-dismiss='modal'>Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade  \" id=\"uploadParentModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Update Profile Picture </h4>\r\n        </div>\r\n        <form [formGroup]=\"uploadPicForm\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"row text-center\">\r\n              <loader [condition]=\"loader\"></loader>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" (change)=\"getFile($event)\"\r\n                formControlName='file'>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"uploadParentImage()\" class=\"btn btn-default load-btn\" data-dismiss='modal'>Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade  \" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">File Type Error</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Kindly upload an image file.\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<!-- The Modal for add siblings-->\r\n<div class=\"modal fade\" id=\"add-siblings-Modal\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\" *ngIf=\"addForm === 1\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Sibling</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <form [formGroup]=\"addSiblingForm\" (submit)=\"submitSibling();addForm=null;\">\r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\" formArrayName=\"students\">\r\n          <div class=\"sibling-list-element\" *ngFor=\"let stu of addSiblingForm.controls.students.controls; let i=index;\" [formGroupName]=\"i\">\r\n            <div class=\"add-remove-btn\">\r\n              <button class=\"btn btn-link\" [disabled]=\"((addSiblingForm.invalid)||(addSiblingForm.controls.students.length==5))\" (click)=\"addSibling(addSiblingForm);\"\r\n                *ngIf=\"i==addSiblingForm.controls.students.controls.length-1\">\r\n                <i class=\"material-icons\">add_circle</i>\r\n              </button>\r\n              <button class=\"btn btn-link\" [disabled]=\"addSiblingForm.controls.students.controls.length == 1\" (click)=\"removeSibling(addSiblingForm,i)\">\r\n                <i class=\"material-icons\">delete_sweep</i>\r\n              </button>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"example-text-input\" class=\"col-4 col-form-label\">Student Name</label>\r\n              <div class=\"col-8\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"exampleSelect1\" class=\"col-4 col-form-label\">Text</label>\r\n              <div class=\"col-8\">\r\n                <select id=\"exampleSelect1\" class=\"form-control\" formControlName=\"standardId\">\r\n                  <option disabled=\"disabled\" selected=\"selected\">Select Standard</option>\r\n                  <option *ngFor=\"let s of standards\" [value]=\"s.id\">{{s.name}}</option>\r\n                </select>\r\n                <div [hidden]=\"addSiblingForm.controls.students.controls[i].controls.standardId.valid || addSiblingForm.controls.students.controls[i].controls.standardId.untouched\"\r\n                  class=\"alert alert-warning\">This field is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" [disabled]=\"addSiblingForm.invalid\" class=\"btn btn-primary load-btn\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-secondary load-btn\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- The Modal for add-parent -->\r\n<div class=\"modal fade\" id=\"add-parent-Modal\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\" *ngIf=\"addForm === 2\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Parent</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <form [formGroup]=\"addParentForm\" (submit)=\"submitParentForm();addForm=null;\">\r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"fname1\" class=\"col-4 col-form-label\">Parent's Name</label>\r\n            <div class=\"col-8\">\r\n              <input class=\"form-control\" type=\"text\" id=\"fname1\" placeholder=\"Enter Parent's Name\" formControlName=\"name\">\r\n              <div class=\"alert alert-warning\" [hidden]=\"addParentForm.controls.name.valid ||addParentForm.controls.name.untouched || addParentForm.controls.name.pristine\">This field is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"fname2\" class=\"col-4 col-form-label\">Parent's Nick Name</label>\r\n            <div class=\"col-8\">\r\n              <input class=\"form-control\" type=\"text\" id=\"fname2\" placeholder=\"Enter Parent's Nick Name\" formControlName=\"nickName\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"fname3\" class=\"col-4 col-form-label\">Parent's Contact Number</label>\r\n            <div class=\"col-8\">\r\n              <input class=\"form-control\" type=\"text\" id=\"fname3\" placeholder=\"Enter Parent's Contact Number\" formControlName=\"contactNo\">\r\n              <div class=\"alert alert-warning\" [hidden]=\"addParentForm.controls.contactNo.valid ||addParentForm.controls.contactNo.untouched || addParentForm.controls.contactNo.pristine\">This field is required\r\n                <div style=\"color:red\">Contact No should be of 10 dogits</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"fname4\" class=\"col-4 col-form-label\">Parent's Email ID</label>\r\n            <div class=\"col-8\">\r\n              <input class=\"form-control\" type=\"text\" id=\"fname4\" placeholder=\"Enter Parent's Email ID\" formControlName=\"email\">\r\n              <div class=\"alert alert-warning\" [hidden]=\"addParentForm.controls.email.valid ||addParentForm.controls.email.untouched || addParentForm.controls.email.pristine\">This field is required\r\n                <div style=\"color:red\">Please enter valid email-address</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" [disabled]=\"addParentForm.invalid\" class=\"btn btn-primary load-btn\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-secondary load-btn\" data-dismiss=\"modal\"> Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/addStudent/existingStudent/existingStudent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__ = __webpack_require__("../../../../../src/app/providers/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__ = __webpack_require__("../../../../../src/app/providers/formValidation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExistingStudentComponent = (function () {
    // public  showStudentDetails:boolean=false;
    function ExistingStudentComponent(_location, as, fb, router, ls, actRoute) {
        var _this = this;
        this._location = _location;
        this.as = as;
        this.fb = fb;
        this.router = router;
        this.ls = ls;
        this.actRoute = actRoute;
        this.loader = false;
        this.standardLoader = false;
        this.studentLoader = false;
        this.students = [];
        this.edit1 = false;
        this.edit2 = false;
        this.edit3 = false;
        this.studentsCOPY = [];
        this.showStudent = false;
        this.showSearch = false;
        this.showTable = false;
        this.filter = 1;
        this.showSibling = true;
        this.showParent = true;
        this.showStudentOnly = false;
        this.noStudents = false;
        this.standardId = "";
        this.selected = false;
        this.contactControl = false;
        this.actRoute.params.subscribe(function (param) {
            if (param['standardId'])
                _this.standardId = param['standardId'];
            if (param['studentId'])
                _this.getStudentDetails(param['studentId']);
        });
        this.fileUrl = localStorage.getItem('fileUrl');
        this.ls.setLoader(false);
        this.getStandards();
        // this.initNewStudentForm();
        // this.getStudents();
        // this.initEditParentForm();
        // this.initAddSiblingForm();
        this.uploadPicForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
        });
        this.ls.setLoader(false);
    }
    ExistingStudentComponent.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.as.getStandards().subscribe(function (res) {
            _this.standards = res;
            console.log(res);
            _this.standardLoader = false;
        }, function (err) {
            _this.errorPage();
        });
    };
    ExistingStudentComponent.prototype.onSelectStandard = function (e) {
        this.selectedStandardId = e;
        this.showSearch = true;
        this.getStudents();
        this.showStudent = true;
    };
    ExistingStudentComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    ExistingStudentComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentLoader = true;
        this.as.getStudents(this.selectedStandardId).subscribe(function (res) {
            if (res.status == 204) {
                _this.noStudents = true;
            }
            _this.noStudents = false;
            _this.totalStudents = res.length;
            _this.students = res;
            _this.studentsCOPY = _this.students;
            _this.studentLoader = false;
        }, function (err) {
            // this.loader = false;
            _this.errorPage();
        });
    };
    ExistingStudentComponent.prototype.searchStudents = function (ev) {
        this.selected = true;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.emptySearchResult = false;
            this.students = this.studentsCOPY.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (this.students.length == 0) {
                this.emptySearchResult = true;
            }
        }
        else {
            this.selected = false;
        }
    };
    ExistingStudentComponent.prototype.getStudentDetails = function (ev) {
        var _this = this;
        this.showTable = false;
        this.showSearch = true;
        this.loader = true;
        this.selected = false;
        this.initAddParentForm();
        this.initAddSiblingForm();
        this.as.getStudentDetails(ev).subscribe(function (res) {
            _this.selectedStudent = res;
            _this.parentLimit = 3 - _this.selectedStudent.parents.length;
            _this.siblingLimit = 10 - _this.selectedStudent.siblings.length;
            _this.loader = false;
        }, function (err) {
            _this.errorPage();
        });
    };
    ExistingStudentComponent.prototype.getStudentsByStd = function () {
        var _this = this;
        // this.showStudentDetails=false;
        this.loader = true;
        this.showTable = true;
        this.showSearch = false;
        this.as.getAllStudents(this.selectedStandardId).subscribe(function (res) {
            _this.loader = false;
            _this.studentsInfo = res;
        }, function (err) {
            _this.errorPage();
        });
    };
    ExistingStudentComponent.prototype.initAddSiblingForm = function () {
        // this.getSiblings();
        this.addSiblingForm = this.fb.group({
            students: this.fb.array([
                this.inItSibling(),
            ])
        });
    };
    ExistingStudentComponent.prototype.inItSibling = function () {
        return this.fb.group({
            "name": ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            "standardId": ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]]
        });
    };
    ExistingStudentComponent.prototype.addSibling = function (e) {
        var control = e.controls['students'];
        control.push(this.inItSibling());
    };
    ExistingStudentComponent.prototype.removeSibling = function (form, index) {
        var control = form.controls['students'];
        control.removeAt(index);
        if (control.length == 0) {
            this.addForm = null;
        }
    };
    ExistingStudentComponent.prototype.submitSibling = function () {
        var _this = this;
        this.loader = true;
        this.as.addSibling(this.selectedStudent.id, this.addSiblingForm.value.students).subscribe(function (res) {
            $('#updateModal').modal('show');
            _this.getStudentDetails(_this.selectedStudent.id);
            _this.initAddSiblingForm();
            _this.loader = false;
        }, function (err) {
            // this.loader = false;
            _this.errorPage();
        });
    };
    ExistingStudentComponent.prototype.initAddParentForm = function () {
        this.addParentForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            nickName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            contactNo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(9)]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__["a" /* ValidationService */].emailValidator]),
        });
    };
    ExistingStudentComponent.prototype.submitParentForm = function () {
        var _this = this;
        var studentIds = [this.selectedStudent.id];
        // studentIds.push(this.selectedStudent.id);
        this.selectedStudent.siblings.forEach(function (element) {
            studentIds.push(element.id);
        });
        this.addParentForm.addControl("studentIds", new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](studentIds));
        this.loader = true;
        this.as.addParent(this.selectedStudent.id, this.addParentForm.value).subscribe(function (res) {
            _this.getStudentDetails(_this.selectedStudent.id);
            $('#updateModal').modal('show');
            _this.initAddParentForm();
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            if (err === "400 - Bad Request") {
                _this.initAddParentForm();
                $('#errModal').modal('show');
            }
            else {
                _this.errorPage();
            }
        });
    };
    //Update Information
    ExistingStudentComponent.prototype.initEditStudentForm = function () {
        this.editStudentForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.selectedSibling.name, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            standardId: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.selectedSibling.standardId, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
        });
    };
    ExistingStudentComponent.prototype.submitEditStudentForm = function () {
        var _this = this;
        this.loader = true;
        this.as.updateStudent(this.selectedSibling.id, this.editStudentForm.value).subscribe(function (res) {
            $('#editSiblingModal').modal('hide');
            _this.getStudentDetails(_this.selectedStudent.id);
            $('#updateModal').modal('show');
            _this.loader = false;
        }, function (err) {
            _this.errorPage();
        });
    };
    ExistingStudentComponent.prototype.submitEditParentForm = function () {
        var _this = this;
        this.loader = true;
        this.as.updateParent(this.selectedParent.id, this.editParentForm.value).subscribe(function (res) {
            _this.loader = false;
            $('#editParentModal').modal('hide');
            _this.getStudentDetails(_this.selectedStudent.id);
            $('#updateModal').modal('show');
            _this.editParentForm.reset;
        }, function (err) {
            _this.loader = false;
            _this.errorPage();
        });
    };
    ExistingStudentComponent.prototype.uploadParentImage = function () {
        var _this = this;
        this.loader = true;
        var formData = new FormData();
        formData.append('file', this.imgFile);
        this.as.uploadParentImage(this.selectedImageUpload.id, formData).subscribe(function (res) {
            _this.getStudentDetails(_this.selectedStudent.id);
            $('#updateModal').modal('show');
            _this.uploadPicForm.reset();
            _this.loader = false;
        }, function (err) {
            _this.errorPage();
        });
        this.selectedImageUpload = null;
    };
    ExistingStudentComponent.prototype.uploadStudentImage = function () {
        var _this = this;
        this.loader = true;
        var formData = new FormData();
        formData.append('file', this.imgFile);
        this.as.uploadStudentImage(this.selectedImageUpload.id, formData).subscribe(function (res) {
            _this.getStudentDetails(_this.selectedStudent.id);
            $('#updateModal').modal('show');
            _this.uploadPicForm.reset();
            _this.loader = false;
        }, function (err) {
            _this.errorPage();
        });
        this.selectedImageUpload = null;
    };
    ExistingStudentComponent.prototype.getFile = function (event) {
        var blob = event.srcElement.files[0];
        if (blob)
            if (blob.type == "image/png" || blob.type == "image/jpeg" || blob.type == "image/jpg") {
                this.imgFile = event.srcElement.files[0];
            }
            else {
                this.uploadPicForm.controls['file'].reset();
                $('#errorModal').modal('show');
            }
    };
    ExistingStudentComponent.prototype.errorPage = function () {
        this.loader = false;
        this.router.navigate(['/error']);
    };
    ExistingStudentComponent.prototype.filterDetails = function (e) {
        if (e == 1) {
            this.showParent = true;
            this.showSibling = true;
            this.showStudentOnly = false;
        }
        else if (e == 2) {
            this.showParent = false;
            this.showSibling = true;
            this.showStudentOnly = false;
        }
        else if (e == 3) {
            this.showParent = true;
            this.showSibling = false;
            this.showStudentOnly = false;
        }
        else if (e == 4) {
            this.showParent = false;
            this.showSibling = false;
            this.showStudentOnly = true;
        }
    };
    // public  order:any;
    //   public  orderDetails(e:any){    
    //     if(e==1){
    //       this.studentsInfo.reverse;
    //     }
    //   }
    ExistingStudentComponent.prototype.initEditParentForm = function () {
        if (this.selectedParent)
            this.editParentForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
                name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.selectedParent.name),
                nickName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.selectedParent.nickName),
                email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.selectedParent.email, [__WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__["a" /* ValidationService */].emailValidator]),
            });
    };
    ExistingStudentComponent.prototype.onContact = function (e) {
        if (this.selectedParent.contactNo != e) {
            this.contactControl = true;
            this.editParentForm.addControl("contactNo", new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.selectedParent.contactNo, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(9)]));
            this.editParentForm.controls['contactNo'].patchValue(e);
            // if(this.editParentForm.controls.contactNo.dirty || !this.editParentForm.dirty || this.editParentForm.invalid){
            //   $('#submitBtn').addClass('disabled');
            // }
            // else{
            //   $('#submitBtn').removeClass('disabled');
            // }
        }
        else {
            this.contactControl = false;
            this.editParentForm.removeControl('contactNo');
        }
    };
    ExistingStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'existing-student',
            template: __webpack_require__("../../../../../src/app/component/addStudent/existingStudent/existingStudent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/addStudent/existingStudent/existingStudent.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], ExistingStudentComponent);
    return ExistingStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/addStudent/newStudent/newStudent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*Form*/\r\n\r\n\r\n\r\n\r\n\r\n\r\np{\r\n  font-size: 15px;\r\n}\r\n\r\n\r\n\r\n/* new code by saba */\r\n.student-card{\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 25px 0;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n  border-radius: 6px;\r\n  color: rgba(0,0,0,.87);\r\n  background: #fff;\r\n}\r\n\r\n.student-card .card-header{\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n  display: inline-block;\r\n  color: #fff;\r\n  margin: -35px -6px 0;\r\n  border-radius: 3px;\r\n  padding: 12px;\r\n  background-color: #999;\r\n  position: relative;\r\n  z-index:2;\r\n  float: left;\r\n}\r\n\r\n.student-card .card-title{\r\n  margin-top: 0;\r\n  margin-bottom: 3px;\r\n  color: #fff;\r\n  font-weight: 300;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.student-card .card-content{\r\n  padding: 30px 20px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n\r\n.parent-header{\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n  display: inline-block;\r\n  color: #fff;\r\n  margin-top: 50px;\r\n  margin-left: -20px;\r\n  border-radius: 3px;\r\n  padding: 12px;\r\n  background-color: #999;\r\n  position: relative;\r\n  z-index:2;\r\n  float: left;\r\n}\r\n\r\n.student-card .card-footer{\r\n  margin:20px 0px -30px;\r\n padding-top: 10px;\r\n text-align: center!important;\r\n background-color: transparent;\r\n  border-top: 0px solid rgba(0,0,0,.125);\r\n}\r\n.btn-rose{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n   border: none;\r\n   border-radius: 50%;\r\n   position: relative;\r\n   padding:  9px 19px;\r\n   margin: -33px -15px;\r\n   font-size: 20px;\r\n   float: right;\r\n   font-weight: 300;\r\n   width:65px;\r\n   height: 65px;\r\n}\r\n\r\n\r\n.btn-success[disabled]{\r\n  background:linear-gradient(60deg,#ec407a,#d81b60);\r\n  color: gray!important; \r\n  opacity: 1;\r\n}\r\n\r\n.btn-parent{\r\n  background-color: #de2667;\r\n  border-color: #e12b6c;\r\n  margin-left: 16px;\r\n}\r\n\r\n\r\n.parent-list-element{\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n  border-radius:6px;\r\n  padding:15px;\r\n  position:relative;\r\n  margin-bottom: 5px;\r\n  background: aliceblue;\r\n}\r\n\r\n.parent-list-element .add-remove-btn{\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.parent-list-element .add-remove-btn .btn{\r\n  cursor: pointer;\r\n}\r\n\r\n/* new code by saba */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/addStudent/newStudent/newStudent.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- new code by saba -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card student-card\">\r\n      <div class=\"row text-center\">\r\n        <loader [condition]=\"loader\"></loader>\r\n      </div>\r\n      <form [formGroup]=\"newStudentForm\" (submit)=\"submitNewStudent()\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-title\">Student Details</h5>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-2\" style=\"margin-top:15px;\">\r\n              <label for=\"sname\">Student's Name</label>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" id=\"sname\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Student's Name\">\r\n              <div [hidden]=\"newStudentForm.controls.name.valid|| newStudentForm.controls.name.untouched || newStudentForm.controls.name.pristine\"\r\n                class=\"alert alert-warning\">This field is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"stnd\"> Standard</label>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <select id=\"stnd\" class=\"form-control\" formControlName=\"standardId\">\r\n                        <option selected=\"true\" disabled=\"true\" value=\"\">Select Standard</option>   \r\n                        <option *ngFor=\"let s of standards\" [value]=\"s.id\">{{s.name}}</option>\r\n                      </select>\r\n              <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n              <div [hidden]=\"newStudentForm.controls.standardId.valid|| newStudentForm.controls.standardId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"parent-header\">\r\n            <h5 class=\"card-title\">Parent Details</h5>\r\n          </div>\r\n          \r\n          <div class=\"form-group\" formArrayName=\"parent\" style=\"margin-top:120px;\">\r\n            <div class=\"row parent-list-element\" *ngFor=\"let par of newStudentForm.controls.parent['controls']; let i=index;\" [formGroupName]=\"i\">\r\n              <div class=\"add-remove-btn\">\r\n                <button class=\"btn btn-link\" [disabled]=\"((newStudentForm.invalid)||(newStudentForm.controls.parent['controls'].length==3))\" (click)=\"addParent(newStudentForm)\" *ngIf=\"i==newStudentForm.controls.parent['controls'].length-1\">\r\n                  <i class=\"material-icons\">add_circle</i>\r\n                </button>\r\n                <button class=\"btn btn-link\" [disabled]=\"newStudentForm.controls.parent.length == 1\" (click)=\"removeParent(newStudentForm,i)\">\r\n                <i class=\"material-icons\">delete_sweep</i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"row\" style=\"margin-top:15px;\">\r\n                  <div class=\"col-sm-2\">\r\n                    <label>Parent's Name</label>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" id=\"fname\" class=\"form-control\" placeholder=\"Enter Parent's Name\" formControlName=\"name\">\r\n                    <div [hidden]=\"newStudentForm.controls.parent.controls[i].controls.name.valid || newStudentForm.controls.parent.controls[i].controls.name.untouched || newStudentForm.controls.parent.controls[i].controls.name.pristine\"\r\n                      class=\"alert alert-warning\">This field is required</div>\r\n                  </div>\r\n                </div>\r\n            \r\n                <div class=\"row\" style=\"margin-top:15px;\">\r\n                  <div class=\"col-sm-2\">\r\n                    <label for=\"nickname\">Parent's Nick Name</label>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" id=\"nickname\" class=\"form-control\" placeholder=\"Enter Parent's Nick Name\" formControlName=\"nickName\">\r\n                  </div>\r\n                </div>\r\n            \r\n                <div class=\"row\" style=\"margin-top:15px;\">\r\n                  <div class=\"col-sm-2\">\r\n                    <label for=\"ename\">Parent's Contact Number</label>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" id=\"ename\" class=\"form-control\" placeholder=\"Enter Parent's Contact Number\" formControlName=\"contactNo\">\r\n                    <div [hidden]=\"newStudentForm.controls.parent.controls[i].controls.contactNo.valid || newStudentForm.controls.parent.controls[i].controls.contactNo.untouched || newStudentForm.controls.parent.controls[i].controls.contactNo.pristine\"\r\n                      class=\"alert alert-warning\">This field is required\r\n                      <div style=\"color:red\">Contact No should be of 9 to 12 digits</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            \r\n                <div class=\"row\" style=\"margin-top:15px;\">\r\n                  <div class=\"col-sm-2\">\r\n                    <label for=\"cname\">Parent's Email ID</label>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" id=\"cname\" class=\"form-control\" placeholder=\"Enter Parent's Email ID\" formControlName=\"email\">\r\n                    <div [hidden]=\"newStudentForm.controls.parent.controls[i].controls.email.valid || newStudentForm.controls.parent.controls[i].controls.email.untouched || newStudentForm.controls.parent.controls[i].controls.email.pristine\"\r\n                      class=\"alert alert-warning\">This field is required\r\n                      <div style=\"color:red\">Please enter valid email-address</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-footer\">\r\n            <button type=\"submit\" [disabled]=\"newStudentForm.invalid\" class=\"btn btn-success pull-right btn-rose\"><i class=\"fa fa-check\"></i></button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- new code by saba -->\r\n<!-- <div class=\"panel panel-default\">\r\n\r\n  <div class=\"row text-center\">\r\n    <loader [condition]=\"loader\"></loader>\r\n  </div>\r\n\r\n  <form [formGroup]=\"newStudentForm\" (submit)=\"submitNewStudent()\">\r\n    <div class=\"panel-body\">\r\n\r\n\r\n      <div class=\"row\" style=\"border: 1px solid #dddddd;margin: 3% 1%;padding: 1%;\">\r\n        <h4>Student Details</h4>\r\n        <br>\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"sname\">Student's Name</label>\r\n          <input type=\"text\" id=\"sname\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Student's Name\">\r\n          <div [hidden]=\"newStudentForm.controls.name.valid|| newStudentForm.controls.name.untouched || newStudentForm.controls.name.pristine\"\r\n            class=\"alert alert-warning\">This field is required</div>\r\n        </div> -->\r\n        <!-- <div class=\"form-group col-sm-6\">\r\n          <label for=\"stnd\">Select Standard</label>\r\n          <select id=\"stnd\" class=\"form-control\" formControlName=\"standardId\">\r\n            <option selected=\"true\" disabled=\"true\" value=\"\">Select Standard</option>   \r\n            <option *ngFor=\"let s of standards\" [value]=\"s.id\">{{s.name}}</option>\r\n          </select>\r\n          <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n          <div [hidden]=\"newStudentForm.controls.standardId.valid|| newStudentForm.controls.standardId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"border: 1px solid #dddddd;margin: 3% 1%;padding: 1%;\">\r\n        <h4>Parent Details</h4>\r\n        <br>\r\n\r\n        <div class=\"form-group col-sm-12\" formArrayName=\"parent\"> -->\r\n\r\n          <!-- <div class=\"row arrayRow\" *ngFor=\"let par of newStudentForm.controls.parent['controls']; let i=index;\" [formGroupName]=\"i\"> -->\r\n\r\n            <!--\r\n              <label for=\"stnd\">Select Parent</label>\r\n              <select id=\"stnd\" class=\"form-control\" [(ngModel)]=\"parent\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onParent($event,i)\">\r\n            <option *ngFor=\"let p of parents\" [value]=\"p.name\">{{p.name}}</option>\r\n          </select>-->\r\n\r\n            <!-- <div class=\"arrayForm\">\r\n              <div class=\"form-group col-sm-12\">\r\n                <label for=\"fname\">Parent's Name</label>\r\n                <input type=\"text\" id=\"fname\" class=\"form-control\" placeholder=\"Enter Parent's Name\" formControlName=\"name\">\r\n                <div [hidden]=\"newStudentForm.controls.parent.controls[i].controls.name.valid || newStudentForm.controls.parent.controls[i].controls.name.untouched || newStudentForm.controls.parent.controls[i].controls.name.pristine\"\r\n                  class=\"alert alert-warning\">This field is required</div>\r\n              </div>\r\n              <div class=\"form-group col-sm-12\">\r\n                <label for=\"nickname\">Parent's Nick Name</label>\r\n                <input type=\"text\" id=\"nickname\" class=\"form-control\" placeholder=\"Enter Parent's Nick Name\" formControlName=\"nickName\">\r\n              </div>\r\n              <div class=\"form-group col-sm-12\">\r\n                <label for=\"ename\">Parent's Contact Number</label>\r\n                <input type=\"text\" id=\"ename\" class=\"form-control\" placeholder=\"Enter Parent's Contact Number\" formControlName=\"contactNo\">\r\n                <div [hidden]=\"newStudentForm.controls.parent.controls[i].controls.contactNo.valid || newStudentForm.controls.parent.controls[i].controls.contactNo.untouched || newStudentForm.controls.parent.controls[i].controls.contactNo.pristine\"\r\n                  class=\"alert alert-warning\">This field is required\r\n                  <div style=\"color:red\">Contact No should be of 9 to 12 digits</div>\r\n                </div> -->\r\n\r\n              <!-- </div>\r\n              <div class=\"form-group col-sm-12\">\r\n                <label for=\"cname\">Parent's Email ID</label>\r\n                <input type=\"text\" id=\"cname\" class=\"form-control\" placeholder=\"Enter Parent's Email ID\" formControlName=\"email\">\r\n                <div [hidden]=\"newStudentForm.controls.parent.controls[i].controls.email.valid || newStudentForm.controls.parent.controls[i].controls.email.untouched || newStudentForm.controls.parent.controls[i].controls.email.pristine\"\r\n                  class=\"alert alert-warning\">This field is required\r\n                  <div style=\"color:red\">Please enter valid email-address</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <button type=\"button\" [disabled]=\"newStudentForm.controls.parent.length == 1\" class=\"btn btn-primary active pull-right\" (click)=\"removeParent(newStudentForm,i)\">\r\n                    Delete Parent\r\n                  </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div> -->\r\n\r\n        <!-- <div class=\"row\" style=\"margin:5% 5% 0% 5%;\">\r\n          <button type=\"button\" [disabled]=\"((newStudentForm.invalid)||(newStudentForm.controls.parent['controls'].length==3))\" class=\"btn btn-primary active\"\r\n            (click)=\"addParent(newStudentForm)\">\r\n                    Add Parent\r\n            </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"panel-footer\" style=\"height: 56px;\">\r\n      <button type=\"submit\" [disabled]=\"newStudentForm.invalid\" class=\"btn btn-success pull-right\">Submit</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div> -->\r\n\r\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Student Added</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        You have successfully added a new Student.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add More</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"errModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Student Already Exist</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ul class=\"list-group\" *ngFor=\"let x of mes\">\r\n          <li class=\"list-group-item\" style=\"cursor:pointer\" (click)=\"navigateToExisting(x.standardId,x.studentId)\">{{\"Name : \" + x.studentName}} <br>{{\"Standard : \" + x.standardName}}</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/addStudent/newStudent/newStudent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__ = __webpack_require__("../../../../../src/app/providers/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__ = __webpack_require__("../../../../../src/app/providers/formValidation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewStudentComponent = (function () {
    function NewStudentComponent(_location, as, fb, ls, router, barLoaderService) {
        this._location = _location;
        this.as = as;
        this.fb = fb;
        this.ls = ls;
        this.router = router;
        this.barLoaderService = barLoaderService;
        this.loader = false;
        this.standardLoader = false;
        this.stuId = [];
        this.stanId = [];
        this.getStandards();
        this.initNewStudentForm();
        this.ls.setLoader(false);
    }
    NewStudentComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    //New Student Functions
    NewStudentComponent.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.as.getStandards().subscribe(function (res) {
            _this.standards = res;
            _this.standardLoader = false;
        }, function (err) {
            _this.errorPage();
        });
    };
    // public  onParent(p:any,i:any){
    //   this.selectedParent.push(p);
    // }
    NewStudentComponent.prototype.initNewStudentForm = function () {
        this.newStudentForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            standardId: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            parent: this.fb.array([
                this.inItParent(),
            ])
        });
    };
    NewStudentComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    NewStudentComponent.prototype.inItParent = function () {
        return this.fb.group({
            "name": ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            "nickName": [''],
            "contactNo": ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(9)]],
            "email": ['', [__WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__["a" /* ValidationService */].emailValidator]],
        });
    };
    NewStudentComponent.prototype.addParent = function (e) {
        var control = e.controls['parent'];
        control.push(this.inItParent());
    };
    NewStudentComponent.prototype.removeParent = function (form, index) {
        var control = form.controls['parent'];
        control.removeAt(index);
    };
    NewStudentComponent.prototype.submitNewStudent = function () {
        var _this = this;
        this.as.addStudent(this.newStudentForm.value).subscribe(function (res) {
            _this.loader = true;
            $('#addModal').modal('show');
            // this.selectedStudent = null;
            _this.initNewStudentForm();
            _this.loader = false;
        }, function (err) {
            if (err.status == 400) {
                _this.initNewStudentForm();
                _this.messages = err.json();
                _this.mes = JSON.parse(_this.messages.message);
                for (var i = 0; i < _this.mes.length; i++) {
                    _this.stuId[i] = _this.mes[i].studentId;
                    _this.stanId[i] = _this.mes[i].standardId;
                }
                $('#errModal').modal('show');
            }
            else {
                _this.errorPage();
            }
        });
    };
    NewStudentComponent.prototype.errorPage = function () {
        this.loader = false;
        this.router.navigate(['/error']);
    };
    NewStudentComponent.prototype.navigateToExisting = function (standardid, studentid) {
        $('#errModal').modal('hide');
        this.router.navigate(["/add-student", "existing-student", standardid, studentid]);
    };
    NewStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/component/addStudent/newStudent/newStudent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/addStudent/newStudent/newStudent.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], NewStudentComponent);
    return NewStudentComponent;
}());



/***/ })

});
//# sourceMappingURL=addStudent.module.chunk.js.map