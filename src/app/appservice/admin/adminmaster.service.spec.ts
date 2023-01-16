import { TestBed } from '@angular/core/testing';

import { AdminmasterService } from './adminmaster.service';

describe('AdminmasterService', () => {
  let service: AdminmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
