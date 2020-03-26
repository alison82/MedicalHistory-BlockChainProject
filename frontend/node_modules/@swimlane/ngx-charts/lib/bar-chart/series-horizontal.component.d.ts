import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { DataItem } from '../models/chart-data.model';
import * as ɵngcc0 from '@angular/core';
export declare class SeriesHorizontal implements OnChanges {
    bars: any;
    x: any;
    y: any;
    barsForDataLabels: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
        total: number;
        series: string;
    }>;
    dims: any;
    type: string;
    series: any;
    xScale: any;
    yScale: any;
    colors: any;
    tooltipDisabled: boolean;
    gradient: boolean;
    activeEntries: any[];
    seriesName: string;
    tooltipTemplate: TemplateRef<any>;
    roundEdges: boolean;
    animations: boolean;
    showDataLabel: boolean;
    dataLabelFormatting: any;
    noBarWhenZero: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    dataLabelWidthChanged: EventEmitter<any>;
    tooltipPlacement: string;
    tooltipType: string;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    updateDataLabels(): void;
    updateTooltipSettings(): void;
    isActive(entry: any): boolean;
    getLabel(dataItem: any): string;
    trackBy(index: any, bar: any): any;
    trackDataLabelBy(index: any, barLabel: any): string;
    click(data: DataItem): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesHorizontal>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SeriesHorizontal, "g[ngx-charts-series-horizontal]", never, {
    "type": "type";
    "tooltipDisabled": "tooltipDisabled";
    "animations": "animations";
    "showDataLabel": "showDataLabel";
    "noBarWhenZero": "noBarWhenZero";
    "dims": "dims";
    "series": "series";
    "xScale": "xScale";
    "yScale": "yScale";
    "colors": "colors";
    "gradient": "gradient";
    "activeEntries": "activeEntries";
    "seriesName": "seriesName";
    "tooltipTemplate": "tooltipTemplate";
    "roundEdges": "roundEdges";
    "dataLabelFormatting": "dataLabelFormatting";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
    "dataLabelWidthChanged": "dataLabelWidthChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLWhvcml6b250YWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNlcmllcy1ob3Jpem9udGFsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZXJpZXNIb3Jpem9udGFsIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBiYXJzOiBhbnk7XG4gICAgeDogYW55O1xuICAgIHk6IGFueTtcbiAgICBiYXJzRm9yRGF0YUxhYmVsczogQXJyYXk8e1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgICAgIHRvdGFsOiBudW1iZXI7XG4gICAgICAgIHNlcmllczogc3RyaW5nO1xuICAgIH0+O1xuICAgIGRpbXM6IGFueTtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgc2VyaWVzOiBhbnk7XG4gICAgeFNjYWxlOiBhbnk7XG4gICAgeVNjYWxlOiBhbnk7XG4gICAgY29sb3JzOiBhbnk7XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIGdyYWRpZW50OiBib29sZWFuO1xuICAgIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICAgIHNlcmllc05hbWU6IHN0cmluZztcbiAgICB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgcm91bmRFZGdlczogYm9vbGVhbjtcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHNob3dEYXRhTGFiZWw6IGJvb2xlYW47XG4gICAgZGF0YUxhYmVsRm9ybWF0dGluZzogYW55O1xuICAgIG5vQmFyV2hlblplcm86IGJvb2xlYW47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGF0YUxhYmVsV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmc7XG4gICAgdG9vbHRpcFR5cGU6IHN0cmluZztcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICB1cGRhdGVEYXRhTGFiZWxzKCk6IHZvaWQ7XG4gICAgdXBkYXRlVG9vbHRpcFNldHRpbmdzKCk6IHZvaWQ7XG4gICAgaXNBY3RpdmUoZW50cnk6IGFueSk6IGJvb2xlYW47XG4gICAgZ2V0TGFiZWwoZGF0YUl0ZW06IGFueSk6IHN0cmluZztcbiAgICB0cmFja0J5KGluZGV4OiBhbnksIGJhcjogYW55KTogYW55O1xuICAgIHRyYWNrRGF0YUxhYmVsQnkoaW5kZXg6IGFueSwgYmFyTGFiZWw6IGFueSk6IHN0cmluZztcbiAgICBjbGljayhkYXRhOiBEYXRhSXRlbSk6IHZvaWQ7XG59XG4iXX0=