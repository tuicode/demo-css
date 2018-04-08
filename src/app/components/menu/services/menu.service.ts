import { Injectable } from '@angular/core';
import { AppSetting } from './../../../configs/appSetting';
import { Menu } from './../models/menu.class';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from './../../../shared/services/logger.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../../../shared/services/base.service';

@Injectable()
export class MenuService extends BaseService {
  
  constructor(
    private http: HttpClient,
    private loggerService: LoggerService
  ) {
    super();
  }

  getMenuList(): Observable<Menu[]> {
    return this.http.get<Menu[]>(AppSetting.API_ENDPOIND + '/Menu')
      .map(response => { return response; })
      .catch(this.handleError);
  }
}


