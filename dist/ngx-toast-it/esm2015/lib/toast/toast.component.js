/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toast, ToastConfig } from '../toast.model';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
/** @type {?} */
const FACTOR_SECONDS_TO_MS = 1000;
export class ToastComponent {
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
                template: "<div class=\"toast {{ toast.type }}\"\n     (click)=\"destroy()\"\n     [ngStyle]=\"style\">\n\n  <div class=\"toast__body\">\n    <fa-icon [icon]=\"getIconByType()\"></fa-icon>\n\n    <div class=\"toast_content\">\n      <h5>{{ toast.heading }}</h5>\n      <h6 *ngIf=\"toast.subheading\"> - {{ toast.subheading }}</h6>\n      <p>{{ toast.message }}</p>\n    </div>\n  </div>\n\n  <span class=\"toast__count\" *ngIf=\"toastCount\">{{toastCount}}</span>\n  <lib-progress-bar *ngIf=\"config.progressBarEnabled\" [duration]=\"toast.timeout\"></lib-progress-bar>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff;display:block}.toast{position:relative;pointer-events:all;margin:20px 40px;width:350px;max-width:calc(100vw - 40px);height:70px;border-left:8px solid transparent;border-radius:3px;font-family:Roboto,sans-serif;cursor:pointer;box-shadow:5px 5px 10px var(--toast-col-shadow);z-index:9000;overflow:hidden;display:flex;flex-direction:column}.toast__body{flex:1 1 auto;display:flex;align-items:center;padding-right:15px}.toast lib-progress-bar{flex:0 0 auto}.toast fa-icon{font-size:1.8em;margin:0 10px;color:var(--toast-col-black)}.toast__count{background:var(--toast-col-black);color:var(--toast-col-white);width:25px;height:25px;border-radius:50%;display:flex;align-items:center;justify-content:center;position:absolute;right:-12px;top:-12px}.toast h5,.toast h6,.toast p{margin:0;color:var(--toast-col-black)}.toast h5{font-size:1em;font-weight:700;display:inline}.toast h6{font-size:.8em;font-weight:700;display:inline}.toast p{font-size:.8em}.toast--top-left{top:0;left:0}.toast--top-right{top:0;right:0}.toast--bottom-left{bottom:0;left:0}.toast--bottom-right{bottom:0;right:0}.toast--success{border-color:var(--toast-col-success);background-color:var(--toast-col-success-light)}.toast--warning{border-color:var(--toast-col-warning);background-color:var(--toast-col-warning-light)}.toast--info{border-color:var(--toast-col-info);background-color:var(--toast-col-info-light)}.toast--error{border-color:var(--toast-col-error);background-color:var(--toast-col-error-light)}@media (max-width:600px){.toast{margin:5px;height:60px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGhhbmdhcjQyL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDMUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdEQUFnRCxDQUFDOztNQUd0RSxvQkFBb0IsR0FBRyxJQUFJO0FBT2pDLE1BQU0sT0FBTyxjQUFjO0lBUXpCO1FBTk8sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUlELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXNCOUMsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBQztJQW5CbEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVNLGFBQWE7UUFDbEIsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxhQUFhLENBQUM7WUFDdkIsS0FBSyxhQUFhO2dCQUNoQixPQUFPLFlBQVksQ0FBQztZQUN0QixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxxQkFBcUIsQ0FBQztZQUMvQixLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sbUJBQW1CLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7OztJQUlPLFVBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBRUQsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDLENBQUM7SUFDOUUsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb2tCQUFxQzs7YUFFdEM7Ozs7O29CQUlFLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLE1BQU07Ozs7SUFKUCwrQkFBa0I7O0lBQ2xCLCtCQUE2Qjs7SUFDN0IsZ0NBQW9DOztJQUNwQyxvQ0FBbUM7O0lBQ25DLHdDQUFxRDs7SUFzQnJELGlDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RvYXN0LCBUb2FzdENvbmZpZ30gZnJvbSAnLi4vdG9hc3QubW9kZWwnO1xuaW1wb3J0IHtmYUNoZWNrQ2lyY2xlfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDaGVja0NpcmNsZSc7XG5pbXBvcnQge2ZhRXhjbGFtYXRpb25DaXJjbGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uQ2lyY2xlJztcbmltcG9ydCB7ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvblRyaWFuZ2xlJztcbmltcG9ydCB7ZmFJbmZvQ2lyY2xlfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFJbmZvQ2lyY2xlJztcblxuXG5jb25zdCBGQUNUT1JfU0VDT05EU19UT19NUyA9IDEwMDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBzdHlsZSA9IHt9O1xuICBASW5wdXQoKSBwdWJsaWMgdG9hc3Q6IFRvYXN0O1xuICBASW5wdXQoKSBwdWJsaWMgY29uZmlnOiBUb2FzdENvbmZpZztcbiAgQElucHV0KCkgcHVibGljIHRvYXN0Q291bnQ6IG51bWJlcjtcbiAgQE91dHB1dCgpIHB1YmxpYyBkZXN0cm95RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgcHVibGljIGdldEljb25CeVR5cGUoKSB7XG4gICAgc3dpdGNoICh0aGlzLnRvYXN0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RvYXN0LS1zdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIGZhQ2hlY2tDaXJjbGU7XG4gICAgICBjYXNlICd0b2FzdC0taW5mbyc6XG4gICAgICAgIHJldHVybiBmYUluZm9DaXJjbGU7XG4gICAgICBjYXNlICd0b2FzdC0td2FybmluZyc6XG4gICAgICAgIHJldHVybiBmYUV4Y2xhbWF0aW9uVHJpYW5nbGU7XG4gICAgICBjYXNlICd0b2FzdC0tZXJyb3InOlxuICAgICAgICByZXR1cm4gZmFFeGNsYW1hdGlvbkNpcmNsZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSA9ICgpID0+IHRoaXMuZGVzdHJveUVtaXR0ZXIubmV4dCgpO1xuXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcbiAgICBpZiAodGhpcy50b2FzdC50aW1lb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRlc3Ryb3koKSwgdGhpcy50b2FzdC50aW1lb3V0ICogRkFDVE9SX1NFQ09ORFNfVE9fTVMpO1xuICB9XG59XG4iXX0=