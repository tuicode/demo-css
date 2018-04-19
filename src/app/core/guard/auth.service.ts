import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AdminUser } from './../models/adminuser';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { AppSetting } from './../configs/appSetting';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class AuthService extends BaseService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private http: HttpClient,

  ) {
    super();
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  fetchedUser(): Observable<AdminUser[]> {
    return this.http.get<AdminUser[]>(AppSetting.API_ENDPOIND + 'user')
      .map(response => {
        debugger;
        return response;
      })
      .catch(this.handleError);
  }

  // logout() {
  //   this.loggedIn.next(false);
  //   localStorage.removeItem('currentUser');
  //   this.router.navigate(['/login']);
  // }
}
