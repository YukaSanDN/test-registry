'use strict';

import {AbstractControl, ValidatorFn} from '@angular/forms';
import {stringObject} from '../model/stringObject/stringObject';
export function PasswordConfirmValidator( pass: stringObject ): ValidatorFn {


  return (control: AbstractControl): {[key: string]: any} | null => {

    const validatorErrorObject = {
      'Confirmation': {
        value: control.value,
        errorMessage: 'Пароли не совпадают'
      }
    };
    const checkConfirm = pass.str === control.value;

    return checkConfirm ? null : validatorErrorObject ;

  };
}
