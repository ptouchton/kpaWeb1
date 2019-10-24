import { Http } from '@angular/http';
import { HttpUrlEncodingCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceBase } from '../common/services/serviceBase';
import { AccountPerson } from '../common/models/accountPerson';

@Injectable()
export class AccountPersonService extends ServiceBase {

   constructor(private http: HttpClient) {
          super(http);
    }

    public getAccountPersons(): Observable<Array<AccountPerson>> {

      return this._http.get<Array<AccountPerson>>('././assets/sample.json');
    }
}
