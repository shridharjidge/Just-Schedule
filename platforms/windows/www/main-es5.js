﻿var __generator = (this && this.__generator) || function (thisArg, body) {
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
          \*****************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./ion-action-sheet-controller_8.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
                    "common",
                    0
                ],
                "./ion-action-sheet-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
                    "common",
                    1
                ],
                "./ion-action-sheet-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
                    "common",
                    2
                ],
                "./ion-alert-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
                    "common",
                    3
                ],
                "./ion-alert-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
                    "common",
                    4
                ],
                "./ion-app_8-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
                    "common",
                    5
                ],
                "./ion-app_8-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
                    "common",
                    6
                ],
                "./ion-avatar_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
                    "common",
                    7
                ],
                "./ion-avatar_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
                    "common",
                    8
                ],
                "./ion-back-button-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
                    "common",
                    9
                ],
                "./ion-back-button-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
                    "common",
                    10
                ],
                "./ion-backdrop-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
                    11
                ],
                "./ion-backdrop-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
                    12
                ],
                "./ion-button_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
                    "common",
                    13
                ],
                "./ion-button_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
                    "common",
                    14
                ],
                "./ion-card_5-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
                    "common",
                    15
                ],
                "./ion-card_5-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
                    "common",
                    16
                ],
                "./ion-checkbox-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
                    "common",
                    17
                ],
                "./ion-checkbox-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
                    "common",
                    18
                ],
                "./ion-chip-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
                    "common",
                    19
                ],
                "./ion-chip-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
                    "common",
                    20
                ],
                "./ion-col_3.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
                    21
                ],
                "./ion-datetime_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
                    "common",
                    22
                ],
                "./ion-datetime_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
                    "common",
                    23
                ],
                "./ion-fab_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
                    "common",
                    24
                ],
                "./ion-fab_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
                    "common",
                    25
                ],
                "./ion-img.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
                    26
                ],
                "./ion-infinite-scroll_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
                    "common",
                    27
                ],
                "./ion-infinite-scroll_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
                    "common",
                    28
                ],
                "./ion-input-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
                    "common",
                    29
                ],
                "./ion-input-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
                    "common",
                    30
                ],
                "./ion-item-option_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
                    "common",
                    31
                ],
                "./ion-item-option_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
                    "common",
                    32
                ],
                "./ion-item_8-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
                    "common",
                    33
                ],
                "./ion-item_8-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
                    "common",
                    34
                ],
                "./ion-loading-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
                    "common",
                    35
                ],
                "./ion-loading-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
                    "common",
                    36
                ],
                "./ion-menu_4-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
                    "common",
                    37
                ],
                "./ion-menu_4-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
                    "common",
                    38
                ],
                "./ion-modal-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
                    "common",
                    39
                ],
                "./ion-modal-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
                    "common",
                    40
                ],
                "./ion-nav_5.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
                    "common",
                    41
                ],
                "./ion-popover-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
                    "common",
                    42
                ],
                "./ion-popover-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
                    "common",
                    43
                ],
                "./ion-progress-bar-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
                    "common",
                    44
                ],
                "./ion-progress-bar-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
                    "common",
                    45
                ],
                "./ion-radio_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
                    "common",
                    46
                ],
                "./ion-radio_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
                    "common",
                    47
                ],
                "./ion-range-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
                    "common",
                    48
                ],
                "./ion-range-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
                    "common",
                    49
                ],
                "./ion-refresher_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
                    "common",
                    50
                ],
                "./ion-refresher_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
                    "common",
                    51
                ],
                "./ion-reorder_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
                    "common",
                    52
                ],
                "./ion-reorder_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
                    "common",
                    53
                ],
                "./ion-ripple-effect.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
                    54
                ],
                "./ion-route_4.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
                    "common",
                    55
                ],
                "./ion-searchbar-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
                    "common",
                    56
                ],
                "./ion-searchbar-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
                    "common",
                    57
                ],
                "./ion-segment_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
                    "common",
                    58
                ],
                "./ion-segment_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
                    "common",
                    59
                ],
                "./ion-select_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
                    "common",
                    60
                ],
                "./ion-select_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
                    "common",
                    61
                ],
                "./ion-slide_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
                    62
                ],
                "./ion-slide_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
                    63
                ],
                "./ion-spinner.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
                    "common",
                    64
                ],
                "./ion-split-pane-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
                    65
                ],
                "./ion-split-pane-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
                    66
                ],
                "./ion-tab-bar_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
                    "common",
                    67
                ],
                "./ion-tab-bar_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
                    "common",
                    68
                ],
                "./ion-tab_2.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
                    "common",
                    69
                ],
                "./ion-text.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
                    "common",
                    70
                ],
                "./ion-textarea-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
                    "common",
                    71
                ],
                "./ion-textarea-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
                    "common",
                    72
                ],
                "./ion-toast-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
                    "common",
                    73
                ],
                "./ion-toast-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
                    "common",
                    74
                ],
                "./ion-toggle-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
                    "common",
                    75
                ],
                "./ion-toggle-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
                    "common",
                    76
                ],
                "./ion-virtual-scroll.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
                    77
                ]
            };
            function webpackAsyncContext(req) {
                if (!__webpack_require__.o(map, req)) {
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                var ids = map[req], id = ids[0];
                return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
                    return __webpack_require__(id);
                });
            }
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
            module.exports = webpackAsyncContext;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-app [class.dark-theme]=\"dark\">\r\n    <ion-split-pane contentId=\"main-content\">\r\n\r\n        <ion-menu contentId=\"main-content\">\r\n            <ion-header>\r\n                <ion-toolbar>\r\n                    <ion-title>Menu</ion-title>\r\n                </ion-toolbar>\r\n            </ion-header>\r\n\r\n            <ion-content>\r\n                <ion-list lines=\"none\">\r\n                    <ion-list-header>\r\n                        Navigate\r\n                    </ion-list-header>\r\n                    <ion-menu-toggle autoHide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n                        <ion-item [routerLink]=\"p.url\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n                            <ion-label>\r\n                                {{p.title}}\r\n                            </ion-label>\r\n                        </ion-item>\r\n\r\n                    </ion-menu-toggle>\r\n                </ion-list>\r\n\r\n                <ion-list *ngIf=\"loggedIn\" lines=\"none\">\r\n                    <ion-list-header>\r\n                        Account\r\n                    </ion-list-header>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item routerLink=\"/account\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n                            <ion-label>\r\n                                Account\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item routerLink=\"/support\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"help\"></ion-icon>\r\n                            <ion-label>\r\n                                Support\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item button (click)=\"logout()\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\r\n                            <ion-label>\r\n                                Logout\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                </ion-list>\r\n\r\n                <ion-list *ngIf=\"!loggedIn\" lines=\"none\">\r\n                    <ion-list-header>\r\n                        Account\r\n                    </ion-list-header>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item routerLink=\"/login\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\r\n                            <ion-label>\r\n                                Login\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item routerLink=\"/support\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"help\"></ion-icon>\r\n                            <ion-label>\r\n                                Support\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item routerLink=\"/signup\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"person-add\"></ion-icon>\r\n                            <ion-label>\r\n                                Signup\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n                </ion-list>\r\n\r\n                <ion-list>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            Dark Theme\r\n                        </ion-label>\r\n                        <ion-toggle [(ngModel)]=\"dark\"></ion-toggle>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </ion-content>\r\n        </ion-menu>\r\n\r\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n\r\n    </ion-split-pane>\r\n\r\n</ion-app>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                {
                    path: '',
                    redirectTo: '/app/tabs/schedule',
                    pathMatch: 'full'
                },
                {
                    path: 'account',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-account-account-module */ "pages-account-account-module").then(__webpack_require__.bind(null, /*! ./pages/account/account.module */ "./src/app/pages/account/account.module.ts")).then(function (m) { return m.AccountModule; }); }
                },
                {
                    path: 'support',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-support-support-module */ "pages-support-support-module").then(__webpack_require__.bind(null, /*! ./pages/support/support.module */ "./src/app/pages/support/support.module.ts")).then(function (m) { return m.SupportModule; }); }
                },
                {
                    path: 'login',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(function (m) { return m.LoginModule; }); }
                },
                {
                    path: 'signup',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-signup-signup-module */ "pages-signup-signup-module").then(__webpack_require__.bind(null, /*! ./pages/signup/signup.module */ "./src/app/pages/signup/signup.module.ts")).then(function (m) { return m.SignUpModule; }); }
                },
                {
                    path: 'app',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-tabs-page-tabs-page-module */ "pages-tabs-page-tabs-page-module").then(__webpack_require__.bind(null, /*! ./pages/tabs-page/tabs-page.module */ "./src/app/pages/tabs-page/tabs-page.module.ts")).then(function (m) { return m.TabsModule; }); }
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --transition: unset;\n}\n\n.active {\n  --color: var(--ion-color-primary);\n  --background: rgba(var(--ion-color-primary-rgb), 0.12);\n  --background-hover: rgba(var(--ion-color-primary-rgb), 0.16);\n  --background-focused: rgba(var(--ion-color-primary-rgb), 0.24);\n}\n\n.active ion-icon {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEp1c3RTY2hlZHVsZVxcSnVzdFNjaGVkdWxlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLHNEQUFBO0VBQ0EsNERBQUE7RUFDQSw4REFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0tdHJhbnNpdGlvbjogdW5zZXQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xMik7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTYpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMjQpO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICAtLXRyYW5zaXRpb246IHVuc2V0O1xufVxuXG4uYWN0aXZlIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xMik7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE2KTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yNCk7XG59XG4uYWN0aXZlIGlvbi1pY29uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            /* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/user-data */ "./src/app/providers/user-data.ts");
            /* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(menu, platform, router, splashScreen, statusBar, storage, userData, swUpdate, toastCtrl, fcm) {
                    this.menu = menu;
                    this.platform = platform;
                    this.router = router;
                    this.splashScreen = splashScreen;
                    this.statusBar = statusBar;
                    this.storage = storage;
                    this.userData = userData;
                    this.swUpdate = swUpdate;
                    this.toastCtrl = toastCtrl;
                    this.fcm = fcm;
                    this.appPages = [
                        {
                            title: 'Schedule',
                            url: '/app/tabs/schedule',
                            icon: 'calendar'
                        },
                        {
                            title: 'About',
                            url: '/app/tabs/about',
                            icon: 'information-circle'
                        }
                    ];
                    this.loggedIn = false;
                    this.dark = false;
                    this.initializeApp();
                }
                AppComponent.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.checkLoginStatus();
                            this.listenForLoginEvents();
                            this.swUpdate.available.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var toast;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                message: 'Update available!',
                                                showCloseButton: true,
                                                position: 'bottom',
                                                closeButtonText: "Reload"
                                            })];
                                        case 1:
                                            toast = _a.sent();
                                            return [4 /*yield*/, toast.present()];
                                        case 2:
                                            _a.sent();
                                            toast
                                                .onDidDismiss()
                                                .then(function () { return _this.swUpdate.activateUpdate(); })
                                                .then(function () { return window.location.reload(); });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    });
                };
                AppComponent.prototype.initializeApp = function () {
                    var _this = this;
                    this.platform.ready().then(function () {
                        _this.statusBar.styleDefault();
                        _this.splashScreen.hide();
                    });
                };
                AppComponent.prototype.checkLoginStatus = function () {
                    var _this = this;
                    return this.userData.isLoggedIn().then(function (loggedIn) {
                        return _this.updateLoggedInStatus(loggedIn);
                    });
                };
                AppComponent.prototype.updateLoggedInStatus = function (loggedIn) {
                    var _this = this;
                    setTimeout(function () {
                        _this.loggedIn = loggedIn;
                    }, 300);
                };
                AppComponent.prototype.listenForLoginEvents = function () {
                    var _this = this;
                    window.addEventListener('user:login', function () {
                        _this.updateLoggedInStatus(true);
                    });
                    window.addEventListener('user:signup', function () {
                        _this.updateLoggedInStatus(true);
                    });
                    window.addEventListener('user:logout', function () {
                        _this.updateLoggedInStatus(false);
                    });
                };
                AppComponent.prototype.logout = function () {
                    var _this = this;
                    this.userData.logout().then(function () {
                        return _this.router.navigateByUrl('/app/tabs/schedule');
                    });
                };
                AppComponent.prototype.openTutorial = function () {
                    this.menu.enable(false);
                    this.storage.set('ion_did_tutorial', false);
                    this.router.navigateByUrl('/tutorial');
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
                { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
                { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"] },
                { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
                { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                    _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
                    _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
                    _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"]])
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
            /* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
            /* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                        angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(),
                        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(),
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {
                            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
                        })
                    ],
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
                    providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
                        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_16__["FCM"],
                        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"] }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/providers/user-data.ts": 
        /*!****************************************!*\
          !*** ./src/app/providers/user-data.ts ***!
          \****************************************/
        /*! exports provided: UserData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function () { return UserData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            var UserData = /** @class */ (function () {
                function UserData(storage) {
                    this.storage = storage;
                    this._favorites = [];
                    this.HAS_LOGGED_IN = 'hasLoggedIn';
                    this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
                }
                UserData.prototype.hasFavorite = function (sessionName) {
                    return (this._favorites.indexOf(sessionName) > -1);
                };
                UserData.prototype.addFavorite = function (sessionName) {
                    this._favorites.push(sessionName);
                };
                UserData.prototype.removeFavorite = function (sessionName) {
                    var index = this._favorites.indexOf(sessionName);
                    if (index > -1) {
                        this._favorites.splice(index, 1);
                    }
                };
                UserData.prototype.login = function (username) {
                    var _this = this;
                    return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
                        _this.setUsername(username);
                        return window.dispatchEvent(new CustomEvent('user:login'));
                    });
                };
                UserData.prototype.signup = function (username) {
                    var _this = this;
                    return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
                        _this.setUsername(username);
                        return window.dispatchEvent(new CustomEvent('user:signup'));
                    });
                };
                UserData.prototype.logout = function () {
                    var _this = this;
                    return this.storage.remove(this.HAS_LOGGED_IN).then(function () {
                        return _this.storage.remove('username');
                    }).then(function () {
                        window.dispatchEvent(new CustomEvent('user:logout'));
                    });
                };
                UserData.prototype.setUsername = function (username) {
                    return this.storage.set('username', username);
                };
                UserData.prototype.getUsername = function () {
                    return this.storage.get('username').then(function (value) {
                        return value;
                    });
                };
                UserData.prototype.isLoggedIn = function () {
                    return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
                        return value === true;
                    });
                };
                return UserData;
            }());
            UserData.ctorParameters = function () { return [
                { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
            ]; };
            UserData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
            ], UserData);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `.angular-cli.json`.
            var environment = {
                production: false,
                firebase: {
                    apiKey: "AIzaSyB9jKQwCqUx8KFH3N7ktJm89MmVjeif_FQ",
                    authDomain: "justschedule-fbd96.firebaseapp.com",
                    databaseURL: "https://justschedule-fbd96.firebaseio.com",
                    projectId: "justschedule-fbd96",
                    storageBucket: "justschedule-fbd96.appspot.com",
                    messagingSenderId: "501811336308",
                    appId: "1:501811336308:web:18ea0c02d589878c26ed21",
                    measurementId: "G-0E3T8PBQ33"
                }
            };
            /*
             * In development mode, to ignore zone related error stack frames such as
             * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
             * import the following file, but please comment it out in production mode
             * because it will have performance impact when throw error
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.log(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\JustSchedule\JustSchedule\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map