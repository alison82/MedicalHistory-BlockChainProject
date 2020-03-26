import { EventEmitter, QueryList, KeyValueDiffers, AfterContentInit, OnDestroy } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import * as ɵngcc0 from '@angular/core';
export declare class OrderableDirective implements AfterContentInit, OnDestroy {
    private document;
    reorder: EventEmitter<any>;
    targetChanged: EventEmitter<any>;
    draggables: QueryList<DraggableDirective>;
    positions: any;
    differ: any;
    lastDraggingIndex: number;
    constructor(differs: KeyValueDiffers, document: any);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateSubscriptions(): void;
    onDragStart(): void;
    onDragging({ element, model, event }: any): void;
    onDragEnd({ element, model, event }: any): void;
    isTarget(model: any, event: any): any;
    private createMapDiffs;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderableDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OrderableDirective, "[orderable]", never, {}, {
    "reorder": "reorder";
    "targetChanged": "targetChanged";
}, ["draggables"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJhYmxlLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJvcmRlcmFibGUuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIEtleVZhbHVlRGlmZmVycywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3JkZXJhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGRvY3VtZW50O1xuICAgIHJlb3JkZXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHRhcmdldENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxEcmFnZ2FibGVEaXJlY3RpdmU+O1xuICAgIHBvc2l0aW9uczogYW55O1xuICAgIGRpZmZlcjogYW55O1xuICAgIGxhc3REcmFnZ2luZ0luZGV4OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBkb2N1bWVudDogYW55KTtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHVwZGF0ZVN1YnNjcmlwdGlvbnMoKTogdm9pZDtcbiAgICBvbkRyYWdTdGFydCgpOiB2b2lkO1xuICAgIG9uRHJhZ2dpbmcoeyBlbGVtZW50LCBtb2RlbCwgZXZlbnQgfTogYW55KTogdm9pZDtcbiAgICBvbkRyYWdFbmQoeyBlbGVtZW50LCBtb2RlbCwgZXZlbnQgfTogYW55KTogdm9pZDtcbiAgICBpc1RhcmdldChtb2RlbDogYW55LCBldmVudDogYW55KTogYW55O1xuICAgIHByaXZhdGUgY3JlYXRlTWFwRGlmZnM7XG59XG4iXX0=