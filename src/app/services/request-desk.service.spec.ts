import { TestBed } from '@angular/core/testing';

import { RequestDeskService } from './request-desk.service';

describe('RequestDeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestDeskService = TestBed.get(RequestDeskService);
    expect(service).toBeTruthy();
  });
});
