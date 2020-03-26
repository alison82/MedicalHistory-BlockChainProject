import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DataTablePagerComponent {
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    size: number;
    count: number;
    page: number;
    readonly totalPages: number;
    change: EventEmitter<any>;
    _count: number;
    _page: number;
    _size: number;
    pages: any;
    canPrevious(): boolean;
    canNext(): boolean;
    prevPage(): void;
    nextPage(): void;
    selectPage(page: number): void;
    calcPages(page?: number): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTablePagerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTablePagerComponent, "datatable-pager", never, {
    "size": "size";
    "count": "count";
    "page": "page";
    "pagerLeftArrowIcon": "pagerLeftArrowIcon";
    "pagerRightArrowIcon": "pagerRightArrowIcon";
    "pagerPreviousIcon": "pagerPreviousIcon";
    "pagerNextIcon": "pagerNextIcon";
}, {
    "change": "change";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBhZ2VyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0YVRhYmxlUGFnZXJDb21wb25lbnQge1xuICAgIHBhZ2VyTGVmdEFycm93SWNvbjogc3RyaW5nO1xuICAgIHBhZ2VyUmlnaHRBcnJvd0ljb246IHN0cmluZztcbiAgICBwYWdlclByZXZpb3VzSWNvbjogc3RyaW5nO1xuICAgIHBhZ2VyTmV4dEljb246IHN0cmluZztcbiAgICBzaXplOiBudW1iZXI7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBwYWdlOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgdG90YWxQYWdlczogbnVtYmVyO1xuICAgIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgX2NvdW50OiBudW1iZXI7XG4gICAgX3BhZ2U6IG51bWJlcjtcbiAgICBfc2l6ZTogbnVtYmVyO1xuICAgIHBhZ2VzOiBhbnk7XG4gICAgY2FuUHJldmlvdXMoKTogYm9vbGVhbjtcbiAgICBjYW5OZXh0KCk6IGJvb2xlYW47XG4gICAgcHJldlBhZ2UoKTogdm9pZDtcbiAgICBuZXh0UGFnZSgpOiB2b2lkO1xuICAgIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZDtcbiAgICBjYWxjUGFnZXMocGFnZT86IG51bWJlcik6IGFueVtdO1xufVxuIl19