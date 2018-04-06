import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public isLoader: boolean;
  // @ViewChild('widgetParentDiv') loaderDiv:ElementRef;

  constructor(private loaderService: LoaderService,
    private cd: ChangeDetectorRef) {
    this.isLoader = false;
  }

  ngOnInit() {
    this.loaderService.loaderStatus.subscribe((val: boolean) => {
      this.isLoader = val;
    });
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked ')
  }
}
