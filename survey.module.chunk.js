webpackJsonp(["survey.module"],{

/***/ "../../../../../src/app/component/survey/add/add.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question{\r\n font-size: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/survey/add/add.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n\r\n  <div class=\"panel-heading\">Add Survey\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"_location.back();\">\r\n    <span aria-hidden=\"true\">&times; </span>\r\n  </button>\r\n  </div>\r\n\r\n  <div class=\"row text-center\">\r\n    <loader [condition]=\"loader\"></loader>\r\n  </div>\r\n\r\n  <div *ngIf=\"((!surveyInfo)&&(!loader))\">\r\n    Surveys cannot be added at the moment. Try again later.\r\n  </div>\r\n\r\n  <form [formGroup]=\"surveyForm\" (submit)=\"submitSurvey()\" *ngIf=\"surveyInfo\">\r\n    <div class=\"panel-body\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Title</label>\r\n        <span class=\"badge\"> {{50 - surveyForm.value.title.length}}</span>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"Enter title...\" maxlength=\"50\">\r\n      </div>\r\n\r\n      <div [hidden]=\"((surveyForm.controls.title.untouched) || (surveyForm.controls.title.pristine) || (surveyForm.controls.title.valid))\"\r\n        class=\"alert alert-warning\">\r\n        This field is required.\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <span class=\"badge\"> {{200 - surveyForm.value.description.length}}</span>\r\n        <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\" id=\"comment\" placeholder=\"Enter Description...\" maxlength=\"200\"></textarea>\r\n      </div>\r\n\r\n      <div [hidden]=\"((surveyForm.controls.description.untouched) || (surveyForm.controls.description.pristine) || (surveyForm.controls.description.valid))\"\r\n        class=\"alert alert-warning\">\r\n        This field is required.\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"surveyFor\">Audience</label>\r\n        <select class=\"form-control\" id=\"surveyFor\" formControlName=\"surveyTypeId\" (ngModelChange)=\"onTypeId($event)\">\r\n          <option disabled=\"disabled\" selected=\"selected\">Select Audience</option>             \r\n          <option *ngFor=\"let a of surveyInfo.surveyType\" [value]=\"a.id\">{{a.name}}</option>\r\n    </select>\r\n      </div>\r\n\r\n      <div *ngIf=\"standards\">\r\n      <div class=\"form-group\" *ngIf=\"surveyForm.value.surveyTypeId == 2\">\r\n        <label for=\"standards\">Standards</label>\r\n        <div class=\"row text-center\">\r\n                  <loader [condition]=\"submitProgress\" class=\"centerLoader\"></loader>\r\n        </div>\r\n            <button type=\"button\" class=\"form-control\" *ngIf=\"standards != null\" (click)=\"dropdown ? dropdown = false : dropdown = true;\"></button>\r\n            <button type=\"button\" class=\"form-control\" *ngIf=\"standards == null\">No Standards are added to the View. Try again later.</button>\r\n            <!-- <span *ngIf=\"standards != null\" class=\"glyphicon glyphicon-triangle-bottom\" style=\"margin-left: -4%;\r\n              font-size: 11px;\r\n              padding: 0;\r\n              vertical-align: super;\"></span> -->\r\n\r\n            <ul class=\"list\" id=\"standardIds\" *ngIf=\"dropdown\">\r\n              <li style=\"    margin-left: -34px;     /* text-indent: -18px; */ \" *ngFor=\"let a of standards\">\r\n                <label>\r\n                  <input type=\"checkbox\" class=\"checkbox\" [ngModel]=\"a.checked\" (ngModelChange)=\"selectStandards(a,$event)\" [ngModelOptions]=\"{standalone: true}\" [value]=\"a.id\">\r\n                  {{a.name}}\r\n                </label>\r\n              </li>\r\n            </ul>\r\n            <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>            \r\n<!--         <select class=\"form-control\" id=\"standardIds\" [(ngModel)]=\"selectedStandard\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onStandards($event)\"\r\n          multiple required>\r\n          <option *ngIf=\"!standards\" [value]=\"null\" selected>No standards are added </option>\r\n      <option *ngFor=\"let s of standards\" [value]=\"s.id\">{{s.name}}</option>\r\n    </select> -->\r\n      </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"date\">Date</label>\r\n        <div>\r\n          <input class=\"form-control\" type=\"date\" (change)=\"onDueDate($event)\" formControlName=\"expiredAt\" value=\"2017-08-19\" id=\"date\">\r\n        </div>\r\n      </div>\r\n\r\n      <u>\r\n        <h4>Questions</h4>\r\n      </u>\r\n\r\n      <div formArrayName=\"surveyQuestions\">\r\n        <div class=\"row\" *ngFor=\"let q of surveyForm.controls.surveyQuestions.controls; let i=index;\" [formGroupName]=\"i\" style=\"background: rgba(232, 238, 238, 0.59); margin: 10px 1px; padding: 7px 5px;\">\r\n\r\n          <div class=\"form-group col-sm-4 col-xs-6\">\r\n            <label for=\"text\" class=\"question\">Question {{i+1}}</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Question {{i+1}}\" id=\"text\" formControlName=\"text\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-4 col-xs-6\">\r\n            <label for=\"surveyType\" class=\"question\">Question Type</label>\r\n            <select class=\"form-control\" id=\"surveyType\" formControlName=\"type\">\r\n              <!--(ngModelChange)=\"onQuestionType($event,surveyForm.controls.surveyQuestions.controls[i])\"-->\r\n              <option disabled=\"disabled\" selected=\"selected\">Select Question Type</option>               \r\n              <option *ngFor=\"let a of surveyInfo.surveyQuestionType\" [value]=\"a.id\"> {{a.name}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-2 col-xs-6\" style=\"    margin-top: 23px;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" title=\"Add Options\" [disabled]=\"(surveyForm.controls.surveyQuestions.controls[i].controls.choices.length==surveyInfo.optionLimit)\"\r\n              (click)=\"addOptions(surveyForm,i)\">Add Options</button>\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-2 col-xs-6\" style=\" margin-top: 23px;\">\r\n            <button type=\"button\" class=\"btn btn-primary active\" title=\"Delete Question\" (click)=\"removeQuestions(surveyForm,i)\" [disabled]=\"surveyForm.controls.surveyQuestions.length<=1\">\r\n              <span class=\"glyphicon glyphicon-trash\" ></span>\r\n             </button>\r\n          </div>\r\n\r\n          <div class=\"col-xs-10\" formArrayName=\"choices\">\r\n            <div class=\"row\" *ngFor=\"let ch of surveyForm.controls.surveyQuestions.controls[i].controls.choices.controls; let ii = index\"\r\n              [formGroupName]=\"ii\">\r\n\r\n              <div class=\"form-group col-xs-8\">\r\n                <label for=\"ch\">Choice {{ii+1}}:</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"choice\" placeholder=\"Enter Choice {{ii+1}}\" id=\"ch\">\r\n              </div>\r\n\r\n              <div class=\"col-xs-2\" style=\"margin-top:23px;\">\r\n                <button type=\"button\" class=\"btn btn-primary active\" title=\"Delete Options\" (click)=\"removeOptions(surveyForm,i,ii)\" [disabled]=\"surveyForm.controls.surveyQuestions.controls[i].controls.choices.length<=2\">\r\n                    <span class=\"glyphicon glyphicon-remove\"></span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"surveyInfo\">\r\n              <div class=\"alert alert-warning col-xs-10\" *ngIf=\"surveyForm.controls.surveyQuestions.controls[i].controls.choices.length==surveyInfo.optionLimit\">\r\n                Maximum {{surveyInfo.optionLimit}} options are allowed.\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"alert alert-warning col-xs-10\" *ngIf=\"surveyForm.controls.surveyQuestions.controls[i].controls.choices.length<2\">\r\n              Minimum 2 options are required.\r\n            </div>\r\n          </div>\r\n          <!--\r\n          <div class=\"alert alert-warning col-xs-10\" *ngIf=\"surveyForm.value.surveyQuestions[i].type==3\">\r\n            No options for text-type questions.\r\n          </div>-->\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"surveyInfo\" style=\"margin: 10px 1px; padding: 5px;\">\r\n          <span class=\"alert alert-warning col-xs-10\" *ngIf=\"surveyForm.controls.surveyQuestions.length==surveyInfo.questionLimit\">\r\n                Maximum {{surveyInfo.questionLimit}} questions are allowed.\r\n              </span>\r\n          <span class=\"alert alert-warning col-xs-100\" *ngIf=\"surveyForm.controls.surveyQuestions.length<1\">\r\n                Minimum 1 question is required.\r\n              </span>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel-footer\">\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"surveyForm.invalid\">Submit</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"surveyForm.controls.surveyQuestions.length==surveyInfo.questionLimit\"\r\n        (click)=\"addQuestions(surveyForm)\">Add Questions</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"dateErrorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Invalid Date</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Choose a valid date.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"submitModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Survey Added</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        You have successfully added a new Survey.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" [routerLink]=\"['/survey/current-survey']\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add More</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/survey/add/add.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_survey_service__ = __webpack_require__("../../../../../src/app/providers/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__ = __webpack_require__("../../../../../src/app/providers/formValidation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddSurveyComponent = (function () {
    function AddSurveyComponent(cs, ss, fb, vs, _location, router) {
        this.cs = cs;
        this.ss = ss;
        this.fb = fb;
        this.vs = vs;
        this._location = _location;
        this.router = router;
        this.loader = false;
        this.submitProgress = false;
        this.standardLoader = false;
        this.stdIds = [];
    }
    AddSurveyComponent.prototype.ngOnInit = function () {
        this.getSurveyInfo();
        this.initForm();
        this.getStandards();
    };
    AddSurveyComponent.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.cs.getStandards().subscribe(function (res) {
            if (res.status == 204) {
                _this.standardLoader = false;
                _this.standards = null;
                return;
            }
            _this.standardLoader = false;
            _this.standards = res;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    AddSurveyComponent.prototype.getSurveyInfo = function () {
        var _this = this;
        this.loader = true;
        this.cs.getSurveyInfo().subscribe(function (res) {
            if (res.status === 204) {
                _this.surveyInfo = null;
                return;
            }
            _this.surveyInfo = res;
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    AddSurveyComponent.prototype.initForm = function () {
        this.surveyForm = this.fb.group({
            'title': [(''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            'description': [(''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            'surveyTypeId': [(''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            'expiredAt': [(this.cs.getTomorrow()), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            // 'standards': [('')],
            'surveyQuestions': this.fb.array([
                this.initQuestions(),
            ], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)
            // Validators.compose([ Validators.minLength(1), Validators.maxLength(this.qLimit)])
            ),
        });
    };
    AddSurveyComponent.prototype.onDueDate = function (e) {
        if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
            $('#dateErrorModal').modal('show');
            this.surveyForm.controls['expiredAt'].patchValue(this.cs.getTomorrow());
        }
    };
    AddSurveyComponent.prototype.onTypeId = function (event) {
        if (event == "1") {
            this.surveyForm.removeControl("standards");
            this.selectedStandard = [];
        }
        else if (event == "2") {
            this.selectedStandard = [];
            this.surveyForm.addControl("standards", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]((''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]));
        }
    };
    AddSurveyComponent.prototype.selectStandards = function (a, e) {
        var _this = this;
        if (e == true) {
            this.stdIds.push(a.id);
        }
        else if (e == false) {
            this.stdIds.forEach(function (element, index) {
                if (element == a.id) {
                    _this.stdIds.splice(index, 1);
                }
            });
        }
        this.surveyForm.controls['standardIds'].patchValue(this.stdIds);
    };
    AddSurveyComponent.prototype.onStandards = function (ev) {
        var stan = ev;
        this.surveyForm.controls['standards'].patchValue(stan);
    };
    AddSurveyComponent.prototype.initQuestions = function () {
        return this.fb.group({
            'type': [(''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            'text': [(''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            'choices': this.fb.array([
                this.initOptions(),
                this.initOptions(),
            ], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)),
        });
    };
    AddSurveyComponent.prototype.addQuestions = function (e) {
        var control = e.controls['surveyQuestions'];
        control.push(this.initQuestions());
    };
    AddSurveyComponent.prototype.removeQuestions = function (form, index) {
        var control = form.controls['surveyQuestions'];
        control.removeAt(index);
    };
    AddSurveyComponent.prototype.initOptions = function () {
        return this.fb.group({
            'choice': [(''), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
        });
    };
    AddSurveyComponent.prototype.addOptions = function (e, i) {
        var control = e.controls['surveyQuestions'].controls[i].get("choices");
        control.push(this.initOptions());
    };
    AddSurveyComponent.prototype.removeOptions = function (form, i, ii) {
        var control = form.controls['surveyQuestions'].controls[i].get("choices");
        control.removeAt(ii);
    };
    AddSurveyComponent.prototype.submitSurvey = function () {
        var _this = this;
        this.submitProgress = true;
        this.ss.saveSurvey(this.surveyForm.value).subscribe(function (res) {
            _this.submitProgress = false;
            $('#submitModal').modal('show');
            _this.initForm();
        }, function (err) {
            _this.submitProgress = false;
            _this.router.navigate(['/error']);
        });
    };
    AddSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-survey',
            template: __webpack_require__("../../../../../src/app/component/survey/add/add.html"),
            styles: [__webpack_require__("../../../../../src/app/component/survey/add/add.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_survey_service__["a" /* SurveyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_formValidation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], AddSurveyComponent);
    return AddSurveyComponent;
}());

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
// import { CommonService } from '../../../providers/common.service';
// import { SurveyService } from '../../../providers/survey.service';
// import { ValidationService } from '../../../providers/formValidation.service'
// import { Location } from '@angular/common';
// import { Router } from '@angular/router';
// declare let $: any;
// @Component({
//   selector: 'add-survey',
//   templateUrl: './add.html',
//   styleUrls: ['./add.css'],
// })
// export class AddSurveyComponent implements OnInit {
//   public  surveyForm: FormGroup;
//   public  standards: any[];
//   public  surveyInfo: any;
//   public  selectedStandard: any;
//   public  loader: boolean = false;
//   constructor(public  cs: CommonService,
//     public  ss: SurveyService,
//     public  fb: FormBuilder,
//     public  vs: ValidationService,
//     public  _location: Location,
//     public  router: Router,
//   ) {
//   }
//   ngOnInit() {
//     this.getSurveyInfo();
//     this.initForm();
//     this.getStandards();
//   }
//   public  getStandards() {
//     this.loader = true;
//     this.cs.getStandards().subscribe(res => {
//        if(res.status == 204){
//         this.standards = null;
//         return;
//       }
//       this.standards = res;
//       this.loader = false;
//     },
//       err => {
//          this.loader = false;
//          this.router.navigate(['/error']);
//       })
//   }
//   public  getSurveyInfo() {
//      this.loader = true;
//     this.cs.getSurveyInfo().subscribe(res => {
//       if(res.status === 204){
//         this.surveyInfo = null;
//         return;
//       }
//       this.surveyInfo = res;
//       this.loader = false;
//     },
//       err => {
//        this.loader = false;
//         this.router.navigate(['/error']);
//       })
//   }
//   public  initForm() {
//     this.surveyForm = this.fb.group({
//       'title': [(''), [Validators.required]],
//       'description': [(''), [Validators.required]],
//       'surveyTypeId': [(''), [Validators.required]],
//       'expiredAt': [(this.cs.getTomorrow()), [Validators.required]],
//       // 'standards': [('')],
//       'surveyQuestions': this.fb.array([
//         this.initQuestions(),
//       ], Validators.minLength(1)
//         // Validators.compose([ Validators.minLength(1), Validators.maxLength(this.qLimit)])
//       ),
//     })
//   }
//   onDueDate(e: any) {
//     if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
//       $('#dateErrorModal').modal('show');
//       this.surveyForm.controls['expiredAt'].patchValue(this.cs.getTomorrow());
//     }
//   }
//   public  onTypeId(event: any) {
//     if (event == "1") {
//       this.surveyForm.removeControl("standards");
//       this.selectedStandard = [];
//     }
//     else if (event == "2") {
//       this.selectedStandard = [];
//       this.surveyForm.addControl("standards", new FormControl((''), [Validators.required]));
//     }
//   }
//   public  onStandards(ev: any) {
//     var stan = ev;
//     this.surveyForm.controls['standards'].patchValue(stan);
//   }
//   public  initQuestions() {
//     return this.fb.group({
//       'type': [(''), [Validators.required]],
//       'text': [(''), [Validators.required]],
//       'choices': this.fb.array([
//         this.initOptions(),
//         this.initOptions(),
//       ], Validators.required, Validators.minLength(2),
//         // Validators.compose([ Validators.minLength(2), Validators.maxLength(this.oLimit)])
//       ),
//     })
//   }
//   public  addQuestions(e: any) {
//     const control = <FormArray>e.controls['surveyQuestions'];
//     control.push(this.initQuestions());
//   }
//   public  removeQuestions(form: any, index: any) {
//     const control = <FormArray>form.controls['surveyQuestions'];
//     control.removeAt(index);
//   }
//   public  initOptions() {
//     return this.fb.group({
//       'choice': [(''), [Validators.required]],
//     })
//   }
//   public  addOptions(e: any, i: any) {
//     const control = <FormArray>e.controls['surveyQuestions'].controls[i].get("choices");
//     control.push(this.initOptions());
//   }
//   public  removeOptions(form: any, i: any, ii: any) {
//     const control = <FormArray>form.controls['surveyQuestions'].controls[i].get("choices");
//     control.removeAt(ii);
//   }
//   public  submitSurvey() {
//     this.loader = true;
//     this.ss.saveSurvey(this.surveyForm.value).subscribe(res => {
//       this.loader = false;
//       $('#submitModal').modal('show');
//       this.initForm();
//     },
//       err => {
//         this.loader = false;
//         this.router.navigate(['/error']);
//       })
//   }
//   // public  onQuestionType(ev: any, form: any) {
//   //   if (ev == 3) {
//   //     // const control = <FormArray>form.controls['surveyQuestions'].controls[i].get("choices");
//   //     // control.setValidators(this.vs.minLengthArray(0));
//   //     // var l = control.length - 1;
//   //     // while (l >= 0) {
//   //     //   this.removeOptions(form, i, l);
//   //     //   l = l - 1;
//   //     // }
//   //     <FormGroup>form.removeControl("choices");
//   //   }
//   //   else {
//   //     // const control = <FormArray>form.controls['surveyQuestions'].controls[i].get("choices");
//   //     // control.setValidators(this.vs.minLengthArray(2));
//   //   }
//   // }
// }


/***/ }),

/***/ "../../../../../src/app/component/survey/closed/survey.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/*.title{\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; \r\n}*/\r\n\r\n.desc{\r\n      font-size: 15px;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    display: block;\r\n    overflow: hidden; \r\n}\r\n\r\n.card{\r\n  width: 22%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/survey/closed/survey.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n     <div class=\"add-button\">\r\n      <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/add-survey']\">\r\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n      </button>\r\n    </div>\r\n    <br>\r\n    <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n    <div style=\"margin-top: 2%;padding-top: 1%;\">\r\n      <div  *ngIf=\"!emptySurveys\">\r\n        <div class=\"container card\" *ngFor=\"let s of surveys; let i = index;\">\r\n          <div class=\"row\">\r\n\r\n            <p routerLinkActive=\"active\"><a [routerLink]=\"['/view-survey', s.surveyId]\"><span class=\"glyphicon glyphicon-resize-full expand\"></span></a></p>\r\n          </div>\r\n\r\n          <div class=\"row class\" style=\"text-align:center;\">{{s.typeName}}</div>\r\n          <div class=\"row\"><span class=\"badge\">{{s.questionLength}} Question(s)</span></div>\r\n          <hr class=\"style-line\">\r\n          <div class=\"row title\" style=\"text-align:center;\"><b>{{s.title}}</b></div>\r\n\r\n          <div class=\"row desc\" style=\"text-align:center;\"><span class=\"white-space\">{{s.description}}</span></div>\r\n\r\n          <hr class=\"style-line\">\r\n          <div class=\"row name\" style=\"text-align:center;\"><span class=\"glyphicon glyphicon-calendar\"></span>{{s.expiredAt | date}}</div>\r\n        </div>                \r\n      </div>\r\n    </div>\r\n     <div style=\"text-align: center\" *ngIf=\"(emptySurveys)&&(!loader)&&(currentPage==1)\"><b>No Survey is added to the View</b></div>\r\n      <div style=\"text-align: center\" *ngIf=\"(emptySurveys)&&(!loader)&&(currentPage!=1)\"><b>No More Survey is added to the View</b></div>\r\n  </div>\r\n\r\n  <div class=\"panel-footer\">\r\n    <!-- <button (click)=\"previousSurvey()\" [disabled]=\"currentPage === 1\" type=\"button\" class=\"btn btn-primary\">Previous</button> -->\r\n    <button (click)=\"nextSurvey()\" type=\"button\" [disabled]=\"emptySurveys || noMore\" class=\"btn btn-primary\">Load More</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/survey/closed/survey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_survey_service__ = __webpack_require__("../../../../../src/app/providers/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClosedSurveyComponent = (function () {
    function ClosedSurveyComponent(ss, router) {
        this.ss = ss;
        this.router = router;
        this.currentPage = 1;
        this.emptySurveys = false;
        this.noMore = false;
        this.loader = false;
    }
    ClosedSurveyComponent.prototype.ngOnInit = function () {
        this.getSurveys();
    };
    ClosedSurveyComponent.prototype.getSurveys = function () {
        var _this = this;
        this.loader = true;
        this.ss.getClosedSurveys(this.currentPage).subscribe(function (res) {
            if (res.status == 204) {
                _this.emptySurveys = true;
                _this.loader = false;
                return;
            }
            _this.surveys = res;
            if (_this.surveys.length < 12)
                _this.noMore = true;
            else
                _this.noMore = false;
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    // public  previousSurvey() {
    //   delete this.surveys;
    //   this.currentPage -= 1;
    //   this.getSurveys();
    // }
    ClosedSurveyComponent.prototype.nextSurvey = function () {
        // delete this.surveys;
        this.currentPage += 1;
        this.getSurveys();
    };
    ClosedSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'closed-survey',
            template: __webpack_require__("../../../../../src/app/component/survey/closed/survey.html"),
            styles: [__webpack_require__("../../../../../src/app/component/survey/closed/survey.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_survey_service__["a" /* SurveyService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ClosedSurveyComponent);
    return ClosedSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/survey/current/survey.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/*.title{\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; \r\n}*/\r\n\r\n.desc{\r\n      font-size: 15px;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    display: block;\r\n    overflow: hidden; \r\n}\r\n\r\n.card{\r\n  width: 22%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/survey/current/survey.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n   \r\n    <div class=\"add-button\">\r\n      <button type=\"button\" class=\"btn btn-success btn-circle pull-right\" [routerLink]=\"['/add-survey']\">\r\n    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n  </button>\r\n    </div>\r\n    <br>\r\n     <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 2%;padding-top: 1%;\">\r\n      <div  *ngIf=\"!emptySurveys\">\r\n        <div class=\"container card\" *ngFor=\"let s of surveys; let i = index;\">\r\n          <div class=\"row\">\r\n\r\n            <p routerLinkActive=\"active\"><a [routerLink]=\"['/view-survey', s.surveyId]\"><span class=\"glyphicon glyphicon-resize-full expand\"></span></a></p>\r\n          </div>\r\n\r\n          <div class=\"row class\" style=\"text-align:center;\">{{s.typeName}}</div>\r\n          <div class=\"row\"><span class=\"badge\">{{s.questionLength}} Question(s)</span></div>\r\n          <hr class=\"style-line\">\r\n          <div class=\"row title\" style=\"text-align:center;\"><b>{{s.title}}</b></div>\r\n\r\n          <div class=\"row desc\" style=\"text-align:center;\"><span class=\"white-space\">{{s.description}}</span></div>\r\n\r\n          <hr class=\"style-line\">\r\n          <div class=\"row name\" style=\"text-align:center;\"><span class=\"glyphicon glyphicon-calendar\"></span>{{s.expiredAt | date}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"text-align: center\" *ngIf=\"(emptySurveys)&&(!loader)&&(currentPage==1)\"><b>No Survey is added to the View</b></div>\r\n    <div style=\"text-align: center\" *ngIf=\"(emptySurveys)&&(!loader)&&(currentPage!=1)\"><b>No More Survey is added to the View</b></div>    \r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <!-- <button (click)=\"previousSurvey()\" [disabled]=\"currentPage === 1\" type=\"button\" class=\"btn btn-primary\">Previous</button> -->\r\n    <button (click)=\"nextSurvey()\" type=\"button\" [disabled]=\"emptySurveys || noMore\" class=\"btn btn-primary\">Load More</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/survey/current/survey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_survey_service__ = __webpack_require__("../../../../../src/app/providers/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentSurveyComponent = (function () {
    function CurrentSurveyComponent(ss, router) {
        this.ss = ss;
        this.router = router;
        this.currentPage = 1;
        this.emptySurveys = false;
        this.noMore = false;
        this.loader = false;
    }
    CurrentSurveyComponent.prototype.ngOnInit = function () {
        this.getSurveys();
    };
    CurrentSurveyComponent.prototype.getSurveys = function () {
        var _this = this;
        this.loader = true;
        this.ss.getSurveys(this.currentPage).subscribe(function (res) {
            if (res.status == 204) {
                _this.emptySurveys = true;
                _this.loader = false;
                return;
            }
            _this.surveys = res;
            if (_this.surveys.length < 12)
                _this.noMore = true;
            else
                _this.noMore = false;
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    // public  previousSurvey() {
    //   delete this.surveys;
    //   this.currentPage -= 1;
    //   this.getSurveys();
    // }
    CurrentSurveyComponent.prototype.nextSurvey = function () {
        // delete this.surveys;
        this.currentPage += 1;
        this.getSurveys();
    };
    CurrentSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'current-survey',
            template: __webpack_require__("../../../../../src/app/component/survey/current/survey.html"),
            styles: [__webpack_require__("../../../../../src/app/component/survey/current/survey.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_survey_service__["a" /* SurveyService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CurrentSurveyComponent);
    return CurrentSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/survey/survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".survey > ul{\r\n  width: 100%;  \r\n}\r\n.survey > ul > li{\r\n  width:50%;\r\n}\r\n\r\n.survey > ul>li.active>a, .survey > ul>li.active>a:focus, .survey > ul>li.active>a:hover {\r\n    color: #f8f8f8;\r\n    cursor: pointer;\r\n    background-color: #337ab7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/survey/survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"survey\">\r\n  <!--<h1>Survey\r\n    <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/add-survey']\">\r\n    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n  </button>\r\n  </h1>-->\r\n\r\n  <ul class=\"nav nav-tabs\">\r\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/survey/current-survey']\">CURRENT</a></li>\r\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/survey/closed-survey']\">CLOSED</a></li>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/survey/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyComponent = (function () {
    function SurveyComponent(router) {
        this.router = router;
        this.router.navigate(["/survey/current-survey"]);
    }
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'survey',
            template: __webpack_require__("../../../../../src/app/component/survey/survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/survey/survey.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/survey/survey.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey_component__ = __webpack_require__("../../../../../src/app/component/survey/survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_survey__ = __webpack_require__("../../../../../src/app/component/survey/current/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__closed_survey__ = __webpack_require__("../../../../../src/app/component/survey/closed/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_add__ = __webpack_require__("../../../../../src/app/component/survey/add/add.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_survey_service__ = __webpack_require__("../../../../../src/app/providers/survey.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SurveyModule = (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__survey_component__["a" /* SurveyComponent */],
                        children: [
                            {
                                path: 'current-survey',
                                component: __WEBPACK_IMPORTED_MODULE_4__current_survey__["a" /* CurrentSurveyComponent */]
                            },
                            {
                                path: 'closed-survey',
                                component: __WEBPACK_IMPORTED_MODULE_5__closed_survey__["a" /* ClosedSurveyComponent */]
                            }
                        ]
                    },
                    {
                        path: 'add-survey',
                        component: __WEBPACK_IMPORTED_MODULE_6__add_add__["a" /* AddSurveyComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__add_add__["a" /* AddSurveyComponent */], __WEBPACK_IMPORTED_MODULE_1__survey_component__["a" /* SurveyComponent */], __WEBPACK_IMPORTED_MODULE_4__current_survey__["a" /* CurrentSurveyComponent */], __WEBPACK_IMPORTED_MODULE_5__closed_survey__["a" /* ClosedSurveyComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_survey_service__["a" /* SurveyService */]]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ })

});
//# sourceMappingURL=survey.module.chunk.js.map