import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LongPressDirective implements OnDestroy {
    pressEnabled: boolean;
    pressModel: any;
    duration: number;
    longPressStart: EventEmitter<any>;
    longPressing: EventEmitter<any>;
    longPressEnd: EventEmitter<any>;
    pressing: boolean;
    isLongPressing: boolean;
    timeout: any;
    mouseX: number;
    mouseY: number;
    subscription: Subscription;
    readonly press: boolean;
    readonly isLongPress: boolean;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    loop(event: MouseEvent): void;
    endPress(): void;
    onMouseup(): void;
    ngOnDestroy(): void;
    private _destroySubscription;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LongPressDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LongPressDirective, "[long-press]", never, {
    "pressEnabled": "pressEnabled";
    "duration": "duration";
    "pressModel": "pressModel";
}, {
    "longPressStart": "longPressStart";
    "longPressing": "longPressing";
    "longPressEnd": "longPressEnd";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibG9uZy1wcmVzcy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9uZ1ByZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcmVzc0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJlc3NNb2RlbDogYW55O1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgbG9uZ1ByZXNzU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGxvbmdQcmVzc2luZzogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgbG9uZ1ByZXNzRW5kOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBwcmVzc2luZzogYm9vbGVhbjtcbiAgICBpc0xvbmdQcmVzc2luZzogYm9vbGVhbjtcbiAgICB0aW1lb3V0OiBhbnk7XG4gICAgbW91c2VYOiBudW1iZXI7XG4gICAgbW91c2VZOiBudW1iZXI7XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcmVhZG9ubHkgcHJlc3M6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgaXNMb25nUHJlc3M6IGJvb2xlYW47XG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBsb29wKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBlbmRQcmVzcygpOiB2b2lkO1xuICAgIG9uTW91c2V1cCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfZGVzdHJveVN1YnNjcmlwdGlvbjtcbn1cbiJdfQ==