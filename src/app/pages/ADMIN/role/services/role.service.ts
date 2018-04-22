import { Injectable, OnInit } from '@angular/core';
import { Role } from './../models/role';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from './../../../../core/configs/appSetting';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../../../../shared/services/base.service';


@Injectable()
export class RoleService implements OnInit {

  Role: Role[] = [];
  constructor(
    private http: HttpClient,
  ) {
    //super();
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
    })
  }

}
