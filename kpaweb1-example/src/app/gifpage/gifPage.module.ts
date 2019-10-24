import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GifPageComponent } from './gifPage.component';
import { GifPageService } from './gifPage.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        GifPageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [GifPageService, HttpClient]
})
export class GifPageModule { }
