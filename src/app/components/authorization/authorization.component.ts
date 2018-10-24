import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z  0-9]{4,20}$/i),
  ]); // loginFormControl

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]); // passwordFormControl

  constructor() { }

  ngOnInit() {
  }

}
