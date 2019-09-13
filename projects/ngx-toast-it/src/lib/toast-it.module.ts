import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastItService} from './toast-it.service';
import {ToastContainerComponent} from './toast-container/toast-container.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastComponent} from './toast/toast.component';
import {ComponentInjectorService} from './general/component-injector.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ToastComponent,
    ToastContainerComponent
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
})
export class ToastItModule {
  constructor(componentInjectorService: ComponentInjectorService) {
    componentInjectorService.injectComponent(ToastContainerComponent);
  }
}



