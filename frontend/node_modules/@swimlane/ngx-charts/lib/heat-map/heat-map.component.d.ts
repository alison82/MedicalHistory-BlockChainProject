import { TemplateRef, EventEmitter } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class HeatMapComponent extends BaseChartComponent {
    legend: any;
    legendTitle: string;
    legendPosition: string;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    gradient: boolean;
    innerPadding: number | number[];
    trimXAxisTicks: boolean;
    trimYAxisTicks: boolean;
    rotateXAxisTicks: boolean;
    maxXAxisTickLength: number;
    maxYAxisTickLength: number;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    xAxisTicks: any[];
    yAxisTicks: any[];
    tooltipDisabled: boolean;
    tooltipText: any;
    min: any;
    max: any;
    activeEntries: any[];
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    xDomain: any[];
    yDomain: any[];
    valueDomain: any[];
    xScale: any;
    yScale: any;
    color: any;
    colors: ColorHelper;
    colorScale: any;
    transform: string;
    rects: any[];
    margin: number[];
    xAxisHeight: number;
    yAxisWidth: number;
    legendOptions: any;
    scaleType: string;
    update(): void;
    getXDomain(): any;
    getYDomain(): any[];
    getValueDomain(): any[];
    /**
     * Converts the input to gap paddingInner in fraction
     * Supports the following inputs:
     *    Numbers: 8
     *    Strings: "8", "8px", "8%"
     *    Arrays: [8,2], "8,2", "[8,2]"
     *    Mixed: [8,"2%"], ["8px","2%"], "8,2%", "[8,2%]"
     *
     * @memberOf HeatMapComponent
     */
    getDimension(value: string | number | Array<string | number>, index: number, N: number, L: number): number;
    getXScale(): any;
    getYScale(): any;
    getRects(): any[];
    onClick(data: any): void;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        domain: any[];
        colors: any;
        title: string;
        position: string;
    };
    updateYAxisWidth({ width }: {
        width: any;
    }): void;
    updateXAxisHeight({ height }: {
        height: any;
    }): void;
    onActivate(event: any, group: any, fromLegend?: boolean): void;
    onDeactivate(event: any, group: any, fromLegend?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HeatMapComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<HeatMapComponent, "ngx-charts-heat-map", never, {
    "legendTitle": "legendTitle";
    "legendPosition": "legendPosition";
    "innerPadding": "innerPadding";
    "trimXAxisTicks": "trimXAxisTicks";
    "trimYAxisTicks": "trimYAxisTicks";
    "rotateXAxisTicks": "rotateXAxisTicks";
    "maxXAxisTickLength": "maxXAxisTickLength";
    "maxYAxisTickLength": "maxYAxisTickLength";
    "tooltipDisabled": "tooltipDisabled";
    "activeEntries": "activeEntries";
    "legend": "legend";
    "xAxis": "xAxis";
    "yAxis": "yAxis";
    "showXAxisLabel": "showXAxisLabel";
    "showYAxisLabel": "showYAxisLabel";
    "xAxisLabel": "xAxisLabel";
    "yAxisLabel": "yAxisLabel";
    "gradient": "gradient";
    "xAxisTickFormatting": "xAxisTickFormatting";
    "yAxisTickFormatting": "yAxisTickFormatting";
    "xAxisTicks": "xAxisTicks";
    "yAxisTicks": "yAxisTicks";
    "tooltipText": "tooltipText";
    "min": "min";
    "max": "max";
}, {
    "activate": "activate";
    "deactivate": "deactivate";
}, ["tooltipTemplate"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdC1tYXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImhlYXQtbWFwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdmlldy1kaW1lbnNpb25zLmhlbHBlcic7XG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jb2xvci5oZWxwZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSGVhdE1hcENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gICAgbGVnZW5kOiBhbnk7XG4gICAgbGVnZW5kVGl0bGU6IHN0cmluZztcbiAgICBsZWdlbmRQb3NpdGlvbjogc3RyaW5nO1xuICAgIHhBeGlzOiBhbnk7XG4gICAgeUF4aXM6IGFueTtcbiAgICBzaG93WEF4aXNMYWJlbDogYW55O1xuICAgIHNob3dZQXhpc0xhYmVsOiBhbnk7XG4gICAgeEF4aXNMYWJlbDogYW55O1xuICAgIHlBeGlzTGFiZWw6IGFueTtcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICBpbm5lclBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdO1xuICAgIHRyaW1YQXhpc1RpY2tzOiBib29sZWFuO1xuICAgIHRyaW1ZQXhpc1RpY2tzOiBib29sZWFuO1xuICAgIHJvdGF0ZVhBeGlzVGlja3M6IGJvb2xlYW47XG4gICAgbWF4WEF4aXNUaWNrTGVuZ3RoOiBudW1iZXI7XG4gICAgbWF4WUF4aXNUaWNrTGVuZ3RoOiBudW1iZXI7XG4gICAgeEF4aXNUaWNrRm9ybWF0dGluZzogYW55O1xuICAgIHlBeGlzVGlja0Zvcm1hdHRpbmc6IGFueTtcbiAgICB4QXhpc1RpY2tzOiBhbnlbXTtcbiAgICB5QXhpc1RpY2tzOiBhbnlbXTtcbiAgICB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgdG9vbHRpcFRleHQ6IGFueTtcbiAgICBtaW46IGFueTtcbiAgICBtYXg6IGFueTtcbiAgICBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICAgIHhEb21haW46IGFueVtdO1xuICAgIHlEb21haW46IGFueVtdO1xuICAgIHZhbHVlRG9tYWluOiBhbnlbXTtcbiAgICB4U2NhbGU6IGFueTtcbiAgICB5U2NhbGU6IGFueTtcbiAgICBjb2xvcjogYW55O1xuICAgIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gICAgY29sb3JTY2FsZTogYW55O1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICAgIHJlY3RzOiBhbnlbXTtcbiAgICBtYXJnaW46IG51bWJlcltdO1xuICAgIHhBeGlzSGVpZ2h0OiBudW1iZXI7XG4gICAgeUF4aXNXaWR0aDogbnVtYmVyO1xuICAgIGxlZ2VuZE9wdGlvbnM6IGFueTtcbiAgICBzY2FsZVR5cGU6IHN0cmluZztcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBnZXRYRG9tYWluKCk6IGFueTtcbiAgICBnZXRZRG9tYWluKCk6IGFueVtdO1xuICAgIGdldFZhbHVlRG9tYWluKCk6IGFueVtdO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSBpbnB1dCB0byBnYXAgcGFkZGluZ0lubmVyIGluIGZyYWN0aW9uXG4gICAgICogU3VwcG9ydHMgdGhlIGZvbGxvd2luZyBpbnB1dHM6XG4gICAgICogICAgTnVtYmVyczogOFxuICAgICAqICAgIFN0cmluZ3M6IFwiOFwiLCBcIjhweFwiLCBcIjglXCJcbiAgICAgKiAgICBBcnJheXM6IFs4LDJdLCBcIjgsMlwiLCBcIls4LDJdXCJcbiAgICAgKiAgICBNaXhlZDogWzgsXCIyJVwiXSwgW1wiOHB4XCIsXCIyJVwiXSwgXCI4LDIlXCIsIFwiWzgsMiVdXCJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBIZWF0TWFwQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0RGltZW5zaW9uKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxzdHJpbmcgfCBudW1iZXI+LCBpbmRleDogbnVtYmVyLCBOOiBudW1iZXIsIEw6IG51bWJlcik6IG51bWJlcjtcbiAgICBnZXRYU2NhbGUoKTogYW55O1xuICAgIGdldFlTY2FsZSgpOiBhbnk7XG4gICAgZ2V0UmVjdHMoKTogYW55W107XG4gICAgb25DbGljayhkYXRhOiBhbnkpOiB2b2lkO1xuICAgIHNldENvbG9ycygpOiB2b2lkO1xuICAgIGdldExlZ2VuZE9wdGlvbnMoKToge1xuICAgICAgICBzY2FsZVR5cGU6IHN0cmluZztcbiAgICAgICAgZG9tYWluOiBhbnlbXTtcbiAgICAgICAgY29sb3JzOiBhbnk7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgfTtcbiAgICB1cGRhdGVZQXhpc1dpZHRoKHsgd2lkdGggfToge1xuICAgICAgICB3aWR0aDogYW55O1xuICAgIH0pOiB2b2lkO1xuICAgIHVwZGF0ZVhBeGlzSGVpZ2h0KHsgaGVpZ2h0IH06IHtcbiAgICAgICAgaGVpZ2h0OiBhbnk7XG4gICAgfSk6IHZvaWQ7XG4gICAgb25BY3RpdmF0ZShldmVudDogYW55LCBncm91cDogYW55LCBmcm9tTGVnZW5kPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgb25EZWFjdGl2YXRlKGV2ZW50OiBhbnksIGdyb3VwOiBhbnksIGZyb21MZWdlbmQ/OiBib29sZWFuKTogdm9pZDtcbn1cbiJdfQ==