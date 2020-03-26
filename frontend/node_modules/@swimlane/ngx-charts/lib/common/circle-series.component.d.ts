import { SimpleChanges, EventEmitter, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class CircleSeriesComponent implements OnChanges, OnInit {
    data: any;
    type: string;
    xScale: any;
    yScale: any;
    colors: ColorHelper;
    scaleType: any;
    visibleValue: any;
    activeEntries: any[];
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    areaPath: any;
    circle: any;
    barVisible: boolean;
    gradientId: string;
    gradientFill: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getActiveCircle(): {};
    mapDataPointToCircle(d: any, i: number): any;
    getTooltipText({ tooltipLabel, value, seriesName, min, max }: {
        tooltipLabel: any;
        value: any;
        seriesName: any;
        min: any;
        max: any;
    }): string;
    getTooltipMinMaxText(min: any, max: any): string;
    getGradientStops(color: any): {
        offset: number;
        color: any;
        opacity: number;
    }[];
    onClick(data: any): void;
    isActive(entry: any): boolean;
    activateCircle(): void;
    deactivateCircle(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CircleSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CircleSeriesComponent, "g[ngx-charts-circle-series]", never, {
    "type": "type";
    "tooltipDisabled": "tooltipDisabled";
    "data": "data";
    "xScale": "xScale";
    "yScale": "yScale";
    "colors": "colors";
    "scaleType": "scaleType";
    "visibleValue": "visibleValue";
    "activeEntries": "activeEntries";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXNlcmllcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2lyY2xlLXNlcmllcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENpcmNsZVNlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBkYXRhOiBhbnk7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHhTY2FsZTogYW55O1xuICAgIHlTY2FsZTogYW55O1xuICAgIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gICAgc2NhbGVUeXBlOiBhbnk7XG4gICAgdmlzaWJsZVZhbHVlOiBhbnk7XG4gICAgYWN0aXZlRW50cmllczogYW55W107XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhcmVhUGF0aDogYW55O1xuICAgIGNpcmNsZTogYW55O1xuICAgIGJhclZpc2libGU6IGJvb2xlYW47XG4gICAgZ3JhZGllbnRJZDogc3RyaW5nO1xuICAgIGdyYWRpZW50RmlsbDogc3RyaW5nO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0QWN0aXZlQ2lyY2xlKCk6IHt9O1xuICAgIG1hcERhdGFQb2ludFRvQ2lyY2xlKGQ6IGFueSwgaTogbnVtYmVyKTogYW55O1xuICAgIGdldFRvb2x0aXBUZXh0KHsgdG9vbHRpcExhYmVsLCB2YWx1ZSwgc2VyaWVzTmFtZSwgbWluLCBtYXggfToge1xuICAgICAgICB0b29sdGlwTGFiZWw6IGFueTtcbiAgICAgICAgdmFsdWU6IGFueTtcbiAgICAgICAgc2VyaWVzTmFtZTogYW55O1xuICAgICAgICBtaW46IGFueTtcbiAgICAgICAgbWF4OiBhbnk7XG4gICAgfSk6IHN0cmluZztcbiAgICBnZXRUb29sdGlwTWluTWF4VGV4dChtaW46IGFueSwgbWF4OiBhbnkpOiBzdHJpbmc7XG4gICAgZ2V0R3JhZGllbnRTdG9wcyhjb2xvcjogYW55KToge1xuICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgY29sb3I6IGFueTtcbiAgICAgICAgb3BhY2l0eTogbnVtYmVyO1xuICAgIH1bXTtcbiAgICBvbkNsaWNrKGRhdGE6IGFueSk6IHZvaWQ7XG4gICAgaXNBY3RpdmUoZW50cnk6IGFueSk6IGJvb2xlYW47XG4gICAgYWN0aXZhdGVDaXJjbGUoKTogdm9pZDtcbiAgICBkZWFjdGl2YXRlQ2lyY2xlKCk6IHZvaWQ7XG59XG4iXX0=