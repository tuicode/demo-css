import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { NavItem } from './../../models/NavItem';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavService {

  private navItems: NavItem[] = [];
  constructor(

  ) {

  }

  getAllMenu(): any {

    this.navItems = [
      {
        displayName: 'OMS Menu',
        iconName: 'close',
        className: '',
        children: [
          {
            displayName: 'ASN Entry',
            iconName: 'group',
            children: [
              {
                displayName: 'Level 2',
                iconName: 'person',
                route: 'michael-prentice',
                children: [
                  {
                    displayName: 'Level 3',
                    iconName: 'star_rate',
                    route: 'material-design',
                    children: []
                  }
                ]
              },

            ]
          },
        ],
      },
      {
        displayName: 'Outbound',
        iconName: 'close',
        children: []
      }
    ];
    return this.navItems;
  }

}
