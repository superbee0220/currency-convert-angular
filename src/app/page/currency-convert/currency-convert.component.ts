import { Component, OnInit } from '@angular/core';
import {
  CurrencyInfoesService,
  ISelectedCurrency,
} from 'src/app/service/currency-infoes.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.css'],
})
export class CurrencyConvertComponent implements OnInit {
  selectedCurrency: ISelectedCurrency;

  constructor(private currencyInfoes: CurrencyInfoesService) {
    this.selectedCurrency = currencyInfoes.getSelectedCurrency();
  }

  ngOnInit(): void {
    this.onChangeFirstCurrency(
      this.currencyInfoes.getSelectedCurrency().first.currency
    );
  }

  onChangeFirstCurrency(currency): void {
    this.currencyInfoes.setFirstCurrency(currency);
    const { first } = this.currencyInfoes.getSelectedCurrency();
    this.currencyInfoes.setSecondAmount(
      (first.amount * this.getRate()).toFixed(4)
    );
  }

  onChangeSecondCurrency(currency): void {
    this.currencyInfoes.setSecondCurrency(currency);
    const { first } = this.currencyInfoes.getSelectedCurrency();
    this.currencyInfoes.setSecondAmount(
      (first.amount * this.getRate()).toFixed(4)
    );
  }

  onChangeFirstAmount(amount): void {
    this.currencyInfoes.setFirstAmount(amount);
    this.currencyInfoes.setSecondAmount((amount * this.getRate()).toFixed(4));
  }

  onChangeSecondAmount(amount): void {
    this.currencyInfoes.setSecondAmount(amount);
    this.currencyInfoes.setFirstAmount((amount / this.getRate()).toFixed(4));
  }

  getRate() {
    const { first, second } = this.currencyInfoes.getSelectedCurrency();
    const quotes = this.currencyInfoes.getQuotes();
    const firstCurrency = first.currency;
    const secondCurrency = second.currency;
    let rate = 1;
    if (firstCurrency === 'USD') {
      rate = quotes[`USD${secondCurrency}`];
    } else if (firstCurrency !== secondCurrency) {
      rate = quotes[`USD${secondCurrency}`] / quotes[`USD${firstCurrency}`];
    }

    return rate;
  }
}
