import { Component } from '@angular/core';
import { Collapse } from '../../components/collapse/collapse';
import { ReversePipePipe } from '../../pipes/reverse-pipe-pipe';
import { Tooltip } from '../../directives/tooltip';

@Component({
  selector: 'app-index',
  imports: [Collapse, ReversePipePipe, Tooltip],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {}
