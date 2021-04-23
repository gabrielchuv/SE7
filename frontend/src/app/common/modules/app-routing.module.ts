import { AboutPageComponent } from './../../about-page/about-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsPageComponent } from 'src/app/stats-page/stats-page.component';
import { LandingPageComponent } from '../../landing-page/landing-page.component';
import { MainPageComponent } from '../../main-page/main-page.component';
import { PrivacyPolicyPageComponent } from '../../privacy-policy-page/privacy-policy-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },    //full makes sure its goes to exactly search and not search/something
  { path: 'home', component: LandingPageComponent },
  { path: 'stats', component: StatsPageComponent },
  { path: 'main', component: MainPageComponent},
  { path: 'privacy', component: PrivacyPolicyPageComponent},
  { path: 'about', component: AboutPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
