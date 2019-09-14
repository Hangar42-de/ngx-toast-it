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
export { ToastType };
/** @enum {string} */
var ToastPosition = {
    topLeft: 'top-left',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
};
export { ToastPosition };
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
export { ToastConfig };
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
export { Toast };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaGFuZ2FyNDIvbmd4LXRvYXN0LWl0LyIsInNvdXJjZXMiOlsibGliL3RvYXN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLFNBQVUsZ0JBQWdCO0lBQzFCLFNBQVUsZ0JBQWdCO0lBQzFCLE9BQVEsY0FBYztJQUN0QixNQUFPLGFBQWE7Ozs7O0lBSXBCLFNBQVUsVUFBVTtJQUNwQixVQUFXLFdBQVc7SUFDdEIsWUFBYSxhQUFhO0lBQzFCLGFBQWMsY0FBYzs7O0FBRzlCO0lBS0UscUJBQVksTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUp2QixhQUFRLEdBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxzQkFBaUIsR0FBSyxDQUFDLENBQUM7UUFDeEIsdUJBQWtCLEdBQUssSUFBSSxDQUFDO1FBRzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMsK0JBQW9DOztJQUNwQyx3Q0FBd0I7O0lBQ3hCLHlDQUE0Qjs7QUFPOUI7SUFRRSxlQUFZLEtBQUs7UUFKakIsZUFBVSxHQUFLLEVBQUUsQ0FBQztRQUVsQixZQUFPLEdBQUssQ0FBQyxDQUFDO1FBR1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQzs7OztJQVRDLHFCQUFnQjs7SUFDaEIsd0JBQWdCOztJQUNoQiwyQkFBa0I7O0lBQ2xCLHdCQUFnQjs7SUFDaEIsd0JBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBUb2FzdFR5cGUge1xuICBzdWNjZXNzID0gJ3RvYXN0LS1zdWNjZXNzJyxcbiAgd2FybmluZyA9ICd0b2FzdC0td2FybmluZycsXG4gIGVycm9yID0gJ3RvYXN0LS1lcnJvcicsXG4gIGluZm8gPSAndG9hc3QtLWluZm8nXG59XG5cbmV4cG9ydCBlbnVtIFRvYXN0UG9zaXRpb24ge1xuICB0b3BMZWZ0ID0gJ3RvcC1sZWZ0JyxcbiAgdG9wUmlnaHQgPSAndG9wLXJpZ2h0JyxcbiAgYm90dG9tTGVmdCA9ICdib3R0b20tbGVmdCcsXG4gIGJvdHRvbVJpZ2h0ID0gJ2JvdHRvbS1yaWdodCdcbn1cblxuZXhwb3J0IGNsYXNzIFRvYXN0Q29uZmlnIHtcbiAgcG9zaXRpb24gPyA9IFRvYXN0UG9zaXRpb24udG9wUmlnaHQ7XG4gIGdyb3VwaW5nVGhyZXNob2xkID8gPSA1O1xuICBwcm9ncmVzc0JhckVuYWJsZWQgPyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvYXN0IHtcblxuICB0eXBlOiBUb2FzdFR5cGU7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgc3ViaGVhZGluZyA/ID0gJyc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZW91dCA/ID0gNTtcblxuICBjb25zdHJ1Y3Rvcih0b2FzdCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdG9hc3QpO1xuICB9XG59XG4iXX0=