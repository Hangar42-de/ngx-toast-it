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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC1pdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBR2pEO0lBUUU7UUFITyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFDckMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBZSxDQUFDO0lBR2xELENBQUM7Ozs7O0lBRU0sa0NBQVM7Ozs7SUFBaEIsVUFBaUIsTUFBbUI7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVNLG9DQUFXOzs7O0lBQWxCLFVBQW1CLEtBQVk7O1lBQ3ZCLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxvQ0FBVzs7OztJQUFsQixVQUFtQixFQUFVO0lBQzdCLENBQUM7Ozs7SUFFTSxvQ0FBVzs7O0lBQWxCO0lBQ0EsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQVBEO0NBOEJDLEFBekJELElBeUJDO1NBdEJZLGNBQWM7OztJQUV6Qix1Q0FBNEM7O0lBQzVDLHVDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtUb2FzdCwgVG9hc3RDb25maWd9IGZyb20gJy4vdG9hc3QubW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SXRTZXJ2aWNlIHtcblxuICBwdWJsaWMgYWN0aXZlVG9hc3RzJCA9IG5ldyBTdWJqZWN0PFRvYXN0PigpO1xuICBwdWJsaWMgYWN0aXZlQ29uZmlnJCA9IG5ldyBTdWJqZWN0PFRvYXN0Q29uZmlnPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IFRvYXN0Q29uZmlnKSB7XG4gICAgdGhpcy5hY3RpdmVDb25maWckLm5leHQobmV3IFRvYXN0Q29uZmlnKGNvbmZpZykpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVRvYXN0KHRvYXN0OiBUb2FzdCkge1xuICAgIGNvbnN0IG5ld1RvYXN0ID0gbmV3IFRvYXN0KHRvYXN0KTtcbiAgICB0aGlzLmFjdGl2ZVRvYXN0cyQubmV4dChuZXdUb2FzdCk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlVG9hc3QoaWQ6IG51bWJlcikge1xuICB9XG5cbiAgcHVibGljIHJlc2V0VG9hc3RzKCkge1xuICB9XG59XG4iXX0=