import { Component } from '@angular/core';
import { Collapse } from '../../components/collapse/collapse';
import { ReversePipePipe } from '../../pipes/reverse-pipe-pipe';
import { Consoler } from '../../directives/consoler';

@Component({
  selector: 'app-index',
  imports: [Collapse, ReversePipePipe, Consoler],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {}
