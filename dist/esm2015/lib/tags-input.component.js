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
        this.id1 = Math.random().toString(36).substring(7);
        this.id2 = Math.random().toString(36).substring(7);
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
        if (value && value !== this.tags) {
            this.tags = value.map((v) => ({ [this.displayField]: v }));
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
                template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{ tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            [id]=\"id1\"\n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            autocomplete=\"off\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            [id]=\"id2\"\n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [hidden]=\"maximumOfTagsReached()\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            autocomplete=\"off\"\n            #tagInput />\n    </div>\n</div>",
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
    TagsInputComponent.prototype.id1;
    /** @type {?} */
    TagsInputComponent.prototype.id2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi90YWdzLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztNQUluRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQzs7O01BRWYsbUNBQW1DLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFRRCxNQUFNLE9BQU8sa0JBQWtCO0lBc0I3QjtRQXJCRCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUN4QixRQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsUUFBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUcsQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hELHNCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDO1FBR2xDLFNBQUksR0FBVyxPQUFPLENBQUM7UUFDdkIsMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsaUJBQVks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Q0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7O1lBNUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIseStEQUEwQztnQkFFMUMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7O2FBQ2pEOzs7OztzQkFTRSxLQUFLO21CQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3FDQUNMLEtBQUs7Z0NBQ0wsS0FBSztzQ0FDTCxLQUFLOzRCQUNMLE1BQU07K0JBQ04sTUFBTTsrQkFDTixNQUFNOzs7O0lBbkJSLHNDQUFxQjs7SUFDcEIsa0NBQXdCOztJQUN4QixpQ0FBaUQ7O0lBQ2pELGlDQUFpRDs7SUFDaEQsK0NBQXFDOztJQUNyQyw4Q0FBMEM7O0lBRTNDLHFDQUF5Qjs7SUFDekIsa0NBQWdDOztJQUNoQyxtREFBZ0Q7O0lBQ2hELDJDQUF1Qzs7SUFDdkMseUNBQWtDOztJQUNsQyxxQ0FBNkI7O0lBQzdCLDBDQUErQzs7SUFDL0Msb0RBQTRDOztJQUM1QywrQ0FBNEM7O0lBQzVDLHFEQUE2Qzs7SUFDN0MsMkNBQTZDOztJQUM3Qyw4Q0FBZ0Q7O0lBQ2hELDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRhZ3NJbnB1dENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhZ3MtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFncy1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhZ3MtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFRhZ3NJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuIHNlbGVjdGVkOnN0cmluZyA9ICcnO1xuICBwdWJsaWMgdGFnczogYW55W10gPSBbXTtcbiAgaWQxID0gTWF0aC5yYW5kb20gKCkudG9TdHJpbmcgKDM2KS5zdWJzdHJpbmcgKDcpO1xuICBpZDIgPSBNYXRoLnJhbmRvbSAoKS50b1N0cmluZyAoMzYpLnN1YnN0cmluZyAoNyk7XG4gICBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICBASW5wdXQoKSBtYXhUYWdzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIHJlbW92ZUxhc3RPbkJhY2tzcGFjZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjYW5EZWxldGVUYWdzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBkaXNwbGF5RmllbGQ6IHN0cmluZyA9ICdkaXNwbGF5VmFsdWUnO1xuICBASW5wdXQoKSBtaW5MZW5ndGhCZWZvcmVPcHRpb25zOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBzY3JvbGxhYmxlT3B0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzY3JvbGxhYmxlT3B0aW9uc0luVmlldzogbnVtYmVyID0gNTtcbiAgQE91dHB1dCgpIG9uVGFnc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1heFRhZ3NSZWFjaGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Ob09wdGlvbnNNYXRjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuIFxuICAgZ2V0UGxhY2VIb2xkZXIoKTogc3RyaW5nIHtcbiAgICBpZih0aGlzLnRhZ3MgJiYgdGhpcy50YWdzLmxlbmd0aCA+IDApe1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xufVxuICAgdGFnc0NoYW5nZWQodHlwZTogc3RyaW5nLCB0YWc6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMudGFncyk7XG4gICAgICB0aGlzLm9uVGFnc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgY2hhbmdlOiB0eXBlLFxuICAgICAgICAgIHRhZzogdGFnXG4gICAgICB9KTtcbiAgICAgIGlmKHRoaXMubWF4aW11bU9mVGFnc1JlYWNoZWQoKSl7XG4gICAgICAgICAgdGhpcy5vbk1heFRhZ3NSZWFjaGVkLmVtaXQoKTtcbiAgICAgIH1cbiAgfVxuXG4gICByZW1vdmVMYXN0VGFnKHRhZ0lucHV0OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgICBpZighdGhpcy5yZW1vdmVMYXN0T25CYWNrc3BhY2UgfHwgIXRoaXMudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0YWdJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgIHRoaXMucmVtb3ZlVGFnKHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoLTFdKTtcbiAgICAgIH1cbiAgfVxuXG4gICBhZGRUYWcodGFnSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGlmICh0YWdJbnB1dC52YWx1ZS50cmltKCkgIT09ICcnKXtcbiAgICAgICAgICBsZXQgdGFnID0gIHsgW3RoaXMuZGlzcGxheUZpZWxkXTogdGFnSW5wdXQudmFsdWUgfTtcbiAgICAgICAgICB0aGlzLmFkZFByZWRlZmluZWRUYWcodGFnKTtcbiAgICAgIH1cbiAgICAgIHRhZ0lucHV0LnZhbHVlID0gJyc7XG4gIH1cblxuICAgYWRkUHJlZGVmaW5lZFRhZyh0YWc6IE9iamVjdCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLnRhZ3MpIHRoaXMudGFncyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLm1heGltdW1PZlRhZ3NSZWFjaGVkKCkpe1xuICAgICAgICAgIHRoaXMudGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgdGhpcy50YWdzQ2hhbmdlZCgnYWRkJywgdGFnKTtcbiAgICAgIH1cbiAgfVxuXG4gICByZW1vdmVUYWcodGFnVG9SZW1vdmU6IGFueSk6IHZvaWQge1xuICAgICAgaWYoIXRoaXMuaXNEZWxldGVhYmxlKHRhZ1RvUmVtb3ZlKSl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50YWdzID0gdGhpcy50YWdzLmZpbHRlcih0YWcgPT4gdGFnVG9SZW1vdmUgIT09IHRhZyk7XG4gICAgICB0aGlzLnRhZ3NDaGFuZ2VkKCdyZW1vdmUnLCB0YWdUb1JlbW92ZSk7XG4gIH1cblxuICAgbWF4aW11bU9mVGFnc1JlYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMubWF4VGFncyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy50YWdzLmxlbmd0aD49dGhpcy5tYXhUYWdzO1xuICB9XG5cbiAgIGlzRGVsZXRlYWJsZSh0YWc6IGFueSkge1xuICAgICAgaWYodHlwZW9mIHRhZy5kZWxldGVhYmxlICE9PSBcInVuZGVmaW5lZFwiICYmICF0YWcuZGVsZXRlYWJsZSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlVGFncztcbiAgfVxuICBcbiAgIHR5cGVhaGVhZE9uU2VsZWN0KGU6YW55KTp2b2lkIHtcbiAgICAgIGlmKHR5cGVvZiBlLml0ZW0gPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICB0aGlzLmFkZFByZWRlZmluZWRUYWcoeyBbdGhpcy5kaXNwbGF5RmllbGRdOiBlLnZhbHVlIH0pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyhlLml0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICB9XG5cbiAgIHR5cGVhaGVhZE9uTm9NYXRjaChlOmFueSk6dm9pZCB7XG4gICAgICBpZih0eXBlb2YgdGhpcy5vbk5vT3B0aW9uc01hdGNoICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgdGhpcy5vbk5vT3B0aW9uc01hdGNoLmVtaXQoZSlcbiAgICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSB0aGlzLnRhZ3MpIHtcbiAgICAgICAgICB0aGlzLnRhZ3MgPSB2YWx1ZS5tYXAgKCh2OmFueSkgPT4gKHsgW3RoaXMuZGlzcGxheUZpZWxkXTogdiB9KSk7XG4gICAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbn1cbiJdfQ==