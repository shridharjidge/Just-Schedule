(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-new-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new/new.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new/new.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"onClosePress(f)\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Add Task</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <ion-item>\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"title\" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Date</ion-label>\n            <ion-datetime display-format=\"MMM DD YYYY\" picker-format=\"DD MMM YY\" [min]=\"minDate.toISOString()\" max=\"2100\" required date ngModel name=\"Date\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Time</ion-label>\n            <ion-datetime displayFormat=\"h:mm a\" ngModel name=\"timeStart\"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Location</ion-label>\n            <ion-input type=\"text\" ngModel name=\"location\" required></ion-input>\n        </ion-item>\n        <ion-card>\n            <ion-card-content>\n                <h3 class=\"ion-margin-top\">Group:</h3>\n                <ion-item *ngFor=\"let event of eventList\">\n                    <ion-label>{{ event.eventName }}</ion-label>\n                    <ion-checkbox color=\"dark\" name=\"checkboxes\" (click)=\"selectMember(event)\" [(ngModel)]=\"event.ischecked\"></ion-checkbox>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-item>\n            <ion-label position=\"floating\"> Description</ion-label>\n            <ion-textarea rows=\"3\" ngModel name=\"details\"></ion-textarea>\n        </ion-item>\n        <!-- <ion-fab type = \"submit\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button\n\n          [disabled]=\"!f.valid\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>     -->\n        <ion-button class=\"ion-float-end\" shape=\"round\" [disabled]=\"!f.valid\" type=\"submit\" margin>\n            <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>Save</ion-button>\n    </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/new/new.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/new/new.module.ts ***!
  \*****************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/pages/new/new.page.ts");







const routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]
    }
];
let NewPageModule = class NewPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/new/new.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/new/new.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy9uZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/new/new.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/new/new.page.ts ***!
  \***************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages.model */ "./src/app/pages/pages.model.ts");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages/pages.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let NewPage = class NewPage {
    constructor(router, taskService, toastController) {
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
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.minDate = new Date();
    }
    selectMember(data) {
        console.log(data);
        // tslint:disable-next-line: triple-equals
        if (data['ischecked'] == false) {
            console.log('if' + data.ischecked);
            this.selectedEvents.push(data);
        }
        else {
            console.log(data.ischecked);
            this.newArray = this.selectedEvents.filter(el => {
                return el.eventID !== data.eventID;
            });
            this.selectedEvents = this.newArray;
        }
        console.log(this.selectedEvents);
    }
    onSubmit(form) {
        const value = form.value;
        if (!value.details) {
            value.details = '';
        }
        const task = new _pages_model__WEBPACK_IMPORTED_MODULE_3__["Task"](value.title, new Date(value.Date), value.timeStart, value.location, value.details, value.track, value.id, value.status);
        this.taskService.addTask(task);
        this.presentToast();
        form.reset();
        this.router.navigate(['/', 'app', 'tabs', 'schedule']);
    }
    onClosePress(form) {
        form.reset();
        this.router.navigate(['./', 'app', 'tabs', 'schedule']);
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Task saved successfully!',
                duration: 2000
            });
            toast.present();
        });
    }
};
NewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _pages_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
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



/***/ }),

/***/ "./src/app/pages/pages.model.ts":
/*!**************************************!*\
  !*** ./src/app/pages/pages.model.ts ***!
  \**************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    // tslint:disable-next-line: max-line-length
    constructor(title, date, timeStart, location, details, track, id, status) {
        this.title = title;
        this.date = date;
        this.timeStart = timeStart;
        this.location = location;
        this.details = details;
        this.track = track;
        this.id = id;
        this.status = status;
    }
}


/***/ })

}]);
//# sourceMappingURL=new-new-module-es2015.js.map