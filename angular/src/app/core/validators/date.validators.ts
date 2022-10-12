import { AbstractControl, ValidatorFn } from "@angular/forms";

export class DateValidators {
    static notBefore(date: Date) : ValidatorFn { 
        return (control: AbstractControl) => {
            if(!control.value) {
                return null;
            }
            return date < control.value ? { notBefore: { requiredDate: date } } : null
        }
    }
}