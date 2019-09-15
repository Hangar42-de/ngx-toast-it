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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O01BRTlCLG9CQUFvQixHQUFHLElBQUk7O01BQzNCLFlBQVksR0FBRyxFQUFFOztBQU92QixNQUFNLE9BQU8sb0JBQW9CO0lBSy9CO1FBSFMsYUFBUSxHQUFXLENBQUMsQ0FBQztJQUk5QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7Y0FFSyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixHQUFHLFlBQVk7O2NBQ2xGLDhCQUE4QixHQUFHLEdBQUcsR0FBRyw0QkFBNEI7UUFFekUsUUFBUSxDQUFDLFlBQVksQ0FBQzthQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDeEMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSw4QkFBOEIsRUFBQyxDQUFDO0lBQ3RFLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK0VBQTRDOzthQUU3Qzs7Ozs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLOzs7O0lBRE4sd0NBQThCOztJQUM5Qix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2ludGVydmFsfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBGQUNUT1JfU0VDT05EU19UT19NUyA9IDEwMDA7XG5jb25zdCBSRUZSRVNIX1JBVEUgPSAzMDsgLy8gfjMzaHpcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZUR1cmF0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUR1cmF0aW9uKCkge1xuICAgIGlmICghdGhpcy5kdXJhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFtb3VudE9mTWFyYmxlc1VudGlsRmluaXNoZWQgPSB0aGlzLmR1cmF0aW9uICogRkFDVE9SX1NFQ09ORFNfVE9fTVMgLyBSRUZSRVNIX1JBVEU7XG4gICAgY29uc3QgYW1vdW50T2ZQZXJjZW50YWdlT2ZFYWNoTWFyYmxlID0gMTAwIC8gYW1vdW50T2ZNYXJibGVzVW50aWxGaW5pc2hlZDtcblxuICAgIGludGVydmFsKFJFRlJFU0hfUkFURSlcbiAgICAgIC5waXBlKHRha2UoYW1vdW50T2ZNYXJibGVzVW50aWxGaW5pc2hlZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucHJvZ3Jlc3MgKz0gYW1vdW50T2ZQZXJjZW50YWdlT2ZFYWNoTWFyYmxlKTtcbiAgfVxufVxuIl19