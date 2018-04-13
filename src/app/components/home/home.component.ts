import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() changeTitle: EventEmitter<string> = new EventEmitter<string>();
  public title: string = 'Home';
  constructor() { }

  ngOnInit() {
   
    this.changeTitle.emit(this.title);
  }
}
