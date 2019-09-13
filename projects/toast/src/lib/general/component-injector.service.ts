import {ComponentFactoryResolver, Injectable, Injector, ApplicationRef, EmbeddedViewRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentInjectorService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {
  }


  public injectComponent(component, params = {}) {
    const componentRef = this.createComponent(component);

    Object.assign(componentRef.instance, params);

    this.applicationRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }

  private createComponent(component) {
    return this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
  }
}
