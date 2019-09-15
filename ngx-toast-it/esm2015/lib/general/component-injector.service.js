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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3QtaXQvIiwic291cmNlcyI6WyJsaWIvZ2VuZXJhbC9jb21wb25lbnQtaW5qZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7QUFLOUcsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBRW5DLFlBQW9CLHdCQUFrRCxFQUNsRCxjQUE4QixFQUM5QixRQUFrQjtRQUZsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7OztJQUdNLGVBQWUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxHQUFHLEVBQUU7O2NBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUVwRCxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztjQUVoRCxPQUFPLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBRTNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxTQUFTO1FBQy9CLE9BQU8sSUFBSSxDQUFDLHdCQUF3QjthQUNqQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7YUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSk8sd0JBQXdCO1lBQXdCLGNBQWM7WUFBeEIsUUFBUTs7Ozs7Ozs7SUFPeEMsNERBQTBEOzs7OztJQUMxRCxrREFBc0M7Ozs7O0lBQ3RDLDRDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlLCBJbmplY3RvciwgQXBwbGljYXRpb25SZWYsIEVtYmVkZGVkVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEluamVjdG9yU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuXG4gIHB1YmxpYyBpbmplY3RDb21wb25lbnQoY29tcG9uZW50LCBwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgcGFyYW1zKTtcblxuICAgIHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICB9XG59XG4iXX0=