import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CompareValidators {
    static greaterOrEqualThan(other: AbstractControl|null, propName: string|null = null) : ValidatorFn { 
        return (control: AbstractControl) => {
            if(!control || !other || !control?.value || !other?.value) {
                return null;
            }
            if(control.value >= other.value) {
                return null;
            } else {
                return { greaterOrEqualThan: { smallProp: propName??'' } };
            }
        }
    }
}