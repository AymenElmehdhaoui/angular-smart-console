import { TestBed } from '@angular/core/testing';

import { NgxSmartConsoleService } from './ngx-smart-console.service';

describe('NgxSmartConsoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSmartConsoleService = TestBed.get(NgxSmartConsoleService);
    expect(service).toBeTruthy();
  });
});
