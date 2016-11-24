import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TagsInputComponent} from "./src/tags-input.component";


@NgModule({
  imports: [
    CommonModule
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
