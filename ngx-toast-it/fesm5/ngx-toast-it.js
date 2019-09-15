import { Injectable, ɵɵdefineInjectable, Component, EventEmitter, Input, Output, ComponentFactoryResolver, ApplicationRef, Injector, ɵɵinject, INJECTOR, NgModule } from '@angular/core';
import { Subject, BehaviorSubject, from, interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { filter, take, toArray } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ToastType = {
    success: 'toast--success',
    warning: 'toast--warning',
    error: 'toast--error',
    info: 'toast--info',
};
/** @enum {string} */
var ToastPosition = {
    topLeft: 'top-left',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
};
var ToastConfig = /** @class */ (function () {
    function ToastConfig(config) {
        if (config === void 0) { config = {}; }
        this.position = ToastPosition.topRight;
        this.groupingThreshold = 5;
        this.progressBarEnabled = true;
        Object.assign(this, config);
    }
    return ToastConfig;
}());
if (false) {
    /** @type {?} */
    ToastConfig.prototype.position;
    /** @type {?} */
    ToastConfig.prototype.groupingThreshold;
    /** @type {?} */
    ToastConfig.prototype.progressBarEnabled;
}
var Toast = /** @class */ (function () {
    function Toast(toast) {
        this.subheading = '';
        this.timeout = 5;
        Object.assign(this, toast);
    }
    return Toast;
}());
if (false) {
    /** @type {?} */
    Toast.prototype.type;
    /** @type {?} */
    Toast.prototype.heading;
    /** @type {?} */
    Toast.prototype.subheading;
    /** @type {?} */
    Toast.prototype.message;
    /** @type {?} */
    Toast.prototype.timeout;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastItService = /** @class */ (function () {
    function ToastItService() {
        this.activeToasts$ = new Subject();
        this.activeConfig$ = new Subject();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ToastItService.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.activeConfig$.next(new ToastConfig(config));
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastItService.prototype.createToast = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        /** @type {?} */
        var newToast = new Toast(toast);
        this.activeToasts$.next(newToast);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ToastItService.prototype.deleteToast = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
    };
    /**
     * @return {?}
     */
    ToastItService.prototype.resetToasts = /**
     * @return {?}
     */
    function () {
    };
    ToastItService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastItService.ctorParameters = function () { return []; };
    /** @nocollapse */ ToastItService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ToastItService_Factory() { return new ToastItService(); }, token: ToastItService, providedIn: "root" });
    return ToastItService;
}());
if (false) {
    /** @type {?} */
    ToastItService.prototype.activeToasts$;
    /** @type {?} */
    ToastItService.prototype.activeConfig$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastContainerComponent = /** @class */ (function () {
    function ToastContainerComponent(toastService) {
        this.toastService = toastService;
        this.activeToasts$ = new BehaviorSubject([]);
        this.toastCountStream$ = new BehaviorSubject(0);
        this.config = new ToastConfig();
        this.toastCount$ = this.toastCountStream$.pipe(filter((/**
         * @param {?} count
         * @return {?}
         */
        function (count) { return count > 0; })));
    }
    /**
     * @return {?}
     */
    ToastContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.toastService.activeConfig$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return _this.setConfig(config); }));
        this.toastService.activeToasts$.subscribe((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) { return _this.insertNewToast(toast); }));
        this.activeToasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        function (toasts) { return _this.handleIncomingToast(toasts); }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ToastContainerComponent.prototype.destroy = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var newValue = this.activeToasts$.getValue();
        newValue.splice(index, 1);
        this.activeToasts$.next(newValue);
    };
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    ToastContainerComponent.prototype.insertNewToast = /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        /** @type {?} */
        var newValue = this.activeToasts$.getValue();
        newValue.push(toast);
        this.activeToasts$.next(newValue);
    };
    /**
     * @private
     * @param {?} toasts
     * @return {?}
     */
    ToastContainerComponent.prototype.handleIncomingToast = /**
     * @private
     * @param {?} toasts
     * @return {?}
     */
    function (toasts) {
        var groupingThreshold = this.config.groupingThreshold;
        this.toasts$ = from(toasts).pipe(take(groupingThreshold), toArray());
        this.toastCountStream$.next(toasts.length - groupingThreshold);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    ToastContainerComponent.prototype.setConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.config = config; }), 0);
    };
    ToastContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-toast-container',
                    template: "<div class=\"toast-container toast-container--{{ config.position }}\">\n  <lib-toast *ngFor=\"let toast of toasts$ | async; index as index\"\n             [@fadeInOut]\n             [toast]=\"toast\"\n             [config]=\"config\"\n             [toastCount]=\"(index + 1) === config.groupingThreshold ? (toastCount$ | async) : null\"\n             (destroyEmitter)=\"destroy(index)\">\n  </lib-toast>\n</div>\n",
                    animations: [
                        trigger('fadeInOut', [
                            state('void', style({ opacity: 0 })),
                            transition('void <=> *', animate(250)),
                        ]),
                    ],
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff}.toast-container{position:absolute;pointer-events:none}.toast-container--top-left{top:0;left:0}.toast-container--top-right{top:0;right:0}.toast-container--bottom-left{bottom:0;left:0}.toast-container--bottom-right{bottom:0;right:0}@media (max-width:600px){.toast-container--bottom-left,.toast-container--bottom-right,.toast-container--top-left,.toast-container--top-right{left:0;width:100vw;display:flex;align-items:center;flex-direction:column}.toast-container--top-left,.toast-container--top-right{top:0}.toast-container--bottom-left,.toast-container--bottom-right{bottom:0}}"]
                }] }
    ];
    /** @nocollapse */
    ToastContainerComponent.ctorParameters = function () { return [
        { type: ToastItService }
    ]; };
    return ToastContainerComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.activeToasts$;
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.toastCountStream$;
    /** @type {?} */
    ToastContainerComponent.prototype.config;
    /** @type {?} */
    ToastContainerComponent.prototype.toasts$;
    /** @type {?} */
    ToastContainerComponent.prototype.toastCount$;
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.toastService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FACTOR_SECONDS_TO_MS = 1000;
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        var _this = this;
        this.style = {};
        this.destroyEmitter = new EventEmitter();
        this.destroy = (/**
         * @return {?}
         */
        function () { return _this.destroyEmitter.next(); });
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.startTimer();
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.getIconByType = /**
     * @return {?}
     */
    function () {
        switch (this.toast.type) {
            case 'toast--success':
                return faCheckCircle;
            case 'toast--info':
                return faInfoCircle;
            case 'toast--warning':
                return faExclamationTriangle;
            case 'toast--error':
                return faExclamationCircle;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ToastComponent.prototype.startTimer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.toast.timeout === 0) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.destroy(); }), this.toast.timeout * FACTOR_SECONDS_TO_MS);
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-toast',
                    template: "<div class=\"toast {{ toast.type }}\"\n     (click)=\"destroy()\"\n     [ngStyle]=\"style\">\n\n  <div class=\"toast__body\">\n    <fa-icon [icon]=\"getIconByType()\"></fa-icon>\n\n    <div class=\"toast_content\">\n      <h5>{{ toast.heading }}</h5>\n      <h6 *ngIf=\"toast.subheading\"> - {{ toast.subheading }}</h6>\n      <p>{{ toast.message }}</p>\n    </div>\n  </div>\n\n  <span class=\"toast__count\" *ngIf=\"toastCount\">{{toastCount}}</span>\n  <lib-progress-bar *ngIf=\"config.progressBarEnabled\" [duration]=\"toast.timeout\"></lib-progress-bar>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff;display:block}.toast{position:relative;pointer-events:all;margin:20px 40px;width:350px;max-width:calc(100vw - 40px);height:70px;border-left:8px solid transparent;border-radius:3px;font-family:Roboto,sans-serif;cursor:pointer;box-shadow:5px 5px 10px var(--toast-col-shadow);z-index:9000;overflow:hidden;display:flex;flex-direction:column}.toast__body{flex:1 1 auto;display:flex;align-items:center;padding-right:15px}.toast lib-progress-bar{flex:0 0 auto}.toast fa-icon{font-size:1.8em;margin:0 10px;color:var(--toast-col-black)}.toast__count{background:var(--toast-col-black);color:var(--toast-col-white);width:25px;height:25px;border-radius:50%;display:flex;align-items:center;justify-content:center;position:absolute;right:-12px;top:-12px}.toast h5,.toast h6,.toast p{margin:0;color:var(--toast-col-black)}.toast h5{font-size:1em;font-weight:700;display:inline}.toast h6{font-size:.8em;font-weight:700;display:inline}.toast p{font-size:.8em}.toast--top-left{top:0;left:0}.toast--top-right{top:0;right:0}.toast--bottom-left{bottom:0;left:0}.toast--bottom-right{bottom:0;right:0}.toast--success{border-color:var(--toast-col-success);background-color:var(--toast-col-success-light)}.toast--warning{border-color:var(--toast-col-warning);background-color:var(--toast-col-warning-light)}.toast--info{border-color:var(--toast-col-info);background-color:var(--toast-col-info-light)}.toast--error{border-color:var(--toast-col-error);background-color:var(--toast-col-error-light)}@media (max-width:600px){.toast{margin:5px;height:60px}}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return []; };
    ToastComponent.propDecorators = {
        toast: [{ type: Input }],
        config: [{ type: Input }],
        toastCount: [{ type: Input }],
        destroyEmitter: [{ type: Output }]
    };
    return ToastComponent;
}());
if (false) {
    /** @type {?} */
    ToastComponent.prototype.style;
    /** @type {?} */
    ToastComponent.prototype.toast;
    /** @type {?} */
    ToastComponent.prototype.config;
    /** @type {?} */
    ToastComponent.prototype.toastCount;
    /** @type {?} */
    ToastComponent.prototype.destroyEmitter;
    /** @type {?} */
    ToastComponent.prototype.destroy;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentInjectorService = /** @class */ (function () {
    function ComponentInjectorService(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    ComponentInjectorService.prototype.injectComponent = /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    function (component, params) {
        if (params === void 0) { params = {}; }
        /** @type {?} */
        var componentRef = this.createComponent(component);
        Object.assign(componentRef.instance, params);
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ComponentInjectorService.prototype.createComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
    };
    ComponentInjectorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComponentInjectorService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ ComponentInjectorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentInjectorService_Factory() { return new ComponentInjectorService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR)); }, token: ComponentInjectorService, providedIn: "root" });
    return ComponentInjectorService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentInjectorService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentInjectorService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    ComponentInjectorService.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FACTOR_SECONDS_TO_MS$1 = 1000;
