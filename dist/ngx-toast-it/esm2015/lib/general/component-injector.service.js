/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable, Injector, ApplicationRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ComponentInjectorService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    injectComponent(component, params = {}) {
        /** @type {?} */
        const componentRef = this.createComponent(component);
        Object.assign(componentRef.instance, params);
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    createComponent(component) {
        return this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
    }
}
ComponentInjectorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ComponentInjectorService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ ComponentInjectorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComponentInjectorService_Factory() { return new ComponentInjectorService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR)); }, token: ComponentInjectorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentInjectorService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentInjectorService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    ComponentInjectorService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaGFuZ2FyNDIvbmd4LXRvYXN0LWl0LyIsInNvdXJjZXMiOlsibGliL2dlbmVyYWwvY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBSzlHLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUVuQyxZQUFvQix3QkFBa0QsRUFDbEQsY0FBOEIsRUFDOUIsUUFBa0I7UUFGbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7Ozs7SUFHTSxlQUFlLENBQUMsU0FBUyxFQUFFLE1BQU0sR0FBRyxFQUFFOztjQUNyQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFFcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Y0FFaEQsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUUzRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsU0FBUztRQUMvQixPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDakMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO2FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpPLHdCQUF3QjtZQUF3QixjQUFjO1lBQXhCLFFBQVE7Ozs7Ozs7O0lBT3hDLDREQUEwRDs7Ozs7SUFDMUQsa0RBQXNDOzs7OztJQUN0Qyw0Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEFwcGxpY2F0aW9uUmVmLCBFbWJlZGRlZFZpZXdSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRJbmplY3RvclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cblxuICBwdWJsaWMgaW5qZWN0Q29tcG9uZW50KGNvbXBvbmVudCwgcGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIHBhcmFtcyk7XG5cbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KVxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgfVxufVxuIl19