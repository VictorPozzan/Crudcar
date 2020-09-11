import { TestBed } from '@angular/core/testing';

import { CrudcarService } from './crudcar.service';

describe('CrudcarService', () => {
  let service: CrudcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
