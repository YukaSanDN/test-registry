'use strict';

export class User{
  get userPhoto(): string {
    return this._userPhoto;
  }

  set userPhoto(value: string) {
    this._userPhoto = value;
  }
  get userBirthday(): Date {
    return this._userBirthday;
  }

  set userBirthday(value: Date) {
    this._userBirthday = value;
  }
  get userPassword(): string {
    return this._userPassword;
  }

  set userPassword(value: string) {
    this._userPassword = value;
  }
  get userPhone(): string {
    return this._userPhone;
  }

  set userPhone(value: string) {
    this._userPhone = value;
  }
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
  private _userPhone: string;
  private _userPassword: string;
  private _userBirthday: Date;
  private _userPhoto: string;

}

