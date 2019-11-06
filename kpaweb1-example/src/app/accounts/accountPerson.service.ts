import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from '../common/services/serviceBase';
import { AccountPerson } from '../common/models/accountPerson';

@Injectable()
export class AccountPersonService extends ServiceBase {

   url = 'api/accounts';  // URL to web api
   constructor(http: HttpClient) {
          super(http);
    }

    public getAccountPersons(): Observable<Array<AccountPerson>> {

      return this._http.get<Array<AccountPerson>>(this.url);
    }

    public updateAccountPerson(accountPerson: AccountPerson): Observable<AccountPerson> {
      return this._http.put<AccountPerson>(`${this.url}`, accountPerson);
    }
}
