import { TestBed } from '@angular/core/testing';

import { BulosService } from './bulos.service';

describe('BulosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulosService = TestBed.get(BulosService);
    expect(service).toBeTruthy();
  });
});
