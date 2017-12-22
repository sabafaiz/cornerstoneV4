webpackJsonp(["timetable.module"],{

/***/ "../../../../../src/app/component/timetable/timetable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tt-head{\r\n\tbackground-color: #303342;\r\n\ttext-align: center;\r\n\tcolor : white;\r\n\twidth:16.67%;\r\n\tpadding-top: 8px;\r\n\tpadding-bottom: 8px;\r\n\tpadding-left: 2px;\r\n\tpadding-right: 2px;\r\n\tborder-right : 1px solid white;\r\n\t\r\n}\r\n\r\n.tt-head1{\r\n\tbackground-color: #303342;\r\n\ttext-align: center;\r\n\tcolor : white;\r\n\tpadding-top: 12px;\r\n\tpadding-bottom: 12px;\r\n\twidth : 180px;\r\n\tborder-top : 1px solid white;\r\n\t\r\n}\r\n.tt-blocks{\r\n\ttext-align: center;\r\n\tborder-bottom : 1px solid #b1b8dc;\r\n\tborder-right:  1px solid #b1b8dc;\r\n\tcursor: pointer;\r\n}\r\n\r\ntd.tt-blocks:hover {\r\n\tbackground-color: #b1b8dc;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/timetable/timetable.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n       \r\n<div class=\"row\">\r\n  <div class=\"col-sm-4 col-sm-offset-8\">\r\n    Select Standard\r\n    <select class=\"form-control\" id=\"standardIds\" name=\"standardIds\" [(ngModel)]=\"selectedStandard\" (ngModelChange)=\"getTimeTable($event)\">\r\n    <option *ngFor=\" let s of standards\" [value]=\"s.id\"> {{s.name}}</option>\r\n\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\"  *ngIf=\"selectedStandard\">\r\n    <div class=\"panel-heading text-center\" *ngIf=\"selectedStandard && standards \">Time Table For {{ standards[selectedStandard -1 ].name }} </div>\r\n    <div style=\"overflow:auto\">\r\n    \t<table width=\"100%\">\r\n    \t\t<thead>\r\n          <tr *ngIf= \" days \">\r\n          <th class=\"tt-head\"></th>\r\n            <th class=\"tt-head\" *ngFor=\" let day of days\">{{ day }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"daysdata\">\r\n          <div class=\"row text-center\">\r\n            <loader [condition]=\"loader\"></loader>\r\n          </div>\r\n          <tr *ngFor=\" let x1 of daysdata[0]; let i = index \">\r\n\r\n            <td class=\"tt-head1\" >  {{x1.startTime}} - {{x1.endTime}}  </td>\r\n            <ng-container *ngIf=\"i%4!=0\" >\r\n              <td class=\"tt-blocks\"  *ngFor=\" let x1 of daysdata; let i1 = index\" (click) = \"getModal( selectedStandard, x1[i],i1 )\">\r\n                  {{ x1[i].subjectName }} \r\n              </td>\r\n            </ng-container>            \r\n            <td class=\"tt-blocks\" style=\"cursor:default;\" colspan=\"5\" *ngIf=\"i%4==0\">\r\n              {{ getValue(i) }}\r\n            </td>\r\n\r\n          </tr>\r\n        </tbody>\r\n\r\n    \t</table>\r\n    </div>\r\n</div>\r\n<!-- <div *ngIf= \" timetable \" >\r\n<span  *ngFor=\" let x of daysdata\">{{x.id}}</span>\r\n</div> -->\r\n\r\n\r\n<div class=\"modal fade\" id=\"editSubject\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Update Modal content-->\r\n   <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Add or View subject</h4>\r\n      </div>\r\n        <div style=\"width:94%;margin:auto\">\r\n          <h4>{{day}}   ( {{starttime}} - {{endtime}} )</h4>\r\n          <!-- <br *ngIf=\"showsubjectlist\"> -->\r\n          <h3 *ngIf=\"showsubjectname\">{{subjectName}}  <i style=\"font-size: 15px\" (click)=\"showlist()\" class=\"glyphicon glyphicon-pencil\"></i></h3>\r\n          <span *ngIf=\"showsubjectlist\">Select subject :</span>\r\n          <br *ngIf=\"showsubjectlist\">\r\n          <select *ngIf=\"showsubjectlist\" class=\"form-control\" [(ngModel)]=\"selectedSubject\"  required>\r\n            <option [disabled] selected=\"selected\">Select Subject</option>\r\n            <option *ngFor=\" let s of subjects\" [value]=\"s.id\"> {{s.name}}</option>\r\n          </select>\r\n        </div>  \r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\" data-dismiss=\"modal\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/timetable/timetable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timetable_service__ = __webpack_require__("../../../../../src/app/providers/timetable.service.ts");
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





var TimetableComponent = (function () {
    function TimetableComponent(ls, ps, router, barLoaderService) {
        this.ls = ls;
        this.ps = ps;
        this.router = router;
        this.barLoaderService = barLoaderService;
        this.selectedStandard = 4;
        this.days = [];
        this.daysdata = [];
        this.selectedSubject = 1;
        this.showsubjectlist = true;
        this.showsubjectname = false;
        this.serialNo = ['Assembly', 'First', 'Second', 'Third', 'Snack', 'Fourth', 'Fifth', 'Sixth', 'Lunch', 'Seventh', 'Eighth', 'Ninth'];
        this.loader = false;
        this.ls.setLoader(false);
    }
    TimetableComponent.prototype.ngOnInit = function () {
        this.getStandards();
        this.getTimeTable(this.selectedStandard);
    };
    TimetableComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    TimetableComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    TimetableComponent.prototype.getTimeTable = function (selectedstandard) {
        var _this = this;
        console.log(this.selectedStandard);
        this.days = [];
        this.daysdata = [];
        this.loader = true;
        this.ps.gettimeTable(selectedstandard).subscribe(function (res) {
            if (res.status == 204) {
                _this.days = [];
                _this.daysdata = [];
                _this.timetable = [];
            }
            else {
                _this.timetable = res;
                Object.keys(res).forEach(function (key) {
                    _this.daysdata.push(res[key]);
                    _this.days.push(key); //key
                });
            }
            _this.loader = false;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    TimetableComponent.prototype.getModal = function (selectedstandard, x, i) {
        if (x.subjectName != null) {
            this.showsubjectlist = false;
            this.showsubjectname = true;
        }
        else {
            this.showsubjectname = false;
            this.showsubjectlist = true;
        }
        this.subjectName = x.subjectName;
        this.starttime = x.startTime;
        this.endtime = x.endTime;
        this.timetableid = x.id;
        this.day = this.days[i];
        $('#editSubject').modal('show');
        this.getSubject(selectedstandard);
    };
    TimetableComponent.prototype.showlist = function () {
        this.showsubjectlist = true;
    };
    TimetableComponent.prototype.getSubject = function (selectedstandard) {
        var _this = this;
        this.ps.getSubject(selectedstandard).subscribe(function (res) {
            _this.subjects = res;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    TimetableComponent.prototype.getValue = function (i) {
        if (i == 0) {
            return "Assembly";
        }
        else if (i == 4) {
            return "Snack";
        }
        else
            return "Lunch";
    };
    TimetableComponent.prototype.onSubmit = function () {
        var _this = this;
        this.ps.onSubmit(this.timetableid, this.selectedSubject).subscribe(function (res) {
            _this.refreshTimeTable();
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    TimetableComponent.prototype.refreshTimeTable = function () {
        var s;
        for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.id == this.selectedSubject) {
                s = x.name;
                break;
            }
        }
        for (var _b = 0, _c = this.daysdata; _b < _c.length; _b++) {
            var x = _c[_b];
            for (var _d = 0, x_1 = x; _d < x_1.length; _d++) {
                var x1 = x_1[_d];
                if (x1.id == this.timetableid) {
                    x1.subjectName = s;
                    break;
                }
            }
        }
    };
    TimetableComponent.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.ps.getStandards().subscribe(function (res) {
            _this.standardLoader = false;
            _this.standards = res;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    TimetableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "time-table",
            template: __webpack_require__("../../../../../src/app/component/timetable/timetable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/timetable/timetable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timetable_service__["a" /* TimeTableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], TimetableComponent);
    return TimetableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/timetable/timetable.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTable", function() { return TimeTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timetable_component__ = __webpack_require__("../../../../../src/app/component/timetable/timetable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_timetable_service__ = __webpack_require__("../../../../../src/app/providers/timetable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TimeTable = (function () {
    function TimeTable() {
    }
    TimeTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__timetable_component__["a" /* TimetableComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__timetable_component__["a" /* TimetableComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_timetable_service__["a" /* TimeTableService */]]
        })
    ], TimeTable);
    return TimeTable;
}());



/***/ }),

/***/ "../../../../../src/app/providers/timetable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTableService; });
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








var TimeTableService = (function () {
    function TimeTableService(http, htttp, con) {
        this.http = http;
        this.htttp = htttp;
        this.con = con;
    }
    TimeTableService.prototype.getSubject = function (selectedstandard) {
        return this.http.get(this.con.Server + '/time-table/subject')
            .map(this.extractData)
            .catch(this.handleError);
    };
    TimeTableService.prototype.getStandards = function () {
        return this.http.get(this.con.Server + '/time-table/standard')
            .map(this.extractData)
            .catch(this.handleError);
    };
    TimeTableService.prototype.onSubmit = function (timetableid, subId) {
        return this.http.put(this.con.Server + '/time-table/' + timetableid, { subjectId: subId })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TimeTableService.prototype.gettimeTable = function (selectedstandard) {
        return this.http.get(this.con.Server + '/time-table/standard/' + selectedstandard)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TimeTableService.prototype.extractData = function (res) {
        if (res.status === 204) {
            return res;
        }
        var body = res.json();
        return body || {};
    };
    TimeTableService.prototype.handleError = function (error) {
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
    TimeTableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__default_header_service__["a" /* CustomHttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* Configuration */]])
    ], TimeTableService);
    return TimeTableService;
}());



/***/ })

});
//# sourceMappingURL=timetable.module.chunk.js.map