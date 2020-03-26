import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PieGridSeriesComponent implements OnChanges {
    colors: any;
    data: any;
    innerRadius: number;
    outerRadius: number;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    element: HTMLElement;
    layout: any;
    arcs: any;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getArcs(): any[];
    onClick(data: any): void;
    trackBy(index: any, item: any): string;
    label(arc: any): string;
    color(arc: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PieGridSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PieGridSeriesComponent, "g[ngx-charts-pie-grid-series]", never, {
    "innerRadius": "innerRadius";
    "outerRadius": "outerRadius";
    "animations": "animations";
    "colors": "colors";
    "data": "data";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWdyaWQtc2VyaWVzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwaWUtZ3JpZC1zZXJpZXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBpZUdyaWRTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIGNvbG9yczogYW55O1xuICAgIGRhdGE6IGFueTtcbiAgICBpbm5lclJhZGl1czogbnVtYmVyO1xuICAgIG91dGVyUmFkaXVzOiBudW1iZXI7XG4gICAgYW5pbWF0aW9uczogYm9vbGVhbjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBsYXlvdXQ6IGFueTtcbiAgICBhcmNzOiBhbnk7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZik7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0QXJjcygpOiBhbnlbXTtcbiAgICBvbkNsaWNrKGRhdGE6IGFueSk6IHZvaWQ7XG4gICAgdHJhY2tCeShpbmRleDogYW55LCBpdGVtOiBhbnkpOiBzdHJpbmc7XG4gICAgbGFiZWwoYXJjOiBhbnkpOiBzdHJpbmc7XG4gICAgY29sb3IoYXJjOiBhbnkpOiBhbnk7XG59XG4iXX0=