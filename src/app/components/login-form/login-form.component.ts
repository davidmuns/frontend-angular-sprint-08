import { IUser } from './../../models/iuser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  loginFormGroup: FormGroup;
  users: IUser[];

  // constructor(private userService: UserService) {
  //   this.users = [];
  //   this.loginFormGroup = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl()
  //   });
  // }

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.users = [];
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.userService.getUsers$().subscribe(users => {
      this.users = users;
    })
  }

  public onSubmit() {
    let emailExists = false;
    const newUser: IUser = this.loginFormGroup.value;
    this.users.forEach(data => {
      if (newUser.email === data.email && newUser.password === data.password) {
        emailExists = true;
      }
    })

    if (emailExists) {
      this.loginFormGroup.reset();
      this.closebutton.nativeElement.click();
    } else {
      alert('this user does not exist')
      this.loginFormGroup.reset();
    }


  }

}
