import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import {ProductsComponent} from "./public/pages/products/products.component";
import {NgModule} from "@angular/core";
import {ProductComponent} from "./Food-Facts/Products/components/product/product.component";

export const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
=======
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent }
  // Add other routes here

>>>>>>> 6fb9baa2c55266522dc3dcf44d2d17e6e48b8f6b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
