import { SimpleChanges, EventEmitter, OnChanges } from '@angular/core';
import { XAxisTicksComponent } from './x-axis-ticks.component';
import * as ɵngcc0 from '@angular/core';
export declare class XAxisComponent implements OnChanges {
    xScale: any;
    dims: any;
    trimTicks: boolean;
    rotateTicks: boolean;
    maxTickLength: number;
    tickFormatting: any;
    showGridLines: boolean;
    showLabel: any;
    labelText: any;
    ticks: any[];
    xAxisTickInterval: any;
    xAxisTickCount: any;
    xOrient: string;
    xAxisOffset: number;
    dimensionsChanged: EventEmitter<any>;
    xAxisClassName: string;
    tickArguments: any;
    transform: any;
    labelOffset: number;
    fill: string;
    stroke: string;
    tickStroke: string;
    strokeWidth: string;
    padding: number;
    ticksComponent: XAxisTicksComponent;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    emitTicksHeight({ height }: {
        height: any;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<XAxisComponent, "g[ngx-charts-x-axis]", never, {
    "rotateTicks": "rotateTicks";
    "showGridLines": "showGridLines";
    "xOrient": "xOrient";
    "xAxisOffset": "xAxisOffset";
    "xScale": "xScale";
    "dims": "dims";
    "trimTicks": "trimTicks";
    "maxTickLength": "maxTickLength";
    "tickFormatting": "tickFormatting";
    "showLabel": "showLabel";
    "labelText": "labelText";
    "ticks": "ticks";
    "xAxisTickInterval": "xAxisTickInterval";
    "xAxisTickCount": "xAxisTickCount";
}, {
    "dimensionsChanged": "dimensionsChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ4LWF4aXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYQXhpc1RpY2tzQ29tcG9uZW50IH0gZnJvbSAnLi94LWF4aXMtdGlja3MuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFhBeGlzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICB4U2NhbGU6IGFueTtcbiAgICBkaW1zOiBhbnk7XG4gICAgdHJpbVRpY2tzOiBib29sZWFuO1xuICAgIHJvdGF0ZVRpY2tzOiBib29sZWFuO1xuICAgIG1heFRpY2tMZW5ndGg6IG51bWJlcjtcbiAgICB0aWNrRm9ybWF0dGluZzogYW55O1xuICAgIHNob3dHcmlkTGluZXM6IGJvb2xlYW47XG4gICAgc2hvd0xhYmVsOiBhbnk7XG4gICAgbGFiZWxUZXh0OiBhbnk7XG4gICAgdGlja3M6IGFueVtdO1xuICAgIHhBeGlzVGlja0ludGVydmFsOiBhbnk7XG4gICAgeEF4aXNUaWNrQ291bnQ6IGFueTtcbiAgICB4T3JpZW50OiBzdHJpbmc7XG4gICAgeEF4aXNPZmZzZXQ6IG51bWJlcjtcbiAgICBkaW1lbnNpb25zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgeEF4aXNDbGFzc05hbWU6IHN0cmluZztcbiAgICB0aWNrQXJndW1lbnRzOiBhbnk7XG4gICAgdHJhbnNmb3JtOiBhbnk7XG4gICAgbGFiZWxPZmZzZXQ6IG51bWJlcjtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgc3Ryb2tlOiBzdHJpbmc7XG4gICAgdGlja1N0cm9rZTogc3RyaW5nO1xuICAgIHN0cm9rZVdpZHRoOiBzdHJpbmc7XG4gICAgcGFkZGluZzogbnVtYmVyO1xuICAgIHRpY2tzQ29tcG9uZW50OiBYQXhpc1RpY2tzQ29tcG9uZW50O1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGVtaXRUaWNrc0hlaWdodCh7IGhlaWdodCB9OiB7XG4gICAgICAgIGhlaWdodDogYW55O1xuICAgIH0pOiB2b2lkO1xufVxuIl19