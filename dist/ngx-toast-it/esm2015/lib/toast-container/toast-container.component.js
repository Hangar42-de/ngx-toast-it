/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ToastItService } from '../toast-it.service';
import { BehaviorSubject, from } from 'rxjs';
import { ToastConfig } from '../toast.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { filter, take, toArray } from 'rxjs/operators';
export class ToastContainerComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
        this.activeToasts$ = new BehaviorSubject([]);
        this.toastCountStream$ = new BehaviorSubject(0);
        this.config = new ToastConfig();
        this.toastCount$ = this.toastCountStream$.pipe(filter((/**
         * @param {?} count
         * @return {?}
         */
        count => count > 0)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toastService.activeConfig$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => this.setConfig(config)));
        this.toastService.activeToasts$.subscribe((/**
         * @param {?} toast
         * @return {?}
         */
        toast => this.insertNewToast(toast)));
        this.activeToasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        toasts => this.handleIncomingToast(toasts)));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    destroy(index) {
        /** @type {?} */
        const newValue = this.activeToasts$.getValue();
        newValue.splice(index, 1);
        this.activeToasts$.next(newValue);
    }
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    insertNewToast(toast) {
        /** @type {?} */
        const newValue = this.activeToasts$.getValue();
        newValue.push(toast);
        this.activeToasts$.next(newValue);
    }
    /**
     * @private
     * @param {?} toasts
     * @return {?}
     */
    handleIncomingToast(toasts) {
        const { groupingThreshold } = this.config;
        this.toasts$ = from(toasts).pipe(take(groupingThreshold), toArray());
        this.toastCountStream$.next(toasts.length - groupingThreshold);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        setTimeout((/**
         * @return {?}
         */
        () => this.config = config), 0);
    }
}
ToastContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-toast-container',
                template: "<div class=\"toast-container toast-container--{{ config.position }}\">\n  <lib-toast *ngFor=\"let toast of toasts$ | async; index as index\"\n             [@fadeInOut]\n             [toast]=\"toast\"\n             [config]=\"config\"\n             [toastCount]=\"(index + 1) === config.groupingThreshold ? (toastCount$ | async) : null\"\n             (destroyEmitter)=\"destroy(index)\">\n  </lib-toast>\n</div>\n",
                animations: [
                    trigger('fadeInOut', [
                        state('void', style({ opacity: 0 })),
                        transition('void <=> *', animate(250)),
                    ]),
                ],
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap);:host{--toast-col-success:#47a363;--toast-col-success-light:#e7f4e4;--toast-col-info:#00bfe8;--toast-col-info-light:#e1f3f8;--toast-col-warning:#fdb81e;--toast-col-warning-light:#fff1d2;--toast-col-error:#e21d3d;--toast-col-error-light:#f9dedf;--toast-col-black:#333333;--toast-col-shadow:rgba(0,0,0,.1);--toast-col-white:#ffffff}.toast-container{position:absolute;pointer-events:none}.toast-container--top-left{top:0;left:0}.toast-container--top-right{top:0;right:0}.toast-container--bottom-left{bottom:0;left:0}.toast-container--bottom-right{bottom:0;right:0}@media (max-width:600px){.toast-container--bottom-left,.toast-container--bottom-right,.toast-container--top-left,.toast-container--top-right{left:0;width:100vw;display:flex;align-items:center;flex-direction:column}.toast-container--top-left,.toast-container--top-right{top:0}.toast-container--bottom-left,.toast-container--bottom-right{bottom:0}}"]
            }] }
];
/** @nocollapse */
ToastContainerComponent.ctorParameters = () => [
    { type: ToastItService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.activeToasts$;
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.toastCountStream$;
    /** @type {?} */
    ToastContainerComponent.prototype.config;
    /** @type {?} */
    ToastContainerComponent.prototype.toasts$;
    /** @type {?} */
    ToastContainerComponent.prototype.toastCount$;
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.toastService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5nYXI0Mi9uZ3gtdG9hc3QtaXQvIiwic291cmNlcyI6WyJsaWIvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBUSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBYXJELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFTbEMsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBUHhDLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVUsRUFBRSxDQUFDLENBQUM7UUFDakQsc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFFcEQsV0FBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFFM0IsZ0JBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRzdFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLEtBQUs7O2NBQ1osUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQzlDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUFLOztjQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxNQUFlO2NBQ25DLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsTUFBbUI7UUFDbkMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix5YUFBK0M7Z0JBRS9DLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNuQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO3dCQUNsQyxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdkMsQ0FBQztpQkFDSDs7YUFDRjs7OztZQWhCTyxjQUFjOzs7Ozs7O0lBbUJwQixnREFBeUQ7Ozs7O0lBQ3pELG9EQUEyRDs7SUFFM0QseUNBQWtDOztJQUNsQywwQ0FBb0M7O0lBQ3BDLDhDQUE2RTs7Ozs7SUFFakUsK0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RvYXN0SXRTZXJ2aWNlfSBmcm9tICcuLi90b2FzdC1pdC5zZXJ2aWNlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7VG9hc3QsIFRvYXN0Q29uZmlnfSBmcm9tICcuLi90b2FzdC5tb2RlbCc7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge2ZpbHRlciwgdGFrZSwgdG9BcnJheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdG9hc3QtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZUluT3V0JywgW1xuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7b3BhY2l0eTogMH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IConLCBhbmltYXRlKDI1MCkpLFxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGFjdGl2ZVRvYXN0cyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRvYXN0W10+KFtdKTtcbiAgcHJpdmF0ZSB0b2FzdENvdW50U3RyZWFtJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcblxuICBwdWJsaWMgY29uZmlnID0gbmV3IFRvYXN0Q29uZmlnKCk7XG4gIHB1YmxpYyB0b2FzdHMkOiBPYnNlcnZhYmxlPFRvYXN0W10+O1xuICBwdWJsaWMgdG9hc3RDb3VudCQgPSB0aGlzLnRvYXN0Q291bnRTdHJlYW0kLnBpcGUoZmlsdGVyKGNvdW50ID0+IGNvdW50ID4gMCkpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdEl0U2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b2FzdFNlcnZpY2UuYWN0aXZlQ29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+IHRoaXMuc2V0Q29uZmlnKGNvbmZpZykpO1xuICAgIHRoaXMudG9hc3RTZXJ2aWNlLmFjdGl2ZVRvYXN0cyQuc3Vic2NyaWJlKHRvYXN0ID0+IHRoaXMuaW5zZXJ0TmV3VG9hc3QodG9hc3QpKTtcbiAgICB0aGlzLmFjdGl2ZVRvYXN0cyQuc3Vic2NyaWJlKHRvYXN0cyA9PiB0aGlzLmhhbmRsZUluY29taW5nVG9hc3QodG9hc3RzKSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveShpbmRleCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5hY3RpdmVUb2FzdHMkLmdldFZhbHVlKCk7XG4gICAgbmV3VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLmFjdGl2ZVRvYXN0cyQubmV4dChuZXdWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGluc2VydE5ld1RvYXN0KHRvYXN0KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmFjdGl2ZVRvYXN0cyQuZ2V0VmFsdWUoKTtcbiAgICBuZXdWYWx1ZS5wdXNoKHRvYXN0KTtcbiAgICB0aGlzLmFjdGl2ZVRvYXN0cyQubmV4dChuZXdWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUluY29taW5nVG9hc3QodG9hc3RzOiBUb2FzdFtdKSB7XG4gICAgY29uc3Qge2dyb3VwaW5nVGhyZXNob2xkfSA9IHRoaXMuY29uZmlnO1xuICAgIHRoaXMudG9hc3RzJCA9IGZyb20odG9hc3RzKS5waXBlKHRha2UoZ3JvdXBpbmdUaHJlc2hvbGQpLCB0b0FycmF5KCkpO1xuICAgIHRoaXMudG9hc3RDb3VudFN0cmVhbSQubmV4dCh0b2FzdHMubGVuZ3RoIC0gZ3JvdXBpbmdUaHJlc2hvbGQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb25maWcoY29uZmlnOiBUb2FzdENvbmZpZykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb25maWcgPSBjb25maWcsIDApO1xuICB9XG5cbn1cbiJdfQ==