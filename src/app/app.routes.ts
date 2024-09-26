import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import {ProductsComponent} from "./public/pages/products/products.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
