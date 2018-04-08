import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AdminUser } from './../core/login/models/adminuser';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from './../configs/appSetting';
import { LoggerService } from './../shared/services/logger.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../shared/services/base.service';

@Injectable()
export class AuthService extends BaseService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private http: HttpClient,
    private loggerService: LoggerService
  ) {
    super();
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  // login(user: User) {

  //   if (user.username !== '' && user.password != '') {


  //     localStorage.setItem('currentUser', JSON.stringify(user));
  //     this.loggedIn.next(true);
  //     this.router.navigate(['/']);
  //   }
  // }

  fetchedUser(): Observable<AdminUser[]> {

    return this.http.get<AdminUser[]>(AppSetting.API_ENDPOIND + 'user')
      .map(response => { return response; })
      .catch(this.handleError);
  }

  // logout() {
  //   this.loggedIn.next(false);
  //   localStorage.removeItem('currentUser');
  //   this.router.navigate(['/login']);
  // }
}
