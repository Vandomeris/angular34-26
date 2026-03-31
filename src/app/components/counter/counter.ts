import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);

  increment() {
    if (this.count() < 10) {
      this.count.set(this.count() + 1);
    }
  }

  decrement() {
    if (this.count() > 0) {
      this.count.update((prev) => prev - 1);
    }
  }
}
