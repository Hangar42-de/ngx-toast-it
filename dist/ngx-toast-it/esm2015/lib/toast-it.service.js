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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5nYXI0Mi9uZ3gtdG9hc3QtaXQvIiwic291cmNlcyI6WyJsaWIvdG9hc3QtaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU1qRCxNQUFNLE9BQU8sY0FBYztJQUt6QjtRQUhPLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQUNyQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFlLENBQUM7SUFHbEQsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsTUFBbUI7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxLQUFZOztjQUN2QixRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEVBQVU7SUFDN0IsQ0FBQzs7OztJQUVNLFdBQVc7SUFDbEIsQ0FBQzs7O1lBeEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUdDLHVDQUE0Qzs7SUFDNUMsdUNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1RvYXN0LCBUb2FzdENvbmZpZ30gZnJvbSAnLi90b2FzdC5tb2RlbCc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RJdFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBhY3RpdmVUb2FzdHMkID0gbmV3IFN1YmplY3Q8VG9hc3Q+KCk7XG4gIHB1YmxpYyBhY3RpdmVDb25maWckID0gbmV3IFN1YmplY3Q8VG9hc3RDb25maWc+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogVG9hc3RDb25maWcpIHtcbiAgICB0aGlzLmFjdGl2ZUNvbmZpZyQubmV4dChuZXcgVG9hc3RDb25maWcoY29uZmlnKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVG9hc3QodG9hc3Q6IFRvYXN0KSB7XG4gICAgY29uc3QgbmV3VG9hc3QgPSBuZXcgVG9hc3QodG9hc3QpO1xuICAgIHRoaXMuYWN0aXZlVG9hc3RzJC5uZXh0KG5ld1RvYXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVUb2FzdChpZDogbnVtYmVyKSB7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRUb2FzdHMoKSB7XG4gIH1cbn1cbiJdfQ==