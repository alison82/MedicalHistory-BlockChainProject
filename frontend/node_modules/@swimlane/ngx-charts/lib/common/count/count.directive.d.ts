import { EventEmitter, ChangeDetectorRef, OnDestroy, ElementRef } from '@angular/core';
/**
 * Count up component
 *
 * Loosely inspired by:
 *  - https://github.com/izupet/angular2-counto
 *  - https://inorganik.github.io/countUp.js/
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class CountUpDirective implements OnDestroy {
    private cd;
    countDuration: number;
    countPrefix: string;
    countSuffix: string;
    valueFormatting: any;
    countDecimals: number;
    countTo: any;
    countFrom: any;
    countChange: EventEmitter<any>;
    countFinish: EventEmitter<any>;
    nativeElement: any;
    value: any;
    formattedValue: string;
    private animationReq;
    private _countDecimals;
    private _countTo;
    private _countFrom;
    constructor(cd: ChangeDetectorRef, element: ElementRef);
    ngOnDestroy(): void;
    start(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CountUpDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CountUpDirective, "[ngx-charts-count-up]", never, {
    "countDuration": "countDuration";
    "countPrefix": "countPrefix";
    "countSuffix": "countSuffix";
    "countDecimals": "countDecimals";
    "countTo": "countTo";
    "countFrom": "countFrom";
    "valueFormatting": "valueFormatting";
}, {
    "countChange": "countChange";
    "countFinish": "countFinish";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImNvdW50LmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIENvdW50IHVwIGNvbXBvbmVudFxuICpcbiAqIExvb3NlbHkgaW5zcGlyZWQgYnk6XG4gKiAgLSBodHRwczovL2dpdGh1Yi5jb20vaXp1cGV0L2FuZ3VsYXIyLWNvdW50b1xuICogIC0gaHR0cHM6Ly9pbm9yZ2FuaWsuZ2l0aHViLmlvL2NvdW50VXAuanMvXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb3VudFVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGNkO1xuICAgIGNvdW50RHVyYXRpb246IG51bWJlcjtcbiAgICBjb3VudFByZWZpeDogc3RyaW5nO1xuICAgIGNvdW50U3VmZml4OiBzdHJpbmc7XG4gICAgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG4gICAgY291bnREZWNpbWFsczogbnVtYmVyO1xuICAgIGNvdW50VG86IGFueTtcbiAgICBjb3VudEZyb206IGFueTtcbiAgICBjb3VudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY291bnRGaW5pc2g6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIG5hdGl2ZUVsZW1lbnQ6IGFueTtcbiAgICB2YWx1ZTogYW55O1xuICAgIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhbmltYXRpb25SZXE7XG4gICAgcHJpdmF0ZSBfY291bnREZWNpbWFscztcbiAgICBwcml2YXRlIF9jb3VudFRvO1xuICAgIHByaXZhdGUgX2NvdW50RnJvbTtcbiAgICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgc3RhcnQoKTogdm9pZDtcbn1cbiJdfQ==