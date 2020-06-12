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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Account</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"username\" class=\"ion-padding-top ion-text-center\">\r\n    <img src=\"https://www.gravatar.com/avatar?d=mm&s=140\" alt=\"avatar\">\r\n    <h2>{{username}}</h2>\r\n\r\n    <ion-list inset>\r\n      <ion-item (click)=\"updatePicture()\">Update Picture</ion-item>\r\n      <ion-item (click)=\"changeUsername()\">Change Username</ion-item>\r\n      <ion-item (click)=\"changePassword()\">Change Password</ion-item>\r\n      <ion-item (click)=\"support()\">Support</ion-item>\r\n      <ion-item (click)=\"logout()\">Logout</ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/account/account-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/pages/account/account-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: AccountPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () { return AccountPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");
            var routes = [
                {
                    path: '',
                    component: _account__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
                }
            ];
            var AccountPageRoutingModule = /** @class */ (function () {
                function AccountPageRoutingModule() {
                }
                return AccountPageRoutingModule;
            }());
            AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AccountPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/account/account.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pages/account/account.module.ts ***!
          \*************************************************/
        /*! exports provided: AccountModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function () { return AccountModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account */ "./src/app/pages/account/account.ts");
            /* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/pages/account/account-routing.module.ts");
            var AccountModule = /** @class */ (function () {
                function AccountModule() {
                }
                return AccountModule;
            }());
            AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
                    ],
                    declarations: [
                        _account__WEBPACK_IMPORTED_MODULE_4__["AccountPage"],
                    ]
                })
            ], AccountModule);
            /***/ 
        }),
        /***/ "./src/app/pages/account/account.scss": 
        /*!********************************************!*\
          !*** ./src/app/pages/account/account.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img {\n  max-width: 140px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9FOlxcSnVzdFNjaGVkdWxlXFxKdXN0U2NoZWR1bGUvc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50XFxhY2NvdW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1heC13aWR0aDogMTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiIsImltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/account/account.ts": 
        /*!******************************************!*\
          !*** ./src/app/pages/account/account.ts ***!
          \******************************************/
        /*! exports provided: AccountPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function () { return AccountPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
            var AccountPage = /** @class */ (function () {
                function AccountPage(alertCtrl, router, userData) {
                    this.alertCtrl = alertCtrl;
                    this.router = router;
                    this.userData = userData;
                }
                AccountPage.prototype.ngAfterViewInit = function () {
                    this.getUsername();
                };
                AccountPage.prototype.updatePicture = function () {
                    console.log('Clicked to update picture');
                };
                // Present an alert with the current username populated
                // clicking OK will update the username and display it
                // clicking Cancel will close the alert and do nothing
                AccountPage.prototype.changeUsername = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var alert;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                        header: 'Change Username',
                                        buttons: [
                                            'Cancel',
                                            {
                                                text: 'Ok',
                                                handler: function (data) {
                                                    _this.userData.setUsername(data.username);
                                                    _this.getUsername();
                                                }
                                            }
                                        ],
                                        inputs: [
                                            {
                                                type: 'text',
                                                name: 'username',
                                                value: this.username,
                                                placeholder: 'username'
                                            }
                                        ]
                                    })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AccountPage.prototype.getUsername = function () {
                    var _this = this;
                    this.userData.getUsername().then(function (username) {
                        _this.username = username;
                    });
                };
                AccountPage.prototype.changePassword = function () {
                    console.log('Clicked to change password');
                };
                AccountPage.prototype.logout = function () {
                    this.userData.logout();
                    this.router.navigateByUrl('/login');
                };
                AccountPage.prototype.support = function () {
                    this.router.navigateByUrl('/support');
                };
                return AccountPage;
            }());
            AccountPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"] }
            ]; };
            AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'page-account',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.scss */ "./src/app/pages/account/account.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])
            ], AccountPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-account-account-module-es2015.js.map
//# sourceMappingURL=pages-account-account-module-es5.js.map
//# sourceMappingURL=pages-account-account-module-es5.js.map