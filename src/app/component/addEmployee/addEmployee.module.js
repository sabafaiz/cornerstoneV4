"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var addEmployee_component_1 = require("./addEmployee.component");
var router_1 = require("@angular/router");
var shared_module_1 = require("../../shared.module");
var homework_service_1 = require("../../providers/homework.service");
var AddEmployeeModule = /** @class */ (function () {
    function AddEmployeeModule() {
    }
    AddEmployeeModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: addEmployee_component_1.AddEmployeeComponent
                    }
                ])],
            declarations: [addEmployee_component_1.AddEmployeeComponent],
            providers: [homework_service_1.HomeworkService]
        })
    ], AddEmployeeModule);
    return AddEmployeeModule;
}());
exports.AddEmployeeModule = AddEmployeeModule;
//# sourceMappingURL=addEmployee.module.js.map