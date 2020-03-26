import { OnChanges, PipeTransform, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface ISummaryColumn {
    summaryFunc?: (cells: any[]) => any;
    summaryTemplate?: TemplateRef<any>;
    prop: string;
    pipe?: PipeTransform;
}
export declare class DataTableSummaryRowComponent implements OnChanges {
    rows: any[];
    columns: ISummaryColumn[];
    rowHeight: number;
    offsetX: number;
    innerWidth: number;
    _internalColumns: ISummaryColumn[];
    summaryRow: any;
    ngOnChanges(): void;
    private updateInternalColumns;
    private updateValues;
    private getSummaryFunction;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableSummaryRowComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableSummaryRowComponent, "datatable-summary-row", never, {
    "rows": "rows";
    "columns": "columns";
    "rowHeight": "rowHeight";
    "offsetX": "offsetX";
    "innerWidth": "innerWidth";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1yb3cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN1bW1hcnktcm93LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgUGlwZVRyYW5zZm9ybSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBpbnRlcmZhY2UgSVN1bW1hcnlDb2x1bW4ge1xuICAgIHN1bW1hcnlGdW5jPzogKGNlbGxzOiBhbnlbXSkgPT4gYW55O1xuICAgIHN1bW1hcnlUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT47XG4gICAgcHJvcDogc3RyaW5nO1xuICAgIHBpcGU/OiBQaXBlVHJhbnNmb3JtO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0YVRhYmxlU3VtbWFyeVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcm93czogYW55W107XG4gICAgY29sdW1uczogSVN1bW1hcnlDb2x1bW5bXTtcbiAgICByb3dIZWlnaHQ6IG51bWJlcjtcbiAgICBvZmZzZXRYOiBudW1iZXI7XG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xuICAgIF9pbnRlcm5hbENvbHVtbnM6IElTdW1tYXJ5Q29sdW1uW107XG4gICAgc3VtbWFyeVJvdzogYW55O1xuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSB1cGRhdGVJbnRlcm5hbENvbHVtbnM7XG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZXM7XG4gICAgcHJpdmF0ZSBnZXRTdW1tYXJ5RnVuY3Rpb247XG59XG4iXX0=