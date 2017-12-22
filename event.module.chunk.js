webpackJsonp(["event.module"],{

/***/ "../../../../../src/app/component/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calendar-custom{\r\n    background: white;\r\n    padding: 4%;\r\n    border-radius: 10px;\r\n    /* border-radius: 20px; */\r\n    min-width: 343px;\r\n    /* min-height: 450px; */\r\n}\r\n.fc-left h2{\r\n    font-size: 15px;\r\n    color:grey;\r\n}\r\n\r\n\r\n\r\n.glyphicon-time:before{\r\n    padding-right: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.description,.location,.planner-type{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n/*.dots:before{\r\n    padding-right: 0px;\r\n}\r\n\r\n.glyphicon:before{\r\n    font-size: 20px;\r\n    padding-right: 10px\r\n}\r\n*/\r\n.modal{\r\n    overflow-y: scroll;\r\n}\r\n\r\ninput[type=file]{ \r\n        color:transparent;\r\n}\r\n\r\n.file-list-items{\r\n  list-style-type: none;\r\n}\r\n\r\n.file-list{\r\n  padding-left: 0px;\r\n}\r\n\r\n.image1{\r\n  margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 275px;\r\n    height: 180px;\r\n    border-style: solid;\r\n}\r\n.sideimage{\r\n    width: 161px;\r\n    height: 180px;\r\n    -webkit-filter:blur(1px);\r\n            filter:blur(1px);  \r\n}\r\n\r\n\r\n\r\n/* new code by saba*/\r\n.card-calendra{\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 25px 0;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\r\n    border-radius: 6px;\r\n    color: rgba(0,0,0,.87);\r\n    background: #fff;\r\n}\r\n\r\n .card-header{\r\n    background-color: transparent!important;\r\n    border-bottom: 0px!important;\r\n}\r\n\r\n/* new code by saba */\r\n\r\n.modal-header .close{\r\n    color:white;\r\n}\r\n\r\n.modal-header{\r\n    background:#9c27b0!important; \r\n    color:white;\r\n}\r\n\r\n.load-btn{\r\n  \r\n    background: #9c27b0;\r\n    border-color:#9c27b0; \r\n    border-radius:3px!important;\r\n}\r\n.btn-primary:not([disabled]):not(.disabled):active{\r\n    background: #9c27b0;\r\n    border-color:#9c27b0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-custom\">\r\n    <angular2-fullcalendar [options]=\"calendarOptions\" id=\"calendar\"></angular2-fullcalendar>\r\n    <div class=\"row text-center\">\r\n        <loader [condition]=\"loader\" class=\"centerLoader\"></loader>\r\n    </div>\r\n</div>\r\n\r\n<!-- modals -->\r\n<div id=\"fullCalModal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\" *ngIf=\"eventsInfo\">\r\n                <h4 id=\"event-title\" class=\"event-title\">{{eventsInfo.title}}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\" *ngIf=\"eventsInfo\">\r\n                <div style=\"padding: 1% 10% 1% 10%;\">\r\n                    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                        <ol class=\"carousel-indicators\">\r\n                            <li data-target=\"#carouselExampleIndicators\" [attr.data-slide-to]=\"i\" [ngClass]=\"i?'':'active'\" *ngFor=\" let x of selectedEvent.files ; let i=index \"></li>\r\n                        </ol>\r\n                        <div class=\"carousel-inner\" role=\"listbox\">\r\n                            <div class=\"carousel-item\" [ngClass]=\"k?'':'active'\" *ngFor=\" let x of selectedEvent.files ; let k=index \">\r\n                                <img class=\"d-block img-fluid\" [attr.src]=\"fileUrl + x.fileTimestamp\" *ngIf=\"x?.fileOriginalName.includes('.png')||x?.fileOriginalName.includes('.jpg')||x?.fileOriginalName.includes('.jpeg')||x?.fileOriginalName.includes('.bmp')\" width=\"1100\" height=\"500\">\r\n                                <div class=\"d-block img-fluid text-center\" *ngIf=\"x?.fileOriginalName.includes('.pdf')\">\r\n                                <img  src=\"assets/pdf1.jpg\">\r\n                                </div>\r\n                                <div class=\"d-block img-fluid text-center\" *ngIf=\"x?.fileOriginalName.includes('.docx')||x?.fileOriginalName.includes('.doc')\">\r\n                                    <img  src=\"assets/docx.png\">    \r\n                                </div>\r\n                                <div class=\"carousel-caption\">\r\n                                    <h3>\r\n                                        <a [attr.href]=\"fileUrl + x.fileTimestamp\"><i class=\"material-icons\">cloud_download</i></a>\r\n                                    </h3>\r\n                                    <p>\r\n                                        <button class=\"btn btn-link\" data-toggle=\"modal\" data-dismiss=\"modal\" data-target=\"#modal-edit-image\" *ngIf=\"!disable\" (click)=\"imgArray()\">Add/Remove </button>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n                            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                            <span class=\"sr-only\">Previous</span>\r\n                        </a>\r\n                        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n                            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                            <span class=\"sr-only\">Next</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div style=\"overflow:hidden\">\r\n                    <span style=\"float:right;margin-right:20px;\" [title]=\" disable == true ? 'You Cannot edit' : '' \" data-toggle=\"modal\" data-dismiss=\"modal\"\r\n                        data-target=\"#modal-edit\" *ngIf=\"!disable\" (click)=\"imgArray()\">\r\n                        <i class=\"material-icons\" style=\"cursor:pointer\">border_color</i>\r\n                    </span>\r\n                </div>\r\n                <br>\r\n                <div class=\"row date\">\r\n                    <div class=\"col-sm-2\">\r\n                        <span class=\"glyphicon glyphicon-calendar pull-right\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"start-date\">\r\n                            <label for=\"start-date\">Start date:</label>\r\n                            <div id=\"start-date\">{{eventsInfo.startDate}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"end-date\" id=\"end-date\">\r\n                            <label for=\"end-date\">End date:</label>\r\n                            <div id=\"end-date\">{{eventsInfo.endDate}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"style-line\" *ngIf=\"!((eventsInfo.plannerTypeId==3) ||(eventsInfo.plannerTypeId==4))\">\r\n                <div class=\" row time\" *ngIf=\"!((eventsInfo.plannerTypeId==3) ||(eventsInfo.plannerTypeId==4))\">\r\n                    <div class=\"col-sm-2\">\r\n                        <span class=\"glyphicon glyphicon-time pull-right\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"start-time\" id=\"start-time\">\r\n                            <label for=\"start-time\">Start Time:</label>\r\n                            <div id=\"start-time\">{{eventsInfo.startTime}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"end-time\" id=\"end-time\">\r\n                            <label for=\"end-time\">End Time:</label>\r\n                            <div id=\"end-time\">{{eventsInfo.endTime}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"style-line\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                        <span class=\"glyphicon glyphicon-list-alt pull-right\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"planner-type\">\r\n                            <label for=\"planner-type\">Planner-type</label>\r\n                            <div id=\"planner-type\">{{eventsInfo.plannerTypeName}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"style-line\" *ngIf=\"eventsInfo.plannerTypeId==2\">\r\n                <div class=\"row\" *ngIf=\"eventsInfo.plannerTypeId==2\">\r\n                    <div class=\"col-sm-2\">\r\n                        <span class=\"glyphicon glyphicon-th-list pull-right\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-10\">\r\n                        <label for=\"standard\">For</label>\r\n                        <div id=\"standard\" *ngFor=\"let s of eventsInfo.standards\">{{s}}</div>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"style-line\" *ngIf=\"eventsInfo.description\">\r\n                <div class=\"row\" *ngIf=\"eventsInfo.description\">\r\n                    <div class=\"col-sm-2\">\r\n                        <span class=\"glyphicon glyphicon-pencil pull-right\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"description\">\r\n                            <label for=\"description\">Description:</label>\r\n                            <div id=\"description\">\r\n                                <span class=\"white-space\">{{eventsInfo.description}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr class=\"style-line\" *ngIf=\"eventsInfo.location\">\r\n                <div class=\"row\" *ngIf=\"eventsInfo.location\">\r\n                    <div class=\"col-sm-2\">\r\n                        <span class=\"glyphicon glyphicon-map-marker pull-right\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-10\">\r\n                        <div class=\"location\">\r\n                            <label for=\"location\">location:</label>\r\n                            <div id=\"location\">{{eventsInfo.location}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button [title]=\" disable == true ? 'You Cannot Delete' : '' \" type=\"button\" class=\"btn btn-primary load-btn\" data-toggle=\"modal\"\r\n                    data-dismiss=\"modal\" data-target=\"#modal-delete\" (click)=\"deleteEvent()\" [disabled]=\"disable\">Delete</button>\r\n                <button type=\"button\" class=\"btn btn-primary load-btn\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"fullCalView\" class=\"modal fade\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 id=\"title\" class=\"modal-title\">Create new Event</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;\r\n                </button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\">\r\n                <form name=\"event\" [formGroup]=\"event\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\">Title</label>\r\n                        <span class=\"badge\">{{50-event.value.title.length}}</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\" maxlength=\"50\" placeholder=\"Enter Title\">\r\n                        <div [hidden]=\"event.controls.title.untouched || event.controls.title.pristine || event.controls.title.valid\" class=\"alert alert-warning\">\r\n                            This field is required\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"planner\">Planner-type</label>\r\n                        <select class=\"form-control\" id=\"planner\" name=\"planner\" formControlName=\"plannerTypeId\" (ngModelChange)=\"selectPlannerType($event)\">\r\n\r\n                            <option disabled=\"true\" selected=\"true\" value=''>Select Planner</option>\r\n                            <option *ngFor=\"let p of planner\" [value]=\"p.id\">\r\n                                {{p.name}}\r\n                            </option>\r\n\r\n                        </select>\r\n                        <loader [condition]=\"plannerLoader\" class=\"dropdownLoader\"></loader>\r\n                        <div [hidden]=\"event.controls.plannerTypeId.untouched || event.controls.plannerTypeId.pristine || event.controls.plannerTypeId.valid\"\r\n                            class=\"alert alert-warning\">\r\n                            This field is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"event.value.plannerTypeId==2\">\r\n                        <label for=\"standardIds\">Select Standard</label>\r\n                        <button style=\"text-align: left;\" type=\"button\" class=\"form-control\" *ngIf=\"standard != null\" (click)=\"dropdown ? dropdown = false : dropdown = true \">{{buttonlabel}}</button>\r\n                        <button type=\"button\" class=\"form-control\" *ngIf=\"standard == null\">No Standards are added to the View. Try again later.</button>\r\n                        <ul class=\"list\" id=\"standardIds\" *ngIf=\"dropdown\">\r\n                            <li style=\"    margin-left: -34px;     /* text-indent: -18px; */ \" *ngFor=\"let a of standard\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" class=\"checkbox\" [ngModel]=\"checkcheckedbox(a)\" (ngModelChange)=\"selectStandards(a,$event)\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        [value]=\"a.id\"> {{a.name}}\r\n                                </label>\r\n                            </li>\r\n                        </ul>\r\n                        <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"startDate\">Start Date</label>\r\n                        <input class=\"form-control glyphicon glyphicon-calendar\" type=\"date\" id=\"startDate1\" name=\"startDate\" formControlName=\"startDate\"\r\n                            (change)=\"onDueDate($event)\">\r\n                        <div [hidden]=\"(event.controls.startDate.valid) || (event.controls.startDate.untouched)\" class=\"alert alert-warning\">This field is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"endDate\">End Date</label>\r\n                        <input class=\"form-control glyphicon glyphicon-calendar\" type=\"date\" id=\"endDate\" name=\"endDate\" formControlName=\"endDate\"\r\n                            (change)=\"checkDate($event)\">\r\n                        <div [hidden]=\"(event.controls.endDate.valid) || (event.controls.endDate.untouched)\" class=\"alert alert-warning\">This field is required</div>\r\n                    </div>\r\n                    <div *ngIf=\"((event.value.plannerTypeId==1) || (event.value.plannerTypeId==2) ||(event.value.plannerTypeId==5) ||(event.value.plannerTypeId==6))\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"startTime\">Start Time</label>\r\n                            <input type=\"time\" class=\"form-control glyphicon glyphicon-time\" id=\"startTime\" name=\"startTime\" [(ngModel)]=\"start\" (ngModelChange)=\"startT($event)\"\r\n                                [ngModelOptions]=\"{standalone: true}\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"startTime\">End Time</label>\r\n                            <input type=\"time\" class=\"form-control glyphicon glyphicon-time\" id=\"endTime\" name=\"endTime\" [(ngModel)]=\"end\" (ngModelChange)=\"endT($event)\"\r\n                                [ngModelOptions]=\"{standalone: true}\">\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">Description</label>\r\n                        <span class=\"small\">Optional</span>\r\n                        <span class=\"badge\">{{2000-event.value.description.length}}</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" formControlName=\"description\" maxlength=\"2000\"\r\n                            placeholder=\"Description\">\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">Location</label>\r\n                        <span class=\"small\">Optional</span>\r\n                        <span class=\"badge\">{{50-event.value.location.length}}</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"location\" name=\"location\" formControlName=\"location\" placeholder=\" Enter location of event\"\r\n                            maxlength=\"50\">\r\n                    </div>\r\n\r\n                    <div>\r\n                        <div>Attachment\r\n                            <span class=\"small\">(Optional)</span>\r\n                        </div>\r\n                        <input type=\"file\" [title]=\"noOfFiles\" class=\"form-control-file\" formControlName=\"files\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\"\r\n                            (change)=\"getFile($event)\" multiple>\r\n                        <span *ngIf=\"maxfile\">* Max 5 files</span>\r\n                        <ul class=\"file-list\">\r\n                            <li class=\"file-list-items\" *ngFor=\"let f of file\">{{f.name}}\r\n                                <span style=\"font-size: 15px;\" class=\"glyphicon glyphicon-remove\" (click)=\"removeFile(f)\"></span>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" (click)=\"createFormData()\" class=\"btn btn-primary load-btn\" [disabled]=\"!event.valid || maxfile\" data-dismiss=\"modal\">Submit</button>\r\n                <button type=\"button\" class=\"btn btn-primary load-btn\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modal-edit\" class=\"modal fade\" *ngIf=\"selectedEvent\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                    <span class=\"sr-only\">close</span>\r\n                </button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\">\r\n                <form name=\"editEvent\" [formGroup]=\"editEvent\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\">Title</label>\r\n                        <span class=\"badge\">{{50-editEvent.value.title.length}}</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\" maxlength=\"50\" placeholder=\"Enter Title\">\r\n                        <!-- <div [hidden]=\"event.controls.title.untouched || event.controls.title.pristine || event.controls.title.valid\" class=\"alert alert-warning\"> -->\r\n                        <!-- This field is required -->\r\n                        <!-- </div> -->\r\n                    </div>\r\n                    <!-- <div class=\"form-group\" *ngIf=\"selectedEvent.plannerTypeId==2\">\r\n\r\n                        <label for=\"standardIds\">Select Standard</label>\r\n                        <button type=\"button\" class=\"form-control\" *ngIf=\"standard != null\" (click)=\"dropdown ? dropdown = false : dropdown = true;\"></button>\r\n                        <button type=\"button\" class=\"form-control\" *ngIf=\"standard == null\">No Standards are added to the View. Try again later.</button>\r\n                        <ul class=\"list\" id=\"standardIds\" *ngIf=\"dropdown\">\r\n                            <li style=\"    margin-left: -34px;     /* text-indent: -18px; */ \" *ngFor=\"let a of standard\">\r\n                            <label>\r\n                            <input type=\"checkbox\" class=\"checkbox\" [ngModel]=\"a.checked\" (ngModelChange)=\"editStandards(a,$event)\" [ngModelOptions]=\"{standalone: true}\" [value]=\"a.id\">\r\n                            {{a.name}}\r\n                            </label>\r\n                        </li>\r\n                        </ul>\r\n                    </div> -->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"startDate\">Start Date</label>\r\n                        <input class=\"form-control glyphicon glyphicon-calendar\" type=\"date\" id=\"startDate\" name=\"startDate\" formControlName=\"startDate\"\r\n                            (change)=\"onStartDate($event)\">\r\n                        <!-- <div [hidden]=\"(event.controls.startDate.valid) || (event.controls.startDate.untouched) || (event.controls.startDate.pristine)\">This field is required</div>                            -->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"endDate\">End Date</label>\r\n                        <input type=\"date\" class=\"form-control glyphicon glyphicon-calendar\" id=\"end\" name=\"endDate\" formControlName=\"endDate\" (change)=\"check($event)\">\r\n                        <!-- <div [hidden]=\"(event.controls.endDate.valid) || (event.controls.endDate.untouched) || (event.controls.endDate.pristine)\">This field is required</div>                            -->\r\n\r\n                    </div>\r\n                    <div *ngIf=\"((selectedEvent.plannerTypeId==1) || (selectedEvent.plannerTypeId==2) ||(selectedEvent.plannerTypeId==5) ||(selectedEvent.plannerTypeId==6))\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"startTime\">Start Time</label>\r\n                            <input type=\"time\" class=\"form-control glyphicon glyphicon-time\" id=\"startTime\" name=\"startTime\" formControlName=\"startTime\"\r\n                                (ngModelChange)=\"checkStart($event)\">\r\n                            <!-- <div [hidden]=\"(event.controls.startTime.valid) || (event.controls.startTime.untouched) || (event.controls.startTime.pristine)\">This field is required</div>                                                    -->\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"startTime\">End Time</label>\r\n                            <input type=\"time\" class=\"form-control glyphicon glyphicon-time\" id=\"endTime\" name=\"endTime\" formControlName=\"endTime\" (ngModelChange)=\"checkEnd($event)\">\r\n                            <!-- <div [hidden]=\"(event.controls.startTime.valid) || (event.controls.startTime.untouched) || (event.controls.startTime.pristine)\">This field is required</div>                                                                                -->\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">Description</label>\r\n                        <span class=\"small\">Optional</span>\r\n                        <span class=\"badge\">{{2000-editEvent.value.description.length}}</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" formControlName=\"description\" maxlength=\"2000\"\r\n                            placeholder=\"Description\">\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"location\">Location</label>\r\n                        <span class=\"small\">Optional</span>\r\n                        <span *ngIf=\"editEvent.value.location\" class=\"badge\">{{50-editEvent.value.location.length}}</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"location\" name=\"location\" formControlName=\"location\" placeholder=\" Enter location of event\"\r\n                            maxlength=\"50\">\r\n                    </div>\r\n\r\n                    <!-- <div class=\"form-group\">\r\n                        <label for=\"location\">Images</label>\r\n                        <span class=\"small\">Optional</span>\r\n                        <div *ngFor=\" let image of selectedEvent.files; let i =index \">\r\n                            <img style=\"height:50px;width:75px;\" [attr.src]= \"fileUrl + image.fileTimestamp\"><span class=\"glyphicon glyphicon-remove\"></span>                            \r\n                        </div>\r\n\r\n                        <input type=\"file\" *ngIf=\"!maxfileE\" [title]=\"noOfFiles\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" (change)=\"getFileE($event)\"  multiple>\r\n                        <span *ngIf=\"maxfileE\">*max 5 files can be added</span>                                                \r\n                    </div> -->\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" (click)=\"resetForm()\" class=\"btn btn-primary load-btn\">Reset</button>\r\n                <button type=\"button\" [disabled]=\"maxfileE\" (click)=\"updateEvent()\" class=\"btn btn-primary load-btn\" data-dismiss=\"modal\">Submit</button>\r\n                <button type=\"button\" class=\"btn btn-primary load-btn\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modal-success\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                    <span class=\"sr-only\">close</span>\r\n                </button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\">\r\n                <span class=\"messsage\">{{message}}</span>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modal-gallery\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                    <span class=\"sr-only\">close</span>\r\n                </button>\r\n                <h4 id=\"event-title\" class=\"event-title\">Gallery</h4>\r\n\r\n            </div>\r\n            <div style=\"padding:0px;\" id=\"modalBody\" class=\"modal-body\">\r\n\r\n                <div *ngIf=\"selectedEvent\" style=\"overflow:hidden;\">\r\n\r\n                    <span *ngIf=\"selectedEvent.files && selectedEvent.files[imgindex-1]\">\r\n\r\n                        <img *ngIf=\"selectedEvent.files[imgindex-1].fileOriginalName.substr(selectedEvent.files[imgindex-1].fileOriginalName.length - 4) != '.pdf'\"\r\n                            style=\"float:left;\" (click)=\"swipe(-1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedEvent.files[imgindex-1].fileTimestamp\">\r\n\r\n                        <img *ngIf=\"selectedEvent.files[imgindex-1].fileOriginalName.substr(selectedEvent.files[imgindex-1].fileOriginalName.length - 4) == '.pdf'\"\r\n                            style=\"float:left;\" (click)=\"swipe(-1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n\r\n                    </span>\r\n                    <span *ngIf=\"imgindex==0\" style=\"float:left;top:83px;width:161px;height:16px;\"></span>\r\n\r\n                    <div class=\"download-image-modal\" *ngIf=\"selectedEvent.files\" style=\"float:left\">\r\n                        <span *ngIf=\"selectedEvent.files[imgindex]\">\r\n                            <img *ngIf=\"selectedEvent.files[imgindex].fileOriginalName.substr(selectedEvent.files[imgindex].fileOriginalName.length - 4) != '.pdf'\"\r\n                                class=\"image1\" [attr.src]=\"fileUrl + selectedEvent.files[imgindex].fileTimestamp\">\r\n\r\n                            <img *ngIf=\"selectedEvent.files[imgindex].fileOriginalName.substr(selectedEvent.files[imgindex].fileOriginalName.length - 4) == '.pdf'\"\r\n                                class=\"image1\" src=\"assets/pdf1.jpg\">\r\n\r\n                        </span>\r\n                        <div class=\"edit-image-modal\">\r\n                            <a [attr.href]=\"fileUrl + selectedEvent.files[0].fileTimestamp\" [download]=\"custom\">\r\n                                <i class=\"fa fa-download fa-lg\"></i>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <span *ngIf=\" selectedEvent.files && imgindex == selectedEvent.files.length-1 \" style=\"float:left;top:83px;width:161px;height:180px;\"></span>\r\n\r\n                    <span *ngIf=\"selectedEvent.files && selectedEvent.files[imgindex+1]\">\r\n\r\n                        <img *ngIf=\"selectedEvent.files[imgindex+1].fileOriginalName.substr(selectedEvent.files[imgindex+1].fileOriginalName.length - 4) != '.pdf'\"\r\n                            style=\"float:left;\" (click)=\"swipe(1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedEvent.files[imgindex+1].fileTimestamp\">\r\n\r\n                        <img *ngIf=\"selectedEvent.files[imgindex+1].fileOriginalName.substr(selectedEvent.files[imgindex+1].fileOriginalName.length - 4) == '.pdf'\"\r\n                            style=\"float:left;\" (click)=\"swipe(1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n\r\n                    </span>\r\n\r\n                    <br *ngIf=\"selectedEvent.files\">\r\n\r\n                    <div style=\"text-align: center\">\r\n                        <div style=\"display: inline;margin:auto; ;\" *ngFor=\" let x of selectedEvent.files ; let i=index \">\r\n                            <span class=\"dots\" *ngIf=\"i!=imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-empty-dot\"></span>\r\n                            <span class=\"dots\" *ngIf=\"i==imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-full-dot\"></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <br *ngIf=\"selectedEvent.files\">\r\n\r\n            <div style=\"margin:auto;text-align: center\" >\r\n                <div style=\"display: inline;margin:auto; ;\" *ngFor=\" let x of selectedEvent.files ; let i=index \">\r\n                    <span class=\"dots\" *ngIf=\"i!=imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-empty-dot\"></span>\r\n                    <span class=\"dots\" *ngIf=\"i==imgindex\" (click)=\"swipebydots(i)\" class=\"glyphicon glyphicon-one-fine-full-dot\"></span>\r\n                </div>\r\n            </div> -->\r\n\r\n\r\n                <!--  <div *ngIf=\"selectedEvent style=\"overflow: hidden\">\r\n\r\n                    <span *ngIf=\"selectedEvent.files && selectedEvent.files[imgindex-1]\">\r\n                \r\n                    <img  *ngIf=\"selectedEvent.files[imgindex-1].fileOriginalName.substr(selectedEvent.files[imgindex-1].fileOriginalName.length - 4) != '.pdf'\" style=\"float:left;\" (click)=\"swipe(-1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedEvent.files[imgindex-1].fileTimestamp\">\r\n\r\n                    <img  *ngIf=\"selectedEvent.files[imgindex-1].fileOriginalName.substr(selectedEvent.files[imgindex-1].fileOriginalName.length - 4) == '.pdf'\" style=\"float:left;\" (click)=\"swipe(-1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n                    \r\n                    </span>\r\n\r\n                    <span *ngIf=\"imgindex==0\"  style=\"float:left;top:83px;width:161px;height:16px;\"></span>\r\n\r\n                    <div class=\"download-image-modal\" *ngIf=\"selectedEvent.files\" style=\"float:left\">\r\n                    <span>\r\n                    <img *ngIf=\"selectedEvent.files[imgindex].fileOriginalName.substr(selectedEvent.files[imgindex].fileOriginalName.length - 4) != '.pdf'\" class=\"image1\" [attr.src]=\"fileUrl + selectedEvent.files[imgindex].fileTimestamp\">\r\n\r\n                    <img *ngIf=\"selectedEvent.files[imgindex].fileOriginalName.substr(selectedEvent.files[imgindex].fileOriginalName.length - 4) == '.pdf'\" class=\"image1\" src=\"assets/pdf1.jpg\">\r\n\r\n                    </span>\r\n                        <div class=\"edit-image-modal\"><a [attr.href]=\"fileUrl + selectedEvent.files[0].fileTimestamp\" [download]=\"custom\"><i class=\"fa fa-download fa-lg\"></i></a></div>\r\n                    </div>\r\n\r\n                    <span *ngIf=\" selectedEvent.files && imgindex == selectedEvent.files.length-1 \"  style=\"float:left;top:83px;width:161px;height:16px;\" ></span>\r\n\r\n                    <span *ngIf=\"selectedEvent.files && selectedEvent.files[imgindex+1]\">\r\n                \r\n                    <img *ngIf=\"selectedEvent.files[imgindex+1].fileOriginalName.substr(selectedEvent.files[imgindex+1].fileOriginalName.length - 4) != '.pdf'\" style=\"float:left;\" (click)=\"swipe(1)\" class=\"sideimage\" [attr.src]=\"fileUrl + selectedEvent.files[imgindex+1].fileTimestamp\">\r\n\r\n                    <img *ngIf=\"selectedEvent.files[imgindex+1].fileOriginalName.substr(selectedEvent.files[imgindex+1].fileOriginalName.length - 4) == '.pdf'\" style=\"float:left;\" (click)=\"swipe(1)\" class=\"sideimage\" src=\"assets/pdf1.jpg\">\r\n\r\n                    </span>\r\n                </div> -->\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"modal-edit-image\" class=\"modal fade\" *ngIf=\"selectedEvent\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 id=\"event-title\" class=\"event-title\">Add or Remove Images</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\">\r\n                <div style=\"overflow: hidden\" *ngIf=\"selectedEvent.files\">\r\n                    Remove Images :\r\n                    <br>\r\n                    <div style=\"width:282px;float:left;\" *ngFor=\"let file of selectedEvent.files; let i = index \">\r\n                        <img style=\"width:200px;height:150px;\" [src]=\"fileUrl + file.fileTimestamp\">\r\n                        <span style=\"top:-65px\" (click)=\"removeImage( file,i )\">\r\n                            <i class=\"material-icons\">close</i>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <hr *ngIf=\"selectedEvent.files && selectedEvent.files.length < 5\">\r\n\r\n                <div *ngIf=\"selectedEvent.files && selectedEvent.files.length < 5\">\r\n                    Add Images :\r\n                    <br>\r\n                    <input type=\"file\" [title]=\"noOfFiles\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" (change)=\"getFileE($event)\"\r\n                        multiple>\r\n                    <span *ngIf=\"maxfileE\">*max {{ 5 - selectedEvent.files.length }} files can be added</span>\r\n                    <div *ngFor=\"let file of fileE; let i = index \">\r\n                        {{file.name}}\r\n                        <span (click)=\"removeEditImage(i)\" class=\"glyphicon glyphicon-remove\"></span>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" [disabled]=\" selectedEvent.files && (fileE.length + selectedEvent.files.length > 5) \" (click)=\"addImages()\"\r\n                    class=\"btn btn-primary\" data-dismiss=\"modal\">Add</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_service__ = __webpack_require__("../../../../../src/app/providers/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EventComponent = (function () {
    function EventComponent(eventService, http, ls, element, cs, router) {
        var _this = this;
        this.eventService = eventService;
        this.http = http;
        this.ls = ls;
        this.element = element;
        this.cs = cs;
        this.router = router;
        this.maxfile = false;
        this.buttonlabel = 'Select Standard';
        this.pageNo = 1;
        this.stdIds = [];
        this.loader = true;
        this.file = [];
        this.fileE = [];
        this.canadd = true;
        this.noOfFiles = 0;
        this.maxfileE = false;
        this.disable = false;
        this.standardId = [];
        this.standardLoader = false;
        this.plannerLoader = false;
        this.imgindex = 0;
        this.calendarOptions = {
            fixedWeekCount: false,
            editable: true,
            eventLimit: true,
            firstDay: 1,
            selectable: true,
            selectHeader: true,
            timeFormat: ' ',
            header: {
                right: 'today,month,listMonth, prev,next'
            },
            events: [],
            eventClick: function (event, jsEvent, view) {
                _this.selectedEvent = event;
                _this.imgindex = 0;
                _this.empId = event.employeeId;
                if (_this.empId == _this.id) {
                    _this.disable = false;
                }
                else {
                    _this.disable = true;
                }
                _this.editEvent = _this.editForm();
                _this.event = _this.initForm();
                _this.getEventById(event.id);
                $('#fullCalModal').modal();
            },
            select: function (start, end) {
                if (start.isBefore(__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, "days"))) {
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('#calendar').fullCalendar('unselect');
                    $('#modal-unselect').modal();
                    return false;
                }
                else {
                    _this.event.reset;
                    _this.start = __WEBPACK_IMPORTED_MODULE_5_moment__(start).format('YYYY-MM-DD');
                    // var tomorrow = new Date(this.start);
                    // tomorrow.setDate(tomorrow.getDate() + 1);
                    _this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(__WEBPACK_IMPORTED_MODULE_5_moment__(end).subtract(1, "days")).format('YYYY-MM-DD');
                    _this.event = _this.initForm();
                    $('#fullCalView').modal();
                }
            },
            dayRender: function (date, cell) {
                if (date.isBefore(__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, "days"))) {
                    cell.css("background-color", "#fbfbfb");
                    // cell.css("color","grey");
                }
                else {
                    cell.css("cursor", "pointer");
                }
            },
            eventRender: function (event, element, view) {
                console.log("render : ");
                console.log(event);
                console.log(element);
                console.log(view);
                if (event.files) {
                    console.log("work");
                }
            },
            eventDrop: function (event, delta, revertFunc) {
                // var date = Date(); 
                // var day = date.getDate();
                // var month = date.getMonth();
                revertFunc();
                /*          console.log(event);
                          console.log(event.startDate);
                          
                          var n = event.startDate.lastIndexOf('-');
                          var day :string = event.startDate.substring(n+1);
                          console.log(day + )
                          var newday = parseInt(day) + delta._days;
                          console.log(" a " +  newday);
                          console.log(event.startDate.slice(0, n));
                          event.startDate = event.startDate.slice(0, n) +'-'+ newday;
                          
                          console.log(event.endDate);
                          console.log(delta);
                
                          n = event.endDate.lastIndexOf('-');
                          day = event.endDate.substring(n+1);
                          console.log(day + )
                          newday = parseInt(day) + delta._days;
                          event.endDate = event.startDate.slice(0, n) +'-'+ newday;
                
                          console.log(event.endDate);
                          console.log(event.startDate);
                          console.log( "tt" );
                          console.log( event);
                          if (!confirm("Are you sure about this change?")) {
                            revertFunc();
                          }
                          else{
                
                          }
                */
            },
            eventMouseover: function (calEvent, jsEvent) {
                var tooltip = '<div class="tooltipevent" style="width:100px;height:100px;background:#ccc;position:absolute;z-index:10001;padding:7px;color:black;font-weight:500;font-size:15px">Click to view, edit or delete the event</div>';
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
            viewRender: function (view, element) {
                var b = __WEBPACK_IMPORTED_MODULE_7_jquery__('#calendar').fullCalendar('getDate');
                var check = __WEBPACK_IMPORTED_MODULE_5_moment__(b, 'YYYY/MM/DD');
                var month = check.format('MM');
                var year = check.format('YYYY');
                _this.eventMonth = year + "-" + month;
                _this.getEvents();
            },
        };
        //  
        this.getPlanner();
        this.getStandardId();
        this.ls.setLoader(false);
    }
    EventComponent.prototype.ngOnInit = function () {
        this.fileUrl = localStorage.getItem("fileUrl") + "/";
        this.id = localStorage.getItem("id");
        this.event = this.initForm();
    };
    EventComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    EventComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__('#calendar').fullCalendar('renderEvents', this.calendarOptions.events, true);
    };
    EventComponent.prototype.initForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            plannerTypeId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]([], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            startDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.start, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            endDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.end, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50)]),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(2500)]),
            files: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('')
        });
    };
    EventComponent.prototype.createFormData = function () {
        this.eventformData = new FormData();
        this.eventformData.append('title', this.event.value.title);
        this.eventformData.append('plannerTypeId', this.event.value.plannerTypeId);
        this.eventformData.append('startDate', this.event.value.startDate);
        this.eventformData.append('endDate', this.event.value.endDate);
        this.eventformData.append('location', this.event.value.location);
        this.eventformData.append('description', this.event.value.description);
        if (this.event.value.startTime) {
            this.eventformData.append('startTime', this.event.value.startTime);
        }
        if (this.event.value.endTime) {
            this.eventformData.append('endTime', this.event.value.endTime);
        }
        for (var i = 0; i < this.file.length; i++) {
            this.eventformData.append('files', this.file[i]);
        }
        this.postEvent(this.eventformData);
    };
    EventComponent.prototype.editForm = function () {
        this.selectedEvent.startTime = (__WEBPACK_IMPORTED_MODULE_5_moment__(this.selectedEvent.startTime, 'hh-mm a').format('HH:mm'));
        this.selectedEvent.endTime = (__WEBPACK_IMPORTED_MODULE_5_moment__(this.selectedEvent.endTime, 'hh-mm a').format('HH:mm'));
        console.log(this.selectedEvent.startTime);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.selectedEvent.title),
            startDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.selectedEvent.startDate),
            endDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.selectedEvent.endDate),
            startTime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.selectedEvent.startTime),
            endTime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.selectedEvent.endTime),
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.selectedEvent.location, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50)]),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.selectedEvent.description, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(2500)]),
        });
    };
    //   public  editFormData(){
    //   var editformData = new FormData();
    //   editformData.append('title',this.event.value.title);
    //   editformData.append('plannerTypeId',this.event.value.plannerTypeId);
    //   editformData.append('startDate',this.event.value.startDate);
    //   editformData.append('endDate',this.event.value.endDate);
    //   editformData.append('location',this.event.value.location);
    //   editformData.append('description',this.event.value.description);
    //   if(this.event.value.startTime){
    //     editformData.append('startTime',this.event.value.startTime);
    //   }
    //   if(this.event.value.endTime){
    //     editformData.append('endTime',this.event.value.endTime);
    //   }
    //   for(let i=0; i<this.fileE.length;i++){
    //     editformData.append('files', this.fileE[i]);  
    //   }
    //   this.updateEvent(editformData); 
    // }
    EventComponent.prototype.selectPlannerType = function (type) {
        if (type == 2) {
            this.event.addControl("standardIds", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]));
            console.log(this.event.value);
        }
        else if (type != 2) {
            this.event.removeControl("standardIds");
            // this.standard = [];
        }
        if (type == 3 || type == 4) {
            this.event.removeControl("startTime");
            this.event.removeControl("endTime");
        }
        else if ((type != 3) || (type != 4)) {
            this.event.addControl("startTime", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]));
            this.event.addControl("endTime", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]));
        }
        this.start = "00:00";
        this.end = "00:00";
    };
    EventComponent.prototype.startT = function (e) {
        this.startTime = e;
        this.event.controls['startTime'].patchValue(e);
        if ((this.event.controls['startDate'].value) == (this.event.controls['endDate'].value)) {
            if (this.endTime < this.startTime) {
                this.message = "Please choose start time less than end time";
                $('#modal-success').modal('show');
                this.event.controls['startTime'].patchValue("");
                this.event.controls['endTime'].patchValue("");
                $("input[type=time]").val("");
                this.startTime = null;
                this.endTime = null;
            }
        }
    };
    EventComponent.prototype.endT = function (e) {
        this.endTime = e;
        this.event.controls['endTime'].patchValue(e);
        if ((this.event.controls['startDate'].value) == (this.event.controls['endDate'].value)) {
            if (this.endTime < this.startTime) {
                this.message = "Please choose end time greater than start time";
                $('#modal-success').modal('show');
                // this.event.controls['startTime'].patchValue("")    
                $("input[type=time]").val("");
                this.event.controls['startTime'].patchValue("");
                this.event.controls['endTime'].patchValue("");
                this.startTime = null;
                this.endTime = null;
            }
        }
        // this.endTime=null;
    };
    EventComponent.prototype.getEvents = function () {
        var _this = this;
        console.log("getting events....");
        this.eventService.GetEvents(this.eventMonth).subscribe(function (res) {
            if (res.status === 204) {
                _this.emptyEvent = true;
                _this.loader = false;
            }
            else {
                _this.loader = false;
                _this.newEvents = res;
                console.log(_this.newEvents);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#calendar').fullCalendar('removeEvents');
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#calendar').fullCalendar('addEventSource', _this.newEvents);
            }
        }, function (err) {
        });
    };
    // public  startTi:any;
    // public  endTi:any;
    EventComponent.prototype.getEventById = function (id) {
        var _this = this;
        this.eventService.GetEventById(id).subscribe(function (res) {
            _this.eventsInfo = res;
            console.log(_this.eventsInfo);
            $('#fullCalModal').modal('show');
            // this.startTime = moment_(this.eventsInfo.start).format('HH-MM-SS-A');
            //  this.endTime = moment_(this.eventsInfo.end).format('HH-MM-SS-A');
            _this.startTime = _this.eventsInfo.startTime;
            _this.endTime = _this.eventsInfo.endTime;
            // this.startTime=this.eventsInfo.startTime;
            // this.endTime=this.eventsInfo.endTime;
        });
    };
    EventComponent.prototype.getPlanner = function () {
        var _this = this;
        this.plannerLoader = true;
        this.eventService.GetPlanner().subscribe(function (res) {
            _this.plannerLoader = false;
            _this.planner = res;
            _this.loader = false;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    EventComponent.prototype.getStandardId = function () {
        var _this = this;
        this.standardLoader = true;
        this.eventService.getStandards().subscribe(function (res) {
            _this.standardLoader = false;
            _this.standard = res;
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    EventComponent.prototype.postEvent = function (formdata) {
        var _this = this;
        this.loader = true;
        // for(let std of this.stdIds){
        if (this.event.get('plannerTypeId').value == 2) {
            formdata.append('standardIds', this.stdIds);
        }
        console.log(formdata);
        this.eventService.postEvent(formdata).subscribe(function (res) {
            _this.loader = false;
            _this.message = "You have successfully added an event";
            $('#modal-success').modal();
            // $('#message').html(this.eventsInfo.eventTitle);       
            _this.getEvents();
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    EventComponent.prototype.deleteEvent = function () {
        var _this = this;
        this.loader = true;
        this.eventService.deleteEvent(this.eventsInfo.id).subscribe(function (res) {
            _this.loader = false;
            _this.message = "You have successfully deleted the event";
            $('#modal-success').modal('show');
            _this.getEvents();
        }, function (err) {
            _this.router.navigate(['/error']);
        });
    };
    EventComponent.prototype.updateEvent = function () {
        var _this = this;
        console.log("upating");
        this.loader = true;
        console.log(this.eventsInfo.id);
        console.log(this.editEvent);
        this.eventService.updateEvent(this.eventsInfo.id, this.editEvent.value).subscribe(function (res) {
            _this.loader = false;
            _this.newEvents = res;
            console.log("upating1");
            _this.message = "You have successfully updated the event";
            $('#modal-success').modal('show');
            _this.getEvents();
        }, function (err) {
            console.log("upatingerr");
            _this.loader = false;
        });
    };
    EventComponent.prototype.selectStandards = function (a, e) {
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
        this.event.controls['standardIds'].patchValue(this.stdIds);
        console.log(this.event.value);
        console.log(this.stdIds);
    };
    EventComponent.prototype.onDueDate = function (e) {
        this.currentDate = e.target.value;
        if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
            this.message = "Please choose an upcoming date from the calendar";
            $('#modal-success').modal('show');
            this.event.controls['startDate'].patchValue(this.start);
            this.event.controls['endDate'].patchValue(this.start);
        }
        if (new Date(e.target.value) > new Date(this.event.controls['endDate'].value)) {
            this.message = "Please choose date before end date from the calendar";
            $('#modal-success').modal('show');
            this.event.controls['startDate'].patchValue(this.start);
        }
        this.startT(this.startTime);
        this.endT(this.endTime);
    };
    EventComponent.prototype.checkDate = function (e) {
        if (new Date(e.target.value) < new Date(this.event.controls['startDate'].value)) {
            this.message = "Please choose a date after start date";
            $('#modal-success').modal('show');
            this.event.controls['endDate'].patchValue(this.start);
        }
        this.startT(this.startTime);
        this.endT(this.endTime);
    };
    EventComponent.prototype.checkcheckedbox = function (a) {
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
    EventComponent.prototype.onStartDate = function (e) {
        if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
            this.message = "Please choose an upcoming date from the calendar";
            $('#modal-success').modal('show');
            this.editEvent.controls['startDate'].patchValue(this.selectedEvent.startDate);
            this.editEvent.controls['endDate'].patchValue(this.selectedEvent.startDate);
        }
        if (new Date(e.target.value) > new Date(this.editEvent.controls['endDate'].value)) {
            this.message = "Please choose date before end date from the calendar";
            $('#modal-success').modal('show');
            this.editEvent.controls['startDate'].patchValue(this.selectedEvent.startDate);
            this.checkStart(this.startTime);
            this.checkEnd(this.endTime);
        }
    };
    EventComponent.prototype.check = function (e) {
        if (new Date(e.target.value) < new Date(this.editEvent.controls['startDate'].value)) {
            this.message = "Please choose a date after start date";
            $('#modal-success').modal('show');
            this.editEvent.controls['endDate'].patchValue(this.selectedEvent.startDate);
        }
        this.checkStart(this.startTime);
        this.checkEnd(this.endTime);
    };
    EventComponent.prototype.checkStart = function (e) {
        this.startTime = e;
        console.log(e);
        if ((this.editEvent.controls['startDate'].value) == (this.editEvent.controls['endDate'].value)) {
            if (this.endTime < this.startTime) {
                this.message = "Please choose start time less than end time";
                $('#modal-success').modal('show');
                this.editEvent.controls['startTime'].patchValue("");
                this.editEvent.controls['endTime'].patchValue("");
                $("input[type=time]").val("");
                this.startTime = null;
                this.endTime = null;
            }
        }
    };
    EventComponent.prototype.checkEnd = function (e) {
        this.endTime = e;
        // this.editEvent.controls['endTime'].patchValue(e);
        if ((this.editEvent.controls['startDate'].value) == (this.editEvent.controls['endDate'].value)) {
            if (this.endTime < this.startTime) {
                this.message = "Please choose end time greater than start time";
                $('#modal-success').modal('show');
                this.event.controls['startTime'].patchValue("");
                this.editEvent.controls['startTime'].patchValue("");
                this.editEvent.controls['endTime'].patchValue("");
                $("input[type=time]").val("");
                this.startTime = null;
                this.endTime = null;
            }
        }
    };
    EventComponent.prototype.resetForm = function () {
        console.log(this.selectedEvent);
        this.editEvent.patchValue({ "title": this.selectedEvent.title });
        this.editEvent.patchValue({ "startdate": this.selectedEvent.startDate });
        this.editEvent.patchValue({ "endDate": this.selectedEvent.endDate });
        this.editEvent.patchValue({ "startTime": this.selectedEvent.startTime });
        this.editEvent.patchValue({ "endTime": this.selectedEvent.endTime });
        this.editEvent.patchValue({ "description": this.selectedEvent.description });
        this.editEvent.patchValue({ "location": this.selectedEvent.location });
        for (var i = 0; i < this.selectedEvent.files.length; i++) {
            this.fileE[i] = this.selectedEvent.files[i];
        }
        // this.fileE = JSON.parse(JSON.stringify(this.selectedEvent.files));
        console.log("reset working");
        console.log(this.fileE);
        console.log(this.selectedEvent.files);
        // console.log( moment_(this.selectedEvent.startTime).format('H-mm'));
    };
    // public  resetFormData(formdata : any){
    //       formdata.patchValue({ "title": this.selectedEvent.title });
    //       formdata.patchValue({ "startdate": this.selectedEvent.startDate });
    //       formdata.patchValue({ "endDate": this.selectedEvent.endDate });
    //       formdata.patchValue({ "startTime": this.selectedEvent.startTime});
    //       formdata.patchValue({ "endTime": this.selectedEvent.endTime});
    //       formdata.patchValue({ "description": this.selectedEvent.description });
    //       formdata.patchValue({ "location": this.selectedEvent.location });
    //       // console.log( moment_(this.selectedEvent.startTime).format('H-mm'));
    // }
    EventComponent.prototype.getFile = function (event) {
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
            console.log("working1234");
        }
        else {
            this.maxfile = false;
        }
        this.noOfFiles = noOfFiles;
        console.log(this.file);
    };
    EventComponent.prototype.getFileE = function (event) {
        var noOfFiles = this.fileE.length;
        console.log(noOfFiles);
        // if(event.srcElement.files.length<=5 && noOfFiles<=5){
        //   this.maxfile = false;
        for (var i = 0; i < event.srcElement.files.length; i++) {
            var blob = event.srcElement.files[i];
            // if(blob.type=="image/png" || blob.type=="image/jpeg" || blob.type=="image/jpg"){
            this.fileE[i + noOfFiles] = event.srcElement.files[i];
            // }
            // else{
            //   $('#errorModal').modal('show');
            //   this.circular.controls['files'].reset();
            //  }
        }
        // }
        noOfFiles = this.fileE.length;
        if (noOfFiles + this.selectedEvent.files.length > 5) {
            this.maxfileE = true;
            console.log("working1234");
        }
        else {
            this.maxfileE = false;
        }
        this.noOfFiles = noOfFiles;
        console.log(this.fileE);
    };
    EventComponent.prototype.removeEditImage = function (i) {
        this.fileE.splice(i, 1);
        var noOfFiles = this.fileE.length;
        if (noOfFiles + this.selectedEvent.files.length <= 5) {
            this.maxfileE = false;
        }
        this.noOfFiles = noOfFiles;
    };
    EventComponent.prototype.removeFile = function (f) {
        var index = this.file.indexOf(f);
        this.file.splice(index, 1);
        var noOfFiles = this.file.length;
        if (noOfFiles <= 5) {
            this.maxfile = false;
        }
        this.noOfFiles = noOfFiles;
    };
    EventComponent.prototype.swipe = function (a) {
        console.log(a);
        this.imgindex += a;
    };
    EventComponent.prototype.swipebydots = function (a) {
        console.log(a);
        this.imgindex = a;
    };
    EventComponent.prototype.openGallery = function () {
        console.log("working gallery");
        $('#modal-gallery').modal('show');
    };
    EventComponent.prototype.removeImage = function (file, i) {
        var _this = this;
        console.log(file);
        var obj = {
            fileTimestamp: file.fileTimestamp
        };
        if (confirm("Are you sure you want to remove this file ??"))
            this.eventService.removeimage(this.eventsInfo.id, file.fileTimestamp).subscribe(function (res) {
                _this.selectedEvent.files.splice(i, 1);
                _this.getEvents();
            }, function (err) {
            });
        console.log("icjdvioc");
        console.log(this.selectedEvent.files);
    };
    EventComponent.prototype.imgArray = function () {
        console.log("i'm working");
        // if(this.selectedEvent.files){
        //   for(let i=0; i<this.selectedEvent.files.length; i++){
        //     this.fileE[i] = this.selectedEvent.files[i]; 
        //   }
        // }
        // this.fileE = JSON.parse(JSON.stringify(this.selectedEvent.files));
        console.log(this.fileE);
        if (this.fileE.length + this.selectedEvent.files.length < 5) {
            this.canadd = true;
        }
        else {
            this.canadd = false;
        }
    };
    EventComponent.prototype.addImages = function () {
        var _this = this;
        var images = new FormData();
        for (var _i = 0, _a = this.fileE; _i < _a.length; _i++) {
            var file = _a[_i];
            images.append('files', file);
        }
        this.eventService.addimages(this.eventsInfo.id, images).subscribe(function (res) {
            _this.fileE = [];
            _this.getEvents();
        }, function (err) {
        });
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'event',
            template: __webpack_require__("../../../../../src/app/component/event/event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/event/event.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_component__ = __webpack_require__("../../../../../src/app/component/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ap_angular2_fullcalendar__ = __webpack_require__("../../../../ap-angular2-fullcalendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ap_angular2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ap_angular2_fullcalendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EventModule = (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_4_ap_angular2_fullcalendar__["CalendarModule"], __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__event_component__["a" /* EventComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__event_component__["a" /* EventComponent */]]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "../../../../ap-angular2-fullcalendar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var calendar_1 = __webpack_require__("../../../../ap-angular2-fullcalendar/src/calendar/calendar.js");
exports.CalendarComponent = calendar_1.CalendarComponent;
var angular2_fullcalendar_1 = __webpack_require__("../../../../ap-angular2-fullcalendar/angular2-fullcalendar.js");
exports.CalendarModule = angular2_fullcalendar_1.CalendarModule;
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=event.module.chunk.js.map