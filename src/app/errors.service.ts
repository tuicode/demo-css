import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, Event, NavigationError } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as StackTraceParser from 'error-stack-parser';

@Injectable()
export class ErrorsService {

  constructor(
    private injector: Injector,
    private router: Router,
  ) { }


  log(error) {
    // Log the error to the console
    // Send error to server
    const errorWithContext = this.addContextInfo(error);
    // write log to serve g
    console.log('errorWithContext : ', errorWithContext);
    return fakeHttpService.post(errorWithContext);
    //return errorWithContext;
  }

  addContextInfo(error) {
    // All the context details that you want (usually coming from other services; Constants, UserService...)

    // const appId = 'appId';
    // const user = 'userId';
    // const time = new Date().getTime();
    // const id = `${appId}-${user}-${time}`;
    // const location = this.injector.get(LocationStrategy);
    // const url = location instanceof PathLocationStrategy ? location.path() : '';
    // const status = error.status || null;
    // const message = error.message || error.toString();
    // const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);
    // const errorWithContext = { appId, user, time, id, url, status, message, stack };
    return error;
  }

}

class fakeHttpService {
  static post(error): Observable<any> {
    console.log('Error sent to the server: ', error);
    return Observable.of(error);
  }
}