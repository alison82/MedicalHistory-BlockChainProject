import { SimpleChanges, EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PieSeriesComponent implements OnChanges {
    colors: any;
    series: any;
    dims: any;
    innerRadius: number;
    outerRadius: number;
    explodeSlices: any;
    showLabels: any;
    gradient: boolean;
    activeEntries: any[];
    labelFormatting: any;
    trimLabels: boolean;
    maxLabelLength: number;
    tooltipText: (o: any) => any;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    dblclick: EventEmitter<any>;
    max: number;
    data: any;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    midAngle(d: any): number;
    outerArc(): any;
    calculateLabelPositions(pieData: any): any;
    labelVisible(myArc: any): boolean;
    getTooltipTitle(a: any): any;
    labelText(myArc: any): string;
    label(myArc: any): string;
    defaultTooltipText(myArc: any): string;
    color(myArc: any): any;
    trackBy(index: any, item: any): string;
    onClick(data: any): void;
    isActive(entry: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PieSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PieSeriesComponent, "g[ngx-charts-pie-series]", never, {
    "series": "series";
    "innerRadius": "innerRadius";
    "outerRadius": "outerRadius";
    "trimLabels": "trimLabels";
    "maxLabelLength": "maxLabelLength";
    "tooltipDisabled": "tooltipDisabled";
    "animations": "animations";
    "tooltipText": "tooltipText";
    "colors": "colors";
    "dims": "dims";
    "explodeSlices": "explodeSlices";
    "showLabels": "showLabels";
    "gradient": "gradient";
    "activeEntries": "activeEntries";
    "labelFormatting": "labelFormatting";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
    "dblclick": "dblclick";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLXNlcmllcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicGllLXNlcmllcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGllU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBjb2xvcnM6IGFueTtcbiAgICBzZXJpZXM6IGFueTtcbiAgICBkaW1zOiBhbnk7XG4gICAgaW5uZXJSYWRpdXM6IG51bWJlcjtcbiAgICBvdXRlclJhZGl1czogbnVtYmVyO1xuICAgIGV4cGxvZGVTbGljZXM6IGFueTtcbiAgICBzaG93TGFiZWxzOiBhbnk7XG4gICAgZ3JhZGllbnQ6IGJvb2xlYW47XG4gICAgYWN0aXZlRW50cmllczogYW55W107XG4gICAgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gICAgdHJpbUxhYmVsczogYm9vbGVhbjtcbiAgICBtYXhMYWJlbExlbmd0aDogbnVtYmVyO1xuICAgIHRvb2x0aXBUZXh0OiAobzogYW55KSA9PiBhbnk7XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRibGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBtYXg6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgbWlkQW5nbGUoZDogYW55KTogbnVtYmVyO1xuICAgIG91dGVyQXJjKCk6IGFueTtcbiAgICBjYWxjdWxhdGVMYWJlbFBvc2l0aW9ucyhwaWVEYXRhOiBhbnkpOiBhbnk7XG4gICAgbGFiZWxWaXNpYmxlKG15QXJjOiBhbnkpOiBib29sZWFuO1xuICAgIGdldFRvb2x0aXBUaXRsZShhOiBhbnkpOiBhbnk7XG4gICAgbGFiZWxUZXh0KG15QXJjOiBhbnkpOiBzdHJpbmc7XG4gICAgbGFiZWwobXlBcmM6IGFueSk6IHN0cmluZztcbiAgICBkZWZhdWx0VG9vbHRpcFRleHQobXlBcmM6IGFueSk6IHN0cmluZztcbiAgICBjb2xvcihteUFyYzogYW55KTogYW55O1xuICAgIHRyYWNrQnkoaW5kZXg6IGFueSwgaXRlbTogYW55KTogc3RyaW5nO1xuICAgIG9uQ2xpY2soZGF0YTogYW55KTogdm9pZDtcbiAgICBpc0FjdGl2ZShlbnRyeTogYW55KTogYm9vbGVhbjtcbn1cbiJdfQ==