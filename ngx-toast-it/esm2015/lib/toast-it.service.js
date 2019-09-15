/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast, ToastConfig } from './toast.model';
import * as i0 from "@angular/core";
export class ToastItService {
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
/** @nocollapse */ ToastItService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToastItService_Factory() { return new ToastItService(); }, token: ToastItService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ToastItService.prototype.activeToasts$;
    /** @type {?} */
    ToastItService.prototype.activeConfig$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC1pdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTWpELE1BQU0sT0FBTyxjQUFjO0lBS3pCO1FBSE8sa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO1FBQ3JDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztJQUdsRCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxNQUFtQjtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQVk7O2NBQ3ZCLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsRUFBVTtJQUM3QixDQUFDOzs7O0lBRU0sV0FBVztJQUNsQixDQUFDOzs7WUF4QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7O0lBR0MsdUNBQTRDOztJQUM1Qyx1Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7VG9hc3QsIFRvYXN0Q29uZmlnfSBmcm9tICcuL3RvYXN0Lm1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEl0U2VydmljZSB7XG5cbiAgcHVibGljIGFjdGl2ZVRvYXN0cyQgPSBuZXcgU3ViamVjdDxUb2FzdD4oKTtcbiAgcHVibGljIGFjdGl2ZUNvbmZpZyQgPSBuZXcgU3ViamVjdDxUb2FzdENvbmZpZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBUb2FzdENvbmZpZykge1xuICAgIHRoaXMuYWN0aXZlQ29uZmlnJC5uZXh0KG5ldyBUb2FzdENvbmZpZyhjb25maWcpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUb2FzdCh0b2FzdDogVG9hc3QpIHtcbiAgICBjb25zdCBuZXdUb2FzdCA9IG5ldyBUb2FzdCh0b2FzdCk7XG4gICAgdGhpcy5hY3RpdmVUb2FzdHMkLm5leHQobmV3VG9hc3QpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVRvYXN0KGlkOiBudW1iZXIpIHtcbiAgfVxuXG4gIHB1YmxpYyByZXNldFRvYXN0cygpIHtcbiAgfVxufVxuIl19