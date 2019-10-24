import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AccountPersonModule } from './accounts/accountPerson.module';
import { HomePageComponent } from './homepage/homePage.component';
import { AboutPageComponent } from './aboutpage/aboutPage.component';
import { GifPageModule } from './gifpage/gifPage.module';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AboutPageComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        AccountPersonModule,
        GifPageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
