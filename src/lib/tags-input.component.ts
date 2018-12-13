import { Component, OnInit, forwardRef, Output, Input, EventEmitter} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';



const noop = () => {};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsInputComponent),
    multi: true
};

@Component({
  selector: 'tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TagsInputComponent implements OnInit, ControlValueAccessor {
 selected:string = '';
  public tags: any[] = [];
  id1 = Math.random ().toString (36).substring (7);
  id2 = Math.random ().toString (36).substring (7);
   onTouchedCallback: () => void = noop;
   onChangeCallback: (_: any) => void = noop;

  @Input() maxTags: number;
  @Input() type: string = 'light';
  @Input() removeLastOnBackspace: boolean = false;
  @Input() canDeleteTags: boolean = true;
  @Input() placeholder: string = '';
  @Input() options: any = null;
  @Input() displayField: string = 'displayValue';
  @Input() minLengthBeforeOptions: number = 1;
  @Input() scrollableOptions: boolean = false;
  @Input() scrollableOptionsInView: number = 5;
  @Output() onTagsChanged = new EventEmitter();
  @Output() onMaxTagsReached = new EventEmitter();
  @Output() onNoOptionsMatch = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

 
   getPlaceHolder(): string {
    if(this.tags && this.tags.length > 0){
        return '';
    }
    return this.placeholder;
}
   tagsChanged(type: string, tag: any): void {
      this.onChangeCallback(this.tags);
      this.onTagsChanged.emit({
          change: type,
          tag: tag
      });
      if(this.maximumOfTagsReached()){
          this.onMaxTagsReached.emit();
      }
  }

   removeLastTag(tagInput: HTMLInputElement): void {
      if(!this.removeLastOnBackspace || !this.tags.length) {
          return;
      }

      if (tagInput.value === ''){
          this.removeTag(this.tags[this.tags.length-1]);
      }
  }

   addTag(tagInput: HTMLInputElement): void {
      if (tagInput.value.trim() !== ''){
          let tag =  { [this.displayField]: tagInput.value };
          this.addPredefinedTag(tag);
      }
      tagInput.value = '';
  }

   addPredefinedTag(tag: Object): void {
      if (!this.tags) this.tags = [];
      if (!this.maximumOfTagsReached()){
          this.tags.push(tag);
          this.tagsChanged('add', tag);
      }
  }

   removeTag(tagToRemove: any): void {
      if(!this.isDeleteable(tagToRemove)){
          return;
      }
      this.tags = this.tags.filter(tag => tagToRemove !== tag);
      this.tagsChanged('remove', tagToRemove);
  }

   maximumOfTagsReached(): boolean {
      return typeof this.maxTags !== 'undefined' && this.tags.length>=this.maxTags;
  }

   isDeleteable(tag: any) {
      if(typeof tag.deleteable !== "undefined" && !tag.deleteable){
          return false;
      }
      return this.canDeleteTags;
  }
  
   typeaheadOnSelect(e:any):void {
      if(typeof e.item === 'string'){
          this.addPredefinedTag({ [this.displayField]: e.value });
      }else {
          this.addPredefinedTag(e.item);
      }
      this.selected = '';
  }

   typeaheadOnNoMatch(e:any):void {
      if(typeof this.onNoOptionsMatch !== 'undefined'){
          this.onNoOptionsMatch.emit(e)
      }
  }

  writeValue(value: any) {
      if (value && value !== this.tags) {
          this.tags = value.map ((v:any) => ({ [this.displayField]: v }));
      }
  }

  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

}
