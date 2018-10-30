import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../../model/User/User';
import { resMessage } from '../../model/responeMessage/responeMessage';
@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(
    private hClient: HttpClient
  ) { }

  postRegistryUser(user: User): Promise< resMessage > {
    const Body = new HttpParams()
      .set('login' , user.userLogin )
      .set('name' , user.userName )
      .set('lastName', user.userLastName )
      .set('email', user.userEmail )
      .set('phone', user.userPhone )
      // .set('birthday', user.userBirthday )

    return this.hClient.post(`localhost:3000/api/registy`, {
      body : Body
    })
      .toPromise() as Promise<resMessage>;

  } // postRegistryUser
}
