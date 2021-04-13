import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FoodViewComponent } from '../../search/food-view/food-view.component';
import { LandingPageComponent} from '../../landing-page/landing-page.component';
import { MainPageComponent } from './../../main-page/main-page.component';
import { SearchBarComponent} from './../../main-page/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodViewComponent,
    LandingPageComponent,
    MainPageComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
