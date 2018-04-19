import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api'

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {

  public msgs: Message[] = [];
  constructor() { }

  ngOnInit() {
  }

  handleErrorMessage() {
    this.showError('test message')
  }

  showError(msg) {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: msg });
  }

}
