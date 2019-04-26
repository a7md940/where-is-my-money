import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeListComponent } from './exchange-list/exchange-list.component';

const routes: Routes = [
  {
    path: ':packId', component: ExchangeComponent
  },
  {
    path: `exchanges/:packId`, component: ExchangeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }
