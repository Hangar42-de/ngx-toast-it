(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/ngx-toast-it/fesm2015/hangar42-ngx-toast-it.js":
/*!*************************************************************!*\
  !*** ./dist/ngx-toast-it/fesm2015/hangar42-ngx-toast-it.js ***!
  \*************************************************************/
/*! exports provided: Toast, ToastConfig, ToastItModule, ToastItService, ToastPosition, ToastType, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastConfig", function() { return ToastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastItModule", function() { return ToastItModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastItService", function() { return ToastItService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPosition", function() { return ToastPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastType", function() { return ToastType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ToastContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ComponentInjectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheckCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheckCircle.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamationCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamationCircle.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamationTriangle */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamationTriangle.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faInfoCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ToastType = {
    success: 'toast--success',
    warning: 'toast--warning',
    error: 'toast--error',
    info: 'toast--info',
};
/** @enum {string} */
const ToastPosition = {
    topLeft: 'top-left',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
};
class ToastConfig {
    /**
     * @param {?=} config
     */
    constructor(config = {}) {
        this.position = ToastPosition.topRight;
        this.groupingThreshold = 5;
        this.progressBarEnabled = true;
        Object.assign(this, config);
    }
}
if (false) {}
class Toast {
    /**
     * @param {?} toast
     */
    constructor(toast) {
        this.subheading = '';
        this.timeout = 5;
        Object.assign(this, toast);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastItService {
    constructor() {
        this.activeToasts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.activeConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.activeConfig$.next(new ToastConfig(config));
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    createToast(toast) {
        /** @type {?} */
        const newToast = new Toast(toast);
        this.activeToasts$.next(newToast);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteToast(id) {
    }
    /**
     * @return {?}
     */
    resetToasts() {
    }
}
ToastItService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastItService.ctorParameters = () => [];
/** @nocollapse */ ToastItService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ToastItService_Factory() { return new ToastItService(); }, token: ToastItService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastContainerComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
        this.activeToasts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.toastCountStream$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.config = new ToastConfig();
        this.toastCount$ = this.toastCountStream$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @param {?} count
         * @return {?}
         */
        count => count > 0)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toastService.activeConfig$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => this.setConfig(config)));
        this.toastService.activeToasts$.subscribe((/**
         * @param {?} toast
         * @return {?}
         */
        toast => this.insertNewToast(toast)));
        this.activeToasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        toasts => this.handleIncomingToast(toasts)));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    destroy(index) {
        /** @type {?} */
        const newValue = this.activeToasts$.getValue();
        newValue.splice(index, 1);
        this.activeToasts$.next(newValue);
    }
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    insertNewToast(toast) {
        /** @type {?} */
        const newValue = this.activeToasts$.getValue();
        newValue.push(toast);
        this.activeToasts$.next(newValue);
    }
    /**
     * @private
     * @param {?} toasts
     * @return {?}
     */
    handleIncomingToast(toasts) {
        const { groupingThreshold } = this.config;
        this.toasts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(toasts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(groupingThreshold), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
        this.toastCountStream$.next(toasts.length - groupingThreshold);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        setTimeout((/**
         * @return {?}
         */
        () => this.config = config), 0);
    }
}
ToastContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-toast-container',
                template: "<div class=\"toast-container toast-container--{{ config.position }}\">\n  <lib-toast *ngFor=\"let toast of toasts$ | async; index as index\"\n             [@fadeInOut]\n             [toast]=\"toast\"\n             [config]=\"config\"\n             [toastCount]=\"(index + 1) === config.groupingThreshold ? (toastCount$ | async) : null\"\n             (destroyEmitter)=\"destroy(index)\">\n  </lib-toast>\n</div>\n",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(250)),
                    ]),
                ],
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff}.toast-container{position:absolute;pointer-events:none}.toast-container--top-left{top:0;left:0}.toast-container--top-right{top:0;right:0}.toast-container--bottom-left{bottom:0;left:0}.toast-container--bottom-right{bottom:0;right:0}@media (max-width:600px){.toast-container--bottom-left,.toast-container--bottom-right,.toast-container--top-left,.toast-container--top-right{left:0;width:100vw;display:flex;align-items:center;flex-direction:column}.toast-container--top-left,.toast-container--top-right{top:0}.toast-container--bottom-left,.toast-container--bottom-right{bottom:0}}"]
            }] }
];
/** @nocollapse */
ToastContainerComponent.ctorParameters = () => [
    { type: ToastItService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FACTOR_SECONDS_TO_MS = 1000;
class ToastComponent {
    constructor() {
        this.style = {};
        this.destroyEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy = (/**
         * @return {?}
         */
        () => this.destroyEmitter.next());
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.startTimer();
    }
    /**
     * @return {?}
     */
    getIconByType() {
        switch (this.toast.type) {
            case 'toast--success':
                return _fortawesome_free_solid_svg_icons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6__["faCheckCircle"];
            case 'toast--info':
                return _fortawesome_free_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_9__["faInfoCircle"];
            case 'toast--warning':
                return _fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_8__["faExclamationTriangle"];
            case 'toast--error':
                return _fortawesome_free_solid_svg_icons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_7__["faExclamationCircle"];
        }
    }
    /**
     * @private
     * @return {?}
     */
    startTimer() {
        if (this.toast.timeout === 0) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => this.destroy()), this.toast.timeout * FACTOR_SECONDS_TO_MS);
    }
}
ToastComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-toast',
                template: "<div class=\"toast {{ toast.type }}\"\n     (click)=\"destroy()\"\n     [ngStyle]=\"style\">\n\n  <div class=\"toast__body\">\n    <fa-icon [icon]=\"getIconByType()\"></fa-icon>\n\n    <div class=\"toast_content\">\n      <h5>{{ toast.heading }}</h5>\n      <h6 *ngIf=\"toast.subheading\"> - {{ toast.subheading }}</h6>\n      <p>{{ toast.message }}</p>\n    </div>\n  </div>\n\n  <span class=\"toast__count\" *ngIf=\"toastCount\">{{toastCount}}</span>\n  <lib-progress-bar *ngIf=\"config.progressBarEnabled\" [duration]=\"toast.timeout\"></lib-progress-bar>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff;display:block}.toast{position:relative;pointer-events:all;margin:20px 40px;width:350px;max-width:calc(100vw - 40px);height:70px;border-left:8px solid transparent;border-radius:3px;font-family:Roboto,sans-serif;cursor:pointer;box-shadow:5px 5px 10px var(--toast-col-shadow);z-index:9000;overflow:hidden;display:flex;flex-direction:column}.toast__body{flex:1 1 auto;display:flex;align-items:center;padding-right:15px}.toast lib-progress-bar{flex:0 0 auto}.toast fa-icon{font-size:1.8em;margin:0 10px;color:var(--toast-col-black)}.toast__count{background:var(--toast-col-black);color:var(--toast-col-white);width:25px;height:25px;border-radius:50%;display:flex;align-items:center;justify-content:center;position:absolute;right:-12px;top:-12px}.toast h5,.toast h6,.toast p{margin:0;color:var(--toast-col-black)}.toast h5{font-size:1em;font-weight:700;display:inline}.toast h6{font-size:.8em;font-weight:700;display:inline}.toast p{font-size:.8em}.toast--top-left{top:0;left:0}.toast--top-right{top:0;right:0}.toast--bottom-left{bottom:0;left:0}.toast--bottom-right{bottom:0;right:0}.toast--success{border-color:var(--toast-col-success);background-color:var(--toast-col-success-light)}.toast--warning{border-color:var(--toast-col-warning);background-color:var(--toast-col-warning-light)}.toast--info{border-color:var(--toast-col-info);background-color:var(--toast-col-info-light)}.toast--error{border-color:var(--toast-col-error);background-color:var(--toast-col-error-light)}@media (max-width:600px){.toast{margin:5px;height:60px}}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [];
