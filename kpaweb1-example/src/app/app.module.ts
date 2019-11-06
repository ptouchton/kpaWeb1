import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './homepage/homePage.component';
import { AboutPageComponent } from './aboutpage/aboutPage.component';
import { GifPageModule } from './gifpage/gifPage.module';
import { AccountPersonComponent } from './accounts/accountPerson.component';

@NgModule({
    declarations: [
        AppComponent,
        AccountPersonComponent,
        HomePageComponent,
        AboutPageComponent
    ],
    imports: [
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {
              dataEncapsulation: false,
              passThruUnknownUrl: true,
              put204: false // return entity after PUT/update
            }
        ),
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        GifPageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
