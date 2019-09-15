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
if (false) {
    /** @type {?} */
    ToastConfig.prototype.position;
    /** @type {?} */
    ToastConfig.prototype.groupingThreshold;
    /** @type {?} */
    ToastConfig.prototype.progressBarEnabled;
}
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
class ToastItService {
    constructor() {
        this.activeToasts$ = new Subject();
        this.activeConfig$ = new Subject();
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastItService.ctorParameters = () => [];
/** @nocollapse */ ToastItService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ToastItService_Factory() { return new ToastItService(); }, token: ToastItService, providedIn: "root" });
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
class ToastContainerComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
        this.activeToasts$ = new BehaviorSubject([]);
        this.toastCountStream$ = new BehaviorSubject(0);
        this.config = new ToastConfig();
        this.toastCount$ = this.toastCountStream$.pipe(filter((/**
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
        this.toasts$ = from(toasts).pipe(take(groupingThreshold), toArray());
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
    { type: Component, args: [{
                selector: 'lib-toast-container',
                template: "<div class=\"toast-container toast-container--{{ config.position }}\">\n  <div *ngFor=\"let toast of toasts$ | async; index as index\">\n    <lib-toast\n      [@fadeInOut]\n      *ngIf=\"index < config.groupingThreshold\"\n      [toast]=\"toast\"\n      [config]=\"config\"\n      [toastCount]=\"(index + 1) === config.groupingThreshold ? (toastCount$ | async) : null\"\n      (destroyEmitter)=\"destroy(index)\">\n    </lib-toast>\n  </div>\n</div>\n",
                animations: [
                    trigger('fadeInOut', [
                        state('void', style({ opacity: 0 })),
                        transition('void <=> *', animate(300)),
                    ]),
                ],
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff}.toast-container{position:absolute;pointer-events:none}.toast-container--top-left{top:0;left:0}.toast-container--top-right{top:0;right:0}.toast-container--bottom-left{bottom:0;left:0}.toast-container--bottom-right{bottom:0;right:0}@media (max-width:600px){.toast-container--bottom-left,.toast-container--bottom-right,.toast-container--top-left,.toast-container--top-right{left:0;width:100vw;display:flex;align-items:center;flex-direction:column}.toast-container--top-left,.toast-container--top-right{top:0}.toast-container--bottom-left,.toast-container--bottom-right{bottom:0}}"]
            }] }
];
/** @nocollapse */
ToastContainerComponent.ctorParameters = () => [
    { type: ToastItService }
];
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
const FACTOR_SECONDS_TO_MS = 1000;
class ToastComponent {
    constructor() {
        this.style = {};
        this.destroyEmitter = new EventEmitter();
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
                return faCheckCircle;
            case 'toast--info':
                return faInfoCircle;
            case 'toast--warning':
                return faExclamationTriangle;
            case 'toast--error':
                return faExclamationCircle;
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
    { type: Component, args: [{
                selector: 'lib-toast',
                template: "<div class=\"toast {{ toast.type }}\"\n     (click)=\"destroy()\"\n     [ngStyle]=\"style\">\n\n  <div class=\"toast__mask\">\n    <div class=\"toast__body\">\n      <fa-icon [icon]=\"getIconByType()\"></fa-icon>\n\n      <div class=\"toast_content\">\n        <h5>{{ toast.heading }}</h5>\n        <h6 *ngIf=\"toast.subheading\"> - {{ toast.subheading }}</h6>\n        <p>{{ toast.message }}</p>\n      </div>\n    </div>\n\n    <lib-progress-bar *ngIf=\"config.progressBarEnabled\" [duration]=\"toast.timeout\"></lib-progress-bar>\n  </div>\n\n  <span class=\"toast__count\" *ngIf=\"toastCount\">{{toastCount}}</span>\n\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff;display:block}.toast{position:relative;pointer-events:all;margin:20px 40px;width:350px;max-width:calc(100vw - 40px);height:70px;border-left:8px solid transparent;border-radius:3px;font-family:Roboto,sans-serif;cursor:pointer;box-shadow:5px 5px 10px var(--toast-col-shadow);z-index:9000}.toast__mask{width:100%;height:100%;border-radius:3px;overflow:hidden;display:flex;flex-direction:column}.toast__body{flex:1 1 auto;display:flex;align-items:center;padding-right:15px}.toast lib-progress-bar{flex:0 0 auto}.toast fa-icon{font-size:1.8em;margin:0 10px;color:var(--toast-col-black)}.toast__count{background:var(--toast-col-black);color:var(--toast-col-white);width:25px;height:25px;border-radius:50%;display:flex;align-items:center;justify-content:center;position:absolute;right:-12px;top:-12px}.toast h5,.toast h6,.toast p{margin:0;color:var(--toast-col-black)}.toast h5{font-size:1em;font-weight:700;display:inline}.toast h6{font-size:.8em;font-weight:700;display:inline}.toast p{font-size:.8em}.toast--top-left{top:0;left:0}.toast--top-right{top:0;right:0}.toast--bottom-left{bottom:0;left:0}.toast--bottom-right{bottom:0;right:0}.toast--success{border-color:var(--toast-col-success);background-color:var(--toast-col-success-light)}.toast--warning{border-color:var(--toast-col-warning);background-color:var(--toast-col-warning-light)}.toast--info{border-color:var(--toast-col-info);background-color:var(--toast-col-info-light)}.toast--error{border-color:var(--toast-col-error);background-color:var(--toast-col-error-light)}@media (max-width:600px){.toast{margin:5px;height:60px}}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [];
ToastComponent.propDecorators = {
    toast: [{ type: Input }],
    config: [{ type: Input }],
    toastCount: [{ type: Input }],
    destroyEmitter: [{ type: Output }]
};
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComponentInjectorService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ ComponentInjectorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentInjectorService_Factory() { return new ComponentInjectorService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR)); }, token: ComponentInjectorService, providedIn: "root" });
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
        interval(REFRESH_RATE)
            .pipe(take(amountOfMarblesUntilFinished))
            .subscribe((/**
         * @return {?}
         */
        () => this.progress += amountOfPercentageOfEachMarble));
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-progress-bar',
                template: "  <div class=\"progress-bar\" [style.width.%]=\"progress\"></div>\n",
                styles: [":host{width:100%;height:3px;display:block}.progress-bar{height:100%;background:rgba(0,0,0,.07)}"]
            }] }
];
/** @nocollapse */
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    progress: [{ type: Input }],
    duration: [{ type: Input }]
};
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
class ToastItModule {
    /**
     * @param {?} componentInjectorService
     */
    constructor(componentInjectorService) {
        componentInjectorService.injectComponent(ToastContainerComponent);
    }
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

export { Toast, ToastConfig, ToastItModule, ToastItService, ToastPosition, ToastType, ToastComponent as ɵa, ToastContainerComponent as ɵb, ProgressBarComponent as ɵc, ComponentInjectorService as ɵd };
//# sourceMappingURL=ngx-toast-it.js.map
