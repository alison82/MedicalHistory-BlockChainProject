import { ElementRef, EventEmitter, OnInit, QueryList, AfterViewInit, DoCheck, KeyValueDiffers, KeyValueDiffer, ChangeDetectorRef } from '@angular/core';
import { DatatableGroupHeaderDirective } from './body/body-group-header.directive';
import { BehaviorSubject, Subscription } from 'rxjs';
import { INgxDatatableConfig } from '../ngx-datatable.module';
import { TableColumn } from '../types/table-column.type';
import { ColumnMode } from '../types/column-mode.type';
import { SelectionType } from '../types/selection.type';
import { SortType } from '../types/sort.type';
import { ContextmenuType } from '../types/contextmenu.type';
import { DataTableColumnDirective } from './columns/column.directive';
import { DatatableRowDetailDirective } from './row-detail/row-detail.directive';
import { DatatableFooterDirective } from './footer/footer.directive';
import { DataTableBodyComponent } from './body/body.component';
import { DataTableHeaderComponent } from './header/header.component';
import { ScrollbarHelper } from '../services/scrollbar-helper.service';
import { ColumnChangesService } from '../services/column-changes.service';
import { DimensionsHelper } from '../services/dimensions-helper.service';
import * as ɵngcc0 from '@angular/core';
export declare class DatatableComponent implements OnInit, DoCheck, AfterViewInit {
    private scrollbarHelper;
    private dimensionsHelper;
    private cd;
    private columnChangesService;
    private configuration;
    /**
     * Template for the target marker of drag target columns.
     */
    targetMarkerTemplate: any;
    /**
     * Rows that are displayed in the table.
     */
    /**
    * Gets the rows.
    */
    rows: any;
    /**
     * This attribute allows the user to set the name of the column to group the data with
     */
    groupRowsBy: string;
    /**
     * This attribute allows the user to set a grouped array in the following format:
     *  [
     *    {groupid=1} [
     *      {id=1 name="test1"},
     *      {id=2 name="test2"},
     *      {id=3 name="test3"}
     *    ]},
     *    {groupid=2>[
     *      {id=4 name="test4"},
     *      {id=5 name="test5"},
     *      {id=6 name="test6"}
     *    ]}
     *  ]
     */
    groupedRows: any[];
    /**
     * Columns to be displayed.
     */
    /**
    * Get the columns.
    */
    columns: TableColumn[];
    /**
     * List of row objects that should be
     * represented as selected in the grid.
     * Default value: `[]`
     */
    selected: any[];
    /**
     * Enable vertical scrollbars
     */
    scrollbarV: boolean;
    /**
     * Enable horz scrollbars
     */
    scrollbarH: boolean;
    /**
     * The row height; which is necessary
     * to calculate the height for the lazy rendering.
     */
    rowHeight: number | 'auto' | ((row?: any) => number);
    /**
     * Type of column width distribution formula.
     * Example: flex, force, standard
     */
    columnMode: ColumnMode;
    /**
     * The minimum header height in pixels.
     * Pass a falsey for no header
     */
    headerHeight: any;
    /**
     * The minimum footer height in pixels.
     * Pass falsey for no footer
     */
    footerHeight: number;
    /**
     * If the table should use external paging
     * otherwise its assumed that all data is preloaded.
     */
    externalPaging: boolean;
    /**
     * If the table should use external sorting or
     * the built-in basic sorting.
     */
    externalSorting: boolean;
    /**
     * The page size to be shown.
     * Default value: `undefined`
     */
    /**
    * Gets the limit.
    */
    limit: number | undefined;
    /**
     * The total count of all rows.
     * Default value: `0`
     */
    /**
    * Gets the count.
    */
    count: number;
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     */
    offset: number;
    /**
     * Show the linear loading bar.
     * Default value: `false`
     */
    loadingIndicator: boolean;
    /**
     * Type of row selection. Options are:
     *
     *  - `single`
     *  - `multi`
     *  - `checkbox`
     *  - `multiClick`
     *  - `cell`
     *
     * For no selection pass a `falsey`.
     * Default value: `undefined`
     */
    selectionType: SelectionType;
    /**
     * Enable/Disable ability to re-order columns
     * by dragging them.
     */
    reorderable: boolean;
    /**
     * Swap columns on re-order columns or
     * move them.
     */
    swapColumns: boolean;
    /**
     * The type of sorting
     */
    sortType: SortType;
    /**
     * Array of sorted columns by property and type.
     * Default value: `[]`
     */
    sorts: any[];
    /**
     * Css class overrides
     */
    cssClasses: any;
    /**
     * Message overrides for localization
     *
     * emptyMessage     [default] = 'No data to display'
     * totalMessage     [default] = 'total'
     * selectedMessage  [default] = 'selected'
     */
    messages: any;
    /**
     * Row specific classes.
     * Similar implementation to ngClass.
     *
     *  [rowClass]="'first second'"
     *  [rowClass]="{ 'first': true, 'second': true, 'third': false }"
     */
    rowClass: any;
    /**
     * A boolean/function you can use to check whether you want
     * to select a particular row based on a criteria. Example:
     *
     *    (selection) => {
     *      return selection !== 'Ethel Price';
     *    }
     */
    selectCheck: any;
    /**
     * A function you can use to check whether you want
     * to show the checkbox for a particular row based on a criteria. Example:
     *
     *    (row, column, value) => {
     *      return row.name !== 'Ethel Price';
     *    }
     */
    displayCheck: (row: any, column?: any, value?: any) => boolean;
    /**
     * A boolean you can use to set the detault behaviour of rows and groups
     * whether they will start expanded or not. If ommited the default is NOT expanded.
     *
     */
    groupExpansionDefault: boolean;
    /**
     * Property to which you can use for custom tracking of rows.
     * Example: 'name'
     */
    trackByProp: string;
    /**
     * Property to which you can use for determining select all
     * rows on current page or not.
     *
     * @memberOf DatatableComponent
     */
    selectAllRowsOnPage: boolean;
    /**
     * A flag for row virtualization on / off
     */
    virtualization: boolean;
    /**
     * Tree from relation
     */
    treeFromRelation: string;
    /**
     * Tree to relation
     */
    treeToRelation: string;
    /**
     * A flag for switching summary row on / off
     */
    summaryRow: boolean;
    /**
     * A height of summary row
     */
    summaryHeight: number;
    /**
     * A property holds a summary row position: top/bottom
     */
    summaryPosition: string;
    /**
     * Body was scrolled typically in a `scrollbarV:true` scenario.
     */
    scroll: EventEmitter<any>;
    /**
     * A cell or row was focused via keyboard or mouse click.
     */
    activate: EventEmitter<any>;
    /**
     * A cell or row was selected.
     */
    select: EventEmitter<any>;
    /**
     * Column sort was invoked.
     */
    sort: EventEmitter<any>;
    /**
     * The table was paged either triggered by the pager or the body scroll.
     */
    page: EventEmitter<any>;
    /**
     * Columns were re-ordered.
     */
    reorder: EventEmitter<any>;
    /**
     * Column was resized.
     */
    resize: EventEmitter<any>;
    /**
     * The context menu was invoked on the table.
     * type indicates whether the header or the body was clicked.
     * content contains either the column or the row that was clicked.
     */
    tableContextmenu: EventEmitter<{
        event: MouseEvent;
        type: ContextmenuType;
        content: any;
    }>;
    /**
     * A row was expanded ot collapsed for tree
     */
    treeAction: EventEmitter<any>;
    /**
     * CSS class applied if the header height if fixed height.
     */
    readonly isFixedHeader: boolean;
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     */
    readonly isFixedRow: boolean;
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     */
    readonly isVertScroll: boolean;
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     */
    readonly isVirtualized: boolean;
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     */
    readonly isHorScroll: boolean;
    /**
     * CSS class applied to root element is selectable.
     */
    readonly isSelectable: boolean;
    /**
     * CSS class applied to root is checkbox selection.
     */
    readonly isCheckboxSelection: boolean;
    /**
     * CSS class applied to root if cell selection.
     */
    readonly isCellSelection: boolean;
    /**
     * CSS class applied to root if single select.
     */
    readonly isSingleSelection: boolean;
    /**
     * CSS class added to root element if mulit select
     */
    readonly isMultiSelection: boolean;
    /**
     * CSS class added to root element if mulit click select
     */
    readonly isMultiClickSelection: boolean;
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    /**
    * Returns the column templates.
    */
    columnTemplates: QueryList<DataTableColumnDirective>;
    /**
     * Row Detail templates gathered from the ContentChild
     */
    rowDetail: DatatableRowDetailDirective;
    /**
     * Group Header templates gathered from the ContentChild
     */
    groupHeader: DatatableGroupHeaderDirective;
    /**
     * Footer template gathered from the ContentChild
     */
    footer: DatatableFooterDirective;
    /**
     * Reference to the body component for manually
     * invoking functions on the body.
     */
    bodyComponent: DataTableBodyComponent;
    /**
     * Reference to the header component for manually
     * invoking functions on the header.
     *
     * @memberOf DatatableComponent
     */
    headerComponent: DataTableHeaderComponent;
    /**
     * Returns if all rows are selected.
     */
    readonly allRowsSelected: boolean;
    element: HTMLElement;
    _innerWidth: number;
    pageSize: number;
    bodyHeight: number;
    rowCount: number;
    rowDiffer: KeyValueDiffer<{}, {}>;
    _offsetX: BehaviorSubject<number>;
    _limit: number | undefined;
    _count: number;
    _offset: number;
    _rows: any[];
    _groupRowsBy: string;
    _internalRows: any[];
    _internalColumns: TableColumn[];
    _columns: TableColumn[];
    _columnTemplates: QueryList<DataTableColumnDirective>;
    _subscriptions: Subscription[];
    constructor(scrollbarHelper: ScrollbarHelper, dimensionsHelper: DimensionsHelper, cd: ChangeDetectorRef, element: ElementRef, differs: KeyValueDiffers, columnChangesService: ColumnChangesService, configuration: INgxDatatableConfig);
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    ngOnInit(): void;
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    ngAfterViewInit(): void;
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    ngAfterContentInit(): void;
    /**
     * This will be used when displaying or selecting rows.
     * when tracking/comparing them, we'll use the value of this fn,
     *
     * (`fn(x) === fn(y)` instead of `x === y`)
     */
    rowIdentity: (x: any) => any;
    /**
     * Translates the templates to the column objects
     */
    translateColumns(val: any): void;
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    groupArrayBy(originalArray: any, groupBy: any): {
        key: any;
        value: any;
    }[];
    ngDoCheck(): void;
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    recalculate(): void;
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize(): void;
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    recalculateColumns(columns?: any[], forceIdx?: number, allowBleed?: boolean): any[] | undefined;
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    recalculateDims(): void;
    /**
     * Recalculates the pages after a update.
     */
    recalculatePages(): void;
    /**
     * Body triggered a page event.
     */
    onBodyPage({ offset }: any): void;
    /**
     * The body triggered a scroll event.
     */
    onBodyScroll(event: MouseEvent): void;
    /**
     * The footer triggered a page event.
     */
    onFooterPage(event: any): void;
    /**
     * Recalculates the sizes of the page
     */
    calcPageSize(val?: any[]): number;
    /**
     * Calculates the row count.
     */
    calcRowCount(val?: any[]): number;
    /**
     * The header triggered a contextmenu event.
     */
    onColumnContextmenu({ event, column }: any): void;
    /**
     * The body triggered a contextmenu event.
     */
    onRowContextmenu({ event, row }: any): void;
    /**
     * The header triggered a column resize event.
     */
    onColumnResize({ column, newValue }: any): void;
    /**
     * The header triggered a column re-order event.
     */
    onColumnReorder({ column, newValue, prevValue }: any): void;
    /**
     * The header triggered a column sort event.
     */
    onColumnSort(event: any): void;
    /**
     * Toggle all row selection
     */
    onHeaderSelect(event: any): void;
    /**
     * A row was selected from body
     */
    onBodySelect(event: any): void;
    /**
     * A row was expanded or collapsed for tree
     */
    onTreeAction(event: any): void;
    ngOnDestroy(): void;
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    private listenForColumnInputChanges;
    private sortInternalRows;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatatableComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatatableComponent, "ngx-datatable", never, {
    "selected": "selected";
    "scrollbarV": "scrollbarV";
    "scrollbarH": "scrollbarH";
    "rowHeight": "rowHeight";
    "columnMode": "columnMode";
    "headerHeight": "headerHeight";
    "footerHeight": "footerHeight";
    "externalPaging": "externalPaging";
    "externalSorting": "externalSorting";
    "loadingIndicator": "loadingIndicator";
    "reorderable": "reorderable";
    "swapColumns": "swapColumns";
    "sortType": "sortType";
    "sorts": "sorts";
    "cssClasses": "cssClasses";
    "messages": "messages";
    "groupExpansionDefault": "groupExpansionDefault";
    "selectAllRowsOnPage": "selectAllRowsOnPage";
    "virtualization": "virtualization";
    "summaryRow": "summaryRow";
    "summaryHeight": "summaryHeight";
    "summaryPosition": "summaryPosition";
    "rowIdentity": "rowIdentity";
    "rows": "rows";
    "groupedRows": "groupedRows";
    "groupRowsBy": "groupRowsBy";
    "columns": "columns";
    "limit": "limit";
    "count": "count";
    "offset": "offset";
    "targetMarkerTemplate": "targetMarkerTemplate";
    "selectionType": "selectionType";
    "rowClass": "rowClass";
    "selectCheck": "selectCheck";
    "displayCheck": "displayCheck";
    "trackByProp": "trackByProp";
    "treeFromRelation": "treeFromRelation";
    "treeToRelation": "treeToRelation";
}, {
    "scroll": "scroll";
    "activate": "activate";
    "select": "select";
    "sort": "sort";
    "page": "page";
    "reorder": "reorder";
    "resize": "resize";
    "tableContextmenu": "tableContextmenu";
    "treeAction": "treeAction";
}, ["rowDetail", "groupHeader", "footer", "columnTemplates"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJkYXRhdGFibGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpZkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBLZXlWYWx1ZURpZmZlcnMsIEtleVZhbHVlRGlmZmVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlR3JvdXBIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JvZHkvYm9keS1ncm91cC1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJTmd4RGF0YXRhYmxlQ29uZmlnIH0gZnJvbSAnLi4vbmd4LWRhdGF0YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVDb2x1bW4gfSBmcm9tICcuLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5Nb2RlIH0gZnJvbSAnLi4vdHlwZXMvY29sdW1uLW1vZGUudHlwZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgU29ydFR5cGUgfSBmcm9tICcuLi90eXBlcy9zb3J0LnR5cGUnO1xuaW1wb3J0IHsgQ29udGV4dG1lbnVUeXBlIH0gZnJvbSAnLi4vdHlwZXMvY29udGV4dG1lbnUudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmUgfSBmcm9tICcuL3Jvdy1kZXRhaWwvcm93LWRldGFpbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9ib2R5L2JvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsYmFySGVscGVyIH0gZnJvbSAnLi4vc2VydmljZXMvc2Nyb2xsYmFyLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbHVtbkNoYW5nZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29sdW1uLWNoYW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zSGVscGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZGltZW5zaW9ucy1oZWxwZXIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgc2Nyb2xsYmFySGVscGVyO1xuICAgIHByaXZhdGUgZGltZW5zaW9uc0hlbHBlcjtcbiAgICBwcml2YXRlIGNkO1xuICAgIHByaXZhdGUgY29sdW1uQ2hhbmdlc1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uO1xuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIGZvciB0aGUgdGFyZ2V0IG1hcmtlciBvZiBkcmFnIHRhcmdldCBjb2x1bW5zLlxuICAgICAqL1xuICAgIHRhcmdldE1hcmtlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqXG4gICAgICogUm93cyB0aGF0IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIHRhYmxlLlxuICAgICAqL1xuICAgIC8qKlxuICAgICogR2V0cyB0aGUgcm93cy5cbiAgICAqL1xuICAgIHJvd3M6IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGF0dHJpYnV0ZSBhbGxvd3MgdGhlIHVzZXIgdG8gc2V0IHRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gdG8gZ3JvdXAgdGhlIGRhdGEgd2l0aFxuICAgICAqL1xuICAgIGdyb3VwUm93c0J5OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhpcyBhdHRyaWJ1dGUgYWxsb3dzIHRoZSB1c2VyIHRvIHNldCBhIGdyb3VwZWQgYXJyYXkgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gICAgICogIFtcbiAgICAgKiAgICB7Z3JvdXBpZD0xfSBbXG4gICAgICogICAgICB7aWQ9MSBuYW1lPVwidGVzdDFcIn0sXG4gICAgICogICAgICB7aWQ9MiBuYW1lPVwidGVzdDJcIn0sXG4gICAgICogICAgICB7aWQ9MyBuYW1lPVwidGVzdDNcIn1cbiAgICAgKiAgICBdfSxcbiAgICAgKiAgICB7Z3JvdXBpZD0yPltcbiAgICAgKiAgICAgIHtpZD00IG5hbWU9XCJ0ZXN0NFwifSxcbiAgICAgKiAgICAgIHtpZD01IG5hbWU9XCJ0ZXN0NVwifSxcbiAgICAgKiAgICAgIHtpZD02IG5hbWU9XCJ0ZXN0NlwifVxuICAgICAqICAgIF19XG4gICAgICogIF1cbiAgICAgKi9cbiAgICBncm91cGVkUm93czogYW55W107XG4gICAgLyoqXG4gICAgICogQ29sdW1ucyB0byBiZSBkaXNwbGF5ZWQuXG4gICAgICovXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGNvbHVtbnMuXG4gICAgKi9cbiAgICBjb2x1bW5zOiBUYWJsZUNvbHVtbltdO1xuICAgIC8qKlxuICAgICAqIExpc3Qgb2Ygcm93IG9iamVjdHMgdGhhdCBzaG91bGQgYmVcbiAgICAgKiByZXByZXNlbnRlZCBhcyBzZWxlY3RlZCBpbiB0aGUgZ3JpZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBgW11gXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IGFueVtdO1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxiYXJzXG4gICAgICovXG4gICAgc2Nyb2xsYmFyVjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBFbmFibGUgaG9yeiBzY3JvbGxiYXJzXG4gICAgICovXG4gICAgc2Nyb2xsYmFySDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcm93IGhlaWdodDsgd2hpY2ggaXMgbmVjZXNzYXJ5XG4gICAgICogdG8gY2FsY3VsYXRlIHRoZSBoZWlnaHQgZm9yIHRoZSBsYXp5IHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICByb3dIZWlnaHQ6IG51bWJlciB8ICdhdXRvJyB8ICgocm93PzogYW55KSA9PiBudW1iZXIpO1xuICAgIC8qKlxuICAgICAqIFR5cGUgb2YgY29sdW1uIHdpZHRoIGRpc3RyaWJ1dGlvbiBmb3JtdWxhLlxuICAgICAqIEV4YW1wbGU6IGZsZXgsIGZvcmNlLCBzdGFuZGFyZFxuICAgICAqL1xuICAgIGNvbHVtbk1vZGU6IENvbHVtbk1vZGU7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gaGVhZGVyIGhlaWdodCBpbiBwaXhlbHMuXG4gICAgICogUGFzcyBhIGZhbHNleSBmb3Igbm8gaGVhZGVyXG4gICAgICovXG4gICAgaGVhZGVySGVpZ2h0OiBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gZm9vdGVyIGhlaWdodCBpbiBwaXhlbHMuXG4gICAgICogUGFzcyBmYWxzZXkgZm9yIG5vIGZvb3RlclxuICAgICAqL1xuICAgIGZvb3RlckhlaWdodDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSB0YWJsZSBzaG91bGQgdXNlIGV4dGVybmFsIHBhZ2luZ1xuICAgICAqIG90aGVyd2lzZSBpdHMgYXNzdW1lZCB0aGF0IGFsbCBkYXRhIGlzIHByZWxvYWRlZC5cbiAgICAgKi9cbiAgICBleHRlcm5hbFBhZ2luZzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgdGFibGUgc2hvdWxkIHVzZSBleHRlcm5hbCBzb3J0aW5nIG9yXG4gICAgICogdGhlIGJ1aWx0LWluIGJhc2ljIHNvcnRpbmcuXG4gICAgICovXG4gICAgZXh0ZXJuYWxTb3J0aW5nOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYWdlIHNpemUgdG8gYmUgc2hvd24uXG4gICAgICogRGVmYXVsdCB2YWx1ZTogYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIGxpbWl0LlxuICAgICovXG4gICAgbGltaXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUaGUgdG90YWwgY291bnQgb2YgYWxsIHJvd3MuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogYDBgXG4gICAgICovXG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBjb3VudC5cbiAgICAqL1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgb2Zmc2V0ICggcGFnZSAtIDEgKSBzaG93bi5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBgMGBcbiAgICAgKi9cbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBTaG93IHRoZSBsaW5lYXIgbG9hZGluZyBiYXIuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogYGZhbHNlYFxuICAgICAqL1xuICAgIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVHlwZSBvZiByb3cgc2VsZWN0aW9uLiBPcHRpb25zIGFyZTpcbiAgICAgKlxuICAgICAqICAtIGBzaW5nbGVgXG4gICAgICogIC0gYG11bHRpYFxuICAgICAqICAtIGBjaGVja2JveGBcbiAgICAgKiAgLSBgbXVsdGlDbGlja2BcbiAgICAgKiAgLSBgY2VsbGBcbiAgICAgKlxuICAgICAqIEZvciBubyBzZWxlY3Rpb24gcGFzcyBhIGBmYWxzZXlgLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGB1bmRlZmluZWRgXG4gICAgICovXG4gICAgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZTtcbiAgICAvKipcbiAgICAgKiBFbmFibGUvRGlzYWJsZSBhYmlsaXR5IHRvIHJlLW9yZGVyIGNvbHVtbnNcbiAgICAgKiBieSBkcmFnZ2luZyB0aGVtLlxuICAgICAqL1xuICAgIHJlb3JkZXJhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFN3YXAgY29sdW1ucyBvbiByZS1vcmRlciBjb2x1bW5zIG9yXG4gICAgICogbW92ZSB0aGVtLlxuICAgICAqL1xuICAgIHN3YXBDb2x1bW5zOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHNvcnRpbmdcbiAgICAgKi9cbiAgICBzb3J0VHlwZTogU29ydFR5cGU7XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2Ygc29ydGVkIGNvbHVtbnMgYnkgcHJvcGVydHkgYW5kIHR5cGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogYFtdYFxuICAgICAqL1xuICAgIHNvcnRzOiBhbnlbXTtcbiAgICAvKipcbiAgICAgKiBDc3MgY2xhc3Mgb3ZlcnJpZGVzXG4gICAgICovXG4gICAgY3NzQ2xhc3NlczogYW55O1xuICAgIC8qKlxuICAgICAqIE1lc3NhZ2Ugb3ZlcnJpZGVzIGZvciBsb2NhbGl6YXRpb25cbiAgICAgKlxuICAgICAqIGVtcHR5TWVzc2FnZSAgICAgW2RlZmF1bHRdID0gJ05vIGRhdGEgdG8gZGlzcGxheSdcbiAgICAgKiB0b3RhbE1lc3NhZ2UgICAgIFtkZWZhdWx0XSA9ICd0b3RhbCdcbiAgICAgKiBzZWxlY3RlZE1lc3NhZ2UgIFtkZWZhdWx0XSA9ICdzZWxlY3RlZCdcbiAgICAgKi9cbiAgICBtZXNzYWdlczogYW55O1xuICAgIC8qKlxuICAgICAqIFJvdyBzcGVjaWZpYyBjbGFzc2VzLlxuICAgICAqIFNpbWlsYXIgaW1wbGVtZW50YXRpb24gdG8gbmdDbGFzcy5cbiAgICAgKlxuICAgICAqICBbcm93Q2xhc3NdPVwiJ2ZpcnN0IHNlY29uZCdcIlxuICAgICAqICBbcm93Q2xhc3NdPVwieyAnZmlyc3QnOiB0cnVlLCAnc2Vjb25kJzogdHJ1ZSwgJ3RoaXJkJzogZmFsc2UgfVwiXG4gICAgICovXG4gICAgcm93Q2xhc3M6IGFueTtcbiAgICAvKipcbiAgICAgKiBBIGJvb2xlYW4vZnVuY3Rpb24geW91IGNhbiB1c2UgdG8gY2hlY2sgd2hldGhlciB5b3Ugd2FudFxuICAgICAqIHRvIHNlbGVjdCBhIHBhcnRpY3VsYXIgcm93IGJhc2VkIG9uIGEgY3JpdGVyaWEuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICogICAgICByZXR1cm4gc2VsZWN0aW9uICE9PSAnRXRoZWwgUHJpY2UnO1xuICAgICAqICAgIH1cbiAgICAgKi9cbiAgICBzZWxlY3RDaGVjazogYW55O1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24geW91IGNhbiB1c2UgdG8gY2hlY2sgd2hldGhlciB5b3Ugd2FudFxuICAgICAqIHRvIHNob3cgdGhlIGNoZWNrYm94IGZvciBhIHBhcnRpY3VsYXIgcm93IGJhc2VkIG9uIGEgY3JpdGVyaWEuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAocm93LCBjb2x1bW4sIHZhbHVlKSA9PiB7XG4gICAgICogICAgICByZXR1cm4gcm93Lm5hbWUgIT09ICdFdGhlbCBQcmljZSc7XG4gICAgICogICAgfVxuICAgICAqL1xuICAgIGRpc3BsYXlDaGVjazogKHJvdzogYW55LCBjb2x1bW4/OiBhbnksIHZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEEgYm9vbGVhbiB5b3UgY2FuIHVzZSB0byBzZXQgdGhlIGRldGF1bHQgYmVoYXZpb3VyIG9mIHJvd3MgYW5kIGdyb3Vwc1xuICAgICAqIHdoZXRoZXIgdGhleSB3aWxsIHN0YXJ0IGV4cGFuZGVkIG9yIG5vdC4gSWYgb21taXRlZCB0aGUgZGVmYXVsdCBpcyBOT1QgZXhwYW5kZWQuXG4gICAgICpcbiAgICAgKi9cbiAgICBncm91cEV4cGFuc2lvbkRlZmF1bHQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdG8gd2hpY2ggeW91IGNhbiB1c2UgZm9yIGN1c3RvbSB0cmFja2luZyBvZiByb3dzLlxuICAgICAqIEV4YW1wbGU6ICduYW1lJ1xuICAgICAqL1xuICAgIHRyYWNrQnlQcm9wOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdG8gd2hpY2ggeW91IGNhbiB1c2UgZm9yIGRldGVybWluaW5nIHNlbGVjdCBhbGxcbiAgICAgKiByb3dzIG9uIGN1cnJlbnQgcGFnZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgRGF0YXRhYmxlQ29tcG9uZW50XG4gICAgICovXG4gICAgc2VsZWN0QWxsUm93c09uUGFnZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBIGZsYWcgZm9yIHJvdyB2aXJ0dWFsaXphdGlvbiBvbiAvIG9mZlxuICAgICAqL1xuICAgIHZpcnR1YWxpemF0aW9uOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRyZWUgZnJvbSByZWxhdGlvblxuICAgICAqL1xuICAgIHRyZWVGcm9tUmVsYXRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUcmVlIHRvIHJlbGF0aW9uXG4gICAgICovXG4gICAgdHJlZVRvUmVsYXRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIGZsYWcgZm9yIHN3aXRjaGluZyBzdW1tYXJ5IHJvdyBvbiAvIG9mZlxuICAgICAqL1xuICAgIHN1bW1hcnlSb3c6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQSBoZWlnaHQgb2Ygc3VtbWFyeSByb3dcbiAgICAgKi9cbiAgICBzdW1tYXJ5SGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQSBwcm9wZXJ0eSBob2xkcyBhIHN1bW1hcnkgcm93IHBvc2l0aW9uOiB0b3AvYm90dG9tXG4gICAgICovXG4gICAgc3VtbWFyeVBvc2l0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQm9keSB3YXMgc2Nyb2xsZWQgdHlwaWNhbGx5IGluIGEgYHNjcm9sbGJhclY6dHJ1ZWAgc2NlbmFyaW8uXG4gICAgICovXG4gICAgc2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBBIGNlbGwgb3Igcm93IHdhcyBmb2N1c2VkIHZpYSBrZXlib2FyZCBvciBtb3VzZSBjbGljay5cbiAgICAgKi9cbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqXG4gICAgICogQSBjZWxsIG9yIHJvdyB3YXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gc29ydCB3YXMgaW52b2tlZC5cbiAgICAgKi9cbiAgICBzb3J0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGUgdGFibGUgd2FzIHBhZ2VkIGVpdGhlciB0cmlnZ2VyZWQgYnkgdGhlIHBhZ2VyIG9yIHRoZSBib2R5IHNjcm9sbC5cbiAgICAgKi9cbiAgICBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBDb2x1bW5zIHdlcmUgcmUtb3JkZXJlZC5cbiAgICAgKi9cbiAgICByZW9yZGVyOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gd2FzIHJlc2l6ZWQuXG4gICAgICovXG4gICAgcmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGUgY29udGV4dCBtZW51IHdhcyBpbnZva2VkIG9uIHRoZSB0YWJsZS5cbiAgICAgKiB0eXBlIGluZGljYXRlcyB3aGV0aGVyIHRoZSBoZWFkZXIgb3IgdGhlIGJvZHkgd2FzIGNsaWNrZWQuXG4gICAgICogY29udGVudCBjb250YWlucyBlaXRoZXIgdGhlIGNvbHVtbiBvciB0aGUgcm93IHRoYXQgd2FzIGNsaWNrZWQuXG4gICAgICovXG4gICAgdGFibGVDb250ZXh0bWVudTogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gICAgICAgIHR5cGU6IENvbnRleHRtZW51VHlwZTtcbiAgICAgICAgY29udGVudDogYW55O1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIEEgcm93IHdhcyBleHBhbmRlZCBvdCBjb2xsYXBzZWQgZm9yIHRyZWVcbiAgICAgKi9cbiAgICB0cmVlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBDU1MgY2xhc3MgYXBwbGllZCBpZiB0aGUgaGVhZGVyIGhlaWdodCBpZiBmaXhlZCBoZWlnaHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNGaXhlZEhlYWRlcjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmXG4gICAgICogdGhlIHJvdyBoZWlnaHRzIGFyZSBmaXhlZCBoZWlnaHRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzRml4ZWRSb3c6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gcm9vdCBlbGVtZW50IGlmXG4gICAgICogdmVydGljYWwgc2Nyb2xsaW5nIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNWZXJ0U2Nyb2xsOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHJvb3QgZWxlbWVudCBpZlxuICAgICAqIHZpcnR1YWxpemF0aW9uIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNWaXJ0dWFsaXplZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAgICogaWYgdGhlIGhvcnppb250YWwgc2Nyb2xsaW5nIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNIb3JTY3JvbGw6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gcm9vdCBlbGVtZW50IGlzIHNlbGVjdGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNTZWxlY3RhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHJvb3QgaXMgY2hlY2tib3ggc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzQ2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gcm9vdCBpZiBjZWxsIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc0NlbGxTZWxlY3Rpb246IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gcm9vdCBpZiBzaW5nbGUgc2VsZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzU2luZ2xlU2VsZWN0aW9uOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIENTUyBjbGFzcyBhZGRlZCB0byByb290IGVsZW1lbnQgaWYgbXVsaXQgc2VsZWN0XG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNNdWx0aVNlbGVjdGlvbjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDU1MgY2xhc3MgYWRkZWQgdG8gcm9vdCBlbGVtZW50IGlmIG11bGl0IGNsaWNrIHNlbGVjdFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzTXVsdGlDbGlja1NlbGVjdGlvbjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gdGVtcGxhdGVzIGdhdGhlcmVkIGZyb20gYENvbnRlbnRDaGlsZHJlbmBcbiAgICAgKiBpZiBkZXNjcmliZWQgaW4geW91ciBtYXJrdXAuXG4gICAgICovXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBjb2x1bW4gdGVtcGxhdGVzLlxuICAgICovXG4gICAgY29sdW1uVGVtcGxhdGVzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPjtcbiAgICAvKipcbiAgICAgKiBSb3cgRGV0YWlsIHRlbXBsYXRlcyBnYXRoZXJlZCBmcm9tIHRoZSBDb250ZW50Q2hpbGRcbiAgICAgKi9cbiAgICByb3dEZXRhaWw6IERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZTtcbiAgICAvKipcbiAgICAgKiBHcm91cCBIZWFkZXIgdGVtcGxhdGVzIGdhdGhlcmVkIGZyb20gdGhlIENvbnRlbnRDaGlsZFxuICAgICAqL1xuICAgIGdyb3VwSGVhZGVyOiBEYXRhdGFibGVHcm91cEhlYWRlckRpcmVjdGl2ZTtcbiAgICAvKipcbiAgICAgKiBGb290ZXIgdGVtcGxhdGUgZ2F0aGVyZWQgZnJvbSB0aGUgQ29udGVudENoaWxkXG4gICAgICovXG4gICAgZm9vdGVyOiBEYXRhdGFibGVGb290ZXJEaXJlY3RpdmU7XG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBib2R5IGNvbXBvbmVudCBmb3IgbWFudWFsbHlcbiAgICAgKiBpbnZva2luZyBmdW5jdGlvbnMgb24gdGhlIGJvZHkuXG4gICAgICovXG4gICAgYm9keUNvbXBvbmVudDogRGF0YVRhYmxlQm9keUNvbXBvbmVudDtcbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGhlYWRlciBjb21wb25lbnQgZm9yIG1hbnVhbGx5XG4gICAgICogaW52b2tpbmcgZnVuY3Rpb25zIG9uIHRoZSBoZWFkZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgRGF0YXRhYmxlQ29tcG9uZW50XG4gICAgICovXG4gICAgaGVhZGVyQ29tcG9uZW50OiBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxsUm93c1NlbGVjdGVkOiBib29sZWFuO1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIF9pbm5lcldpZHRoOiBudW1iZXI7XG4gICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICBib2R5SGVpZ2h0OiBudW1iZXI7XG4gICAgcm93Q291bnQ6IG51bWJlcjtcbiAgICByb3dEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHt9LCB7fT47XG4gICAgX29mZnNldFg6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+O1xuICAgIF9saW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIF9jb3VudDogbnVtYmVyO1xuICAgIF9vZmZzZXQ6IG51bWJlcjtcbiAgICBfcm93czogYW55W107XG4gICAgX2dyb3VwUm93c0J5OiBzdHJpbmc7XG4gICAgX2ludGVybmFsUm93czogYW55W107XG4gICAgX2ludGVybmFsQ29sdW1uczogVGFibGVDb2x1bW5bXTtcbiAgICBfY29sdW1uczogVGFibGVDb2x1bW5bXTtcbiAgICBfY29sdW1uVGVtcGxhdGVzOiBRdWVyeUxpc3Q8RGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlPjtcbiAgICBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW107XG4gICAgY29uc3RydWN0b3Ioc2Nyb2xsYmFySGVscGVyOiBTY3JvbGxiYXJIZWxwZXIsIGRpbWVuc2lvbnNIZWxwZXI6IERpbWVuc2lvbnNIZWxwZXIsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudDogRWxlbWVudFJlZiwgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBjb2x1bW5DaGFuZ2VzU2VydmljZTogQ29sdW1uQ2hhbmdlc1NlcnZpY2UsIGNvbmZpZ3VyYXRpb246IElOZ3hEYXRhdGFibGVDb25maWcpO1xuICAgIC8qKlxuICAgICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGRhdGEtYm91bmRcbiAgICAgKiBwcm9wZXJ0aWVzIG9mIGEgZGlyZWN0aXZlIGFyZSBpbml0aWFsaXplZC5cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50J3NcbiAgICAgKiB2aWV3IGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50J3NcbiAgICAgKiBjb250ZW50IGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgICAqL1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSB1c2VkIHdoZW4gZGlzcGxheWluZyBvciBzZWxlY3Rpbmcgcm93cy5cbiAgICAgKiB3aGVuIHRyYWNraW5nL2NvbXBhcmluZyB0aGVtLCB3ZSdsbCB1c2UgdGhlIHZhbHVlIG9mIHRoaXMgZm4sXG4gICAgICpcbiAgICAgKiAoYGZuKHgpID09PSBmbih5KWAgaW5zdGVhZCBvZiBgeCA9PT0geWApXG4gICAgICovXG4gICAgcm93SWRlbnRpdHk6ICh4OiBhbnkpID0+IGFueTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSB0ZW1wbGF0ZXMgdG8gdGhlIGNvbHVtbiBvYmplY3RzXG4gICAgICovXG4gICAgdHJhbnNsYXRlQ29sdW1ucyh2YWw6IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG1hcCB3aXRoIHRoZSBkYXRhIGdyb3VwZWQgYnkgdGhlIHVzZXIgY2hvaWNlIG9mIGdyb3VwaW5nIGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxBcnJheSB0aGUgb3JpZ2luYWwgYXJyYXkgcGFzc2VkIHZpYSBwYXJhbWV0ZXJcbiAgICAgKiBAcGFyYW0gZ3JvdXBCeUluZGV4ICB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiB0byBncm91cCB0aGUgZGF0YSBieVxuICAgICAqL1xuICAgIGdyb3VwQXJyYXlCeShvcmlnaW5hbEFycmF5OiBhbnksIGdyb3VwQnk6IGFueSk6IHtcbiAgICAgICAga2V5OiBhbnk7XG4gICAgICAgIHZhbHVlOiBhbnk7XG4gICAgfVtdO1xuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlY2FsYydzIHRoZSBzaXplcyBvZiB0aGUgZ3JpZC5cbiAgICAgKlxuICAgICAqIFVwZGF0ZWQgYXV0b21hdGljYWxseSBvbiBjaGFuZ2VzIHRvOlxuICAgICAqXG4gICAgICogIC0gQ29sdW1uc1xuICAgICAqICAtIFJvd3NcbiAgICAgKiAgLSBQYWdpbmcgcmVsYXRlZFxuICAgICAqXG4gICAgICogQWxzbyBjYW4gYmUgbWFudWFsbHkgaW52b2tlZCBvciB1cG9uIHdpbmRvdyByZXNpemUuXG4gICAgICovXG4gICAgcmVjYWxjdWxhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaW5kb3cgcmVzaXplIGhhbmRsZXIgdG8gdXBkYXRlIHNpemVzLlxuICAgICAqL1xuICAgIG9uV2luZG93UmVzaXplKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVjYWx1bGNhdGVzIHRoZSBjb2x1bW4gd2lkdGhzIGJhc2VkIG9uIGNvbHVtbiB3aWR0aFxuICAgICAqIGRpc3RyaWJ1dGlvbiBtb2RlIGFuZCBzY3JvbGxiYXIgb2Zmc2V0cy5cbiAgICAgKi9cbiAgICByZWNhbGN1bGF0ZUNvbHVtbnMoY29sdW1ucz86IGFueVtdLCBmb3JjZUlkeD86IG51bWJlciwgYWxsb3dCbGVlZD86IGJvb2xlYW4pOiBhbnlbXSB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBSZWNhbGN1bGF0ZXMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHRhYmxlIHNpemUuXG4gICAgICogSW50ZXJuYWxseSBjYWxscyB0aGUgcGFnZSBzaXplIGFuZCByb3cgY291bnQgY2FsY3MgdG9vLlxuICAgICAqXG4gICAgICovXG4gICAgcmVjYWxjdWxhdGVEaW1zKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVjYWxjdWxhdGVzIHRoZSBwYWdlcyBhZnRlciBhIHVwZGF0ZS5cbiAgICAgKi9cbiAgICByZWNhbGN1bGF0ZVBhZ2VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQm9keSB0cmlnZ2VyZWQgYSBwYWdlIGV2ZW50LlxuICAgICAqL1xuICAgIG9uQm9keVBhZ2UoeyBvZmZzZXQgfTogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGUgYm9keSB0cmlnZ2VyZWQgYSBzY3JvbGwgZXZlbnQuXG4gICAgICovXG4gICAgb25Cb2R5U2Nyb2xsKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGUgZm9vdGVyIHRyaWdnZXJlZCBhIHBhZ2UgZXZlbnQuXG4gICAgICovXG4gICAgb25Gb290ZXJQYWdlKGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlY2FsY3VsYXRlcyB0aGUgc2l6ZXMgb2YgdGhlIHBhZ2VcbiAgICAgKi9cbiAgICBjYWxjUGFnZVNpemUodmFsPzogYW55W10pOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgcm93IGNvdW50LlxuICAgICAqL1xuICAgIGNhbGNSb3dDb3VudCh2YWw/OiBhbnlbXSk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgaGVhZGVyIHRyaWdnZXJlZCBhIGNvbnRleHRtZW51IGV2ZW50LlxuICAgICAqL1xuICAgIG9uQ29sdW1uQ29udGV4dG1lbnUoeyBldmVudCwgY29sdW1uIH06IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVGhlIGJvZHkgdHJpZ2dlcmVkIGEgY29udGV4dG1lbnUgZXZlbnQuXG4gICAgICovXG4gICAgb25Sb3dDb250ZXh0bWVudSh7IGV2ZW50LCByb3cgfTogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGUgaGVhZGVyIHRyaWdnZXJlZCBhIGNvbHVtbiByZXNpemUgZXZlbnQuXG4gICAgICovXG4gICAgb25Db2x1bW5SZXNpemUoeyBjb2x1bW4sIG5ld1ZhbHVlIH06IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVGhlIGhlYWRlciB0cmlnZ2VyZWQgYSBjb2x1bW4gcmUtb3JkZXIgZXZlbnQuXG4gICAgICovXG4gICAgb25Db2x1bW5SZW9yZGVyKHsgY29sdW1uLCBuZXdWYWx1ZSwgcHJldlZhbHVlIH06IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVGhlIGhlYWRlciB0cmlnZ2VyZWQgYSBjb2x1bW4gc29ydCBldmVudC5cbiAgICAgKi9cbiAgICBvbkNvbHVtblNvcnQoZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCByb3cgc2VsZWN0aW9uXG4gICAgICovXG4gICAgb25IZWFkZXJTZWxlY3QoZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQSByb3cgd2FzIHNlbGVjdGVkIGZyb20gYm9keVxuICAgICAqL1xuICAgIG9uQm9keVNlbGVjdChldmVudDogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBIHJvdyB3YXMgZXhwYW5kZWQgb3IgY29sbGFwc2VkIGZvciB0cmVlXG4gICAgICovXG4gICAgb25UcmVlQWN0aW9uKGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogbGlzdGVuIGZvciBjaGFuZ2VzIHRvIGlucHV0IGJpbmRpbmdzIG9mIGFsbCBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgYW5kXG4gICAgICogdHJpZ2dlciB0aGUgY29sdW1uVGVtcGxhdGVzLmNoYW5nZXMgb2JzZXJ2YWJsZSB0byBlbWl0XG4gICAgICovXG4gICAgcHJpdmF0ZSBsaXN0ZW5Gb3JDb2x1bW5JbnB1dENoYW5nZXM7XG4gICAgcHJpdmF0ZSBzb3J0SW50ZXJuYWxSb3dzO1xufVxuIl19