import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePage } from './exchange-page';

describe('ExchangePage', () => {
  let component: ExchangePage;
  let fixture: ComponentFixture<ExchangePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
