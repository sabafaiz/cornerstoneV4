webpackJsonp(["message.module"],{

/***/ "../../../../../src/app/component/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component-body {\r\n    height: 510px;\r\n    margin: auto;\r\n    background: white;\r\n}\r\n\r\n/*Message Area*/\r\n\r\n.message-area {\r\n    height: 510px;\r\n    background: rgba(244, 236, 236, 0.38);\r\n    padding: 0;\r\n    border: #dddddd solid 1px;\r\n}\r\n\r\n.type-form {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    padding: 4px;\r\n    background-color: #9c27b0;\r\n    border-radius: 3px;\r\n}\r\n\r\n.msg-nav {\r\n    /* position: fixed; */\r\n     /* width: 51%;  */\r\n    padding: 0.4%;\r\n    background: #303342;\r\n    color: white;\r\n}\r\n\r\n.close-button{\r\n    content: 'close';\r\n    background: #dddddd;\r\n    color: #333333;\r\n    font-size: 15px;\r\n    /* margin-right: 2%; */\r\n}\r\n\r\n.chat-body{\r\n    /* margin-top: 8%; */\r\n    /* padding: 2%; */\r\n     height: 425px; \r\n    overflow-y: scroll;\r\n}\r\n/* .chat-body:hover{\r\n    overflow-y: scroll;\r\n} */\r\n.new-chat-body{\r\n    /* margin-top: 8%; */\r\n    padding: 2%;\r\n    height: 389px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.custom-attach{\r\n    font-size: 154%;\r\n    /* color: #333333; */\r\n    padding: 0;\r\n    /* margin-left: -35px; */\r\n    cursor: pointer;\r\n    position: relative;\r\n    right: 34px;\r\n    top: 7px;\r\n}\r\n\r\n.custom-attach-new{\r\n    position: relative;\r\n    top: -41px;\r\n    font-size: 154%;\r\n    color: #333333;\r\n    margin-left: 637px;\r\n    cursor: pointer;\r\n}\r\n\r\n.custom-close{\r\n    margin-left: -44px;\r\n    background: inherit;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 22px;\r\n}\r\n\r\n.top-load{\r\n    position: relative;\r\n    top:4px;\r\n    background: #ea212e;\r\n    border-radius: 40px;\r\n    border: none;\r\n    outline: none;\r\n    color: #fbf8f8;\r\n    left: 50%;\r\n    z-index: 100;\r\n}\r\n\r\n.bottom-load{\r\n    background: #ea212e;\r\n    border-radius: 40px;\r\n    border: none;\r\n    outline: none;\r\n    color: #fbf8f8;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 11%; \r\n    \r\n}\r\n\r\n.closed-cmt{\r\n    /* background: rgb(251, 248, 248) !important; */\r\n    font-size: 100%;\r\n    text-align: center;\r\n    padding: 7px 26px;\r\n   \r\n  \r\n}\r\n\r\n.closed-cmt span{\r\n        background: white;\r\n    border: solid 1px;\r\n    border-radius: 20px;\r\n    border-radius: 10px;\r\n    padding: 7px;\r\n}\r\n\r\n/*Sidebar*/\r\n.message-sidebar{\r\n   padding: 0;\r\n   height: 510px;\r\n}\r\n\r\n.new-msg{\r\n    background: inherit;\r\n    border: none;\r\n    padding: 1%;\r\n    outline: none;\r\n    margin-right: 3%;\r\n    margin-top: 1%;\r\n} \r\n\r\n\r\n.msg-list{\r\n    /* margin-top: 16%;\r\n    padding: 1%; */\r\n    height: 75%;\r\n    overflow-y: auto;\r\n}\r\n\r\n.selectednav{\r\n    background: #9c27b02b;\r\n}\r\n\r\n.msg-list :hover{\r\n    background: #9c27b02b;\r\n}\r\n\r\n.overflowStyle{\r\n    white-space: nowrap;\r\n     /*white-space: pre-wrap;          */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    \r\n}\r\n\r\n.desc{\r\n    font-size: 11px;\r\n    color: grey;\r\n}\r\n\r\n/*Chat Box*/\r\n\r\n.myMsg{\r\n    float:right;\r\n    width:100%;\r\n}\r\n.myImg{\r\n    float:right;\r\n    width: 60px;  \r\n    height: 50px;  \r\n    padding: 0px 5px 0px 5px;\r\n    border-radius: 100% !important;    \r\n}\r\n\r\n.myMsgDate{\r\n    float:right;\r\n    margin: 0px 5px 10px 0px;\r\n    font-size: 10px;\r\n    color: gray;\r\n}\r\n\r\n.myText{\r\n    display: -webkit-box;\r\n    text-align: -webkit-right;\r\n    padding: 4px;\r\n    width: 70%;\r\n    float: right;\r\n    border-radius: 10px !important;\r\n}\r\n\r\n.myText-style{\r\n    background: #9c27b0eb;\r\n    padding: 11px;\r\n    border-radius: 20px !important;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    color:white;\r\n}\r\n\r\n.msg{\r\n    float:left;\r\n    width:100%;\r\n}\r\n.img{\r\n    float:left;\r\n    width: 60px;\r\n    height: 50px;\r\n    padding: 0px 5px 0px 5px;\r\n    border-radius: 100% !important;\r\n}\r\n\r\n.msgDate{\r\n    float:left;\r\n    margin: 0px 0px 10px 5px;\r\n    font-size: 10px;\r\n    color: gray;\r\n}\r\n\r\n.text{\r\n    display: -webkit-box;\r\n    padding: 4px;\r\n    width:70%;\r\n    border-radius: 10px !important;\r\n}\r\n\r\n.text-style{\r\n   background: #e3d7d7 !important;\r\n    padding: 11px;\r\n    border-radius: 20px !important;\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n\r\n\r\n\r\n /* @media screen and (max-width: 680px){\r\n    .close-btn-text{\r\n        display: none;\r\n    }\r\n} */\r\n\r\n.row{\r\n    margin-left:0px !important;\r\n    margin-right:0px !important;    \r\n}\r\n\r\n.recipient{\r\n    font-size: 100%;\r\n}\r\n.navbar-default{\r\n    margin-bottom: 0 !important;\r\n}\r\n\r\n\r\n /* @media screen and (max-width: 600px){\r\n\r\n} */\r\n\r\n.message{\r\n    min-width: 600px;\r\n}\r\n.picture-form{\r\n    position: fixed;\r\n    top: 51%;\r\n    left: 48%;\r\n}\r\n\r\n.submit-msg{\r\n    background: #ffffff;\r\n    position: absolute;\r\n    /* bottom: 25px; */\r\n    right: 26px;\r\n    border-color: #9c27b0;\r\n    top: 6px;\r\n    color: #9c27b0;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n.submit-msg :hover {\r\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n    \r\n}\r\n\r\n\r\n.submit-msg .material-icons{\r\n    vertical-align: middle;\r\n}\r\n.message-form{\r\n    /* height: 400px; */\r\n}\r\n\r\n.new-msg-col{\r\n    float: left\r\n}\r\n\r\n.send{\r\nbackground: none;\r\nborder:none;\r\nmargin-left: 1.5%;\r\noutline: none;\r\n}\r\n.attach{\r\n    font-size:200%;\r\n    color: white\r\n}\r\n\r\n.glyphicon-share{\r\n    color: #ea212e;\r\n    font-size: 200%;\r\n    top: 7px;\r\n}\r\n.edit-custom{\r\n    font-size:200%;\r\n    padding:3%;\r\n    color:#ea212e;\r\n}\r\n.message-img{\r\n    height:200px;\r\n    width:200px;\r\n}\r\n\r\n.upload-dismiss{\r\nbackground: none;\r\n    outline: none;\r\n    border: none;\r\n    position: relative;\r\n    top: 31px;\r\n    font-size: 28px;\r\n    float: right;\r\n    opacity: 1 !important;\r\n     z-index: 1 !important; \r\n}\r\n.upload-btn{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n    background: none; \r\n}\r\n.upload-btn span, .upload-img span{\r\n    color: black;\r\n}\r\n\r\n.upload-btn i{\r\n    font-size: 70px;\r\n}\r\n\r\n#img33{\r\n     opacity: 0.8; \r\n}\r\n.input-msg{\r\n    display: inline-block;\r\n    width: 77%;\r\n}\r\n\r\n#comment{\r\n    width:100%;\r\n    display:block;\r\n    border:1px solid rgb(204, 204, 204);\r\n    border-radius: 4px;\r\n    padding: 6px 12px;\r\n     font-size:14px; \r\n     color: #555;\r\n      background-color:white;\r\n}\r\n#search{\r\n        width: 40%; \r\n        margin: 3%;\r\n        display:inline;\r\n}\r\n\r\n.button{\r\n    padding: 1%;\r\n}\r\n\r\n.messageform{\r\n    margin-top: -4px !important;\r\n}\r\n.arrow{\r\n    border-style: none;\r\n    background: #9c27b0;\r\n    border-radius: 16px;\r\n    color: white;\r\n   \r\n}\r\n\r\n.pageChange{\r\n    float: right;\r\n    padding: 3px;\r\n}\r\n\r\n\r\n.arrow .material-icons{\r\n    vertical-align: middle;\r\n}\r\n\r\n.pic-modal{\r\n    width: 200px;\r\n}\r\n\r\n.pic-modal-content{\r\n    height: 200px;\r\n}\r\n\r\n.conversation-screen{\r\n    height: 80vh;\r\n    padding-top: 8px;\r\n    padding-bottom:8px;\r\n    background: #dcdcdc4a;\r\n    border-radius: 3px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n.conversation-screen:hover{\r\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n\r\n.conversation-list{\r\n    background: white;\r\n    height: 100%;\r\n    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\r\n    border-radius:7px!important;\r\n    \r\n}\r\n\r\n\r\n\r\n.conversation-list form{\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.message-screen{\r\n    height: 80%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 6px;\r\n    background-color: #9c27b0!important; \r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n\tbackground-color: #9c27b0;\r\n    border: 2px solid #9c27b0; \r\n    border-radius: 2px;\r\n}\r\n\r\n.title-head{\r\n    padding-top:15px;\r\n    padding-bottom: 15px;\r\n    background:  #9c27b0; \r\n    color:white;\r\n    font-size: 15px;\r\n    text-align: left;\r\n    padding-left: 10px;\r\n    border-radius:3px;\r\n   \r\n}\r\n\r\n.btn-close{\r\n    margin-top:-8px;\r\n    margin-right: 7px; \r\n}\r\n\r\n\r\n.form-control:focus {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #9c27b0;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(155, 39, 176, 0.47);\r\n}\r\n\r\n.btn-new{\r\n    color:#9c27b0;\r\n}\r\n\r\n.btn-new .material-icons{\r\n    font-size: 40px;\r\n    padding-left: 4px;\r\n    margin-top: -8px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.form-group{\r\n    color:#555;\r\n    font-size: 14px!important;\r\n}\r\n\r\n.message-modal .modal-header{\r\n    background: #9c27b0;\r\n    color:white;\r\n}\r\n.btn-purple{\r\n    background: #9c27b0;\r\n    border-color: #9c27b0;\r\n}\r\n\r\n.btn-primary:not([disabled]):not(.disabled):active{\r\n    color: #fff;\r\n    background-color: #9c27b0;\r\n    border-color: #9c27b0;\r\n    box-shadow: 0 0 0 0.2rem rgba(155, 39, 176, 0.25);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <!-- <div class=\"row component-body\"> -->\r\n  <!--Message Screen-->\r\n  <!-- <div class=\"col-sm-8 col-xs-8 message-area\">\r\n\r\n      <div class=\"row text-center\">\r\n        <loader [condition]=\"loader\" class=\"centerLoader\"></loader>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <loader [condition]=\"submitProgress\" class=\"centerLoader\"></loader>\r\n      </div>\r\n\r\n      <div class=\"row msg-nav\">\r\n        <div class=\"row\" *ngIf=\"selectedOldRecipient\">\r\n          <div class=\"col-sm-8 col-xs-6\">\r\n            <span class=\"recipient\">{{recipientName}}</span>\r\n          </div>\r\n          <div class=\"col-sm-4 col-xs-6\">\r\n            <button class=\"btn btn-default pull-right \" data-target=\"#closeModal\" data-toggle=\"modal\" [disabled]=\"closed\">\r\n              <span class=\"close-btn-text\">Close</span>\r\n              <i class=\" glyphicon glyphicon-remove close-btn\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!selectedOldRecipient\">\r\n          New Message\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"chat-body\" *ngIf=\"((selectedOldRecipient)&&(!loader))\">\r\n          <div class=\"Old Messages\">\r\n            <div *ngIf=\"emptyOldMessages\">\r\n              No Messages\r\n            </div>\r\n\r\n            <div *ngIf=\"!emptyOldMessages\" class=\"row\">\r\n              <button class=\"btn top-load\" (click)=\"loadOldMessages()\" [disabled]=\"(noMoreMessages|| emptyOldMessages)\">\r\n                <span class=\"glyphicon glyphicon-chevron-up\"></span>\r\n              </button>\r\n\r\n              <div class=\"msg-text\" *ngFor=\"let m of selectedOldRecipient.slice().reverse()\">\r\n                <div *ngIf=\"m.employeeName== currentUser\">\r\n                  <div class=\"myMsg\">\r\n                    <img [attr.src]=\"fileUrl + m.employeePicTimestamp\" class=\"myImg\" />\r\n                    <div class=\"myText\">\r\n                      <span class=\"myText-style\">\r\n                        <span *ngIf=\"!m.fileName\">{{m.message}}</span>\r\n                        <span *ngIf=\"m.fileName\">\r\n                          <a [attr.href]=\"fileUrl + m.message\">\r\n                            <img [attr.src]=\"fileUrl + m.message\" class=\"message-img\">\r\n                          </a>\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"myMsgDate\">\r\n                    me: {{m.createdAt| date}}\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"m.employeeName!= currentUser\">\r\n                  <div class=\"msg\">\r\n                    <span *ngIf=\"m.parentPicTimestamp\">\r\n                      <img [attr.src]=\"fileUrl + m.parentPicTimestamp\" class=\"img\" />\r\n                    </span>\r\n                    <span *ngIf=\"m.employeePicTimestamp\">\r\n                      <img [attr.src]=\"fileUrl + m.employeePicTimestamp\" class=\"img\" />\r\n                    </span>\r\n                    <div class=\"text\">\r\n                      <span class=\"text-style\">\r\n                        <span *ngIf=\"!m.fileName\">{{m.message}}</span>\r\n                        <span *ngIf=\"m.fileName\">\r\n                          <a [attr.href]=\"fileUrl + m.message\">{{m.fileName}}</a>\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"msgDate\">\r\n                    <span *ngIf=\"m.employeeName!=null\">{{m.employeeName}}</span>\r\n                    <span *ngIf=\"m.parentName!=null\">{{m.parentName}}</span>\r\n                    <span>: {{m.createdAt| date}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div>\r\n                <button class=\"btn bottom-load\" (click)=\"loadNewMessages()\" [disabled]=\"currentMessagePage === 1\">\r\n                  <span class=\"glyphicon glyphicon-chevron-down\"></span>\r\n                </button>\r\n                <div class=\"modal fade\" id=\"getFileModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"file\">\r\n                  <div class=\"modal-dialog pic-modal\" role=\"document\">\r\n                    <div class=\" pic-modal-content\">\r\n                      <form [formGroup]=\"pictureForm\">\r\n                        <button type=\"button\" (click)=\"file=null\" class=\"upload-dismiss\" data-dismiss=\"modal\">\r\n                          <span data-dismiss=\"modal\">&times;</span>\r\n                        </button>\r\n                        <img src=\"#\" id=\"img33\" alt=\"efcsc\" height=\"200px\" width=\"200px\">\r\n                        <button type=\"button\" (click)=\"submitFormWithPicture() \" class=\"upload-btn\" data-dismiss=\"modal\">\r\n                          <span class=\"glyphicon glyphicon-circle-arrow-up\"></span>\r\n                        </button>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"type-form\">\r\n                  <div class=\"closed-cmt\" *ngIf=\"closed\">\r\n                    <span>This conversation has been closed.</span>\r\n                  </div>\r\n                  <form [formGroup]=\"messageForm\" *ngIf=\"!closed\" (submit)=\"submitMessageForm()\" class=\"messageform\">\r\n                    <span class=\"input-msg\">\r\n                      <input type=\"text\" placeholder=\"Type a message...\" formControlName=\"message\" class=\"form-control custom-text\">\r\n                    </span>\r\n                    <span>\r\n                      <label for=\"exampleInputFile\" class=\"exampleInputFile\">\r\n                        <span class=\"glyphicon glyphicon-paperclip custom-attach\"></span>\r\n                      </label>\r\n                      <input type=\"file\" accept=\"images/*\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" (change)=\"getFile($event)\"\r\n                        [(ngModel)]=\"fileopen\" [ngModelOptions]=\"{standalone:true}\" style=\"display:none;\">\r\n                      <button type=\"submit\" class=\"send\" [disabled]=\"messageForm.invalid\">\r\n                        <span class=\"glyphicon glyphicon-share\"> </span>\r\n                      </button>\r\n                    </span>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"New Message new-chat-body\" *ngIf=\"(!selectedOldRecipient)&&(!loader)\">\r\n          <div class=\"message-form\">\r\n            <form [formGroup]=\"newMessageForm\" *ngIf=\"newMsg\">\r\n              <div class=\"row text-center\">\r\n                <loader [condition]=\"submitProgress\" class=\"centerLoader\"></loader>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"sel1\">Select Standard:</label>\r\n                <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"standard\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onStandard($event)\">\r\n\r\n                  <option *ngIf=\"standardsArray == null\" disabled>No standards are added. Please try again later</option>\r\n                  <option selected=\"true\" disabled=\"true\" value=\"-1\">Select Standard</option>\r\n                  <option *ngFor=\"let s of standardsArray\" [value]=\"s.id\">{{s.name}}</option>\r\n                </select>\r\n\r\n                <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n              </div>\r\n\r\n              <div class=\"form-group\" *ngIf=\"students\">\r\n                <label for=\"sel1\">Select Student:</label>\r\n                <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"selectedStudent\" [ngModelOptions]=\"{standalone: true}\">\r\n                  <option *ngIf=\"students == null\" disabled>No students are added. Please try again later</option>\r\n                  <option *ngFor=\"let s of students\" [attr.disabled]=\" s.id == -1 ? true : null\" [ngValue]=\"s\">{{s.name}}</option>\r\n                </select>\r\n                <loader [condition]=\"studentLoader\" class=\"dropdownLoader\"></loader>\r\n              </div>\r\n\r\n              <div class=\"form-group\" *ngIf=\"categories\">\r\n                <label for=\"sel1\">Select Category:</label>\r\n                <select class=\"form-control\" formControlName=\"categoryId\" [(ngModel)]=\"selcate\" id=\"sel1\">\r\n                  <option *ngIf=\"categories == null\" disabled>No categories are added. Please try again later</option>\r\n                  <option *ngFor=\"let s of categories\" [attr.disabled]=\" s.id == -1 ? true : null\" [value]=\"s.id\">{{s.name}}</option>\r\n                </select>\r\n                <loader [condition]=\"categoryLoader\" class=\"dropdownLoader\"></loader>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"usr\">Title:</label>\r\n                <span class=\"badge\">\r\n                  <span>{{50 - newMessageForm.value.title.length}}</span>\r\n                </span>\r\n                <input type=\"text\" class=\"form-control\" maxlength='50' placeholder=\"Type a title...\" formControlName=\"title\" id=\"usr\">\r\n              </div>\r\n\r\n              <div class=\"\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"comment\">Message:</label>\r\n                  <span class=\"badge\">\r\n                    <span>{{2000 - newMessageForm.value.message.length}}</span>\r\n                  </span>\r\n                  <br>\r\n                  <input id=\"comment\" placeholder=\"Type a message...\" maxlength='2000' formControlName=\"message\">\r\n                </div>\r\n              </div>\r\n              <button type=\"submit\" [disabled]=\"newMessageForm.invalid\" class=\"btn btn-success pull-right submit-msg\" (click)=\"submitNewMessage()\">Send</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  <!-- <div class=\"Old Messages List col-sm-4 col-xs-4 message-sidebar\">\r\n      <div class=\"navbar navbar-default Search\">\r\n        <div class=\"\">\r\n          <input class=\"form-control\" type=\"search\" placeholder=\"Search Messages...\" (keyup)=\"searchMessages($event)\" id=\"search\">\r\n          <span class=\"pageChange\">\r\n            <button class=\"arrow\" (click)=\"previousPage()\" [disabled]=\"currentPage === 1\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n            </button>\r\n            <span>{{currentPage}}</span>\r\n            <button class=\"arrow\" (click)=\"nextPage()\" [disabled]=\"noMore || emptyOldRecipient\">\r\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n            </button>\r\n          </span>\r\n          <button class=\"btn new-msg pull-right\" (click)=\"newMessage()\">\r\n            <span class=\"glyphicon glyphicon-edit edit-custom\">new</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <ul class=\"list-group msg-list\">\r\n        <li style=\"margin-top:-20px\">\r\n          <loader [condition]=\"loader1\" class=\"centerLoader\" style=\"left:45%\"></loader>\r\n        </li>\r\n        <li class=\"list-group-item\" *ngIf=\"emptyOldRecipient\">No Message have been added yet.</li>\r\n        <li class=\"list-group-item\" *ngIf=\"emptySearchResult\">No Data to display.</li>\r\n        <li [ngClass]=\"{'list-group-item': true, 'selectednav': (selectedIndex === i) }\" *ngFor=\"let r of oldMessageRecipients,let i = index;\"\r\n          (click)=\"selectOldRecipient(r,i)\">\r\n          <ul style=\"list-style:none;padding: 0;\">\r\n            <li class=\"overflowStyle\">\r\n              <span class=\"badge pull-right\" style=\"margin-left:1%;background: #ea212e;\" *ngIf=\"r.isClosed\">Closed</span>\r\n              <span class=\"badge pull-right\" [style.background]=\"r.categoryColor\">{{r.categoryName}}</span>\r\n              <b>{{r.title}}</b>\r\n            </li>\r\n            <li class=\"overflowStyle\">\r\n              <i *ngIf=\"r.againstParentName!=null\" style=\"text-indent:2%;margin:0\">to {{r.againstParentName}}</i>\r\n              <i *ngIf=\"r.againstParentName==null\" style=\"text-indent:2%;margin:0\">by {{r.firstMessage.parentName}}</i>\r\n            </li>\r\n            <li class=\"overflowStyle desc\">\r\n              {{r.firstMessage.message}}\r\n            </li>\r\n            <li>\r\n              <small>\r\n                <i class=\"fa fa-calendar\" style=\"margin:2%\" aria-hidden=\"true\"></i>Created On:&nbsp;{{r.firstMessage.createdAt | date: \"dd/MM/yy\"}}</small>\r\n              <small *ngIf=\"r.isClosed\"> Closed On:&nbsp;{{r.closedOn | date: \"dd/MM/yy\"}}</small>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div> -->\r\n  <!-- </div> -->\r\n  <div class=\"row conversation-screen\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"row form-group\">\r\n        <div class=\"col-sm-10\" style=\"padding: 0px;\">\r\n          <input type=\"search\" class=\"form-control\" placeholder=\"Search Messages...\" (keyup)=\"searchMessages($event)\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <button class=\"col-sm-1 btn btn-link pull-right btn-new\" (click)=\"newMessage()\">\r\n            <i class=\"material-icons\">fiber_new</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <h6>Messages</h6>\r\n      <ul class=\"list-group msg-list\">\r\n        <li style=\"margin-top:-20px\">\r\n          <loader [condition]=\"loader1\" class=\"centerLoader\" style=\"left:45%\"></loader>\r\n        </li>\r\n        <li class=\"list-group-item\" *ngIf=\"emptyOldRecipient\">No Message have been added yet.</li>\r\n        <li class=\"list-group-item\" *ngIf=\"emptySearchResult\">No Data to display.</li>\r\n        <li [ngClass]=\"{'list-group-item': true, 'selectednav': (selectedIndex === i) }\" *ngFor=\"let r of oldMessageRecipients,let i = index;\"\r\n          (click)=\"selectOldRecipient(r,i)\">\r\n          <ul style=\"list-style:none;padding: 0;\">\r\n            <li class=\"overflowStyle\">\r\n              <span class=\"badge pull-right\" style=\"margin-left:1%;background: #ea212e;\" *ngIf=\"r.isClosed\">Closed</span>\r\n              <span class=\"badge pull-right\" [style.background]=\"r.categoryColor\">{{r.categoryName}}</span>\r\n              <b>{{r.title}}</b>\r\n            </li>\r\n            <li class=\"overflowStyle\">\r\n              <i *ngIf=\"r.againstParentName!=null\" style=\"text-indent:2%;margin:0\">to {{r.againstParentName}}</i>\r\n              <i *ngIf=\"r.againstParentName==null\" style=\"text-indent:2%;margin:0\">by {{r.firstMessage.parentName}}</i>\r\n            </li>\r\n            <li class=\"overflowStyle desc\">\r\n              {{r.firstMessage.message}}\r\n            </li>\r\n            <li>\r\n              <small>\r\n                <i class=\"fa fa-calendar\" style=\"margin:2%\" aria-hidden=\"true\"></i>Created On:&nbsp;{{r.firstMessage.createdAt | date: \"dd/MM/yy\"}}</small>\r\n              <small *ngIf=\"r.isClosed\"> Closed On:&nbsp;{{r.closedOn | date: \"dd/MM/yy\"}}</small>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <div class=\"pageChange\">\r\n        <button class=\"arrow\" (click)=\"previousPage()\" [disabled]=\"currentPage === 1\">\r\n          <i class=\"material-icons\">chevron_left</i>\r\n        </button>\r\n        <span>{{currentPage}}</span>\r\n        <button class=\"arrow\" (click)=\"nextPage()\" [disabled]=\"noMore || emptyOldRecipient\">\r\n          <i class=\"material-icons\">chevron_right</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"conversation-list\" style=\"position:relative;\" *ngIf=\"selectedOldRecipient\">\r\n        <h4 class=\"title-head\" style=\"padding-top:10px;\">Your Message History with {{recipientName}}\r\n          <button class=\"btn btn-default pull-right btn-close\" data-target=\"#closeModal\" data-toggle=\"modal\" [disabled]=\"closed\">\r\n            <span class=\"close-btn-text\">Close</span>\r\n            <i class=\" glyphicon glyphicon-remove close-btn\"></i>\r\n          </button>\r\n        </h4>\r\n        <div class=\"message-screen\">\r\n          <div class=\"msg-text\" *ngFor=\"let m of selectedOldRecipient.slice().reverse()\">\r\n            <div *ngIf=\"m.employeeName== currentUser\">\r\n              <div class=\"myMsg\">\r\n                <img [attr.src]=\"fileUrl + m.employeePicTimestamp\" class=\"myImg\" />\r\n                <div class=\"myText\">\r\n                  <span class=\"myText-style\">\r\n                    <span *ngIf=\"!m.fileName\">{{m.message}}</span>\r\n                    <span *ngIf=\"m.fileName\">\r\n                      <a [attr.href]=\"fileUrl + m.message\">\r\n                        <img [attr.src]=\"fileUrl + m.message\" class=\"message-img\">\r\n                      </a>\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"myMsgDate\">\r\n                me: {{m.createdAt| date}}\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"m.employeeName!= currentUser\">\r\n              <div class=\"msg\">\r\n                <span *ngIf=\"m.parentPicTimestamp\">\r\n                  <img [attr.src]=\"fileUrl + m.parentPicTimestamp\" class=\"img\" />\r\n                </span>\r\n                <span *ngIf=\"m.employeePicTimestamp\">\r\n                  <img [attr.src]=\"fileUrl + m.employeePicTimestamp\" class=\"img\" />\r\n                </span>\r\n                <div class=\"text\">\r\n                  <span class=\"text-style\">\r\n                    <span *ngIf=\"!m.fileName\">{{m.message}}</span>\r\n                    <span *ngIf=\"m.fileName\">\r\n                      <a [attr.href]=\"fileUrl + m.message\">{{m.fileName}}</a>\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"msgDate\">\r\n                <span *ngIf=\"m.employeeName!=null\">{{m.employeeName}}</span>\r\n                <span *ngIf=\"m.parentName!=null\">{{m.parentName}}</span>\r\n                <span>: {{m.createdAt| date}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"type-form\">\r\n          <div class=\"closed-cmt\" *ngIf=\"closed\">\r\n            <span>This conversation has been closed.</span>\r\n          </div>\r\n          <form [formGroup]=\"messageForm\" *ngIf=\"!closed\" (submit)=\"submitMessageForm()\" class=\"form-inline\">\r\n            <div class=\"input-group\" style=\"width: 100%;\">\r\n              <label class=\"sr-only\" for=\"inlineFormInputGroup\">Type a message...</label>\r\n              <div class=\"input-group-addon\">\r\n                <label for=\"exampleInputFile\" class=\"exampleInputFile\">\r\n                  <i class=\"material-icons\">attach_file</i>\r\n                </label>\r\n                <input type=\"file\" accept=\"images/*\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" (change)=\"getFile($event)\"\r\n                  [(ngModel)]=\"fileopen\" [ngModelOptions]=\"{standalone:true}\" style=\"display:none;\">\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Username\">\r\n              <div class=\"input-group-addon\">\r\n                <i class=\"material-icons\">send</i>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- New Message  -->\r\n      <div class=\"conversation-list\" *ngIf=\"(!selectedOldRecipient)&&(!loader)\">\r\n        <h3 class=\"title-head\">New Message</h3>\r\n        <button type=\"submit\" [disabled]=\"newMessageForm.invalid\" class=\"btn btn-success pull-right submit-msg\" (click)=\"submitNewMessage()\">Send\r\n          <i class=\"material-icons\">send</i>\r\n        </button>\r\n        <form [formGroup]=\"newMessageForm\" *ngIf=\"newMsg\">\r\n          <div class=\"row text-center\">\r\n            <loader [condition]=\"submitProgress\" class=\"centerLoader\"></loader>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Select Standard:</label>\r\n            <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"standard\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onStandard($event)\">\r\n              <option *ngIf=\"standardsArray == null\" disabled>No standards are added. Please try again later</option>\r\n              <option selected=\"true\" disabled=\"true\" value=\"-1\">Select Standard</option>\r\n              <option *ngFor=\"let s of standardsArray\" [value]=\"s.id\">{{s.name}}</option>\r\n            </select>\r\n            <loader [condition]=\"standardLoader\" class=\"dropdownLoader\"></loader>\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"students\">\r\n            <label for=\"sel1\">Select Student:</label>\r\n            <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"selectedStudent\" [ngModelOptions]=\"{standalone: true}\">\r\n              <option *ngIf=\"students == null\" disabled>No students are added. Please try again later</option>\r\n              <option *ngFor=\"let s of students\" [attr.disabled]=\" s.id == -1 ? true : null\" [ngValue]=\"s\">{{s.name}}</option>\r\n            </select>\r\n            <loader [condition]=\"studentLoader\" class=\"dropdownLoader\"></loader>\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"categories\">\r\n            <label for=\"sel1\">Select Category:</label>\r\n            <select class=\"form-control\" formControlName=\"categoryId\" [(ngModel)]=\"selcate\" id=\"sel1\">\r\n              <option *ngIf=\"categories == null\" disabled>No categories are added. Please try again later</option>\r\n              <option *ngFor=\"let s of categories\" [attr.disabled]=\" s.id == -1 ? true : null\" [value]=\"s.id\">{{s.name}}</option>\r\n            </select>\r\n            <loader [condition]=\"categoryLoader\" class=\"dropdownLoader\"></loader>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">Title:</label>\r\n            <span class=\"badge\">\r\n              <span>{{50 - newMessageForm.value.title.length}}</span>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" maxlength='50' placeholder=\"Type a title...\" formControlName=\"title\" id=\"usr\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"comment\">Message:</label>\r\n            <span class=\"badge\">\r\n              <span>{{2000 - newMessageForm.value.message.length}}</span>\r\n            </span>\r\n            <textarea id=\"comment\" class=\"form-control\" placeholder=\"Type a message...\" maxlength='2000' formControlName=\"message\"></textarea>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modals -->\r\n<div class=\"modal fade\" id=\"getFileModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"file\">\r\n  <div class=\"modal-dialog pic-modal\" role=\"document\">\r\n    <div class=\" pic-modal-content\">\r\n      <form [formGroup]=\"pictureForm\">\r\n        <button type=\"button\" (click)=\"file=null\" class=\"upload-dismiss\" data-dismiss=\"modal\">\r\n          <span data-dismiss=\"modal\">&times;</span>\r\n        </button>\r\n        <div style=\"position:relative\">\r\n          <img src=\"#\" id=\"img33\" alt=\"efcsc\" height=\"200px\" width=\"200px\">\r\n          <button type=\"button\" class=\"upload-btn\" (click)=\"submitFormWithPicture()\" data-dismiss=\"modal\">\r\n            <i class=\"material-icons\">cloud_upload</i>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade message-modal\" id=\"closeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Close Conversation</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to close this conversation?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-purple\" data-dismiss=\"modal\" (click)=\"closeConversation()\">Close Conversation</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-purple\" data-dismiss=\"modal\">Discard</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade message-modal\" id=\"submitModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Message Sent</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Your Message has been sent.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-purple\" data-dismiss=\"modal\" (click)=\"this.selectOldRecipient(this.oldMessageRecipients[0], 0)\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-purple\" data-dismiss=\"modal\" (click)=\"newMessage()\">Send More</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade message-modal\" id=\"closeConfirmModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Conversation Closed</h4>\r\n        <button type=\"button btn-purple\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        This conversation has been successfully closed.\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade message-modal\" id=\"noMessageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">No More Messages</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        No More Messages\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade message-modal\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <span> Invalid Input</span>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <span>Please choose an image to upload</span>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__("../../../../../src/app/providers/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loaderstop_service__ = __webpack_require__("../../../../../src/app/providers/loaderstop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bar_loader_service__ = __webpack_require__("../../../../../src/app/providers/bar-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageComponent = (function () {
    function MessageComponent(ms, cs, router, ls, barLoaderService) {
        this.ms = ms;
        this.cs = cs;
        this.router = router;
        this.ls = ls;
        this.barLoaderService = barLoaderService;
        this.fileUrl = "";
        this.currentPage = 1; //For recipients
        this.noMore = false;
        this.currentMessagePage = 1; //For Messages
        this.noMoreMessages = false;
        this.emptyOldRecipient = false;
        this.selectedOldRecipient = []; // Message Array
        this.emptyOldMessages = false;
        this.emptySearchResult = false;
        this.loader = true;
        this.loader1 = true;
        this.closed = false;
        this.selcate = -1;
        this.standard = "-1";
        this.standardLoader = false;
        this.studentLoader = false;
        this.categoryLoder = false;
        this.submitProgress = false;
        this.ls.setLoader(false);
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem("name");
        this.fileUrl = localStorage.getItem("fileUrl") + "/";
        this.getMessages();
        this.initForm();
        this.initnewMessageForm();
        this.getStandards();
        this.pictureForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({});
    };
    MessageComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoader(true);
    };
    MessageComponent.prototype.ngAfterViewInit = function () {
        this.barLoaderService.hideBarLoader();
    };
    //Old Messages
    MessageComponent.prototype.getMessages = function () {
        var _this = this;
        this.loader1 = true;
        this.ms.getAllMessages(this.currentPage).subscribe(function (res) {
            if (res.status == 204) {
                _this.oldMessageRecipients = [];
                _this.emptyOldRecipient = true;
                _this.loader1 = false;
                return;
            }
            _this.loader1 = false;
            _this.emptyOldRecipient = false;
            _this.oldMessageRecipients = res;
            _this.oldMessageRecipientsCOPY = _this.oldMessageRecipients;
            _this.selectOldRecipient(_this.oldMessageRecipients[0], 0);
            if (_this.oldMessageRecipients.length < 12) {
                _this.noMore = true;
            }
            else {
                _this.noMore = false;
            }
        }, function (err) {
            _this.errPage();
        });
        this.loader = false;
    };
    MessageComponent.prototype.selectstudent = function (a) {
        this.selectedStudent = this.students.find(function (student) { return student.id === a; });
    };
    MessageComponent.prototype.initForm = function () {
        this.messageForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
        });
    };
    MessageComponent.prototype.selectOldRecipient = function (r, i) {
        this.initForm();
        this.currentMessagePage = 1;
        this.selectedIndex = i;
        this.selectedId = r.id; //for submit
        if (r.againstParentName != null)
            this.recipientName = r.againstParentName;
        else
            this.recipientName = r.firstMessage.parentName;
        if (r.isClosed)
            this.closed = true;
        else
            this.closed = false;
        this.getSelectedMessage(this.selectedId);
    };
    MessageComponent.prototype.getSelectedMessage = function (id) {
        var _this = this;
        this.loader = true;
        var oldMessages;
        oldMessages = this.selectedOldRecipient;
        this.ms.getMessage(id, this.currentMessagePage).subscribe(function (res) {
            if (res.status == 204) {
                _this.selectedOldRecipient = [];
                _this.emptyOldMessages = true;
                $("#noMessageModal").modal('show');
                _this.currentMessagePage -= 1;
                _this.getSelectedMessage(_this.selectedId);
                _this.loader = false;
                return;
            }
            _this.selectedOldRecipient = res;
            _this.emptyOldMessages = false;
            // For Old Messages
            if (_this.selectedOldRecipient.length < 6 && _this.currentMessagePage != 1) {
                _this.noMoreMessages = true;
                _this.selectedOldRecipient = oldMessages.concat(_this.selectedOldRecipient);
            }
            if (_this.selectedOldRecipient.length < 12) {
                _this.noMoreMessages = true;
            }
            else {
                _this.noMoreMessages = false;
                // this.selectedOldRecipient = res;
            }
            //For New Messages
            _this.loader = false;
        }, function (err) {
            _this.loader = false;
            _this.errPage();
        });
    };
    MessageComponent.prototype.loadOldMessages = function () {
        // delete this.selectedOldRecipient;
        this.currentMessagePage += 1;
        this.getSelectedMessage(this.selectedId);
    };
    MessageComponent.prototype.loadNewMessages = function () {
        // delete this.selectedOldRecipient;
        this.currentMessagePage -= 1;
        this.getSelectedMessage(this.selectedId);
    };
    MessageComponent.prototype.previousPage = function () {
        delete this.oldMessageRecipients;
        this.currentPage -= 1;
        this.getMessages();
    };
    MessageComponent.prototype.nextPage = function () {
        delete this.oldMessageRecipients;
        this.currentPage += 1;
        this.getMessages();
    };
    MessageComponent.prototype.searchMessages = function (ev) {
        console.log("cdcdsa");
        this.oldMessageRecipients = this.oldMessageRecipientsCOPY;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.emptySearchResult = false;
            this.oldMessageRecipients = this.oldMessageRecipientsCOPY.filter(function (item) {
                console.log(item);
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.firstMessage.message.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (this.oldMessageRecipients.length === 0)
                this.emptySearchResult = true;
            else
                this.emptySearchResult = false;
        }
    };
    MessageComponent.prototype.getFile = function (event) {
        var ext = event.srcElement.files[0];
        console.log(ext);
        var reader = new FileReader();
        if (ext.type == "image/png" || ext.type == "image/jpeg" || ext.type == "image/jpg") {
            this.file = event.srcElement.files[0];
        }
        else {
            $('#errorModal').modal('show');
            // this.newMessageForm.controls['file'].reset();      
        }
        reader.onload = function (e) {
            $('#getFileModal').modal('show'); //file upload modal   
            $('#img33')
                .attr('src', e.target.result);
        };
        // var blob = event.srcElement.files[0];
        // if(blob.type=="image/png" || blob.type=="image/jpeg" || blob.type=="image/jpg"){
        //   this.file = event.srcElement.files[0];
        // }
        // else{
        //    $('#errorModal').modal('show');
        //   this.circular.controls['file'].reset();
        // }
        reader.readAsDataURL(event.srcElement.files[0]);
    };
    MessageComponent.prototype.submitMessageForm = function () {
        var _this = this;
        this.submitProgress = true;
        this.ms.conversationComment(this.selectedId, this.messageForm.value).subscribe(function (res) {
            _this.currentMessagePage = 1;
            _this.messageForm.value['employeeName'] = _this.currentUser;
            _this.messageForm.value['createdAt'] = new Date();
            _this.messageForm.value['employeePicTimestamp'] = localStorage.getItem("picTimestamp");
            _this.selectedOldRecipient.unshift(_this.messageForm.value);
            _this.initForm();
            _this.submitProgress = false;
        }, function (er) {
            _this.errPage();
        });
    };
    MessageComponent.prototype.submitFormWithPicture = function () {
        var _this = this;
        this.submitProgress = true;
        var formData = new FormData();
        formData.append('file', this.file);
        this.ms.conversationCommentWithPicture(this.selectedId, formData).subscribe(function (res) {
            _this.currentMessagePage = 1;
            _this.getSelectedMessage(_this.selectedId);
            _this.file = null;
            _this.submitProgress = false;
        }, function (er) {
            _this.errPage();
        });
    };
    MessageComponent.prototype.closeConversation = function () {
        var _this = this;
        this.loader = true;
        this.ms.closeConversation(this.selectedId).subscribe(function (res) {
            _this.closed = true;
            _this.oldMessageRecipients[_this.selectedIndex].isClosed = true;
        }, function (err) {
            _this.errPage();
        });
        this.loader = false;
    };
    //New Message
    MessageComponent.prototype.newMessage = function () {
        this.selectedOldRecipient = null;
        // this.createMessage = true;
        this.newMsg = true;
        // this.selectedRecipient = null;
        this.initnewMessageForm();
        // this.getStandards();
    };
    MessageComponent.prototype.initnewMessageForm = function () {
        this.standard = -1;
        this.categories = null;
        this.students = null;
        this.newMessageForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            // standards: new FormControl('', Validators.required),
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            categoryId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
        });
    };
    MessageComponent.prototype.getStandards = function () {
        var _this = this;
        this.standardLoader = true;
        this.ms.getStandards().subscribe(function (res) {
            if (res.status === 204) {
                _this.standardsArray = null;
                _this.standardLoader = false;
                return;
            }
            _this.standardLoader = false;
            _this.standardsArray = res;
        }, function (err) {
            _this.errPage();
        });
    };
    MessageComponent.prototype.onStandard = function (ev) {
        var _this = this;
        this.studentLoader = true;
        this.categoryLoder = true;
        this.ms.getMessageCategory(ev).subscribe(function (res) {
            if (res.status === 204) {
                _this.categoryLoder = false;
                _this.studentLoader = false;
                _this.categories = null;
                _this.students = null;
                return;
            }
            _this.students = res.students;
            _this.students.splice(0, 0, { id: -1, name: 'Select Student' });
            _this.selectstudent(-1);
            _this.categories = res.categories;
            _this.categories.splice(0, 0, { id: -1, name: 'Select Category' });
            _this.categoryLoder = false;
            _this.studentLoader = false;
        }, function (err) {
            _this.errPage();
        });
    };
    MessageComponent.prototype.submitNewMessage = function () {
        var _this = this;
        this.loader = true;
        var temp = {
            againstParentId: this.selectedStudent.parentId,
            againstStudentId: this.selectedStudent.id,
        };
        temp = Object.assign(temp, this.newMessageForm.value);
        this.ms.newConversation(temp).subscribe(function (res) {
            _this.getMessages();
            $("#submitModal").modal('show');
            _this.initnewMessageForm();
        }, function (err) {
            _this.errPage();
        });
        this.loader = false;
    };
    MessageComponent.prototype.errPage = function () {
        this.loader = false;
        this.router.navigate(['/error']);
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'message',
            template: __webpack_require__("../../../../../src/app/component/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/message/message.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loaderstop_service__["a" /* LoaderStop */],
            __WEBPACK_IMPORTED_MODULE_6__providers_bar_loader_service__["a" /* BarLoaderService */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/message/message.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_component__ = __webpack_require__("../../../../../src/app/component/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_1__message_component__["a" /* MessageComponent */]
                    }
                ])],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__message_component__["a" /* MessageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_message_service__["a" /* MessageService */]]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "../../../../../src/app/providers/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
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








