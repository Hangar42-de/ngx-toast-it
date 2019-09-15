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
export { ToastType };
/** @enum {string} */
const ToastPosition = {
    topLeft: 'top-left',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
};
export { ToastPosition };
export class ToastConfig {
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
export class Toast {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3QtaXQvIiwic291cmNlcyI6WyJsaWIvdG9hc3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0UsU0FBVSxnQkFBZ0I7SUFDMUIsU0FBVSxnQkFBZ0I7SUFDMUIsT0FBUSxjQUFjO0lBQ3RCLE1BQU8sYUFBYTs7Ozs7SUFJcEIsU0FBVSxVQUFVO0lBQ3BCLFVBQVcsV0FBVztJQUN0QixZQUFhLGFBQWE7SUFDMUIsYUFBYyxjQUFjOzs7QUFHOUIsTUFBTSxPQUFPLFdBQVc7Ozs7SUFLdEIsWUFBWSxNQUFNLEdBQUcsRUFBRTtRQUp2QixhQUFRLEdBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxzQkFBaUIsR0FBSyxDQUFDLENBQUM7UUFDeEIsdUJBQWtCLEdBQUssSUFBSSxDQUFDO1FBRzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRjs7O0lBUEMsK0JBQW9DOztJQUNwQyx3Q0FBd0I7O0lBQ3hCLHlDQUE0Qjs7QUFPOUIsTUFBTSxPQUFPLEtBQUs7Ozs7SUFRaEIsWUFBWSxLQUFLO1FBSmpCLGVBQVUsR0FBSyxFQUFFLENBQUM7UUFFbEIsWUFBTyxHQUFLLENBQUMsQ0FBQztRQUdaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjs7O0lBVEMscUJBQWdCOztJQUNoQix3QkFBZ0I7O0lBQ2hCLDJCQUFrQjs7SUFDbEIsd0JBQWdCOztJQUNoQix3QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFRvYXN0VHlwZSB7XG4gIHN1Y2Nlc3MgPSAndG9hc3QtLXN1Y2Nlc3MnLFxuICB3YXJuaW5nID0gJ3RvYXN0LS13YXJuaW5nJyxcbiAgZXJyb3IgPSAndG9hc3QtLWVycm9yJyxcbiAgaW5mbyA9ICd0b2FzdC0taW5mbydcbn1cblxuZXhwb3J0IGVudW0gVG9hc3RQb3NpdGlvbiB7XG4gIHRvcExlZnQgPSAndG9wLWxlZnQnLFxuICB0b3BSaWdodCA9ICd0b3AtcmlnaHQnLFxuICBib3R0b21MZWZ0ID0gJ2JvdHRvbS1sZWZ0JyxcbiAgYm90dG9tUmlnaHQgPSAnYm90dG9tLXJpZ2h0J1xufVxuXG5leHBvcnQgY2xhc3MgVG9hc3RDb25maWcge1xuICBwb3NpdGlvbiA/ID0gVG9hc3RQb3NpdGlvbi50b3BSaWdodDtcbiAgZ3JvdXBpbmdUaHJlc2hvbGQgPyA9IDU7XG4gIHByb2dyZXNzQmFyRW5hYmxlZCA/ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9hc3Qge1xuXG4gIHR5cGU6IFRvYXN0VHlwZTtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBzdWJoZWFkaW5nID8gPSAnJztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lb3V0ID8gPSA1O1xuXG4gIGNvbnN0cnVjdG9yKHRvYXN0KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0b2FzdCk7XG4gIH1cbn1cbiJdfQ==