import { TestBed } from '@angular/core/testing';

import { IpalCategoryService } from './ipal-category.service';

describe('IpalCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpalCategoryService = TestBed.get(IpalCategoryService);
    expect(service).toBeTruthy();
  });
});
