import { ElementRef, AfterViewInit } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class LinearGaugeComponent extends BaseChartComponent implements AfterViewInit {
    min: number;
    max: number;
    value: number;
    units: string;
    previousValue: any;
    valueFormatting: any;
    valueTextEl: ElementRef;
    unitsTextEl: ElementRef;
    dims: ViewDimensions;
    valueDomain: any;
    valueScale: any;
    colors: ColorHelper;
    transform: string;
    margin: any[];
    transformLine: string;
    valueResizeScale: number;
    unitsResizeScale: number;
    valueTextTransform: string;
    valueTranslate: string;
    unitsTextTransform: string;
    unitsTranslate: string;
    displayValue: string;
    hasPreviousValue: boolean;
    ngAfterViewInit(): void;
    update(): void;
    getValueDomain(): any[];
    getValueScale(): any;
    getDisplayValue(): string;
    scaleText(element: any, repeat?: boolean): void;
    onClick(): void;
    setColors(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LinearGaugeComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LinearGaugeComponent, "ngx-charts-linear-gauge", never, {
    "min": "min";
    "max": "max";
    "value": "value";
    "units": "units";
    "previousValue": "previousValue";
    "valueFormatting": "valueFormatting";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLWdhdWdlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJsaW5lYXItZ2F1Z2UuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExpbmVhckdhdWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgbWluOiBudW1iZXI7XG4gICAgbWF4OiBudW1iZXI7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICB1bml0czogc3RyaW5nO1xuICAgIHByZXZpb3VzVmFsdWU6IGFueTtcbiAgICB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgICB2YWx1ZVRleHRFbDogRWxlbWVudFJlZjtcbiAgICB1bml0c1RleHRFbDogRWxlbWVudFJlZjtcbiAgICBkaW1zOiBWaWV3RGltZW5zaW9ucztcbiAgICB2YWx1ZURvbWFpbjogYW55O1xuICAgIHZhbHVlU2NhbGU6IGFueTtcbiAgICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICAgIG1hcmdpbjogYW55W107XG4gICAgdHJhbnNmb3JtTGluZTogc3RyaW5nO1xuICAgIHZhbHVlUmVzaXplU2NhbGU6IG51bWJlcjtcbiAgICB1bml0c1Jlc2l6ZVNjYWxlOiBudW1iZXI7XG4gICAgdmFsdWVUZXh0VHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgdmFsdWVUcmFuc2xhdGU6IHN0cmluZztcbiAgICB1bml0c1RleHRUcmFuc2Zvcm06IHN0cmluZztcbiAgICB1bml0c1RyYW5zbGF0ZTogc3RyaW5nO1xuICAgIGRpc3BsYXlWYWx1ZTogc3RyaW5nO1xuICAgIGhhc1ByZXZpb3VzVmFsdWU6IGJvb2xlYW47XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0VmFsdWVEb21haW4oKTogYW55W107XG4gICAgZ2V0VmFsdWVTY2FsZSgpOiBhbnk7XG4gICAgZ2V0RGlzcGxheVZhbHVlKCk6IHN0cmluZztcbiAgICBzY2FsZVRleHQoZWxlbWVudDogYW55LCByZXBlYXQ/OiBib29sZWFuKTogdm9pZDtcbiAgICBvbkNsaWNrKCk6IHZvaWQ7XG4gICAgc2V0Q29sb3JzKCk6IHZvaWQ7XG59XG4iXX0=