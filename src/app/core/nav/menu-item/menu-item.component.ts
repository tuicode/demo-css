import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './../../../models/NavItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  // @Input() items: NavItem[];
   private _items: NavItem[];
  //@ViewChild('childMenu') public childMenu;
  constructor() { }

  ngOnInit() {
    // if (this.items.length <= 0) {
    //   throw new Error('items is array');
    // }
  }


  @Input('items')
  set items(items: NavItem[]) {
    console.log('items ============= :', items);
    this._items = items;
  }

  get items(){
    return this._items;
  }
}
