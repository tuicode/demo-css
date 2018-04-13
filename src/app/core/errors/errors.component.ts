import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Message } from 'primeng/components/common/api'

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  public routeParams;
  public data;
  public msgs: Message[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
    var message = this.routeParams.message;
    this.data = this.activatedRoute.snapshot.data;
    console.log('this.routeParams ', this.routeParams);
    console.log('this.data ', this.data);
    // this.msgs = [];
    // this.msgs.push({ severity: 'error', summary: 'title message', detail: message });
    // console.log('msgs  ', this.msgs)
  }
}
