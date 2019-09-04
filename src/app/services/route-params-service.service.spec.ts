import { TestBed } from '@angular/core/testing';

import { RouteParamsServiceService } from './route-params-service.service';

describe('RouteParamsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteParamsServiceService = TestBed.get(RouteParamsServiceService);
    expect(service).toBeTruthy();
  });
});
