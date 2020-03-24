import { TestBed } from '@angular/core/testing';

import { TelefonosService } from './telefonos.service';

describe('TelefonosService', () => {
  let service: TelefonosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefonosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
