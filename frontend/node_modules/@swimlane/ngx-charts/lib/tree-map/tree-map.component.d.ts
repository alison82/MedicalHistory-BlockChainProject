import { EventEmitter, TemplateRef } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class TreeMapComponent extends BaseChartComponent {
    results: any;
    tooltipDisabled: boolean;
    valueFormatting: any;
    labelFormatting: any;
    gradient: boolean;
    select: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    dims: any;
    domain: any;
    transform: any;
    colors: ColorHelper;
    treemap: any;
    data: any;
    margin: number[];
    update(): void;
    getDomain(): any[];
    onClick(data: any): void;
    setColors(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TreeMapComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TreeMapComponent, "ngx-charts-tree-map", never, {
    "tooltipDisabled": "tooltipDisabled";
    "gradient": "gradient";
    "results": "results";
    "valueFormatting": "valueFormatting";
    "labelFormatting": "labelFormatting";
}, {
    "select": "select";
}, ["tooltipTemplate"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRyZWUtbWFwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUcmVlTWFwQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgICByZXN1bHRzOiBhbnk7XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIHZhbHVlRm9ybWF0dGluZzogYW55O1xuICAgIGxhYmVsRm9ybWF0dGluZzogYW55O1xuICAgIGdyYWRpZW50OiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGRpbXM6IGFueTtcbiAgICBkb21haW46IGFueTtcbiAgICB0cmFuc2Zvcm06IGFueTtcbiAgICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICAgIHRyZWVtYXA6IGFueTtcbiAgICBkYXRhOiBhbnk7XG4gICAgbWFyZ2luOiBudW1iZXJbXTtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBnZXREb21haW4oKTogYW55W107XG4gICAgb25DbGljayhkYXRhOiBhbnkpOiB2b2lkO1xuICAgIHNldENvbG9ycygpOiB2b2lkO1xufVxuIl19