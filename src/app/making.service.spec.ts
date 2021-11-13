import { TestBed } from '@angular/core/testing';

import { MakingService } from './making.service';

describe('MakingService', () => {
  let service: MakingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});