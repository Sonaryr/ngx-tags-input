import { TestBed } from '@angular/core/testing';

import { TagsInputService } from './tags-input.service';

describe('NgxTagsInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsInputService = TestBed.get(TagsInputService);
    expect(service).toBeTruthy();
  });
});
