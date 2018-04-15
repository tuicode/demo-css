import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AppService {

  // private parentSaySource = new Subject<string>();
  private childSaySource = new Subject<string>();

  constructor() { }
  // parentSaid$ = this.parentSaySource.asObservable();
  childSaidPageTitle$ = this.childSaySource.asObservable();
  // parentSay(message: string) {
  //   this.parentSaySource.next(message);
  // }

  childSayPageTitle(message: string) {
    this.childSaySource.next(message);
  }

}
