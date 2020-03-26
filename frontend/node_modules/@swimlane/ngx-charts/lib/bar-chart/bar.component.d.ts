import { EventEmitter, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BarComponent implements OnChanges {
    fill: any;
    data: any;
    width: number;
    height: number;
    x: number;
    y: number;
    orientation: any;
    roundEdges: boolean;
    gradient: boolean;
    offset: number;
    isActive: boolean;
    stops: any[];
    animations: boolean;
    ariaLabel: string;
    noBarWhenZero: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    element: any;
    path: any;
    gradientId: any;
    gradientFill: any;
    startOpacity: any;
    gradientStops: any[];
    hasGradient: boolean;
    hideBar: boolean;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    loadAnimation(): void;
    updatePathEl(): void;
    getGradient(): any[];
    getStartingPath(): any;
    getPath(): any;
    getRadius(): number;
    getStartOpacity(): number;
    readonly edges: boolean[];
    onMouseEnter(): void;
    onMouseLeave(): void;
    private checkToHideBar;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BarComponent, "g[ngx-charts-bar]", never, {
    "roundEdges": "roundEdges";
    "gradient": "gradient";
    "offset": "offset";
    "isActive": "isActive";
    "animations": "animations";
    "noBarWhenZero": "noBarWhenZero";
    "fill": "fill";
    "data": "data";
    "width": "width";
    "height": "height";
    "x": "x";
    "y": "y";
    "orientation": "orientation";
    "stops": "stops";
    "ariaLabel": "ariaLabel";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIGZpbGw6IGFueTtcbiAgICBkYXRhOiBhbnk7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIG9yaWVudGF0aW9uOiBhbnk7XG4gICAgcm91bmRFZGdlczogYm9vbGVhbjtcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBzdG9wczogYW55W107XG4gICAgYW5pbWF0aW9uczogYm9vbGVhbjtcbiAgICBhcmlhTGFiZWw6IHN0cmluZztcbiAgICBub0JhcldoZW5aZXJvOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGVsZW1lbnQ6IGFueTtcbiAgICBwYXRoOiBhbnk7XG4gICAgZ3JhZGllbnRJZDogYW55O1xuICAgIGdyYWRpZW50RmlsbDogYW55O1xuICAgIHN0YXJ0T3BhY2l0eTogYW55O1xuICAgIGdyYWRpZW50U3RvcHM6IGFueVtdO1xuICAgIGhhc0dyYWRpZW50OiBib29sZWFuO1xuICAgIGhpZGVCYXI6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZik7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgbG9hZEFuaW1hdGlvbigpOiB2b2lkO1xuICAgIHVwZGF0ZVBhdGhFbCgpOiB2b2lkO1xuICAgIGdldEdyYWRpZW50KCk6IGFueVtdO1xuICAgIGdldFN0YXJ0aW5nUGF0aCgpOiBhbnk7XG4gICAgZ2V0UGF0aCgpOiBhbnk7XG4gICAgZ2V0UmFkaXVzKCk6IG51bWJlcjtcbiAgICBnZXRTdGFydE9wYWNpdHkoKTogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGVkZ2VzOiBib29sZWFuW107XG4gICAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XG4gICAgb25Nb3VzZUxlYXZlKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBjaGVja1RvSGlkZUJhcjtcbn1cbiJdfQ==