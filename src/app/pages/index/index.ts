import { Component } from '@angular/core';
import { Collapse } from '../../components/collapse/collapse';
import { ReversePipePipe } from '../../pipes/reverse-pipe-pipe';

@Component({
  selector: 'app-index',
  imports: [Collapse, ReversePipePipe],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {}
