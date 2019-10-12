import { TestBed } from '@angular/core/testing';

import { DelayRequestsInterceptor } from './delay-requests.interceptor';

describe('DelayRequestsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelayRequestsInterceptor = TestBed.get(DelayRequestsInterceptor);
    expect(service).toBeTruthy();
  });
});
