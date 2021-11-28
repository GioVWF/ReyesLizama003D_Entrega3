import { TestBed } from '@angular/core/testing';

import { LogindatosService } from './logindatos.service';

describe('LogindatosService', () => {
  let service: LogindatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogindatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
