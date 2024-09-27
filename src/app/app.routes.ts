import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import {ProductsComponent} from "./Food-Facts/products/products.component";
import {NgModule} from "@angular/core";
import {NutritionalValueComponent} from "./Food-Facts/nutritional-value/nutritional-value.component";
import {NutritionistComponent} from "./Food-Facts/nutritionist/nutritionist.component";
import {ProfileComponent} from "./public/pages/profile/profile.component";

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  {path:'nutritional-value/:id', component: NutritionalValueComponent  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: 'nutritionist', component: NutritionistComponent},
  {path: 'profile', component: ProfileComponent}
  // Add other routes here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
