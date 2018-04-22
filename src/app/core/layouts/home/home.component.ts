import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AppService } from './../../../app.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //@Output('title') changeTitle: EventEmitter<string> = new EventEmitter<string>();
  public title: string = 'Home';
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

    this.appService.childSaidPageTitle$.subscribe(mess => {
      this.title = mess;
    })
  }

  getPageTitle(value) {

    console.log('value============>', value);
    //this.title = value;
  }
}
