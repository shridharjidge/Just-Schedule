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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Support</ion-title>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"support-logo\">\r\n        <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\">\r\n    </div>\r\n\r\n    <form #submitForm=\"ngForm\" novalidate (ngSubmit)=\"submit(submitForm)\">\r\n        <ion-list lines=\"none\" padding>\r\n            <ion-item>\r\n                <ion-label position=\"floating\" color=\"dark\">Enter your support message below</ion-label>\r\n                <ion-textarea [(ngModel)]=\"supportMessage\" name=\"supportQuestion\" #supportQuestion=\"ngModel\" rows=\"6\" required></ion-textarea>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-text color=\"danger\">\r\n            <p [hidden]=\"supportQuestion.valid || submitted === false\" class=\"ion-padding-start\">\r\n                Support message is required\r\n            </p>\r\n        </ion-text>\r\n\r\n        <div class=\"ion-padding\">\r\n            <ion-button expand=\"block\" type=\"submit\">Submit</ion-button>\r\n        </div>\r\n    </form>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/support/support-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/pages/support/support-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: SupportPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function () { return SupportPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");
            var routes = [
                {
                    path: '',
                    component: _support__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
                }
            ];
            var SupportPageRoutingModule = /** @class */ (function () {
                function SupportPageRoutingModule() {
                }
                return SupportPageRoutingModule;
            }());
            SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SupportPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/support/support.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pages/support/support.module.ts ***!
          \*************************************************/
        /*! exports provided: SupportModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function () { return SupportModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");
            /* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/pages/support/support-routing.module.ts");
            var SupportModule = /** @class */ (function () {
                function SupportModule() {
                }
                return SupportModule;
            }());
            SupportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]
                    ],
                    declarations: [
                        _support__WEBPACK_IMPORTED_MODULE_5__["SupportPage"],
                    ]
                })
            ], SupportModule);
            /***/ 
        }),
        /***/ "./src/app/pages/support/support.scss": 
        /*!********************************************!*\
          !*** ./src/app/pages/support/support.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".support-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.support-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9FOlxcSnVzdFNjaGVkdWxlXFxKdXN0U2NoZWR1bGUvc3JjXFxhcHBcXHBhZ2VzXFxzdXBwb3J0XFxzdXBwb3J0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VwcG9ydC1sb2dvIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3VwcG9ydC1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIiwiLnN1cHBvcnQtbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1cHBvcnQtbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/support/support.ts": 
        /*!******************************************!*\
          !*** ./src/app/pages/support/support.ts ***!
          \******************************************/
        /*! exports provided: SupportPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function () { return SupportPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var SupportPage = /** @class */ (function () {
                function SupportPage(alertCtrl, toastCtrl) {
                    this.alertCtrl = alertCtrl;
                    this.toastCtrl = toastCtrl;
                    this.submitted = false;
                }
                SupportPage.prototype.ionViewDidEnter = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                        message: 'This does not actually send a support request.',
                                        duration: 3000
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    return [4 /*yield*/, toast.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                SupportPage.prototype.submit = function (form) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.submitted = true;
                                    if (!form.valid) return [3 /*break*/, 3];
                                    this.supportMessage = '';
                                    this.submitted = false;
                                    return [4 /*yield*/, this.toastCtrl.create({
                                            message: 'Your support request has been sent.',
                                            duration: 3000
                                        })];
                                case 1:
                                    toast = _a.sent();
                                    return [4 /*yield*/, toast.present()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                return SupportPage;
            }());
            SupportPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
            ]; };
            SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'page-support',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.scss */ "./src/app/pages/support/support.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
            ], SupportPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-support-support-module-es2015.js.map
//# sourceMappingURL=pages-support-support-module-es5.js.map
//# sourceMappingURL=pages-support-support-module-es5.js.map