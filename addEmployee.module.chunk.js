webpackJsonp(["addEmployee.module"],{

/***/ "../../../../../src/app/component/addEmployee/addEmployee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".picture :hover{\r\nopacity: 0.5 ;\r\n}\r\n\r\n.color-change{\r\n  background-color: red;\r\n}\r\n.text-muted{\r\n  color: red;\r\n}\r\n/*#employee-modal{\r\n  margin-left: 5%;\r\n}\r\n.employee-image{\r\n  display: block;\r\n  margin: auto;\r\n  border-radius: 50% !important;\r\n}\r\n\r\n.name{\r\n  padding: 5%;\r\n  display: inline-block;\r\n}*/\r\ni{\r\n  float: left;\r\n}\r\n\r\n.required{\r\n  color:red;\r\n}\r\n\r\n.modal-body{\r\n  padding: 0px;\r\n}\r\n\r\n.modal-body{\r\n  text-align: center;\r\n  padding: 0 15px;\r\n}\r\n.modal-nickName{\r\n    background-color: #3a3838;\r\n    color: white;\r\n}\r\n.heading{\r\n  font-size: 12px;\r\n  color: #ea212e;\r\n  font-weight: normal;\r\n}\r\n\r\n.value{\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n}\r\n\r\ni{\r\n  float: right;\r\n  font-size: 40px;\r\n  padding-top: 10px;\r\n    \r\n}\r\n.contact,.userName,.email{\r\n  float: left;\r\n}\r\n\r\nhr{\r\n  margin:10px;\r\n}\r\n.modal-nickName{\r\n  margin-bottom: 10px;\r\n}\r\n.glyphicon-edit{\r\n      padding-right: 40%;\r\n    font-size: 20px;\r\n}\r\n\r\n.modal-image:hover{\r\n  opacity: 0.4;\r\n  filter: alpha(opacity=50);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/addEmployee/addEmployee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel panel-heading\">Add Employee\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"_location.back();\">\r\n    <span aria-hidden=\"true\">&times; </span>\r\n  </button>\r\n  </div>\r\n  <div class=\"panel panel-body\">\r\n    <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n    <form [formGroup]=\"addEmployeeForm\" (submit)=\"submitDetails()\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Enter Name\">\r\n        <div [hidden]=\"addEmployeeForm.controls.name.untouched  ||addEmployeeForm.controls.name.valid ||addEmployeeForm.controls.name.pristine\"\r\n          class=\"alert alert-warning\">This field is required.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\" required>User Name<span class=\"required\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"Enter User Name\">\r\n        <div [hidden]=\"addEmployeeForm.controls.username.untouched  ||addEmployeeForm.controls.username.valid ||addEmployeeForm.controls.username.pristine\"\r\n          class=\"alert alert-warning\">should start with an alphabet, length should be between 4 & 20.\r\n          <div class=\"required\">This field is required</div>\r\n        </div>\r\n        <!--<input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"Enter User Name\" (focus)='userNameValid=true' (blur)='userNameValid=false' >-->\r\n        <!--<div *ngIf=\"userNameValid\" >\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">should start with an alphabet, length should be between 4 & 20.</small>\r\n        </div>-->\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"nickName\">Nick Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"nickName\" formControlName=\"nickName\" placeholder=\"Enter Nick Name\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"password\" required>Password<span class=\"required\">*</span></label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Enter password\">\r\n        <div [hidden]=\"addEmployeeForm.controls.password.untouched  ||addEmployeeForm.controls.password.valid ||addEmployeeForm.controls.password.pristine\"\r\n          class=\"alert alert-warning\">should start with an alphabet and should have atleast 1 character.\r\n          <div class=\"required\">This field is required</div>\r\n        </div>\r\n\r\n        <!--<input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Enter password\" (focus)='passwordValid=true' (blur)='passwordValid=false' >\r\n        <div *ngIf=\"passwordValid\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">at least 1 number and minimum 6 characters</small>\r\n        </div>-->\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email1\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email1\" formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n        <div [hidden]=\"addEmployeeForm.controls.email.untouched  ||addEmployeeForm.controls.email.pristine || addEmployeeForm.controls.email.valid \"\r\n          class=\"alert alert-warning\">Enter Valid Email address</div>\r\n\r\n\r\n        <!--<input type=\"email\" class=\"form-control\" id=\"email1\" formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" (focus)='emailValid=true' (blur)='emailValid=false' >-->\r\n        <!--<div *ngIf=\"emailValid\" >\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Email Address should be valid.</small>\r\n        </div>-->\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"contactNo\">Contact No.</label>\r\n        <input type=\"tel\" class=\"form-control\" id=\"contactNo\" formControlName=\"contactNo\" placeholder=\"Enter Contact No.\">\r\n        <div [hidden]=\"addEmployeeForm.controls.contactNo.untouched  ||addEmployeeForm.controls.contactNo.pristine || addEmployeeForm.controls.contactNo.valid \"\r\n          class=\"alert alert-warning\">Must be 10 digits</div>\r\n        <!--<input type=\"tel\" class=\"form-control\" id=\"contactNo\" formControlName=\"contactNo\" placeholder=\"Enter Contact No.\" (focus)='contactValid=true' (blur)='contactValid=false' >\r\n        <div *ngIf=\"contactValid\" >\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">should be 10 digits.</small>\r\n        </div>-->\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <!--<div class=\"form-check col-lg-12\">\r\n    <label class=\"form-check-label\">\r\n      <input type=\"checkbox\" class=\"form-check-input\" > ngModel\r\n      Are you a Teacher?\r\n    </label>\r\n  </div>\r\n\r\n  <br/>-->\r\n\r\n      <!--<div formArrayName=\"teacherStandards\" *ngIf=\"this.addEmployeeForm.value.isTeacher\" class=\"col-lg-12\">\r\n    <br/>\r\n    <div class=\"row\" *ngFor=\"let stu of addEmployeeForm.controls.teacherStandards.controls; let i=index;\" [formGroupName]=\"i\">\r\n\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>Select Standard</label>\r\n        <select class=\"form-control\" formControlName=\"standard\" (ngModelChange)=\"getSubjects($event,i)\">\r\n     <option *ngFor=\"let standard of standards\" [value]=\"standard.id\" >{{standard.name}}</option>\r\n              </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-lg-5\">\r\n        <label>Select Subject</label>\r\n        <select class=\"form-control\" formControlName=\"subject\">\r\n          <option selected disabled > </option>\r\n                <option *ngFor=\"let subject of subjects[i]\">{{subject.subjectName}}</option>\r\n              </select>\r\n      </div>\r\n\r\n      <div class=\"col-lg-1\">\r\n        <button type=\"button\" class=\"btn btn-primary active\" (click)=\"removeStandard(addEmployeeForm,i)\">\r\n                    <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n  </div>-->\r\n\r\n      <button type=\"submit\" [disabled]=\"(!addEmployeeForm.valid)\" class=\"btn btn-primary\">Submit</button>\r\n\r\n      <!--<button type=\"submit\" class=\"btn btn-primary\">Submit</button>-->\r\n      <button type=\"button\" *ngIf=\"this.addEmployeeForm.value.isTeacher\" class=\"btn btn-primary\" [disabled]=\"addEmployeeForm.controls.teacherStandards.invalid\"\r\n        (click)=\"addStandard(addEmployeeForm)\">Add Standards\r\n  </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Profile Details</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div>\r\n          <div class=\"row\">\r\n            <div class=\"modal-heading\">\r\n              <div class=\"row\">\r\n                <i class=\"glyphicon glyphicon-edit\"></i>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"profilePic\">\r\n                <img [attr.src]=\"fileUrl + '/' + profilePic\" data-toggle=\"modal\" data-target=\"#picModal\" height=\"100px\" width=\"100px\" class=\"modal-image\"\r\n                  data-dismiss=\"modal\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<i class=\"glyphicon glyphicon-edit\"></i>-->\r\n          <div class=\"row\" *ngIf=\"this.addEmployeeForm.value.name\">\r\n            <div class=\"modal-name\">{{this.addEmployeeForm.value.name}}</div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"this.addEmployeeForm.value.nickName\">\r\n            <div class=\"modal-nickName modal-class\">\r\n              <div>{{this.addEmployeeForm.value.nickName}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <i class=\"glyphicon glyphicon-user\"></i>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"userName\">\r\n                <label class=\"heading\">Username</label>\r\n                <div class=\"value\">{{this.addEmployeeForm.value.username}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"style-line\" *ngIf=\"this.addEmployeeForm.value.contactNo\">\r\n          <div class=\"row\" *ngIf=\"this.addEmployeeForm.value.contactNo\">\r\n            <div class=\"col-sm-6\">\r\n              <i class=\"glyphicon glyphicon-user\"></i>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"contact\">\r\n                <label class=\"heading\">Contact</label>\r\n                <div class=\"value\">{{this.addEmployeeForm.value.contactNo}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"style-line\" *ngIf=\"this.addEmployeeForm.value.email\">\r\n\r\n          <div class=\"row\" *ngIf=\"this.addEmployeeForm.value.email\">\r\n            <div class=\"col-sm-6\">\r\n              <i>@</i>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"email\">\r\n                <label class=\"heading\">Email</label>\r\n                <div class=\"value\">{{this.addEmployeeForm.value.email}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\" style=\"margin-top:0 !important;\">\r\n      <button type=\"button\" class=\"btn btn-primary \" data-dismiss=\"modal\" (click)=\"initForm()\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Invalid Username</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Username already taken. Choose another username.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"picModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Upload New Picture</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form [formGroup]=\"uploadPicForm\">\r\n        <div class=\"modal-body\" style=\"padding: 5% 3% 3% 3%;\r\n    outline: none;\">\r\n          <input type=\"file\" class=\"form-control-file\" formControlName=\"imgFile\" accept=\"image/*\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\"\r\n            (change)=\"getFile($event)\">\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n\r\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"float:right;\" (click)=\"changePicture()\">Confirm Picture</button>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Profile Picture Updated</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        You have successfully updated the information.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/addEmployee/addEmployee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_service__ = __webpack_require__("../../../../../src/app/providers/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homework_service__ = __webpack_require__("../../../../../src/app/providers/homework.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__ = __webpack_require__("../../../../../src/app/providers/formValidation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(as, au, hs, fb, ls, router, barLoaderService, _location) {
        this.as = as;
        this.au = au;
        this.hs = hs;
        this.fb = fb;
        this.ls = ls;
        this.router = router;
        this.barLoaderService = barLoaderService;
        this._location = _location;
        this.standards = [];
        this.subjects = [[]];
        this.loader = false;
        this.profilePic = 'parent%2f39945169084408330481.jpg?alt=media';
        this.addEmployeeForm = this.fb.group({});
        this.fileUrl = localStorage.getItem('fileUrl');
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.uploadPicForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            imgFile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
        });
        // this.getStandards();
    };
    AddEmployeeComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    AddEmployeeComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    AddEmployeeComponent.prototype.initForm = function () {
        this.profilePic = 'parent%2f39945169084408330481.jpg?alt=media';
        this.addEmployeeForm = this.fb.group({
            "name": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            "username": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[A-Za-z]{1}[A-Za-z0-9]{3,19}')]],
            "nickName": [''],
            "password": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,100}$')]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__["a" /* ValidationService */].emailValidator]],
            'contactNo': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[2-9]{2}[0-9]{8}$')]],
        });
        // this.profilePic = null;
    };
    AddEmployeeComponent.prototype.submitDetails = function () {
        var _this = this;
        this.uploadPicForm.controls['imgFile'].reset();
        // $('#myModal').modal('show');
        this.as.addEmployee(this.addEmployeeForm.value).subscribe(function (res) {
            _this.newEmpId = res.id;
            $('#myModal').modal('show');
        }, function (err) {
            if (err == "409 - Bad Request")
                $('#errorModal').modal('show');
            else {
                _this.router.navigate(['/error']);
            }
        });
    };
    AddEmployeeComponent.prototype.getFile = function (event) {
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
    AddEmployeeComponent.prototype.changePicture = function () {
        var _this = this;
        this.loader = true;
        var formData = new FormData();
        formData.append('file', this.imgFile);
        this.as.uploadImage(formData, this.newEmpId).subscribe(function (res) {
            _this.profilePic = res.fileTimestamp;
            $('#myModal').modal('show');
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    AddEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-employee',
            template: __webpack_require__("../../../../../src/app/component/addEmployee/addEmployee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/addEmployee/addEmployee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_homework_service__["a" /* HomeworkService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__providers_bar_loader_service__["a" /* BarLoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());

// getStandards() {
//   this.as.getStandards().subscribe(res => {
//     this.standards = res;
//   },
//     err => {
//     })
// }
// getSubjects(id: any, index: any) {
//   this.hs.getSubjects(id).subscribe(res => {
//     this.subjects[index] = res;
//   },
//     err => {
//     })
// }
// addStandard(e: any) {
//   const control = <FormArray>e.controls['teacherStandards'];
//   control.push(this.inItStandard());
// }
// removeStandard(form: any, index: any) {
//   const control = <FormArray>form.controls['teacherStandards'];
//   control.removeAt(index);
// }
// inItStandard() {
//   return this.fb.group({
//     "standardId": ['', Validators.required],
//     "subjectId": ['', Validators.required],
//   });
// } 


/***/ }),

/***/ "../../../../../src/app/component/addEmployee/addEmployee.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeModule", function() { return AddEmployeeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addEmployee_component__ = __webpack_require__("../../../../../src/app/component/addEmployee/addEmployee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_homework_service__ = __webpack_require__("../../../../../src/app/providers/homework.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddEmployeeModule = (function () {
    function AddEmployeeModule() {
    }
    AddEmployeeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__addEmployee_component__["a" /* AddEmployeeComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__addEmployee_component__["a" /* AddEmployeeComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_homework_service__["a" /* HomeworkService */]]
        })
    ], AddEmployeeModule);
    return AddEmployeeModule;
}());



/***/ })

});
//# sourceMappingURL=addEmployee.module.chunk.js.map