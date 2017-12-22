webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/component/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\r\n    margin-top: 15px;\r\n    padding-right: 0px; \r\n    padding-left: 0px;\r\n}\r\n\r\n.flot-chart {\r\n    display: inline-block;\r\n    height: 400px;\r\n    width: 100%;\r\n    background: white;\r\n}\r\n\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nh1{\r\n    font-weight: bold;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\n.line{\r\n    border-bottom-style: double;\r\n    border-bottom-color: grey;\r\n}\r\n\r\n.lighten-1{\r\n    background-color: white!important;\r\n}\r\n.lighten-2{\r\n    background-color: #64B5F6!important;\r\n}\r\n.lighten-3{\r\n    background-color: #4db6ac!important;\r\n}\r\n\r\n.stats-card{\r\n    display: block;\r\n    /* position: relative; */\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n    border-radius: 3px;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    margin: 25px 0;\r\n    height: 130px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n.stats-card .card-header{\r\n    background: linear-gradient(60deg, #ffa726, #fb8c00);\r\n    box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28),\r\n     0 4px 20px 0px rgba(0, 0, 0, 0.12),\r\n      0 7px 8px -5px rgba(255, 152, 0, 0);\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 25px;\r\n    z-index: 1;\r\n    float: left;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 15px; \r\n    width: 90px;\r\n    height: 90px;\r\n    text-align: center;     \r\n}\r\n\r\n\r\n.green{\r\n    background: linear-gradient(60deg, #66bb6a, #43a047)!important;\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), \r\n    0 4px 20px 0px rgba(0, 0, 0, 0.12),\r\n     0 7px 8px -5px rgba(76, 175, 80, 0.2)!important;   \r\n}\r\n\r\n.red{\r\n    background: linear-gradient(60deg, #ef5350, #e53935)!important;\r\n    box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), \r\n    0 4px 20px 0px rgba(0, 0, 0, 0.12),\r\n     0 7px 8px -5px rgba(244, 67, 54, 0.2)!important;\r\n\r\n}\r\n\r\n.blue{\r\n    background: linear-gradient(60deg, #26c6da, #00acc1)!important;\r\n    box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28),\r\n     0 4px 20px 0px rgba(0, 0, 0, 0.12),\r\n      0 7px 8px -5px rgba(0, 188, 212, 0.2)!important;\r\n}\r\n.stats-card .card-content p{\r\n    color: #999999;\r\n    margin-bottom: 0;\r\n    text-align: right;\r\n    font-weight: 300;\r\n \r\n}\r\n\r\n.title{\r\n    text-align: right;\r\n    color: #777777;\r\n    font-weight: 300;\r\n    margin: 0;\r\n}\r\n.footer{\r\n    margin: 0 20px 10px;\r\n    padding-top: 10px;\r\n    border-top: 1px solid #eeeeee;\r\n}\r\n\r\n\r\n.stats-card .material-icons {\r\n   font-size: 45px;\r\n   color:white;\r\n   margin-top: 12px;\r\n  \r\n}\r\n.stats-card .count {\r\n    position: relative;\r\n    font-weight: 700;\r\n    font-size: 2rem;\r\n    line-height: 2rem;\r\n}\r\n.stats-card .name {\r\n    position: relative;\r\n    font-size: 1rem;\r\n    line-height: 1rem;\r\n}\r\n\r\n.footer-last{\r\n    border-top:1px solid  #eeeeee;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.card-content{\r\n    margin: 0px 8px;\r\n}\r\n\r\n\r\n .last-line{\r\n    margin-top:24px;\r\n}\r\n\r\n\r\n\r\n\r\n.card-flowchart\r\n{\r\n        display: block;\r\n        /* position: relative; */\r\n        overflow: hidden;\r\n        z-index: 2;\r\n        box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n        border-radius: 6px;\r\n        color: rgba(0, 0, 0, 0.87);\r\n        margin: 25px 0;\r\n        background-color: white!important;\r\n        padding: 10px;\r\n}\r\n\r\n.card-flowchart .card-header{\r\n    background: linear-gradient(60deg,#ef5350,#e53935);\r\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(244,67,54,.4);\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 25px;\r\n    z-index: 1;\r\n    float: left;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 15px; \r\n    /* width: 90px;\r\n    height: 90px; */\r\n    text-align: center;\r\n}\r\n\r\n.card-flowchart .material-icons {\r\n    font-size: 24px;\r\n    color:white;\r\n    width:35px;\r\n    height: 29px;\r\n    text-align: center;\r\n    margin-top:10px;\r\n}\r\n\r\n.card-flowchart .card-content p{\r\n    color: #999999;\r\n    margin-bottom: 0;\r\n    text-align: right;\r\n    font-weight: 300;\r\n\r\n}\r\n\r\n.rose{\r\n    background: linear-gradient(60deg,#ec407a,#d81b60)!important;\r\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4)!important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"card-panel stats-card lighten-1\" [routerLink]=\"['/complaint']\">\r\n        <div class=\"card-header\">\r\n          <i class=\"material-icons\">report</i>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <p>Complaints</p>\r\n          <h3 class=\"title\">{{allCounts.complaint}}</h3>\r\n        </div>\r\n        <hr class=\"last-line\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"card-panel stats-card lighten-1 \" [routerLink]=\"['/appreciation']\">\r\n        <div class=\"card-header green\">\r\n          <i class=\"material-icons\">thumb_up</i>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <p>Appreciations</p>\r\n          <h3 class=\"title\">{{allCounts.appreciation}}</h3>\r\n        </div>\r\n        <hr class=\"last-line\">\r\n      </div>\r\n    </div>\r\n     <div class=\"col-lg-3 col-sm-6 col-md-6\">\r\n      <div class=\"card-panel stats-card lighten-1\" [routerLink]=\"['/conversation']\">\r\n        <div class=\"card-header blue\">\r\n          <i class=\"material-icons\">message</i>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <p>Messages</p>\r\n          <h3 class=\"title\">{{allCounts.conversation}}</h3>\r\n        </div>\r\n        <hr class=\"last-line\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"card-panel stats-card lighten-1\" [routerLink]=\"['/circular']\">\r\n          <div class=\"card-header red\">\r\n              <i class=\"material-icons\">announcement</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <p>Circular</p>\r\n            <h3 class=\"title\">{{allCounts.circular}}</h3>\r\n          </div>\r\n          <hr class=\"last-line\">\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- new code -->\r\n<div class=\"row\" (window:resize)=\"onResize($event)\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"card-flowchart\">\r\n      <div class=\"card-header\">\r\n        <i class=\"material-icons\">insert_chart</i>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <p>Complaint Status and Categorywise </p>\r\n        <div class=\"panel-body\">\r\n          <div class=\"flot-chart\">\r\n            <div class=\"row text-center\">\r\n              <loader [condition]=\"loader\"></loader>\r\n            </div>\r\n            <div style=\"text-align: center\" *ngIf=\"(responseByCategoryAndStatus == 0 &&  !loader)\">No data to display</div>\r\n            <div class=\"flot-chart-content\" *ngIf=\"complaintByCategoryAndStatus\" GoogleChart id=\"chart_by_category_status\" [chartData]=\"complaintByCategoryAndStatus\"\r\n              [chartOptions]=\"categoryAndStatusChartOptions\" chartType=\"BarChart\" (onSelected)=\"onSelected($event)\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- second chart -->\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"card-flowchart\">\r\n      <div class=\"card-header rose\">\r\n        <i class=\"material-icons\">pie_chart</i>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <p>Complaint Statuswise</p>\r\n        <div class=\"panel-body\">\r\n          <div class=\"flot-chart\">\r\n            <div class=\"row text-center\">\r\n              <loader [condition]=\"loader1\"></loader>\r\n            </div>\r\n            <div style=\"text-align: center\" *ngIf=\"(responseByStatus== 0 &&  !loader1)\">No data to display</div>\r\n            <div class=\"flot-chart-content\" *ngIf=\"complaintByStatus\" GoogleChart id=\"complaint_chart_by_status\" [chartData]=\"complaintByStatus\"\r\n              [chartOptions]=\"complaintByStatusChartOptions\" chartType=\"PieChart\" (onSelected)=\"onSelected($event)\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- \r\n<fieldset class=\"the-fieldset\">\r\n  <legend class=\"the-legend\">\r\n    complaint status and categorywise <span> <i class=\"material-icons\">cloud_download</i></span>\r\n\r\n  </legend>\r\n  <legend class=\"the-legend2\">\r\n    Complaint Statuswise<span> <i class=\"material-icons\">cloud_download</i></span>\r\n  </legend>\r\n  <div class=\"row\" (window:resize)=\"onResize($event)\">\r\n    <div class=\"col-lg-6 col-sm-12\">\r\n      <div class=\"panel-body margin-left\">\r\n        <div class=\"flot-chart\">\r\n          <div class=\"row text-center\">\r\n            <loader [condition]=\"loader\"></loader>\r\n          </div>\r\n          <div style=\"text-align: center\" *ngIf=\"(responseByCategoryAndStatus == 0 &&  !loader)\">No data to display</div>\r\n          <div class=\"flot-chart-content\" *ngIf=\"complaintByCategoryAndStatus\" GoogleChart id=\"chart_by_category_status\" [chartData]=\"complaintByCategoryAndStatus\"\r\n            [chartOptions]=\"categoryAndStatusChartOptions\" chartType=\"BarChart\" (onSelected)=\"onSelected($event)\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6  col-sm-12\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"flot-chart\">\r\n          <div class=\"row text-center\">\r\n            <loader [condition]=\"loader1\"></loader>\r\n          </div>\r\n          <div style=\"text-align: center\" *ngIf=\"(responseByStatus== 0 &&  !loader1)\">No data to display</div>\r\n          <div class=\"flot-chart-content\" *ngIf=\"complaintByStatus\" GoogleChart id=\"complaint_chart_by_status\" [chartData]=\"complaintByStatus\"\r\n            [chartOptions]=\"complaintByStatusChartOptions\" chartType=\"PieChart\" (onSelected)=\"onSelected($event)\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</fieldset> -->"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chart_service__ = __webpack_require__("../../../../../src/app/providers/chart.service.ts");
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





var DashboardComponent = (function () {
    function DashboardComponent(cs, router, ls, zone, barLoaderService) {
        var _this = this;
        this.cs = cs;
        this.router = router;
        this.ls = ls;
        this.zone = zone;
        this.barLoaderService = barLoaderService;
        this.loader = false;
        this.loader1 = false;
        this.loader2 = false;
        this.responseByStatus = [];
        this.responseByCategoryAndStatus = [];
        this.responseSuggestionByStatus = [];
        this.allCounts = {};
        this.ls.setLoader(false);
        this.loader = true;
        this.loader1 = true;
        this.loader2 = true;
        this.getCounts();
        cs.getComplaintByCategoryAndStatus().subscribe(function (response) {
            if (response.status === 204) {
                _this.loader = false;
                _this.responseByCategoryAndStatus = 0;
                return;
            }
            _this.responseByCategoryAndStatus = response;
            _this.chartByCategoryAndStatus();
        }, function (err) {
            _this.router.navigate(['/error']);
        });
        cs.getComplaintByStatus().subscribe(function (response) {
            if (response.status === 204) {
                _this.loader1 = false;
                _this.responseByStatus = 0;
                return;
            }
            _this.responseByStatus = response;
            _this.chartByStatus();
        }, function (err) {
            _this.router.navigate(['/error']);
        });
        // cs.getSuggestionByStatus().subscribe((res) => {
        //   if(res.status === 204){
        //      this.responseSuggestionByStatus =0;
        //     return;
        //   }
        //   this.responseSuggestionByStatus = res;
        //   this.chartBySuggestionStatus();
        // }, (err) => {
        //   this.router.navigate(['/error']);
        // });
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    DashboardComponent.prototype.onSelected = function (data) {
        var _this = this;
        var dataTable = data.wrapper.getDataTable();
        var parts = data.e.targetID.split('#');
        switch (data.chartId.id) {
            case "complaint_chart_by_status":
                if (parts[0] == "slice") {
                    this.zone.run(function () { return _this.router.navigate(['/complaint/status/' + dataTable.getValue(parseInt(parts[1]), 2)]); });
                }
                else if (parts[0] == "legendentry") {
                }
                break;
            case "EWNS_suggestion":
                if (parts[0] == "slice") {
                    this.zone.run(function () { return _this.router.navigate(['/suggestion/status/' + dataTable.getValue(parseInt(parts[1]), 2)]); });
                }
                else if (parts[0] == "legendentry") {
                }
                break;
            case "chart_by_category_status":
                if (parts[0] == "vAxis") {
                    var categoryId = dataTable.getValue(parseInt(parts[parts.indexOf('label') + 1]), 1);
                    this.zone.run(function () { return _this.router.navigate(['/complaint/category-status/category/' + categoryId]); });
                }
                else if (parts[0] == "bar") {
                    var categoryId = dataTable.getValue(parseInt(parts[2]), 1);
                    var statusId = dataTable.getValue(parseInt(parts[2]), (parseInt(parts[1]) + 1) * 2 + 1);
                    this.zone.run(function () { return _this.router.navigate(['complaint/category-status/' + categoryId + '/' + statusId]); });
                }
                else if (parts[0] == "legendentry") {
                    for (var i = 0; i < this.responseByCategoryAndStatus.length; i++) {
                        for (var j = 0; j < this.responseByCategoryAndStatus[i].statusResults.length; j++) {
                            dataTable.setCell(i, parseInt(this.responseByCategoryAndStatus[i].statusResults[j].statusId) * 2, this.responseByCategoryAndStatus[i].statusResults[j].count);
                        }
                    }
                    if (parseInt(parts[1]) != 6)
                        for (var i = 0; i < this.responseByCategoryAndStatus.length; i++) {
                            for (var j = 0; j < this.responseByCategoryAndStatus[i].statusResults.length; j++) {
                                if (j != parseInt(parts[1]))
                                    dataTable.setCell(i, parseInt(this.responseByCategoryAndStatus[i].statusResults[j].statusId) * 2, 0);
                            }
                        }
                    data.wrapper.draw();
                }
                break;
        }
    };
    DashboardComponent.prototype.onResize = function (event) {
        console.log("check0");
        this.chartByStatus();
        this.chartByCategoryAndStatus();
        this.chartBySuggestionStatus();
    };
    DashboardComponent.prototype.chartByStatus = function () {
        console.log("check1");
        var data = [];
        data.push(['Status', 'complaint', { type: 'number', role: 'scope' }]);
        for (var i = 0; i < this.responseByStatus.length; i++) {
            data.push([this.responseByStatus[i].statusName, this.responseByStatus[i].count, this.responseByStatus[i].statusId]);
        }
        this.complaintByStatus = data;
        this.complaintByStatusChartOptions = {
            // title: "Complaints Report - Statuswise",
            legend: { position: 'bottom', textStyle: { fontName: 'sans-serif', fontSize: 12 }, maxLines: 4 },
            backgroundColor: 'transparent',
            titleTextStyle: {
                fontName: '-apple-system, "Helvetica Neue", "Roboto", sans-serif',
                fontSize: 14
            },
            colors: ['#4caf50', '#00acc1', '#FFEB3B', '#e01e63', '#e53935', '#9c27b0', '#fb8c00'],
            chartArea: { left: '10%', height: "40%", width: "40%", bottom: '10%', right: '10%', top: '0%' },
            is3D: true
        };
        this.loader1 = false;
    };
    DashboardComponent.prototype.chartByCategoryAndStatus = function () {
        console.log("check2");
        var data = [[]];
        data[0].push('categoryName');
        data[0].push({ type: 'number', role: 'scope' });
        for (var i = 0; i < this.responseByCategoryAndStatus[0].statusResults.length; i++) {
            data[0].push(this.responseByCategoryAndStatus[0].statusResults[i].statusName);
            data[0].push({ type: 'number', role: 'scope' });
        }
        data[0].push('All Status');
        for (var i = 0; i < this.responseByCategoryAndStatus.length; i++) {
            data[i + 1] = [];
            data[i + 1].push(this.responseByCategoryAndStatus[i].categoryName);
            data[i + 1].push(this.responseByCategoryAndStatus[i].categoryId);
            for (var j = 0; j < this.responseByCategoryAndStatus[i].statusResults.length; j++) {
                data[i + 1].push(this.responseByCategoryAndStatus[i].statusResults[j].count);
                data[i + 1].push(this.responseByCategoryAndStatus[i].statusResults[j].statusId);
            }
            data[i + 1].push(0);
        }
        this.complaintByCategoryAndStatus = data;
        this.categoryAndStatusChartOptions = {
            // title: "Complaint Report - Categorywise",
            titleTextStyle: {
                fontName: 'sans-serif',
                fontSize: 14,
                bold: true,
            },
            isStacked: 'true', chartArea: {},
            colors: ['#4caf50', '#00acc1', '#FFEB3B', '#e01e63', '#e53935', '#9c27b0', '#fb8c00']
        };
        this.loader = false;
    };
    DashboardComponent.prototype.chartBySuggestionStatus = function () {
        var data = [];
        console.log("check3");
        data.push(['Status', 'suggestion', { type: 'number', role: 'scope' }]);
        for (var i = 0; i < this.responseSuggestionByStatus.length; i++) {
            data.push([this.responseSuggestionByStatus[i].statusName, this.responseSuggestionByStatus[i].count, this.responseSuggestionByStatus[i].statusId]);
        }
        this.suggestionByStatus = data;
        this.suggestionByStatusChartOptions = {
            // title: "Suggestions",
            legend: { position: 'bottom', textStyle: { fontName: 'sans-serif', fontSize: 12 }, maxLines: 4 },
            backgroundColor: 'transparent',
            titleTextStyle: {
                fontName: '-apple-system, "Helvetica Neue", "Roboto", sans-serif',
                fontSize: 14
            },
            colors: ['#4caf50', '#00acc1', '#FFEB3B', '#e01e63', '#e53935', '#9c27b0', '#fb8c00'],
            chartArea: { left: '10%', height: "40%", width: "40%", bottom: '10%', right: '10%', top: '5%' },
            pieHole: 0.4
        };
        this.loader2 = false;
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    DashboardComponent.prototype.getCounts = function () {
        var _this = this;
        this.cs.getAllCounts().subscribe(function (response) {
            console.log(response);
            _this.allCounts = response;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_chart_service__["a" /* ChartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__["a" /* LoaderStop */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map