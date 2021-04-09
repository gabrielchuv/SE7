import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../../main-page/main-page.component';
import { SearchBarComponent } from '../../main-page/search-bar/search-bar.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },    //full makes sure its goes to exactly search and not search/something
  { path: 'main', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
