import { TestBed } from '@angular/core/testing';

import { GirlsService } from './girls.service';

describe('GirlsService', () => {
  let service: GirlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GirlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
