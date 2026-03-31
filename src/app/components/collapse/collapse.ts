import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-collapse',
  imports: [],
  templateUrl: './collapse.html',
  styleUrl: './collapse.css',
})
export class Collapse {
  show = signal(false);

  toggleCollapse() {
    this.show.update((prev) => !prev);
  }

  title = input.required<string>();
  text = input.required<string>();
}
