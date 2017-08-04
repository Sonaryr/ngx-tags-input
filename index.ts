import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TagsInputComponent} from "./src/tags-input.component";
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    TagsInputComponent
  ],
  exports: [
    TagsInputComponent
  ]
})
export class TagsInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TagsInputModule,
      providers: []
    };
  }
}
