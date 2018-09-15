import { TestBed } from '@angular/core/testing';

import { IpalDataService } from './ipal-data.service';

describe('IpalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpalDataService = TestBed.get(IpalDataService);
    expect(service).toBeTruthy();
  });
});
