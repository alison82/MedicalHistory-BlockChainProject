import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, ViewContainerRef, Type } from '@angular/core';
/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class InjectionService {
    private applicationRef;
    private componentFactoryResolver;
    private injector;
    static globalRootViewContainer: ViewContainerRef;
    /**
     * Sets a default global root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     */
    static setGlobalRootViewContainer(container: ViewContainerRef): void;
    private _container;
    constructor(applicationRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    /**
     * Gets the root view container to inject the component to.
     *
     * @memberOf InjectionService
     */
    getRootViewContainer(): ViewContainerRef | ComponentRef<any>;
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     *
     * @memberOf InjectionService
     */
    setRootViewContainer(container: ViewContainerRef): void;
    /**
     * Gets the html element for a component ref.
     *
     * @param componentRef
     *
     * @memberOf InjectionService
     */
    getComponentRootNode(component: ViewContainerRef | ComponentRef<any>): HTMLElement;
    /**
     * Gets the root component container html element.
     *
     * @memberOf InjectionService
     */
    getRootViewContainerNode(component: ViewContainerRef | ComponentRef<any>): HTMLElement;
    /**
     * Projects the bindings onto the component
     *
     * @param component
     * @param options
     *
     * @memberOf InjectionService
     */
    projectComponentBindings(component: ComponentRef<any>, bindings: any): ComponentRef<any>;
    /**
     * Appends a component to a adjacent location
     *
     * @param componentClass
     * @param [options={}]
     * @param [location]
     *
     * @memberOf InjectionService
     */
    appendComponent<T>(componentClass: Type<T>, bindings?: any, location?: any): ComponentRef<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InjectionService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<InjectionService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiaW5qZWN0aW9uLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBWaWV3Q29udGFpbmVyUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEluamVjdGlvbiBzZXJ2aWNlIGlzIGEgaGVscGVyIHRvIGFwcGVuZCBjb21wb25lbnRzXG4gKiBkeW5hbWljYWxseSB0byBhIGtub3duIGxvY2F0aW9uIGluIHRoZSBET00sIG1vc3RcbiAqIG5vdGVhYmx5IGZvciBkaWFsb2dzL3Rvb2x0aXBzIGFwcGVuZGluZyB0byBib2R5LlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW5qZWN0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBhcHBsaWNhdGlvblJlZjtcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgICBwcml2YXRlIGluamVjdG9yO1xuICAgIHN0YXRpYyBnbG9iYWxSb290Vmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbiAgICAvKipcbiAgICAgKiBTZXRzIGEgZGVmYXVsdCBnbG9iYWwgcm9vdCB2aWV3IGNvbnRhaW5lci4gVGhpcyBpcyB1c2VmdWwgZm9yXG4gICAgICogdGhpbmdzIGxpa2UgbmdVcGdyYWRlIHRoYXQgZG9lc24ndCBoYXZlIGEgQXBwbGljYXRpb25SZWYgcm9vdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250YWluZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0R2xvYmFsUm9vdFZpZXdDb250YWluZXIoY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZDtcbiAgICBwcml2YXRlIF9jb250YWluZXI7XG4gICAgY29uc3RydWN0b3IoYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByb290IHZpZXcgY29udGFpbmVyIHRvIGluamVjdCB0aGUgY29tcG9uZW50IHRvLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEluamVjdGlvblNlcnZpY2VcbiAgICAgKi9cbiAgICBnZXRSb290Vmlld0NvbnRhaW5lcigpOiBWaWV3Q29udGFpbmVyUmVmIHwgQ29tcG9uZW50UmVmPGFueT47XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IHJvb3QgdmlldyBjb250YWluZXIuIFRoaXMgaXMgdXNlZnVsIGZvclxuICAgICAqIHRoaW5ncyBsaWtlIG5nVXBncmFkZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIEFwcGxpY2F0aW9uUmVmIHJvb3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgSW5qZWN0aW9uU2VydmljZVxuICAgICAqL1xuICAgIHNldFJvb3RWaWV3Q29udGFpbmVyKGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaHRtbCBlbGVtZW50IGZvciBhIGNvbXBvbmVudCByZWYuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50UmVmXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgSW5qZWN0aW9uU2VydmljZVxuICAgICAqL1xuICAgIGdldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZiB8IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcm9vdCBjb21wb25lbnQgY29udGFpbmVyIGh0bWwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBJbmplY3Rpb25TZXJ2aWNlXG4gICAgICovXG4gICAgZ2V0Um9vdFZpZXdDb250YWluZXJOb2RlKGNvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZiB8IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogUHJvamVjdHMgdGhlIGJpbmRpbmdzIG9udG8gdGhlIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgSW5qZWN0aW9uU2VydmljZVxuICAgICAqL1xuICAgIHByb2plY3RDb21wb25lbnRCaW5kaW5ncyhjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+LCBiaW5kaW5nczogYW55KTogQ29tcG9uZW50UmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIGNvbXBvbmVudCB0byBhIGFkamFjZW50IGxvY2F0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50Q2xhc3NcbiAgICAgKiBAcGFyYW0gW29wdGlvbnM9e31dXG4gICAgICogQHBhcmFtIFtsb2NhdGlvbl1cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBJbmplY3Rpb25TZXJ2aWNlXG4gICAgICovXG4gICAgYXBwZW5kQ29tcG9uZW50PFQ+KGNvbXBvbmVudENsYXNzOiBUeXBlPFQ+LCBiaW5kaW5ncz86IGFueSwgbG9jYXRpb24/OiBhbnkpOiBDb21wb25lbnRSZWY8YW55Pjtcbn1cbiJdfQ==