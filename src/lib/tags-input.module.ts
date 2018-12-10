import { NgModule, ModuleWithProviders } from '@angular/core';
import { TagsInputComponent } from './tags-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [TagsInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule
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
