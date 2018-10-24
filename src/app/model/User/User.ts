'use strict';

export class User{
  get dateregistration(): string {
    return this._dateregistration;
  }

  set dateregistration(value: string) {
    this._dateregistration = value;
  }
  get userEmail(): string {
    return this._userEmail;
  }

  set userEmail(value: string) {
    this._userEmail = value;
  }
  get userLogin(): string {
    return this._userLogin;
  }

  set userLogin(value: string) {
    this._userLogin = value;
  }
  get userLastName(): string {
    return this._userLastName;
  }

  set userLastName(value: string) {
    this._userLastName = value;
  }
  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  private _dateregistration: string;
  private _userEmail: string;
  private _userName: string;
  private _userLastName: string;
  private _userLogin: string;

}

