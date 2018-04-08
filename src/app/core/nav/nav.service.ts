import { Injectable } from '@angular/core';
import { NavItem } from './../../models/NavItem';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from './../../configs/appSetting';
import { LoggerService } from './../../shared/services/logger.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../../shared/services/base.service';


@Injectable()
export class NavService extends BaseService {

  constructor(
    private http: HttpClient,
    private loggerService: LoggerService
  ) {
    super();
  }

  fetchedAllMenu(): Observable<NavItem[]> {

    return this.http.get<NavItem[]>(AppSetting.API_ENDPOIND + '/Menu')
      .map(response => { return response; })
      .catch(this.handleError);
  }  
}
