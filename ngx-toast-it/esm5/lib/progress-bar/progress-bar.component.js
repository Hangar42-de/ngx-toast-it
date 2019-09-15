/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
/** @type {?} */
var FACTOR_SECONDS_TO_MS = 1000;
/** @type {?} */
var REFRESH_RATE = 30;
// ~33hz
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.progress = 0;
    }
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateDuration();
    };
    /**
     * @private
     * @return {?}
     */
    ProgressBarComponent.prototype.calculateDuration = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.duration) {
            return;
        }
        /** @type {?} */
        var amountOfMarblesUntilFinished = this.duration * FACTOR_SECONDS_TO_MS / REFRESH_RATE;
        /** @type {?} */
        var amountOfPercentageOfEachMarble = 100 / amountOfMarblesUntilFinished;
        interval(REFRESH_RATE)
            .pipe(take(amountOfMarblesUntilFinished))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.progress += amountOfPercentageOfEachMarble; }));
    };
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-progress-bar',
                    template: "  <div class=\"progress-bar\" [style.width.%]=\"progress\"></div>\n",
                    styles: [":host{width:100%;height:3px;display:block}.progress-bar{height:100%;background:rgba(0,0,0,.07)}"]
                }] }
    ];
    /** @nocollapse */
    ProgressBarComponent.ctorParameters = function () { return []; };
    ProgressBarComponent.propDecorators = {
        progress: [{ type: Input }],
        duration: [{ type: Input }]
    };
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
if (false) {
    /** @type {?} */
    ProgressBarComponent.prototype.progress;
    /** @type {?} */
    ProgressBarComponent.prototype.duration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTlCLG9CQUFvQixHQUFHLElBQUk7O0lBQzNCLFlBQVksR0FBRyxFQUFFOztBQUV2QjtJQVVFO1FBSFMsYUFBUSxHQUFXLENBQUMsQ0FBQztJQUk5QixDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxnREFBaUI7Ozs7SUFBekI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7WUFFSyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixHQUFHLFlBQVk7O1lBQ2xGLDhCQUE4QixHQUFHLEdBQUcsR0FBRyw0QkFBNEI7UUFFekUsUUFBUSxDQUFDLFlBQVksQ0FBQzthQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDeEMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLElBQUksOEJBQThCLEVBQS9DLENBQStDLEVBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLCtFQUE0Qzs7aUJBRTdDOzs7OzsyQkFHRSxLQUFLOzJCQUNMLEtBQUs7O0lBcUJSLDJCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F4Qlksb0JBQW9COzs7SUFFL0Isd0NBQThCOztJQUM5Qix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2ludGVydmFsfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBGQUNUT1JfU0VDT05EU19UT19NUyA9IDEwMDA7XG5jb25zdCBSRUZSRVNIX1JBVEUgPSAzMDsgLy8gfjMzaHpcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZUR1cmF0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUR1cmF0aW9uKCkge1xuICAgIGlmICghdGhpcy5kdXJhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFtb3VudE9mTWFyYmxlc1VudGlsRmluaXNoZWQgPSB0aGlzLmR1cmF0aW9uICogRkFDVE9SX1NFQ09ORFNfVE9fTVMgLyBSRUZSRVNIX1JBVEU7XG4gICAgY29uc3QgYW1vdW50T2ZQZXJjZW50YWdlT2ZFYWNoTWFyYmxlID0gMTAwIC8gYW1vdW50T2ZNYXJibGVzVW50aWxGaW5pc2hlZDtcblxuICAgIGludGVydmFsKFJFRlJFU0hfUkFURSlcbiAgICAgIC5waXBlKHRha2UoYW1vdW50T2ZNYXJibGVzVW50aWxGaW5pc2hlZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucHJvZ3Jlc3MgKz0gYW1vdW50T2ZQZXJjZW50YWdlT2ZFYWNoTWFyYmxlKTtcbiAgfVxufVxuIl19