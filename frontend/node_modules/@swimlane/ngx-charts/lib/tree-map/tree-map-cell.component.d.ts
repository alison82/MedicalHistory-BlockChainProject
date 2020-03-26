import { EventEmitter, ElementRef, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TreeMapCellComponent implements OnChanges {
    data: any;
    fill: any;
    x: any;
    y: any;
    width: any;
    height: any;
    label: any;
    value: any;
    valueType: any;
    valueFormatting: any;
    labelFormatting: any;
    gradient: boolean;
    animations: boolean;
    select: EventEmitter<any>;
    gradientStops: any[];
    gradientId: string;
    gradientUrl: string;
    element: HTMLElement;
    transform: string;
    formattedLabel: string;
    formattedValue: string;
    initialized: boolean;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    update(): void;
    loadAnimation(): void;
    getTextColor(): string;
    animateToCurrentForm(): void;
    onClick(): void;
    getGradientStops(): {
        offset: number;
        color: any;
        opacity: number;
    }[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TreeMapCellComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TreeMapCellComponent, "g[ngx-charts-tree-map-cell]", never, {
    "gradient": "gradient";
    "animations": "animations";
    "valueFormatting": "valueFormatting";
    "data": "data";
    "fill": "fill";
    "x": "x";
    "y": "y";
    "width": "width";
    "height": "height";
    "label": "label";
    "value": "value";
    "valueType": "valueType";
    "labelFormatting": "labelFormatting";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAtY2VsbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidHJlZS1tYXAtY2VsbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJlZU1hcENlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIGRhdGE6IGFueTtcbiAgICBmaWxsOiBhbnk7XG4gICAgeDogYW55O1xuICAgIHk6IGFueTtcbiAgICB3aWR0aDogYW55O1xuICAgIGhlaWdodDogYW55O1xuICAgIGxhYmVsOiBhbnk7XG4gICAgdmFsdWU6IGFueTtcbiAgICB2YWx1ZVR5cGU6IGFueTtcbiAgICB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgICBsYWJlbEZvcm1hdHRpbmc6IGFueTtcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZ3JhZGllbnRTdG9wczogYW55W107XG4gICAgZ3JhZGllbnRJZDogc3RyaW5nO1xuICAgIGdyYWRpZW50VXJsOiBzdHJpbmc7XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgZm9ybWF0dGVkTGFiZWw6IHN0cmluZztcbiAgICBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nO1xuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgbG9hZEFuaW1hdGlvbigpOiB2b2lkO1xuICAgIGdldFRleHRDb2xvcigpOiBzdHJpbmc7XG4gICAgYW5pbWF0ZVRvQ3VycmVudEZvcm0oKTogdm9pZDtcbiAgICBvbkNsaWNrKCk6IHZvaWQ7XG4gICAgZ2V0R3JhZGllbnRTdG9wcygpOiB7XG4gICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICBjb2xvcjogYW55O1xuICAgICAgICBvcGFjaXR5OiBudW1iZXI7XG4gICAgfVtdO1xufVxuIl19