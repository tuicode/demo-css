import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infolog demo';
  constructor(private translateService: TranslateService) {
    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    //let browserLang = this.translateService.getBrowserLang();

    //this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

  }

  ngOnInit() {
    var obj = { a: 1 };
    var copy = Object.assign({}, {a :1},{b: 2, c:3});
    console.log(copy); // { a: 1 }
  }
}
