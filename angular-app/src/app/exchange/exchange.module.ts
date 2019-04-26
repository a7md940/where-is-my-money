import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange/exchange.component';
import { SharedModule } from './../shared/shared.module';
import { ExchangeListComponent } from './exchange-list/exchange-list.component';
@NgModule({
  declarations: [ExchangeComponent, ExchangeListComponent],
  imports: [
  SharedModule,
  CommonModule,
    ExchangeRoutingModule
  ]
})
export class ExchangeModule { }
