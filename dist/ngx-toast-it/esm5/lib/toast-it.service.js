/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast, ToastConfig } from './toast.model';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ ToastItService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToastItService_Factory() { return new ToastItService(); }, token: ToastItService, providedIn: "root" });
    return ToastItService;
}());
export { ToastItService };
if (false) {
    /** @type {?} */
    ToastItService.prototype.activeToasts$;
    /** @type {?} */
    ToastItService.prototype.activeConfig$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5nYXI0Mi9uZ3gtdG9hc3QtaXQvIiwic291cmNlcyI6WyJsaWIvdG9hc3QtaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUdqRDtJQVFFO1FBSE8sa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO1FBQ3JDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztJQUdsRCxDQUFDOzs7OztJQUVNLGtDQUFTOzs7O0lBQWhCLFVBQWlCLE1BQW1CO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTSxvQ0FBVzs7OztJQUFsQixVQUFtQixLQUFZOztZQUN2QixRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sb0NBQVc7Ozs7SUFBbEIsVUFBbUIsRUFBVTtJQUM3QixDQUFDOzs7O0lBRU0sb0NBQVc7OztJQUFsQjtJQUNBLENBQUM7O2dCQXhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5QkFQRDtDQThCQyxBQXpCRCxJQXlCQztTQXRCWSxjQUFjOzs7SUFFekIsdUNBQTRDOztJQUM1Qyx1Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7VG9hc3QsIFRvYXN0Q29uZmlnfSBmcm9tICcuL3RvYXN0Lm1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEl0U2VydmljZSB7XG5cbiAgcHVibGljIGFjdGl2ZVRvYXN0cyQgPSBuZXcgU3ViamVjdDxUb2FzdD4oKTtcbiAgcHVibGljIGFjdGl2ZUNvbmZpZyQgPSBuZXcgU3ViamVjdDxUb2FzdENvbmZpZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBUb2FzdENvbmZpZykge1xuICAgIHRoaXMuYWN0aXZlQ29uZmlnJC5uZXh0KG5ldyBUb2FzdENvbmZpZyhjb25maWcpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUb2FzdCh0b2FzdDogVG9hc3QpIHtcbiAgICBjb25zdCBuZXdUb2FzdCA9IG5ldyBUb2FzdCh0b2FzdCk7XG4gICAgdGhpcy5hY3RpdmVUb2FzdHMkLm5leHQobmV3VG9hc3QpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVRvYXN0KGlkOiBudW1iZXIpIHtcbiAgfVxuXG4gIHB1YmxpYyByZXNldFRvYXN0cygpIHtcbiAgfVxufVxuIl19