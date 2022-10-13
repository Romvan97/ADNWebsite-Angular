import { AbstractControl, ValidatorFn } from "@angular/forms";

export class BirthDateValidators {
    static notFutur(date: Date) : ValidatorFn { 
        return (control: AbstractControl) => {
            if(!control.value) {
                return null;
            }
            
            
            return ((date > new Date()) && (date < new Date(new Date().setFullYear(1920)))) ? { notfutur: { requiredDate: date } } : null
        }
    }
}