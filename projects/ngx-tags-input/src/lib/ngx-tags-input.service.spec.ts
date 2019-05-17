import { TestBed } from '@angular/core/testing';

import { NgxTagsInputService } from './ngx-tags-input.service';

describe('NgxTagsInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTagsInputService = TestBed.get(NgxTagsInputService);
    expect(service).toBeTruthy();
  });
});
