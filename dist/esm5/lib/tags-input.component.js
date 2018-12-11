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
        this.scrollableOptions = false;
        this.scrollableOptionsInView = 5;
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
    /**
     * @param {?} e
     * @return {?}
     */
    TagsInputComponent.prototype.typeaheadOnSelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _a;
        if (typeof e.item === 'string') {
            this.addPredefinedTag((_a = {},
                _a[this.displayField] = e.value,
                _a));
        }
        else {
            this.addPredefinedTag(e.item);
        }
        this.selected = '';
    };
    /**
     * @param {?} e
     * @return {?}
     */
    TagsInputComponent.prototype.typeaheadOnNoMatch = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (typeof this.onNoOptionsMatch !== 'undefined') {
            this.onNoOptionsMatch.emit(e);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TagsInputComponent.prototype.writeValue = /**
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
                    template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n    </div>\n</div>",
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
        scrollableOptions: [{ type: Input }],
        scrollableOptionsInView: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi90YWdzLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztJQUluRSxJQUFJLEdBQUcsY0FBTyxDQUFDOzs7SUFFZixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFFRDtJQTBCRTtRQW5CQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztRQUdsQyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUN2QyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLDJCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLElBQUksWUFBWSxF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O3lDQUNMLEtBQUs7b0NBQ0wsS0FBSzswQ0FDTCxLQUFLO2dDQUNMLE1BQU07bUNBQ04sTUFBTTttQ0FDTixNQUFNOztJQXVHVCx5QkFBQztDQUFBLEFBL0hELElBK0hDO1NBekhZLGtCQUFrQjs7O0lBQzVCLHNDQUFxQjs7SUFDdEIsa0NBQXdCOztJQUN2QiwrQ0FBcUM7O0lBQ3JDLDhDQUEwQzs7SUFFM0MscUNBQXlCOztJQUN6QixrQ0FBZ0M7O0lBQ2hDLG1EQUFnRDs7SUFDaEQsMkNBQXVDOztJQUN2Qyx5Q0FBa0M7O0lBQ2xDLHFDQUE2Qjs7SUFDN0IsMENBQStDOztJQUMvQyxvREFBNEM7O0lBQzVDLCtDQUE0Qzs7SUFDNUMscURBQTZDOztJQUM3QywyQ0FBNkM7O0lBQzdDLDhDQUFnRDs7SUFDaEQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJ25neC1ib290c3RyYXAnXG5cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRhZ3NJbnB1dENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhZ3MtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFncy1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhZ3MtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFRhZ3NJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgc2VsZWN0ZWQ6c3RyaW5nID0gJyc7XG4gIHB1YmxpYyB0YWdzOiBhbnlbXSA9IFtdO1xuICAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgQElucHV0KCkgbWF4VGFnczogbnVtYmVyO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnbGlnaHQnO1xuICBASW5wdXQoKSByZW1vdmVMYXN0T25CYWNrc3BhY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY2FuRGVsZXRlVGFnczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0gbnVsbDtcbiAgQElucHV0KCkgZGlzcGxheUZpZWxkOiBzdHJpbmcgPSAnZGlzcGxheVZhbHVlJztcbiAgQElucHV0KCkgbWluTGVuZ3RoQmVmb3JlT3B0aW9uczogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgc2Nyb2xsYWJsZU9wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2Nyb2xsYWJsZU9wdGlvbnNJblZpZXc6IG51bWJlciA9IDU7XG4gIEBPdXRwdXQoKSBvblRhZ3NDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25NYXhUYWdzUmVhY2hlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTm9PcHRpb25zTWF0Y2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbiAgIGdldFBsYWNlSG9sZGVyKCk6IHN0cmluZyB7XG4gICAgaWYodGhpcy50YWdzICYmIHRoaXMudGFncy5sZW5ndGggPiAwKXtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcbn1cblxuICAgdGFnc0NoYW5nZWQodHlwZTogc3RyaW5nLCB0YWc6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMudGFncyk7XG4gICAgICB0aGlzLm9uVGFnc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgY2hhbmdlOiB0eXBlLFxuICAgICAgICAgIHRhZzogdGFnXG4gICAgICB9KTtcbiAgICAgIGlmKHRoaXMubWF4aW11bU9mVGFnc1JlYWNoZWQoKSl7XG4gICAgICAgICAgdGhpcy5vbk1heFRhZ3NSZWFjaGVkLmVtaXQoKTtcbiAgICAgIH1cbiAgfVxuXG4gICByZW1vdmVMYXN0VGFnKHRhZ0lucHV0OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgICBpZighdGhpcy5yZW1vdmVMYXN0T25CYWNrc3BhY2UgfHwgIXRoaXMudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0YWdJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgIHRoaXMucmVtb3ZlVGFnKHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoLTFdKTtcbiAgICAgIH1cbiAgfVxuXG4gICBhZGRUYWcodGFnSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGlmICh0YWdJbnB1dC52YWx1ZS50cmltKCkgIT09ICcnKXtcbiAgICAgICAgICBsZXQgdGFnID0ge1xuICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5RmllbGRdOiB0YWdJbnB1dC52YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5hZGRQcmVkZWZpbmVkVGFnKHRhZyk7XG4gICAgICB9XG4gICAgICB0YWdJbnB1dC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgIGFkZFByZWRlZmluZWRUYWcodGFnOiBPYmplY3QpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5tYXhpbXVtT2ZUYWdzUmVhY2hlZCgpKXtcbiAgICAgICAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgICAgICAgIHRoaXMudGFnc0NoYW5nZWQoJ2FkZCcsIHRhZyk7XG4gICAgICB9XG4gIH1cblxuICAgcmVtb3ZlVGFnKHRhZ1RvUmVtb3ZlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmKCF0aGlzLmlzRGVsZXRlYWJsZSh0YWdUb1JlbW92ZSkpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFncyA9IHRoaXMudGFncy5maWx0ZXIodGFnID0+IHRhZ1RvUmVtb3ZlICE9PSB0YWcpO1xuICAgICAgdGhpcy50YWdzQ2hhbmdlZCgncmVtb3ZlJywgdGFnVG9SZW1vdmUpO1xuICB9XG5cbiAgIG1heGltdW1PZlRhZ3NSZWFjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm1heFRhZ3MgIT09ICd1bmRlZmluZWQnICYmIHRoaXMudGFncy5sZW5ndGg+PXRoaXMubWF4VGFncztcbiAgfVxuXG4gICBpc0RlbGV0ZWFibGUodGFnOiBhbnkpIHtcbiAgICAgIGlmKHR5cGVvZiB0YWcuZGVsZXRlYWJsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGFnLmRlbGV0ZWFibGUpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZVRhZ3M7XG4gIH1cblxuICAgdHlwZWFoZWFkT25TZWxlY3QoZTpUeXBlYWhlYWRNYXRjaCk6dm9pZCB7XG4gICAgICBpZih0eXBlb2YgZS5pdGVtID09PSAnc3RyaW5nJyl7XG4gICAgICAgICAgdGhpcy5hZGRQcmVkZWZpbmVkVGFnKHtcbiAgICAgICAgICAgICAgW3RoaXMuZGlzcGxheUZpZWxkXTogZS52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyhlLml0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICB9XG5cbiAgIHR5cGVhaGVhZE9uTm9NYXRjaChlOmFueSk6dm9pZCB7XG4gICAgICBpZih0eXBlb2YgdGhpcy5vbk5vT3B0aW9uc01hdGNoICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgdGhpcy5vbk5vT3B0aW9uc01hdGNoLmVtaXQoZSlcbiAgICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRhZ3MpIHtcbiAgICAgICAgICB0aGlzLnRhZ3MgPSB2YWx1ZTtcbiAgICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxufVxuIl19