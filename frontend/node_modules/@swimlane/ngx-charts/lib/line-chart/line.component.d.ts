import { EventEmitter, OnChanges, ElementRef, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class LineComponent implements OnChanges {
    private element;
    path: any;
    stroke: any;
    data: any;
    fill: string;
    animations: boolean;
    select: EventEmitter<any>;
    initialized: boolean;
    initialPath: string;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    updatePathEl(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LineComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LineComponent, "g[ngx-charts-line]", never, {
    "fill": "fill";
    "animations": "animations";
    "path": "path";
    "stroke": "stroke";
    "data": "data";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibGluZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcGF0aDogYW55O1xuICAgIHN0cm9rZTogYW55O1xuICAgIGRhdGE6IGFueTtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgYW5pbWF0aW9uczogYm9vbGVhbjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuICAgIGluaXRpYWxQYXRoOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZik7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlUGF0aEVsKCk6IHZvaWQ7XG59XG4iXX0=