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
        this.scrollableOptions = false;
        this.scrollableOptionsInView = 5;
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
        if (tagInput.value.trim() !== '') {
            /** @type {?} */
            let tag = { [this.displayField]: tagInput.value };
            this.addPredefinedTag(tag);
        }
        tagInput.value = '';
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    addPredefinedTag(tag) {
        if (!this.tags)
            this.tags = [];
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
    /**
     * @param {?} e
     * @return {?}
     */
    typeaheadOnSelect(e) {
        if (typeof e.item === 'string') {
            this.addPredefinedTag({ [this.displayField]: e.value });
        }
        else {
            this.addPredefinedTag(e.item);
        }
        this.selected = '';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    typeaheadOnNoMatch(e) {
        if (typeof this.onNoOptionsMatch !== 'undefined') {
            this.onNoOptionsMatch.emit(e);
        }
    }
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
                template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{ tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [hidden]=\"maximumOfTagsReached()\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            #tagInput />\n    </div>\n</div>\n{{ displayField }}",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [":host{overflow:auto;white-space:nowrap}.tags-input{align-items:center;display:flex;flex-wrap:wrap}.tags-input__tag{display:inline-block;margin-right:5px;padding-right:.3em;font-size:110%;font-weight:initial;border:1px solid grey}.tags-input__tag-remove-btn{cursor:pointer;display:inline-block;font-size:12px;margin:-3px 0 0 3px;padding:0;vertical-align:top}.tags-input__input-field{border:1px solid transparent;flex-grow:1;outline:0}"]
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
    scrollableOptions: [{ type: Input }],
    scrollableOptionsInView: [{ type: Input }],
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
    TagsInputComponent.prototype.scrollableOptions;
    /** @type {?} */
    TagsInputComponent.prototype.scrollableOptionsInView;
    /** @type {?} */
    TagsInputComponent.prototype.onTagsChanged;
    /** @type {?} */
    TagsInputComponent.prototype.onMaxTagsReached;
    /** @type {?} */
    TagsInputComponent.prototype.onNoOptionsMatch;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi90YWdzLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztNQUluRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQzs7O01BRWYsbUNBQW1DLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFRRCxNQUFNLE9BQU8sa0JBQWtCO0lBb0I3QjtRQW5CRCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztRQUdsQyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUN2QyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLDJCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLHFC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Q0wsTUFBTTsrQkFDTixNQUFNOytCQUNOLE1BQU07Ozs7SUFqQlIsc0NBQXFCOztJQUNwQixrQ0FBd0I7O0lBQ3ZCLCtDQUFxQzs7SUFDckMsOENBQTBDOztJQUUzQyxxQ0FBeUI7O0lBQ3pCLGtDQUFnQzs7SUFDaEMsbURBQWdEOztJQUNoRCwyQ0FBdUM7O0lBQ3ZDLHlDQUFrQzs7SUFDbEMscUNBQTZCOztJQUM3QiwwQ0FBK0M7O0lBQy9DLG9EQUE0Qzs7SUFDNUMsK0NBQTRDOztJQUM1QyxxREFBNkM7O0lBQzdDLDJDQUE2Qzs7SUFDN0MsOENBQWdEOztJQUNoRCw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUYWdzSW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWdzLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZ3MtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWdzLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdzSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiBzZWxlY3RlZDpzdHJpbmcgPSAnJztcbiAgcHVibGljIHRhZ3M6IGFueVtdID0gW107XG4gICBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICBASW5wdXQoKSBtYXhUYWdzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIHJlbW92ZUxhc3RPbkJhY2tzcGFjZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjYW5EZWxldGVUYWdzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBkaXNwbGF5RmllbGQ6IHN0cmluZyA9ICdkaXNwbGF5VmFsdWUnO1xuICBASW5wdXQoKSBtaW5MZW5ndGhCZWZvcmVPcHRpb25zOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBzY3JvbGxhYmxlT3B0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzY3JvbGxhYmxlT3B0aW9uc0luVmlldzogbnVtYmVyID0gNTtcbiAgQE91dHB1dCgpIG9uVGFnc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1heFRhZ3NSZWFjaGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Ob09wdGlvbnNNYXRjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiBcbiAgIGdldFBsYWNlSG9sZGVyKCk6IHN0cmluZyB7XG4gICAgaWYodGhpcy50YWdzICYmIHRoaXMudGFncy5sZW5ndGggPiAwKXtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcbn1cbiAgIHRhZ3NDaGFuZ2VkKHR5cGU6IHN0cmluZywgdGFnOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnRhZ3MpO1xuICAgICAgdGhpcy5vblRhZ3NDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgIGNoYW5nZTogdHlwZSxcbiAgICAgICAgICB0YWc6IHRhZ1xuICAgICAgfSk7XG4gICAgICBpZih0aGlzLm1heGltdW1PZlRhZ3NSZWFjaGVkKCkpe1xuICAgICAgICAgIHRoaXMub25NYXhUYWdzUmVhY2hlZC5lbWl0KCk7XG4gICAgICB9XG4gIH1cblxuICAgcmVtb3ZlTGFzdFRhZyh0YWdJbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYoIXRoaXMucmVtb3ZlTGFzdE9uQmFja3NwYWNlIHx8ICF0aGlzLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFnSW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICB0aGlzLnJlbW92ZVRhZyh0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aC0xXSk7XG4gICAgICB9XG4gIH1cblxuICAgYWRkVGFnKHRhZ0lucHV0OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgICBpZiAodGFnSW5wdXQudmFsdWUudHJpbSgpICE9PSAnJyl7XG4gICAgICAgICAgbGV0IHRhZyA9ICB7IFt0aGlzLmRpc3BsYXlGaWVsZF06IHRhZ0lucHV0LnZhbHVlIH07XG4gICAgICAgICAgdGhpcy5hZGRQcmVkZWZpbmVkVGFnKHRhZyk7XG4gICAgICB9XG4gICAgICB0YWdJbnB1dC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgIGFkZFByZWRlZmluZWRUYWcodGFnOiBPYmplY3QpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy50YWdzKSB0aGlzLnRhZ3MgPSBbXTtcbiAgICAgIGlmICghdGhpcy5tYXhpbXVtT2ZUYWdzUmVhY2hlZCgpKXtcbiAgICAgICAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgICAgICAgIHRoaXMudGFnc0NoYW5nZWQoJ2FkZCcsIHRhZyk7XG4gICAgICB9XG4gIH1cblxuICAgcmVtb3ZlVGFnKHRhZ1RvUmVtb3ZlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmKCF0aGlzLmlzRGVsZXRlYWJsZSh0YWdUb1JlbW92ZSkpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFncyA9IHRoaXMudGFncy5maWx0ZXIodGFnID0+IHRhZ1RvUmVtb3ZlICE9PSB0YWcpO1xuICAgICAgdGhpcy50YWdzQ2hhbmdlZCgncmVtb3ZlJywgdGFnVG9SZW1vdmUpO1xuICB9XG5cbiAgIG1heGltdW1PZlRhZ3NSZWFjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm1heFRhZ3MgIT09ICd1bmRlZmluZWQnICYmIHRoaXMudGFncy5sZW5ndGg+PXRoaXMubWF4VGFncztcbiAgfVxuXG4gICBpc0RlbGV0ZWFibGUodGFnOiBhbnkpIHtcbiAgICAgIGlmKHR5cGVvZiB0YWcuZGVsZXRlYWJsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGFnLmRlbGV0ZWFibGUpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZVRhZ3M7XG4gIH1cblxuICAgdHlwZWFoZWFkT25TZWxlY3QoZTphbnkpOnZvaWQge1xuICAgICAgaWYodHlwZW9mIGUuaXRlbSA9PT0gJ3N0cmluZycpe1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyh7IFt0aGlzLmRpc3BsYXlGaWVsZF06IGUudmFsdWUgfSk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRQcmVkZWZpbmVkVGFnKGUuaXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG4gIH1cblxuICAgdHlwZWFoZWFkT25Ob01hdGNoKGU6YW55KTp2b2lkIHtcbiAgICAgIGlmKHR5cGVvZiB0aGlzLm9uTm9PcHRpb25zTWF0Y2ggIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICB0aGlzLm9uTm9PcHRpb25zTWF0Y2guZW1pdChlKVxuICAgICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMudGFncykge1xuICAgICAgICAgIHRoaXMudGFncyA9IHZhbHVlO1xuICAgICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG59XG4iXX0=