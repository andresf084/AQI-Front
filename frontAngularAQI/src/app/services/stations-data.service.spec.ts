import { TestBed } from '@angular/core/testing';

import { StationsDataService } from './stations-data.service';

describe('StationsDataService', () => {
  let service: StationsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
