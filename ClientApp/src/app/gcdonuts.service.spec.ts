import { TestBed } from '@angular/core/testing';

import { GCDonutsService } from './gcdonuts.service';

describe('GCDonutsService', () => {
  let service: GCDonutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GCDonutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
