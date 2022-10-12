import { AbstractControl, AbstractControlOptions, ValidationErrors, Validators as v } from "@angular/forms";

export const login_Form = {
    'loginEmail': [,[v.required, v.maxLength(90), v.minLength(1)]],
    'loginPassword': [,[v.required, v.maxLength(90), v.minLength(5)]],
    'loginRememberMe': [],
}

