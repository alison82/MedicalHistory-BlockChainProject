import { ElementRef, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class DraggableDirective implements OnDestroy, OnChanges {
    dragEventTarget: any;
    dragModel: any;
    dragX: boolean;
    dragY: boolean;
    dragStart: EventEmitter<any>;
    dragging: EventEmitter<any>;
    dragEnd: EventEmitter<any>;
    element: HTMLElement;
    isDragging: boolean;
    subscription: Subscription;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onMouseup(event: MouseEvent): void;
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, mouseDownPos: {
        x: number;
        y: number;
    }): void;
    private _destroySubscription;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DraggableDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DraggableDirective, "[draggable]", never, {
    "dragX": "dragX";
    "dragY": "dragY";
    "dragEventTarget": "dragEventTarget";
    "dragModel": "dragModel";
}, {
    "dragStart": "dragStart";
    "dragging": "dragging";
    "dragEnd": "dragEnd";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJkcmFnZ2FibGUuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIERyYWdnYWJsZSBEaXJlY3RpdmUgZm9yIEFuZ3VsYXIyXG4gKlxuICogSW5zcGlyYXRpb246XG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Bbmd1bGFyQ2xhc3MvYW5ndWxhcjItZXhhbXBsZXMvYmxvYi9tYXN0ZXIvcngtZHJhZ2dhYmxlL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlLnRzXG4gKiAgIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2NjI1MzAvaG93LXRvLWltcGxlbWVudC1kcmFnLWFuZC1kcm9wLWluLWFuZ3VsYXIyXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgZHJhZ0V2ZW50VGFyZ2V0OiBhbnk7XG4gICAgZHJhZ01vZGVsOiBhbnk7XG4gICAgZHJhZ1g6IGJvb2xlYW47XG4gICAgZHJhZ1k6IGJvb2xlYW47XG4gICAgZHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkcmFnZ2luZzogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgaXNEcmFnZ2luZzogYm9vbGVhbjtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG9uTW91c2V1cChldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIG1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQsIG1vdXNlRG93blBvczoge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICB9KTogdm9pZDtcbiAgICBwcml2YXRlIF9kZXN0cm95U3Vic2NyaXB0aW9uO1xufVxuIl19