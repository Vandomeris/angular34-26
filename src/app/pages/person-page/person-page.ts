import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-page',
  imports: [],
  templateUrl: './person-page.html',
  styleUrl: './person-page.css',
})
export class PersonPage {
  private route = inject(ActivatedRoute);

  param = this.route.snapshot.paramMap.get('person');
}
