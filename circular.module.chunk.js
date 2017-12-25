webpackJsonp(["circular.module"],{

/***/ "../../../../../src/app/component/circular/add/add.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*List Style*/\r\n\r\n.content {\r\n \r\n  \r\n  width: 20rem;\r\n  margin: -4rem auto 0 auto;\r\n  padding: 1rem;\r\n  \r\n  background: #fff;\r\n  \r\n  border-radius: rem(2);\r\n  box-shadow: 0 rem(2) rem(5) 0 rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n/* .list {\r\n  height: 81px;\r\n  overflow-y:scroll;\r\n  list-style:none;\r\n} */\r\n\r\n.standardLoad{\r\n  position: relative;\r\n  top:25%;\r\n}\r\n\r\n.file-list-items{\r\n  list-style-type: none;\r\n}\r\n\r\n.file-list{\r\n  padding-left: 0px;\r\n}\r\n\r\ninput[type=file]{ \r\n        color:transparent;\r\n    }\r\n\r\n/* new code */\r\n.add-circular{\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 25px 0;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n  border-radius: 6px;\r\n  color: rgba(0,0,0,.87);\r\n  background: #fff;\r\n}\r\n\r\n.add-circular .card-header{\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n  display: inline-block;\r\n  color: #fff;\r\n  margin: -35px -6px 0;\r\n  border-radius: 3px;\r\n  padding: 12px;\r\n  background-color: #999;\r\n  position: relative;\r\n  z-index:2;\r\n  float: left;\r\n}\r\n\r\n.add-circular .card-title{\r\n  margin-top: 0;\r\n  margin-bottom: 3px;\r\n  color: #fff;\r\n  font-weight: 300;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.add-circular .card-content{\r\n  padding: 30px 20px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n.pull-right{\r\n  color:black;\r\n}\r\n\r\n.add-circular .card-footer{\r\n  margin:20px 0px -30px;\r\n  padding-top: 10px;\r\n  text-align: center!important;\r\n  background-color: transparent;\r\n   border-top: 0px solid rgba(0,0,0,.125);\r\n}\r\n\r\n.btn-rose{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n   border: none;\r\n   border-radius: 50%;\r\n   position: relative;\r\n   padding: 9px 19px;\r\n   margin: -33px -15px;\r\n   font-size: 20px;\r\n   float: right;\r\n   font-weight: 300;\r\n   width:65px!important;\r\n   height: 65px!important;\r\n}\r\n\r\n\r\n.btn-success[disabled]{\r\n  background:linear-gradient(60deg,#ec407a,#d81b60);\r\n  color: gray!important; \r\n  opacity: 1;\r\n}\r\n\r\ninput[type=\"text\"]{\r\n  font-weight: 300; \r\n}\r\n/* new code */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/circular/add/add.html":
/***/ (function(module, exports) {

module.exports = "<!-- new code by saba -->\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"card add-circular\">\r\n      <div class=\"row text-center\">\r\n        <loader class=\"centerLoader\" [condition]=\"submitProgress\"></loader>\r\n      </div>\r\n      <form name=\"circular\" [formGroup]=\"circular\" (ngSubmit)=\"circularSubmit()\" novalidate>\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-title\">Create New Circular</h5>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"_location.back();\">\r\n            <span aria-hidden=\"true\">&times; </span>\r\n          </button>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"title\">Enter Title</label>\r\n              <span class=\"badge\">\r\n                <span>{{50 - circular.value.title.length}}</span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-8\" style=\"margin-left:6px;\">\r\n              <input type=\"text\" class=\"form-control\" id=\"title\" maxlength=\"50\" formControlName=\"title\" placeholder=\"Add Title\">\r\n              <div [hidden]=\"circular.controls.title.untouched || circular.controls.title.pristine || circular.controls.title.valid\" class=\"alert alert-warning\">\r\n                This field is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"description\">Description</label>\r\n              <span class=\"badge\">\r\n                <span>{{2000 - circular.value.description.length}}</span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <textarea class=\"form-control\" id=\"exampleTextarea\" name=\"description\" maxlength=\"2000\" formControlName=\"description\" rows=\"3\"\r\n                placeholder=\"Add Description\"></textarea>\r\n              <div [hidden]=\"circular.controls.description.untouched || circular.controls.description.pristine || circular.controls.description.valid\"\r\n                class=\"alert alert-warning\">\r\n                This field is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"circularTypeId\">Audience</label>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\" id=\"circularTypeId\" name=\"circularTypeId\" formControlName=\"circularTypeId\" (ngModelChange)=\"onCircularType($event)\">\r\n                <option selected=\"true\" disabled=\"true\" value=\"\">Select Audience</option>\r\n                <option *ngFor=\"let bx of circularType\" [value]=\"bx.id\">{{bx.name}}</option>\r\n              </select>\r\n              <div>\r\n                <div [hidden]=\"circular.controls.circularTypeId.valid || circular.controls.circularTypeId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"date\">Due Date</label>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <input class=\"form-control glyphicon glyphicon-calendar\" type=\"date\" max=\"2019-10-31\" (change)=\"onDueDate($event)\" displayFormat=\"DD MMM YYYY\"\r\n                name=\"date\" formControlName=\"date\" id=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"circular.value.circularTypeId == 2 \" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"standardIds\">Select Standard</label>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <button style=\"text-align: left\" type=\"button\" class=\"form-control\" *ngIf=\"standards != null\" (click)=\"dropdown ? dropdown = false : dropdown = true \">{{ buttonlabel}}</button>\r\n              <button type=\"button\" class=\"form-control\" *ngIf=\"standards == null\">No Standards are added to the View. Try again later.</button>\r\n              <ul class=\"list\" id=\"standardIds\" *ngIf=\"dropdown\">\r\n                <li style=\"    margin-left: -34px;     /* text-indent: -18px; */ \" *ngFor=\"let a of standards\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"checkbox\" [ngModel]=\"check(a)\" (ngModelChange)=\"selectStandards(a,$event)\" [ngModelOptions]=\"{standalone: true}\"\r\n                      [value]=\"a.id\"> {{a.name}}\r\n                  </label>\r\n                </li>\r\n              </ul>\r\n              <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <div>Attachment</div>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"file\" [title]=\"noOfFiles\" class=\"form-control-file\" formControlName=\"files\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\"\r\n                (change)=\"getFile($event)\" multiple >\r\n              <span *ngIf=\"maxfile\">* Max 5 files</span>\r\n              <ul class=\"file-list\">\r\n                <li class=\"file-list-items\" *ngFor=\"let f of file\">{{f.name}}\r\n                  <span class=\"glyphicon glyphicon-remove\" (click)=\"removeFile(f)\"></span>\r\n                </li>\r\n                <span class=\"small\">(Optional)</span>\r\n              </ul>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--content end-->\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" class=\"btn btn-success btn-rose\" [disabled]=\"!circular.valid || maxfile\">\r\n            <i class=\"fa fa-check\"></i>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ++++++++++++++++++++++++++++++++++++++++++++modal for comformation start++++++++++++++++++++++++++++++++-->\r\n<div class=\"modal fade\" id=\"circularModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Circular Added</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        You have successfully added a new Circular.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" [routerLink]=\"['/circular']\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add More</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--+++++++++++++++++++++++++++++++++++++++++++++end modal for comformation++++++++++++++++++++++++++++++++  -->\r\n\r\n<!-- &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ---modal for error strat-----&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& -->\r\n<div class=\"modal fade\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">File Type Error</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Kindly upload an image file.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%modal for error end%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55555555555 -->\r\n\r\n\r\n\r\n\r\n<!-- new code by saba -->\r\n\r\n\r\n<!-- <div class=\"panel panel-default\"> -->\r\n<!-- Default panel contents -->\r\n<!-- <div class=\"panel-heading\">\r\n    Create Circular\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"_location.back();\">\r\n    <span aria-hidden=\"true\">&times; </span>\r\n  </button>\r\n  </div> -->\r\n<!-- Table -->\r\n<!-- <div class=\"panel-body\"> -->\r\n<!-- <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div> -->\r\n<!-- <form name=\"circular\" [formGroup]=\"circular\" (ngSubmit)=\"circularSubmit()\" novalidate>\r\n      <div class=\"row text-center\">\r\n        <loader class=\"centerLoader\" [condition]=\"submitProgress\"></loader>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Enter Title</label>\r\n        <span class=\"badge\">\r\n          <span>{{50 - circular.value.title.length}}</span>\r\n        </span>\r\n        <input type=\"text\" class=\"form-control\" id=\"title\" maxlength=\"50\" formControlName=\"title\" placeholder=\"Add Title\">\r\n        <div [hidden]=\"circular.controls.title.untouched || circular.controls.title.pristine || circular.controls.title.valid\" class=\"alert alert-warning\">\r\n          This field is required\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <span class=\"badge\">\r\n           <span>{{2000 - circular.value.description.length}}</span>\r\n        </span>\r\n        <textarea class=\"form-control\" id=\"exampleTextarea\" name=\"description\" maxlength=\"2000\" formControlName=\"description\" rows=\"3\"\r\n          placeholder=\"Add Description\"></textarea>\r\n        <div [hidden]=\"circular.controls.description.untouched || circular.controls.description.pristine || circular.controls.description.valid\"\r\n          class=\"alert alert-warning\">\r\n          This field is required\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"date\">Due Date</label>\r\n            <input class=\"form-control glyphicon glyphicon-calendar\" type=\"date\" max=\"2019-10-31\" (change)=\"onDueDate($event)\" displayFormat=\"DD MMM YYYY\"\r\n              name=\"date\" formControlName=\"date\" id=\"date\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"circularTypeId\">Audience</label>\r\n            <select class=\"form-control\" id=\"circularTypeId\" name=\"circularTypeId\" formControlName=\"circularTypeId\" (ngModelChange)=\"onCircularType($event)\">\r\n              <option selected=\"true\" disabled=\"true\" value=\"\">Select Audience</option>\r\n\r\n              <option *ngFor=\"let bx of circularType\" [value]=\"bx.id\" >{{bx.name}}</option>\r\n            </select>\r\n\r\n            <div>\r\n              <div [hidden]=\"circular.controls.circularTypeId.valid || circular.controls.circularTypeId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\" col-sm-12 col-lg-12\">\r\n          <div class=\" form-group\" *ngIf=\"circular.value.circularTypeId == 2 \">\r\n            <label for=\"standardIds\">Select Standard</label>\r\n            <button style=\"text-align: left\" type=\"button\" class=\"form-control\" *ngIf=\"standards != null\" (click)=\"dropdown ? dropdown = false : dropdown = true \">{{ buttonlabel}}</button>\r\n            <button type=\"button\" class=\"form-control\" *ngIf=\"standards == null\">No Standards are added to the View. Try again later.</button>\r\n            <ul class=\"list\" id=\"standardIds\" *ngIf=\"dropdown\">\r\n              <li style=\"    margin-left: -34px;     /* text-indent: -18px; */ \" *ngFor=\"let a of standards\">\r\n                <label>\r\n                  <input type=\"checkbox\" class=\"checkbox\" [ngModel]=\"check(a)\" (ngModelChange)=\"selectStandards(a,$event)\" [ngModelOptions]=\"{standalone: true}\" [value]=\"a.id\">\r\n                  {{a.name}}\r\n                </label>\r\n              </li>\r\n            </ul>\r\n            <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n<!-- <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <div>Attachment<span class=\"small\">(Optional)</span></div>\r\n            <input type=\"file\" [title]=\"noOfFiles\" class=\"form-control-file\" formControlName=\"files\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\"\r\n              (change)=\"getFile($event)\" multiple>\r\n            <span *ngIf=\"maxfile\">* Max 5 files</span>\r\n            <ul class=\"file-list\">\r\n              <li class=\"file-list-items\" *ngFor=\"let f of file\">{{f.name}} <span class=\"glyphicon glyphicon-remove\" (click)=\"removeFile(f)\"></span></li>\r\n            </ul> -->\r\n<!--<small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>-->\r\n<!-- </div>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!circular.valid || maxfile\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/component/circular/add/add.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCircular; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_circular_service__ = __webpack_require__("../../../../../src/app/providers/circular.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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







var AddCircular = (function () {
    function AddCircular(circserv, commonService, _location, router, ls) {
        this.circserv = circserv;
        this.commonService = commonService;
        this._location = _location;
        this.router = router;
        this.ls = ls;
        this.title = 'Add Circular';
        this.maxfile = false;
        this.buttonlabel = 'Select Standard';
        this.emptyStandards = false;
        this.file = [];
        this.loader = false;
        this.submitProgress = false;
        this.standardLoader = false;
        this.audienceLoader = false;
        this.noOfFiles = 0;
        this.stdIds = [];
        this.ls.setLoader(false);
    }
    AddCircular.prototype.ngOnInit = function () {
        this.circular = this.initForm();
        this.todayDate = new Date("DD MMM YYYY");
    };
    AddCircular.prototype.onDueDate = function (e) {
        if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
            alert("Please choose an upcoming date from the calendar.");
            this.circular.controls['date'].patchValue(this.commonService.getTomorrow());
        }
    };
    AddCircular.prototype.ngAfterViewInit = function () {
        this.getCircularInfo();
        this.getStandards();
    };
    AddCircular.prototype.initForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.commonService.getTomorrow(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            circularTypeId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            files: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('')
            // standardIds: new FormControl([], [Validators.required])
        });
    };
    // public  getStandards() {
    //   this.loader = true;
    //   this.standards = this.commonService.getData("standards");
    //   if (typeof (this.standards) === 'undefined') {
    //     this._getStandards();
    //   }
    //   this.loader = false;
    // }
    AddCircular.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.circserv.getStandards().subscribe(function (res) {
            if (res.status === 204) {
                _this.standardLoader = false;
                _this.standards = null;
                _this.loader = false;
                return;
            }
            _this.standards = res;
            _this.commonService.storeData("standards", res);
            _this.standardLoader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    // public  getCircularInfo() {
    //   this.loader = true;
    //   let circularInfo = this.commonService.getData("circularInfo");
    //   if (typeof (circularInfo) == "undefined") {
    //     this._getCircularInfo();
    //     this.loader = false;
    //   } else {
    //     this.buildCircularData(circularInfo);
    //     this.loader = false;
    //   }
    // }
    AddCircular.prototype.getCircularInfo = function () {
        var _this = this;
        this.loader = true;
        this.audienceLoader = true;
        this.commonService.getCircularInfo().subscribe(function (res) {
            _this.audienceLoader = false;
            _this.buildCircularData(res);
            _this.commonService.storeData("circularInfo", res);
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    AddCircular.prototype.check = function (a) {
        if (a.checked == true) {
            return true;
        }
        else {
            if (this.buttonlabel.indexOf(a.name) >= 0) {
                return true;
            }
            return false;
        }
    };
    AddCircular.prototype.buildCircularData = function (circular) {
        this.circularType = circular;
    };
    AddCircular.prototype.onCircularType = function (event) {
        if (event == "1") {
            this.circular.removeControl("standardIds");
            this.standard = [];
            this.emptyStandards = true;
        }
        else if (event == "2") {
            this.circular.addControl("standardIds", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]));
            this.emptyStandards = false;
        }
        // this.circular.controls['standardIds'].reset();
    };
    AddCircular.prototype.circularSubmit = function () {
        this.submitProgress = true;
        var formData = new FormData();
        console.log(formData);
        formData.append('title', this.circular.value['title']);
        formData.append('description', this.circular.value['description']);
        formData.append('circularTypeId', this.circular.value['circularTypeId']);
        if (!this.emptyStandards) {
            formData.append('standardIds', this.circular.value['standardIds']);
        }
        formData.append('date', this.circular.value['date']);
        for (var i = 0; i < this.file.length; i++) {
            formData.append('files', this.file[i]);
        }
        this.onSubmit(formData);
        console.log(formData);
        // this.submitProgress = false;
    };
    AddCircular.prototype.selectStandards = function (a, e) {
        var _this = this;
        if (e == true) {
            this.stdIds.push(a.id);
            if (this.buttonlabel == 'Select Standard') {
                this.buttonlabel = ' ' + a.name;
            }
            else {
                this.buttonlabel += ' ' + a.name;
            }
        }
        else if (e == false) {
            var s = a.name;
            this.buttonlabel = this.buttonlabel.replace(' ' + s, '');
            console.log(this.buttonlabel);
            if (this.buttonlabel == '') {
                this.buttonlabel = 'Select Standard';
            }
            this.stdIds.forEach(function (element, index) {
                if (element == a.id) {
                    _this.stdIds.splice(index, 1);
                }
            });
        }
        this.circular.controls['standardIds'].patchValue(this.stdIds);
        console.log(this.stdIds);
    };
    AddCircular.prototype.onSubmit = function (formData) {
        var _this = this;
        this.submitProgress = true;
        console.log(formData);
        this.circserv.PostCircular(formData).subscribe(function (data) {
            _this.submitProgress = false;
            _this.circular = _this.initForm();
            _this.loader = false;
            $('#circularModal').modal('show');
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
        this.file = null;
    };
    AddCircular.prototype.getFile = function (event) {
        var noOfFiles = this.file.length;
        console.log(noOfFiles);
        // if(event.srcElement.files.length<=5 && noOfFiles<=5){
        //   this.maxfile = false;
        for (var i = 0; i < event.srcElement.files.length; i++) {
            var blob = event.srcElement.files[i];
            // if(blob.type=="image/png" || blob.type=="image/jpeg" || blob.type=="image/jpg"){
            this.file[i + noOfFiles] = event.srcElement.files[i];
            // }
            // else{
            //   $('#errorModal').modal('show');
            //   this.circular.controls['files'].reset();
            //  }
        }
        // }
        noOfFiles = this.file.length;
        if (noOfFiles > 5) {
            this.maxfile = true;
        }
        else {
            this.maxfile = false;
        }
        this.noOfFiles = noOfFiles;
        console.log(this.file);
    };
    AddCircular.prototype.removeFile = function (f) {
        var index = this.file.indexOf(f);
        this.file.splice(index, 1);
        var noOfFiles = this.file.length;
        if (noOfFiles <= 5) {
            this.maxfile = false;
        }
        this.noOfFiles = noOfFiles;
    };
    AddCircular = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-circular',
            styles: [__webpack_require__("../../../../../src/app/component/circular/add/add.css")],
            template: __webpack_require__("../../../../../src/app/component/circular/add/add.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_circular_service__["a" /* CircularService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loaderstop_service__["a" /* LoaderStop */]])
    ], AddCircular);
    return AddCircular;
}());



/***/ }),

/***/ "../../../../../src/app/component/circular/circular.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes dropDown{\r\n    from{\r\n        height:0px;\r\n    }\r\n    to{\r\n        height:\r\n    }\r\n}\r\n\r\n@keyframes dropDown{\r\n    from{\r\n        height:0px;\r\n    }\r\n    to{\r\n        height:\r\n    }\r\n}\r\n\r\n.form-group{\r\n    border-style: none;\r\n    background-color: inherit;\r\n}\r\n\r\nh1{\r\n    font-weight: bold;\r\n    letter-spacing: 0.1em;\r\n}\r\n.badge{\r\n    background-color: #ea212e;\r\n}\r\n\r\n.class{\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  overflow: hidden;\r\n}\r\n.modal-description{\r\n    padding: 2px 10px;\r\n}\r\n\r\n.image1{\r\n  margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 275px;\r\n    height: 180px;\r\n    border-style: solid;\r\n}\r\n.sideimage{\r\n    width: 149px;\r\n    height: 180px;\r\n    -webkit-filter:blur(1px);\r\n            filter:blur(1px);  \r\n}\r\n\r\n/* new css by saba */\r\n.nav-option{\r\n   background:#9c27b0;\r\n   padding: 9px;\r\n   margin-top:15px; \r\n   border-radius: 3px;\r\n   border:1px solid black;\r\n\r\n}\r\n\r\n.nav-option .title{\r\n    color:white;\r\n    font-size:20px;\r\n}\r\n\r\n.nav-option  .material-icons{\r\n  position: absolute;\r\n    right: 20px;\r\n   color:white;\r\n   cursor: pointer;\r\n}\r\n\r\n.nav-option .material-icons:focus {\r\n    outline: -webkit-focus-ring-color auto 0px;\r\n}\r\n\r\n/* for table  css*/\r\n.table-card{\r\ndisplay: inline-block;\r\nposition: relative;\r\nwidth: 100%;\r\nmargin: 25px 0;\r\nbox-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\nborder-radius:3px!important;\r\ncolor: rgba(0, 0, 0, 0.87)!important;\r\nbackground: #fff;\r\nfont-weight: 300;\r\npadding: 0px;\r\n}\r\n\r\n.table-card .card-header{\r\n    background:    linear-gradient(60deg, #ab47bc, #8e24aa);\r\n      box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), \r\n      0 4px 20px 0px rgba(0, 0, 0, 0.12)\r\n      , 0 7px 8px -5px rgba(156, 39, 176, 0.2);\r\n      color: #FFFFFF;\r\n      margin: -40px 15px 0;\r\n      border-radius:3px!important;\r\n      padding: 15px;\r\n  }\r\n\r\n  .table-card .card-header a{\r\n      color:#FFFFFF;\r\n  }\r\n/* for table css */\r\n\r\n\r\n/* new css by saba */\r\n\r\n.details{\r\n    color:#555!important;\r\n    font-weight:500;\r\n    font-size: 14px;\r\n    padding: 30px 19px;\r\n    \r\n  \r\n  }\r\n  .details thead th {\r\n    color:#9c27b0!important;\r\n  }\r\n  .details tr td{\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n  .detail tr td .material-icons:hover{\r\n    background: #9c27b0;\r\n    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), \r\n    0 4px 20px 0px rgba(0, 0, 0, 0.12), \r\n    0 7px 8px -5px rgba(156, 39, 176, 0.2);   \r\n    text-decoration: none;\r\n  }\r\n  .details thead th i{\r\n    margin:-1px 5px 0 0;\r\n    vertical-align: middle;\r\n    color:#9c27b0!important;\r\n  }\r\n\r\n  .details tbody td img{\r\n      width: 10%;\r\n  }\r\n\r\n  \r\n  td[block]{\r\n      white-space: nowrap; \r\n      width: inherit; \r\n      overflow: hidden;\r\n      text-overflow: ellipsis; \r\n      /* border: 1px solid #000000; */\r\n      max-width: 500px;\r\n   transition: 10s ;\r\n  }\r\n  \r\n  .tr-row:hover td[block] {\r\n    /* border:1px solid blue; */\r\n    overflow:initial;\r\n    /* height:initial; */\r\n    white-space:pre-wrap;\r\n    text-overflow: initial;\r\n    text-align: -webkit-auto;\r\n  }\r\n\r\n  /* modal css */\r\n  .modal-header .close{\r\n    color:white;\r\n}\r\n\r\n.modal-header{\r\n    background:#9c27b0!important; \r\n    color:white;\r\n}\r\n\r\n.load-btn{\r\n  \r\n    background: #9c27b0;\r\n    border-color:#9c27b0; \r\n    border-radius:3px!important;\r\n}\r\n.btn-primary:not([disabled]):not(.disabled):active{\r\n    background: #9c27b0;\r\n    border-color:#9c27b0; \r\n}\r\n.carousel-caption i{\r\n color:#9c27b0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/circular/circular.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- new code by saba -->\r\n<div class=\"circular\">\r\n  <!-- <div class=\"col-sm-12 col-lg-12 col-md-12\">\r\n    <ul class=\"nav nav-option\">\r\n      <li>\r\n        <h3 class=\"title\">Circular</h3>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n  <div class=\"row text-center\">\r\n    <loader [condition]=\"loader\"></loader>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 2%;padding-top: 1%;\">\r\n    <div class=\"card table-card\">\r\n      <div class=\"card-header\">\r\n        Circular details\r\n        <a class=\"pull-right\" [routerLink]=\"['/circular/add-circular']\"><i class=\"material-icons\" >note_add</i></a>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <table class=\"details table table-hover\">\r\n          <thead *ngIf=\"!EmptyCirculars\">\r\n            <tr>\r\n              <th width=\"10%\">Date</th>\r\n              <th width=\"10%\">Detail</th>\r\n              <th width=\"10%\">Title</th>\r\n              <th width=\"10%\">Type</th>\r\n              <th width=\"60%\">Description</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let circular of circulars;let c=index;\">\r\n            <tr class=\"tr-row\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"seletToExpand(circular)\">\r\n              <td>{{circular.createdAt| date}}</td>\r\n              <td>\r\n                <img src=\"assets/img/studentpic.png\">\r\n                <br> {{circular.employeeName}}</td>\r\n              <td>{{circular.title}}</td>\r\n              <td>{{circular.circularTypeName}}</td>\r\n              <td block>{{circular.description}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td colspan=\"5\">\r\n                <span style=\"text-align: center\" *ngIf=\"(EmptyCirculars)&&(!loader)&&(currentPage==1)\"><b>No Circulars are added to the view.</b></span>\r\n                <span style=\"text-align: center\" *ngIf=\"(EmptyCirculars)&&(!loader)&&(currentPage!=1)\"><b>No more Circulars are added to the view.</b></span>\r\n              </td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n        <div class=\"text-center\">\r\n          <button (click)=\"nextCircular()\" class=\"btn btn-primary\" *ngIf=\"!EmptyCirculars && !noMore\">Load More</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- new code by saba -->\r\n<!-- <div class=\"panel panel-default\"> -->\r\n  <!-- Default panel contents -->\r\n  <!-- <div class=\"panel-heading\">\r\n  Circulars \r\n    <div style=\"display: inline-block;\" class=\"add-button\">\r\n      <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/circular/add-circular']\">\r\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n      </button>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- Table -->\r\n  <!-- <div class=\"panel-body\">\r\n\r\n    <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n    <div style=\"margin-top: 2%;padding-top: 1%;\">\r\n      <div *ngIf=\"!EmptyCirculars\">\r\n        <div class=\"container card\" *ngFor=\"let circular of circulars\">\r\n          <div class=\"row\">\r\n            <span class=\"glyphicon glyphicon-resize-full expand\" (click)=\"seletToExpand(circular)\" data-toggle=\"modal\" data-target=\"#myModal-card\"></span>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"download-image\" *ngIf=\"circular.files\">\r\n              <span *ngIf=\"circular.files.length > 0\">\r\n                <img class=\"modal-image\" *ngIf=\"circular.files[0].fileOriginalName.substr(circular.files[0].fileOriginalName.length - 4) != '.pdf'\" [attr.src]=\"fileUrl + circular.files[0].fileTimestamp\">\r\n                <img class=\"image\" *ngIf=\"circular.files[0].fileOriginalName.substr(circular.files[0].fileOriginalName.length - 4) == '.pdf'\" src=\"assets/pdf.png\">\r\n                </span>\r\n              <div class=\"edit-image\"><a [attr.href]=\"fileUrl + circular.files[0].fileTimestamp\" [download]=\"custom\"><i class=\"fa fa-download fa-lg\"></i></a></div>\r\n            </div>\r\n            <span>\r\n                <img class=\"modal-image\" *ngIf=\"!circular.files\" src=\"assets/preview.png\" alt=\"No Preview Avalable\">\r\n              </span>.\r\n          </div>\r\n          <div class=\"row name\">{{circular.employeeName}}</div>\r\n          <div class=\"row class\"><label class=\"heading\">For</label>\r\n            <div class=\"class\">{{circular.standards}}</div>\r\n            <span *ngIf=\"!circular.standards\">School</span>\r\n          </div>\r\n          <hr class=\"style-line\">\r\n          <div class=\"row title\">{{circular.title}}</div>\r\n          <div class=\"row description\">{{circular.description}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"text-align: center\" *ngIf=\"(EmptyCirculars)&&(!loader)&&(currentPage==1)\"><b>No Circulars are added to the view.</b></div>\r\n    <div class=\"row \" style=\"text-align: center\" *ngIf=\"(EmptyCirculars)&&(!loader)&&(currentPage!=1)\"><b>No more Circulars are added to the view.</b></div>\r\n  </div> -->\r\n\r\n\r\n  <!-- <div class=\"panel-footer\"> -->\r\n    <!--<nav aria-label=\"Page navigation example\">\r\n      <ul class=\"pagination\">\r\n        <li class=\"page-item\" [ngClass]=\"{'disabled': currentPage === 1}\"><a class=\"page-link\" (click)=\"previousCircular()\">Previous</a></li>\r\n        <li class=\"page-item\"><a class=\"page-link active\">1</a></li>\r\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n        <li class=\"page-item\" [ngClass]=\"{'disabled': EmptyCirculars}\"><a class=\"page-link\" (click)=\"nextCircular()\">Next</a></li>\r\n      </ul>\r\n    </nav>-->\r\n    <!--<button (click)=\"previousCircular()\" class=\"btn btn-primary nav-btn right\" [disabled]=\"currentPage === 1\">Previous</button>\r\n    <button (click)=\"nextCircular()\" class=\"btn right btn-danger nav-btn\" [disabled]=\"EmptyCirculars || noMore\">Next</button>-->\r\n    <!-- <div class=\"text-center\"><button (click)=\"nextCircular()\" class=\"btn btn-primary\" *ngIf=\"!EmptyCirculars && !noMore\">Load More</button></div> -->\r\n  <!-- </div> -->\r\n<!-- </div> -->\r\n\r\n<div class=\"modal fade\" id=\"myModal-card\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\" *ngIf=\"selectedCircular\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"gridSystemModalLabel\">{{selectedCircular.title}}</h4>\r\n      </div>\r\n      <div class=\"modal-body card-modal\">\r\n        <div class=\"row modal-heading\">\r\n          <!-- <img class=\"modal-image\" [attr.src]=\"fileUrl + selectedCircular.employeePicUrl\" style=\"margin-top:10px;\"> -->\r\n          <div class=\"download-image-modal1\">\r\n            <span *ngIf=\"selectedCircular.files && selectedCircular.files[imgindex-1]\">\r\n            \r\n            <img  *ngIf=\"selectedCircular.files[imgindex-1].fileOriginalName.substr(selectedCircular.files[imgindex-1].fileOriginalName.length - 4) != '.pdf'\" style=\"float:left;margin-right: 12px\" (click)=\"swipe(-1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedCircular.files[imgindex-1].fileTimestamp\">\r\n\r\n            <img  *ngIf=\"selectedCircular.files[imgindex-1].fileOriginalName.substr(selectedCircular.files[imgindex-1].fileOriginalName.length - 4) == '.pdf'\" style=\"float:left;margin-right: 12px\" (click)=\"swipe(-1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n          \r\n          </span>\r\n\r\n            <span *ngIf=\"imgindex==0\" style=\"float:left;top:83px;width:149px;height:16px;margin-right:12px\"></span>\r\n\r\n            <div class=\"download-image-modal\" *ngIf=\"selectedCircular.files\" style=\"float:left\">\r\n              <span>\r\n               <img *ngIf=\"selectedCircular.files[imgindex].fileOriginalName.substr(selectedCircular.files[imgindex].fileOriginalName.length - 4) != '.pdf'\" class=\"image1\" [attr.src]=\"fileUrl + selectedCircular.files[imgindex].fileTimestamp\">\r\n\r\n               <img *ngIf=\"selectedCircular.files[imgindex].fileOriginalName.substr(selectedCircular.files[imgindex].fileOriginalName.length - 4) == '.pdf'\" class=\"image1\" src=\"assets/pdf1.jpg\">\r\n\r\n              </span>\r\n              <div class=\"edit-image-modal\"><a [attr.href]=\"fileUrl + selectedCircular.files[0].fileTimestamp\" [download]=\"custom\"><i class=\"fa fa-download fa-lg\"></i></a></div>\r\n            </div>\r\n\r\n            <span *ngIf=\" selectedCircular.files && imgindex == selectedCircular.files.length-1 \" style=\"float:left;top:83px;width:149px;height:16px;margin-right:12px\"></span>\r\n\r\n            <span *ngIf=\"selectedCircular.files && selectedCircular.files[imgindex+1]\">\r\n          \r\n            <img *ngIf=\"selectedCircular.files[imgindex+1].fileOriginalName.substr(selectedCircular.files[imgindex+1].fileOriginalName.length - 4) != '.pdf'\" style=\"float:left;margin-left:12px;\" (click)=\"swipe(1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedCircular.files[imgindex+1].fileTimestamp\">\r\n\r\n            <img *ngIf=\"selectedCircular.files[imgindex+1].fileOriginalName.substr(selectedCircular.files[imgindex+1].fileOriginalName.length - 4) == '.pdf'\" style=\"float:left;margin-left:12px;\" (click)=\"swipe(1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n\r\n            </span>\r\n\r\n          </div>\r\n\r\n          <span>\r\n              <img class=\"image1\" *ngIf=\"!selectedCircular.files\" src=\"assets/preview.png\" alt=\"No Preview Avalable\">\r\n            </span>\r\n\r\n\r\n          <br *ngIf=\"selectedCircular.files\">\r\n          <div style=\"margin:auto;\">\r\n            <div style=\"display: inline;\" *ngFor=\" let x of selectedCircular.files ; let i=index \">\r\n              <span *ngIf=\"i!=imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-empty-dot\"></span>\r\n              <span *ngIf=\"i==imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-full-dot\"></span>\r\n            </div>\r\n\r\n          </div>\r\n          <br>\r\n        </div>\r\n        <div class=\"row modal-name\">{{selectedCircular.employeeName}}\r\n          <div class=\"modal-class\" *ngIf=\"selectedCircular.standards\"><label>For : </label><span>{{selectedCircular.standards}}</span><span *ngIf=\"!selectedCircular.standards\"></span></div>\r\n        </div>\r\n        <div class=\"row modal-description\">\r\n          <span class=\"white-space\">{{selectedCircular.description}}</span>\r\n        </div>\r\n        <hr class=\"style-line\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2 col-xs-2\"><i class=\"glyphicon glyphicon-calendar calendar-custom pull-right\"></i></div>\r\n          <div class=\"col-sm-5 col-xs-5\">\r\n            <label class=\"heading\">Created At</label>\r\n            <div class=\"result\">{{selectedCircular.createdAt | date}}</div>\r\n          </div>\r\n          <div class=\"col-sm-5 col-xs-5\"><label class=\"heading\">Start date</label>\r\n            <div class=\"result\">{{selectedCircular.start | date}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n\r\n\r\n<!-- The Modal -->\r\n<div class=\"modal fade\" id=\"myModal\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\" *ngIf=\"selectedCircular\">\r\n      \r\n        <!-- Modal Header -->\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" style=\"text-transform: capitalize;\">{{selectedCircular.title}}</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <div style=\"padding: 1% 10% 1% 10%;\">\r\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n              <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carouselExampleIndicators\" [attr.data-slide-to]=\"i\" [ngClass]=\"i?'':'active'\" *ngFor=\" let x of selectedCircular.files ; let i=index \"></li>\r\n              </ol>\r\n              <div class=\"carousel-inner\" role=\"listbox\">\r\n                <div class=\"carousel-item\" [ngClass]=\"k?'':'active'\" *ngFor=\" let x of selectedCircular.files ; let k=index \">\r\n                  <img class=\"d-block img-fluid\" [attr.src]=\"fileUrl + x.fileTimestamp\" *ngIf=\"x?.fileOriginalName.includes('.png')||x?.fileOriginalName.includes('.jpg')||x?.fileOriginalName.includes('.jpeg')||x?.fileOriginalName.includes('.bmp')\"\r\n                    width=\"800\" height=\"400\">\r\n                  <div class=\"d-block img-fluid text-center\" *ngIf=\"x?.fileOriginalName.includes('.pdf')\">\r\n                    <img src=\"assets/pdf1.jpg\">\r\n                  </div>\r\n                  <div class=\"d-block img-fluid text-center\" *ngIf=\"x?.fileOriginalName.includes('.docx')||x?.fileOriginalName.includes('.doc')\">\r\n                    <img src=\"assets/docx.png\">\r\n                  </div>\r\n                  <div class=\"carousel-caption\">\r\n                    <h3>\r\n                      <a [attr.href]=\"fileUrl + x.fileTimestamp\">\r\n                        <i class=\"material-icons\">cloud_download</i>\r\n                      </a>\r\n                    </h3>\r\n                    <!-- <p>\r\n                      <button class=\"btn btn-link\" data-toggle=\"modal\" data-dismiss=\"modal\" data-target=\"#modal-edit-image\" *ngIf=\"!disable\" (click)=\"imgArray()\">Add/Remove </button>\r\n                    </p> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n              </a>\r\n              <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\" style=\"text-align: right;\">Circular For :</label>\r\n            <div class=\"col-sm-8\" *ngIf=\"selectedCircular.standards\">\r\n                <div class=\"form-control\">{{selectedCircular.standards}}</div>\r\n            </div>\r\n            <div class=\"col-sm-8\" *ngIf=\"!selectedCircular.standards\">\r\n                <div class=\"form-control\">{{selectedCircular.circularTypeName}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\"  style=\"text-align: right;\">Created By :</label>\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"form-control\">{{selectedCircular.employeeName}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\"  style=\"text-align: right;\">Description :</label>\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"form-control\">{{selectedCircular.description}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"row\" style=\"text-align: center;\">\r\n            <label for=\"example-text-input\" class=\"col-4 col-form-label\">Created At :</label>\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"form-control\">{{selectedCircular.createdAt | date}}</div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"row\" style=\"text-align: center;\">\r\n            <label for=\"example-text-input\" class=\"col-4 col-form-label\">Start Date :</label>\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"form-control\">{{selectedCircular.start | date}}</div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary load-btn\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/component/circular/circular.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_circular_service__ = __webpack_require__("../../../../../src/app/providers/circular.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CircularComponent = (function () {
    function CircularComponent(circularService, router, ls, barLoaderService) {
        this.circularService = circularService;
        this.router = router;
        this.ls = ls;
        this.barLoaderService = barLoaderService;
        this.title = 'Circular';
        this.icon = "ios-paper-outline";
        this.currentPage = 1;
        this.EmptyCirculars = true;
        this.loader = false;
        this.noMore = true;
        this.imgindex = 0;
        this.ls.setLoader(false);
    }
    CircularComponent.prototype.ngOnInit = function () {
        this.fileUrl = localStorage.getItem("fileUrl") + "/";
        this.getCirculars();
    };
    CircularComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    CircularComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    CircularComponent.prototype.getCirculars = function () {
        var _this = this;
        this.loader = true;
        this.circularService.GetCirculars(this.currentPage).subscribe(function (res) {
            _this.onSuccess(res);
            console.log(res);
        }, function (err) {
            _this.onError(err);
        });
    };
    CircularComponent.prototype.onSuccess = function (data) {
        this.loader = false;
        if (data.status === 204) {
            this.circulars = [];
            this.EmptyCirculars = true;
            return;
        }
        else {
            if (this.currentPage == 1)
                this.circulars = data;
            else
                this.circulars = this.circulars.concat(data);
            if (data.length < 12)
                this.noMore = true;
            else
                this.noMore = false;
            this.EmptyCirculars = false;
        }
    };
    CircularComponent.prototype.onError = function (err) {
        this.loader = false;
        this.router.navigate(['/error']);
    };
    CircularComponent.prototype.previousCircular = function () {
        delete this.circulars;
        this.currentPage -= 1;
        this.getCirculars();
    };
    CircularComponent.prototype.swipe = function (a) {
        console.log(a);
        this.imgindex += a;
    };
    CircularComponent.prototype.swipebydots = function (a) {
        console.log(a);
        this.imgindex = a;
    };
    CircularComponent.prototype.nextCircular = function () {
        // delete this.circulars;
        this.currentPage += 1;
        this.getCirculars();
    };
    CircularComponent.prototype.try = function () {
        console.log("working");
    };
    // public  onCircularSelected(circular) {
    //   this.circularService.GetparticularCircular(circular.id).subscribe((res) => {
    //   }, (err) => {
    //   })
    // }
    CircularComponent.prototype.seletToExpand = function (circular) {
        this.imgindex = 0;
        console.log(circular);
        this.selectedCircular = circular;
    };
    CircularComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'circular',
            template: __webpack_require__("../../../../../src/app/component/circular/circular.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/circular/circular.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_circular_service__["a" /* CircularService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_4__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], CircularComponent);
    return CircularComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/circular/circular.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularModule", function() { return CircularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circular_component__ = __webpack_require__("../../../../../src/app/component/circular/circular.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__("../../../../../src/app/component/circular/add/add.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_circular_service__ = __webpack_require__("../../../../../src/app/providers/circular.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CircularModule = (function () {
    function CircularModule() {
    }
    CircularModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__circular_component__["a" /* CircularComponent */]
                    },
                    {
                        path: 'add-circular',
                        component: __WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddCircular */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__circular_component__["a" /* CircularComponent */], __WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddCircular */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_circular_service__["a" /* CircularService */]]
        })
    ], CircularModule);
    return CircularModule;
}());



/***/ }),

