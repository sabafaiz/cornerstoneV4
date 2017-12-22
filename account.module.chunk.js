webpackJsonp(["account.module"],{

/***/ "../../../../../src/app/component/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".picture img {\r\n   \r\n    border-radius: 100%;\r\n    border: 3px solid white;\r\n\r\n    margin-left: auto;\r\n    margin-right: auto;   \r\n}\r\n\r\n.row{\r\n    margin: 0 !important;\r\n}\r\n.picture:hover {\r\n    border-radius: 0%;\r\n    opacity: 0.5;\r\n}\r\n.profile{\r\n    padding: 0 !important;\r\n    background-color: white;\r\n    margin-top:10%;\r\n    padding: 2%;\r\n    text-align: center;\r\n    font-size: 100%;\r\n    box-shadow: 0px 8px 11px #7b7a7a, -2px 4px 5px #a59797, 10px 8px 15px #989898;\r\n}\r\n.profile-picture{\r\n    width: 150px;\r\n    height:150px;\r\n    border-radius: 100%;\r\n    /* margin-top: -50%; */\r\n    border: 3px solid white;\r\n    box-shadow: 0px 9px 16px grey;\r\n    /* display: block; */\r\n    margin: 10px auto;\r\n}\r\n\r\n.profile-picture:hover{\r\n    border-radius: 100%;\r\n    opacity: 0.5;\r\n}\r\n\r\n.name{\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\nhr.style-line {\r\n border: 0; \r\n  height: 1px;\r\n  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); \r\n}\r\n/*\r\n.btn-success{\r\n    width: 40%;\r\n}*/\r\n.name{\r\n    font-size: 20px;\r\n    margin-top: 10px;\r\n}\r\n.role{\r\n    color: gray;\r\n}\r\n\r\n/* .img_desc\r\n{\r\n    visibility: hidden;\r\n} */\r\n\r\n/* .picture:hover .img_desc,\r\n.picture:hover ~ .img_desc {\r\n    visibility: visible;\r\n    position: absolute;\r\n    left: 15%;\r\n    border-radius: 10%;\r\n    color: white;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    margin-bottom: 5%;\r\n} */\r\n\r\n@media(max-width:408px){\r\n    .profile,.name{\r\n        font-size: 80%;\r\n    }\r\n}\r\n\r\n.img-container{\r\n    background-image: url(/assets/icons/profile_background.svg) , linear-gradient(#bdbdbd, #303342);\r\n    background-repeat: no-repeat !important;\r\n    background-size: cover;\r\n}\r\n\r\n.fingerprint,.role{\r\n    width: 44px;\r\n    /* height: 28px; */\r\n}\r\n\r\n.lock,.email{\r\n    font-size: 32px;\r\n}\r\n\r\n.profile-row{\r\n    padding-top: 10px;\r\n}\r\n\r\n.edit{\r\n        float: right;\r\n    font-size: 19px;\r\n    margin-top: -20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.info{\r\n    font-size: 18px;\r\n}\r\n\r\n.edit-img{\r\n    font-size: 32px;\r\n    top: -32px;\r\n}\r\n\r\n.editpassForm{\r\n    padding: 15px;\r\n}\r\n\r\n\r\n/* new code for admin profile */\r\n.profile-card{\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 25px 0;\r\n    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.14); */\r\n    border-radius: 6px;\r\n    color: rgba(0,0,0,.87);\r\n    background: #fff;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n  }\r\n  \r\n  .profile-card:hover {\r\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n  }\r\n  \r\n\r\n\r\n.profile-card .card-header{\r\n    background-color: white;\r\n    border-color: 1px solid white;\r\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14),\r\n     0 3px 1px -2px rgba(156, 39, 176, 0.2),\r\n     0 1px 5px 0 rgba(156, 39, 176, 0.12);\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin: -70px -6px 0;\r\n    border-radius: 3px;\r\n    padding: 9px;\r\n    /* background-color: #999; */\r\n    position: relative;\r\n    z-index:2;\r\n    float: left;\r\n}\r\n\r\n.admin-pic{\r\n    width: 100px;\r\n}\r\n\r\n.bg-profile{\r\n    background: #7F00FF;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to top, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    \r\n}\r\n\r\n.profile-card .card-content{\r\n    padding: 30px 20px;\r\n    position: relative;\r\n    margin-top:15px;\r\n}\r\n.card-content h4{\r\n    text-align: left;\r\n    color:white;\r\n    font-size:15px;\r\n    margin-bottom:24px;\r\n}\r\n.card-content .material-icons{\r\n    vertical-align: middle;\r\n    padding-right: 10px;\r\n}\r\n\r\n.add-icon .material-icons{\r\n    font-size: 46px;\r\n}\r\n\r\n.profile-name{\r\n    margin-bottom: 30px;\r\n    text-align: left;\r\n    color:white;\r\n}\r\n\r\n.profile-name .material-icons{\r\n    color:white\r\n}\r\n\r\n.add-icon{\r\n    padding: 54px;\r\n    color:#9c27b0;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-icon p{\r\n    font-size: 17px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.add-icon .material-icons:focus {\r\n    outline: 0px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- new code by saba -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card profile-card bg-profile\">\r\n      <form>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card-header\">\r\n            <img [attr.src]=\"picUrl\" class=\"admin-pic\" alt=\"\" data-target=\"#myModal\" data-toggle=\"modal\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <br>\r\n            <h4 style=\"margin-left: 5px;\">{{name}}</h4>\r\n            <div class=\"profile-name\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <span>\r\n                    <i class=\"material-icons\">perm_identity</i>ID</span>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  {{id}}\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <span>\r\n                    <i class=\"material-icons\">security</i>PASSWORD</span>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"info\">********\r\n                    <a data-target=\"#editPassword\" data-toggle=\"modal\"><i class=\"material-icons\">border_color</i></a>\r\n                  </div>\r\n                  \r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <span>\r\n                    <i class=\"material-icons\">work</i>ROLE</span>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  {{role}}\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <span>\r\n                    <i class=\"material-icons\">email</i>EMAIL</span>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  {{email}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card profile-card\">\r\n      <form>\r\n        <div class=\" col-sm-12 add-icon\">\r\n          <div class=\"row\" [routerLink]=\"['/homework/homework-add']\">\r\n            <div class=\"col-sm-2\" >\r\n              <span>\r\n                <i class=\"material-icons\">note_add</i>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <p>ADD HOMEWORK</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" [routerLink]=\"['/circular/add-circular']\">\r\n            <div class=\"col-sm-2\" >\r\n              <span>\r\n                <i class=\"material-icons\">add_alert</i>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <p>ADD CIRCULAR</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" [routerLink]=\"['/appreciation/add-appreciation']\">\r\n            <div class=\"col-sm-2\" >\r\n              <span>\r\n                <i class=\"material-icons\">alarm_add</i>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <p>ADD APPRECIATION</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- new code by saba end -->\r\n\r\n\r\n\r\n<!-- <div class=\"profile\">\r\n  <div class=\"row text-center\">\r\n    <loader class=\"centerLoader\" [condition]=\"loader\"></loader>\r\n  </div>\r\n  <div class=\"row img-container\">\r\n    <!-- <a data-toggle=\"modal\" data-target=\"#myModal\" style=\"display:inline-block;\" >  -->\r\n<!-- <span>\r\n        <img src=\"{{lg.getData('picUrl')}}\" class= \"profile-picture\">\r\n        <a data-target=\"#myModal\" data-toggle=\"modal\"><i class=\"glyphicon glyphicon-pencil edit-img\"></i></a>\r\n        <div class=\" row name\">{{name}}</div>\r\n      </span></a>\r\n  </div> -->\r\n\r\n<!-- <div class=\"row profile-row\">\r\n    <div for=\"id\" class=\"col-sm-4\"><img src=\"assets/icons/fingerprint.png\"class=\"fingerprint\"></div>\r\n    <div class=\"id col-sm-8\" name=\"id\">\r\n      <label>Id</label>\r\n      <div class=\"info\">{{id}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row profile-row\">\r\n    <div for=\"id\" class=\"col-sm-4\"><i class=\" glyphicon glyphicon-lock lock\"></i></div>\r\n    <div class=\"id col-sm-8\" name=\"id\">\r\n      <label>Password</label>\r\n      <div class=\"info\">********\r\n      <a data-target=\"#editPassword\" data-toggle=\"modal\"><i class=\"glyphicon glyphicon-pencil edit\"></i></a>\r\n      </div>\r\n    </div>\r\n  \r\n  </div> -->\r\n<!-- <div class=\"row profile-row\">\r\n    <div for=\"role\" class=\"col-sm-4\"><img src=\"assets/icons/role.png\" class=\"role\"></div>\r\n    <div class=\"id col-sm-8\" name=\"id\">\r\n      <label>Role</label>\r\n      <div class=\"info\">{{role}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row profile-row\">\r\n    <div for=\"email\" class=\"col-sm-4\"><i class=\"email\">@</i></div>\r\n    <div class=\"id col-sm-8\" name=\"id\">\r\n      <label>Email</label>\r\n      <div class=\"info\">{{email}}</div>\r\n    </div>\r\n  </div>\r\n  <hr class=\"style-line\">\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n        <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/circular/add-circular']\">\r\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n        </button>\r\n        </div>\r\n        <div class=\"row\">Add Circular</div>\r\n      </div> -->\r\n<!-- <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n        <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/homework/homework-add']\">\r\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n        </button>\r\n        </div>\r\n        <div class=\"row\">Add Homework</div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n        <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/appreciation/add-appreciation']\">\r\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n        </button>\r\n        </div>\r\n        <div class=\"row\">Add Appreciation</div>\r\n      </div> -->\r\n\r\n<!-- </div> -->\r\n\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Update Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Update Profile Picture </h4>\r\n      </div>\r\n      <form [formGroup]=\"uploadPicForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row text-center\">\r\n            <loader [condition]=\"loader\"></loader>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" formControlName=\"imgFile\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\"\r\n              (change)=\"getFile($event)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"submitAccountDetails()\" class=\"btn btn-primary\" data-dismiss='modal'>Submit</button>\r\n          <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#confirmModal\" data-dismiss=\"modal\">Reset image</button>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"editPassword\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Update Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Change password </h4>\r\n      </div>\r\n      <form class=\"form\" [formGroup]='resetform' class=\"editpassForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"oldPassword\">Old Password</label>\r\n          <input type=\"password\" (click)=\"onclick()\" name='oldPassword' id='oldPassword' formControlName='oldPassword' class=\" form-control\"\r\n            placeholder=\"Enter your old password here\" />\r\n          <div [hidden]=\"resetform.controls.oldPassword.valid || resetform.controls.oldPassword.untouched || resetform.controls.oldPassword.pristine\"\r\n            class=\"alert alert-warning\">This field is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"newPassword\">New Password</label>\r\n          <input type=\"password\" name='newPassword' (click)=\"onclick()\" id='newPassword' formControlName='newPassword' class=\" form-control\"\r\n            placeholder=\"Enter your new password here\" />\r\n          <div [hidden]=\"resetform.controls.newPassword.valid || resetform.controls.newPassword.untouched || resetform.controls.newPassword.pristine\"\r\n            class=\"alert alert-warning\">This field is required\r\n            <div style=\"color:red\"> minimum length of password is 4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"confirmPassword\">Confirm password</label>\r\n          <input type=\"password\" name='confirmPassword' (click)=\"onclick()\" id='confirmPassword' formControlName='confirmPassword'\r\n            class=\"form-control \" placeholder=\"Confirm your password\" />\r\n          <div [hidden]=\"resetform.controls.confirmPassword.valid || resetform.controls.confirmPassword.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n        </div>\r\n      </form>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onSubmit()\" [disabled]=\"resetform.invalid\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">File Type Error</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Kindly upload an image file.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"confirmModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Confirmation</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure ?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"resetImage()\">Yes</button>\r\n        <button class=\"btn btn-primary\" data-dismiss=\"modal\">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"mismatch\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">wrong Password</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        You have entered the old password\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_gaurd__ = __webpack_require__("../../../../../src/app/component/login/login.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
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








var AccountComponent = (function () {
    function AccountComponent(lg, ls, cs, au, router, route, barLoaderService) {
        this.lg = lg;
        this.ls = ls;
        this.cs = cs;
        this.au = au;
        this.router = router;
        this.route = route;
        this.barLoaderService = barLoaderService;
        this.name = "";
        this.url = "";
        this.loader = false;
        this.error = false;
        this.passwordMismatch = "";
        this.mismatch = false;
        this.ls.setLoader(false);
        this.url = this.router.url;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.loadAccountDetails(this.details);
        this.initForm();
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    AccountComponent.prototype.initForm = function () {
        this.uploadPicForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            imgFile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]),
        });
    };
    AccountComponent.prototype.buildForm = function () {
        this.resetform = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            oldPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]),
            newPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]),
        }, passwordMatchValidator);
        function passwordMatchValidator(g) {
            return g.get('newPassword').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
        }
    };
    AccountComponent.prototype.loadAccountDetails = function (details) {
        this.name = this.lg.getData('name');
        this.nickName = this.lg.getData('nickName');
        this.role = this.lg.getData('role');
        this.email = this.lg.getData('email');
        this.picUrl = this.lg.getData('picUrl');
        this.id = this.lg.getData('id');
    };
    AccountComponent.prototype.getFile = function (event) {
        var blob = event.srcElement.files[0];
        if (blob.type == "image/png" || blob.type == "image/jpeg" || blob.type == "image/jpg") {
            this.imgFile = event.srcElement.files[0];
        }
        else {
            $('#errorModal').modal('show');
            this.initForm();
        }
    };
    AccountComponent.prototype.submitAccountDetails = function () {
        var _this = this;
        this.loader = true;
        var formData = new FormData();
        formData.append('file', this.imgFile);
        this.au.uploadImage(formData).subscribe(function (res) {
            localStorage.setItem('picUrl', localStorage.getItem('fileUrl') + "/" + res.fileTimestamp);
            _this.picUrl = localStorage.getItem('fileUrl') + "/" + res.fileTimestamp;
            $('#myModal').modal('hide');
            _this.uploadPicForm.reset();
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    AccountComponent.prototype.resetImage = function () {
        var _this = this;
        this.loader = true;
        this.au.resetImage().subscribe(function (res) {
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    AccountComponent.prototype.onclick = function () {
        this.error = false;
    };
    AccountComponent.prototype.onSubmit = function () {
        this.au.resetPassword(this.resetform.value)
            .subscribe(function (response) {
        }, function (err) {
            $('#mismatch').modal('show');
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-account',
            template: __webpack_require__("../../../../../src/app/component/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_login_gaurd__["a" /* LoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_component__ = __webpack_require__("../../../../../src/app/component/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__account_component__["a" /* AccountComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__account_component__["a" /* AccountComponent */]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map