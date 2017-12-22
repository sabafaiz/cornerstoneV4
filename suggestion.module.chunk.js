webpackJsonp(["suggestion.module"],{

/***/ "../../../../../src/app/component/suggestion/add/add.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <!-- Default panel contents -->\r\n  <div class=\"panel-heading\">Create New Suggestion\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"_location.back();\">\r\n    <span aria-hidden=\"true\">&times; </span>\r\n  </button>\r\n  </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row text-center\">\r\n        <loader class=\"centerLoader\" [condition]=\"submitProgress\"></loader>\r\n      </div>\r\n      <form name=\"suggestion\" [formGroup]=\"suggestion\" (ngSubmit)=\"submitSuggestion()\" novalidate>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"standardId\">Select Standard</label>\r\n\r\n        <select class=\"form-control\" id=\"standardId\" name=\"standardId\"(ngModelChange)=\"getStudents($event)\" [(ngModel)]=\"standardId\"\r\n          [ngModelOptions]=\"{standalone: true}\" >\r\n           <option disabled=\"disabled\" selected=\"selected\">Select standard</option>             \r\n           <option *ngIf=\"emptyStandards\" disabled>Standards are not added. Try again later. </option>\r\n          <option *ngFor=\"let a of standards\" [ngValue]=\"a.id\"> {{a.name}}</option>\r\n        </select>\r\n        <loader class=\"dropdownLoader\" [condition]=\"standardLoader\"></loader>        \r\n           <!-- <div [hidden]=\"suggestion.controls.standardId.valid || suggestion.controls.standardId.untouched\" class=\"alert alert-warning\">This field is required</div>   -->\r\n        </div>\r\n\r\n      \r\n\r\n         <div class=\"form-group\" *ngIf=\"standardId\">       \r\n          <label for=\"studentId\">Student Name</label>\r\n         <select class=\"form-control\" formControlName=\"studentId\" >\r\n            <option disabled=\"disabled\" selected=\"selected\">Select Student</option>             \r\n             <option *ngIf=\"emptyStudents\" disabled>Students are not added. Try again later. </option>\r\n            <option *ngFor=\"let s of students\" [ngValue]=\"s.id\">{{s.name}}</option>\r\n          </select>\r\n        <loader class=\"dropdownLoader\" [condition]=\"studentLoader\"></loader>                  \r\n         <div [hidden]=\"suggestion.controls.studentId.valid || suggestion.controls.studentId.untouched\" class=\"alert alert-warning\">This field is required</div>   \r\n        \r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n      <label for=\"title\">Title</label>\r\n          <span class=\"badge\">{{50 - suggestion.value.title.length}}</span>\r\n              <textarea class=\"form-control\" name=\"title\" formControlName=\"title\" maxlength=\"50\" rows=\"1\"></textarea>\r\n                    <div [hidden]=\"suggestion.controls.title.untouched  ||suggestion.controls.title.valid ||suggestion.controls.title.pristine\" class=\"alert alert-warning\">This field is required</div>\r\n    </div>\r\n        <!-- <div class=\"form-group\" *ngIf=\"suggestion.value.standardId\"> -->\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Description</label>          \r\n          <span class=\"badge\">{{2500 - suggestion.value.description.length}}</span>\r\n          <textarea class=\"form-control\" name=\"description\" formControlName=\"description\" maxlength=\"2500\"></textarea>\r\n          <div [hidden]=\"suggestion.controls.description.untouched  ||suggestion.controls.description.valid ||suggestion.controls.description.pristine\" class=\"alert alert-warning\">This field is required</div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"suggestion.invalid\" data-toggle=\"modal\" data-target=\"#suggestionModal\">Submit</button>\r\n      </form>\r\n    </div>\r\n</div>\r\n\r\n    <div class=\"modal fade\" id=\"suggestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"exampleModalLabel\">Suggestion Added</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            You have successfully added a new suggestion\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" [routerLink]=\"['/suggestion/for-student']\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add More</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/component/suggestion/add/add.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_suggestion_service__ = __webpack_require__("../../../../../src/app/providers/suggestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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






var SuggestionAddComponent = (function () {
    // subjects:any = [];
    function SuggestionAddComponent(suggestionService, commonService, _location, router) {
        this.suggestionService = suggestionService;
        this.commonService = commonService;
        this._location = _location;
        this.router = router;
        this.submitProgress = false;
        this.standards = [];
        this.emptyStandards = false;
        this.emptyStudents = false;
        this.students = [];
        this.standardLoader = false;
        this.studentLoader = false;
        // this.getStudents(a);
    }
    SuggestionAddComponent.prototype.ngOnInit = function () {
        this.getStandards();
        this.initForm();
    };
    SuggestionAddComponent.prototype.initForm = function () {
        this.standardId = null;
        this.suggestion = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(2500)]),
            studentId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50)]),
        });
    };
    SuggestionAddComponent.prototype.submitSuggestion = function () {
        var _this = this;
        this.submitProgress = true;
        this.suggestionService.postSuggestion(this.suggestion.value).subscribe(function (res) {
            _this.submitProgress = false;
            _this.initForm();
            // $('#circularModal').modal('show');
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    SuggestionAddComponent.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.suggestionService.getStandards().subscribe(function (res) {
            if (res.status === 204) {
                _this.standardLoader = false;
                _this.emptyStandards = true;
                return;
            }
            _this.standardLoader = false;
            _this.emptyStandards = false;
            _this.standards = res;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    SuggestionAddComponent.prototype.getStudents = function (standardId) {
        var _this = this;
        this.studentLoader = true;
        this.suggestion.controls["studentId"].reset();
        this.suggestionService.getStudents(standardId).subscribe(function (res) {
            if (res.status === 204) {
                _this.studentLoader = false;
                _this.emptyStudents = true;
                return;
            }
            _this.studentLoader = false;
            _this.emptyStudents = false;
            ;
            _this.students = res;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    SuggestionAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'suggestion-add',
            template: __webpack_require__("../../../../../src/app/component/suggestion/add/add.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_suggestion_service__["a" /* SuggestionService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], SuggestionAddComponent);
    return SuggestionAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/suggestion/for-me/forme.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Complaint</h1> -->\r\n<div class=\"panel panel-default\">\r\n  <!-- Default panel contents -->\r\n  <div class=\"panel-heading\" *ngIf=\"statusId\">\r\n    {{statusName[statusId]}} Suggestion\r\n  </div>\r\n  <!-- Table -->\r\n  <div class=\"panel-body\">\r\n    <!--<div class=\"form-group row\">\r\n      <div class=\"col-lg-12\">\r\n        <input class=\"form-control\" type=\"search\" placeholder=\"Search by complaint title .,. \" id=\"example-search-input\" (keyup)=\"searchComplaints($event)\">\r\n      </div>\r\n    </div>-->\r\n    <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n\r\n    <!--cards -->\r\n    <div style=\"margin-top: 2%;padding-top: 1%;\">\r\n      <div  *ngIf=\"!EmptyComplaints\">\r\n        <div class=\"container card\" *ngFor=\"let c of complaints; let i = index;\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-6\" *ngIf=\"!complaintStatus\" style=\"margin: -8px -24px;\">\r\n              <span [style.background]=\"c.statusColor\" class=\"badge\">@{{c.statusName}}</span>\r\n            </div>\r\n            <span class=\"glyphicon glyphicon-resize-full expand\" (click)=\"seletToExpand(c,i)\" data-toggle=\"modal\" data-target=\"#myModal-card\"></span>\r\n          </div>\r\n          <!-- <div class=\"row\">\r\n          <div class=\"col-sm-6\" *ngIf=\"!complaintStatus\">\r\n            <span [style.background]=\"c.statusColor\" class=\"badge\">@{{c.statusName}}</span>\r\n          </div>\r\n          <div class=\"col-sm-6\" class=\"badge\">{{c.priorityName}}</div>\r\n        </div> -->\r\n          <div class=\"row\">\r\n            <img class=\"image\" [attr.src]=\"fileUrl + c.studentPicUrl\">\r\n          </div>\r\n          <div class=\"row name\">{{c.studentName}}</div>\r\n          <div class=\"row class\">{{c.studentStandardName}}</div>\r\n          <hr class=\"style-line\">\r\n          <div class=\"row title\">{{c.title}}</div>\r\n          <div class=\"row description\">{{c.description}}</div>\r\n          <hr class=\"style-line\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-6 edit\">\r\n              <a [ngClass]=\"{'disabled-click' : ((c.statusId == 4)|| (c.statusId == 6)) }\" (click)=\"selectComplaint(c,i)\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                class=\"action\"><i class=\"glyphicon glyphicon-pencil\"></i>\r\n            </a>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-6 comment\">\r\n              <a onclick=\"$('.panel.panel-chat').show();\" (click)=\"getComplaintCommentById(c)\" class=\"action\"><i class=\"glyphicon glyphicon-comment\"></i>\r\n            </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--end cards-->\r\n\r\n    <div style=\"text-align: center\" *ngIf=\"(EmptyComplaints)&&(!loader)&&(currentPage==1)\"><b>No Suggestion is added to View</b></div>\r\n    <div style=\"text-align: center\" *ngIf=\"(EmptyComplaints)&&(!loader)&&(currentPage!=1)\"><b>No More Suggestion is added to View</b></div>\r\n    \r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <!-- <button (click)=\"previousComplaint()\" [disabled]=\"currentPage === 1\" type=\"button\" class=\"btn btn-primary\">Previous</button> -->\r\n    <button (click)=\"nextComplaint()\" type=\"button\" [disabled]=\"EmptyComplaints || noMore\" class=\"btn btn-primary\">Load More</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n    <div class=\"modal fade\" id=\"myModal-card\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\" *ngIf=\"selectedComplaint\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"modal-title\" id=\"gridSystemModalLabel\">{{selectedComplaint.title}}</h4>\r\n          </div>\r\n          <div class=\"modal-body card-modal\">\r\n            <div class=\"row first-row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"badge\" [ngStyle]=\"{'backgroundColor': selectedComplaint.statusColor}\">@{{selectedComplaint.statusName}}</div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"row badge\" *ngIf=\"selectedComplaint.assignedEmployeeName\"><span class=\"empName\">@{{selectedComplaint.assignedEmployeeName}}</span></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row modal-heading\">\r\n              <div class=\"col-sm-4 coloumn-middle\">\r\n                <div class=\"align-middle\">\r\n                  <div class=\"big-fonts\">{{selectedComplaint.commentCount}}</div>\r\n                  <label class=\"heading\">Comments</label>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-sm-4 coloumn-middle\" style=\"float:right\">\r\n                <div class=\"align-middle\">\r\n                  <div class=\"big-fonts\">{{selectedComplaint.priorityName}}</div><label class=\"heading\">Priority</label>\r\n                  <!--<div class=\"col-sm-4 col-xs-4 complaint-modal-head\">\r\n            <img  class=\"modal-image\" [attr.src]=\"fileUrl + selectedComplaint.studentPicUrl\">\r\n          </div>\r\n          <div class=\"col-sm-4 col-xs-4 complaint-modal-head\">\r\n            <div class=\"middle-title\"> \r\n              <div class=\"big-fonts\">{{selectedComplaint.priorityName}}</div>\r\n              <label class=\"heading\">Priority</label>-->\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\"><img class=\"modal-image\" [attr.src]=\"fileUrl + selectedComplaint.studentPicUrl\"></div>\r\n            </div>\r\n            <div class=\"row modal-name\">{{selectedComplaint.studentName}}\r\n                <div class=\"modal-class\">{{selectedComplaint.studentStandardName}}</div>\r\n            </div>\r\n\r\n            <div class=\"row modal-description\">\r\n              <div class=\"row \"><label class=\"heading\">Description : </label><span class=\"white-space\"> {{selectedComplaint.description}}</span></div>\r\n              <div class=\"row\" *ngIf=\"selectedComplaint.rca\"><label class=\"heading\">Root Cause : </label><span> {{selectedComplaint.rca}}</span></div>\r\n            </div>\r\n            <hr class=\"style-line\">\r\n            <div class=\"row complaint-category\">\r\n              <div class=\"col-sm-2 col-xs-2\"><img src=\"https://cdn4.iconfinder.com/data/icons/hr-recruitment-management-part-3/360/opinion_feedback_comment_employee_staff_complain-128.png\"\r\n                  class=\"complaint-icon\"></div>\r\n              <div class=\"col-sm-5 col-xs-5\">\r\n                <label class=\"heading\">Suggestion-Category</label>\r\n                <div class=\"result\">{{selectedComplaint.againstCategoryName}}</div>\r\n              </div>\r\n              <div class=\"col-sm-5 col-xs-5\">\r\n                <label class=\"heading\">Suggestion For</label>\r\n                <div class=\"result\">{{selectedComplaint.againstEmployeeNam}}\r\n                  <div *ngIf=\"!selectedComplaint.againstEmployeeNam\">-</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr class=\"style-line\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-2 col-xs-2\"><i class=\"glyphicon glyphicon-calendar calendar-custom\"></i></div>\r\n              <div class=\"col-sm-5 col-xs-5\"><label class=\"heading\">Created At</label>\r\n                <div class=\"result\">{{selectedComplaint.createdAt | date}}</div>\r\n              </div>\r\n              <div class=\"col-sm-5 col-xs-5\"><label class=\"heading\">Closed On</label>\r\n                <div class=\"result\" *ngIf=\"selectedComplaint.closedOn\">{{selectedComplaint.closedOn | date}}</div>\r\n                <div *ngIf=\"!selectedComplaint.closedOn\" style=\"font-weight:700\">-</div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 col-xs-12\" >\r\n                <button [ngClass]=\"{'disabled' : ( (selectedComplaint.statusId == 4) || (selectedComplaint.statusId == 6) ) }\" data-toggle=\"modal\"\r\n                  data-target=\"#myModal\" class=\"btn btn-primary modal-btn \"(click)=\"selectComplaint(selectedComplaint,selectedIndex)\" data-dismiss=\"modal\">Edit<i class=\"glyphicon glyphicon-pencil icon\"></i></button>\r\n              </div>\r\n              <div class=\"col-sm-4 col-xs-12\">\r\n                <button onclick=\"$('.panel.panel-chat').show();\" (click)=\"getComplaintCommentById(c)\" class=\"btn btn-primary modal-btn\" data-dismiss=\"modal\">Comment<i class=\"glyphicon glyphicon-comment icon\"></i></button>\r\n              </div>\r\n              <div class=\"col-sm-4 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-primary modal-btn\" [disabled]=\"selectedComplaint.closedOn\" data-target=\"#myModal3\" data-toggle=\"modal\"\r\n                  data-dismiss=\"modal\">Close<i class=\"glyphicon glyphicon-remove icon\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n    <!-- /.modal -->\r\n\r\n<!-- Edit Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Edit Complaint</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form name=\"form1\" [formGroup]=\"editForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Assigned To:</label>\r\n            <select class=\"form-control\" formControlName=\"assignedTo\">\r\n              <option disabled=\"disabled\" selected=\"selected\">Select</option>             \r\n              <option *ngFor=\"let emp of employees\" [value]=\"emp.id\">{{emp.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <p><b>Priority:</b></p>\r\n            <div class=\"radio\" *ngFor=\"let prio of priorities;\">\r\n              <label><input type=\"radio\" name=\"priorityId\" [value]=\"prio.id\" formControlName=\"priorityId\">{{prio.name}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <p><b>Status:</b></p>\r\n            <div class=\"checkbox\">\r\n              <label><input type=\"checkbox\" name=\"progress\" formControlName=\"statusId\">In Progress</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"resetComplaints()\">Reset</button>\r\n          <button type=\"button\" (click)=\"updateComplaint()\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--End of Edit-->\r\n\r\n<!-- Close Modal -->\r\n<div class=\"modal fade\" id=\"myModal3\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Close Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Close Complaint </h4>\r\n      </div>\r\n      <form [formGroup]=\"closeForm\" >\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"rootCause\">Root Cause</label>\r\n            <textarea class=\"form-control\" formControlName=\"rca\" id=\"rootCause\" rows=\"3\" required></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleTextarea\">Comment</label>\r\n            <textarea class=\"form-control\" formControlName=\"comment\" id=\"commentClose\" rows=\"3\" required></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"closeComplaint()\" [disabled]= \"closeForm.invalid\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal4\" data-dismiss=\"modal\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"myModal4\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        Close Complaint\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h4 class=\"\"> You have successfully closed the complaint</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- chat -->\r\n<div id=\"chat\" class=\"panel panel-chat\">\r\n  <div class=\"panel-heading\">\r\n    <a href=\"#\" class=\"chatMinimize\" onclick=\"return false\"><span>{{complaintTitleOfCommentModel | uppercase}}</span></a>\r\n    <a href=\"#\" class=\"chatClose\" onclick=\"return false\"><i class=\"glyphicon glyphicon-remove\"></i></a>\r\n    <div class=\"clearFix\"></div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div *ngIf=\"EmptyComments\" style=\"text-align:center;\">No Comments to display</div>\r\n    <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n    <div *ngFor=\"let c of comments\">\r\n      <div *ngIf=\"c.employeeId == currentUser\">\r\n        <div class=\"myMsg\">\r\n          <img src=\"http://www.clker.com/cliparts/f/8/a/6/1376432218623075512little%20girl%20dreaming-hi.png\" class=\"myImg\" />\r\n          <div class=\"myText\">\r\n            <span class=\"myText-style\">\r\n              {{c.comment}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"myMsgDate\">\r\n          me: {{c.createdAt|date}}\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"c.employeeId != currentUser\">\r\n        <div class=\"msg\">\r\n          <img src=\"http://www.kpop-map.com/wp-content/uploads/2016/01/sm-rookies-kun-profile.jpg\" class=\"img\" />\r\n          <div class=\"text\">\r\n            <span class=\"text-style\">\r\n              {{c.comment}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"msgDate\">\r\n          <span *ngIf=\"c.employeeName\">{{c.employeeName}}</span>\r\n          <span *ngIf=\"c.parentName\">{{c.parentName}}</span>\r\n          <span>: {{c.createdAt|date}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearFix\">\r\n      <div class=\" badge closed-comment\" *ngIf=\"closed\">\r\n        This complaint has been closed.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"panel-footer\" *ngIf=\"!closed\">\r\n    <form [formGroup]=\"commentForm\" (submit)=\"submitComment()\">\r\n      <textarea name=\"comment\" formControlName=\"comment\" cols=\"0\" rows=\"0\"></textarea>\r\n      <span class=\"send-button\">\r\n        <button type=\"submit\" class=\"btn btn-success btn-circle btn-lg\"><i class=\"glyphicon glyphicon-share-alt\"></i></button>\r\n    </span>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/suggestion/for-me/forme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionForMe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__ = __webpack_require__("../../../../../src/app/providers/complaint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_complaint_component__ = __webpack_require__("../../../../../src/app/component/complaint/complaint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuggestionForMe = (function (_super) {
    __extends(SuggestionForMe, _super);
    function SuggestionForMe(cs, ls, router, route, barLoaderService) {
        var _this = _super.call(this, cs, ls, router, route, barLoaderService) || this;
        _this.cs = cs;
        _this.ls = ls;
        _this.router = router;
        _this.route = route;
        _this.barLoaderService = barLoaderService;
        _this.statusName = ["", "New", "Assigned", "Inprogress", "Closed", "Reopen", "Satisfied"];
        if (_this.url == "/suggestion/for-me")
            _this.url = "/suggestion";
        if (_this.complaintStatus)
            _this.url = "/suggestion/status/" + _this.complaintStatus;
        _this.route.params.subscribe(function (param) {
            _this.statusId = param['statusId'];
        });
        return _this;
    }
    SuggestionForMe.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    SuggestionForMe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'for-me',
            template: __webpack_require__("../../../../../src/app/component/suggestion/for-me/forme.html"),
            styles: [__webpack_require__("../../../../../src/app/component/complaint/complaint.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__["a" /* ComplaintService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], SuggestionForMe);
    return SuggestionForMe;
}(__WEBPACK_IMPORTED_MODULE_3__complaint_complaint_component__["a" /* ComplaintComponent */]));



/***/ }),

/***/ "../../../../../src/app/component/suggestion/for-student/forstudent.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"add-button\">\r\n        <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/suggestion/suggestion-add']\" style=\"border-radius:15px !important\">\r\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n        </button>\r\n      </div>\r\n      <br>\r\n      <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n    <!-- <div class=\"form-group row\">\r\n      <div class=\"col-lg-12\">\r\n        <input class=\"form-control\" type=\"search\" placeholder=\"Search by suggestion title .,. \" id=\"example-search-input\">\r\n      </div>\r\n    </div> -->\r\n\r\n    <!--cards -->\r\n    <div style=\"margin-top: 2%;padding-top: 1%;\">\r\n      <div  *ngIf=\"!EmptyComplaints\">\r\n        <div class=\"container card\" *ngFor=\"let c of complaints; let i = index;\">\r\n          <div class=\"row\">\r\n            <span class=\"glyphicon glyphicon-resize-full expand\" (click)=\"seletToExpand(c)\" data-toggle=\"modal\" data-target=\"#myModal-card\"></span>\r\n          </div>\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-sm-6\" *ngIf=\"!complaintStatus\">\r\n              <span [style.background]=\"c.statusColor\" class=\"badge\">{{c.statusName}}</span>\r\n            </div>\r\n            <div class=\"col-sm-6\">{{c.priorityName}}</div>\r\n          </div>-->\r\n          <div class=\"row\">\r\n            <img class=\"image\" [attr.src]=\"fileUrl + c.studentPicUrl\">\r\n          </div>\r\n          <div class=\"row name\">{{c.studentName}}</div>\r\n          <div class=\"row class\">{{c.standardName}}</div><hr class=\"style-line\">\r\n          <div class=\"row title\">{{c.title}}</div>\r\n          <div class=\"row description\">{{c.description}}</div>\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-6 edit\" *ngIf=\"!(complaintStatus == 4 || complaintStatus == 5)\">\r\n              <a [ngClass]=\"{'disabled-click' : c.statusId == 4}\" (click)=\"selectComplaint(c,in)\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                  class=\"action\"><i class=\"glyphicon glyphicon-pencil\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-6 comment\">\r\n              <a onclick=\"$('.panel.panel-chat').show();\" (click)=\"getComplaintCommentById(c)\" class=\"action\"><i class=\"glyphicon glyphicon-comment\"></i>\r\n              </a>\r\n            </div>\r\n          </div>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--end cards-->\r\n\r\n    <div style=\"text-align: center\" *ngIf=\"(EmptyComplaints)&&(!loader)&&(currentPage==1)\"><b>No Suggestion added by you</b></div>\r\n    <div style=\"text-align: center\" *ngIf=\"(EmptyComplaints)&&(!loader)&&(currentPage!=1)\"><b>No More Suggestion added by you</b></div>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n      <!-- <button (click)=\"previousComplaint()\" class=\"btn right btn-danger\" [disabled]=\"currentPage === 1\">Previous</button> -->\r\n      <button (click)=\"nextComplaint()\" class=\"btn right btn-danger\" [disabled]=\"EmptyComplaints || noMore\">Load More</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"myModal-card\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\" *ngIf=\"selectedComplaint\" >\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"gridSystemModalLabel\">{{selectedComplaint.title}}</h4>\r\n      </div>\r\n      <div class=\"modal-body card-modal\" >\r\n        <div class=\"row first-row\">\r\n          <div class=\"col-sm-6\">\r\n              <div class=\"badge\">{{selectedComplaint.statusName}}</div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n          <div class=\"row badge\" *ngIf=\"selectedComplaint.assignedEmployeeName\"><span class=\"empName\">@{{selectedComplaint.assignedEmployeeName}}</span></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row modal-heading\">\r\n          <div class=\"complaint-modal-head\">\r\n            <img  class=\"image\" [attr.src]=\"fileUrl + selectedComplaint.studentPicUrl\">\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"row modal-name\">{{selectedComplaint.studentName}}\r\n          <div class=\"modal-class\">{{selectedComplaint.standardName}}</div>\r\n        </div>\r\n        <div class=\"row modal-description\">\r\n          <div class=\"row \" ><label class=\"heading\" >Description : </label><span class=\"white-space\"> {{selectedComplaint.description}}</span></div>\r\n        </div>\r\n        <hr class=\"style-line\">\r\n        <!--<div class=\"row complaint-category\">\r\n          <div class=\"col-sm-5 col-xs-5\">\r\n              <label class=\"heading\">Complaint-Category</label>\r\n              <div class=\"result\">{{selectedComplaint.againstCategoryName}}</div>\r\n          </div>\r\n          <div class=\"col-sm-5 col-xs-5\" >\r\n            <label class=\"heading\">Complaint-Against</label>\r\n            <div class=\"result\">{{selectedComplaint.againstEmployeeNam}}<div *ngIf=\"!selectedComplaint.againstEmployeeNam\">-</div></div>\r\n          </div>\r\n          <div class=\"col-sm-2 col-xs-2\"><img src=\"https://cdn4.iconfinder.com/data/icons/hr-recruitment-management-part-3/360/opinion_feedback_comment_employee_staff_complain-128.png\" class=\"complaint-icon\"></div>\r\n        </div><hr class=\"style-line\">-->\r\n        <div class=\"row\">\r\n          <div class=\"created-at\">\r\n          <i class=\"glyphicon glyphicon-calendar calendar-custom\"></i>\r\n          <span style=\"display:inline-block;\">\r\n            <label class=\"heading\">Created At</label>\r\n            <div class=\" row result\">{{selectedComplaint.createdAt | date}}</div>\r\n          </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/suggestion/for-student/forstudent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionForStudent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__ = __webpack_require__("../../../../../src/app/providers/complaint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_complaint_component__ = __webpack_require__("../../../../../src/app/component/complaint/complaint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuggestionForStudent = (function (_super) {
    __extends(SuggestionForStudent, _super);
    function SuggestionForStudent(cs, ls, router, route, barLoaderService) {
        var _this = _super.call(this, cs, ls, router, route, barLoaderService) || this;
        _this.cs = cs;
        _this.ls = ls;
        _this.router = router;
        _this.route = route;
        _this.barLoaderService = barLoaderService;
        return _this;
    }
    SuggestionForStudent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    SuggestionForStudent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'for-student',
            template: __webpack_require__("../../../../../src/app/component/suggestion/for-student/forstudent.html"),
            styles: [__webpack_require__("../../../../../src/app/component/complaint/complaint.component.css"), __webpack_require__("../../../../../src/app/component/suggestion/suggestion.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__["a" /* ComplaintService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], SuggestionForStudent);
    return SuggestionForStudent;
}(__WEBPACK_IMPORTED_MODULE_3__complaint_complaint_component__["a" /* ComplaintComponent */]));



/***/ }),

/***/ "../../../../../src/app/component/suggestion/suggestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".suggestion > ul{\r\n  width: 100%;  \r\n}\r\n.suggestion > ul > li{\r\n  width:50%;\r\n}\r\n\r\n.suggestion > ul>li.active>a, .suggestion > ul>li.active>a:focus, .suggestion > ul>li.active>a:hover {\r\n    color: #f8f8f8;\r\n    cursor: pointer;\r\n    background-color: #337ab7;\r\n}\r\n\r\n.created-at{\r\n  margin: auto;\r\n}\r\n\r\n.glyphicon-calendar{\r\n  margin-right: 20px;\r\n}\r\n\r\n.modal-image{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/suggestion/suggestion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"suggestion\">\r\n  <!-- <h1>Suggestions \r\n      <button type=\"button\" class=\"btn btn-success btn-circle\" [routerLink]=\"['/suggestion-add']\">\r\n    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n  </button>\r\n  </h1> -->\r\n<!--<ul class=\"nav nav-tabs\" *ngIf=\"status != 'All'\">\r\n  <li> {{status}} </li>\r\n</ul>-->\r\n  <ul class=\"nav nav-tabs\" *ngIf=\"tab\">\r\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/suggestion/for-me']\" >For Us</a></li>\r\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/suggestion/for-student']\" >By Us</a></li>\r\n  </ul>\r\n\r\n  <div class=\"tab-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/suggestion/suggestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionComponent; });
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


var SuggestionComponent = (function () {
    function SuggestionComponent(route, router) {
        this.route = route;
        this.router = router;
        this.status = "";
        this.url = "";
        this.tab = false;
        this.url = this.router.url;
        if (this.url == "/suggestion/for-me" || this.url == "/suggestion/for-student")
            this.tab = true;
        else
            this.tab = false;
        // this.router.navigate(["/suggestion/for-me"]);
    }
    SuggestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'suggestion',
            template: __webpack_require__("../../../../../src/app/component/suggestion/suggestion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/suggestion/suggestion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SuggestionComponent);
    return SuggestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/suggestion/suggestion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionModule", function() { return SuggestionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__suggestion_component__ = __webpack_require__("../../../../../src/app/component/suggestion/suggestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__for_student_forstudent__ = __webpack_require__("../../../../../src/app/component/suggestion/for-student/forstudent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__for_me_forme__ = __webpack_require__("../../../../../src/app/component/suggestion/for-me/forme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_add__ = __webpack_require__("../../../../../src/app/component/suggestion/add/add.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_suggestion_service__ = __webpack_require__("../../../../../src/app/providers/suggestion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SuggestionModule = (function () {
    function SuggestionModule() {
    }
    SuggestionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__suggestion_component__["a" /* SuggestionComponent */],
                        children: [
                            {
                                path: 'for-student',
                                component: __WEBPACK_IMPORTED_MODULE_4__for_student_forstudent__["a" /* SuggestionForStudent */]
                            },
                            {
                                path: 'for-me',
                                component: __WEBPACK_IMPORTED_MODULE_5__for_me_forme__["a" /* SuggestionForMe */]
                            }
                        ]
                    },
                    {
                        path: 'add-suggestion',
                        component: __WEBPACK_IMPORTED_MODULE_6__add_add__["a" /* SuggestionAddComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__add_add__["a" /* SuggestionAddComponent */], __WEBPACK_IMPORTED_MODULE_1__suggestion_component__["a" /* SuggestionComponent */], __WEBPACK_IMPORTED_MODULE_4__for_student_forstudent__["a" /* SuggestionForStudent */], __WEBPACK_IMPORTED_MODULE_5__for_me_forme__["a" /* SuggestionForMe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_suggestion_service__["a" /* SuggestionService */]]
        })
    ], SuggestionModule);
    return SuggestionModule;
}());



/***/ }),

/***/ "../../../../../src/app/providers/suggestion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionService; });
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








var SuggestionService = (function () {
    function SuggestionService(http, con) {
        this.http = http;
        this.con = con;
        this.getUrl();
    }
    SuggestionService.prototype.getUrl = function () {
        this.serveUrl = this.con.Server;
    };
    SuggestionService.prototype.postSuggestion = function (data) {
        //     var options = new RequestOptions({
        //   headers: new Headers({
        //     'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        //   })
        // });
        return this.http.post(this.serveUrl + '/suggestion/for-student', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SuggestionService.prototype.getStandards = function () {
        return this.http.get(this.serveUrl + '/suggestion/for-student/standard')
            .map(this.extractData)
            .catch(this.handleError);
    };
    SuggestionService.prototype.getStudents = function (stan) {
        return this.http.get(this.serveUrl + '/suggestion/for-student/standard/' + stan + '/student')
            .map(this.extractData)
            .catch(this.handleError);
    };
    SuggestionService.prototype.extractData = function (res) {
        if (res.status === 204) {
            return res;
        }
        var body = res.json();
        return body || {};
    };
    SuggestionService.prototype.handleError = function (error) {
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
    SuggestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__default_header_service__["a" /* CustomHttpService */],
            __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* Configuration */]])
    ], SuggestionService);
    return SuggestionService;
}());



/***/ })

});
//# sourceMappingURL=suggestion.module.chunk.js.map