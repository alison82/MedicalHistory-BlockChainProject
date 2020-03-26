import { OnChanges, SimpleChanges, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BarLabelComponent implements OnChanges {
    value: any;
    valueFormatting: any;
    barX: any;
    barY: any;
    barWidth: any;
    barHeight: any;
    orientation: any;
    dimensionsChanged: EventEmitter<any>;
    element: any;
    x: number;
    y: number;
    horizontalPadding: number;
    verticalPadding: number;
    formatedValue: string;
    transform: string;
    textAnchor: string;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    getSize(): any;
    ngAfterViewInit(): void;
    update(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BarLabelComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BarLabelComponent, "g[ngx-charts-bar-label]", never, {
    "value": "value";
    "valueFormatting": "valueFormatting";
    "barX": "barX";
    "barY": "barY";
    "barWidth": "barWidth";
    "barHeight": "barHeight";
    "orientation": "orientation";
}, {
    "dimensionsChanged": "dimensionsChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWxhYmVsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJiYXItbGFiZWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmFyTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHZhbHVlOiBhbnk7XG4gICAgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG4gICAgYmFyWDogYW55O1xuICAgIGJhclk6IGFueTtcbiAgICBiYXJXaWR0aDogYW55O1xuICAgIGJhckhlaWdodDogYW55O1xuICAgIG9yaWVudGF0aW9uOiBhbnk7XG4gICAgZGltZW5zaW9uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGVsZW1lbnQ6IGFueTtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGhvcml6b250YWxQYWRkaW5nOiBudW1iZXI7XG4gICAgdmVydGljYWxQYWRkaW5nOiBudW1iZXI7XG4gICAgZm9ybWF0ZWRWYWx1ZTogc3RyaW5nO1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICAgIHRleHRBbmNob3I6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBnZXRTaXplKCk6IGFueTtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICB1cGRhdGUoKTogdm9pZDtcbn1cbiJdfQ==