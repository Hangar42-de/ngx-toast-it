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
export { ToastComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGhhbmdhcjQyL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDMUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdEQUFnRCxDQUFDOztJQUd0RSxvQkFBb0IsR0FBRyxJQUFJO0FBRWpDO0lBYUU7UUFBQSxpQkFDQztRQVBNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFJRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFzQjlDLFlBQU87OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUExQixDQUEwQixFQUFDO0lBbkJsRCxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFTSxzQ0FBYTs7O0lBQXBCO1FBQ0UsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxhQUFhLENBQUM7WUFDdkIsS0FBSyxhQUFhO2dCQUNoQixPQUFPLFlBQVksQ0FBQztZQUN0QixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxxQkFBcUIsQ0FBQztZQUMvQixLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sbUJBQW1CLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7OztJQUlPLG1DQUFVOzs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlFLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG9rQkFBcUM7O2lCQUV0Qzs7Ozs7d0JBSUUsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsTUFBTTs7SUErQlQscUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXJDWSxjQUFjOzs7SUFFekIsK0JBQWtCOztJQUNsQiwrQkFBNkI7O0lBQzdCLGdDQUFvQzs7SUFDcEMsb0NBQW1DOztJQUNuQyx3Q0FBcUQ7O0lBc0JyRCxpQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUb2FzdCwgVG9hc3RDb25maWd9IGZyb20gJy4uL3RvYXN0Lm1vZGVsJztcbmltcG9ydCB7ZmFDaGVja0NpcmNsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2tDaXJjbGUnO1xuaW1wb3J0IHtmYUV4Y2xhbWF0aW9uQ2lyY2xlfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFeGNsYW1hdGlvbkNpcmNsZSc7XG5pbXBvcnQge2ZhRXhjbGFtYXRpb25UcmlhbmdsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25UcmlhbmdsZSc7XG5pbXBvcnQge2ZhSW5mb0NpcmNsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSW5mb0NpcmNsZSc7XG5cblxuY29uc3QgRkFDVE9SX1NFQ09ORFNfVE9fTVMgPSAxMDAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgc3R5bGUgPSB7fTtcbiAgQElucHV0KCkgcHVibGljIHRvYXN0OiBUb2FzdDtcbiAgQElucHV0KCkgcHVibGljIGNvbmZpZzogVG9hc3RDb25maWc7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b2FzdENvdW50OiBudW1iZXI7XG4gIEBPdXRwdXQoKSBwdWJsaWMgZGVzdHJveUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJY29uQnlUeXBlKCkge1xuICAgIHN3aXRjaCAodGhpcy50b2FzdC50eXBlKSB7XG4gICAgICBjYXNlICd0b2FzdC0tc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiBmYUNoZWNrQ2lyY2xlO1xuICAgICAgY2FzZSAndG9hc3QtLWluZm8nOlxuICAgICAgICByZXR1cm4gZmFJbmZvQ2lyY2xlO1xuICAgICAgY2FzZSAndG9hc3QtLXdhcm5pbmcnOlxuICAgICAgICByZXR1cm4gZmFFeGNsYW1hdGlvblRyaWFuZ2xlO1xuICAgICAgY2FzZSAndG9hc3QtLWVycm9yJzpcbiAgICAgICAgcmV0dXJuIGZhRXhjbGFtYXRpb25DaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB0aGlzLmRlc3Ryb3lFbWl0dGVyLm5leHQoKTtcblxuICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XG4gICAgaWYgKHRoaXMudG9hc3QudGltZW91dCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZXN0cm95KCksIHRoaXMudG9hc3QudGltZW91dCAqIEZBQ1RPUl9TRUNPTkRTX1RPX01TKTtcbiAgfVxufVxuIl19