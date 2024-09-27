import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import {ProductsComponent} from "./Food-Facts/products/products.component";
import {NgModule} from "@angular/core";


export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent  }
  // Add other routes here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
