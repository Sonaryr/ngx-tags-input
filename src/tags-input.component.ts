import { Component, OnInit, forwardRef, Output, Input, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {};

const TAGS_INPUT_TEMPLATE = `
    <div class="tags-input">
        <span class="tags-input__tag label label-primary" *ngFor="let tag of tags">
            {{tag.text}}
            <span *ngIf="isDeleteable(tag)" role="button" class="tags-input__tag-remove-btn" (click)="removeTag(tag)" (touch)="removeTag(tag)">
                <span aria-hidden="true">&times;</span>
                <span class="sr-only">Close</span>
            </span>
        </span>
        <input class="tags-input__input-field" type="text" placeholder="tags" #tagInput (keyup.enter)="addTag(tagInput)" (keydown.backspace)="removeLastTag(tagInput)">
    </div>
`;

const TAGS_INPUT_STYLE = `
    :host {
        overflow: scroll;
        white-space: nowrap;
    }

    .tags-input__tag {
        margin-right: 5px;
        padding-right: 0.3em;
    }

    .tags-input__tag-remove-btn {
        cursor: pointer;
        display: inline-block;
        font-size: 12px;
        margin: 3px 0 0 3px;
        padding: 0;
        padding-top: 2px;
        vertical-align: top;
    }

    .tags-input__input-field {
        border: none;
        width: 100%;
    }
`;

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsInputComponent),
    multi: true
};

@Component({
  selector: 'tags-input',
  template: TAGS_INPUT_TEMPLATE,
  styles: [TAGS_INPUT_STYLE],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TagsInputComponent implements OnInit, ControlValueAccessor {
    private tags: any[] = [];
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    @Input() removeLastOnBackspace: boolean = false;
    @Input() canDeleteTags: boolean = true;
    @Output() onTagsChanged = new EventEmitter();

    ngOnInit() {}

    private tagsChanged(type: string, tag: any): void {
        this.onChangeCallback(this.tags);
        this.onTagsChanged.emit({
            change: type,
            tag: tag
        });
    }

    private removeLastTag(tagInput: HTMLInputElement): void {
        if(!this.removeLastOnBackspace || !this.tags.length) {
            return;
        }

        if (tagInput.value === ''){
            this.removeTag(this.tags[this.tags.length-1]);
        }
    }

    private addTag(tagInput: HTMLInputElement): void {
        if (tagInput.value.trim() !== ''){
            let tag = {
                text: tagInput.value
            };
            this.tags.push(tag);
            this.tagsChanged('add', tag);
        }
        tagInput.value = '';
    }

    private removeTag(tagToRemove: any): void {
        if(!this.isDeleteable(tagToRemove)){
            return;
        }
        this.tags = this.tags.filter(tag => tagToRemove !== tag);
        this.tagsChanged('remove', tagToRemove);
    }

    private isDeleteable(tag: any) {
        if(typeof tag.deleteable !== "undefined" && !tag.deleteable){
            return false;
        }
        return this.canDeleteTags;
    }

    writeValue(value: any) {
        if (value !== this.tags) {
            this.tags = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
