import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../../model/User/User';
import { resMessage } from '../../model/responeMessage/responeMessage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private hClient: HttpClient
  ) { }// constructor

  postUserTokenAndGetUser(): Promise< resMessage > {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.hClient.post(`/test-registry/api/user`,{
      'token': token
    })
      .toPromise() as Promise<resMessage>;

  } // postRegistryUser
}
