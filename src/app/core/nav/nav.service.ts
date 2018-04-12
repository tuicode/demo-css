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
  ) {
    super();
  }

  fetchedAllMenu(): Observable<NavItem[]> {

    return this.http.get(AppSetting.API_ENDPOIND + '/Menu')
      .map(response => {
        return this.list_to_tree(response)
      })
      .catch(this.handleError);
  }

  list_to_tree(list) {

    var map = {}, node, roots = [], i;
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== "0") {

        node.isChild = true;
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {

        if (!node.isChild)
          roots.push(node);
      }
    }
    return roots;
  }


}
