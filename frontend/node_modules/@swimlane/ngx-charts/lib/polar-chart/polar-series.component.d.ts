import { OnChanges, SimpleChanges, TemplateRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PolarSeriesComponent implements OnChanges {
    name: any;
    data: any;
    xScale: any;
    yScale: any;
    colors: any;
    scaleType: any;
    curve: any;
    activeEntries: any[];
    rangeFillOpacity: number;
    tooltipDisabled: boolean;
    tooltipText: (o: any) => string;
    gradient: boolean;
    tooltipTemplate: TemplateRef<any>;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    path: string;
    circles: any[];
    circleRadius: number;
    outerPath: string;
    areaPath: string;
    gradientId: string;
    gradientUrl: string;
    hasGradient: boolean;
    gradientStops: any[];
    areaGradientStops: any[];
    seriesColor: string;
    active: boolean;
    inactive: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getAngle(d: any): any;
    getRadius(d: any): any;
    getLineGenerator(): any;
    sortData(data: any): any;
    isActive(entry: any): boolean;
    isInactive(entry: any): boolean;
    defaultTooltipText({ label, value }: {
        label: any;
        value: any;
    }): string;
    updateGradients(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolarSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PolarSeriesComponent, "g[ngx-charts-polar-series]", never, {
    "tooltipDisabled": "tooltipDisabled";
    "gradient": "gradient";
    "animations": "animations";
    "tooltipText": "tooltipText";
    "name": "name";
    "data": "data";
    "xScale": "xScale";
    "yScale": "yScale";
    "colors": "colors";
    "scaleType": "scaleType";
    "curve": "curve";
    "activeEntries": "activeEntries";
    "rangeFillOpacity": "rangeFillOpacity";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sYXItc2VyaWVzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwb2xhci1zZXJpZXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQb2xhclNlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgbmFtZTogYW55O1xuICAgIGRhdGE6IGFueTtcbiAgICB4U2NhbGU6IGFueTtcbiAgICB5U2NhbGU6IGFueTtcbiAgICBjb2xvcnM6IGFueTtcbiAgICBzY2FsZVR5cGU6IGFueTtcbiAgICBjdXJ2ZTogYW55O1xuICAgIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICAgIHJhbmdlRmlsbE9wYWNpdHk6IG51bWJlcjtcbiAgICB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgdG9vbHRpcFRleHQ6IChvOiBhbnkpID0+IHN0cmluZztcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgYW5pbWF0aW9uczogYm9vbGVhbjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBwYXRoOiBzdHJpbmc7XG4gICAgY2lyY2xlczogYW55W107XG4gICAgY2lyY2xlUmFkaXVzOiBudW1iZXI7XG4gICAgb3V0ZXJQYXRoOiBzdHJpbmc7XG4gICAgYXJlYVBhdGg6IHN0cmluZztcbiAgICBncmFkaWVudElkOiBzdHJpbmc7XG4gICAgZ3JhZGllbnRVcmw6IHN0cmluZztcbiAgICBoYXNHcmFkaWVudDogYm9vbGVhbjtcbiAgICBncmFkaWVudFN0b3BzOiBhbnlbXTtcbiAgICBhcmVhR3JhZGllbnRTdG9wczogYW55W107XG4gICAgc2VyaWVzQ29sb3I6IHN0cmluZztcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgaW5hY3RpdmU6IGJvb2xlYW47XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0QW5nbGUoZDogYW55KTogYW55O1xuICAgIGdldFJhZGl1cyhkOiBhbnkpOiBhbnk7XG4gICAgZ2V0TGluZUdlbmVyYXRvcigpOiBhbnk7XG4gICAgc29ydERhdGEoZGF0YTogYW55KTogYW55O1xuICAgIGlzQWN0aXZlKGVudHJ5OiBhbnkpOiBib29sZWFuO1xuICAgIGlzSW5hY3RpdmUoZW50cnk6IGFueSk6IGJvb2xlYW47XG4gICAgZGVmYXVsdFRvb2x0aXBUZXh0KHsgbGFiZWwsIHZhbHVlIH06IHtcbiAgICAgICAgbGFiZWw6IGFueTtcbiAgICAgICAgdmFsdWU6IGFueTtcbiAgICB9KTogc3RyaW5nO1xuICAgIHVwZGF0ZUdyYWRpZW50cygpOiB2b2lkO1xufVxuIl19