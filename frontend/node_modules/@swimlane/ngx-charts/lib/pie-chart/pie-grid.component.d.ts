import { TemplateRef, EventEmitter } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { DataItem } from '../models/chart-data.model';
import * as ɵngcc0 from '@angular/core';
export declare class PieGridComponent extends BaseChartComponent {
    designatedTotal: number;
    tooltipDisabled: boolean;
    tooltipText: (o: any) => any;
    label: string;
    minWidth: number;
    activeEntries: any[];
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    dims: ViewDimensions;
    data: any[];
    transform: string;
    series: any[];
    domain: any[];
    colorScale: ColorHelper;
    margin: number[];
    tooltipTemplate: TemplateRef<any>;
    update(): void;
    defaultTooltipText({ data }: {
        data: any;
    }): string;
    getDomain(): any[];
    getSeries(): any[];
    getTotal(): any;
    onClick(data: DataItem): void;
    setColors(): void;
    onActivate(item: any, fromLegend?: boolean): void;
    onDeactivate(item: any, fromLegend?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PieGridComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PieGridComponent, "ngx-charts-pie-grid", never, {
    "tooltipDisabled": "tooltipDisabled";
    "label": "label";
    "minWidth": "minWidth";
    "activeEntries": "activeEntries";
    "tooltipText": "tooltipText";
    "designatedTotal": "designatedTotal";
}, {
    "activate": "activate";
    "deactivate": "deactivate";
}, ["tooltipTemplate"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWdyaWQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBpZS1ncmlkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBpZUdyaWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICAgIGRlc2lnbmF0ZWRUb3RhbDogbnVtYmVyO1xuICAgIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgICB0b29sdGlwVGV4dDogKG86IGFueSkgPT4gYW55O1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgbWluV2lkdGg6IG51bWJlcjtcbiAgICBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gICAgZGF0YTogYW55W107XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgc2VyaWVzOiBhbnlbXTtcbiAgICBkb21haW46IGFueVtdO1xuICAgIGNvbG9yU2NhbGU6IENvbG9ySGVscGVyO1xuICAgIG1hcmdpbjogbnVtYmVyW107XG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGRlZmF1bHRUb29sdGlwVGV4dCh7IGRhdGEgfToge1xuICAgICAgICBkYXRhOiBhbnk7XG4gICAgfSk6IHN0cmluZztcbiAgICBnZXREb21haW4oKTogYW55W107XG4gICAgZ2V0U2VyaWVzKCk6IGFueVtdO1xuICAgIGdldFRvdGFsKCk6IGFueTtcbiAgICBvbkNsaWNrKGRhdGE6IERhdGFJdGVtKTogdm9pZDtcbiAgICBzZXRDb2xvcnMoKTogdm9pZDtcbiAgICBvbkFjdGl2YXRlKGl0ZW06IGFueSwgZnJvbUxlZ2VuZD86IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uRGVhY3RpdmF0ZShpdGVtOiBhbnksIGZyb21MZWdlbmQ/OiBib29sZWFuKTogdm9pZDtcbn1cbiJdfQ==