import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CurrencyInfoesService } from 'src/app/service/currency-infoes.service';
import { values, mapValues } from 'lodash';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
  @Input('initCurrenty') currentCurrency: string;
  @Input('initAmount') currentAmount: any;
  @Output() onChangedCurrency = new EventEmitter<string>();
  @Output() onChangedAmount = new EventEmitter<string>();

  options: unknown[];

  constructor(private currencyInfoes: CurrencyInfoesService) {}

  ngOnInit(): void {
    this.options = this.currencyOptions();
  }

  currencyOptions(): unknown[] {
    return values(
      mapValues(this.currencyInfoes.getCurrencies(), (currency, index) => ({
        key: index,
        text: `${currency} (${index})`,
        value: index,
      }))
    );
  }

  onChangeCurrency(event): void {
    this.onChangedCurrency.emit(event.target.value);
  }

  onChangeAmount(event): void {
    this.onChangedAmount.emit(event.target.value);
  }
}
