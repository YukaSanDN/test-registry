import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    return this.hClient.post(`/test-registry/api/registry`, {
      'login': user.userLogin,
      'password': user.userPassword,
      'name' : user.userName,
      'lastName': user.userLastName,
      'email': user.userEmail,
      'phone': user.userPhone,
      'birthday': user.userBirthday

    })
      .toPromise() as Promise<resMessage>;

  } // postRegistryUser
}
