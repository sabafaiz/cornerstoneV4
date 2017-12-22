webpackJsonp(["foodmenu.module"],{

/***/ "../../../../../src/app/component/foodmenu/foodmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon-calendar:before,.glyphicon-globe:before,.glyphicon-list:before{\r\n    font-size: 20px !important;\r\n}\r\n\r\n.food-pic{\r\n    left:5px;\r\n    width: 93px;\r\n    height: 93px;\r\n    margin: auto;\r\n    border-radius: 100%;\r\n\r\n}\r\n\r\n.snack, .lunch{\r\n\tmargin: 0 auto;\r\n\theight:145px;\r\n\twidth : 375px;\r\n\tborder : 1px solid black;\r\n\tborder-radius:5px;\r\n\toverflow: auto;\r\n}\r\n\r\n.food-list{\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/foodmenu/foodmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-custom\">\r\n    <angular2-fullcalendar [options]=\"menuOptions\" id=\"menu\"></angular2-fullcalendar>\r\n    <div class=\"row text-center\">\r\n        <loader [condition]=\"loader\" class=\"centerLoader\"></loader>    \r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"addItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add a food item</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"addItem\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" (keyup)=\"notValid()\" name=\"name\" formControlName=\"name\" placeholder=\"Enter name of food item here\">\r\n                <div class=\"alert alert-warning\" *ngIf=\"duplicate\">* Item Already Exist</div>\r\n                <div [hidden]=\"addItem.controls.name.valid || addItem.controls.name.pristine || addItem.controls.name.untouched\" class=\"alert alert-warning\" >This field is required</div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"type\">Type</label>\r\n                <select class=\"form-control\" formControlName=\"type\" name=\"type\" id=\"type\">\r\n                    <option value='Snack'>\r\n                      Snack\r\n                    </option>\r\n                    <option value=\"Lunch\">\r\n                      lunch\r\n                    </option>\r\n                </select>\r\n<!--                 <input type=\"text\" class=\"form-control\" id=\"type\" name=\"type\" formControlName=\"type\" placeholder=\"En ter type of food item here\">-->\r\n                <div [hidden]=\"addItem.controls.type.valid || addItem.controls.type.pristine || addItem.controls.type.untouched\" class=\"alert alert-warning\" >This field is required</div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"url\">Url</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"url\" name=\"url\" formControlName=\"url\" placeholder=\"Enter url of food item here\">\r\n                <div [hidden]=\"addItem.controls.url.valid || addItem.controls.url.pristine || addItem.controls.url.untouched\" class=\"alert alert-warning\" >This field is required</div>\r\n              </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"postItem()\" \r\n        [disabled]=\" addItem.invalid || duplicate \" >Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"modal fade\" id=\"addMenuModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add a food menu</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"addMenu\">\r\n            <div class=\"form-group\">\r\n                <label for=\"foodId\">Food Item</label>\r\n                <select  formControlName=\"foodId\" name=\"foodId\" id=\"foodId\" class=\"form-control\" (ngModelChange)=\"func()\">\r\n                <option disabled=\"true\" selected=\"true\" value=\"\">Select Food Item</option>\r\n                  <option *ngFor=\"let item of foodItems\"  [value]=\"item.id\">{{item.name}}</option>\r\n                </select>\r\n                <loader [condition]=\"itemLoader\" class=\"dropdownLoader\"></loader>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"day\">Day</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"day\" name=\"day\" formControlName=\"day\" (change)=\"onDueDate($event)\">\r\n            </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"postMenu()\" data-dismiss=\"modal\" [disabled]=\"addMenu.invalid\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"modal fade\" id=\"deleteItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Delete a food menu</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"overflow: hidden;padding:7px;\">\r\n        <form>\r\n            <div class=\"form-group\" style=\"overflow: hidden\">\r\n                <label for=\"foodId\">Food Items</label><br>\r\n\r\n                <input class=\"form-control\" *ngIf=\"foodItems1.length!=0\" (keyup)=\"searchD($event)\" type=\"text\" placeholder=\"Search Item\" name=\"\">\r\n\r\n              <span style=\"float:left; top : 45px;\" *ngIf=\"startMenuD!=0\" class=\"glyphicon glyphicon-menu-left\" (click)=\"moveLeftD(startMenuD, endMenuD)\"></span>\r\n\r\n              <span style=\"float:left;overflow: hidden \" *ngFor=\"let item of foodItems1; let i = index \">\r\n                <img [title]=\"item.name\"  class=\"food-pic\" [src]=\"item.url\" [alt]=\"item.name\" draggable=\"true\"  *ngIf=\"i>=startMenuD && i<=endMenuD\" />\r\n                <span style=\"top:-30px\" (click)=\"removeFoodItem(item)\" class=\"glyphicon glyphicon-remove\" *ngIf=\"i>=startMenuD && i<=endMenuD\"></span><br>\r\n                <div style=\"display:inline-block;width:100px;text-align:center;\" *ngIf=\"i>=startMenuD && i<=endMenuD\" >{{item.name}}</div>\r\n              </span>\r\n\r\n              <span style=\"float:left; top :45px; \" *ngIf=\"endMenuD<(foodItems1.length - 1)\" class=\"glyphicon glyphicon-menu-right\" (click)=\"moveRightD(startMenuD, endMenuD)\"></span>\r\n            </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" [disabled]=\"addMenu.invalid\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"confirmModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Are You Sure?</h4>\r\n      </div>\r\n      <div class=\"modal-footer\" style=\"margin-top:0px;\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"sureOrNot( true )\" data-dismiss=\"modal\" >Confirm</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"sureOrNot( false )\" data-dismiss=\"modal\" >Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"addMenuModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"empty()\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add a food menu</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n\r\n      <br>\r\n        <form [formGroup]=\"addMenu\">\r\n            <div class=\"form-group\">\r\n            <div style=\"overflow:hidden\">\r\n              \r\n            <div style=\"overflow:hidden\">  \r\n              Snacks : \r\n              <br>\r\n\r\n              <input class=\"form-control\" (keyup)=\"searchS($event)\" type=\"text\" placeholder=\"Search Item\" name=\"\">\r\n              <br>\r\n              <div style=\"overflow: hidden\">\r\n                <span style=\"float:left;top:45px\" *ngIf=\"startMenuS!=0\" class=\"glyphicon glyphicon-menu-left\" (click)=\"moveLeftS(startMenuS, endMenuS)\"></span>\r\n                <span style=\"float:left;overflow: hidden \" *ngFor=\" let item of foodItemsS1; let i = index \">\r\n                  \r\n                  <img (dragstart)=\"drag($event,item.name)\" *ngIf=\" item.type=='Snack'  && i>=startMenuS && i<=endMenuS\" [title]=\"item.name\" class=\"food-pic\" [src]=\"item.url\" [alt]=\"item.name\" draggable=\"true\" /><br>\r\n                  <div style=\"display:inline-block;width:100px;text-align:center; \" *ngIf=\" item.type=='Snacks' && i>=startMenuS && i<=endMenuS\" >{{item.name}}</div>\r\n                  \r\n                </span>\r\n                <span style=\"float:right;top:45px\"  class=\"glyphicon glyphicon-menu-right\" (click)=\"moveRightS(startMenuS, endMenuS)\" *ngIf= \" (foodItemsS1.length - 1) > endMenuS\"></span>\r\n                </div>\r\n                <br>\r\n\r\n                <div *ngIf=\"foodItemsS1.length!=0\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" class=\"snack\">\r\n                    <ul class=\"list-group\" style=\"margin:auto;padding-left: 5px; overflow: auto\"> \r\n                      <span *ngFor=\"let i of snackslist \">\r\n                      \r\n                      <li class=\"list-group-items food-list\" *ngIf=\"snackslist.length > 0\">{{i}} <span *ngIf=\"snackslist[0]!='Drag Items Here for Snacks'\" class=\"glyphicon glyphicon-remove\" (click)=\"removeItem(i)\"></span></li>\r\n                      </span>\r\n                     </ul>\r\n                    <!-- <textarea (drop)=\"drop($event)\" style=\"width:100%;height:100%;\" placeholder=\"Snacks\" [value]=\"snackslist\"></textarea>           -->\r\n                  </div>\r\n                  <div *ngIf=\"foodItemsS1.length==0\">\r\n                  No Item Present Add Some :  \r\n\r\n                  <button class=\"btn btn-primary\" (click)=\"addItemFunc()\">Add Food Item</button>\r\n                </div>\r\n            </div>  \r\n              <br>\r\n            <div>  \r\n                Lunch : \r\n              <br>\r\n\r\n              <input  class=\"form-control\" (keyup)=\"searchL($event)\" type=\"text\" placeholder=\"Search Item\" name=\"\">\r\n\r\n              <br>\r\n                <span style=\"float:left;top:45px\" *ngIf=\"startMenuL!=0\" class=\"glyphicon glyphicon-menu-left\" (click)=\"moveLeftL(startMenuL, endMenuL)\"></span>\r\n                <span style=\"float:left;overflow: hidden \" *ngFor=\" let item of foodItemsL1; let i = index \">\r\n                  \r\n                  <img (dragstart)=\"drag($event,item.name)\" *ngIf=\" item.type=='Lunch' && i>=startMenuL && i<=endMenuL\" [title]=\"item.name\" class=\"food-pic\" [src]=\"item.url\" [alt]=\"item.name\" draggable=\"true\" /><br>\r\n                  <div style=\"display:inline-block;width:100px;text-align:center; \" *ngIf=\" item.type=='Lunch' && i>=startMenuL && i<=endMenuL\" >{{item.name}}</div>\r\n                  \r\n                </span>\r\n                <span style=\"float:right;top:45px\" class=\"glyphicon glyphicon-menu-right\" (click)=\"moveRightL(startMenuL, endMenuL)\" *ngIf= \" foodItemsL1.length - 1 > endMenuL\"></span>\r\n            </div>    \r\n              </div>\r\n                <br>\r\n                <div style=\"display:block;overflow: hidden\">\r\n                  \r\n                  <div *ngIf=\"foodItemsL1.length!=0\" (drop)=\"droplunch($event)\" (dragover)=\"allowDrop($event)\" class=\"lunch\">\r\n                    <ul class=\"list-group\" style=\"padding-left: 5px; overflow: auto\"> \r\n                      <span *ngFor=\" let i of lunchlist \">\r\n                      \r\n                      <li class=\"list-group-items food-list\" *ngIf=\"lunchlist.length > 0\">{{i}} <span *ngIf=\"lunchlist[0]!='Drag Items Here for Lunch'\" class=\"glyphicon glyphicon-remove\" (click)=\"removeItemlunch(i)\"></span></li>\r\n                      </span>\r\n                     </ul>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"foodItemsL1.length==0\">\r\n                  No Item Present Add Some : \r\n\r\n                  <button class=\"btn btn-primary\" (click)=\"addItemFunc()\">Add Food Item</button>\r\n                </div>\r\n                <br>\r\n                <!-- <label for=\"foodId\">Food Item</label>\r\n                <select  formControlName=\"foodId\" name=\"foodId\" id=\"foodId\" class=\"form-control\" (ngModelChange)=\"func()\">\r\n                <option disabled=\"true\" selected=\"true\" value=\"\">Select Food Item</option>\r\n                  <option *ngFor=\"let item of foodItems\"  [value]=\"item.id\">{{item.name}}</option>\r\n                </select> -->\r\n\r\n                <loader [condition]=\"itemLoader\" class=\"dropdownLoader\"></loader>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"day\">Day</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"day\" name=\"day\" formControlName=\"day\" (change)=\"onDueDate($event)\">\r\n            </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"postMenu()\" data-dismiss=\"modal\" [disabled]=\" addMenu.invalid && emptyL || emptyS \">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"messageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{heading}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{message}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"clickModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"selectedMenu\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{selectedMenu.title}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div>\r\n              <img src=\"{{selectedMenu.foodPicUrl}}\" class=\"food-pic\">\r\n            </div>\r\n        </div>\r\n        <hr class=\"style-line\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2\">\r\n            <i class=\"glyphicon glyphicon-list pull-right\"></i>\r\n          </div>\r\n          <div class=\"col-sm-10\">\r\n            <label>Food type</label>\r\n            <div class=\"url\">{{selectedMenu.foodType}}</div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"style-line\">\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2\">\r\n            <i class=\"glyphicon glyphicon-calendar pull-right \" ></i>\r\n          </div>\r\n          <div class=\"col-sm-10\">\r\n            <label>Day</label>\r\n            <div class=\"day\">{{selectedMenu.start| date}}</div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/foodmenu/foodmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_foodmenu_service__ = __webpack_require__("../../../../../src/app/providers/foodmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullcalendar__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FoodmenuComponent = (function () {
    function FoodmenuComponent(ls, fs, http, barLoaderService) {
        var _this = this;
        this.ls = ls;
        this.fs = fs;
        this.http = http;
        this.barLoaderService = barLoaderService;
        this.foodItems = [];
        this.duplicate = false;
        this.loader = false;
        this.itemLoader = false;
        this.snackslist = ["Drag Items Here for Snacks"];
        this.lunchlist = ["Drag Items Here for Lunch"];
        this.selectedMenu = {};
        // public  submitProgress:any;
        this.tryfoodtype = "0";
        this.startMenuS = 0;
        this.endMenuS = 4;
        this.startMenuL = 0;
        this.endMenuL = 4;
        this.startMenu = 0;
        this.endMenu = 4;
        this.foodItemsL = [];
        this.foodItemsS = [];
        this.foodItemsL1 = [];
        this.foodItemsS1 = [];
        this.foodItemIds = [];
        this.emptyL = true;
        this.emptyS = true;
        this.menuOptions = {
            fixedWeekCount: false,
            editable: true,
            eventLimit: true,
            firstDay: 1,
            selectable: true,
            selectHeader: true,
            timeFormat: ' ',
            header: {
                right: 'today,month,listMonth, deleteItem, addItem prev,next '
            },
            customButtons: {
                deleteItem: {
                    text: 'Food Item -',
                    click: function () {
                        $('#deleteItemModal').modal();
                    }
                },
                addItem: {
                    text: 'Food Item +',
                    click: function () {
                        $('#addItemModal').modal();
                    }
                }
            },
            events: [],
            viewRender: function (view, element) {
                var b = __WEBPACK_IMPORTED_MODULE_6_jquery__('#menu').fullCalendar('getDate');
                var check = __WEBPACK_IMPORTED_MODULE_3_moment__(b, 'YYYY/MM/DD');
                var month = check.format('MM');
                var year = check.format('YYYY');
                _this.menuMonth = year + "-" + month;
                //   console.log(this.menuMonth);
                _this.getMenu();
            },
            select: function (start, end) {
                if (start.isBefore(__WEBPACK_IMPORTED_MODULE_3_moment__().subtract(1, "days"))) {
                    __WEBPACK_IMPORTED_MODULE_6_jquery__('#menu').fullCalendar('unselect');
                    $('#modal-unselect').modal();
                    return false;
                }
                else {
                    _this.start = __WEBPACK_IMPORTED_MODULE_3_moment__(start).format('YYYY-MM-DD');
                    _this.addMenu = _this.addMenuForm();
                    console.log(_this.addMenu);
                    $('#addMenuModal').modal();
                }
            },
            dayRender: function (date, cell) {
                if (date.isBefore(__WEBPACK_IMPORTED_MODULE_3_moment__().subtract(1, "days"))) {
                    cell.css("background-color", "#fbfbfb");
                    // cell.css("color","grey");
                }
                else {
                    cell.css("cursor", "pointer");
                }
            },
            eventClick: function (event, jsEvent, view) {
                _this.selectedMenu = event;
                $('#clickModal').modal();
            },
            eventMouseover: function (calEvent, jsEvent) {
                var tooltip = '<div class="tooltipevent" style="width:100px;height:60px;background:#ccc;position:absolute;z-index:10001;padding:7px;color:black;font-weight:500;font-size:15px">Click to view menu</div>';
                $("body").append(tooltip);
                $(this).mouseover(function (e) {
                    $(this).css('z-index', 100);
                    $('.tooltipevent').fadeIn('500');
                    $('.tooltipevent').fadeTo('10', 1.9);
                }).mousemove(function (e) {
                    $('.tooltipevent').css('top', e.pageY + 10);
                    $('.tooltipevent').css('left', e.pageX + 20);
                });
            },
            eventMouseout: function (calEvent, jsEvent) {
                $(this).css('z-index', 8);
                $('.tooltipevent').remove();
            },
            eventDrop: function (event, delta, revertfunc) {
                revertfunc();
            }
        };
        this.menu = [];
        this.startMenuD = 0;
        this.endMenuD = 4;
        this.foodItems1 = [];
        this.ls.setLoader(false);
        this.addItem = this.addItemForm();
        this.addMenu = this.addMenuForm();
        // this.getMenu();
        this.getItem();
    }
    FoodmenuComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    FoodmenuComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    FoodmenuComponent.prototype.addItemForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            url: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
        });
    };
    FoodmenuComponent.prototype.addMenuForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            foodIds: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            day: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.start, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
        });
    };
    FoodmenuComponent.prototype.getMenu = function () {
        var _this = this;
        this.loader = true;
        this.fs.getMenu(this.menuMonth).subscribe(function (res) {
            if (res.status == 204) {
                _this.loader = false;
            }
            else {
                _this.loader = false;
                var menuObj = {};
                console.log(res);
                console.log("-");
                res.forEach(function (element, index) {
                    menuObj = new Object({
                        title: res[index].foodName,
                        start: res[index].day,
                        foodPicUrl: res[index].foodPicUrl,
                        foodType: res[index].foodType,
                        id: res[index].id
                    });
                    _this.menuOptions.events.push(menuObj);
                });
                for (var item = 0; item < _this.menuOptions.events.length; item++) {
                    for (var j = item + 1; j < _this.menuOptions.events.length; j++) {
                        if (_this.menuOptions.events[item].start == _this.menuOptions.events[j].start && _this.menuOptions.events[item].foodType == _this.menuOptions.events[j].foodType && _this.menuOptions.events[j].title != "") {
                            _this.menuOptions.events[item].title += ", " + _this.menuOptions.events[j].title;
                            _this.menuOptions.events[j].title = "";
                        }
                    }
                }
                for (var item = 0; item < _this.menuOptions.events.length; item++) {
                    if (_this.menuOptions.events[item].title == "") {
                        _this.menuOptions.events.splice(item, 1);
                        item--;
                    }
                }
                console.log(_this.menuOptions.events);
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#menu').fullCalendar('removeEvents');
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#menu').fullCalendar('renderEvents', _this.menuOptions.events, true);
                console.log(_this.menuOptions.events);
                _this.menuOptions.events = [];
            }
        }, function (err) {
        });
    };
    FoodmenuComponent.prototype.itemSeparation = function () {
        var i = 0, j = 0;
        for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
            var food = _a[_i];
            if (food.type == "Lunch") {
                this.foodItemsL[i++] = food;
            }
            else {
                this.foodItemsS[j++] = food;
            }
        }
        this.foodItemsL1 = this.foodItemsL;
        this.foodItemsS1 = this.foodItemsS;
    };
    FoodmenuComponent.prototype.getItem = function () {
        var _this = this;
        this.itemLoader = true;
        this.fs.getItem().subscribe(function (res) {
            _this.itemLoader = false;
            // this.foodItems=JSON.parse(res);
            _this.foodItems = res;
            _this.itemSeparation();
            _this.foodItems1 = _this.foodItems = res;
            console.log(_this.foodItemsS1);
            if (_this.foodItemsL.length <= 5) {
                _this.endMenuL = _this.foodItemsL.length - 1;
            }
            if (_this.foodItemsS.length <= 5) {
                _this.endMenuS = _this.foodItemsS.length - 1;
            }
            console.log(_this.foodItems);
            console.log(_this.tryfoodtype);
        }, function (err) {
        });
    };
    FoodmenuComponent.prototype.postItem = function () {
        var _this = this;
        $('#addItemModal').modal('hide');
        this.loader = true;
        this.fs.postItem(this.addItem.value).subscribe(function (res) {
            _this.loader = false;
            _this.message = "You have successfully added the food item";
            _this.heading = "Successfully added";
            $('#messageModal').modal();
            _this.getItem();
            _this.getMenu();
        }, function (err) {
            _this.loader = false;
        });
    };
    FoodmenuComponent.prototype.notValid = function () {
        var food = this.addItem.controls["name"].value;
        for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
            var x = _a[_i];
            var x1 = x.name.toLowerCase();
            if (x1 == food.toLowerCase()) {
                this.duplicate = true;
                return;
            }
        }
        this.duplicate = false;
    };
    FoodmenuComponent.prototype.empty = function () {
        this.snackslist = [];
        this.lunchlist = [];
    };
    FoodmenuComponent.prototype.postMenu = function () {
        var _this = this;
        this.foodItemIds = [];
        this.snackslist = [];
        this.lunchlist = [];
        this.loader = true;
        this.fs.postMenu(this.addMenu.value).subscribe(function (res) {
            _this.loader = false;
            _this.message = "You have successfully added the food menu";
            _this.heading = "Successfully added";
            $('#messageModal').modal();
            _this.getMenu();
        }, function (err) {
            _this.loader = false;
        });
    };
    FoodmenuComponent.prototype.onDueDate = function (e) {
        if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
            this.message = "Please choose an upcoming date from the calendar";
            this.heading = "Invalid date input";
            $('#messageModal').modal('show');
            this.addMenu.controls['day'].patchValue(this.start);
        }
    };
    FoodmenuComponent.prototype.func = function () {
        console.log(this.tryfoodtype);
    };
    FoodmenuComponent.prototype.drag = function (ev, str) {
        ev.dataTransfer.setData("text", str);
        console.log(ev);
    };
    FoodmenuComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    FoodmenuComponent.prototype.removeItem = function (i) {
        var index = this.snackslist.indexOf(i);
        this.snackslist.splice(index, 1);
        for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
            var f = _a[_i];
            if (i == f.name) {
                var index1 = this.foodItemIds.indexOf(f.id);
                this.foodItemIds.splice(index1, 1);
                break;
            }
        }
        if (this.snackslist.length == 0) {
            this.emptyS = true;
            this.snackslist[0] = "Drag Items Here for Snacks";
        }
        console.log("decdc" + this.foodItemIds);
    };
    FoodmenuComponent.prototype.drop = function (ev) {
        this.emptyS = false;
        ev.preventDefault();
        console.log(this.snackslist);
        if (this.snackslist[0] == "Drag Items Here for Snacks") {
            this.snackslist[0] = ev.dataTransfer.getData("Text");
            for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
                var f = _a[_i];
                if (ev.dataTransfer.getData("Text") == f.name) {
                    this.foodItemIds.push(f.id);
                    break;
                }
            }
        }
        else {
            this.snackslist.push(ev.dataTransfer.getData("Text"));
            for (var _b = 0, _c = this.foodItems; _b < _c.length; _b++) {
                var f = _c[_b];
                if (ev.dataTransfer.getData("Text") == f.name) {
                    this.foodItemIds.push(f.id);
                    break;
                }
            }
        }
        console.log("decdc" + this.foodItemIds);
        console.log(ev.dataTransfer.getData("Text"));
        console.log(ev);
        this.addMenu.controls['foodIds'].patchValue(this.foodItemIds);
    };
    FoodmenuComponent.prototype.removeItemlunch = function (i) {
        var index = this.lunchlist.indexOf(i);
        this.lunchlist.splice(index, 1);
        for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
            var f = _a[_i];
            if (i == f.name) {
                var index1 = this.foodItemIds.indexOf(f.id);
                this.foodItemIds.splice(index1, 1);
                break;
            }
        }
        if (this.lunchlist.length == 0) {
            this.emptyL = true;
            this.lunchlist[0] = "Drag Items Here for Lunch";
        }
        console.log("decdc " + this.foodItemIds);
    };
    FoodmenuComponent.prototype.droplunch = function (ev) {
        this.emptyL = false;
        ev.preventDefault();
        console.log(this.lunchlist);
        if (this.lunchlist[0] == "Drag Items Here for Lunch") {
            this.lunchlist[0] = ev.dataTransfer.getData("Text");
            for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
                var f = _a[_i];
                if (ev.dataTransfer.getData("Text") == f.name) {
                    this.foodItemIds.push(f.id);
                    break;
                }
            }
        }
        else {
            this.lunchlist.push(ev.dataTransfer.getData("Text"));
            for (var _b = 0, _c = this.foodItems; _b < _c.length; _b++) {
                var f = _c[_b];
                if (ev.dataTransfer.getData("Text") == f.name) {
                    this.foodItemIds.push(f.id);
                    break;
                }
            }
        }
        console.log("decdc" + this.foodItemIds);
        console.log(ev.dataTransfer.getData("Text"));
        console.log(ev);
        this.addMenu.controls['foodIds'].patchValue(this.foodItemIds);
    };
    FoodmenuComponent.prototype.moveLeftS = function (startMenu, endMenu) {
        console.log("left start " + startMenu + "-" + endMenu);
        if ((this.foodItemsS.length - 1) == endMenu) {
            console.log("working");
            endMenu = startMenu - 1;
            startMenu -= 5;
            console.log(endMenu);
        }
        else {
            endMenu -= 5;
            startMenu -= 5;
        }
        console.log("left end " + startMenu + "-" + endMenu);
        this.startMenuS = startMenu;
        this.endMenuS = endMenu;
    };
    FoodmenuComponent.prototype.moveRightS = function (startMenu, endMenu) {
        console.log("right start " + startMenu + "-" + endMenu);
        if (this.foodItemsS.length > endMenu) {
            if (this.foodItemsS.length - endMenu > 4) {
                endMenu += 5;
                startMenu += 5;
            }
            else {
                endMenu = this.foodItemsS.length - 1;
                startMenu += 5;
            }
        }
        console.log("right end " + startMenu + "-" + endMenu);
        this.startMenuS = startMenu;
        this.endMenuS = endMenu;
    };
    FoodmenuComponent.prototype.moveLeftL = function (startMenu, endMenu) {
        console.log("left start " + startMenu + "-" + endMenu);
        if ((this.foodItemsL.length - 1) == endMenu) {
            console.log("working");
            endMenu = startMenu - 1;
            startMenu -= 5;
            console.log(endMenu);
        }
        else {
            endMenu -= 5;
            startMenu -= 5;
        }
        console.log("left end " + startMenu + "-" + endMenu);
        this.startMenuL = startMenu;
        this.endMenuL = endMenu;
    };
    FoodmenuComponent.prototype.moveRightL = function (startMenu, endMenu) {
        console.log("right start " + startMenu + "-" + endMenu);
        if (this.foodItemsL.length > endMenu) {
            if (this.foodItemsL.length - endMenu > 4) {
                endMenu += 5;
                startMenu += 5;
            }
            else {
                endMenu = this.foodItemsL.length - 1;
                startMenu += 5;
            }
        }
        console.log("right end " + startMenu + "-" + endMenu);
        console.log(this.foodItemsL);
        this.startMenuL = startMenu;
        this.endMenuL = endMenu;
        console.log("right end " + this.startMenuS + "-" + this.endMenuS);
    };
    FoodmenuComponent.prototype.moveLeftD = function (startMenu, endMenu) {
        console.log("left start " + startMenu + "-" + endMenu);
        if ((this.foodItems.length - 1) == endMenu) {
            console.log("working");
            endMenu = startMenu - 1;
            startMenu -= 5;
            console.log(endMenu);
        }
        else {
            endMenu -= 5;
            startMenu -= 5;
        }
        console.log("left end " + startMenu + "-" + endMenu);
        this.startMenuD = startMenu;
        this.endMenuD = endMenu;
    };
    FoodmenuComponent.prototype.moveRightD = function (startMenu, endMenu) {
        console.log("right start " + startMenu + "-" + endMenu);
        if (this.foodItems.length > endMenu) {
            if (this.foodItems.length - endMenu > 4) {
                endMenu += 5;
                startMenu += 5;
            }
            else {
                endMenu = this.foodItems.length - 1;
                startMenu += 5;
            }
        }
        console.log("right end " + startMenu + "-" + endMenu);
        this.startMenuD = startMenu;
        this.endMenuD = endMenu;
    };
    FoodmenuComponent.prototype.searchS = function (ev) {
        this.itemSeparation();
        this.foodItemsS1 = this.foodItemsS;
        var keyword = ev.target.value;
        // for(let f of this.foodItemsS1){
        this.foodItemsS1 = this.foodItemsS1.filter(function (item) { return (item.name.toLowerCase()).indexOf(keyword.toLowerCase()) != -1; });
        // if((f.name.toLowerCase()).indexOf(keyword.toLowerCase()) != -1){
        //     var index = this.foodItemsS1.indexOf(f);
        //     this.foodItemsS1.splice(index, 1);        
        // }
        // }
        console.log(this.foodItemsS1);
    };
    FoodmenuComponent.prototype.searchD = function (ev) {
        this.itemSeparation();
        this.foodItems1 = this.foodItems;
        var keyword = ev.target.value;
        // for(let f of this.foodItemsS1){
        this.foodItems1 = this.foodItems1.filter(function (item) { return (item.name.toLowerCase()).indexOf(keyword.toLowerCase()) != -1; });
        // if((f.name.toLowerCase()).indexOf(keyword.toLowerCase()) != -1){
        //     var index = this.foodItemsS1.indexOf(f);
        //     this.foodItemsS1.splice(index, 1);        
        // }
        // }
        console.log(this.foodItemsS1);
    };
    FoodmenuComponent.prototype.addItemFunc = function () {
        $('#addItemModal').modal('show');
        $('#addMenuModal').modal('hide');
    };
    FoodmenuComponent.prototype.sureOrNot = function (bool) {
        console.log(bool);
        if (bool == true) {
            this.remove();
        }
    };
    FoodmenuComponent.prototype.removeFoodItem = function (item) {
        $('#confirmModal').modal('show');
        this.selectedItem = item;
    };
    FoodmenuComponent.prototype.remove = function () {
        var _this = this;
        this.foodItems.splice(this.foodItems.indexOf(this.selectedItem), 1);
        this.fs.deleteItem(this.selectedItem.id).subscribe(function (res) {
            _this.message = "Deletion Successful";
            $('#messageModal').modal('show');
        }, function (err) {
            _this.message = "Deletion Unsuccessful";
            $('#messageModal').modal('show');
        });
        this.getItem();
    };
    FoodmenuComponent.prototype.searchL = function (ev) {
        this.itemSeparation();
        this.foodItemsL1 = this.foodItemsL;
        var keyword = ev.target.value;
        this.foodItemsL1 = this.foodItemsL1.filter(function (item) { return (item.name.toLowerCase()).indexOf(keyword.toLowerCase()) != -1; });
        // for(let f of this.foodItemsL1){
        //     if((f.name.toLowerCase()).indexOf(keyword.toLowerCase()) != -1){
        //         var index = this.foodItemsL1.indexOf(f);
        //         this.foodItemsL1.splice(index, 1);        
        //     }
        // }
    };
    FoodmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foodmenu',
            template: __webpack_require__("../../../../../src/app/component/foodmenu/foodmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/foodmenu/foodmenu.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_1__providers_foodmenu_service__["a" /* FoodmenuService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], FoodmenuComponent);
    return FoodmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/foodmenu/foodmenu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodmenuModule", function() { return FoodmenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foodmenu_component__ = __webpack_require__("../../../../../src/app/component/foodmenu/foodmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_foodmenu_service__ = __webpack_require__("../../../../../src/app/providers/foodmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_drag_drop__ = __webpack_require__("../../../../ng2-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ap_angular2_fullcalendar_angular2_fullcalendar__ = __webpack_require__("../../../../ap-angular2-fullcalendar/angular2-fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ap_angular2_fullcalendar_angular2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ap_angular2_fullcalendar_angular2_fullcalendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { CalendarModule } from
var FoodmenuModule = (function () {
    function FoodmenuModule() {
    }
    FoodmenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6_ap_angular2_fullcalendar_angular2_fullcalendar__["CalendarModule"], __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_drag_drop__["Ng2DragDropModule"].forRoot(), __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__foodmenu_component__["a" /* FoodmenuComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__foodmenu_component__["a" /* FoodmenuComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_foodmenu_service__["a" /* FoodmenuService */]]
        })
    ], FoodmenuModule);
    return FoodmenuModule;
}());



