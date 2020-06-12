var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-new-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new/new.page.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new/new.page.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"onClosePress(f)\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Add Task</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <ion-item>\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"title\" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Date</ion-label>\n            <ion-datetime display-format=\"MMM DD YYYY\" picker-format=\"DD MMM YY\" [min]=\"minDate.toISOString()\" max=\"2100\" required date ngModel name=\"Date\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Time</ion-label>\n            <ion-datetime displayFormat=\"h:mm a\" ngModel name=\"timeStart\"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Location</ion-label>\n            <ion-input type=\"text\" ngModel name=\"location\" required></ion-input>\n        </ion-item>\n        <ion-card>\n            <ion-card-content>\n                <h3 class=\"ion-margin-top\">Group:</h3>\n                <ion-item *ngFor=\"let event of eventList\">\n                    <ion-label>{{ event.eventName }}</ion-label>\n                    <ion-checkbox color=\"dark\" name=\"checkboxes\" (click)=\"selectMember(event)\" [(ngModel)]=\"event.ischecked\"></ion-checkbox>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-item>\n            <ion-label position=\"floating\"> Description</ion-label>\n            <ion-textarea rows=\"3\" ngModel name=\"details\"></ion-textarea>\n        </ion-item>\n        <!-- <ion-fab type = \"submit\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button\n\n          [disabled]=\"!f.valid\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>     -->\n        <ion-button class=\"ion-float-end\" shape=\"round\" [disabled]=\"!f.valid\" type=\"submit\" margin>\n            <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>Save</ion-button>\n    </form>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/new/new.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pages/new/new.module.ts ***!
          \*****************************************/
        /*! exports provided: NewPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function () { return NewPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/pages/new/new.page.ts");
            var routes = [
                {
                    path: '',
                    component: _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]
                }
            ];
            var NewPageModule = /** @class */ (function () {
                function NewPageModule() {
                }
                return NewPageModule;
            }());
            NewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
                })
            ], NewPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/new/new.page.scss": 
        /*!*****************************************!*\
          !*** ./src/app/pages/new/new.page.scss ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy9uZXcucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/new/new.page.ts": 
        /*!***************************************!*\
          !*** ./src/app/pages/new/new.page.ts ***!
          \***************************************/
        /*! exports provided: NewPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function () { return NewPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages.model */ "./src/app/pages/pages.model.ts");
            /* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages/pages.service.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var NewPage = /** @class */ (function () {
                function NewPage(router, taskService, toastController) {
                    this.router = router;
                    this.taskService = taskService;
                    this.toastController = toastController;
                    this.minDate = new Date();
                    this.newArray = [];
                    this.selectedEvents = [];
                    this.eventList = [
                        { eventID: 1, eventName: 'Daily', ischecked: false },
                        { eventID: 2, eventName: 'Meeting', ischecked: false },
                        { eventID: 3, eventName: 'Food', ischecked: false },
                        { eventID: 4, eventName: 'Travell', ischecked: false },
                        { eventID: 5, eventName: 'Conference', ischecked: false },
                    ];
                }
                NewPage.prototype.ngOnInit = function () {
                };
                NewPage.prototype.ionViewWillEnter = function () {
                    this.minDate = new Date();
                };
                NewPage.prototype.selectMember = function (data) {
                    console.log(data);
                    // tslint:disable-next-line: triple-equals
                    if (data['ischecked'] == false) {
                        console.log('if' + data.ischecked);
                        this.selectedEvents.push(data);
                    }
                    else {
                        console.log(data.ischecked);
                        this.newArray = this.selectedEvents.filter(function (el) {
                            return el.eventID !== data.eventID;
                        });
                        this.selectedEvents = this.newArray;
                    }
                    console.log(this.selectedEvents);
                };
                NewPage.prototype.onSubmit = function (form) {
                    var value = form.value;
                    if (!value.details) {
                        value.details = '';
                    }
                    var task = new _pages_model__WEBPACK_IMPORTED_MODULE_3__["Task"](value.title, new Date(value.Date), value.timeStart, value.location, value.details, value.track, value.id, value.status);
                    this.taskService.addTask(task);
                    this.presentToast();
                    form.reset();
                    this.router.navigate(['/', 'app', 'tabs', 'schedule']);
                };
                NewPage.prototype.onClosePress = function (form) {
                    form.reset();
                    this.router.navigate(['./', 'app', 'tabs', 'schedule']);
                };
                NewPage.prototype.presentToast = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastController.create({
                                        message: 'Task saved successfully!',
                                        duration: 2000
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return NewPage;
            }());
            NewPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _pages_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
            ]; };
            NewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'page-new',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new/new.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new.page.scss */ "./src/app/pages/new/new.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _pages_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
            ], NewPage);
            /***/ 
        }),
        /***/ "./src/app/pages/pages.model.ts": 
        /*!**************************************!*\
          !*** ./src/app/pages/pages.model.ts ***!
          \**************************************/
        /*! exports provided: Task */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function () { return Task; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Task = /** @class */ (function () {
                // tslint:disable-next-line: max-line-length
                function Task(title, date, timeStart, location, details, track, id, status) {
                    this.title = title;
                    this.date = date;
                    this.timeStart = timeStart;
                    this.location = location;
                    this.details = details;
                    this.track = track;
                    this.id = id;
                    this.status = status;
                }
                return Task;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=new-new-module-es2015.js.map
//# sourceMappingURL=new-new-module-es5.js.map
//# sourceMappingURL=new-new-module-es5.js.map