import { TestBed } from '@angular/core/testing';

import { AreaItemService } from './area-item.service';

describe('AreaItemService', () => {
  let service: AreaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
