import { OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PieLabelComponent implements OnChanges {
    data: any;
    radius: any;
    label: any;
    color: any;
    max: any;
    value: any;
    explodeSlices: any;
    animations: boolean;
    labelTrim: boolean;
    labelTrimSize: number;
    trimLabel: (label: string, max?: number) => string;
    line: string;
    private readonly isIE;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    readonly textX: number;
    readonly textY: number;
    readonly styleTransform: string;
    readonly attrTransform: string;
    readonly textTransition: string;
    textAnchor(): any;
    midAngle(d: any): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PieLabelComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PieLabelComponent, "g[ngx-charts-pie-label]", never, {
    "animations": "animations";
    "labelTrim": "labelTrim";
    "labelTrimSize": "labelTrimSize";
    "data": "data";
    "radius": "radius";
    "label": "label";
    "color": "color";
    "max": "max";
    "value": "value";
    "explodeSlices": "explodeSlices";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWxhYmVsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwaWUtbGFiZWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBpZUxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBkYXRhOiBhbnk7XG4gICAgcmFkaXVzOiBhbnk7XG4gICAgbGFiZWw6IGFueTtcbiAgICBjb2xvcjogYW55O1xuICAgIG1heDogYW55O1xuICAgIHZhbHVlOiBhbnk7XG4gICAgZXhwbG9kZVNsaWNlczogYW55O1xuICAgIGFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICAgbGFiZWxUcmltOiBib29sZWFuO1xuICAgIGxhYmVsVHJpbVNpemU6IG51bWJlcjtcbiAgICB0cmltTGFiZWw6IChsYWJlbDogc3RyaW5nLCBtYXg/OiBudW1iZXIpID0+IHN0cmluZztcbiAgICBsaW5lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBpc0lFO1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgcmVhZG9ubHkgdGV4dFg6IG51bWJlcjtcbiAgICByZWFkb25seSB0ZXh0WTogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHN0eWxlVHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXR0clRyYW5zZm9ybTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHRleHRUcmFuc2l0aW9uOiBzdHJpbmc7XG4gICAgdGV4dEFuY2hvcigpOiBhbnk7XG4gICAgbWlkQW5nbGUoZDogYW55KTogbnVtYmVyO1xufVxuIl19