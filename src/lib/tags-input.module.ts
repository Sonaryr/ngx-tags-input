import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TagsInputComponent } from './tags-input.component';

@NgModule({
  declarations: [TagsInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot()
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
