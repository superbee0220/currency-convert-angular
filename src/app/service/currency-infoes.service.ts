import { Injectable } from '@angular/core';
import currencyApi from '../../api/currencyApi';

export interface ICurrency {
  key: string;
  value: string;
}

export interface IQuotes {
  key: string;
  value: number;
}

export interface ISelectedCurrency {
  first: {
    currency: string;
    amount: any;
  };
  second: {
    currency: string;
    amount: any;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyInfoesService {
  private currencies: ICurrency;
  private quotes: IQuotes;
  private selectedCurrency: ISelectedCurrency = {
    first: {
      currency: 'USD',
      amount: 1,
    },
    second: {
      currency: 'EUR',
      amount: '',
    },
  };

  constructor() {}

  async fetchCurrencies(): Promise<void> {
    const res = await currencyApi.get('/list');
    if (res.status === 200) {
      this.currencies = res.data.currencies;
    }
  }

  async fetchQuotes(): Promise<void> {
    const res = await currencyApi.get('/live');
    if (res.status === 200) {
      this.quotes = res.data.quotes;
    }
  }

  getCurrencies(): ICurrency {
    return this.currencies;
  }

  getQuotes(): IQuotes {
    return this.quotes;
  }

  getSelectedCurrency(): ISelectedCurrency {
    return this.selectedCurrency;
  }

  setFirstCurrency(currency: string) {
    this.selectedCurrency.first.currency = currency;
  }

  setSecondCurrency(currency: string) {
    this.selectedCurrency.second.currency = currency;
  }

  setFirstAmount(amount: any) {
    this.selectedCurrency.first.amount = amount;
  }

  setSecondAmount(amount: any) {
    this.selectedCurrency.second.amount = amount;
  }
}
