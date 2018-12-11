import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TagsInputComponent } from './tags-input.component';

@NgModule({
  declarations: [TagsInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule
  ],
  exports: [TagsInputComponent]
})
export class TagsInputModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TagsInputModule,
      providers: []
    };
  }
}
