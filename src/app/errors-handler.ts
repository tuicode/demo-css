import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import * as StackTraceParser from 'error-stack-parser';
import { ErrorsService } from './errors.service';

@Injectable()
export class ErrorsHandle implements ErrorHandler {

    constructor(
        private injector: Injector,
    ) {

    }
    handleError(error: Error | HttpErrorResponse) {
        const router = this.injector.get(Router);
        const errorsService = this.injector.get(ErrorsService);
        //router.navigate(['/error'], { queryParams: {error: error} });
        console.log('what happen : ', error);
        errorsService.log(error).subscribe(errorWithContextInfo => {
            router.navigate(['/error'], { queryParams: errorWithContextInfo });
        })

    }
}