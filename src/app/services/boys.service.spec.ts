import { TestBed } from '@angular/core/testing';

import { BoysService } from './boys.service';

describe('BoysService', () => {
  let service: BoysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
