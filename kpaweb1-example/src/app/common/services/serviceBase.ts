import { HttpUrlEncodingCodec, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export class ServiceBase {
    constructor(protected _http: HttpClient) { }

    protected handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return throwError(errMsg);
    }
}
