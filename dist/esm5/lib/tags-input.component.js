/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Output, Input, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TagsInputComponent; }),
    multi: true
};
var TagsInputComponent = /** @class */ (function () {
    function TagsInputComponent() {
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
    TagsInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TagsInputComponent.prototype.getPlaceHolder = /**
     * @return {?}
     */
    function () {
        if (this.tags && this.tags.length > 0) {
            return '';
        }
        return this.placeholder;
    };
    /**
     * @param {?} type
     * @param {?} tag
     * @return {?}
     */
    TagsInputComponent.prototype.tagsChanged = /**
     * @param {?} type
     * @param {?} tag
     * @return {?}
     */
    function (type, tag) {
        this.onChangeCallback(this.tags);
        this.onTagsChanged.emit({
            change: type,
            tag: tag
        });
        if (this.maximumOfTagsReached()) {
            this.onMaxTagsReached.emit();
        }
    };
    /**
     * @param {?} tagInput
     * @return {?}
     */
    TagsInputComponent.prototype.removeLastTag = /**
     * @param {?} tagInput
     * @return {?}
     */
    function (tagInput) {
        if (!this.removeLastOnBackspace || !this.tags.length) {
            return;
        }
        if (tagInput.value === '') {
            this.removeTag(this.tags[this.tags.length - 1]);
        }
    };
    /**
     * @param {?} tagInput
     * @return {?}
     */
    TagsInputComponent.prototype.addTag = /**
     * @param {?} tagInput
     * @return {?}
     */
    function (tagInput) {
        var _a;
        console.log(tagInput);
        if (tagInput.value.trim() !== '') {
            /** @type {?} */
            var tag = (_a = {},
                _a[this.displayField] = tagInput.value,
                _a);
            this.addPredefinedTag(tag);
        }
        tagInput.value = '';
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    TagsInputComponent.prototype.addPredefinedTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        if (!this.maximumOfTagsReached()) {
            this.tags.push(tag);
            this.tagsChanged('add', tag);
        }
    };
    /**
     * @param {?} tagToRemove
     * @return {?}
     */
    TagsInputComponent.prototype.removeTag = /**
     * @param {?} tagToRemove
     * @return {?}
     */
    function (tagToRemove) {
        if (!this.isDeleteable(tagToRemove)) {
            return;
        }
        this.tags = this.tags.filter(function (tag) { return tagToRemove !== tag; });
        this.tagsChanged('remove', tagToRemove);
    };
    /**
     * @return {?}
     */
    TagsInputComponent.prototype.maximumOfTagsReached = /**
     * @return {?}
     */
    function () {
        return typeof this.maxTags !== 'undefined' && this.tags.length >= this.maxTags;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    TagsInputComponent.prototype.isDeleteable = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        if (typeof tag.deleteable !== "undefined" && !tag.deleteable) {
            return false;
        }
        return this.canDeleteTags;
    };
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
    TagsInputComponent.prototype.writeValue = /*
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
    function (value) {
        if (value !== this.tags) {
            this.tags = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagsInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagsInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    TagsInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tags-input',
                    template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [ngbTypeahead]=\"options\"\n            [inputFormatter]=\"inputFormatter\"\n            [hidden]=\"maximumOfTagsReached()\"\n            [disabled]=\"maximumOfTagsReached()\"\n            #tagInput />\n    </div>\n</div>\n<!--\n     [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            \n-->",
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    styles: [":host{overflow:auto;white-space:nowrap}.tags-input{align-items:center;display:flex;flex-wrap:wrap}.tags-input__tag{display:inline-block;margin-bottom:2px;margin-right:5px;padding-right:.3em;font-size:110%;font-weight:initial;border:1px solid grey}.tags-input__tag-remove-btn{cursor:pointer;display:inline-block;font-size:12px;margin:-3px 0 0 3px;padding:0;vertical-align:top}.tags-input__input-field{border:none;flex-grow:1;outline:0}"]
                }] }
    ];
    /** @nocollapse */
    TagsInputComponent.ctorParameters = function () { return []; };
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
    return TagsInputComponent;
}());
export { TagsInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi90YWdzLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztJQUluRSxJQUFJLEdBQUcsY0FBTyxDQUFDOzs7SUFFZixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFFRDtJQTJCRTtRQXBCQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztRQUdsQyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUN2QyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLDJCQUFzQixHQUFXLENBQUMsQ0FBQzs7O1FBSWxDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFaEMsQ0FBQzs7OztJQUVqQixxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7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IE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGFnc0lucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFncy1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWdzLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFncy1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgVGFnc0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICBzZWxlY3RlZDpzdHJpbmcgPSAnJztcbiAgcHVibGljIHRhZ3M6IGFueVtdID0gW107XG4gICBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICBASW5wdXQoKSBtYXhUYWdzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIHJlbW92ZUxhc3RPbkJhY2tzcGFjZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjYW5EZWxldGVUYWdzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBkaXNwbGF5RmllbGQ6IHN0cmluZyA9ICdkaXNwbGF5VmFsdWUnO1xuICBASW5wdXQoKSBtaW5MZW5ndGhCZWZvcmVPcHRpb25zOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBpbnB1dEZvcm1hdHRlcjogRnVuY3Rpb247XG4gIC8vQElucHV0KCkgc2Nyb2xsYWJsZU9wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy9ASW5wdXQoKSBzY3JvbGxhYmxlT3B0aW9uc0luVmlldzogbnVtYmVyID0gNTtcbiAgQE91dHB1dCgpIG9uVGFnc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1heFRhZ3NSZWFjaGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Ob09wdGlvbnNNYXRjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICAgZ2V0UGxhY2VIb2xkZXIoKTogc3RyaW5nIHtcbiAgICBpZih0aGlzLnRhZ3MgJiYgdGhpcy50YWdzLmxlbmd0aCA+IDApe1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xufVxuXG4gICB0YWdzQ2hhbmdlZCh0eXBlOiBzdHJpbmcsIHRhZzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy50YWdzKTtcbiAgICAgIHRoaXMub25UYWdzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBjaGFuZ2U6IHR5cGUsXG4gICAgICAgICAgdGFnOiB0YWdcbiAgICAgIH0pO1xuICAgICAgaWYodGhpcy5tYXhpbXVtT2ZUYWdzUmVhY2hlZCgpKXtcbiAgICAgICAgICB0aGlzLm9uTWF4VGFnc1JlYWNoZWQuZW1pdCgpO1xuICAgICAgfVxuICB9XG5cbiAgIHJlbW92ZUxhc3RUYWcodGFnSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGlmKCF0aGlzLnJlbW92ZUxhc3RPbkJhY2tzcGFjZSB8fCAhdGhpcy50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhZ0lucHV0LnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgdGhpcy5yZW1vdmVUYWcodGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGgtMV0pO1xuICAgICAgfVxuICB9XG5cbiAgIGFkZFRhZyh0YWdJbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgICAgIGNvbnNvbGUubG9nICh0YWdJbnB1dClcbiAgICAgIGlmICh0YWdJbnB1dC52YWx1ZS50cmltKCkgIT09ICcnKXtcbiAgICAgICAgICBsZXQgdGFnID0ge1xuICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5RmllbGRdOiB0YWdJbnB1dC52YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5hZGRQcmVkZWZpbmVkVGFnKHRhZyk7XG4gICAgICB9XG4gICAgICB0YWdJbnB1dC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgIGFkZFByZWRlZmluZWRUYWcodGFnOiBPYmplY3QpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5tYXhpbXVtT2ZUYWdzUmVhY2hlZCgpKXtcbiAgICAgICAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgICAgICAgIHRoaXMudGFnc0NoYW5nZWQoJ2FkZCcsIHRhZyk7XG4gICAgICB9XG4gIH1cblxuICAgcmVtb3ZlVGFnKHRhZ1RvUmVtb3ZlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmKCF0aGlzLmlzRGVsZXRlYWJsZSh0YWdUb1JlbW92ZSkpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFncyA9IHRoaXMudGFncy5maWx0ZXIodGFnID0+IHRhZ1RvUmVtb3ZlICE9PSB0YWcpO1xuICAgICAgdGhpcy50YWdzQ2hhbmdlZCgncmVtb3ZlJywgdGFnVG9SZW1vdmUpO1xuICB9XG5cbiAgIG1heGltdW1PZlRhZ3NSZWFjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm1heFRhZ3MgIT09ICd1bmRlZmluZWQnICYmIHRoaXMudGFncy5sZW5ndGg+PXRoaXMubWF4VGFncztcbiAgfVxuXG4gICBpc0RlbGV0ZWFibGUodGFnOiBhbnkpIHtcbiAgICAgIGlmKHR5cGVvZiB0YWcuZGVsZXRlYWJsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGFnLmRlbGV0ZWFibGUpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZVRhZ3M7XG4gIH1cbi8qXG4gICB0eXBlYWhlYWRPblNlbGVjdChlKTp2b2lkIHtcbiAgICAgIGlmKHR5cGVvZiBlLml0ZW0gPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICB0aGlzLmFkZFByZWRlZmluZWRUYWcoe1xuICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5RmllbGRdOiBlLnZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRQcmVkZWZpbmVkVGFnKGUuaXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG4gIH1cblxuICAgdHlwZWFoZWFkT25Ob01hdGNoKGU6YW55KTp2b2lkIHtcbiAgICAgIGlmKHR5cGVvZiB0aGlzLm9uTm9PcHRpb25zTWF0Y2ggIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICB0aGlzLm9uTm9PcHRpb25zTWF0Y2guZW1pdChlKVxuICAgICAgfVxuICB9XG4qL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy50YWdzKSB7XG4gICAgICAgICAgdGhpcy50YWdzID0gdmFsdWU7XG4gICAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbn1cbiJdfQ==