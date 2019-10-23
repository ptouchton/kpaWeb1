import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AccountPerson } from './common/models/accountPerson';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kpa-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  

    constructor(private _service: AppService) {
      //this.Initialize();  
    }


    public AccountPersons: Array<AccountPerson> = [];
    public title = 'kpaweb1-example';

    public submitted = false;
    public accountPersonForm: NgForm;

    ngOnInit(){
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

    public onSubmit(form: NgForm) : boolean {
        this.submitted = true;

        // stop here if form is invalid
        if (this.accountPersonForm.invalid) {
          return false;
        }
    }
}


