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
                template: "<div class=\"toast-container toast-container--{{ config.position }}\">\n  <div *ngFor=\"let toast of toasts$ | async; index as index\">\n    <lib-toast\n      [@fadeInOut]\n      *ngIf=\"index < config.groupingThreshold\"\n      [toast]=\"toast\"\n      [config]=\"config\"\n      [toastCount]=\"(index + 1) === config.groupingThreshold ? (toastCount$ | async) : null\"\n      (destroyEmitter)=\"destroy(index)\">\n    </lib-toast>\n  </div>\n</div>\n",
                animations: [
                    trigger('fadeInOut', [
                        state('void', style({ opacity: 0 })),
                        transition('void <=> *', animate(300)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFRLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDL0UsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFhckQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVNsQyxZQUFvQixZQUE0QjtRQUE1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFQeEMsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxFQUFFLENBQUMsQ0FBQztRQUNqRCxzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUVwRCxXQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUUzQixnQkFBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7SUFHN0UsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsS0FBSzs7Y0FDWixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFDOUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQUs7O2NBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUM5QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLE1BQWU7Y0FDbkMsRUFBQyxpQkFBaUIsRUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxNQUFtQjtRQUNuQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLCtjQUErQztnQkFFL0MsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ25CLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7d0JBQ2xDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN2QyxDQUFDO2lCQUNIOzthQUNGOzs7O1lBaEJPLGNBQWM7Ozs7Ozs7SUFtQnBCLGdEQUF5RDs7Ozs7SUFDekQsb0RBQTJEOztJQUUzRCx5Q0FBa0M7O0lBQ2xDLDBDQUFvQzs7SUFDcEMsOENBQTZFOzs7OztJQUVqRSwrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VG9hc3RJdFNlcnZpY2V9IGZyb20gJy4uL3RvYXN0LWl0LnNlcnZpY2UnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtUb2FzdCwgVG9hc3RDb25maWd9IGZyb20gJy4uL3RvYXN0Lm1vZGVsJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7ZmlsdGVyLCB0YWtlLCB0b0FycmF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10b2FzdC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gKicsIGFuaW1hdGUoMzAwKSksXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgYWN0aXZlVG9hc3RzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VG9hc3RbXT4oW10pO1xuICBwcml2YXRlIHRvYXN0Q291bnRTdHJlYW0kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDApO1xuXG4gIHB1YmxpYyBjb25maWcgPSBuZXcgVG9hc3RDb25maWcoKTtcbiAgcHVibGljIHRvYXN0cyQ6IE9ic2VydmFibGU8VG9hc3RbXT47XG4gIHB1YmxpYyB0b2FzdENvdW50JCA9IHRoaXMudG9hc3RDb3VudFN0cmVhbSQucGlwZShmaWx0ZXIoY291bnQgPT4gY291bnQgPiAwKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0SXRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRvYXN0U2VydmljZS5hY3RpdmVDb25maWckLnN1YnNjcmliZShjb25maWcgPT4gdGhpcy5zZXRDb25maWcoY29uZmlnKSk7XG4gICAgdGhpcy50b2FzdFNlcnZpY2UuYWN0aXZlVG9hc3RzJC5zdWJzY3JpYmUodG9hc3QgPT4gdGhpcy5pbnNlcnROZXdUb2FzdCh0b2FzdCkpO1xuICAgIHRoaXMuYWN0aXZlVG9hc3RzJC5zdWJzY3JpYmUodG9hc3RzID0+IHRoaXMuaGFuZGxlSW5jb21pbmdUb2FzdCh0b2FzdHMpKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KGluZGV4KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmFjdGl2ZVRvYXN0cyQuZ2V0VmFsdWUoKTtcbiAgICBuZXdWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuYWN0aXZlVG9hc3RzJC5uZXh0KG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zZXJ0TmV3VG9hc3QodG9hc3QpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuYWN0aXZlVG9hc3RzJC5nZXRWYWx1ZSgpO1xuICAgIG5ld1ZhbHVlLnB1c2godG9hc3QpO1xuICAgIHRoaXMuYWN0aXZlVG9hc3RzJC5uZXh0KG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5jb21pbmdUb2FzdCh0b2FzdHM6IFRvYXN0W10pIHtcbiAgICBjb25zdCB7Z3JvdXBpbmdUaHJlc2hvbGR9ID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy50b2FzdHMkID0gZnJvbSh0b2FzdHMpLnBpcGUodGFrZShncm91cGluZ1RocmVzaG9sZCksIHRvQXJyYXkoKSk7XG4gICAgdGhpcy50b2FzdENvdW50U3RyZWFtJC5uZXh0KHRvYXN0cy5sZW5ndGggLSBncm91cGluZ1RocmVzaG9sZCk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbmZpZyhjb25maWc6IFRvYXN0Q29uZmlnKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNvbmZpZyA9IGNvbmZpZywgMCk7XG4gIH1cblxufVxuIl19