import { Component, OnInit, Input } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import {PasswordConfirmValidator} from '../../Validators/PasswordValidator';
import { stringObject} from '../../model/stringObject/stringObject';
import { RegistryService } from '../../service/registryService/registry-service.service';
import {User} from '../../model/User/User';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryComponent implements OnInit {
  public user: User = new User();

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

  public dataFormControl = new FormControl('', [
    Validators.required,
  ]); // dataFormControl

  public  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]); // emailFormControl

  public  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/)
  ]); // phoneFormControl

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]); // passwordFormControl


  public passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.strObject )
  ]); // passwordConfirmFormControl

  constructor(
    private registrationDialog: MatDialog,
    private registryService: RegistryService
  ) {
    this.strObject.str = this.passwordFormControl.value;
  } // constructor

  ngOnInit() {

  } // ngOnInit

  focuse(event){
    console.log(event);
  }
  /*countryModelChange(event){

    console.log(event);
  }*/

  openDialog( msg: string , path: string) {

    this.registrationDialog.open(AuthModalComponent, {
      data: {
        message: msg,
        pathRedirect: path
      }
    });
  }// openDialog

  checkAllFields(): boolean{

    return this.nameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.loginFormControl.valid &&
      this.emailFormControl.valid &&
      this.phoneFormControl.valid &&
      this.passwordFormControl.valid &&
      this.passwordConfirmFormControl.valid;


  }// checkAllFields

 async registry() {


    if ( this.checkAllFields() === true ){
      const respone = await this.registryService.postRegistryUser(this.user);

      if ( respone.code === 200){
        this.openDialog(
          respone.message,
           `test-registry/authorization` );

      }
      else{
        this.openDialog(
          <string>respone.message ,
          null);
      }


      console.log(respone);
    }// if
    else {
      this.openDialog(
        'Не все поля заполнены корректно',
        null);
    }// else

  }// registry

}
