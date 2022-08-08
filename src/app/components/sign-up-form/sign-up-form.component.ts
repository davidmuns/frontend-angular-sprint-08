import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  signUpFormGroup: FormGroup;

  // constructor(private userService: UserService) {
  //   this.signUpFormGroup = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl()
  //   });
  // }

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.signUpFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void { }

  public onSubmit() {
    this.userService.addUser(this.signUpFormGroup.value);
    if (this.userService.isUserValid) {
      this.signUpFormGroup.reset();
      this.closebutton.nativeElement.click();
    }
  }
}
