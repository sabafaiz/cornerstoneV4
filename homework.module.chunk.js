webpackJsonp(["homework.module"],{

/***/ "../../../../../src/app/component/homework/add/add.html":
/***/ (function(module, exports) {

module.exports = "<!-- new code by saba -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-lg-12 col-md-12\">\r\n    <div class=\"card add-homework\">\r\n      <div class=\"row text-center\">\r\n        <loader [condition]=\"submitProgress\" class=\"centerLoader\"></loader>\r\n      </div>\r\n      <form [formGroup]=\"homework\" (ngSubmit)=\"submitHomework()\" novalidate>\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-title\">Create New Homework</h5>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"_location.back();\">\r\n                <span aria-hidden=\"true\">&times; </span>\r\n              </button>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"standardId\">Select Standard</label>\r\n            </div>\r\n            <div class=\"col-sm-8\" style=\"margin-left:6px;\">\r\n              <select class=\"form-control\" id=\"standardId\" name=\"standardId\" formControlName=\"standardId\" (ngModelChange)=\"getSubjects($event); \">\r\n                        <option selected=\"true\" disabled=\"true\" value=\"\">Select Standard</option>\r\n                        <option *ngFor=\"let a of standards\" [value]=\"a.id\" [attr.disabled] = \" a.id == -1 ? true : null\"> {{a.name}}</option>\r\n                      </select>\r\n              <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n              <div>\r\n                <div [hidden]=\"homework.controls.standardId.valid || homework.controls.standardId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"homework.value.standardId && homework.value.standardId >=0\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n              <label for=\"subjectId\">Select Subject</label>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\" id=\"subjectId\" name=\"subjectId\" formControlName=\"subjectId\">\r\n                    \r\n                    <option selected=\"true\" disabled=\"true\" value=\"null\">Select Subject</option>\r\n                          \r\n                          <option *ngIf=\"emptySubjects\" disabled>No Subjects are added. Try again later.</option>\r\n                          <option *ngFor=\"let bx of subjects\" [value]=\"bx.subjectId\" >{{bx.subjectName}}</option>\r\n                        </select>\r\n              <loader [condition]=\"subjectLoader\" class=\"dropdownLoader\"></loader>\r\n              <div>\r\n                <div [hidden]=\"homework.controls.subjectId.valid || homework.controls.subjectId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n                <label for=\"description\">Description</label>\r\n                <span class=\"badge\">{{2000 - homework.value.description.length}}</span>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n                <textarea class=\"form-control\" id=\"exampleTextarea\" name=\"description\" maxlength=\"2000\" formControlName=\"description\" rows=\"3\"></textarea>\r\n                <div [hidden]=\"homework.controls.description.untouched  ||homework.controls.description.valid ||homework.controls.description.pristine\"\r\n                  class=\"alert alert-warning\">This field is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n                <label for=\"date\">Due Date</label>  \r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n                <input class=\"form-control glyphicon glyphicon-calendar\" type=\"date\" max=\"2019-10-31\" displayFormat=\"DD MMM YYYY\" name=\"dueDate\"\r\n                formControlName=\"dueDate\" (change)=\"onDueDate($event)\" id=\"duedate\">\r\n              <span class=\"label label-danger\" *ngIf=\"invalidDate\">Please choose an upcoming date from the calendar.</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" style=\"margin-top:15px;\">\r\n            <div class=\"col-sm-2\">\r\n                <label>Attachment</label> &nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n                <input type=\"file\" style=\"color:transparent;\" [title]=\"noOfFiles\" class=\"form-control-file\" formControlName=\"file\" id=\"exampleInputFile\"\r\n                aria-describedby=\"fileHelp\" (change)=\"getFile($event)\" multiple>\r\n              <span *ngIf=\"maxfile\">* Max 5 files</span>\r\n              <ul class=\"file-list\" style=\"padding-left: 0px\">\r\n                <li style=\"list-style-type: none\" class=\"file-list-items\" *ngFor=\"let f of file\">{{f.name}} <span class=\"glyphicon glyphicon-remove\" (click)=\"removeFile(f)\"></span></li>\r\n                <span class=\"small\">(Optional)</span>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-success btn-rose\" [disabled]=\"!homework.valid || maxfile\"><i class=\"fa fa-check\"></i></button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--MODAL OF COMFORAMTION START---@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\r\n<div class=\"modal fade\" id=\"homeworkModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">Homework Added</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          You have successfully added a new Homework.\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" [routerLink]=\"['/homework/current-homework']\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add More</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--MODAL OF COMFORAMTION END---@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->\r\n\r\n<!-- *********************************MODAL OF ERROR START---******************************* ***** -->\r\n\r\n<div class=\"modal fade\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"exampleModalLabel\">File Type Error</h4>\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      Kindly upload an image file.\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<!-- *********************************MODAL OF ERROR END---******************************* ***** -->\r\n\r\n<!-- new code by saba -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"panel panel-default\"> -->\r\n  <!-- Default panel contents -->\r\n  <!-- <div class=\"row text-center\">\r\n    <loader [condition]=\"submitProgress\" class=\"centerLoader\"></loader>\r\n  </div>\r\n  <div class=\"panel-heading\">Create New Homework\r\n\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <form name=\"homework\" [formGroup]=\"homework\" (ngSubmit)=\"submitHomework()\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"standardId\">Select Standard</label>\r\n        <select class=\"form-control\" id=\"standardId\" name=\"standardId\" formControlName=\"standardId\" (ngModelChange)=\"getSubjects($event); \">\r\n      <option selected=\"true\" disabled=\"true\" value=\"\">Select Standard</option>\r\n      <option *ngFor=\"let a of standards\" [value]=\"a.id\" [attr.disabled] = \" a.id == -1 ? true : null\"> {{a.name}}</option>\r\n    </select>\r\n        <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n        <div>\r\n          <div [hidden]=\"homework.controls.standardId.valid || homework.controls.standardId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"homework.value.standardId && homework.value.standardId >=0\">\r\n        <label for=\"subjectId\">Select Subject</label>\r\n        <select class=\"form-control\" id=\"subjectId\" name=\"subjectId\" formControlName=\"subjectId\">\r\n\r\n      <option selected=\"true\" disabled=\"true\" value=\"null\">Select Subject</option>\r\n      \r\n      <option *ngIf=\"emptySubjects\" disabled>No Subjects are added. Try again later.</option>\r\n      <option *ngFor=\"let bx of subjects\" [value]=\"bx.subjectId\" >{{bx.subjectName}}</option>\r\n    </select>\r\n        <loader [condition]=\"subjectLoader\" class=\"dropdownLoader\"></loader>\r\n        <div>\r\n          <div [hidden]=\"homework.controls.subjectId.valid || homework.controls.subjectId.untouched\" class=\"alert alert-warning\">This field is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <span class=\"badge\">{{2000 - homework.value.description.length}}</span>\r\n        <textarea class=\"form-control\" id=\"exampleTextarea\" name=\"description\" maxlength=\"2000\" formControlName=\"description\" rows=\"3\"></textarea>\r\n        <div [hidden]=\"homework.controls.description.untouched  ||homework.controls.description.valid ||homework.controls.description.pristine\"\r\n          class=\"alert alert-warning\">This field is required</div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"date\">Due Date</label>\r\n            <input class=\"form-control glyphicon glyphicon-calendar\" type=\"date\" max=\"2019-10-31\" displayFormat=\"DD MMM YYYY\" name=\"dueDate\"\r\n              formControlName=\"dueDate\" (change)=\"onDueDate($event)\" id=\"duedate\">\r\n            <span class=\"label label-danger\" *ngIf=\"invalidDate\">Please choose an upcoming date from the calendar.</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Attachment</label> &nbsp;&nbsp;<span class=\"small\">(Optional)</span>\r\n            <input type=\"file\" style=\"color:transparent;\" [title]=\"noOfFiles\" class=\"form-control-file\" formControlName=\"file\" id=\"exampleInputFile\"\r\n              aria-describedby=\"fileHelp\" (change)=\"getFile($event)\" multiple>\r\n            <span *ngIf=\"maxfile\">* Max 5 files</span>\r\n            <ul class=\"file-list\" style=\"padding-left: 0px\">\r\n              <li style=\"list-style-type: none\" class=\"file-list-items\" *ngFor=\"let f of file\">{{f.name}} <span class=\"glyphicon glyphicon-remove\" (click)=\"removeFile(f)\"></span></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!homework.valid || maxfile\">Submit</button>\r\n\r\n    </form>\r\n  </div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/component/homework/add/add.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homework_service__ = __webpack_require__("../../../../../src/app/providers/homework.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeworkAddComponent = (function () {
    function HomeworkAddComponent(homeworkService, commonService, _location, router) {
        this.homeworkService = homeworkService;
        this.commonService = commonService;
        this._location = _location;
        this.router = router;
        this.title = "New Homework";
        this.submitProgress = false;
        this.invalidDate = false;
        this.standards = [];
        this.subjects = [];
        this.noOfFiles = 0;
        this.emptySubjects = true;
        this.loader = false;
        this.standardLoader = false;
        this.subjectLoader = false;
        this.maxfile = false;
        this.file = [];
    }
    HomeworkAddComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getStandards();
    };
    HomeworkAddComponent.prototype.getFile = function (event) {
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
    HomeworkAddComponent.prototype.removeFile = function (f) {
        var index = this.file.indexOf(f);
        this.file.splice(index, 1);
        var noOfFiles = this.file.length;
        if (noOfFiles <= 5) {
            this.maxfile = false;
        }
        this.noOfFiles = noOfFiles;
    };
    HomeworkAddComponent.prototype.onDueDate = function (e) {
        if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
            // alert("");
            this.homework.controls['dueDate'].patchValue(this.commonService.getTomorrow());
        }
        else {
            this.invalidDate = false;
        }
    };
    HomeworkAddComponent.prototype.initForm = function () {
        this.homework = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            standardId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            subjectId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            dueDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.commonService.getTomorrow(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('')
        });
    };
    HomeworkAddComponent.prototype.getSubjects = function (a) {
        var _this = this;
        this.subjectLoader = true;
        this.subjects = [];
        this.homework.controls["subjectId"].reset();
        this.homeworkService.getSubjects(a).subscribe(function (res) {
            if (res.status == 204) {
                _this.emptySubjects = true;
                _this.subjects = [];
                _this.standardLoader = false;
                return;
            }
            _this.emptySubjects = false;
            _this.subjects = res;
            _this.subjectLoader = false;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    HomeworkAddComponent.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.homeworkService.getStandards().subscribe(function (res) {
            _this.standards = res;
            _this.commonService.storeData("standards", res);
            _this.standardLoader = false;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    HomeworkAddComponent.prototype.submitHomework = function () {
        this.submitProgress = true;
        var formData = new FormData();
        formData.append('description', this.homework.value['description']);
        formData.append('standardId', this.homework.value['standardId']);
        formData.append('subjectId', this.homework.value['subjectId']);
        formData.append('dueDate', this.homework.value['dueDate']);
        for (var i = 0; i < this.file.length; i++) {
            formData.append('files', this.file[i]);
        }
        console.log(formData);
        this.saveHomework(formData);
        // this.submitProgress = false;
    };
    // public  presentActionSheet() {
    //   let actionSheet = this.actionSheetCtrl.create({
    //     title: 'Are you sure you want to submit?',
    //     buttons: [{
    //       text: 'YES',
    //       role: 'submit',
    //       handler: () => {
    //         this.saveHomework();
    //       }
    //     }, {
    //       text: 'CANCEL',
    //       role: 'cancel',
    //       handler: () => {
    //       }
    //     }]
    //   });
    //   actionSheet.present();
    // }
    HomeworkAddComponent.prototype.saveHomework = function (formData) {
        var _this = this;
        this.submitProgress = true;
        this.homeworkService.PostHomework(formData).subscribe(function (data) {
            _this.initForm();
            _this.submitProgress = false;
            $('#homeworkModal').modal('show');
        }, function (err) {
            // this.submitProgress = false;
            _this.router.navigate(['/error']);
        });
        this.file = null;
    };
    HomeworkAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'homework-add',
            template: __webpack_require__("../../../../../src/app/component/homework/add/add.html"),
            styles: [__webpack_require__("../../../../../src/app/component/homework/homework.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homework_service__["a" /* HomeworkService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], HomeworkAddComponent);
    return HomeworkAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/homework/current/homework.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\">\r\n  <!-- <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\" id=\"accordion\">\r\n      <span>\r\n        <i class=\"material-icons add-icon\" [routerLink]=\"['/homework/homework-add']\">alarm_add</i>\r\n      </span>\r\n\r\n      <br>\r\n      <div class=\"row text-center\">\r\n        <loader [condition]=\"loader\"></loader>\r\n      </div>\r\n      <div style=\"margin-top: 2%;padding-top: 1%;\">\r\n        <div *ngIf=\"!EmptyHomeworks\">\r\n          <div class=\"container card\" *ngFor=\"let a of homeworks; let i = index;\">\r\n            <div class=\"row\">\r\n              <i class=\"material-icons\" (click)=\"seletToExpand(a,i)\" data-toggle=\"modal\" data-target=\"#myModal-card\" style=\"margin-bottom:10px;\">open_with</i>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"download-image\" *ngIf=\"a.files\">\r\n                <span>\r\n                  <img class=\"image\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) != '.pdf'\" [attr.src]=\"fileUrl + a.files[0].fileTimestamp\">\r\n                  <img class=\"image\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) == '.pdf'\" src=\"assets/pdf.png\">\r\n                </span>\r\n                <div class=\"edit-image\">\r\n                  <a [attr.href]=\"fileUrl + a.files[0].fileTimestamp\">\r\n                    <i class=\"fa fa-download fa-lg\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <span>\r\n                  <img class=\"image\" *ngIf=\"!a.files\" src=\"assets/preview.png\" alt=\"No Preview Avalable\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row class\">\r\n              <label class=\"heading\">For</label>\r\n              <span class=\"class\">{{ a.standardName }}</span>\r\n            </div>\r\n            <hr class=\"style-line\">\r\n            <div class=\"row title\" style=\"text-align:center\">\r\n              <label>Subject:&nbsp;</label>\r\n              <span>{{a.subjectName}}</span>\r\n            </div>\r\n            <div class=\"row\">\r\n              <label class=\"Due Date :\"></label>\r\n              <span class=\"badge\" style=\"background-color:gray\">Due Date: {{a.dueDate|date}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row \" style=\"text-align: center\" *ngIf=\"(EmptyHomeworks)&&(!loader)&&(currentPage==1)\">\r\n        <b>No Homeworks are added to the view.</b>\r\n      </div>\r\n      <div class=\"row \" style=\"text-align: center\" *ngIf=\"(EmptyHomeworks)&&(!loader)&&(currentPage!=1)\">\r\n        <b>No more Homeworks are added to the view.</b>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"panel-footer\">\r\n      <div class=\"text-center\">\r\n        <button type=\"button\" (click)=\"nextHomework()\" *ngIf=\"!EmptyHomeworks && !noMore\" class=\"btn btn-primary\">Load More</button>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"card table-card\">\r\n    <div class=\"card-header\">\r\n      Homeworks\r\n      <a [routerLink]=\"['/homework/homework-add']\">\r\n        <i class=\"material-icons pull-right\">alarm_add</i>\r\n      </a>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <table class=\"table table-hover\">\r\n        <thead style=\"color:#9c27b0\">\r\n          <tr>\r\n            <th>Created At</th>\r\n            <th>Attachments</th>\r\n            <th>Subject</th>\r\n            <th>Standard</th>\r\n            <th>Due Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let a of homeworks; let i = index;\">\r\n          <tr (click)=\"seletToExpand(a,i)\" data-toggle=\"modal\" data-target=\"#myModal-card\">\r\n            <td>{{a.createdAt|date}}</td>\r\n            <td style=\"padding-bottom: 2px;padding-top: 2px;\">\r\n              <!-- <div class=\"files\" *ngIf=\"a.files\">\r\n                <span *ngFor=\"let file of a.files;let m=index;\">\r\n                  <img [style.margin-left]=\"m?'-35px':'0px'\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) != '.pdf'\"\r\n                    [attr.src]=\"fileUrl + file.fileTimestamp\">\r\n                  <img [style.margin-left]=\"m?'-35px':'0px'\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) == '.pdf'\"\r\n                    src=\"assets/pdf.png\">\r\n                </span>\r\n                <span class=\"files\" *ngIf=\"!a.files\">\r\n                  <img src=\"assets/preview.png\" alt=\"No Preview Avalable\">\r\n                </span>                \r\n              </div> -->\r\n              <span *ngIf=\"!a.files\">None</span>\r\n              <span *ngIf=\"a.files\">{{a.fileCount}} Files</span>\r\n            </td>\r\n            <td>{{a.subjectName}}</td>\r\n            <td>{{ a.standardName }}</td>\r\n            <td>{{a.dueDate|date}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot *ngIf=\"!homeworks.length\">\r\n          <tr>\r\n            <td colspan=\"5\">\r\n              <div class=\"text-center\">\r\n                No homeworks are added.\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"myModal-card\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\">\r\n    <div class=\"modal-dialog model-lg\" role=\"document\">\r\n      <div class=\"modal-content\" *ngIf=\"selectedHomework\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"gridSystemModalLabel\">{{selectedHomework.subjectName}}</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <!-- <div class=\"modal-body\">\r\n        <div class=\"modal-heading\">\r\n          <div class=\"row\">\r\n            <div style=\"top:20px\" class=\"download-image-modal1\">\r\n              <span *ngIf=\"selectedHomework.files && selectedHomework.files[imgindex-1]\">\r\n                <img *ngIf=\"selectedHomework.files[imgindex-1].fileOriginalName.substr(selectedHomework.files[imgindex-1].fileOriginalName.length - 4) != '.pdf'\"\r\n                  style=\"float:left;margin-right: 12px\" (click)=\"swipe(-1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedHomework.files[imgindex-1].fileTimestamp\">\r\n                <img *ngIf=\"selectedHomework.files[imgindex-1].fileOriginalName.substr(selectedHomework.files[imgindex-1].fileOriginalName.length - 4) == '.pdf'\"\r\n                  style=\"float:left;margin-right: 12px\" (click)=\"swipe(-1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n              </span>\r\n\r\n              <span *ngIf=\"imgindex==0\" style=\"float:left;top:83px;width:149px;height:16px;margin-right:12px\"></span>\r\n              <div class=\"download-image-modal\" style=\"float:left\" *ngIf=\"selectedHomework.files\">\r\n\r\n                <span>\r\n                  <img *ngIf=\"selectedHomework.files[imgindex].fileOriginalName.substr(selectedHomework.files[imgindex].fileOriginalName.length - 4) != '.pdf'\"\r\n                    class=\"image1\" [attr.src]=\"fileUrl + selectedHomework.files[imgindex].fileTimestamp\">\r\n                  <img *ngIf=\"selectedHomework.files[imgindex].fileOriginalName.substr(selectedHomework.files[imgindex].fileOriginalName.length - 4) == '.pdf'\"\r\n                    class=\"image1\" src=\"assets/pdf1.jpg\">\r\n                </span>\r\n                <div class=\"edit-image-modal\">\r\n                  <a [attr.href]=\"fileUrl + selectedHomework.files[imgindex].fileTimestamp\">\r\n                    <i class=\"fa fa-download fa-lg\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <span *ngIf=\" selectedHomework.files&&imgindex == selectedHomework.files.length-1 \" style=\"float:left;top:83px;width:149px;height:16px;margin-right:12px\"></span>\r\n\r\n\r\n              <span *ngIf=\"selectedHomework.files&&selectedHomework.files[imgindex+1]\">\r\n\r\n                <img *ngIf=\"selectedHomework.files[imgindex+1].fileOriginalName.substr(selectedHomework.files[imgindex+1].fileOriginalName.length - 4) != '.pdf'\"\r\n                  style=\"float:left;margin-left:12px;\" (click)=\"swipe(1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedHomework.files[imgindex+1].fileTimestamp\">\r\n\r\n                <img *ngIf=\"selectedHomework.files[imgindex+1].fileOriginalName.substr(selectedHomework.files[imgindex+1].fileOriginalName.length - 4) == '.pdf'\"\r\n                  style=\"float:left;margin-left:12px;\" (click)=\"swipe(1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n              </span>\r\n            </div>\r\n            <div *ngIf=\"!selectedHomework.files\">\r\n              <img class=\"image1\" src=\"assets/preview.png\" alt=\"No Preview Avalable\">\r\n            </div>\r\n            <br *ngIf=\"selectedHomework.files\">\r\n            <br *ngIf=\"selectedHomework.files\">\r\n            <div style=\"margin:auto;\">\r\n              <div style=\"display: inline;\" *ngFor=\" let x of selectedHomework.files ; let i=index \">\r\n                <span *ngIf=\"i!=imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-empty-dot\"></span>\r\n                <span *ngIf=\"i==imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-full-dot\"></span>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <div class=\" row modal-class\" style=\"font-size:15px;\">\r\n          <label>For : </label>\r\n          <span>{{selectedHomework.standardName}}</span>\r\n        </div>\r\n        <div style=\"padding: 0px 50px 0px 50px;\" *ngIf=\"selectedHomework.files\">\r\n          <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n              <li data-target=\"#demo\" [attr.data-slide-to]=\"i\" [ngClass]=\"i?'':'active'\" *ngFor=\" let x of selectedHomework.files ; let i=index\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\" role=\"listbox\">\r\n              <div class=\"carousel-item\" [ngClass]=\"k?'':'active'\" *ngFor=\"let x of selectedHomework.files ; let k=index\">\r\n                <img [attr.src]=\"fileUrl + selectedHomework.files[k].fileTimestamp\" *ngIf=\"selectedHomework.files[k].fileOriginalName.substr(selectedHomework.files[k].fileOriginalName.length - 4) != '.pdf'\">\r\n                <img src=\"assets/pdf1.jpg\" *ngIf=\"selectedHomework.files[k].fileOriginalName.substr(selectedHomework.files[k].fileOriginalName.length - 4) == '.pdf'\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>\r\n                    <a [attr.href]=\"fileUrl + selectedHomework.files[k].fileTimestamp\">Download</a>\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n              <span class=\"carousel-control-prev-icon\"></span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n              <span class=\"carousel-control-next-icon\"></span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n        <div class=\"modal-body bold\" style=\"margin-left: 15px;margin-right: 15px;\">\r\n          <div class=\"form-group\">\r\n            <label>Standard : </label>\r\n            <span>{{selectedHomework.standardName}}</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Created At :</label>\r\n            <span>{{selectedHomework.createdAt | date}}</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Due date :</label>\r\n            <span>{{selectedHomework.dueDate | date}}</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Description :</label>\r\n            <span style=\"white-space: pre-wrap;text-align: justify;\">{{selectedHomework.description}}</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Attachment Files :</label>\r\n            <ul style=\"list-style: none;text-align: left;padding-left: 10px;\">\r\n              <li *ngFor=\" let x of selectedHomework.files ; let i=index\">\r\n                <a [attr.href]=\"fileUrl + selectedHomework.files[i].fileTimestamp\">{{x.fileOriginalName}}</a>\r\n              </li>\r\n              <li *ngIf=\"!selectedHomework.files\">No Files are added</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-primary load-btn\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/homework/current/homework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentHomework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homework_service__ = __webpack_require__("../../../../../src/app/providers/homework.service.ts");
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





var CurrentHomework = (function () {
    function CurrentHomework(homeworkService, ls, router, barLoaderService) {
        this.homeworkService = homeworkService;
        this.ls = ls;
        this.router = router;
        this.barLoaderService = barLoaderService;
        this.title = "Homework";
        this.icon = "book";
        this.currentPage = 1;
        this.homeworks = [];
        this.loader = false;
        this.EmptyHomeworks = true;
        this.imgindex = 0;
        this.noMore = true;
        this.ls.setLoader(false);
    }
    CurrentHomework.prototype.ngOnInit = function () {
        this.fileUrl = localStorage.getItem("fileUrl") + "/";
        this.getHomeworks();
    };
    CurrentHomework.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    CurrentHomework.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    CurrentHomework.prototype.getHomeworks = function () {
        var _this = this;
        // this.nl.showLoader();
        this.loader = true;
        this.homeworkService.getHomework(this.currentPage).subscribe(function (data) {
            _this.onSuccess(data);
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    CurrentHomework.prototype.onSuccess = function (res) {
        // this.nl.hideLoader();
        this.loader = false;
        if (res.status === 204) {
            this.EmptyHomeworks = true;
        }
        else {
            this.EmptyHomeworks = false;
            if (this.currentPage == 1)
                this.homeworks = res;
            else
                this.homeworks = this.homeworks.concat(res);
            if (res.length < 12)
                this.noMore = true;
            else
                this.noMore = false;
        }
    };
    CurrentHomework.prototype.onError = function (err) {
        this.loader = false;
        this.router.navigate(['/error']);
    };
    // public  previousHomework() {
    //   delete this.homeworks;
    //   this.currentPage -= 1;
    //   this.getHomeworks();
    // }
    CurrentHomework.prototype.nextHomework = function () {
        // delete this.homeworks;
        this.currentPage += 1;
        this.getHomeworks();
    };
    CurrentHomework.prototype.swipe = function (a) {
        console.log(a);
        this.imgindex += a;
    };
    CurrentHomework.prototype.swipebydots = function (a) {
        console.log(a);
        this.imgindex = a;
    };
    CurrentHomework.prototype.seletToExpand = function (a, i) {
        this.selectedHomework = a;
        console.log("index :" + this.imgindex);
        this.imgindex = 0;
        console.log("index :" + this.imgindex);
        if (a.files) {
            this.dispurl = this.fileUrl + a.files[0].fileTimestamp;
        }
        console.log(this.dispurl);
        console.log(this.selectedHomework);
    };
    CurrentHomework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'current-homework',
            template: __webpack_require__("../../../../../src/app/component/homework/current/homework.html"),
            styles: [__webpack_require__("../../../../../src/app/component/homework/homework.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homework_service__["a" /* HomeworkService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], CurrentHomework);
    return CurrentHomework;
}());



/***/ }),

/***/ "../../../../../src/app/component/homework/homework.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n  font-weight: bold;\r\n  letter-spacing: 0.1em;\r\n}\r\n.homework ul{\r\n  width: 100%;  \r\n}\r\n.homework  ul li{\r\n  width:50%;\r\n}\r\n.image1{\r\n  margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 275px;\r\n    height: 180px;\r\n    border-style: solid;\r\n     \r\n}\r\n.sideimage{\r\n    width: 149px;\r\n    height: 180px;\r\n    -webkit-filter:blur(1px);\r\n            filter:blur(1px);  \r\n}\r\n\r\n.homework > ul>li.active>a, .homework > ul>li.active>a:focus, .homework > ul>li.active>a:hover {\r\n    color: #f8f8f8;\r\n    cursor: pointer;\r\n    background-color: #337ab7;\r\n}\r\n\r\nform{\r\n  background-color: white;\r\n}\r\n\r\n.form-group{\r\n    border-style: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.exampleInputFile{\r\n background-color:#ea212e;\r\n padding: 10px; \r\n border-radius: 5px;\r\n color: white;\r\n font-size: inherit;\r\n\r\n}\r\n.exampleInputFile:hover{\r\n  background-color:#c51e28;\r\n  cursor: pointer;\r\n}\r\n\r\n.custom{\r\n  padding-left: 5px;\r\n  font-size: 15px;\r\n}\r\n/*card-modal start*/\r\n\r\n.modal-heading,.modal-class{\r\n    background-color: #3a3838;\r\n    color: white;\r\n}\r\n\r\n/* #myModal-card{\r\n  text-align: center;\r\n} */\r\n\r\n.modal-date{\r\n  text-align: center;\r\n}\r\n\r\n.modal-description{\r\n  padding: 2px 30px;\r\n}\r\n\r\n.modal-body{\r\n  padding-left:0px !important;\r\n  padding-right:0px !important;\r\n}\r\n/*card-modal end*/\r\n\r\n.alternate-img{\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n.standardLoad{\r\n  position: absolute;\r\n  top: 27%;\r\n}\r\n\r\n\r\n/* new code by saba */\r\n\r\n.nav-option  li{\r\n  padding: 10px;\r\n  background:white;\r\n  text-align: center;\r\n  /* box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28),\r\n   0 4px 20px 0px rgba(0, 0, 0, 0.12), \r\n   0 7px 8px -5px rgba(156, 39, 176, 0.2); */\r\n   border-radius: 3px;\r\n   border-top-left-radius: 0px;\r\n   border-bottom-left-radius: 0px;\r\n   border-bottom-right-radius: 0px;\r\n   border-top-right-radius: 0px;\r\n   border:1px solid black;\r\n   color:black;\r\n   cursor: pointer;\r\n}\r\n\r\n.nav-option li a i{\r\n  margin: -1px 5px 0 0;\r\n  vertical-align: middle;\r\n  padding: 0 10px;\r\n}\r\n.nav-option li:focus {\r\n  outline: -webkit-focus-ring-color auto 0px!important;\r\n}\r\n.nav-option li a:focus, .nav-option li a:hover{\r\n  color: black!important;\r\n}\r\n\r\n.nav-option li a{\r\n  background: transparent;\r\n  box-shadow: 0px;\r\n  text-decoration: none;\r\n  box-shadow: 0 0 0 0 rgba(156, 39, 176, 0.28),\r\n  0 0 0 0 rgba(0, 0, 0, 0.12), \r\n  0 0 0 0 rgba(156, 39, 176, 0.2);\r\n  color:black;\r\n}\r\n\r\n.activeList{\r\n  background:#9c27b0!important;\r\n  box-shadow:  0 12px 20px -10px rgba(156, 39, 176, 0.28),\r\n  0 4px 20px 0px rgba(0, 0, 0, 0.12), \r\n  0 7px 8px -5px rgba(156, 39, 176, 0.2)!important;\r\n  color:white!important;\r\n  }\r\n\r\n  .activeList a{\r\n    color:white!important;\r\n  }\r\n  \r\n  .activeList:focus{\r\n    outline: -webkit-focus-ring-color auto 0px!important;\r\n  }\r\n\r\n\r\n\r\n/* new code by saba */\r\n\r\n\r\n/* add homework css start */\r\n.add-homework{\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 25px 0;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n  border-radius: 6px;\r\n  color: rgba(0,0,0,.87);\r\n  background: #fff;\r\n}\r\n\r\n.add-homework .card-header\r\n {\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n  display: inline-block;\r\n  color: #fff;\r\n  margin: -35px -6px 0;\r\n  border-radius: 3px;\r\n  padding: 12px;\r\n  background-color: #999;\r\n  position: relative;\r\n  z-index:2;\r\n  float: left;\r\n}\r\n\r\n\r\n\r\n.add-homework .card-title{\r\n  margin-top: 0;\r\n  margin-bottom: 3px;\r\n  color: #fff;\r\n  font-family: Roboto,Helvetica,Arial,sans-serif;\r\n  font-weight: 300;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.add-homework .card-content{\r\n  padding: 30px 20px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n.pull-right{\r\n  color:black;\r\n}\r\n\r\n.card-footer{\r\n  margin:20px 0px -30px;\r\n  padding-top: 10px;\r\n  text-align: center!important;\r\n  background-color: transparent;\r\n   border-top: 0px solid rgba(0,0,0,.125);\r\n}\r\n\r\n\r\n.btn-rose{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  background: linear-gradient(60deg,#ec407a,#d81b60);\r\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\r\n   border: none;\r\n   border-radius: 50%;\r\n   position: relative;\r\n   padding:  9px 19px;\r\n   margin: -33px -15px;\r\n   font-size: 20px;\r\n   float: right;\r\n   font-weight: 300;\r\n   width:65px;\r\n   height: 65px;\r\n}\r\n\r\n\r\n.btn-success[disabled]{\r\n  background:linear-gradient(60deg,#ec407a,#d81b60);\r\n  color: gray!important; \r\n  opacity: 1;\r\n}\r\n\r\nform{\r\n  background-color: #ffffff00;\r\n}\r\n\r\n.add-icon{\r\n    position: absolute;\r\n    right: 27px;\r\n    font-size: 32px;\r\n    margin-top: 13px;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-icon:focus {\r\n    outline: -webkit-focus-ring-color auto 0px;\r\n}\r\n\r\n\r\n/* add homework css end */\r\n\r\n/* saba's styling*/\r\n.table-card{\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 25px 0;\r\n  margin-top: 60px;\r\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n  border-radius:3px!important;\r\n  color: rgba(0, 0, 0, 0.87)!important;\r\n  background: #fff;\r\n  font-weight: 300;\r\n  padding: 0px;\r\n  }\r\n  \r\n  .table-card .card-header{\r\n      background:    linear-gradient(60deg, #ab47bc, #8e24aa);\r\n        box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), \r\n        0 4px 20px 0px rgba(0, 0, 0, 0.12)\r\n        , 0 7px 8px -5px rgba(156, 39, 176, 0.2);\r\n        color: #FFFFFF;\r\n        margin: -40px 15px 0;\r\n        border-radius:3px!important;\r\n        padding: 15px;\r\n    }\r\n    .table-card .card-header i{\r\n      color: #FFFFFF;\r\n    }\r\n  \r\n    .files{\r\n      position: relative;\r\n      text-align: center;\r\n    }\r\n    .files img{\r\n      height: 50px;\r\n      width: 50px;\r\n      border-radius: 50%;\r\n      border: 1px solid #9128ac;\r\n    }\r\n\r\n.no-homework{\r\n  padding: 10px;\r\n}\r\n\r\n.modal-header .close{\r\n  color:white;\r\n}\r\n\r\n.modal-header{\r\n  background:#9c27b0!important; \r\n  color:white;\r\n}\r\n\r\n.carousel-inner img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.bold label{\r\n  font-weight: bold;\r\n}\r\n\r\n.table-hover td{\r\n  cursor: pointer;\r\n}\r\n.load-btn{\r\n  background: #9c27b0;\r\n  border-color:#9c27b0; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/homework/homework.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homework\">\r\n<div class=\"col-sm-12 col-lg-12 col-md-12\">\r\n  <ul class=\"nav nav-option\">\r\n    <li routerLinkActive=\"activeList\" [routerLink]=\"['/homework/current-homework']\"> <a>CURRENT</a></li>\r\n    <li routerLinkActive=\"activeList\" [routerLink]=\"['/homework/passed-homework']\" > <a>PAST</a></li>\r\n  </ul>\r\n</div>\r\n  <div class=\"tab-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/homework/homework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeworkComponent = (function () {
    function HomeworkComponent(ls) {
        this.ls = ls;
        this.ls.setLoader(false);
    }
    HomeworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'homework',
            template: __webpack_require__("../../../../../src/app/component/homework/homework.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/homework/homework.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_loaderstop_service__["a" /* LoaderStop */]])
    ], HomeworkComponent);
    return HomeworkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/homework/homework.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworkModule", function() { return HomeworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homework_component__ = __webpack_require__("../../../../../src/app/component/homework/homework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_homework__ = __webpack_require__("../../../../../src/app/component/homework/current/homework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__passed_homework__ = __webpack_require__("../../../../../src/app/component/homework/passed/homework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_add__ = __webpack_require__("../../../../../src/app/component/homework/add/add.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_homework_service__ = __webpack_require__("../../../../../src/app/providers/homework.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeworkModule = (function () {
    function HomeworkModule() {
    }
    HomeworkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    { path: '', redirectTo: 'current-homework', pathMatch: 'full' },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__homework_component__["a" /* HomeworkComponent */],
                        children: [
                            {
                                path: 'current-homework',
                                component: __WEBPACK_IMPORTED_MODULE_4__current_homework__["a" /* CurrentHomework */]
                            },
                            {
                                path: 'passed-homework',
                                component: __WEBPACK_IMPORTED_MODULE_5__passed_homework__["a" /* PassedHomework */]
                            }
                        ]
                    },
                    {
                        path: 'homework-add',
                        component: __WEBPACK_IMPORTED_MODULE_6__add_add__["a" /* HomeworkAddComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__add_add__["a" /* HomeworkAddComponent */], __WEBPACK_IMPORTED_MODULE_1__homework_component__["a" /* HomeworkComponent */], __WEBPACK_IMPORTED_MODULE_4__current_homework__["a" /* CurrentHomework */], __WEBPACK_IMPORTED_MODULE_5__passed_homework__["a" /* PassedHomework */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_homework_service__["a" /* HomeworkService */]]
        })
    ], HomeworkModule);
    return HomeworkModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/homework/passed/homework.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\">\r\n  <!-- <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\" id=\"accordion\">\r\n      <br>\r\n      <div class=\"row text-center\">\r\n        <loader [condition]=\"loader\"></loader>\r\n      </div>\r\n      <div style=\"margin-top: 2%;padding-top: 1%;\">\r\n        <div class=\"container card\" *ngFor=\"let a of homeworks; let i = index;\">\r\n          <div class=\"row\">\r\n            <i class=\"material-icons\" (click)=\"seletToExpand(a,i)\" data-toggle=\"modal\" data-target=\"#myModal-card\" style=\"margin-bottom:10px;\">open_with</i>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"download-image\" *ngIf=\"a.files\">\r\n              <span>\r\n                <img class=\"image\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) != '.pdf'\" [attr.src]=\"fileUrl + a.files[0].fileTimestamp\">\r\n                <img class=\"image\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) == '.pdf'\" src=\"assets/pdf.png\">\r\n              </span>\r\n              <div class=\"edit-image\">\r\n                <a [attr.href]=\"fileUrl + a.files[0].fileTimestamp\">\r\n                  <i class=\"fa fa-download fa-lg\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <span>\r\n                <img class=\"image\" *ngIf=\"!a.files\" src=\"assets/preview.png\" alt=\"No Preview Avalable\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row class\">\r\n            <label class=\"heading\">For</label>\r\n            <span class=\"class\">{{ a.standardName }}</span>\r\n          </div>\r\n          <hr class=\"style-line\">\r\n          <div class=\"row title\" style=\"text-align:center\">\r\n            <label>Subject:&nbsp;</label>\r\n            <span>{{a.subjectName}}</span>\r\n          </div>\r\n          <div class=\"row\">\r\n            <label class=\"Due Date :\"></label>\r\n            <span class=\"badge\" style=\"background-color:gray\">Due Date: {{a.dueDate |date}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row \" style=\"text-align: center\" *ngIf=\"(EmptyHomeworks)&&(!loader)&&(currentPage==1)\">\r\n        <b>No Homeworks are added to the view.</b>\r\n      </div>\r\n      <div class=\"row \" style=\"text-align: center\" *ngIf=\"(EmptyHomeworks)&&(!loader)&&(currentPage!=1)\">\r\n        <b>No more Homeworks are added to the view.</b>\r\n      </div>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n      <div class=\"text-center\">\r\n        <button type=\"button\" (click)=\"nextHomework()\" *ngIf=\"!EmptyHomeworks && !noMore\" class=\"btn btn-primary\">Load More</button>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n<div class=\"card table-card\">\r\n  <div class=\"card-header\">\r\n    Old Homeworks\r\n    <!-- <a [routerLink]=\"['/homework/homework-add']\">\r\n      <i class=\"material-icons pull-right\">alarm_add</i>\r\n    </a> -->\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <table class=\"table table-hover\">\r\n      <thead style=\"color:#9c27b0\">\r\n        <tr>\r\n          <th>Created At</th>\r\n          <th>Attachments</th>\r\n          <th>Subject</th>\r\n          <th>Standard</th>\r\n          <th>Due Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let a of homeworks; let i = index;\">\r\n        <tr (click)=\"seletToExpand(a,i)\" data-toggle=\"modal\" data-target=\"#myModal-card\">\r\n          <td>{{a.createdAt|date}}</td>\r\n          <td style=\"padding-bottom: 2px;padding-top: 2px;\">\r\n            <!-- <div class=\"files\" *ngIf=\"a.files\">\r\n              <span *ngFor=\"let file of a.files;let m=index;\">\r\n                <img [style.margin-left]=\"m?'-35px':'0px'\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) != '.pdf'\" [attr.src]=\"fileUrl + file.fileTimestamp\">\r\n                <img [style.margin-left]=\"m?'-35px':'0px'\" *ngIf=\"a.files[0].fileOriginalName.substr(a.files[0].fileOriginalName.length - 4) == '.pdf'\" src=\"assets/pdf.png\">\r\n              </span>\r\n              <span class=\"files\" *ngIf=\"!a.files\">\r\n                <img src=\"assets/preview.png\" alt=\"No Preview Avalable\" >\r\n              </span>\r\n            </div>    -->\r\n            <span *ngIf=\"!a.files\">None</span>\r\n            <span *ngIf=\"a.files\">{{a.fileCount}} Files</span> \r\n          </td>\r\n          <td>{{a.subjectName}}</td>\r\n          <td>{{ a.standardName }}</td>\r\n          <td>{{a.dueDate|date}}</td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot *ngIf=\"!homeworks\">\r\n        <tr>\r\n          <td colspan=\"5\">\r\n            <div class=\"text-center\"  >\r\n              No homeworks are added.\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>\r\n  \r\n</div>\r\n\r\n<div id=\"myModal-card\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\" *ngIf=\"selectedHomework\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"gridSystemModalLabel\">{{selectedHomework.subjectName}}</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body bold\" style=\"margin-left: 15px;margin-right: 15px;\">\r\n        <div class=\"form-group\">\r\n          <label>Standard : </label>\r\n          <span>{{selectedHomework.standardName}}</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Created At :</label>\r\n          <span>{{selectedHomework.createdAt | date}}</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Due date :</label>\r\n          <span>{{selectedHomework.dueDate | date}}</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Description :</label>\r\n          <span style=\"white-space: pre-wrap;text-align: justify;\">{{selectedHomework.description}}</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Attachment Files :</label>\r\n          <ul style=\"list-style: none;text-align: left;padding-left: 10px;\">\r\n            <li *ngFor=\" let x of selectedHomework.files ; let i=index\">\r\n              <a [attr.href]=\"fileUrl + selectedHomework.files[i].fileTimestamp\">{{x.fileOriginalName}}</a>\r\n            </li>\r\n            <li *ngIf=\"!selectedHomework.files\">No Files are added</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary load-btn\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/homework/passed/homework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassedHomework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homework_service__ = __webpack_require__("../../../../../src/app/providers/homework.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PassedHomework = (function () {
    function PassedHomework(homeworkService, router, ls) {
        this.homeworkService = homeworkService;
        this.router = router;
        this.ls = ls;
        this.title = 'Homework';
        this.icon = "book";
        this.EmptyHomeworks = true;
        this.homeworks = [];
        this.currentPage = 1;
        this.loader = false;
        this.imgindex = 0;
        this.noMore = true;
    }
    PassedHomework.prototype.ngOnInit = function () {
        this.ls.setLoader(false);
        this.fileUrl = localStorage.getItem("fileUrl") + "/";
        this.getHomeworks();
    };
    PassedHomework.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    PassedHomework.prototype.getHomeworks = function () {
        var _this = this;
        this.loader = true;
        this.homeworkService.getOldHomework(this.currentPage).subscribe(function (data) {
            _this.onSuccess(data);
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    // public  previousHomework() {
    //   delete this.homeworks;
    //   this.currentPage -= 1;
    //   this.getHomeworks();
    // }
    PassedHomework.prototype.nextHomework = function () {
        // delete this.homeworks;
        this.currentPage += 1;
        this.getHomeworks();
    };
    //   ngAfterViewInit(){
    //         //loading on scroll
    //     $(window).scroll(function () { 
    //    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
    //       alert('end of page');
    //       this.nextHomework();
    //    }
    // });
    //   }
    PassedHomework.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.homeworkService.getOldHomework(1).subscribe(function (res) {
                _this.onSuccess(res);
                refresher.complete();
            }, function (err) {
                refresher.complete();
                _this.onError(err);
            });
        }, 500);
    };
    PassedHomework.prototype.onSuccess = function (res) {
        // this.nl.hideLoader();
        this.loader = false;
        if (res.status === 204) {
            this.EmptyHomeworks = true;
        }
        else {
            this.EmptyHomeworks = false;
            if (this.currentPage == 1)
                this.homeworks = res;
            else
                this.homeworks = this.homeworks.concat(res);
            if (res.length < 12)
                this.noMore = true;
            else
                this.noMore = false;
        }
    };
    PassedHomework.prototype.onError = function (err) {
        this.loader = false;
        this.router.navigate(['/error']);
    };
    PassedHomework.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.loadMoreData(infiniteScroll);
        }, 500);
    };
    PassedHomework.prototype.loadMoreData = function (infiniteScroll) {
        var _this = this;
        this.homeworkService.getOldHomework(this.currentPage).subscribe(function (res) {
            infiniteScroll.complete();
            _this.loadDataSuccess(res);
        }, function (err) {
            infiniteScroll.complete();
            _this.loadDataError(err);
        });
    };
    PassedHomework.prototype.loadDataSuccess = function (res) {
        if (res.status === 204) {
            this.currentPage -= 1;
            return;
        }
        var newHomework = res;
        this.homeworks = this.homeworks.concat(newHomework);
    };
    PassedHomework.prototype.loadDataError = function (err) {
        this.currentPage -= 1;
        this.loader = false;
        this.router.navigate(['/error']);
    };
    PassedHomework.prototype.swipe = function (a) {
        console.log(a);
        this.imgindex += a;
    };
    PassedHomework.prototype.swipebydots = function (a) {
        console.log(a);
        this.imgindex = a;
    };
    // public  seletToExpand(a: any) {
    //   this.selectedHomework = a;
    // }
    PassedHomework.prototype.seletToExpand = function (a, i) {
        this.selectedHomework = a;
        console.log("index :" + this.imgindex);
        this.imgindex = 0;
        console.log("index :" + this.imgindex);
        if (a.files) {
            this.dispurl = this.fileUrl + a.files[0].fileTimestamp;
        }
        console.log(this.dispurl);
        console.log(this.selectedHomework);
    };
    PassedHomework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'passed-homework',
            styles: [__webpack_require__("../../../../../src/app/component/homework/homework.component.css")],
            template: __webpack_require__("../../../../../src/app/component/homework/passed/homework.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homework_service__["a" /* HomeworkService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__["a" /* LoaderStop */]])
    ], PassedHomework);
    return PassedHomework;
}());



/***/ })

});
//# sourceMappingURL=homework.module.chunk.js.map