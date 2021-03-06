"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var complaint_service_1 = require("../../../providers/complaint.service");
var complaint_component_1 = require("../../complaint/complaint.component");
var loaderstop_service_1 = require("../../../providers/loaderstop.service");
var ForMeComponent = /** @class */ (function (_super) {
    __extends(ForMeComponent, _super);
    function ForMeComponent(cs, ls, router, route) {
        var _this = _super.call(this, cs, ls, router, route) || this;
        _this.cs = cs;
        _this.ls = ls;
        _this.router = router;
        _this.route = route;
        if (_this.url == "/appreciation/for-me")
            _this.url = "/appreciation";
        _this.ls.setLoader(false);
        return _this;
    }
    ForMeComponent = __decorate([
        core_1.Component({
            selector: 'for-me',
            templateUrl: './forme.html',
            styleUrls: ['./../appreciation.component.css']
        }),
        __metadata("design:paramtypes", [complaint_service_1.ComplaintService,
            loaderstop_service_1.LoaderStop,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ForMeComponent);
    return ForMeComponent;
}(complaint_component_1.ComplaintComponent));
exports.ForMeComponent = ForMeComponent;
//# sourceMappingURL=forme.js.map