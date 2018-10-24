import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import {PasswordConfirmValidator} from '../../Validators/PasswordValidator';
import { stringObject} from '../../model/stringObject/stringObject';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  public strObject: stringObject = new stringObject();

  public nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]); // nameFormControl

  public lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]); // lastNameFormControl

  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z  0-9]{4,20}$/i),
  ]); // loginFormControl

  public  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]); // emailFormControl

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]); // passwordFormControl


  public passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.strObject )
  ]); // passwordConfirmFormControl
  constructor(private registrationDialog: MatDialog) {
    this.strObject.str = this.passwordFormControl.value;
  } // constructor

  ngOnInit() {


  } // ngOnInit

  openDialog( msg: string ) {

    this.registrationDialog.open(AuthModalComponent, {
      data: {
        message: msg
      }
    });
  }// openDialog

  checkAllFields(): boolean{

    return this.nameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.loginFormControl.valid &&
      this.emailFormControl.valid &&
      this.passwordFormControl.valid &&
      this.passwordConfirmFormControl.valid;

  }// checkAllFields

  registry() {


    if ( this.checkAllFields() === true ){
      // AJAX REGISTER REQUEST
    }// if
    else {
      this.openDialog('Не все поля заполнены корректно');
    }// else

  }// registry

}
