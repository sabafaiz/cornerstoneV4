webpackJsonp(["main.module"],{

/***/ "../../../../../src/app/component/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error{\r\nheight: 100vh;\r\nbackground: white;\r\noverflow: hidden;\r\n}\r\n.oops img{\r\n  height: 50vh;\r\n  margin: auto;\r\n  display: block;\r\n}\r\n.msg-container{\r\n    text-align: center;\r\n    font-weight: 700;\r\n    font-size: 200%;\r\n}  \r\n\r\n.msg{\r\n  text-align: center;\r\n  font-weight: 500;\r\n  font-size: 150%;\r\n}\r\n.reload{\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  /* border: 1px solid black; */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.reload button{\r\n  width: 100px;\r\n}\r\n.btn-danger {\r\n    color: #f3f1e8;\r\n    background-color: #464646;\r\n    border-color: #060606;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">\r\n  <div class=\"oops\"><img src=\"assets/icons/oops.jpg\"></div>\r\n  <div class=\"msg-container\">Something went wrong</div>\r\n  <div class=\"msg\">\r\n    Internal server error\r\n  </div>\r\n  <div class=\"reload\"><button class=\"btn btn-primary\" (click)=\"refresh()\" [routerLink]=\"['/login']\">Reload</button></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorComponent = (function () {
    function ErrorComponent(_location, ls) {
        this._location = _location;
        this.ls = ls;
        ls.setLoader(false);
    }
    ErrorComponent.prototype.refresh = function () {
        localStorage.clear();
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'error',
            template: __webpack_require__("../../../../../src/app/component/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__providers_loaderstop_service__["a" /* LoaderStop */]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/error/error404.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">\r\n  <div class=\"oops\"><img src=\"assets/icons/oops.jpg\"></div>\r\n  <div class=\"msg-container\">Error 404 !</div>\r\n  <div class=\"msg\">\r\n    Page not found \r\n  </div>\r\n  <div class=\"reload\"><button class=\"btn btn-primary\" (click)=\"refresh()\" [routerLink]=\"['/login']\">Reload</button></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/error/error404.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
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


var Error404Component = (function () {
    function Error404Component(ls) {
        this.ls = ls;
        ls.setLoader(false);
    }
    Error404Component.prototype.refresh = function () {
        localStorage.clear();
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'error404',
            template: __webpack_require__("../../../../../src/app/component/error/error404.html"),
            styles: [__webpack_require__("../../../../../src/app/component/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_loaderstop_service__["a" /* LoaderStop */]])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 100px){\r\n    #sidebar-wrapper{\r\n        width: 250px!important;\r\n    }\r\n    /* #sidebar-wrapper .page-title1{\r\n        display: none!important;\r\n    } */\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 3px;\r\n    background-color: #9c27b0!important; \r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n\tbackground-color: #000000;\r\n\tborder: 2px solid #9c27b0; \r\n}\r\n\r\n\r\n\r\n\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  background: #eeeeee;\r\n}\r\n\r\nmain{\r\n  margin-top: 50px;\r\n}\r\n.header-srgs{\r\n      /* margin-top: -15px; */\r\n    position: absolute;\r\n    top: 21px;\r\n    right: 95px;\r\n    width: 77px;\r\n    /*z-index: -1;*/\r\n    /*margin-right: 20px;*/\r\n}\r\n.header-custom{\r\n    height: auto;\r\n    z-index: -1;\r\n}\r\n.nav-btn{\r\n    z-index: 1;\r\n    position:fixed;\r\n    top:0px;\r\n    left:5px;\r\n    border-style: none;\r\n    background-color: red !important;\r\n}\r\n.glyphicon-menu-hamburger{\r\n    font-size:20px;\r\n    color:white;\r\n}\r\n.nav-link-custom{\r\n    display: inline;\r\n}\r\n.profile-img-container{\r\n    position:absolute;\r\n    right: -7px;\r\n    top: -25px;\r\n\r\n}\r\n.profile-img-container:hover{\r\n    background: inherit !important;\r\n}\r\n.add-btn{\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 25px\r\n}\r\n.down-btn{\r\n    float: right;\r\n}\r\n/*profile card style*/\r\n.profile-card:after,.profile-card:before  {\r\n\tbottom: 100%;\r\n\tleft: 87%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\t/* border-color: rgba(136, 183, 213, 0);\r\n\tborder-bottom-color: #fbfbfb;\r\n\tborder-width: 10px;\r\n    margin-left: -1px; */\r\n}\r\n\r\n.profile-card:after{\r\n    \tborder-color: rgba(136, 183, 213, 0);\r\n\tborder-bottom-color: white;\r\n\tborder-width: 13px;\r\n\tmargin-left: -13px;\r\n}\r\n.profile-card:before{\r\n\tborder-color: rgba(194, 225, 245, 0);\r\n\tborder-bottom-color: grey;\r\n\tborder-width: 14px;\r\n\tmargin-left: -14px;\r\n}\r\n.profile-card{\r\n    z-index:10000;\r\n    outline: transparent;\r\n    position: fixed;\r\n    top: 58px;\r\n    right: 7px;\r\n    width:300px;\r\n    height: 177px;\r\n    background: white;\r\n    /*border-style: solid;*/\r\n    border-radius: 5px;\r\n\tborder: 1px solid grey;\r\n\r\n}\r\n.profile-card-pic{\r\n    /*display: block !important;*/\r\n    margin: 10px 15px ;\r\n    /*display: auto !important;*/\r\n    width: 100px;\r\n    height: 100px;\r\n    border-style: solid;\r\n    border-radius:100%;\r\n}\r\n.profile-card-name,.profile-card-email,.profile-card-role{\r\n    text-align: center;\r\n}\r\n\r\n.profile-card-role{\r\nfont-size: 13px;\r\ncolor: grey;\r\n}\r\n\r\n.profile-card-email{\r\n    font-size: 10px;\r\n    color: grey;\r\n}\r\n.custom-buttons{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.profile-card-footer{\r\n    background: #eceaea;\r\n    margin: 0px;\r\n    padding: 10px;\r\n    border-top: #b1b1b1 solid 0.5px;\r\n}\r\n.coloumn-middle{\r\n    text-align: center;\r\n    height: 120px;\r\n}\r\n\r\n.coloumn-middle:before{\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  height: 100%;\r\n}\r\n\r\n.align-middle{\r\n      display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n/*profile card style end*/\r\n\r\n.navbar-top-links {\r\n  margin-right: 0;\r\n}\r\n.navbar-top-links li {\r\n  display: inline-block;\r\n}\r\n.navbar-top-links li:last-child {\r\n  margin-right: 15px;\r\n}\r\n.navbar-top-links li a {\r\n  padding: 15px;\r\n  min-height: 50px;\r\n}\r\n.navbar-top-links .dropdown-menu li {\r\n  display: block;\r\n}\r\n.navbar-top-links .dropdown-menu li:last-child {\r\n  margin-right: 0;\r\n}\r\n.navbar-top-links .dropdown-menu li a {\r\n  padding: 3px 20px;\r\n  min-height: 0;\r\n}\r\n.navbar-top-links .dropdown-menu li a div {\r\n  white-space: normal;\r\n}\r\n.navbar-top-links .dropdown-messages,\r\n.navbar-top-links .dropdown-tasks,\r\n.navbar-top-links .dropdown-alerts {\r\n  width: 310px;\r\n  min-width: 0;\r\n}\r\n.navbar-top-links .dropdown-messages {\r\n  margin-left: 5px;\r\n}\r\n.navbar-top-links .dropdown-tasks {\r\n  margin-left: -59px;\r\n}\r\n.navbar-top-links .dropdown-alerts {\r\n  margin-left: -123px;\r\n}\r\n.navbar-top-links .dropdown-user {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.logo{\r\n    width: 73px !important;\r\n    height: auto !important;\r\n    position: absolute;\r\n    right: 100px;\r\n    z-index: 10;\r\n}\r\n/* Toggle Styles */\r\n\r\n#wrapper {\r\n  /* margin-top: 100px; */\r\n    padding-left: 0;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n#wrapper.toggled {\r\n    padding-left: 250px;\r\n}\r\n\r\n#wrapper.toggled #toggle-header{\r\n  width: 250px;\r\n}\r\n\r\n#toggle-header{\r\n     width: 47px;\r\n  transition: all 0.4s ease;\r\n}\r\n .school-img{\r\n  width: 100%;  \r\n} \r\n#sidebar-wrapper img{\r\n    position: relative;\r\n\r\n}\r\n#sidebar-wrapper .overlay{\r\nwidth:100%;\r\nheight: 100%;\r\nposition: absolute;\r\ntop: 0;\r\nbackground: hsla(0, 0%, 100%, 0.93);\r\n}\r\n#sidebar-wrapper {\r\n    /* margin-top: 34px; */\r\n    z-index:1000;\r\n    position: fixed;\r\n    left: 250px;\r\n    top: 0px;\r\n    width: 0;\r\n    height: 100%;\r\n    margin-left: -250px;\r\n    overflow-y: auto;\r\n    transition: all 0.5s ease;\r\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), \r\n    0 4px 25px 0px rgba(0, 0, 0, 0.12), \r\n     0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n    background:#9a9a9aeb;\r\n}\r\n.sidebar-nav li a span{\r\n    top: -6px;\r\n    left: 15px;\r\n    position: relative;\r\n}\r\n\r\n.sidebar-nav li a{\r\n    padding: 10px 0 12px 24px!important;\r\n   \r\n}\r\n.side\r\n.page-title{\r\n    font-size:14px;\r\n}\r\n\r\n#sidebar-wrapper:focus{\r\n    outline: 0;\r\n}\r\n\r\n#wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n}\r\n\r\n#page-content-wrapper {\r\n    /* width: 100%; */\r\n    padding: 20px;\r\n    /* margin-left:250px; */\r\n    /*padding: 15px;*/\r\n    /*z-index: -10;*/\r\n    /*z-index: 100;*/\r\n}\r\n\r\n#wrapper.toggled #page-content-wrapper {\r\n    /* position: absolute;\r\n    margin-right: -250px; */\r\n}\r\n.submenu-btn{\r\n    width:90%;\r\n}\r\n\r\n\r\n\r\n/* Sidebar Styles */\r\n\r\n.sidebar-nav {\r\n    position: absolute;\r\ntop: 0;\r\n    list-style: none;\r\n    background: #ffffff03;\r\n    font-size : 14px;\r\n    padding: 10px;\r\n    font-weight: 300px;\r\n    width: 100%;\r\n} \r\n.active{\r\n    margin:0px!important;\r\n    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28),\r\n     0 4px 20px 0px rgba(0, 0, 0, 0.12),\r\n     0 7px 8px -5px rgba(156, 39, 176, 0.2);\r\n}\r\n.sidebar-nav li{\r\n    width: 100%;\r\n}\r\n\r\n.sidebar-nav li a {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #3C4858;\r\n    padding: 0;\r\n    font-weight: 300!important;\r\n  \r\n    /* border-right: solid 4px white; */\r\n} \r\n\r\n\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n    height: 65px;\r\n    font-size: 18px;\r\n    line-height: 60px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n    color: #9a9a9ad6;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n    color: #303342;\r\n    background: none;\r\n}\r\n.sidebar-logo{\r\n    padding: 30px 0px;\r\n    margin-top: 30px;\r\n    width: 76px;\r\n    margin: auto;\r\n    display: block;\r\n}\r\n\r\n.account{\r\n    font-size: 16px;\r\n}\r\n\r\n/* @media(min-width:100px) {\r\n    #wrapper {\r\n        padding-left: 0;\r\n    }\r\n\r\n    #wrapper.toggled {\r\n        padding-left: 250px;\r\n    }\r\n\r\n    #sidebar-wrapper {\r\n         width: 70px; \r\n    }\r\n\r\n    #wrapper.toggled #sidebar-wrapper {\r\n        width: 250px;\r\n    }\r\n\r\n    #page-content-wrapper {\r\n        padding-left:80px;\r\n        position: relative;\r\n    }\r\n\r\n    #wrapper.toggled #page-content-wrapper {\r\n        position: relative;\r\n        margin-right: 0;\r\n    }\r\n\r\n} */\r\n\r\n.sidebar-items{\r\n    /* box-shadow: 0 -3px 7px #303342; */\r\n}\r\n.sidebar-link{\r\n    color: white ;\r\n    /* border-right: solid 4px rgb(214, 167, 0); */\r\n}\r\n\r\n/*.sidebar-link :active{\r\n    border-right-color: white;\r\n    color: yellow;\r\n}*/\r\n\r\n/*.sidebar-link:active{\r\n    background-color: #303342;\r\n    color:white;\r\n}*/\r\n/*.sidebar-items a:active{\r\n    background-color: #303342;\r\n    color:black;\r\n\r\n}*/\r\n\r\n/*.sidebar-items > a {\r\n    color:black;\r\n}*/\r\n.sidebar-icon{\r\n    margin-right: 27px;\r\n    width:20px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.header{\r\n    background: #303342;\r\n}\r\n\r\n/*.sidebar-header{\r\n    height: 100px;\r\n}*/\r\n\r\n.profile-display{\r\n    /*background: linear-gradient(to bottom, #eae0e0 0%, #303342 100%);*/\r\n    height: 160px;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.accBgImage{\r\n    /*background-image: url(./svg/profile_background.svg) !important;*/\r\n    background-size: 100% auto;\r\n}\r\n.profile-img{\r\n    width: 43px;\r\n    height: 43px;\r\n    border-radius: 100%;\r\n    border: white solid 2px;\r\n    /*display: block; */\r\n    /*margin: auto;*/\r\n    cursor: pointer; \r\n}\r\n/*.profile-img:hover{\r\n    opacity: 0.5;\r\n    border-radius: 100%;\r\n}*/\r\n.profile-name{\r\n    -webkit-text-decoration-style: none;\r\n            text-decoration-style: none;\r\n    font-size: 12px;\r\n    /*font-weight: bold;*/\r\n    color: white;\r\n    text-indent: -20px;\r\n    /*text-align:center;*/\r\n}\r\n.padding{\r\n    padding-top: 10px;\r\n}\r\n/*a{\r\n    color:white;\r\n}*/\r\n/*a:hover{\r\n    color: #303342;\r\n}*/\r\n\r\n\r\n.brand{\r\n    font-size:14px;\r\n    font-weight: 300;\r\n    color: white;\r\n}\r\n\r\n .active{\r\n     background: #9c27b0!important; \r\n    color: white!important;\r\n    padding: 7px 15px;\r\n    border-radius: 3px;\r\n    margin: 10px;\r\n    \r\n}\r\n\r\n.modal-footer{\r\n    margin-top: 0 !important;\r\n}\r\n\r\n.arrow{\r\n    float: right;\r\n    margin-top: 11px;\r\n    margin-right: 10px;\r\n    font-size: 10px;\r\n}\r\n\r\n.section{\r\n    font-weight: 100;\r\n    color: #fdfeff\r\n}\r\n\r\n.shiftLeft{\r\n    padding-left:20px !important;\r\n}\r\n\r\n.icon:nth-child(7){\r\n    width: 23px;\r\n}\r\n\r\n.sidebar-nav li:hover>a{\r\n   background:  rgba(200, 200, 200, 0.2);\r\n    color: #3C4858;\r\n}\r\n\r\n.name{\r\n    color:#A88E8E;\r\n    font-size:16px;\r\n    font-weight: 300;\r\n   \r\n}\r\n\r\n.name:hover{\r\n    color:#7E0909;\r\n}\r\n\r\n.form-control{\r\n    display: -webkit-inline-box;\r\n}\r\n\r\n.nav-item{\r\n    background: purple;\r\n    margin:6px;\r\n        padding: 0px 10px;\r\n}\r\n.nav-link .material-icons{\r\n    color: white;\r\n}\r\n.bg{\r\n    background: #eeeeee;\r\n}\r\n\r\n.bar-loader{\r\nleft: 50%;\r\n    position: fixed;\r\n    z-index: 999\r\n}\r\n.btn-confirm{\r\n    color: #fff;\r\n    background-color: #9c27b0!important; \r\n    border-color: #9c27b0!important; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"bar-loader\" *ngIf=\"loaderObject?.showLoader\">\r\n  <h4>Loading.........</h4>\r\n</div> -->\r\n\r\n<div id=\"wrapper\">\r\n  <!-- top nav bar -->\r\n  <nav class=\"navbar bg\">\r\n    <a class=\"navbar-brand name\" href=\"#\">\r\n      <!-- {{selectedPage | titlecase}} -->\r\n    </a>\r\n    <div style=\"display:-webkit-inline-box;\">\r\n      <!-- <form class=\"form-inline\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      </form> -->\r\n      <ul class=\"navbar-nav\" (click)=\"displayProfile=!displayProfile\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"><i class=\"material-icons\">account_circle</i><span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>  \r\n    </div>  \r\n  </nav>\r\n  <!-- top nav bar end -->\r\n\r\n  <!-- profile-card -->\r\n  <div class=\"profile-card\" id=\"profile-card\" [hidden]=\"displayProfile\" tabindex='1' (blur)=\"displayProfile=true\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 col-xs-4\">\r\n        <img class=\"profile-card-pic\" src=\"{{log.getData('picUrl')}}\" *ngIf=\"log.getData('picUrl')\">\r\n      </div>\r\n      <div class=\"col-sm-8 col-xs-8\">\r\n        <div class=\"coloumn-middle\">\r\n          <div class=\"align-middle\">\r\n            <div class=\"row\">\r\n              <div class=\"profile-card-name\">{{log.getData('name')}}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"profile-card-role\">{{log.getData('role')}}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"profile-card-email\">\r\n                {{log.getData('email')}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row profile-card-footer\">\r\n      <div class=\"col-sm-6 col-xs-6\">\r\n        <a [routerLink]=\"['/account']\" class=\"btn btn-default\" style=\"color: #333\" (click)=\"displayProfile=true\">Account</a>\r\n      </div>\r\n      <div class=\"col-sm-6 col-xs-6\" routerLinkActive=\"active\" data-toggle=\"modal\" data-target=\".bs-example-modal-sm\">\r\n        <a class=\"btn btn-default custom-buttons\" routerLinkActive=\"active\" style=\"color: #333\">Logout</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- profiel-card -end -->\r\n\r\n  <!-- Sidebar -->\r\n  <div id=\"sidebar-wrapper\" data-color=\"purple\">\r\n    <img src=\"/assets/school.jpg\" class=\"school-img\" alt=\"school-img\">\r\n    <div class=\"overlay\"></div>\r\n    <!-- <img src=\"assets/icons/logo.png\" class=\"logo\"> -->\r\n    <ul class=\"sidebar-nav\">\r\n      <li class=\"sidebar-items\" *ngIf=\"role=='admin'\"></li>\r\n      <li *ngFor=\"let page of pages; let i=index\" class=\"sidebar-items\">\r\n        <a (click)=\"getSelectedLink(page.title)\" [routerLink]=\"[page.url]\" routerLinkActive=\"active\" (click)=\"getSelectedLink(page.title)\">\r\n            <i class=\"material-icons\"> {{page.icon}}</i><span class=\"page-title1\">{{page.title}}</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"sidebar-items\">\r\n        <a (click)=\"getSelectedLink('Account')\" [routerLink]=\"['/account']\" routerLinkActive=\"active\">\r\n            <i class=\"material-icons\">account_box</i><span>Account</span> \r\n        </a>\r\n      </li>\r\n      <li class=\"sidebar-items\" >\r\n          <a (click)=\"getSelectedLink('Student')\" [routerLink]=\"['/add-student']\" routerLinkActive=\"active\">\r\n           <i class=\"material-icons\">face</i><span>Student Details</span>        \r\n         </a>\r\n      </li>\r\n      <!-- <li class=\"side-items\" *ngIf=\"role=='admin'\">\r\n              <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                  <i class=\"material-icons\">note_add</i><span>ADD</span>\r\n             </a>\r\n        <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\" *ngIf=\"role=='admin'\">\r\n          <li class=\"sidebar-items\" >\r\n              <a (click)=\"getSelectedLink('Time Table')\" [routerLink]=\"['/time-table']\" routerLinkActive=\"active\">\r\n                 <i class=\"material-icons\">av_timer</i><span> Time Table</span>\r\n             </a>\r\n          </li>\r\n          <li class=\"sidebar-items\" >\r\n               <a (click)=\"getSelectedLink('Food Menu')\" [routerLink]=\"['/foodmenu']\" routerLinkActive=\"active\">\r\n                <i class=\"material-icons\">room_service</i><span> Food Menu</span> \r\n              </a>\r\n          </li>\r\n          <li class=\"sidebar-items\" >\r\n                   <a (click)=\"getSelectedLink('Student')\" [routerLink]=\"['/add-student']\" routerLinkActive=\"active\">\r\n                    <i class=\"material-icons\">face</i><span>Student</span>        \r\n                  </a>\r\n          </li>\r\n          <li class=\"sidebar-items\"  style=\"padding-bottom: 55px;\">\r\n                   <a (click)=\"getSelectedLink('Employee')\" [routerLink]=\"['/add-employee']\" routerLinkActive=\"active\">\r\n                    <i class=\"material-icons\">airline_seat_recline_extra</i><span>Employee</span>      \r\n                  </a>\r\n          </li>\r\n        </ul>\r\n      </li> -->\r\n    </ul>\r\n  </div>\r\n  <!-- <button class=\"nav-btn1\" id=\"menu-toggle\"><i class=\"glyphicon glyphicon-menu-hamburger\"></i></button> -->\r\n  <!-- /#sidebar-wrapper -->\r\n  <!-- Page Content -->\r\n  <div id=\"page-content-wrapper\">\r\n    <div style=\"display:none\" GoogleChart></div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <!-- /#page-content-wrapper -->\r\n</div>\r\n<!-- modal -->\r\n<div class=\"modal fade bs-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\">\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          You will be logged out!\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n                 </button>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button [routerLink]=\"['/login']\" (click)=\"logout()\" data-dismiss=\"modal\" class=\"btn btn-primary btn-confirm\">Confirm</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- modal -->\r\n<!-- <div class=\"modal fade bs-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\">\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-header\">\r\n        You will be logged out!\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button [routerLink]=\"['/login']\" (click)=\"logout()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Confirm</button>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_gaurd__ = __webpack_require__("../../../../../src/app/component/login/login.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(log, barLoaderService) {
        this.log = log;
        this.barLoaderService = barLoaderService;
        this.displayProfile = true;
        this.isLoggedIn = false;
        this.selectedPage = "Dashboard";
        this.loaderObject = { showLoader: false };
        this.pages = [
            { title: 'Dashboard', icon: 'dashboard', url: '/dashboard' },
            { title: 'Complaints', icon: 'thumb_down', url: '/complaint' },
            { title: 'Appreciation', icon: 'thumb_up', url: '/appreciation' },
            { title: 'Messaging', icon: 'message', url: '/conversation' },
            { title: 'Events', icon: 'event', url: '/event' },
            { title: 'Poll', icon: 'poll', url: '/poll' },
            { title: 'Circular', icon: 'autorenew', url: '/circular' },
            { title: 'Homework', icon: 'book', url: '/homework' },
        ];
    }
    MainComponent.prototype.getSelectedLink = function (heading) {
        this.selectedPage = heading;
        this.barLoaderService.showBarLoader(this.loaderObject);
    };
    MainComponent.prototype.getSelectedLinkForExtraOptions = function (heading) {
        this.selectedPage = heading;
        this.barLoaderService.showBarLoader(this.loaderObject);
    };
    MainComponent.prototype.ngOnInit = function () {
        jQuery.noConflict();
        if (this.log.isLoggedIn())
            this.isLoggedIn = true;
        else
            this.isLoggedIn = false;
        // this.checkStudentRating();
        this.role = this.log.getData('role');
    };
    MainComponent.prototype.ngAfterViewInit = function () {
        var alterClass = function () {
            var ww = document.body.clientWidth;
            if (ww >= 521) {
                $("#wrapper").toggleClass("toggled");
            }
            else if (ww < 520) {
                $('#wrapper').removeClass('toggled');
            }
            ;
        };
        //  var shiftLeft=function(){
        //     if($('#wrapper').hasClass('toggled')){
        //        $('#page-content-wrapper').addClass('shiftLeft');
        //     }
        //     else{
        //        $('#page-content-wrapper').removeClass('shiftLeft');
        //     }
        // }
        $(window).resize(function () {
            alterClass();
            // shiftLeft();
        });
        alterClass();
        // shiftLeft();
        $("#menu-toggle").click(function (e) {
            $("#wrapper").toggleClass("toggled");
            //  shiftLeft();
        });
        //   $("body").mouseup(function(e:any) 
        // {
        //     var container = $("#profile-card");
        //     // if the target of the click isn't the container nor a descendant of the container
        //     if (!container.is(e.target) && container.has(e.target).length === 0) 
        //     {
        //         container.hide();
        //     }
        // });
    };
    MainComponent.prototype.logout = function () {
        localStorage.clear();
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main',
            template: __webpack_require__("../../../../../src/app/component/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_login_gaurd__["a" /* LoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/component/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_view_survey__ = __webpack_require__("../../../../../src/app/component/survey/view/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_gaurd__ = __webpack_require__("../../../../../src/app/component/login/login.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_constant__ = __webpack_require__("../../../../../src/app/providers/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_default_header_service__ = __webpack_require__("../../../../../src/app/providers/default.header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_chart_service__ = __webpack_require__("../../../../../src/app/providers/chart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_formValidation_service__ = __webpack_require__("../../../../../src/app/providers/formValidation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_admin_service__ = __webpack_require__("../../../../../src/app/providers/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_event_service__ = __webpack_require__("../../../../../src/app/providers/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_foodmenu_service__ = __webpack_require__("../../../../../src/app/providers/foodmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__error_error_component__ = __webpack_require__("../../../../../src/app/component/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__error_error404__ = __webpack_require__("../../../../../src/app/component/error/error404.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { EventComponent } from "../event/event.component";
// import { FoodmenuComponent } from "../foodmenu/foodmenu.component"; 

// import { CalendarComponent } from "../../angular2-fullcalendar/src/calendar/calendar";













var rootRouterConfig = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */],
        children: [
            { path: 'dashboard', loadChildren: 'app/component/dashboard/dashboard.module#DashboardModule' },
            { path: 'complaint', loadChildren: 'app/component/complaint/complaint.module#ComplaintModule' },
            { path: 'circular', loadChildren: 'app/component/circular/circular.module#CircularModule' },
            { path: 'time-table', loadChildren: 'app/component/timetable/timetable.module#TimeTable' },
            { path: 'homework', loadChildren: 'app/component/homework/homework.module#HomeworkModule', },
            { path: 'account', loadChildren: 'app/component/account/account.module#AccountModule' },
            { path: 'add-employee', loadChildren: 'app/component/addEmployee/addEmployee.module#AddEmployeeModule' },
            { path: 'add-student', loadChildren: 'app/component/addStudent/addStudent.module#AddStudentModule' },
            { path: 'appreciation', loadChildren: 'app/component/appreciation/appreciation.module#AppreciationModule' },
            { path: 'poll', loadChildren: 'app/component/poll/poll.module#PollModule' },
            { path: 'conversation', loadChildren: 'app/component/message/message.module#MessageModule', },
            { path: 'event', loadChildren: 'app/component/event/event.module#EventModule' },
            // { path: 'foodmenu', component: FoodmenuComponent },    
            { path: 'survey', loadChildren: 'app/component/survey/survey.module#SurveyModule' },
            { path: 'student-profile', loadChildren: 'app/component/studentRating/studentRating.module#StudentRatingModule' },
            { path: 'view-survey/:id', component: __WEBPACK_IMPORTED_MODULE_4__survey_view_survey__["a" /* ViewSurveyComponent */] },
            { path: 'suggestion', loadChildren: 'app/component/suggestion/suggestion.module#SuggestionModule' },
            { path: 'foodmenu', loadChildren: 'app/component/foodmenu/foodmenu.module#FoodmenuModule' },
        ] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_16__error_error_component__["a" /* ErrorComponent */] },
    { path: 'error404', component: __WEBPACK_IMPORTED_MODULE_17__error_error404__["a" /* Error404Component */] },
    { path: '**', redirectTo: '/error404' },
];
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(rootRouterConfig),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */],
                // CalendarComponent,
                // EventComponent,
                // FoodmenuComponent,
                __WEBPACK_IMPORTED_MODULE_4__survey_view_survey__["a" /* ViewSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__error_error404__["a" /* Error404Component */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__login_login_gaurd__["a" /* LoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_7__providers_app_constant__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_8__providers_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_default_header_service__["a" /* CustomHttpService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_chart_service__["a" /* ChartService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_formValidation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_foodmenu_service__["a" /* FoodmenuService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__providers_default_header_service__["a" /* CustomHttpService */],
                    useFactory: function (backend, defaultOptions) {
                        return new __WEBPACK_IMPORTED_MODULE_9__providers_default_header_service__["a" /* CustomHttpService */](backend, defaultOptions);
                    },
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]]
                }
            ],
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/survey/view/survey.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".style0{\r\n  background-color:#107895;\r\n}\r\n\r\n.style1{\r\n  background-color:#1286a8;\r\n}\r\n\r\n.style2{\r\n  background-color: #1395ba;\r\n}\r\n\r\n.style3{\r\n\r\n  background-color: #43abc8;\r\n}\r\n\r\n.style4{\r\n  background-color:#d0eaf0;\r\n  color: black;\r\n}\r\n\r\n.choice{\r\n  text-indent: 6%;\r\n}\r\n\r\n.heading{\r\n  width:100%;\r\n  background-color:#3d4154;\r\n  margin:auto 0;\r\n  padding:0.5px;\r\n  border-radius:5px;\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/survey/view/survey.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"selectedSurvey\">\r\n  <div class=\"panel-heading\">{{selectedSurvey.title}}\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"_location.back();\">\r\n    <span aria-hidden=\"true\">&times; </span>\r\n  </button>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"row text-center\">\r\n      <loader [condition]=\"loader\"></loader>\r\n    </div>\r\n    <div *ngIf=\"emptySurvey\">\r\n      No information to display.\r\n    </div>\r\n    <div *ngIf=\"selectedSurvey\">\r\n    <div  class=\"heading\">\r\n      <h4>&nbsp;Details</h4>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\"><label>Description:</label> {{selectedSurvey.description}}</li>\r\n      <li class=\"list-group-item\"><label>Survey By: </label> {{selectedSurvey.employeeName}}</li>\r\n      <li class=\"list-group-item\"><label>Expired At: </label> {{selectedSurvey.expiredAt | date}}</li>\r\n      <li class=\"list-group-item\" *ngIf=\"selectedSurvey.typeId==1\"><label>Audience:</label> {{selectedSurvey.typeName}}</li>\r\n      <li class=\"list-group-item\" *ngIf=\"selectedSurvey.typeId==2\"><label>Audience: </label><span style=\"margin: auto 2px;\" *ngFor=\"let a of selectedSurvey.standards\">{{a}}</span></li>\r\n    </ul>\r\n\r\n    <div  class=\"heading\">\r\n      <h4>&nbsp;Results</h4>\r\n    </div>\r\n    <div class=\"\" *ngFor=\"let s of selectedSurvey.surveyQuestions, let i=index\" style=\"background-color:#f2f7f6;margin-top:20px;padding: 0 20px;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-xs-6\" >\r\n            <div class=\"question\"><h4>{{i+1}}.&nbsp;{{s.questionText}}</h4></div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-xs-6\" style=\"margin-top:10px;\">\r\n              <span class=\"badge pull-right\" style=\"background-color: #f8d400;color:#3977a5\">{{s.totalCount}} responses</span>\r\n              <span class=\"badge pull-right\" style=\"margin: auto 5px;\">{{s.questionTypeName}}</span>\r\n          </div>\r\n        </div>\r\n      <div *ngFor=\"let o of s.subOptions, let ii=index\" style=\"\">\r\n        <div class=\"col-xs-5\"><div class=\"choice\">{{o.name}}</div></div>\r\n        <span class=\"col-xs-7\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar progress-bar progress-bar-striped style{{ii}}\" role=\"progressbar\" [attr.aria-valuenow]=\"o.percent\" aria-valuemin=\"10\"\r\n            aria-valuemax=\"100\" [style.width]=\"(o.percent/100)*100 + '%'\">\r\n            <span style=\"color:black;\"> {{o.count}}&nbsp;votes&nbsp;-&nbsp;{{o.percent}}%</span>\r\n          </div>\r\n        </div>\r\n        </span>\r\n      </div>\r\n      <hr class=\"style-line\" style=\"width:100%\">\r\n      <!--<ul class=\"\" style=\"list-style-type:none;margin:0;padding:0;\" >\r\n          <li>\r\n            <div class=\"progress pollProgress\">\r\n              <span class=\"progress-bar progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"o.percent\"\r\n                aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"(o.percent/100)*100 + '%'\">\r\n                       <span> {{o.name}} - {{o.percent}}% </span>\r\n              </span>\r\n            </div>\r\n          </li>\r\n        </ul>-->\r\n    </div>\r\n    <div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n  <div class=\"panel-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"_location.back()\">Go Back</button>\r\n  </div>\r\n</div>\r\n\r\n<!--<div id=\"selectedSurvey\" class=\"modal fade\" role=\"dialog\" *ngIf=\"selectedSurvey\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\"></h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/component/survey/view/survey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_survey_service__ = __webpack_require__("../../../../../src/app/providers/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewSurveyComponent = (function () {
    function ViewSurveyComponent(ss, _location, route, router) {
        this.ss = ss;
        this._location = _location;
        this.route = route;
        this.router = router;
        this.loader = false;
        this.emptySurvey = false;
    }
    ViewSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.selectToExpand();
    };
    ViewSurveyComponent.prototype.selectToExpand = function () {
        var _this = this;
        this.loader = true;
        this.ss.getSurvey(this.id).subscribe(function (res) {
            if (res.status === 204) {
                _this.emptySurvey = true;
                _this.selectedSurvey = null;
                _this.loader = false;
                return;
            }
            _this.selectedSurvey = res;
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.router.navigate(['/error']);
        });
    };
    ViewSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'view-survey',
            template: __webpack_require__("../../../../../src/app/component/survey/view/survey.html"),
            styles: [__webpack_require__("../../../../../src/app/component/survey/view/survey.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_survey_service__["a" /* SurveyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewSurveyComponent);
    return ViewSurveyComponent;
}());



/***/ })

});
//# sourceMappingURL=main.module.chunk.js.map