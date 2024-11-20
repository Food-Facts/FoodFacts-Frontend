import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { ProductsComponent } from "./Food-Facts/products/products.component";
import { NgModule } from "@angular/core";
import { NutritionalValueComponent } from "./Food-Facts/nutritional-value/nutritional-value.component";
import { NutritionistComponent } from "./Food-Facts/nutritionist/nutritionist.component";
import { ProfileComponent } from "./public/pages/profile/profile.component";
import { HealthRisksComponent } from "./Food-Facts/health-risks/health-risks.component";
import { LoginComponent } from './Food-Facts/login/login.component';
import { RegisterComponent } from './Food-Facts/register/register.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'nutritional-value/:id', component: NutritionalValueComponent },
  { path: 'nutritionist', component: NutritionistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'healthRisk/:id', component: HealthRisksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Set login as the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
