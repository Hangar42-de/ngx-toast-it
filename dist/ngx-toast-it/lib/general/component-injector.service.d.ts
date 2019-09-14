import { ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
export declare class ComponentInjectorService {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector);
    injectComponent(component: any, params?: {}): void;
    private createComponent;
}
