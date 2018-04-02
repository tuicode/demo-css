import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {User} from './../models/user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router
  ) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user: User){
    if (user.username !== '' && user.password != '' ){
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
