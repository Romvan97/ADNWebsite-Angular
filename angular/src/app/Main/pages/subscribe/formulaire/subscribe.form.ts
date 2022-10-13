import { AbstractControl, AbstractControlOptions, ValidationErrors, Validators as v } from "@angular/forms";
import { BirthDateValidators } from "../validators/birthdate.validators";
import { ComparePassword } from "../validators/password.validators";

export const subscribe_Form = {
    
    'subscribeEmail': [,[v.required, v.maxLength(90), v.minLength(1), v.email]],
    'subscribePassword': [,[v.required, v.maxLength(90), v.minLength(5)]],
    'subscribePasswordConfirm': [,[v.required, v.maxLength(90), v.minLength(5), ComparePassword.passControl('subscribePassword')]],
    'subscribefirstName': [,[v.required, v.maxLength(90), v.minLength(5)]],
    'subscribelastName': [,[v.required, v.maxLength(90), v.minLength(5)]],
    'subscribebirthDate': [,[v.required, BirthDateValidators.notFutur(new Date())]],
    'subscribeGender': ['homme' ,[v.required, ]],
    'subscribeRememberMe': [],

}


