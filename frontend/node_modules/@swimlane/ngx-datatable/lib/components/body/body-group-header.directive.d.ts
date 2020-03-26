import { EventEmitter, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DatatableGroupHeaderDirective {
    /**
     * Row height is required when virtual scroll is enabled.
     */
    rowHeight: number | ((group?: any, index?: number) => number);
    _templateInput: TemplateRef<any>;
    _templateQuery: TemplateRef<any>;
    readonly template: TemplateRef<any>;
    /**
     * Track toggling of group visibility
     */
    toggle: EventEmitter<any>;
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group: any): void;
    /**
     * Expand all groups
     */
    expandAllGroups(): void;
    /**
     * Collapse all groups
     */
    collapseAllGroups(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatatableGroupHeaderDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DatatableGroupHeaderDirective, "ngx-datatable-group-header", never, {
    "rowHeight": "rowHeight";
    "_templateInput": "template";
}, {
    "toggle": "toggle";
}, ["_templateQuery"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1ncm91cC1oZWFkZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImJvZHktZ3JvdXAtaGVhZGVyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0YXRhYmxlR3JvdXBIZWFkZXJEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIFJvdyBoZWlnaHQgaXMgcmVxdWlyZWQgd2hlbiB2aXJ0dWFsIHNjcm9sbCBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIHJvd0hlaWdodDogbnVtYmVyIHwgKChncm91cD86IGFueSwgaW5kZXg/OiBudW1iZXIpID0+IG51bWJlcik7XG4gICAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgX3RlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgcmVhZG9ubHkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogVHJhY2sgdG9nZ2xpbmcgb2YgZ3JvdXAgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoZSBleHBhbnNpb24gb2YgYSBncm91cFxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZEdyb3VwKGdyb3VwOiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEV4cGFuZCBhbGwgZ3JvdXBzXG4gICAgICovXG4gICAgZXhwYW5kQWxsR3JvdXBzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ29sbGFwc2UgYWxsIGdyb3Vwc1xuICAgICAqL1xuICAgIGNvbGxhcHNlQWxsR3JvdXBzKCk6IHZvaWQ7XG59XG4iXX0=