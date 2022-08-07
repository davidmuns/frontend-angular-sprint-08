import { IUser } from './../../models/iuser';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers$().subscribe(
      users => {
        this.users = users;
      }
    )
  }

}
