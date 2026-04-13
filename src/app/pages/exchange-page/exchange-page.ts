import { Component, computed, inject, Input, OnInit, signal } from '@angular/core';
import { CurrencyService } from '../../services/currency-service';
import { Currency } from '../../../types/Currency';
import { CurrencyPipe, KeyValuePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exchange-page',
  imports: [KeyValuePipe, UpperCasePipe, FormsModule, CurrencyPipe],
  templateUrl: './exchange-page.html',
  styleUrl: './exchange-page.css',
})
export class ExchangePage implements OnInit {
  readonly currencyService = inject(CurrencyService);

  rates = signal<Currency | null>(null);

  InputValue = signal<number | null>(null);
  Valuta_From = signal<string | null>(null);
  Valuta_To = signal<string | null>(null);

  ExchangeRate = computed(() => {
    const rates = this.rates();
    const valFrom = this.Valuta_From();
    const valTo = this.Valuta_To();

    if (valFrom && valTo && rates) {
      return rates.eur[valFrom] / rates.eur[valTo];
    }
    return null;
  });

  ResultValue = computed(() => {
    const inputValue = this.InputValue();
    const rate = this.ExchangeRate();

    if (inputValue && rate) {
      return inputValue / rate;
    }
    return null;
  });

  ngOnInit(): void {
    this.currencyService.getCurrencyList().subscribe((rates) => {
      this.rates.set(rates);
    });
  }
}
