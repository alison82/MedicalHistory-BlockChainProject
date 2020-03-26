import { EventEmitter, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class VisibilityDirective implements OnInit, OnDestroy {
    private element;
    private zone;
    isVisible: boolean;
    visible: EventEmitter<any>;
    timeout: any;
    constructor(element: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onVisibilityChange(): void;
    runCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VisibilityDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<VisibilityDirective, "[visibilityObserver]", never, {}, {
    "visible": "visible";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsidmlzaWJpbGl0eS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgTmdab25lLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBWaXNpYmlsaXR5IE9ic2VydmVyIERpcmVjdGl2ZVxuICpcbiAqIFVzYWdlOlxuICpcbiAqIFx0XHQ8ZGl2XG4gKiBcdFx0XHR2aXNpYmlsaXR5T2JzZXJ2ZXJcbiAqIFx0XHRcdCh2aXNpYmxlKT1cIm9uVmlzaWJsZSgkZXZlbnQpXCI+XG4gKiBcdFx0PC9kaXY+XG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWaXNpYmlsaXR5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgZWxlbWVudDtcbiAgICBwcml2YXRlIHpvbmU7XG4gICAgaXNWaXNpYmxlOiBib29sZWFuO1xuICAgIHZpc2libGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHRpbWVvdXQ6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCB6b25lOiBOZ1pvbmUpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBvblZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZDtcbiAgICBydW5DaGVjaygpOiB2b2lkO1xufVxuIl19