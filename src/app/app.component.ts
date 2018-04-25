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
    this.translateService.setDefaultLang('id');
    this.translateService.use('id');
    //let browserLang = this.translateService.getBrowserLang();
    //this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

  }

  ngOnInit() {

  }
}
