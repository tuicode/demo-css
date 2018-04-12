import { Injectable } from '@angular/core';
import { Role } from './../models/role';
import { Observable } from 'rxjs/observable';
import { AppSetting } from './../../../configs/appSetting';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../../../shared/services/base.service';


@Injectable()
export class RoleService extends BaseService {

  Role: Role[] = [];
  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  fetchedAllRole(): Observable<Role[]> {
    return this.http.get<Observable<Role[]>>(AppSetting.API_ENDPOIND + '/role').map(response => {
      return response;
    })
      .catch(this.handleError)
  }
}
