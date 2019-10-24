import { Component } from '@angular/core';
import { AccountPersonService } from './accountPerson.service';
import { AccountPerson } from '../common/models/accountPerson';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kpa-account-person',
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

    public onFirstNameChanged() {
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


