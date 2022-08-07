import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[];
  private usersSubject$: Subject<IUser[]>;
  constructor() {
    this.users = [];
    this.usersSubject$ = new Subject();
  }

  public addUser(user: IUser) {
    let emailExists: boolean = false;
    this.users.forEach(item => {
      if (item.email === user.email) {
        emailExists = true;
      }
    })

    if (!emailExists) {
      this.users.push(user);
      // changes register
      this.usersSubject$.next(this.users);

    } else {
      alert(`email ${user.email} already exists`)
    }

  }
  public getUsers$(): Observable<IUser[]> {
    // event emiter
    return this.usersSubject$.asObservable();
  }
}