/***/ }),

/***/ "../../../../ng2-drag-drop/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ng2_drag_drop_module_1 = __webpack_require__("../../../../ng2-drag-drop/src/ng2-drag-drop.module.js");
exports.Ng2DragDropModule = ng2_drag_drop_module_1.Ng2DragDropModule;
var drop_event_model_1 = __webpack_require__("../../../../ng2-drag-drop/src/shared/drop-event.model.js");
exports.DropEvent = drop_event_model_1.DropEvent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-drag-drop/src/directives/draggable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_drag_drop_service_1 = __webpack_require__("../../../../ng2-drag-drop/src/services/ng2-drag-drop.service.js");
var dom_helper_1 = __webpack_require__("../../../../ng2-drag-drop/src/shared/dom-helper.js");
/**
 * Makes an element draggable by adding the draggable html attribute
 */
var Draggable = /** @class */ (function () {
    function Draggable(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         * Currently not used
         */
        this.dragEffect = 'move';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dragScope = 'default';
        /**
         * The CSS class applied to a draggable element. If a dragHandle is defined then its applied to that handle
         * element only. By default it is used to change the mouse over pointer.
         */
        this.dragHandleClass = 'drag-handle';
        /**
         * CSS class applied on the source draggable element while being dragged.
         */
        this.dragClass = 'drag-border';
        /**
         * CSS class applied on the drag ghost when being dragged.
         */
        this.dragTransitClass = 'drag-transit';
        /**
         * Event fired when Drag is started
         */
        this.onDragStart = new core_1.EventEmitter();
        /**
         * Event fired while the element is being dragged
         */
        this.onDrag = new core_1.EventEmitter();
        /**
         * Event fired when drag ends
         */
        this.onDragEnd = new core_1.EventEmitter();
        /**
         * @private
         * Backing field for the dragEnabled property
         */
        this._dragEnabled = true;
    }
    Object.defineProperty(Draggable.prototype, "dragImage", {
        get: function () {
            return this._dragImage;
        },
        /**
         * The url to image that will be used as custom drag image when the draggable is being dragged.
         */
        set: function (value) {
            this._dragImage = value;
            this.dragImageElement = new Image();
            this.dragImageElement.src = this.dragImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draggable.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        /**
         * Defines if drag is enabled. `true` by default.
         */
        set: function (value) {
            this._dragEnabled = value;
            this.applyDragHandleClass();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Draggable.prototype.ngOnInit = function () {
        this.applyDragHandleClass();
    };
    Draggable.prototype.ngOnDestroy = function () {
        this.unbindDragListeners();
    };
    Draggable.prototype.dragStart = function (e) {
        var _this = this;
        if (this.allowDrag()) {
            // This is a kludgy approach to apply CSS to the drag helper element when an image is being dragged. 
            dom_helper_1.DomHelper.addClass(this.el, this.dragTransitClass);
            setTimeout(function () {
                dom_helper_1.DomHelper.addClass(_this.el, _this.dragClass);
                dom_helper_1.DomHelper.removeClass(_this.el, _this.dragTransitClass);
            }, 10);
            this.ng2DragDropService.dragData = this.dragData;
            this.ng2DragDropService.scope = this.dragScope;
            // Firefox requires setData() to be called otherwise the drag does not work.
            // We don't use setData() to transfer data anymore so this is just a dummy call.
            if (e.dataTransfer != null) {
                e.dataTransfer.setData('text', '');
            }
            // Set dragImage
            if (this.dragImage) {
                e.dataTransfer.setDragImage(this.dragImageElement, 0, 0);
            }
            e.stopPropagation();
            this.onDragStart.emit(e);
            this.ng2DragDropService.onDragStart.next();
            this.zone.runOutsideAngular(function () {
                _this.unbindDragListener = _this.renderer.listen(_this.el.nativeElement, 'drag', function (dragEvent) {
                    _this.drag(dragEvent);
                });
            });
        }
        else {
            e.preventDefault();
        }
    };
    Draggable.prototype.drag = function (e) {
        this.onDrag.emit(e);
    };
    Draggable.prototype.dragEnd = function (e) {
        this.unbindDragListeners();
        dom_helper_1.DomHelper.removeClass(this.el, this.dragClass);
        this.ng2DragDropService.onDragEnd.next();
        this.onDragEnd.emit(e);
        e.stopPropagation();
        e.preventDefault();
    };
    Draggable.prototype.mousedown = function (e) {
        this.mouseDownElement = e.target;
    };
    Draggable.prototype.allowDrag = function () {
        if (this.dragHandle) {
            return dom_helper_1.DomHelper.matches(this.mouseDownElement, this.dragHandle) && this.dragEnabled;
        }
        else {
            return this.dragEnabled;
        }
    };
    Draggable.prototype.applyDragHandleClass = function () {
        var dragElement = this.getDragHandleElement();
        if (!dragElement) {
            return;
        }
        if (this.dragEnabled) {
            dom_helper_1.DomHelper.addClass(dragElement, this.dragHandleClass);
        }
        else {
            dom_helper_1.DomHelper.removeClass(this.el, this.dragHandleClass);
        }
    };
    Draggable.prototype.getDragHandleElement = function () {
        var dragElement = this.el;
        if (this.dragHandle) {
            dragElement = this.el.nativeElement.querySelector(this.dragHandle);
        }
        return dragElement;
    };
    Draggable.prototype.unbindDragListeners = function () {
        if (this.unbindDragListener) {
            this.unbindDragListener();
        }
    };
    Draggable.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[draggable]'
                },] },
    ];
    /** @nocollapse */
    Draggable.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: ng2_drag_drop_service_1.Ng2DragDropService, },
        { type: core_1.NgZone, },
    ]; };
    Draggable.propDecorators = {
        'dragData': [{ type: core_1.Input },],
        'dragHandle': [{ type: core_1.Input },],
        'dragEffect': [{ type: core_1.Input },],
        'dragScope': [{ type: core_1.Input },],
        'dragHandleClass': [{ type: core_1.Input },],
        'dragClass': [{ type: core_1.Input },],
        'dragTransitClass': [{ type: core_1.Input },],
        'dragImage': [{ type: core_1.Input },],
        'dragEnabled': [{ type: core_1.HostBinding, args: ['draggable',] }, { type: core_1.Input },],
        'onDragStart': [{ type: core_1.Output },],
        'onDrag': [{ type: core_1.Output },],
        'onDragEnd': [{ type: core_1.Output },],
        'dragStart': [{ type: core_1.HostListener, args: ['dragstart', ['$event'],] },],
        'dragEnd': [{ type: core_1.HostListener, args: ['dragend', ['$event'],] },],
        'mousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
    };
    return Draggable;
}());
exports.Draggable = Draggable;
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../ng2-drag-drop/src/directives/droppable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var drop_event_model_1 = __webpack_require__("../../../../ng2-drag-drop/src/shared/drop-event.model.js");
var ng2_drag_drop_service_1 = __webpack_require__("../../../../ng2-drag-drop/src/services/ng2-drag-drop.service.js");
var dom_helper_1 = __webpack_require__("../../../../ng2-drag-drop/src/shared/dom-helper.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var Droppable = /** @class */ (function () {
    function Droppable(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         *  Event fired when Drag dragged element enters a valid drop target.
         */
        this.onDragEnter = new core_1.EventEmitter();
        /**
         * Event fired when an element is being dragged over a valid drop target
         */
        this.onDragOver = new core_1.EventEmitter();
        /**
         * Event fired when a dragged element leaves a valid drop target.
         */
        this.onDragLeave = new core_1.EventEmitter();
        /**
         * Event fired when an element is dropped on a valid drop target.
         */
        this.onDrop = new core_1.EventEmitter();
        /**
         * CSS class that is applied when a compatible draggable is being dragged over this droppable.
         */
        this.dragOverClass = 'drag-over-border';
        /**
         * CSS class applied on this droppable when a compatible draggable item is being dragged.
         * This can be used to visually show allowed drop zones.
         */
        this.dragHintClass = 'drag-hint-border';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dropScope = 'default';
        /**
         * @private
         * Backing field for the dropEnabled property
         */
        this._dropEnabled = true;
        /**
         * @private
         * Field for tracking drag state. Helps when
         * drag stop event occurs before the allowDrop()
         * can be calculated (async).
         */
        this._isDragActive = false;
        /**
         * @private
         * Field for tracking if service is subscribed.
         * Avoids creating multiple subscriptions of service.
         */
        this._isServiceActive = false;
    }
    Object.defineProperty(Droppable.prototype, "dropEnabled", {
        get: function () {
            return this._dropEnabled;
        },
        /**
         * Defines if drop is enabled. `true` by default.
         */
        set: function (value) {
            this._dropEnabled = value;
            if (this._dropEnabled === true) {
                this.subscribeService();
            }
            else {
                this.unsubscribeService();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Droppable.prototype.ngOnInit = function () {
        if (this.dropEnabled === true) {
            this.subscribeService();
        }
    };
    Droppable.prototype.ngOnDestroy = function () {
        this.unsubscribeService();
        this.unbindDragListeners();
    };
    Droppable.prototype.dragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.onDragEnter.emit(e);
    };
    Droppable.prototype.dragOver = function (e, result) {
        if (result) {
            dom_helper_1.DomHelper.addClass(this.el, this.dragOverClass);
            e.preventDefault();
            this.onDragOver.emit(e);
        }
    };
    Droppable.prototype.dragLeave = function (e) {
        dom_helper_1.DomHelper.removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        this.onDragLeave.emit(e);
    };
    Droppable.prototype.drop = function (e) {
        dom_helper_1.DomHelper.removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        e.stopPropagation();
        this.ng2DragDropService.onDragEnd.next();
        this.onDrop.emit(new drop_event_model_1.DropEvent(e, this.ng2DragDropService.dragData));
        this.ng2DragDropService.dragData = null;
        this.ng2DragDropService.scope = null;
    };
    Droppable.prototype.allowDrop = function () {
        var _this = this;
        var allowed = false;
        /* tslint:disable:curly */
        /* tslint:disable:one-line */
        if (typeof this.dropScope === 'string') {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.ng2DragDropService.scope === this.dropScope;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.ng2DragDropService.scope.indexOf(this.dropScope) > -1;
        }
        else if (this.dropScope instanceof Array) {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.dropScope.indexOf(this.ng2DragDropService.scope) > -1;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.dropScope.filter(function (item) {
                    return _this.ng2DragDropService.scope.indexOf(item) !== -1;
                }).length > 0;
        }
        else if (typeof this.dropScope === 'function') {
            allowed = this.dropScope(this.ng2DragDropService.dragData);
            if (allowed instanceof Observable_1.Observable) {
                return allowed.map(function (result) { return result && _this.dropEnabled; });
            }
        }
        /* tslint:enable:curly */
        /* tslint:disable:one-line */
        return Observable_1.Observable.of(allowed && this.dropEnabled);
    };
    Droppable.prototype.subscribeService = function () {
        var _this = this;
        if (this._isServiceActive === true) {
            return;
        }
        this._isServiceActive = true;
        this.dragStartSubscription = this.ng2DragDropService.onDragStart.subscribe(function () {
            _this._isDragActive = true;
            _this.allowDrop().subscribe(function (result) {
                if (result && _this._isDragActive) {
                    dom_helper_1.DomHelper.addClass(_this.el, _this.dragHintClass);
                    _this.zone.runOutsideAngular(function () {
                        _this.unbindDragEnterListener = _this.renderer.listen(_this.el.nativeElement, 'dragenter', function (dragEvent) {
                            _this.dragEnter(dragEvent);
                        });
                        _this.unbindDragOverListener = _this.renderer.listen(_this.el.nativeElement, 'dragover', function (dragEvent) {
                            _this.dragOver(dragEvent, result);
                        });
                        _this.unbindDragLeaveListener = _this.renderer.listen(_this.el.nativeElement, 'dragleave', function (dragEvent) {
                            _this.dragLeave(dragEvent);
                        });
                    });
                }
            });
        });
        this.dragEndSubscription = this.ng2DragDropService.onDragEnd.subscribe(function () {
            _this._isDragActive = false;
            dom_helper_1.DomHelper.removeClass(_this.el, _this.dragHintClass);
            _this.unbindDragListeners();
        });
    };
    Droppable.prototype.unsubscribeService = function () {
        this._isServiceActive = false;
        if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
        }
        if (this.dragEndSubscription) {
            this.dragEndSubscription.unsubscribe();
        }
    };
    Droppable.prototype.unbindDragListeners = function () {
        if (this.unbindDragEnterListener) {
            this.unbindDragEnterListener();
        }
        if (this.unbindDragOverListener) {
            this.unbindDragOverListener();
        }
        if (this.unbindDragLeaveListener) {
            this.unbindDragLeaveListener();
        }
    };
    Droppable.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[droppable]'
                },] },
    ];
    /** @nocollapse */
    Droppable.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: ng2_drag_drop_service_1.Ng2DragDropService, },
        { type: core_1.NgZone, },
    ]; };
    Droppable.propDecorators = {
        'onDragEnter': [{ type: core_1.Output },],
        'onDragOver': [{ type: core_1.Output },],
        'onDragLeave': [{ type: core_1.Output },],
        'onDrop': [{ type: core_1.Output },],
        'dragOverClass': [{ type: core_1.Input },],
        'dragHintClass': [{ type: core_1.Input },],
        'dropScope': [{ type: core_1.Input },],
        'dropEnabled': [{ type: core_1.Input },],
        'drop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    };
    return Droppable;
}());
exports.Droppable = Droppable;
//# sourceMappingURL=droppable.directive.js.map

