import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export class ComparePassword {

    static passControl(matchTo: string) : ValidatorFn { 
        return (control: AbstractControl) => {
            console.log(control.parent && control.value === control.parent.controls[matchTo].value)
            return control.parent && control.value === control.parent.controls[matchTo].value ? null : {match : false};
          };
    }

}