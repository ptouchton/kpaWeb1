import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountPersonComponent } from './accountPerson.component';
import { AccountPersonService } from './accountPerson.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AccountPersonComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [AccountPersonService, HttpClient ]
})
export class AccountPersonModule { }
