import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsInputComponent } from './tags-input.component';

describe('NgxTagsInputComponent', () => {
  let component: TagsInputComponent;
  let fixture: ComponentFixture<TagsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
