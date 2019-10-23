import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AccountPerson } from './common/models/accountPerson';

@Component({
  selector: 'kpa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

    constructor(private _service: AppService) {
      //this.Initialize();  
    }


    public AccountPersons: Array<AccountPerson> = [];
    public title = 'kpaweb1-example';

    ngOnInit(){
       this.Initialize();
    }
    private Initialize(){
      this._service.getAccountPersons().subscribe((accountPersonResponse: Array<AccountPerson>) => {
                this.AccountPersons = accountPersonResponse;
            });
    }
}
