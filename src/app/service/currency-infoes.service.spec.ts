import { TestBed } from '@angular/core/testing';

import { CurrencyInfoesService } from './currency-infoes.service';

describe('CurrencyInfoesService', () => {
  let service: CurrencyInfoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyInfoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
