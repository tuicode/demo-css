import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AdminUser } from './../models/adminuser';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { AppSetting } from './../configs/appSetting';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class AuthService extends BaseService {
  baseUrl = '';
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;
  constructor(
    private router: Router,
    private http: Http,

  ) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = "http://localhost:1485/api";
  }

  login(userName, password) {
   
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        this.baseUrl + '/auth/login',
        JSON.stringify({ userName, password }), { headers }
      )
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  // isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }



  // fetchedUser(): Observable<AdminUser[]> {
  //   return this.http.get<AdminUser[]>(AppSetting.API_ENDPOIND + 'user')
  //     .map(response => {

  //       return response;
  //     })
  //     .catch(this.handleError);
  // }

  // logout() {
  //   this.loggedIn.next(false);
  //   localStorage.removeItem('currentUser');
  //   this.router.navigate(['/login']);
  // }
}
