import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[];
  private usersSubject$: Subject<IUser[]>;
  userExist: boolean;

  constructor() {
    this.users = [];
    this.usersSubject$ = new Subject();
    this.userExist = false;
  }

  public getUserValidation(user: IUser): boolean {
    let checks = 0
    this.users.forEach(data => {
      if (user.email === data.email && user.password === data.password) {
        checks++
      }
    })
    this.userExist = checks != 0 ? true : false;
    if (this.userExist === false) alert('Invalid email or password.')
    return this.userExist;
  }

  public addUser(user: IUser) {
    let emailExists: boolean = false;
    this.users.forEach(item => {
      if (item.email === user.email) {
        emailExists = true;
      }
    })
    if (emailExists === false) {
      this.users.push(user);
      // changes register
      this.usersSubject$.next(this.users);
      this.userExist = false;
    } else {
      alert(`email ${user.email} already exists`)
      this.userExist = true;
    }
  }
  public getUsers$(): Observable<IUser[]> {
    // event emiter
    return this.usersSubject$.asObservable();
  }
}
