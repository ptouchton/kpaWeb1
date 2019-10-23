﻿import { Http, Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';

export class ServiceBase {
    constructor(protected _http: Http) { }

        protected extractData(res: Response) {
        const body = res.status === 200 ? res.json() : null;
        return body;
    }

    protected handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return throwError(errMsg);
    }
}
