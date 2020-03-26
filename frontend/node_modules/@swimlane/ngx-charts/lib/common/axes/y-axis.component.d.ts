import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { YAxisTicksComponent } from './y-axis-ticks.component';
import * as ɵngcc0 from '@angular/core';
export declare class YAxisComponent implements OnChanges {
    yScale: any;
    dims: any;
    trimTicks: boolean;
    maxTickLength: number;
    tickFormatting: any;
    ticks: any[];
    showGridLines: boolean;
    showLabel: any;
    labelText: any;
    yAxisTickInterval: any;
    yAxisTickCount: any;
    yOrient: string;
    referenceLines: any;
    showRefLines: any;
    showRefLabels: any;
    yAxisOffset: number;
    dimensionsChanged: EventEmitter<any>;
    yAxisClassName: string;
    tickArguments: any;
    offset: any;
    transform: any;
    labelOffset: number;
    fill: string;
    stroke: string;
    tickStroke: string;
    strokeWidth: number;
    padding: number;
    ticksComponent: YAxisTicksComponent;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    emitTicksWidth({ width }: {
        width: any;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<YAxisComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<YAxisComponent, "g[ngx-charts-y-axis]", never, {
    "showGridLines": "showGridLines";
    "yOrient": "yOrient";
    "yAxisOffset": "yAxisOffset";
    "yScale": "yScale";
    "dims": "dims";
    "trimTicks": "trimTicks";
    "maxTickLength": "maxTickLength";
    "tickFormatting": "tickFormatting";
    "ticks": "ticks";
    "showLabel": "showLabel";
    "labelText": "labelText";
    "yAxisTickInterval": "yAxisTickInterval";
    "yAxisTickCount": "yAxisTickCount";
    "referenceLines": "referenceLines";
    "showRefLines": "showRefLines";
    "showRefLabels": "showRefLabels";
}, {
    "dimensionsChanged": "dimensionsChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ5LWF4aXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFlBeGlzVGlja3NDb21wb25lbnQgfSBmcm9tICcuL3ktYXhpcy10aWNrcy5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgWUF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHlTY2FsZTogYW55O1xuICAgIGRpbXM6IGFueTtcbiAgICB0cmltVGlja3M6IGJvb2xlYW47XG4gICAgbWF4VGlja0xlbmd0aDogbnVtYmVyO1xuICAgIHRpY2tGb3JtYXR0aW5nOiBhbnk7XG4gICAgdGlja3M6IGFueVtdO1xuICAgIHNob3dHcmlkTGluZXM6IGJvb2xlYW47XG4gICAgc2hvd0xhYmVsOiBhbnk7XG4gICAgbGFiZWxUZXh0OiBhbnk7XG4gICAgeUF4aXNUaWNrSW50ZXJ2YWw6IGFueTtcbiAgICB5QXhpc1RpY2tDb3VudDogYW55O1xuICAgIHlPcmllbnQ6IHN0cmluZztcbiAgICByZWZlcmVuY2VMaW5lczogYW55O1xuICAgIHNob3dSZWZMaW5lczogYW55O1xuICAgIHNob3dSZWZMYWJlbHM6IGFueTtcbiAgICB5QXhpc09mZnNldDogbnVtYmVyO1xuICAgIGRpbWVuc2lvbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB5QXhpc0NsYXNzTmFtZTogc3RyaW5nO1xuICAgIHRpY2tBcmd1bWVudHM6IGFueTtcbiAgICBvZmZzZXQ6IGFueTtcbiAgICB0cmFuc2Zvcm06IGFueTtcbiAgICBsYWJlbE9mZnNldDogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBzdHJva2U6IHN0cmluZztcbiAgICB0aWNrU3Ryb2tlOiBzdHJpbmc7XG4gICAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgICBwYWRkaW5nOiBudW1iZXI7XG4gICAgdGlja3NDb21wb25lbnQ6IFlBeGlzVGlja3NDb21wb25lbnQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZW1pdFRpY2tzV2lkdGgoeyB3aWR0aCB9OiB7XG4gICAgICAgIHdpZHRoOiBhbnk7XG4gICAgfSk6IHZvaWQ7XG59XG4iXX0=