/***/ "../../../../../src/app/providers/circular.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constant__ = __webpack_require__("../../../../../src/app/providers/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__default_header_service__ = __webpack_require__("../../../../../src/app/providers/default.header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CircularService = (function () {
    function CircularService(http, htttp, con) {
        this.http = http;
        this.htttp = htttp;
        this.con = con;
        this.getUrl();
    }
    CircularService.prototype.getUrl = function () {
        this.serverUrl = this.con.Server;
    };
    CircularService.prototype.GetCirculars = function (pageNo) {
        return this.http.get(this.serverUrl + '/circular/page/' + pageNo)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CircularService.prototype.GetparticularCircular = function (id) {
        return this.http.get(this.serverUrl + '/circular/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CircularService.prototype.PostCircular = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        });
        return this.htttp.post(this.serverUrl + '/circular', data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CircularService.prototype.getStandards = function () {
        return this.http.get(this.serverUrl + '/homework/standard')
            .map(this.extractData)
            .catch(this.handleError);
    };
    CircularService.prototype.extractData = function (res) {
        if (res.status === 204) {
            return res;
        }
        var body = res.json();
        return body || {};
    };
    CircularService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Response */]) {
            errMsg = error.status + " - " + (error.ok || '');
            if (error.status === 0) {
                errMsg = error.status + " - \"No Internet\"";
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CircularService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__default_header_service__["a" /* CustomHttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* Configuration */]])
    ], CircularService);
    return CircularService;
}());



/***/ })

});
//# sourceMappingURL=circular.module.chunk.js.map