ToastComponent.propDecorators = {
    toast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toastCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    destroyEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentInjectorService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    injectComponent(component, params = {}) {
        /** @type {?} */
        const componentRef = this.createComponent(component);
        Object.assign(componentRef.instance, params);
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    createComponent(component) {
        return this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
    }
}
ComponentInjectorService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComponentInjectorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
/** @nocollapse */ ComponentInjectorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ComponentInjectorService_Factory() { return new ComponentInjectorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"])); }, token: ComponentInjectorService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FACTOR_SECONDS_TO_MS$1 = 1000;
/** @type {?} */
const REFRESH_RATE = 30;
// ~33hz
class ProgressBarComponent {
    constructor() {
        this.progress = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calculateDuration();
    }
    /**
     * @private
     * @return {?}
     */
    calculateDuration() {
        if (!this.duration) {
            return;
        }
        /** @type {?} */
        const amountOfMarblesUntilFinished = this.duration * FACTOR_SECONDS_TO_MS$1 / REFRESH_RATE;
        /** @type {?} */
        const amountOfPercentageOfEachMarble = 100 / amountOfMarblesUntilFinished;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(REFRESH_RATE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(amountOfMarblesUntilFinished))
            .subscribe((/**
         * @return {?}
         */
        () => this.progress += amountOfPercentageOfEachMarble));
    }
}
ProgressBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-progress-bar',
                template: "  <div class=\"progress-bar\" [style.width.%]=\"progress\"></div>\n",
                styles: [":host{width:100%;height:3px;display:block}.progress-bar{height:100%;background:rgba(0,0,0,.07)}"]
            }] }
];
/** @nocollapse */
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastItModule {
    /**
     * @param {?} componentInjectorService
     */
    constructor(componentInjectorService) {
        componentInjectorService.injectComponent(ToastContainerComponent);
    }
}
ToastItModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    ToastComponent,
                    ToastContainerComponent,
                    ProgressBarComponent
                ],
                entryComponents: [
                    ToastContainerComponent
                ],
                providers: [ToastItService],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
                ]
            },] }
];
/** @nocollapse */
ToastItModule.ctorParameters = () => [
    { type: ComponentInjectorService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=hangar42-ngx-toast-it.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-test-button></app-test-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-button/test-button.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-button/test-button.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n\n  <h3>Toast</h3>\n\n  <mat-form-field>\n    <mat-label>Type</mat-label>\n    <mat-select [(ngModel)]=\"toast.type\" name=\"type\" required>\n      <mat-option value=\"{{ toastType.success }}\">Success</mat-option>\n      <mat-option value=\"{{ toastType.info }}\">Info</mat-option>\n      <mat-option value=\"{{ toastType.warning }}\">Warning</mat-option>\n      <mat-option value=\"{{ toastType.error }}\">Error</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Heading</mat-label>\n    <input matInput type=\"text\" [(ngModel)]=\"toast.heading\" name=\"heading\" required>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Subheading</mat-label>\n    <input matInput [(ngModel)]=\"toast.subheading\" name=\"subheading\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Message</mat-label>\n    <input matInput [(ngModel)]=\"toast.message\" name=\"message\" required>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Timeout</mat-label>\n    <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"toast.timeout\" name=\"timeout\" required>\n    <mat-hint>Defines how long the Toast will stay (zero is forever)</mat-hint>\n  </mat-form-field>\n\n  <button mat-raised-button color=\"primary\" (click)=\"sendTestToast()\">Toast it</button>\n\n</form>\n\n<form>\n\n  <h3>Config</h3>\n\n  <mat-form-field>\n    <mat-label>Position</mat-label>\n    <mat-select [(ngModel)]=\"toastConfig.position\" name=\"position\">\n      <mat-option value=\"{{ toastPosition.topLeft }}\">Top Left</mat-option>\n      <mat-option value=\"{{ toastPosition.topRight }}\">Top Right</mat-option>\n      <mat-option value=\"{{ toastPosition.bottomLeft }}\">Bottom Left</mat-option>\n      <mat-option value=\"{{ toastPosition.bottomRight }}\">Bottom Right</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Grouping Threshold</mat-label>\n    <input matInput type=\"number\" min=\"1\" [(ngModel)]=\"toastConfig.groupingThreshold\" name=\"groupingThreshold\">\n    <mat-hint>Defines how many toasts can be shown at the same time until they get grouped</mat-hint>\n  </mat-form-field>\n\n  <mat-slide-toggle\n    color=\"primary\"\n    [(ngModel)]=\"toastConfig.progressBarEnabled\"\n    name=\"progressBarEnabled\">\n    Progressbar Enabled\n  </mat-slide-toggle>\n\n  <button mat-raised-button color=\"primary\" (click)=\"sendConfig()\">Change Config</button>\n\n\n</form>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'toast-module';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_button_test_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-button/test-button.component */ "./src/app/test-button/test-button.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toast_it__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toast-it */ "./dist/ngx-toast-it/fesm2015/hangar42-ngx-toast-it.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _test_button_test_button_component__WEBPACK_IMPORTED_MODULE_4__["TestButtonComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_toast_it__WEBPACK_IMPORTED_MODULE_8__["ToastItModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/test-button/test-button.component.scss":
/*!********************************************************!*\
  !*** ./src/app/test-button/test-button.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  width: 300px;\n  max-width: calc(100% - 100px);\n  padding: 50px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nmat-form-field {\n  display: block;\n  margin-bottom: 15px;\n}\n\nmat-slide-toggle {\n  margin: 15px 0;\n}\n\nbutton {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5uaXNyb3NuZXIvUHJvamVjdHMvVHV0b3JpYWxzL2Jld2VyYnVuZ3MtdGVzdHMvdG9hc3QtbW9kdWxlL3NyYy9hcHAvdGVzdC1idXR0b24vdGVzdC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rlc3QtYnV0dG9uL3Rlc3QtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGVzdC1idXR0b24vdGVzdC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5tYXQtc2xpZGUtdG9nZ2xle1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsImZvcm0ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBwYWRkaW5nOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbm1hdC1zbGlkZS10b2dnbGUge1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/test-button/test-button.component.ts":
/*!******************************************************!*\
  !*** ./src/app/test-button/test-button.component.ts ***!
  \******************************************************/
/*! exports provided: TestButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestButtonComponent", function() { return TestButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toast_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toast-it */ "./dist/ngx-toast-it/fesm2015/hangar42-ngx-toast-it.js");



let TestButtonComponent = class TestButtonComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.toastPosition = ngx_toast_it__WEBPACK_IMPORTED_MODULE_2__["ToastPosition"];
        this.toastType = ngx_toast_it__WEBPACK_IMPORTED_MODULE_2__["ToastType"];
        this.toastConfig = {
            position: ngx_toast_it__WEBPACK_IMPORTED_MODULE_2__["ToastPosition"].topRight,
            groupingThreshold: 5,
            progressBarEnabled: true
        };
        this.toast = {
            type: ngx_toast_it__WEBPACK_IMPORTED_MODULE_2__["ToastType"].success,
            heading: 'Great',
            subheading: 'You found the Toast Component',
            message: 'Let us know what you think about it',
            timeout: 0
        };
    }
    ngOnInit() {
        this.sendConfig();
    }
    sendTestToast() {
        this.toastService.createToast(this.toast);
    }
    sendConfig() {
        this.toastService.setConfig(this.toastConfig);
    }
};
TestButtonComponent.ctorParameters = () => [
    { type: ngx_toast_it__WEBPACK_IMPORTED_MODULE_2__["ToastItService"] }
];
TestButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-button/test-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-button.component.scss */ "./src/app/test-button/test-button.component.scss")).default]
    })
], TestButtonComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dennisrosner/Projects/Tutorials/bewerbungs-tests/toast-module/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map