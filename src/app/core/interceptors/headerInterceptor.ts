import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/do';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    returnUrl: string;
    constructor(
        private injector: Injector,
        private activatedRoute: ActivatedRoute
    ) {

        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleAccess(request, next);
    }

    private handleAccess(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const token = localStorage.getItem('auth_token');
        let changedRequest = request;
        const router = this.injector.get(Router);
        // HttpHeader object immutable - copy values
        const headerSettings: { [name: string]: string | string[]; } = {};

        for (const key of request.headers.keys()) {
            headerSettings[key] = request.headers.getAll(key);
        }
        if (token) {
            headerSettings['Authorization'] = 'Bearer ' + token;
        }
        headerSettings['Content-Type'] = 'application/json';
        headerSettings['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        headerSettings['Access-Control-Allow-Headers'] = 'X-Requested-With,content-type,**Authorization**';
        const newHeader = new HttpHeaders(headerSettings);

        changedRequest = request.clone({
            headers: newHeader
        });
        return next.handle(changedRequest).do((event: HttpEvent<any>) => {
            if (event instanceof HttpHeaderResponse) {
                debugger;
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    localStorage.removeItem('auth_token');
                    router.navigate(['/login']);
                    //this.auth.collectFailedRequest(request);
                }
            }
        });
    }

}