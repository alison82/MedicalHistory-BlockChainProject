import { __decorate } from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equalTo } from './validator';
var EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = /** @class */ (function () {
    function EqualToValidator() {
    }
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = equalTo(this.equalTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    __decorate([
        Input()
    ], EqualToValidator.prototype, "equalTo", void 0);
    EqualToValidator = __decorate([
        Directive({
            selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
            providers: [EQUAL_TO_VALIDATOR]
        })
    ], EqualToValidator);
    return EqualToValidator;
}());
export { EqualToValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lcXVhbC10by9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUF3RCxNQUFNLGdCQUFnQixDQUFDO0FBRXJHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdEMsSUFBTSxrQkFBa0IsR0FBUTtJQUM5QixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRjtJQUFBO0lBWUEsQ0FBQztJQVBDLG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxDQUFrQjtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVZRO1FBQVIsS0FBSyxFQUFFO3FEQUFzQjtJQURuQixnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNFQUFzRTtZQUNoRixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUNoQyxDQUFDO09BQ1csZ0JBQWdCLENBWTVCO0lBQUQsdUJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGVxdWFsVG8gfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEVRVUFMX1RPX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFRvVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlcXVhbFRvXVtmb3JtQ29udHJvbE5hbWVdLFtlcXVhbFRvXVtmb3JtQ29udHJvbF0sW2VxdWFsVG9dW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbRVFVQUxfVE9fVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVhbFRvVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQge1xuICBASW5wdXQoKSBlcXVhbFRvOiBGb3JtQ29udHJvbDtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBlcXVhbFRvKHRoaXMuZXF1YWxUbyk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG59XG4iXX0=