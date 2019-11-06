import { Component, OnInit } from '@angular/core';
import { AccountPersonService } from './accountPerson.service';
import { AccountPerson } from '../common/models/accountPerson';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kpa-account-person',
  providers: [ AccountPersonService ],
  templateUrl: './accountPerson.component.html'
})
export class AccountPersonComponent implements OnInit {
    public AccountPersons: Array<AccountPerson> = [];
    public submitted = false;
    public accountPersonForm: NgForm;

    constructor(private _service: AccountPersonService) {
    }

    ngOnInit() {

       this.onInitialize();

    }

    private onInitialize() {

      if (this.submitted) {
        return;
        }

      this._service.getAccountPersons().subscribe((accountPersonResponse: Array<AccountPerson>) => {
                this.AccountPersons = accountPersonResponse;
            });
    }

    public updatePerson(accountPerson: AccountPerson) {
      this._service.updateAccountPerson(accountPerson).subscribe(res => {
        console.log(`Updated: ${res.id}`);
      });
    }

    public onLastNameChanged() {
    }

    public onEmailAddressChanged() {
    }


    public onSubmit(formValid: boolean): boolean {
        this.submitted = true;

        // stop here if form is invalid
        if (!formValid) {
          return false;
        }

    }
}


