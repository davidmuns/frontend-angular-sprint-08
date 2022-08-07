import { IUser } from './../../models/iuser';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFormGroup: FormGroup;
  users: IUser[];
  constructor(private userService: UserService) {
    this.users = [];
    this.loginFormGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

  }

  ngOnInit(): void {
    this.userService.getUsers$().subscribe(users => {
      this.users = users;
    })
  }

  public onSubmit() {
    let emailExists = false;
    const tempUser: IUser = this.loginFormGroup.value;
    console.log('email: ', tempUser.email);

    console.log(this.users);

    this.users.forEach(user => {
      if (tempUser.email === user.email) {
        emailExists = true;
      }
    })

    if (emailExists) {
      alert('user exists')
    } else {
      alert('user does not exist')
    }


  }

}