/***/ }),

/***/ "../../../../ng2-drag-drop/src/ng2-drag-drop.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var draggable_directive_1 = __webpack_require__("../../../../ng2-drag-drop/src/directives/draggable.directive.js");
var droppable_directive_1 = __webpack_require__("../../../../ng2-drag-drop/src/directives/droppable.directive.js");
var ng2_drag_drop_service_1 = __webpack_require__("../../../../ng2-drag-drop/src/services/ng2-drag-drop.service.js");
var Ng2DragDropModule = /** @class */ (function () {
    function Ng2DragDropModule() {
    }
    Ng2DragDropModule.forRoot = function () {
        return {
            ngModule: Ng2DragDropModule,
            providers: [ng2_drag_drop_service_1.Ng2DragDropService]
        };
    };
    Ng2DragDropModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ],
                    exports: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2DragDropModule.ctorParameters = function () { return []; };
    return Ng2DragDropModule;
}());
exports.Ng2DragDropModule = Ng2DragDropModule;
//# sourceMappingURL=ng2-drag-drop.module.js.map

/***/ }),

/***/ "../../../../ng2-drag-drop/src/services/ng2-drag-drop.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by orehman on 2/22/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var Ng2DragDropService = /** @class */ (function () {
    function Ng2DragDropService() {
        this.onDragStart = new Subject_1.Subject();
        this.onDragEnd = new Subject_1.Subject();
    }
    Ng2DragDropService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2DragDropService.ctorParameters = function () { return []; };
    return Ng2DragDropService;
}());
exports.Ng2DragDropService = Ng2DragDropService;
//# sourceMappingURL=ng2-drag-drop.service.js.map

