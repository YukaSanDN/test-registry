import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User/User';
import {UserService} from '../../service/userService/user-service.service';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {


  public user: User = new User();
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  async getUser(){
    const getUser = await this.userService.postUserTokenAndGetUser();
    if ( getUser.code === 200){
      this.user = <User>getUser.data;
      console.log(this.user);
    }
  }

}
