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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvYXN0LWl0LyIsInNvdXJjZXMiOlsibGliL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUM5RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUMxRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7O01BR3RFLG9CQUFvQixHQUFHLElBQUk7QUFPakMsTUFBTSxPQUFPLGNBQWM7SUFRekI7UUFOTyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBSUQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBc0I5QyxZQUFPOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFDO0lBbkJsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLGFBQWEsQ0FBQztZQUN2QixLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLHFCQUFxQixDQUFDO1lBQy9CLEtBQUssY0FBYztnQkFDakIsT0FBTyxtQkFBbUIsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7O0lBSU8sVUFBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixva0JBQXFDOzthQUV0Qzs7Ozs7b0JBSUUsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsTUFBTTs7OztJQUpQLCtCQUFrQjs7SUFDbEIsK0JBQTZCOztJQUM3QixnQ0FBb0M7O0lBQ3BDLG9DQUFtQzs7SUFDbkMsd0NBQXFEOztJQXNCckQsaUNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VG9hc3QsIFRvYXN0Q29uZmlnfSBmcm9tICcuLi90b2FzdC5tb2RlbCc7XG5pbXBvcnQge2ZhQ2hlY2tDaXJjbGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUNoZWNrQ2lyY2xlJztcbmltcG9ydCB7ZmFFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRXhjbGFtYXRpb25DaXJjbGUnO1xuaW1wb3J0IHtmYUV4Y2xhbWF0aW9uVHJpYW5nbGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUV4Y2xhbWF0aW9uVHJpYW5nbGUnO1xuaW1wb3J0IHtmYUluZm9DaXJjbGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUluZm9DaXJjbGUnO1xuXG5cbmNvbnN0IEZBQ1RPUl9TRUNPTkRTX1RPX01TID0gMTAwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHN0eWxlID0ge307XG4gIEBJbnB1dCgpIHB1YmxpYyB0b2FzdDogVG9hc3Q7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IFRvYXN0Q29uZmlnO1xuICBASW5wdXQoKSBwdWJsaWMgdG9hc3RDb3VudDogbnVtYmVyO1xuICBAT3V0cHV0KCkgcHVibGljIGRlc3Ryb3lFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SWNvbkJ5VHlwZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudG9hc3QudHlwZSkge1xuICAgICAgY2FzZSAndG9hc3QtLXN1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gZmFDaGVja0NpcmNsZTtcbiAgICAgIGNhc2UgJ3RvYXN0LS1pbmZvJzpcbiAgICAgICAgcmV0dXJuIGZhSW5mb0NpcmNsZTtcbiAgICAgIGNhc2UgJ3RvYXN0LS13YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuIGZhRXhjbGFtYXRpb25UcmlhbmdsZTtcbiAgICAgIGNhc2UgJ3RvYXN0LS1lcnJvcic6XG4gICAgICAgIHJldHVybiBmYUV4Y2xhbWF0aW9uQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4gdGhpcy5kZXN0cm95RW1pdHRlci5uZXh0KCk7XG5cbiAgcHJpdmF0ZSBzdGFydFRpbWVyKCkge1xuICAgIGlmICh0aGlzLnRvYXN0LnRpbWVvdXQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVzdHJveSgpLCB0aGlzLnRvYXN0LnRpbWVvdXQgKiBGQUNUT1JfU0VDT05EU19UT19NUyk7XG4gIH1cbn1cbiJdfQ==