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
var ToastContainerComponent = /** @class */ (function () {
    function ToastContainerComponent(toastService) {
        this.toastService = toastService;
        this.activeToasts$ = new BehaviorSubject([]);
        this.toastCountStream$ = new BehaviorSubject(0);
        this.config = new ToastConfig();
        this.toastCount$ = this.toastCountStream$.pipe(filter((/**
         * @param {?} count
         * @return {?}
         */
        function (count) { return count > 0; })));
    }
    /**
     * @return {?}
     */
    ToastContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.toastService.activeConfig$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return _this.setConfig(config); }));
        this.toastService.activeToasts$.subscribe((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) { return _this.insertNewToast(toast); }));
        this.activeToasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        function (toasts) { return _this.handleIncomingToast(toasts); }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ToastContainerComponent.prototype.destroy = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var newValue = this.activeToasts$.getValue();
        newValue.splice(index, 1);
        this.activeToasts$.next(newValue);
    };
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    ToastContainerComponent.prototype.insertNewToast = /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        /** @type {?} */
        var newValue = this.activeToasts$.getValue();
        newValue.push(toast);
        this.activeToasts$.next(newValue);
    };
    /**
     * @private
     * @param {?} toasts
     * @return {?}
     */
    ToastContainerComponent.prototype.handleIncomingToast = /**
     * @private
     * @param {?} toasts
     * @return {?}
     */
    function (toasts) {
        var groupingThreshold = this.config.groupingThreshold;
        this.toasts$ = from(toasts).pipe(take(groupingThreshold), toArray());
        this.toastCountStream$.next(toasts.length - groupingThreshold);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    ToastContainerComponent.prototype.setConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.config = config; }), 0);
    };
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
    ToastContainerComponent.ctorParameters = function () { return [
        { type: ToastItService }
    ]; };
    return ToastContainerComponent;
}());
export { ToastContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5nYXI0Mi9uZ3gtdG9hc3QtaXQvIiwic291cmNlcyI6WyJsaWIvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBUSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXJEO0lBb0JFLGlDQUFvQixZQUE0QjtRQUE1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFQeEMsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxFQUFFLENBQUMsQ0FBQztRQUNqRCxzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUVwRCxXQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUUzQixnQkFBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsRUFBVCxDQUFTLEVBQUMsQ0FBQyxDQUFDO0lBRzdFLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQWhDLENBQWdDLEVBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVNLHlDQUFPOzs7O0lBQWQsVUFBZSxLQUFLOztZQUNaLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUM5QyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFTyxnREFBYzs7Ozs7SUFBdEIsVUFBdUIsS0FBSzs7WUFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRU8scURBQW1COzs7OztJQUEzQixVQUE0QixNQUFlO1FBQ2xDLElBQUEsaURBQWlCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVPLDJDQUFTOzs7OztJQUFqQixVQUFrQixNQUFtQjtRQUFyQyxpQkFFQztRQURDLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHlhQUErQztvQkFFL0MsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ25CLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7NEJBQ2xDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN2QyxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkFoQk8sY0FBYzs7SUF5RHRCLDhCQUFDO0NBQUEsQUFuREQsSUFtREM7U0F4Q1ksdUJBQXVCOzs7Ozs7SUFFbEMsZ0RBQXlEOzs7OztJQUN6RCxvREFBMkQ7O0lBRTNELHlDQUFrQzs7SUFDbEMsMENBQW9DOztJQUNwQyw4Q0FBNkU7Ozs7O0lBRWpFLCtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUb2FzdEl0U2VydmljZX0gZnJvbSAnLi4vdG9hc3QtaXQuc2VydmljZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1RvYXN0LCBUb2FzdENvbmZpZ30gZnJvbSAnLi4vdG9hc3QubW9kZWwnO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtmaWx0ZXIsIHRha2UsIHRvQXJyYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRvYXN0LWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZhZGVJbk91dCcsIFtcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe29wYWNpdHk6IDB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiAqJywgYW5pbWF0ZSgyNTApKSxcbiAgICBdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBhY3RpdmVUb2FzdHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUb2FzdFtdPihbXSk7XG4gIHByaXZhdGUgdG9hc3RDb3VudFN0cmVhbSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XG5cbiAgcHVibGljIGNvbmZpZyA9IG5ldyBUb2FzdENvbmZpZygpO1xuICBwdWJsaWMgdG9hc3RzJDogT2JzZXJ2YWJsZTxUb2FzdFtdPjtcbiAgcHVibGljIHRvYXN0Q291bnQkID0gdGhpcy50b2FzdENvdW50U3RyZWFtJC5waXBlKGZpbHRlcihjb3VudCA9PiBjb3VudCA+IDApKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RJdFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudG9hc3RTZXJ2aWNlLmFjdGl2ZUNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiB0aGlzLnNldENvbmZpZyhjb25maWcpKTtcbiAgICB0aGlzLnRvYXN0U2VydmljZS5hY3RpdmVUb2FzdHMkLnN1YnNjcmliZSh0b2FzdCA9PiB0aGlzLmluc2VydE5ld1RvYXN0KHRvYXN0KSk7XG4gICAgdGhpcy5hY3RpdmVUb2FzdHMkLnN1YnNjcmliZSh0b2FzdHMgPT4gdGhpcy5oYW5kbGVJbmNvbWluZ1RvYXN0KHRvYXN0cykpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koaW5kZXgpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuYWN0aXZlVG9hc3RzJC5nZXRWYWx1ZSgpO1xuICAgIG5ld1ZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5hY3RpdmVUb2FzdHMkLm5leHQobmV3VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnNlcnROZXdUb2FzdCh0b2FzdCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5hY3RpdmVUb2FzdHMkLmdldFZhbHVlKCk7XG4gICAgbmV3VmFsdWUucHVzaCh0b2FzdCk7XG4gICAgdGhpcy5hY3RpdmVUb2FzdHMkLm5leHQobmV3VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbmNvbWluZ1RvYXN0KHRvYXN0czogVG9hc3RbXSkge1xuICAgIGNvbnN0IHtncm91cGluZ1RocmVzaG9sZH0gPSB0aGlzLmNvbmZpZztcbiAgICB0aGlzLnRvYXN0cyQgPSBmcm9tKHRvYXN0cykucGlwZSh0YWtlKGdyb3VwaW5nVGhyZXNob2xkKSwgdG9BcnJheSgpKTtcbiAgICB0aGlzLnRvYXN0Q291bnRTdHJlYW0kLm5leHQodG9hc3RzLmxlbmd0aCAtIGdyb3VwaW5nVGhyZXNob2xkKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29uZmlnKGNvbmZpZzogVG9hc3RDb25maWcpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29uZmlnID0gY29uZmlnLCAwKTtcbiAgfVxuXG59XG4iXX0=