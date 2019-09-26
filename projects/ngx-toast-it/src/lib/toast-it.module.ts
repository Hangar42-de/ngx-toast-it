import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastItService} from './toast-it.service';
import {ToastContainerComponent} from './toast-container/toast-container.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastComponent} from './toast/toast.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {InjectorService, NgxInjectorModule} from '@hangar42/ngx-injector';


@NgModule({
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
    FontAwesomeModule,
    NgxInjectorModule
  ]
})
export class ToastItModule {
  constructor(injectorService: InjectorService) {
    injectorService.injectComponent(ToastContainerComponent);
  }
}



