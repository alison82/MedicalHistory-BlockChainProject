import { EventEmitter, ElementRef, SimpleChanges, OnChanges, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CardComponent implements OnChanges, OnDestroy {
    private cd;
    private zone;
    color: any;
    bandColor: any;
    textColor: any;
    x: any;
    y: any;
    width: any;
    height: any;
    label: any;
    data: any;
    medianSize: number;
    valueFormatting: any;
    labelFormatting: any;
    animations: boolean;
    select: EventEmitter<any>;
    textEl: ElementRef;
    element: HTMLElement;
    value: string;
    transform: string;
    formattedLabel: string;
    cardWidth: number;
    cardHeight: number;
    textWidth: number;
    textFontSize: number;
    textTransform: string;
    initialized: boolean;
    animationReq: any;
    bandHeight: number;
    transformBand: string;
    textPadding: number[];
    labelFontSize: number;
    bandPath: string;
    constructor(element: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    update(): void;
    paddedValue(value: string): string;
    startCount(): void;
    scaleText(): void;
    setPadding(): void;
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CardComponent, "g[ngx-charts-card]", never, {
    "animations": "animations";
    "label": "label";
    "color": "color";
    "bandColor": "bandColor";
    "textColor": "textColor";
    "x": "x";
    "y": "y";
    "width": "width";
    "height": "height";
    "data": "data";
    "medianSize": "medianSize";
    "valueFormatting": "valueFormatting";
    "labelFormatting": "labelFormatting";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FyZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjZDtcbiAgICBwcml2YXRlIHpvbmU7XG4gICAgY29sb3I6IGFueTtcbiAgICBiYW5kQ29sb3I6IGFueTtcbiAgICB0ZXh0Q29sb3I6IGFueTtcbiAgICB4OiBhbnk7XG4gICAgeTogYW55O1xuICAgIHdpZHRoOiBhbnk7XG4gICAgaGVpZ2h0OiBhbnk7XG4gICAgbGFiZWw6IGFueTtcbiAgICBkYXRhOiBhbnk7XG4gICAgbWVkaWFuU2l6ZTogbnVtYmVyO1xuICAgIHZhbHVlRm9ybWF0dGluZzogYW55O1xuICAgIGxhYmVsRm9ybWF0dGluZzogYW55O1xuICAgIGFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB0ZXh0RWw6IEVsZW1lbnRSZWY7XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICB0cmFuc2Zvcm06IHN0cmluZztcbiAgICBmb3JtYXR0ZWRMYWJlbDogc3RyaW5nO1xuICAgIGNhcmRXaWR0aDogbnVtYmVyO1xuICAgIGNhcmRIZWlnaHQ6IG51bWJlcjtcbiAgICB0ZXh0V2lkdGg6IG51bWJlcjtcbiAgICB0ZXh0Rm9udFNpemU6IG51bWJlcjtcbiAgICB0ZXh0VHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uUmVxOiBhbnk7XG4gICAgYmFuZEhlaWdodDogbnVtYmVyO1xuICAgIHRyYW5zZm9ybUJhbmQ6IHN0cmluZztcbiAgICB0ZXh0UGFkZGluZzogbnVtYmVyW107XG4gICAgbGFiZWxGb250U2l6ZTogbnVtYmVyO1xuICAgIGJhbmRQYXRoOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgY2Q6IENoYW5nZURldGVjdG9yUmVmLCB6b25lOiBOZ1pvbmUpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgcGFkZGVkVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZztcbiAgICBzdGFydENvdW50KCk6IHZvaWQ7XG4gICAgc2NhbGVUZXh0KCk6IHZvaWQ7XG4gICAgc2V0UGFkZGluZygpOiB2b2lkO1xuICAgIG9uQ2xpY2soKTogdm9pZDtcbn1cbiJdfQ==