import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular34-26');
}
