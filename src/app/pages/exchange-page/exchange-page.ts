import { Component, inject, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency-service';

@Component({
  selector: 'app-exchange-page',
  imports: [],
  templateUrl: './exchange-page.html',
  styleUrl: './exchange-page.css',
})
export class ExchangePage implements OnInit {
  readonly currencyService = inject(CurrencyService);

  ngOnInit(): void {
    this.currencyService.getCurrencyList().subscribe();
  }
}
