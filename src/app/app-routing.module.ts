import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrencyConvertComponent } from './page/currency-convert/currency-convert.component';
import { CurrencyExchangeRatesComponent } from './page/currency-exchange-rates/currency-exchange-rates.component';

const routes: Routes = [
  { path: '', component: CurrencyConvertComponent },
  { path: 'exchange-rates', component: CurrencyExchangeRatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
