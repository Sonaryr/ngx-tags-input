import { NgModule } from '@angular/core';
import { NgxTagsInputComponent } from './ngx-tags-input.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxTagsInputComponent],
  imports: [
    FormsModule,
    CommonModule,
    TypeaheadModule.forRoot()
  ],
  exports: [NgxTagsInputComponent]
})
export class NgxTagsInputModule { }
