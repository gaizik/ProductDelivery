import { TestBed } from '@angular/core/testing';

import { SProductsService } from './sproducts.service';

describe('SProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SProductsService = TestBed.get(SProductsService);
    expect(service).toBeTruthy();
  });
});
