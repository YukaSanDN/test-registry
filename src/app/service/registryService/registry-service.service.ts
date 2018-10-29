import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../../model/User/User';
import { resMessage } from '../../model/responeMessage/responeMessage';
@Injectable({
  providedIn: 'root'
})
export class RegistryServiceService {

  constructor(
    private hClient: HttpClient
  ) { }

  postRegistryUser(user: User): Promise< resMessage > {
    const Body = new HttpParams()
      .set('userLogin' , user.userLogin )
      .set('userName' , user.userName)
      .set('userLastName', user.userLastName);

    return this.hClient.post(`localhost:3000/api/registy`, {
      body : Body
    })
      .toPromise() as Promise<resMessage>;

  } // postRegistryUser
}
