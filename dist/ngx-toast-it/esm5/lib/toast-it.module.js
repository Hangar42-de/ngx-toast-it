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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGhhbmdhcjQyL25neC10b2FzdC1pdC8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC1pdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHN0U7SUFpQkUsdUJBQVksd0JBQWtEO1FBQzVELHdCQUF3QixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2dCQW5CRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixvQkFBb0I7cUJBQ3JCO29CQUNELGVBQWUsRUFBRTt3QkFDZix1QkFBdUI7cUJBQ3hCO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osdUJBQXVCO3dCQUN2QixpQkFBaUI7cUJBQ2xCO2lCQUNGOzs7O2dCQXBCTyx3QkFBd0I7O0lBeUJoQyxvQkFBQztDQUFBLEFBcEJELElBb0JDO1NBSlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1RvYXN0SXRTZXJ2aWNlfSBmcm9tICcuL3RvYXN0LWl0LnNlcnZpY2UnO1xuaW1wb3J0IHtUb2FzdENvbnRhaW5lckNvbXBvbmVudH0gZnJvbSAnLi90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtUb2FzdENvbXBvbmVudH0gZnJvbSAnLi90b2FzdC90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wb25lbnRJbmplY3RvclNlcnZpY2V9IGZyb20gJy4vZ2VuZXJhbC9jb21wb25lbnQtaW5qZWN0b3Iuc2VydmljZSc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvYXN0Q29tcG9uZW50LFxuICAgIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50LFxuICAgIFByb2dyZXNzQmFyQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFRvYXN0Q29udGFpbmVyQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1RvYXN0SXRTZXJ2aWNlXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnRJbmplY3RvclNlcnZpY2U6IENvbXBvbmVudEluamVjdG9yU2VydmljZSkge1xuICAgIGNvbXBvbmVudEluamVjdG9yU2VydmljZS5pbmplY3RDb21wb25lbnQoVG9hc3RDb250YWluZXJDb21wb25lbnQpO1xuICB9XG59XG5cblxuXG4iXX0=