import { TestBed } from '@angular/core/testing';

import { RipoService } from './ripo.service';

describe('RipoService', () => {
  let service: RipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
