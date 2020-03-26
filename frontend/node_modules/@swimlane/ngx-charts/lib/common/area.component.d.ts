import { SimpleChanges, EventEmitter, ElementRef, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class AreaComponent implements OnChanges {
    data: any;
    path: any;
    startingPath: any;
    fill: any;
    opacity: number;
    startOpacity: number;
    endOpacity: number;
    activeLabel: any;
    gradient: boolean;
    stops: any[];
    animations: boolean;
    select: EventEmitter<any>;
    element: HTMLElement;
    gradientId: string;
    gradientFill: string;
    areaPath: string;
    initialized: boolean;
    gradientStops: any[];
    hasGradient: boolean;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    loadAnimation(): void;
    updatePathEl(): void;
    getGradient(): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AreaComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AreaComponent, "g[ngx-charts-area]", never, {
    "opacity": "opacity";
    "startOpacity": "startOpacity";
    "endOpacity": "endOpacity";
    "gradient": "gradient";
    "animations": "animations";
    "data": "data";
    "path": "path";
    "startingPath": "startingPath";
    "fill": "fill";
    "activeLabel": "activeLabel";
    "stops": "stops";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYXJlYS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIGRhdGE6IGFueTtcbiAgICBwYXRoOiBhbnk7XG4gICAgc3RhcnRpbmdQYXRoOiBhbnk7XG4gICAgZmlsbDogYW55O1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgICBzdGFydE9wYWNpdHk6IG51bWJlcjtcbiAgICBlbmRPcGFjaXR5OiBudW1iZXI7XG4gICAgYWN0aXZlTGFiZWw6IGFueTtcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICBzdG9wczogYW55W107XG4gICAgYW5pbWF0aW9uczogYm9vbGVhbjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGdyYWRpZW50SWQ6IHN0cmluZztcbiAgICBncmFkaWVudEZpbGw6IHN0cmluZztcbiAgICBhcmVhUGF0aDogc3RyaW5nO1xuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuICAgIGdyYWRpZW50U3RvcHM6IGFueVtdO1xuICAgIGhhc0dyYWRpZW50OiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGxvYWRBbmltYXRpb24oKTogdm9pZDtcbiAgICB1cGRhdGVQYXRoRWwoKTogdm9pZDtcbiAgICBnZXRHcmFkaWVudCgpOiBhbnlbXTtcbn1cbiJdfQ==