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
            var tag = (_a = {}, _a[this.displayField] = tagInput.value, _a);
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
        if (!this.tags)
            this.tags = [];
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
            this.addPredefinedTag((_a = {}, _a[this.displayField] = e.value, _a));
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
        var _this = this;
        if (value !== this.tags) {
            this.tags = value.map(function (v) {
                var _a;
                return (_a = {}, _a[_this.displayField] = v, _a);
            });
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
                    template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{ tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            autocomplete=\"none\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [hidden]=\"maximumOfTagsReached()\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            autocomplete=\"none\"\n            #tagInput />\n    </div>\n</div>\n{{ displayField }}",
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    styles: [":host{overflow:auto;white-space:nowrap}.tags-input{align-items:center;display:flex;flex-wrap:wrap}.tags-input__tag{display:inline-block;margin-right:5px;padding-right:.3em;font-size:110%;font-weight:initial;border:1px solid grey}.tags-input__tag-remove-btn{cursor:pointer;display:inline-block;font-size:12px;margin:-3px 0 0 3px;padding:0;vertical-align:top}.tags-input__input-field{border:1px solid transparent;flex-grow:1;outline:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi90YWdzLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztJQUluRSxJQUFJLEdBQUcsY0FBTyxDQUFDOzs7SUFFZixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFFRDtJQTBCRTtRQW5CRCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztRQUdsQyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUN2QyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLDJCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLElBQUksWUFBWSxF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UyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwyOERBQTBDO29CQUUxQyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzs7aUJBQ2pEOzs7OzswQkFPRSxLQUFLO3VCQUNMLEtBQUs7d0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lDQUNMLEtBQUs7b0NBQ0wsS0FBSzswQ0FDTCxLQUFLO2dDQUNMLE1BQU07bUNBQ04sTUFBTTttQ0FDTixNQUFNOztJQW1HVCx5QkFBQztDQUFBLEFBM0hELElBMkhDO1NBckhZLGtCQUFrQjs7O0lBQzlCLHNDQUFxQjs7SUFDcEIsa0NBQXdCOztJQUN2QiwrQ0FBcUM7O0lBQ3JDLDhDQUEwQzs7SUFFM0MscUNBQXlCOztJQUN6QixrQ0FBZ0M7O0lBQ2hDLG1EQUFnRDs7SUFDaEQsMkNBQXVDOztJQUN2Qyx5Q0FBa0M7O0lBQ2xDLHFDQUE2Qjs7SUFDN0IsMENBQStDOztJQUMvQyxvREFBNEM7O0lBQzVDLCtDQUE0Qzs7SUFDNUMscURBQTZDOztJQUM3QywyQ0FBNkM7O0lBQzdDLDhDQUFnRDs7SUFDaEQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGFnc0lucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFncy1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWdzLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFncy1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgVGFnc0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gc2VsZWN0ZWQ6c3RyaW5nID0gJyc7XG4gIHB1YmxpYyB0YWdzOiBhbnlbXSA9IFtdO1xuICAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgQElucHV0KCkgbWF4VGFnczogbnVtYmVyO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnbGlnaHQnO1xuICBASW5wdXQoKSByZW1vdmVMYXN0T25CYWNrc3BhY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY2FuRGVsZXRlVGFnczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0gbnVsbDtcbiAgQElucHV0KCkgZGlzcGxheUZpZWxkOiBzdHJpbmcgPSAnZGlzcGxheVZhbHVlJztcbiAgQElucHV0KCkgbWluTGVuZ3RoQmVmb3JlT3B0aW9uczogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgc2Nyb2xsYWJsZU9wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2Nyb2xsYWJsZU9wdGlvbnNJblZpZXc6IG51bWJlciA9IDU7XG4gIEBPdXRwdXQoKSBvblRhZ3NDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25NYXhUYWdzUmVhY2hlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTm9PcHRpb25zTWF0Y2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gXG4gICBnZXRQbGFjZUhvbGRlcigpOiBzdHJpbmcge1xuICAgIGlmKHRoaXMudGFncyAmJiB0aGlzLnRhZ3MubGVuZ3RoID4gMCl7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG59XG4gICB0YWdzQ2hhbmdlZCh0eXBlOiBzdHJpbmcsIHRhZzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy50YWdzKTtcbiAgICAgIHRoaXMub25UYWdzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBjaGFuZ2U6IHR5cGUsXG4gICAgICAgICAgdGFnOiB0YWdcbiAgICAgIH0pO1xuICAgICAgaWYodGhpcy5tYXhpbXVtT2ZUYWdzUmVhY2hlZCgpKXtcbiAgICAgICAgICB0aGlzLm9uTWF4VGFnc1JlYWNoZWQuZW1pdCgpO1xuICAgICAgfVxuICB9XG5cbiAgIHJlbW92ZUxhc3RUYWcodGFnSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGlmKCF0aGlzLnJlbW92ZUxhc3RPbkJhY2tzcGFjZSB8fCAhdGhpcy50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhZ0lucHV0LnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgdGhpcy5yZW1vdmVUYWcodGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGgtMV0pO1xuICAgICAgfVxuICB9XG5cbiAgIGFkZFRhZyh0YWdJbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYgKHRhZ0lucHV0LnZhbHVlLnRyaW0oKSAhPT0gJycpe1xuICAgICAgICAgIGxldCB0YWcgPSAgeyBbdGhpcy5kaXNwbGF5RmllbGRdOiB0YWdJbnB1dC52YWx1ZSB9O1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyh0YWcpO1xuICAgICAgfVxuICAgICAgdGFnSW5wdXQudmFsdWUgPSAnJztcbiAgfVxuXG4gICBhZGRQcmVkZWZpbmVkVGFnKHRhZzogT2JqZWN0KTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMudGFncykgdGhpcy50YWdzID0gW107XG4gICAgICBpZiAoIXRoaXMubWF4aW11bU9mVGFnc1JlYWNoZWQoKSl7XG4gICAgICAgICAgdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICAgICAgICB0aGlzLnRhZ3NDaGFuZ2VkKCdhZGQnLCB0YWcpO1xuICAgICAgfVxuICB9XG5cbiAgIHJlbW92ZVRhZyh0YWdUb1JlbW92ZTogYW55KTogdm9pZCB7XG4gICAgICBpZighdGhpcy5pc0RlbGV0ZWFibGUodGFnVG9SZW1vdmUpKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRhZ3MgPSB0aGlzLnRhZ3MuZmlsdGVyKHRhZyA9PiB0YWdUb1JlbW92ZSAhPT0gdGFnKTtcbiAgICAgIHRoaXMudGFnc0NoYW5nZWQoJ3JlbW92ZScsIHRhZ1RvUmVtb3ZlKTtcbiAgfVxuXG4gICBtYXhpbXVtT2ZUYWdzUmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5tYXhUYWdzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnRhZ3MubGVuZ3RoPj10aGlzLm1heFRhZ3M7XG4gIH1cblxuICAgaXNEZWxldGVhYmxlKHRhZzogYW55KSB7XG4gICAgICBpZih0eXBlb2YgdGFnLmRlbGV0ZWFibGUgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRhZy5kZWxldGVhYmxlKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jYW5EZWxldGVUYWdzO1xuICB9XG5cbiAgIHR5cGVhaGVhZE9uU2VsZWN0KGU6YW55KTp2b2lkIHtcbiAgICAgIGlmKHR5cGVvZiBlLml0ZW0gPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICB0aGlzLmFkZFByZWRlZmluZWRUYWcoeyBbdGhpcy5kaXNwbGF5RmllbGRdOiBlLnZhbHVlIH0pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyhlLml0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICB9XG5cbiAgIHR5cGVhaGVhZE9uTm9NYXRjaChlOmFueSk6dm9pZCB7XG4gICAgICBpZih0eXBlb2YgdGhpcy5vbk5vT3B0aW9uc01hdGNoICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgdGhpcy5vbk5vT3B0aW9uc01hdGNoLmVtaXQoZSlcbiAgICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRhZ3MpIHtcbiAgICAgICAgICB0aGlzLnRhZ3MgPSB2YWx1ZS5tYXAgKCh2OmFueSkgPT4gKHsgW3RoaXMuZGlzcGxheUZpZWxkXTogdiB9KSk7XG4gICAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbn1cbiJdfQ==