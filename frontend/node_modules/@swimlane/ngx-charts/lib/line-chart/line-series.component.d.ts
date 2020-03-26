import { OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class LineSeriesComponent implements OnChanges {
    data: any;
    xScale: any;
    yScale: any;
    colors: any;
    scaleType: any;
    curve: any;
    activeEntries: any[];
    rangeFillOpacity: number;
    hasRange: boolean;
    animations: boolean;
    path: string;
    outerPath: string;
    areaPath: string;
    gradientId: string;
    gradientUrl: string;
    hasGradient: boolean;
    gradientStops: any[];
    areaGradientStops: any[];
    stroke: any;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getLineGenerator(): any;
    getRangeGenerator(): any;
    getAreaGenerator(): any;
    sortData(data: any): any;
    updateGradients(): void;
    isActive(entry: any): boolean;
    isInactive(entry: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LineSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LineSeriesComponent, "g[ngx-charts-line-series]", never, {
    "animations": "animations";
    "data": "data";
    "xScale": "xScale";
    "yScale": "yScale";
    "colors": "colors";
    "scaleType": "scaleType";
    "curve": "curve";
    "activeEntries": "activeEntries";
    "rangeFillOpacity": "rangeFillOpacity";
    "hasRange": "hasRange";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1zZXJpZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImxpbmUtc2VyaWVzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExpbmVTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIGRhdGE6IGFueTtcbiAgICB4U2NhbGU6IGFueTtcbiAgICB5U2NhbGU6IGFueTtcbiAgICBjb2xvcnM6IGFueTtcbiAgICBzY2FsZVR5cGU6IGFueTtcbiAgICBjdXJ2ZTogYW55O1xuICAgIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICAgIHJhbmdlRmlsbE9wYWNpdHk6IG51bWJlcjtcbiAgICBoYXNSYW5nZTogYm9vbGVhbjtcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBvdXRlclBhdGg6IHN0cmluZztcbiAgICBhcmVhUGF0aDogc3RyaW5nO1xuICAgIGdyYWRpZW50SWQ6IHN0cmluZztcbiAgICBncmFkaWVudFVybDogc3RyaW5nO1xuICAgIGhhc0dyYWRpZW50OiBib29sZWFuO1xuICAgIGdyYWRpZW50U3RvcHM6IGFueVtdO1xuICAgIGFyZWFHcmFkaWVudFN0b3BzOiBhbnlbXTtcbiAgICBzdHJva2U6IGFueTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBnZXRMaW5lR2VuZXJhdG9yKCk6IGFueTtcbiAgICBnZXRSYW5nZUdlbmVyYXRvcigpOiBhbnk7XG4gICAgZ2V0QXJlYUdlbmVyYXRvcigpOiBhbnk7XG4gICAgc29ydERhdGEoZGF0YTogYW55KTogYW55O1xuICAgIHVwZGF0ZUdyYWRpZW50cygpOiB2b2lkO1xuICAgIGlzQWN0aXZlKGVudHJ5OiBhbnkpOiBib29sZWFuO1xuICAgIGlzSW5hY3RpdmUoZW50cnk6IGFueSk6IGJvb2xlYW47XG59XG4iXX0=