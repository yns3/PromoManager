import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SallesComponent } from './salles/salles.component';
import { PromoComponent } from './promo/promo.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path: 'accueil', component: AccueilComponent},
  {path: 'salles', component: SallesComponent},
  {path: 'promos', component: PromoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
