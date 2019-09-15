/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastItService } from './toast-it.service';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast/toast.component';
import { ComponentInjectorService } from './general/component-injector.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
var ToastItModule = /** @class */ (function () {
    function ToastItModule(componentInjectorService) {
        componentInjectorService.injectComponent(ToastContainerComponent);
    }
    ToastItModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ToastComponent,
                        ToastContainerComponent,
                        ProgressBarComponent
                    ],
                    entryComponents: [
                        ToastContainerComponent
                    ],
                    providers: [ToastItService],
                    imports: [
                        CommonModule,
                        BrowserAnimationsModule,
                        FontAwesomeModule
                    ]
                },] }
    ];
    /** @nocollapse */
    ToastItModule.ctorParameters = function () { return [
        { type: ComponentInjectorService }
    ]; };
    return ToastItModule;
}());
export { ToastItModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvYXN0LWl0LyIsInNvdXJjZXMiOlsibGliL3RvYXN0LWl0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUc3RTtJQWlCRSx1QkFBWSx3QkFBa0Q7UUFDNUQsd0JBQXdCLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Z0JBbkJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCx1QkFBdUI7d0JBQ3ZCLG9CQUFvQjtxQkFDckI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix1QkFBdUI7d0JBQ3ZCLGlCQUFpQjtxQkFDbEI7aUJBQ0Y7Ozs7Z0JBcEJPLHdCQUF3Qjs7SUF5QmhDLG9CQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FKWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VG9hc3RJdFNlcnZpY2V9IGZyb20gJy4vdG9hc3QtaXQuc2VydmljZSc7XG5pbXBvcnQge1RvYXN0Q29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL3RvYXN0LWNvbnRhaW5lci90b2FzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1RvYXN0Q29tcG9uZW50fSBmcm9tICcuL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbXBvbmVudEluamVjdG9yU2VydmljZX0gZnJvbSAnLi9nZW5lcmFsL2NvbXBvbmVudC1pbmplY3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVG9hc3RDb21wb25lbnQsXG4gICAgVG9hc3RDb250YWluZXJDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgVG9hc3RDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVG9hc3RJdFNlcnZpY2VdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RJdE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudEluamVjdG9yU2VydmljZTogQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlKSB7XG4gICAgY29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlLmluamVjdENvbXBvbmVudChUb2FzdENvbnRhaW5lckNvbXBvbmVudCk7XG4gIH1cbn1cblxuXG5cbiJdfQ==