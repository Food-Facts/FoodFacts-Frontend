import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Add other routes here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
