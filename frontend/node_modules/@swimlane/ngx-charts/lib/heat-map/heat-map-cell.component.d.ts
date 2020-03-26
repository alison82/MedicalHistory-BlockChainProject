import { EventEmitter, SimpleChanges, ElementRef, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class HeatMapCellComponent implements OnChanges {
    fill: any;
    x: any;
    y: any;
    width: any;
    height: any;
    data: any;
    label: any;
    gradient: boolean;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    element: HTMLElement;
    transform: string;
    activeRange: any[];
    startOpacity: number;
    gradientId: string;
    gradientUrl: string;
    gradientStops: any[];
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    getGradientStops(): {
        offset: number;
        color: any;
        opacity: number;
    }[];
    loadAnimation(): void;
    animateToCurrentForm(): void;
    onClick(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HeatMapCellComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<HeatMapCellComponent, "g[ngx-charts-heat-map-cell]", never, {
    "gradient": "gradient";
    "animations": "animations";
    "fill": "fill";
    "x": "x";
    "y": "y";
    "width": "width";
    "height": "height";
    "data": "data";
    "label": "label";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdC1tYXAtY2VsbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiaGVhdC1tYXAtY2VsbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEhlYXRNYXBDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBmaWxsOiBhbnk7XG4gICAgeDogYW55O1xuICAgIHk6IGFueTtcbiAgICB3aWR0aDogYW55O1xuICAgIGhlaWdodDogYW55O1xuICAgIGRhdGE6IGFueTtcbiAgICBsYWJlbDogYW55O1xuICAgIGdyYWRpZW50OiBib29sZWFuO1xuICAgIGFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgYWN0aXZlUmFuZ2U6IGFueVtdO1xuICAgIHN0YXJ0T3BhY2l0eTogbnVtYmVyO1xuICAgIGdyYWRpZW50SWQ6IHN0cmluZztcbiAgICBncmFkaWVudFVybDogc3RyaW5nO1xuICAgIGdyYWRpZW50U3RvcHM6IGFueVtdO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIGdldEdyYWRpZW50U3RvcHMoKToge1xuICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgY29sb3I6IGFueTtcbiAgICAgICAgb3BhY2l0eTogbnVtYmVyO1xuICAgIH1bXTtcbiAgICBsb2FkQW5pbWF0aW9uKCk6IHZvaWQ7XG4gICAgYW5pbWF0ZVRvQ3VycmVudEZvcm0oKTogdm9pZDtcbiAgICBvbkNsaWNrKCk6IHZvaWQ7XG4gICAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XG4gICAgb25Nb3VzZUxlYXZlKCk6IHZvaWQ7XG59XG4iXX0=