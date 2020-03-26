import { ElementRef, EventEmitter, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ResizeableDirective implements OnDestroy, AfterViewInit {
    private renderer;
    resizeEnabled: boolean;
    minWidth: number;
    maxWidth: number;
    resize: EventEmitter<any>;
    element: HTMLElement;
    subscription: Subscription;
    resizing: boolean;
    private resizeHandle;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseup(): void;
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, initialWidth: number, mouseDownScreenX: number): void;
    private _destroySubscription;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResizeableDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ResizeableDirective, "[resizeable]", never, {
    "resizeEnabled": "resizeEnabled";
    "minWidth": "minWidth";
    "maxWidth": "maxWidth";
}, {
    "resize": "resize";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplYWJsZS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsicmVzaXplYWJsZS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlc2l6ZWFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgcmVuZGVyZXI7XG4gICAgcmVzaXplRW5hYmxlZDogYm9vbGVhbjtcbiAgICBtaW5XaWR0aDogbnVtYmVyO1xuICAgIG1heFdpZHRoOiBudW1iZXI7XG4gICAgcmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICByZXNpemluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIHJlc2l6ZUhhbmRsZTtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG9uTW91c2V1cCgpOiB2b2lkO1xuICAgIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBtb3ZlKGV2ZW50OiBNb3VzZUV2ZW50LCBpbml0aWFsV2lkdGg6IG51bWJlciwgbW91c2VEb3duU2NyZWVuWDogbnVtYmVyKTogdm9pZDtcbiAgICBwcml2YXRlIF9kZXN0cm95U3Vic2NyaXB0aW9uO1xufVxuIl19