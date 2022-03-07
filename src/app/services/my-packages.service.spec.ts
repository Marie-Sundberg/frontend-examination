import { TestBed } from '@angular/core/testing';

import { MyPackagesService } from './my-packages.service';

describe('MyPackagesService', () => {
  let service: MyPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
