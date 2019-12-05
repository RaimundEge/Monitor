import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'credits', component: CreditsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