/***/ }),

/***/ "../../../../ng2-drag-drop/src/shared/dom-helper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by orehman on 2/22/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DomHelper = /** @class */ (function () {
    function DomHelper() {
    }
    /**
     * Polyfill for element.matches()
     * See: https://developer.mozilla.org/en/docs/Web/API/Element/matches#Polyfill
     * @param element
     * @param selectorName
     */
    DomHelper.matches = function (element, selectorName) {
        var proto = Element.prototype;
        var func = proto['matches'] ||
            proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                }
                return i > -1;
            };
        return func.call(element, selectorName);
    };
    /**
     * Applies the specified css class on nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.addClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.add(className);
        }
    };
    /**
     * Removes the specified class from nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.removeClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.remove(className);
        }
    };
    /**
     * Gets element with valid classList
     *
     * @param elementRef
     * @returns ElementRef | null
     */
    DomHelper.getElementWithValidClassList = function (elementRef) {
        var e = elementRef instanceof core_1.ElementRef ? elementRef.nativeElement : elementRef;
        if (e.classList !== undefined && e.classList !== null) {
            return e;
        }
        return null;
    };
    return DomHelper;
}());
exports.DomHelper = DomHelper;
//# sourceMappingURL=dom-helper.js.map

/***/ }),

/***/ "../../../../ng2-drag-drop/src/shared/drop-event.model.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropEvent = /** @class */ (function () {
    function DropEvent(event, data) {
        this.nativeEvent = event;
        this.dragData = data;
    }
    return DropEvent;
}());
exports.DropEvent = DropEvent;
//# sourceMappingURL=drop-event.model.js.map

/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map 


/***/ })

});
//# sourceMappingURL=foodmenu.module.chunk.js.map