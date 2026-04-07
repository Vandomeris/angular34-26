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

  ResultValue = computed(() => {});

  ngOnInit(): void {
    this.currencyService.getCurrencyList().subscribe((rates) => {
      this.rates.set(rates);
    });
  }
}
