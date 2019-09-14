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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaGFuZ2FyNDIvbmd4LXRvYXN0LWl0LyIsInNvdXJjZXMiOlsibGliL3RvYXN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLFNBQVUsZ0JBQWdCO0lBQzFCLFNBQVUsZ0JBQWdCO0lBQzFCLE9BQVEsY0FBYztJQUN0QixNQUFPLGFBQWE7Ozs7O0lBSXBCLFNBQVUsVUFBVTtJQUNwQixVQUFXLFdBQVc7SUFDdEIsWUFBYSxhQUFhO0lBQzFCLGFBQWMsY0FBYzs7O0FBRzlCLE1BQU0sT0FBTyxXQUFXOzs7O0lBS3RCLFlBQVksTUFBTSxHQUFHLEVBQUU7UUFKdkIsYUFBUSxHQUFLLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDcEMsc0JBQWlCLEdBQUssQ0FBQyxDQUFDO1FBQ3hCLHVCQUFrQixHQUFLLElBQUksQ0FBQztRQUcxQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7OztJQVBDLCtCQUFvQzs7SUFDcEMsd0NBQXdCOztJQUN4Qix5Q0FBNEI7O0FBTzlCLE1BQU0sT0FBTyxLQUFLOzs7O0lBUWhCLFlBQVksS0FBSztRQUpqQixlQUFVLEdBQUssRUFBRSxDQUFDO1FBRWxCLFlBQU8sR0FBSyxDQUFDLENBQUM7UUFHWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7OztJQVRDLHFCQUFnQjs7SUFDaEIsd0JBQWdCOztJQUNoQiwyQkFBa0I7O0lBQ2xCLHdCQUFnQjs7SUFDaEIsd0JBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBUb2FzdFR5cGUge1xuICBzdWNjZXNzID0gJ3RvYXN0LS1zdWNjZXNzJyxcbiAgd2FybmluZyA9ICd0b2FzdC0td2FybmluZycsXG4gIGVycm9yID0gJ3RvYXN0LS1lcnJvcicsXG4gIGluZm8gPSAndG9hc3QtLWluZm8nXG59XG5cbmV4cG9ydCBlbnVtIFRvYXN0UG9zaXRpb24ge1xuICB0b3BMZWZ0ID0gJ3RvcC1sZWZ0JyxcbiAgdG9wUmlnaHQgPSAndG9wLXJpZ2h0JyxcbiAgYm90dG9tTGVmdCA9ICdib3R0b20tbGVmdCcsXG4gIGJvdHRvbVJpZ2h0ID0gJ2JvdHRvbS1yaWdodCdcbn1cblxuZXhwb3J0IGNsYXNzIFRvYXN0Q29uZmlnIHtcbiAgcG9zaXRpb24gPyA9IFRvYXN0UG9zaXRpb24udG9wUmlnaHQ7XG4gIGdyb3VwaW5nVGhyZXNob2xkID8gPSA1O1xuICBwcm9ncmVzc0JhckVuYWJsZWQgPyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvYXN0IHtcblxuICB0eXBlOiBUb2FzdFR5cGU7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgc3ViaGVhZGluZyA/ID0gJyc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZW91dCA/ID0gNTtcblxuICBjb25zdHJ1Y3Rvcih0b2FzdCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdG9hc3QpO1xuICB9XG59XG4iXX0=