import { EventEmitter, NgZone, ElementRef } from '@angular/core';
/**
 * Visibility Observer
 */
import * as ɵngcc0 from '@angular/core';
export declare class VisibilityObserver {
    private element;
    private zone;
    visible: EventEmitter<any>;
    timeout: any;
    isVisible: boolean;
    constructor(element: ElementRef, zone: NgZone);
    destroy(): void;
    onVisibilityChange(): void;
    runCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VisibilityObserver>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<VisibilityObserver, "visibility-observer", never, {}, {
    "visible": "visible";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS1vYnNlcnZlci5kLnRzIiwic291cmNlcyI6WyJ2aXNpYmlsaXR5LW9ic2VydmVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBWaXNpYmlsaXR5IE9ic2VydmVyXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFZpc2liaWxpdHlPYnNlcnZlciB7XG4gICAgcHJpdmF0ZSBlbGVtZW50O1xuICAgIHByaXZhdGUgem9uZTtcbiAgICB2aXNpYmxlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB0aW1lb3V0OiBhbnk7XG4gICAgaXNWaXNpYmxlOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHpvbmU6IE5nWm9uZSk7XG4gICAgZGVzdHJveSgpOiB2b2lkO1xuICAgIG9uVmlzaWJpbGl0eUNoYW5nZSgpOiB2b2lkO1xuICAgIHJ1bkNoZWNrKCk6IHZvaWQ7XG59XG4iXX0=