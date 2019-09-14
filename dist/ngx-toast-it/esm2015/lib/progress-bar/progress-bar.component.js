/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
/** @type {?} */
const FACTOR_SECONDS_TO_MS = 1000;
/** @type {?} */
const REFRESH_RATE = 30;
// ~33hz
export class ProgressBarComponent {
    constructor() {
        this.progress = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calculateDuration();
    }
    /**
     * @private
     * @return {?}
     */
    calculateDuration() {
        if (!this.duration) {
            return;
        }
        /** @type {?} */
        const amountOfMarblesUntilFinished = this.duration * FACTOR_SECONDS_TO_MS / REFRESH_RATE;
        /** @type {?} */
        const amountOfPercentageOfEachMarble = 100 / amountOfMarblesUntilFinished;
        interval(REFRESH_RATE)
            .pipe(take(amountOfMarblesUntilFinished))
            .subscribe((/**
         * @return {?}
         */
        () => this.progress += amountOfPercentageOfEachMarble));
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-progress-bar',
                template: "  <div class=\"progress-bar\" [style.width.%]=\"progress\"></div>\n",
                styles: [":host{width:100%;height:3px;display:block}.progress-bar{height:100%;background:rgba(0,0,0,.07)}"]
            }] }
];
/** @nocollapse */
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    progress: [{ type: Input }],
    duration: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProgressBarComponent.prototype.progress;
    /** @type {?} */
    ProgressBarComponent.prototype.duration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoYW5nYXI0Mi9uZ3gtdG9hc3QtaXQvIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDOUIsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOztNQUU5QixvQkFBb0IsR0FBRyxJQUFJOztNQUMzQixZQUFZLEdBQUcsRUFBRTs7QUFPdkIsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQjtRQUhTLGFBQVEsR0FBVyxDQUFDLENBQUM7SUFJOUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7O2NBRUssNEJBQTRCLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsR0FBRyxZQUFZOztjQUNsRiw4QkFBOEIsR0FBRyxHQUFHLEdBQUcsNEJBQTRCO1FBRXpFLFFBQVEsQ0FBQyxZQUFZLENBQUM7YUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3hDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksOEJBQThCLEVBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLCtFQUE0Qzs7YUFFN0M7Ozs7O3VCQUdFLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUROLHdDQUE4Qjs7SUFDOUIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpbnRlcnZhbH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgRkFDVE9SX1NFQ09ORFNfVE9fTVMgPSAxMDAwO1xuY29uc3QgUkVGUkVTSF9SQVRFID0gMzA7IC8vIH4zM2h6XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHByb2dyZXNzOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYWxjdWxhdGVEdXJhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVEdXJhdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuZHVyYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhbW91bnRPZk1hcmJsZXNVbnRpbEZpbmlzaGVkID0gdGhpcy5kdXJhdGlvbiAqIEZBQ1RPUl9TRUNPTkRTX1RPX01TIC8gUkVGUkVTSF9SQVRFO1xuICAgIGNvbnN0IGFtb3VudE9mUGVyY2VudGFnZU9mRWFjaE1hcmJsZSA9IDEwMCAvIGFtb3VudE9mTWFyYmxlc1VudGlsRmluaXNoZWQ7XG5cbiAgICBpbnRlcnZhbChSRUZSRVNIX1JBVEUpXG4gICAgICAucGlwZSh0YWtlKGFtb3VudE9mTWFyYmxlc1VudGlsRmluaXNoZWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnByb2dyZXNzICs9IGFtb3VudE9mUGVyY2VudGFnZU9mRWFjaE1hcmJsZSk7XG4gIH1cbn1cbiJdfQ==