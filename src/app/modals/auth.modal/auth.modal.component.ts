import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthData } from '../../model/modal.data/auth.data';

@Component ({
  selector: 'app-auth-modal',
  templateUrl: './auth.modal.component.html',
  styleUrls: ['./auth.modal.component.css']
})
export class AuthModalComponent implements OnInit {


  constructor (
    public dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) public authData: AuthData
  ) {} // constructor

  closeDialog(): void {
    this.dialogRef.close();
  } // closeDialog

  ngOnInit() {} // ngOnInit

}