var MessageService = (function () {
    function MessageService(http, htttp, con) {
        this.http = http;
        this.htttp = htttp;
        this.con = con;
        this.getUrl();
    }
    MessageService.prototype.getUrl = function () {
        this.serverUrl = this.con.Server;
    };
    MessageService.prototype.getAllMessages = function (pageNo) {
        this.getUrl();
        return this.http.get(this.serverUrl + "/conversation/page/" + pageNo)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.getStandards = function () {
        return this.http.get(this.serverUrl + "/homework/standard")
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.getMessage = function (id, pageNo) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        });
        return this.http.get(this.serverUrl + "/conversation/" + id + "/page/" + pageNo, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.conversationComment = function (id, data) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        });
        return this.http.post(this.serverUrl + "/conversation/" + id, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.conversationCommentWithPicture = function (id, data) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        });
        return this.htttp.post(this.serverUrl + "/conversation/" + id + "/picture", data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.newConversation = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        });
        return this.http.post(this.serverUrl + "/conversation/", data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.getMessageCategory = function (standardId) {
        return this.http.get(this.serverUrl + "/conversation/category-and-student/" + standardId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.closeConversation = function (id) {
        return this.http.put(this.serverUrl + "/conversation/" + id, {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    MessageService.prototype.extractData = function (res) {
        if (res.status === 204) {
            return res;
        }
        var body = res.json();
        return body || {};
    };
    MessageService.prototype.handleError = function (error) {
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
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__default_header_service__["a" /* CustomHttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* Configuration */]])
    ], MessageService);
    return MessageService;
}());



/***/ })

});
//# sourceMappingURL=message.module.chunk.js.map