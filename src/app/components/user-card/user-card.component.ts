import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {


  public user: User = new User();
  constructor() {

    this.user.userLogin = 'Вася';
    this.user.userName = 'Давид';
    this.user.userLastName = 'Марковичь';
    this.user.userEmail = 'david78@gmail.com';

    this.user.dateregistration = '2018 12 09 ';
  }

  ngOnInit() {
  }

}