/** @type {?} */
var REFRESH_RATE = 30;
// ~33hz
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.progress = 0;
    }
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateDuration();
    };
    /**
     * @private
     * @return {?}
     */
    ProgressBarComponent.prototype.calculateDuration = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.duration) {
            return;
        }
        /** @type {?} */
        var amountOfMarblesUntilFinished = this.duration * FACTOR_SECONDS_TO_MS$1 / REFRESH_RATE;
        /** @type {?} */
        var amountOfPercentageOfEachMarble = 100 / amountOfMarblesUntilFinished;
        interval(REFRESH_RATE)
            .pipe(take(amountOfMarblesUntilFinished))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.progress += amountOfPercentageOfEachMarble; }));
    };
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-progress-bar',
                    template: "  <div class=\"progress-bar\" [style.width.%]=\"progress\"></div>\n",
                    styles: [":host{width:100%;height:3px;display:block}.progress-bar{height:100%;background:rgba(0,0,0,.07)}"]
                }] }
    ];
    /** @nocollapse */
    ProgressBarComponent.ctorParameters = function () { return []; };
    ProgressBarComponent.propDecorators = {
        progress: [{ type: Input }],
        duration: [{ type: Input }]
    };
    return ProgressBarComponent;
}());
if (false) {
    /** @type {?} */
    ProgressBarComponent.prototype.progress;
    /** @type {?} */
    ProgressBarComponent.prototype.duration;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastItModule = /** @class */ (function () {
    function ToastItModule(componentInjectorService) {
        componentInjectorService.injectComponent(ToastContainerComponent);
    }
    ToastItModule.decorators = [
        { type: NgModule, args: [{
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
                        CommonModule,
                        BrowserAnimationsModule,
                        FontAwesomeModule
                    ]
                },] }
    ];
    /** @nocollapse */
    ToastItModule.ctorParameters = function () { return [
        { type: ComponentInjectorService }
    ]; };
    return ToastItModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Toast, ToastConfig, ToastItModule, ToastItService, ToastPosition, ToastType, ToastComponent as ɵa, ToastContainerComponent as ɵb, ProgressBarComponent as ɵc, ComponentInjectorService as ɵd };
//# sourceMappingURL=ngx-toast-it.js.map
