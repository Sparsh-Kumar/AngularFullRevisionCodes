import { TestBed } from '@angular/core/testing';

import { HttpAndObservablesService } from './http-and-observables.service';

describe('HttpAndObservablesService', () => {
  let service: HttpAndObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAndObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
