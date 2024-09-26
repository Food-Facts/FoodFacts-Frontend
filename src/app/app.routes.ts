import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import {NgModule} from "@angular/core";
import {ProductComponent} from "./Food-Facts/Products/components/product/product.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent }
  // Add other routes here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
