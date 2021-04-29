import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LandingPageComponent} from '../../landing-page/landing-page.component';
import { MainPageComponent } from '../../main-page/main-page.component';
import { SearchBarComponent} from '../../main-page/search-bar/search-bar.component';
import { FooterComponent } from '../../footer/footer.component';
import { StatsPageComponent} from "../../stats-page/stats-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoginOverlayComponent} from "../../landing-page/login-overlay/login-overlay.component";
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {PrivacyPolicyPageComponent} from "../../privacy-policy-page/privacy-policy-page.component";
import { AboutPageComponent } from '../../about-page/about-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainPageComponent,
    SearchBarComponent,
    LoginOverlayComponent,
    PrivacyPolicyPageComponent,
    FooterComponent,
    AboutPageComponent,
    StatsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatExpansionModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginOverlayComponent, AppComponent],
})
export class AppModule { }
