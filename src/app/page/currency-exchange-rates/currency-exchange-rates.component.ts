import { Component, OnInit } from '@angular/core';
import {
  CurrencyInfoesService,
  ICurrency,
  IQuotes,
  ISelectedCurrency,
} from 'src/app/service/currency-infoes.service';
import { values } from 'lodash';

@Component({
  selector: 'app-currency-exchange-rates',
  templateUrl: './currency-exchange-rates.component.html',
  styleUrls: ['./currency-exchange-rates.component.css'],
})
export class CurrencyExchangeRatesComponent implements OnInit {
  currencies: any;
  quotes: IQuotes;
  selectedCurrency: ISelectedCurrency;
  calculatedQuotes: {};

  constructor(private currencyInfoes: CurrencyInfoesService) {}

  ngOnInit(): void {
    this.currencies = this.currencyInfoes.getCurrencies();
    this.quotes = this.currencyInfoes.getQuotes();
    this.selectedCurrency = this.currencyInfoes.getSelectedCurrency();
    this.getQuotes();
  }

  getQuotes() {
    const firstCurrency = this.selectedCurrency.first.currency;
    if (firstCurrency === 'USD') {
      this.calculatedQuotes = this.quotes;
    }
    this.calculatedQuotes = {};
    for (var key in this.currencies) {
      this.calculatedQuotes[firstCurrency + key] =
        this.quotes[`USD${firstCurrency}`] / this.quotes[`USD${key}`];
    }
  }
  getQuote(key) {
    return this.calculatedQuotes
      ? this.calculatedQuotes[
          `${this.selectedCurrency.first.currency}${key}`
        ].toFixed(3)
      : null;
  }
}
