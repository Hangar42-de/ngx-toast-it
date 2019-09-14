/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable, Injector, ApplicationRef } from '@angular/core';
import * as i0 from "@angular/core";
var ComponentInjectorService = /** @class */ (function () {
    function ComponentInjectorService(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    ComponentInjectorService.prototype.injectComponent = /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    function (component, params) {
        if (params === void 0) { params = {}; }
        /** @type {?} */
        var componentRef = this.createComponent(component);
        Object.assign(componentRef.instance, params);
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ComponentInjectorService.prototype.createComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
    };
    ComponentInjectorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComponentInjectorService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ ComponentInjectorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ComponentInjectorService_Factory() { return new ComponentInjectorService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR)); }, token: ComponentInjectorService, providedIn: "root" });
    return ComponentInjectorService;
}());
export { ComponentInjectorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaGFuZ2FyNDIvbmd4LXRvYXN0LWl0LyIsInNvdXJjZXMiOlsibGliL2dlbmVyYWwvY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBRTlHO0lBS0Usa0NBQW9CLHdCQUFrRCxFQUNsRCxjQUE4QixFQUM5QixRQUFrQjtRQUZsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7OztJQUdNLGtEQUFlOzs7OztJQUF0QixVQUF1QixTQUFTLEVBQUUsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVzs7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBRXBELE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRWhELE9BQU8sR0FBRyxtQkFBQSxDQUFDLG1CQUFBLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFM0YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sa0RBQWU7Ozs7O0lBQXZCLFVBQXdCLFNBQVM7UUFDL0IsT0FBTyxJQUFJLENBQUMsd0JBQXdCO2FBQ2pDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzthQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpPLHdCQUF3QjtnQkFBd0IsY0FBYztnQkFBeEIsUUFBUTs7O21DQUF0RDtDQThCQyxBQTVCRCxJQTRCQztTQXpCWSx3QkFBd0I7Ozs7OztJQUV2Qiw0REFBMEQ7Ozs7O0lBQzFELGtEQUFzQzs7Ozs7SUFDdEMsNENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIEluamVjdG9yLCBBcHBsaWNhdGlvblJlZiwgRW1iZWRkZWRWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG5cbiAgcHVibGljIGluamVjdENvbXBvbmVudChjb21wb25lbnQsIHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50UmVmLmluc3RhbmNlLCBwYXJhbXMpO1xuXG4gICAgdGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudClcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gIH1cbn1cbiJdfQ==