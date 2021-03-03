import { Component } from '@angular/core';
import { CurrencyInfoesService } from './service/currency-infoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'currency convertor';

  visible: boolean = false;

  constructor(private currencyInfoes: CurrencyInfoesService) {
    this.showApp();
  }

  async showApp(): Promise<void> {
    await this.currencyInfoes.fetchCurrencies();
    await this.currencyInfoes.fetchQuotes();

    this.visible = true;
  }
}
