/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Output, Input, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsInputComponent),
    multi: true
};
export class TagsInputComponent {
    constructor() {
        this.selected = '';
        this.tags = [];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.type = 'light';
        this.removeLastOnBackspace = false;
        this.canDeleteTags = true;
        this.placeholder = '';
        this.options = null;
        this.displayField = 'displayValue';
        this.minLengthBeforeOptions = 1;
        //@Input() scrollableOptions: boolean = false;
        //@Input() scrollableOptionsInView: number = 5;
        this.onTagsChanged = new EventEmitter();
        this.onMaxTagsReached = new EventEmitter();
        this.onNoOptionsMatch = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getPlaceHolder() {
        if (this.tags && this.tags.length > 0) {
            return '';
        }
        return this.placeholder;
    }
    /**
     * @param {?} type
     * @param {?} tag
     * @return {?}
     */
    tagsChanged(type, tag) {
        this.onChangeCallback(this.tags);
        this.onTagsChanged.emit({
            change: type,
            tag: tag
        });
        if (this.maximumOfTagsReached()) {
            this.onMaxTagsReached.emit();
        }
    }
    /**
     * @param {?} tagInput
     * @return {?}
     */
    removeLastTag(tagInput) {
        if (!this.removeLastOnBackspace || !this.tags.length) {
            return;
        }
        if (tagInput.value === '') {
            this.removeTag(this.tags[this.tags.length - 1]);
        }
    }
    /**
     * @param {?} tagInput
     * @return {?}
     */
    addTag(tagInput) {
        console.log(tagInput);
        if (tagInput.value.trim() !== '') {
            /** @type {?} */
            let tag = {
                [this.displayField]: tagInput.value
            };
            this.addPredefinedTag(tag);
        }
        tagInput.value = '';
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    addPredefinedTag(tag) {
        if (!this.maximumOfTagsReached()) {
            this.tags.push(tag);
            this.tagsChanged('add', tag);
        }
    }
    /**
     * @param {?} tagToRemove
     * @return {?}
     */
    removeTag(tagToRemove) {
        if (!this.isDeleteable(tagToRemove)) {
            return;
        }
        this.tags = this.tags.filter(tag => tagToRemove !== tag);
        this.tagsChanged('remove', tagToRemove);
    }
    /**
     * @return {?}
     */
    maximumOfTagsReached() {
        return typeof this.maxTags !== 'undefined' && this.tags.length >= this.maxTags;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    isDeleteable(tag) {
        if (typeof tag.deleteable !== "undefined" && !tag.deleteable) {
            return false;
        }
        return this.canDeleteTags;
    }
    /*
       typeaheadOnSelect(e):void {
          if(typeof e.item === 'string'){
              this.addPredefinedTag({
                  [this.displayField]: e.value
              });
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
    */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.tags) {
            this.tags = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}
TagsInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'tags-input',
                template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [ngbTypeahead]=\"options\"\n            [inputFormatter]=\"inputFormatter\"\n            [hidden]=\"maximumOfTagsReached()\"\n            [disabled]=\"maximumOfTagsReached()\"\n            #tagInput />\n    </div>\n</div>\n<!--\n     [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            \n-->",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [":host{overflow:auto;white-space:nowrap}.tags-input{align-items:center;display:flex;flex-wrap:wrap}.tags-input__tag{display:inline-block;margin-bottom:2px;margin-right:5px;padding-right:.3em;font-size:110%;font-weight:initial;border:1px solid grey}.tags-input__tag-remove-btn{cursor:pointer;display:inline-block;font-size:12px;margin:-3px 0 0 3px;padding:0;vertical-align:top}.tags-input__input-field{border:none;flex-grow:1;outline:0}"]
            }] }
];
/** @nocollapse */
TagsInputComponent.ctorParameters = () => [];
TagsInputComponent.propDecorators = {
    maxTags: [{ type: Input }],
    type: [{ type: Input }],
    removeLastOnBackspace: [{ type: Input }],
    canDeleteTags: [{ type: Input }],
    placeholder: [{ type: Input }],
    options: [{ type: Input }],
    displayField: [{ type: Input }],
    minLengthBeforeOptions: [{ type: Input }],
    inputFormatter: [{ type: Input }],
    onTagsChanged: [{ type: Output }],
    onMaxTagsReached: [{ type: Output }],
    onNoOptionsMatch: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TagsInputComponent.prototype.selected;
    /** @type {?} */
    TagsInputComponent.prototype.tags;
    /** @type {?} */
    TagsInputComponent.prototype.onTouchedCallback;
    /** @type {?} */
    TagsInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    TagsInputComponent.prototype.maxTags;
    /** @type {?} */
    TagsInputComponent.prototype.type;
    /** @type {?} */
    TagsInputComponent.prototype.removeLastOnBackspace;
    /** @type {?} */
    TagsInputComponent.prototype.canDeleteTags;
    /** @type {?} */
    TagsInputComponent.prototype.placeholder;
    /** @type {?} */
    TagsInputComponent.prototype.options;
    /** @type {?} */
    TagsInputComponent.prototype.displayField;
    /** @type {?} */
    TagsInputComponent.prototype.minLengthBeforeOptions;
    /** @type {?} */
    TagsInputComponent.prototype.inputFormatter;
    /** @type {?} */
    TagsInputComponent.prototype.onTagsChanged;
    /** @type {?} */
    TagsInputComponent.prototype.onMaxTagsReached;
    /** @type {?} */
    TagsInputComponent.prototype.onNoOptionsMatch;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi90YWdzLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztNQUluRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQzs7O01BRWYsbUNBQW1DLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFRRCxNQUFNLE9BQU8sa0JBQWtCO0lBcUI3QjtRQXBCQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztRQUdsQyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUN2QyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLDJCQUFzQixHQUFXLENBQUMsQ0FBQzs7O1FBSWxDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFaEMsQ0FBQzs7OztJQUVqQixRQUFR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QUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7O1lBL0hGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMjlEQUEwQztnQkFFMUMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7O2FBQ2pEOzs7OztzQkFPRSxLQUFLO21CQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3FDQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFHTCxNQUFNOytCQUNOLE1BQU07K0JBQ04sTUFBTTs7OztJQWxCTixzQ0FBcUI7O0lBQ3RCLGtDQUF3Qjs7SUFDdkIsK0NBQXFDOztJQUNyQyw4Q0FBMEM7O0lBRTNDLHFDQUF5Qjs7SUFDekIsa0NBQWdDOztJQUNoQyxtREFBZ0Q7O0lBQ2hELDJDQUF1Qzs7SUFDdkMseUNBQWtDOztJQUNsQyxxQ0FBNkI7O0lBQzdCLDBDQUErQzs7SUFDL0Msb0RBQTRDOztJQUM1Qyw0Q0FBa0M7O0lBR2xDLDJDQUE2Qzs7SUFDN0MsOENBQWdEOztJQUNoRCw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUYWdzSW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWdzLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZ3MtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWdzLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdzSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgIHNlbGVjdGVkOnN0cmluZyA9ICcnO1xuICBwdWJsaWMgdGFnczogYW55W10gPSBbXTtcbiAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gIEBJbnB1dCgpIG1heFRhZ3M6IG51bWJlcjtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ2xpZ2h0JztcbiAgQElucHV0KCkgcmVtb3ZlTGFzdE9uQmFja3NwYWNlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNhbkRlbGV0ZVRhZ3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IG51bGw7XG4gIEBJbnB1dCgpIGRpc3BsYXlGaWVsZDogc3RyaW5nID0gJ2Rpc3BsYXlWYWx1ZSc7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aEJlZm9yZU9wdGlvbnM6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIGlucHV0Rm9ybWF0dGVyOiBGdW5jdGlvbjtcbiAgLy9ASW5wdXQoKSBzY3JvbGxhYmxlT3B0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xuICAvL0BJbnB1dCgpIHNjcm9sbGFibGVPcHRpb25zSW5WaWV3OiBudW1iZXIgPSA1O1xuICBAT3V0cHV0KCkgb25UYWdzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTWF4VGFnc1JlYWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk5vT3B0aW9uc01hdGNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG4gICBnZXRQbGFjZUhvbGRlcigpOiBzdHJpbmcge1xuICAgIGlmKHRoaXMudGFncyAmJiB0aGlzLnRhZ3MubGVuZ3RoID4gMCl7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG59XG5cbiAgIHRhZ3NDaGFuZ2VkKHR5cGU6IHN0cmluZywgdGFnOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnRhZ3MpO1xuICAgICAgdGhpcy5vblRhZ3NDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgIGNoYW5nZTogdHlwZSxcbiAgICAgICAgICB0YWc6IHRhZ1xuICAgICAgfSk7XG4gICAgICBpZih0aGlzLm1heGltdW1PZlRhZ3NSZWFjaGVkKCkpe1xuICAgICAgICAgIHRoaXMub25NYXhUYWdzUmVhY2hlZC5lbWl0KCk7XG4gICAgICB9XG4gIH1cblxuICAgcmVtb3ZlTGFzdFRhZyh0YWdJbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYoIXRoaXMucmVtb3ZlTGFzdE9uQmFja3NwYWNlIHx8ICF0aGlzLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFnSW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICB0aGlzLnJlbW92ZVRhZyh0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aC0xXSk7XG4gICAgICB9XG4gIH1cblxuICAgYWRkVGFnKHRhZ0lucHV0OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgICAgY29uc29sZS5sb2cgKHRhZ0lucHV0KVxuICAgICAgaWYgKHRhZ0lucHV0LnZhbHVlLnRyaW0oKSAhPT0gJycpe1xuICAgICAgICAgIGxldCB0YWcgPSB7XG4gICAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlGaWVsZF06IHRhZ0lucHV0LnZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmFkZFByZWRlZmluZWRUYWcodGFnKTtcbiAgICAgIH1cbiAgICAgIHRhZ0lucHV0LnZhbHVlID0gJyc7XG4gIH1cblxuICAgYWRkUHJlZGVmaW5lZFRhZyh0YWc6IE9iamVjdCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLm1heGltdW1PZlRhZ3NSZWFjaGVkKCkpe1xuICAgICAgICAgIHRoaXMudGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgdGhpcy50YWdzQ2hhbmdlZCgnYWRkJywgdGFnKTtcbiAgICAgIH1cbiAgfVxuXG4gICByZW1vdmVUYWcodGFnVG9SZW1vdmU6IGFueSk6IHZvaWQge1xuICAgICAgaWYoIXRoaXMuaXNEZWxldGVhYmxlKHRhZ1RvUmVtb3ZlKSl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50YWdzID0gdGhpcy50YWdzLmZpbHRlcih0YWcgPT4gdGFnVG9SZW1vdmUgIT09IHRhZyk7XG4gICAgICB0aGlzLnRhZ3NDaGFuZ2VkKCdyZW1vdmUnLCB0YWdUb1JlbW92ZSk7XG4gIH1cblxuICAgbWF4aW11bU9mVGFnc1JlYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMubWF4VGFncyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy50YWdzLmxlbmd0aD49dGhpcy5tYXhUYWdzO1xuICB9XG5cbiAgIGlzRGVsZXRlYWJsZSh0YWc6IGFueSkge1xuICAgICAgaWYodHlwZW9mIHRhZy5kZWxldGVhYmxlICE9PSBcInVuZGVmaW5lZFwiICYmICF0YWcuZGVsZXRlYWJsZSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlVGFncztcbiAgfVxuLypcbiAgIHR5cGVhaGVhZE9uU2VsZWN0KGUpOnZvaWQge1xuICAgICAgaWYodHlwZW9mIGUuaXRlbSA9PT0gJ3N0cmluZycpe1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyh7XG4gICAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlGaWVsZF06IGUudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZFByZWRlZmluZWRUYWcoZS5pdGVtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcbiAgfVxuXG4gICB0eXBlYWhlYWRPbk5vTWF0Y2goZTphbnkpOnZvaWQge1xuICAgICAgaWYodHlwZW9mIHRoaXMub25Ob09wdGlvbnNNYXRjaCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgIHRoaXMub25Ob09wdGlvbnNNYXRjaC5lbWl0KGUpXG4gICAgICB9XG4gIH1cbiovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRhZ3MpIHtcbiAgICAgICAgICB0aGlzLnRhZ3MgPSB2YWx1ZTtcbiAgICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxufVxuIl19