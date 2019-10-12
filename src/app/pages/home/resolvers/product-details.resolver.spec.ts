import { TestBed } from '@angular/core/testing';

import { ProductDetailsResolver } from './product-details.resolver';

describe('ProductDetailsResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailsResolver = TestBed.get(ProductDetailsResolver);
    expect(service).toBeTruthy();
  });
});
