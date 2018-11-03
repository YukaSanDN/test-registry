import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../../model/User/User';
import { resMessage } from '../../model/responeMessage/responeMessage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private hClient: HttpClient
  ) { }

  postAuth(user: User): Promise< resMessage > {
    return this.hClient.post(`test-registry/api/registry`, {
      'login': user.userLogin,
      'password': user.userPassword
    })
      .toPromise() as Promise<resMessage>;

  } // postAuth
}// AuthServicee
