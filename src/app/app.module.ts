import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoenents/header/header.component';
import { InputsComponent } from './compoenents/inputs/inputs.component';
import { CurrencyConvertComponent } from './page/currency-convert/currency-convert.component';
import { CurrencyExchangeRatesComponent } from './page/currency-exchange-rates/currency-exchange-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputsComponent,
    CurrencyConvertComponent,
    CurrencyExchangeRatesComponent,
    InputsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
