import { EventEmitter, DoCheck, ChangeDetectorRef, KeyValueDiffers } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableRowWrapperComponent implements DoCheck {
    private cd;
    private differs;
    innerWidth: number;
    rowDetail: any;
    groupHeader: any;
    offsetX: number;
    detailRowHeight: any;
    row: any;
    groupedRows: any;
    rowContextmenu: EventEmitter<{
        event: MouseEvent;
        row: any;
    }>;
    rowIndex: number;
    expanded: boolean;
    groupContext: any;
    rowContext: any;
    private rowDiffer;
    private _expanded;
    private _rowIndex;
    constructor(cd: ChangeDetectorRef, differs: KeyValueDiffers);
    ngDoCheck(): void;
    onContextmenu($event: MouseEvent): void;
    getGroupHeaderStyle(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableRowWrapperComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableRowWrapperComponent, "datatable-row-wrapper", never, {
    "rowIndex": "rowIndex";
    "expanded": "expanded";
    "innerWidth": "innerWidth";
    "rowDetail": "rowDetail";
    "groupHeader": "groupHeader";
    "offsetX": "offsetX";
    "detailRowHeight": "detailRowHeight";
    "row": "row";
    "groupedRows": "groupedRows";
}, {
    "rowContextmenu": "rowContextmenu";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1yb3ctd3JhcHBlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYm9keS1yb3ctd3JhcHBlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBEb0NoZWNrLCBDaGFuZ2VEZXRlY3RvclJlZiwgS2V5VmFsdWVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhVGFibGVSb3dXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG4gICAgcHJpdmF0ZSBjZDtcbiAgICBwcml2YXRlIGRpZmZlcnM7XG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xuICAgIHJvd0RldGFpbDogYW55O1xuICAgIGdyb3VwSGVhZGVyOiBhbnk7XG4gICAgb2Zmc2V0WDogbnVtYmVyO1xuICAgIGRldGFpbFJvd0hlaWdodDogYW55O1xuICAgIHJvdzogYW55O1xuICAgIGdyb3VwZWRSb3dzOiBhbnk7XG4gICAgcm93Q29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIGV2ZW50OiBNb3VzZUV2ZW50O1xuICAgICAgICByb3c6IGFueTtcbiAgICB9PjtcbiAgICByb3dJbmRleDogbnVtYmVyO1xuICAgIGV4cGFuZGVkOiBib29sZWFuO1xuICAgIGdyb3VwQ29udGV4dDogYW55O1xuICAgIHJvd0NvbnRleHQ6IGFueTtcbiAgICBwcml2YXRlIHJvd0RpZmZlcjtcbiAgICBwcml2YXRlIF9leHBhbmRlZDtcbiAgICBwcml2YXRlIF9yb3dJbmRleDtcbiAgICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyk7XG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XG4gICAgb25Db250ZXh0bWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIGdldEdyb3VwSGVhZGVyU3R5bGUoKTogYW55O1xufVxuIl19