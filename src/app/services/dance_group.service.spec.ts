import { TestBed } from '@angular/core/testing';

import { Dance_groupsService } from './dance_groups.service';

describe('Dance_groupsService', () => {
  let service: Dance_groupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dance_groupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
