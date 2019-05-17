import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTagsInputComponent } from './ngx-tags-input.component';

describe('NgxTagsInputComponent', () => {
  let component: NgxTagsInputComponent;
  let fixture: ComponentFixture<NgxTagsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTagsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTagsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
