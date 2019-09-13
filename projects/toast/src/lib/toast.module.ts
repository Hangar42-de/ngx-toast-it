import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastService} from './toast.service';
import {ToastContainerComponent} from './toast-container/toast-container.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastComponent} from './toast/toast.component';
import {ComponentInjectorService} from './general/component-injector.service';
import {ToastGlobalParams} from './toast.model';


@NgModule({
  declarations: [
    ToastComponent,
    ToastContainerComponent
  ],
  entryComponents: [
    ToastContainerComponent
  ],
  providers: [ToastService],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class ToastModule {
  constructor(componentInjectorService: ComponentInjectorService) {
    componentInjectorService.injectComponent(ToastContainerComponent);
  }

  public static forRoot(environment: ToastGlobalParams): ModuleWithProviders {
    console.log(environment);
    return {
      ngModule: ToastModule,
      providers: [
        ToastService,
        {
          provide: 'env',
          useValue: environment
        }
      ]
    };

  }
}



