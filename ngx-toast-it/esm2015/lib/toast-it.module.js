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
export class ToastItModule {
    /**
     * @param {?} componentInjectorService
     */
    constructor(componentInjectorService) {
        componentInjectorService.injectComponent(ToastContainerComponent);
    }
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
ToastItModule.ctorParameters = () => [
    { type: ComponentInjectorService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvYXN0LWl0LyIsInNvdXJjZXMiOlsibGliL3RvYXN0LWl0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQW1CN0UsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBWSx3QkFBa0Q7UUFDNUQsd0JBQXdCLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7O1lBbkJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCx1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtpQkFDbEI7YUFDRjs7OztZQXBCTyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUb2FzdEl0U2VydmljZX0gZnJvbSAnLi90b2FzdC1pdC5zZXJ2aWNlJztcbmltcG9ydCB7VG9hc3RDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7VG9hc3RDb21wb25lbnR9IGZyb20gJy4vdG9hc3QvdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlfSBmcm9tICcuL2dlbmVyYWwvY29tcG9uZW50LWluamVjdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUb2FzdENvbXBvbmVudCxcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBUb2FzdENvbnRhaW5lckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtUb2FzdEl0U2VydmljZV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEl0TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoY29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlOiBDb21wb25lbnRJbmplY3RvclNlcnZpY2UpIHtcbiAgICBjb21wb25lbnRJbmplY3RvclNlcnZpY2UuaW5qZWN0Q29tcG9uZW50KFRvYXN0Q29udGFpbmVyQ29tcG9uZW50KTtcbiAgfVxufVxuXG5cblxuIl19