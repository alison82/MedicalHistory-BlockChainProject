import { ElementRef, EventEmitter, Renderer2, NgZone, OnInit, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ScrollerComponent implements OnInit, OnDestroy {
    private ngZone;
    private renderer;
    scrollbarV: boolean;
    scrollbarH: boolean;
    scrollHeight: number;
    scrollWidth: number;
    scroll: EventEmitter<any>;
    scrollYPos: number;
    scrollXPos: number;
    prevScrollYPos: number;
    prevScrollXPos: number;
    element: any;
    parentElement: any;
    onScrollListener: any;
    private _scrollEventListener;
    constructor(ngZone: NgZone, element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setOffset(offsetY: number): void;
    onScrolled(event: MouseEvent): void;
    updateOffset(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScrollerComponent, "datatable-scroller", never, {
    "scrollbarV": "scrollbarV";
    "scrollbarH": "scrollbarH";
    "scrollHeight": "scrollHeight";
    "scrollWidth": "scrollWidth";
}, {
    "scroll": "scroll";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNjcm9sbGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIE5nWm9uZSwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNjcm9sbGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgbmdab25lO1xuICAgIHByaXZhdGUgcmVuZGVyZXI7XG4gICAgc2Nyb2xsYmFyVjogYm9vbGVhbjtcbiAgICBzY3JvbGxiYXJIOiBib29sZWFuO1xuICAgIHNjcm9sbEhlaWdodDogbnVtYmVyO1xuICAgIHNjcm9sbFdpZHRoOiBudW1iZXI7XG4gICAgc2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBzY3JvbGxZUG9zOiBudW1iZXI7XG4gICAgc2Nyb2xsWFBvczogbnVtYmVyO1xuICAgIHByZXZTY3JvbGxZUG9zOiBudW1iZXI7XG4gICAgcHJldlNjcm9sbFhQb3M6IG51bWJlcjtcbiAgICBlbGVtZW50OiBhbnk7XG4gICAgcGFyZW50RWxlbWVudDogYW55O1xuICAgIG9uU2Nyb2xsTGlzdGVuZXI6IGFueTtcbiAgICBwcml2YXRlIF9zY3JvbGxFdmVudExpc3RlbmVyO1xuICAgIGNvbnN0cnVjdG9yKG5nWm9uZTogTmdab25lLCBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgc2V0T2Zmc2V0KG9mZnNldFk6IG51bWJlcik6IHZvaWQ7XG4gICAgb25TY3JvbGxlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgdXBkYXRlT2Zmc2V0KCk6IHZvaWQ7XG59XG4iXX0=