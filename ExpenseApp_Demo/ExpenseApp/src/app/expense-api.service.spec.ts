import { TestBed } from '@angular/core/testing';

import { ExpenseAPIService } from './expense-api.service';

describe('ExpenseAPIService', () => {
  let service: ExpenseAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
