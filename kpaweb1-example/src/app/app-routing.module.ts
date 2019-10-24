import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPersonComponent } from './accounts/accountPerson.component';
import { HomePageComponent } from './homepage/homePage.component';
import { AboutPageComponent } from './aboutpage/aboutPage.component';
import { GifPageComponent } from './gifpage/gifPage.component';

const routes: Routes = [
{ path: 'aboutPage', component: AboutPageComponent },
{ path: 'homePage', component: HomePageComponent },
{ path: 'accountPerson', component: AccountPersonComponent },
{ path: '',   redirectTo: '/homePage', pathMatch: 'full' },
{ path: 'gifPage', component: GifPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
