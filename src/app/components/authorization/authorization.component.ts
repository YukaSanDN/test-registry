import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../model/User/User';
import { AuthService} from '../../service/authService/auth-service.service';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {


  public user: User = new User();
  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z  0-9]{4,20}$/i),
  ]); // loginFormControl

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]); // passwordFormControl

  constructor(
    private authDialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }// ngOnInit

  openDialog( msg: string , path: string) {

    this.authDialog.open(AuthModalComponent, {
      data: {
        message: msg,
        pathRedirect: path
      }
    });
  }// openDialog

  checkAllFields(): boolean{

    return this.loginFormControl.valid &&
      this.passwordFormControl.valid;
  }// checkAllFields

 async authoriza(){
    if ( this.checkAllFields() === true){
      const respone = await this.authService.postAuth(this.user);

      if ( respone.code === 200){
        localStorage.setItem('token', respone.data);

        console.log(JSON.parse(localStorage.getItem('token')));
        this.openDialog(
          respone.message,
          `test-registry/user` );

      }
      else{
        this.openDialog(
          <string>respone.message ,
          null);
      }// else
      console.log(respone);
    }// if

    else{
      this.openDialog(
        'Не все поля заполнены корректно',
        null);
    }// else
  }// authoriza
}
