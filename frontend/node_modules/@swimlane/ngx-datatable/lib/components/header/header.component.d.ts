import { EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SortType } from '../../types/sort.type';
import { SelectionType } from '../../types/selection.type';
import { DataTableColumnDirective } from '../columns/column.directive';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableHeaderComponent implements OnDestroy {
    private cd;
    sortAscendingIcon: any;
    sortDescendingIcon: any;
    scrollbarH: boolean;
    dealsWithGroup: boolean;
    targetMarkerTemplate: any;
    targetMarkerContext: any;
    innerWidth: number;
    sorts: any[];
    sortType: SortType;
    allRowsSelected: boolean;
    selectionType: SelectionType;
    reorderable: boolean;
    dragEventTarget: any;
    headerHeight: any;
    columns: any[];
    offsetX: number;
    sort: EventEmitter<any>;
    reorder: EventEmitter<any>;
    resize: EventEmitter<any>;
    select: EventEmitter<any>;
    columnContextmenu: EventEmitter<{
        event: MouseEvent;
        column: any;
    }>;
    _columnsByPin: any;
    _columnGroupWidths: any;
    _innerWidth: number;
    _offsetX: number;
    _columns: any[];
    _headerHeight: string;
    _styleByGroup: {
        [prop: string]: {};
    };
    private destroyed;
    constructor(cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    onLongPressStart({ event, model }: {
        event: any;
        model: any;
    }): void;
    onLongPressEnd({ event, model }: {
        event: any;
        model: any;
    }): void;
    readonly headerWidth: string;
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    onColumnResized(width: number, column: DataTableColumnDirective): void;
    onColumnReordered({ prevIndex, newIndex, model }: any): void;
    onTargetChanged({ prevIndex, newIndex, initialIndex }: any): void;
    getColumn(index: number): any;
    onSort({ column, prevValue, newValue }: any): void;
    calcNewSorts(column: any, prevValue: number, newValue: number): any[];
    setStylesByGroup(): void;
    calcStylesByGroup(group: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableHeaderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableHeaderComponent, "datatable-header", never, {
    "innerWidth": "innerWidth";
    "headerHeight": "headerHeight";
    "columns": "columns";
    "offsetX": "offsetX";
    "sorts": "sorts";
    "sortAscendingIcon": "sortAscendingIcon";
    "sortDescendingIcon": "sortDescendingIcon";
    "scrollbarH": "scrollbarH";
    "dealsWithGroup": "dealsWithGroup";
    "targetMarkerTemplate": "targetMarkerTemplate";
    "sortType": "sortType";
    "allRowsSelected": "allRowsSelected";
    "selectionType": "selectionType";
    "reorderable": "reorderable";
}, {
    "sort": "sort";
    "reorder": "reorder";
    "resize": "resize";
    "select": "select";
    "columnContextmenu": "columnContextmenu";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJoZWFkZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3J0VHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NvcnQudHlwZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29sdW1ucy9jb2x1bW4uZGlyZWN0aXZlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjZDtcbiAgICBzb3J0QXNjZW5kaW5nSWNvbjogYW55O1xuICAgIHNvcnREZXNjZW5kaW5nSWNvbjogYW55O1xuICAgIHNjcm9sbGJhckg6IGJvb2xlYW47XG4gICAgZGVhbHNXaXRoR3JvdXA6IGJvb2xlYW47XG4gICAgdGFyZ2V0TWFya2VyVGVtcGxhdGU6IGFueTtcbiAgICB0YXJnZXRNYXJrZXJDb250ZXh0OiBhbnk7XG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xuICAgIHNvcnRzOiBhbnlbXTtcbiAgICBzb3J0VHlwZTogU29ydFR5cGU7XG4gICAgYWxsUm93c1NlbGVjdGVkOiBib29sZWFuO1xuICAgIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG4gICAgcmVvcmRlcmFibGU6IGJvb2xlYW47XG4gICAgZHJhZ0V2ZW50VGFyZ2V0OiBhbnk7XG4gICAgaGVhZGVySGVpZ2h0OiBhbnk7XG4gICAgY29sdW1uczogYW55W107XG4gICAgb2Zmc2V0WDogbnVtYmVyO1xuICAgIHNvcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHJlb3JkZXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHJlc2l6ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjb2x1bW5Db250ZXh0bWVudTogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gICAgICAgIGNvbHVtbjogYW55O1xuICAgIH0+O1xuICAgIF9jb2x1bW5zQnlQaW46IGFueTtcbiAgICBfY29sdW1uR3JvdXBXaWR0aHM6IGFueTtcbiAgICBfaW5uZXJXaWR0aDogbnVtYmVyO1xuICAgIF9vZmZzZXRYOiBudW1iZXI7XG4gICAgX2NvbHVtbnM6IGFueVtdO1xuICAgIF9oZWFkZXJIZWlnaHQ6IHN0cmluZztcbiAgICBfc3R5bGVCeUdyb3VwOiB7XG4gICAgICAgIFtwcm9wOiBzdHJpbmddOiB7fTtcbiAgICB9O1xuICAgIHByaXZhdGUgZGVzdHJveWVkO1xuICAgIGNvbnN0cnVjdG9yKGNkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBvbkxvbmdQcmVzc1N0YXJ0KHsgZXZlbnQsIG1vZGVsIH06IHtcbiAgICAgICAgZXZlbnQ6IGFueTtcbiAgICAgICAgbW9kZWw6IGFueTtcbiAgICB9KTogdm9pZDtcbiAgICBvbkxvbmdQcmVzc0VuZCh7IGV2ZW50LCBtb2RlbCB9OiB7XG4gICAgICAgIGV2ZW50OiBhbnk7XG4gICAgICAgIG1vZGVsOiBhbnk7XG4gICAgfSk6IHZvaWQ7XG4gICAgcmVhZG9ubHkgaGVhZGVyV2lkdGg6IHN0cmluZztcbiAgICB0cmFja0J5R3JvdXBzKGluZGV4OiBudW1iZXIsIGNvbEdyb3VwOiBhbnkpOiBhbnk7XG4gICAgY29sdW1uVHJhY2tpbmdGbihpbmRleDogbnVtYmVyLCBjb2x1bW46IGFueSk6IGFueTtcbiAgICBvbkNvbHVtblJlc2l6ZWQod2lkdGg6IG51bWJlciwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpOiB2b2lkO1xuICAgIG9uQ29sdW1uUmVvcmRlcmVkKHsgcHJldkluZGV4LCBuZXdJbmRleCwgbW9kZWwgfTogYW55KTogdm9pZDtcbiAgICBvblRhcmdldENoYW5nZWQoeyBwcmV2SW5kZXgsIG5ld0luZGV4LCBpbml0aWFsSW5kZXggfTogYW55KTogdm9pZDtcbiAgICBnZXRDb2x1bW4oaW5kZXg6IG51bWJlcik6IGFueTtcbiAgICBvblNvcnQoeyBjb2x1bW4sIHByZXZWYWx1ZSwgbmV3VmFsdWUgfTogYW55KTogdm9pZDtcbiAgICBjYWxjTmV3U29ydHMoY29sdW1uOiBhbnksIHByZXZWYWx1ZTogbnVtYmVyLCBuZXdWYWx1ZTogbnVtYmVyKTogYW55W107XG4gICAgc2V0U3R5bGVzQnlHcm91cCgpOiB2b2lkO1xuICAgIGNhbGNTdHlsZXNCeUdyb3VwKGdyb3VwOiBzdHJpbmcpOiBhbnk7XG59XG4iXX0=