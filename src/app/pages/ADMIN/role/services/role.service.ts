import { Injectable, OnInit } from '@angular/core';
import { Role } from './../models/role';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from './../../../../core/configs/appSetting';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../../../../shared/services/base.service';
import { ValidationService } from './../../../../shared/validation/validation.service';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class RoleService extends ValidationService implements OnInit {

  Role: Role[] = [];
  constructor(
    private http: HttpClient,
  ) {
    super(http);
  }

  ngOnInit() { }
  // fetchedAllRole(): Observable<Role[]> {

  //   return this.http.get<Observable<Role[]>>(AppSetting.API_ENDPOIND + '/role').map(response => {
  //     return response;
  //   })
  //     .catch(this.handleError)
  // }

  fetchedAllRole(): Observable<any> {
    return this.http.get<Observable<Role[]>>(AppSetting.API_ENDPOIND + '/role').map(response => {
      return response;
    });
  }

  // getSchema() {
  //   return this.getJsonSchema('http://localhost:1486/api/Roles/GetSchema').sub(response => {
  //     return response;
  //   });
  // }
}
