import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodViewComponent } from './search/food-view/food-view.component';

const routes: Routes = [
  { path: '', component: FoodViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
