import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ServiceBase } from './common/services/serviceBase';
import { AccountPerson } from './common/models/accountPerson';

@Injectable()
export class AppService extends ServiceBase {

   constructor(private http: Http){
          super(http); 
    }

    public getAccountPersons(): Observable<Array<AccountPerson>> {

      return this._http.get("././assets/sample.json")
                .map(this.extractData)
    }
}
