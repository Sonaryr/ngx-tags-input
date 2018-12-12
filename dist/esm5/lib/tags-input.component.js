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
                    template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{ tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            [id]=\"id1\"\n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            autocomplete=\"off\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            [id]=\"id2\"\n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [hidden]=\"maximumOfTagsReached()\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            autocomplete=\"off\"\n            #tagInput />\n    </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGFncy1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi90YWdzLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztJQUluRSxJQUFJLEdBQUcsY0FBTyxDQUFDOzs7SUFFZixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFFRDtJQTRCRTtRQXJCRCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUN4QixRQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsUUFBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUcsQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hELHNCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDO1FBR2xDLFNBQUksR0FBVyxPQUFPLENBQUM7UUFDdkIsMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsaUJBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMs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Ozs7OztJQUVELDZDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw4Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7O2dCQTVIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHkrREFBMEM7b0JBRTFDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDOztpQkFDakQ7Ozs7OzBCQVNFLEtBQUs7dUJBQ0wsS0FBSzt3Q0FDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7eUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzBDQUNMLEtBQUs7Z0NBQ0wsTUFBTTttQ0FDTixNQUFNO21DQUNOLE1BQU07O0lBb0dULHlCQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F4SFksa0JBQWtCOzs7SUFDOUIsc0NBQXFCOztJQUNwQixrQ0FBd0I7O0lBQ3hCLGlDQUFpRDs7SUFDakQsaUNBQWlEOztJQUNoRCwrQ0FBcUM7O0lBQ3JDLDhDQUEwQzs7SUFFM0MscUNBQXlCOztJQUN6QixrQ0FBZ0M7O0lBQ2hDLG1EQUFnRDs7SUFDaEQsMkNBQXVDOztJQUN2Qyx5Q0FBa0M7O0lBQ2xDLHFDQUE2Qjs7SUFDN0IsMENBQStDOztJQUMvQyxvREFBNEM7O0lBQzVDLCtDQUE0Qzs7SUFDNUMscURBQTZDOztJQUM3QywyQ0FBNkM7O0lBQzdDLDhDQUFnRDs7SUFDaEQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGFnc0lucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFncy1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWdzLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFncy1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgVGFnc0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gc2VsZWN0ZWQ6c3RyaW5nID0gJyc7XG4gIHB1YmxpYyB0YWdzOiBhbnlbXSA9IFtdO1xuICBpZDEgPSBNYXRoLnJhbmRvbSAoKS50b1N0cmluZyAoMzYpLnN1YnN0cmluZyAoNyk7XG4gIGlkMiA9IE1hdGgucmFuZG9tICgpLnRvU3RyaW5nICgzNikuc3Vic3RyaW5nICg3KTtcbiAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gIEBJbnB1dCgpIG1heFRhZ3M6IG51bWJlcjtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ2xpZ2h0JztcbiAgQElucHV0KCkgcmVtb3ZlTGFzdE9uQmFja3NwYWNlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNhbkRlbGV0ZVRhZ3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IG51bGw7XG4gIEBJbnB1dCgpIGRpc3BsYXlGaWVsZDogc3RyaW5nID0gJ2Rpc3BsYXlWYWx1ZSc7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aEJlZm9yZU9wdGlvbnM6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIHNjcm9sbGFibGVPcHRpb25zOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNjcm9sbGFibGVPcHRpb25zSW5WaWV3OiBudW1iZXIgPSA1O1xuICBAT3V0cHV0KCkgb25UYWdzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTWF4VGFnc1JlYWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk5vT3B0aW9uc01hdGNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gXG4gICBnZXRQbGFjZUhvbGRlcigpOiBzdHJpbmcge1xuICAgIGlmKHRoaXMudGFncyAmJiB0aGlzLnRhZ3MubGVuZ3RoID4gMCl7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG59XG4gICB0YWdzQ2hhbmdlZCh0eXBlOiBzdHJpbmcsIHRhZzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy50YWdzKTtcbiAgICAgIHRoaXMub25UYWdzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBjaGFuZ2U6IHR5cGUsXG4gICAgICAgICAgdGFnOiB0YWdcbiAgICAgIH0pO1xuICAgICAgaWYodGhpcy5tYXhpbXVtT2ZUYWdzUmVhY2hlZCgpKXtcbiAgICAgICAgICB0aGlzLm9uTWF4VGFnc1JlYWNoZWQuZW1pdCgpO1xuICAgICAgfVxuICB9XG5cbiAgIHJlbW92ZUxhc3RUYWcodGFnSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGlmKCF0aGlzLnJlbW92ZUxhc3RPbkJhY2tzcGFjZSB8fCAhdGhpcy50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhZ0lucHV0LnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgdGhpcy5yZW1vdmVUYWcodGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGgtMV0pO1xuICAgICAgfVxuICB9XG5cbiAgIGFkZFRhZyh0YWdJbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYgKHRhZ0lucHV0LnZhbHVlLnRyaW0oKSAhPT0gJycpe1xuICAgICAgICAgIGxldCB0YWcgPSAgeyBbdGhpcy5kaXNwbGF5RmllbGRdOiB0YWdJbnB1dC52YWx1ZSB9O1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyh0YWcpO1xuICAgICAgfVxuICAgICAgdGFnSW5wdXQudmFsdWUgPSAnJztcbiAgfVxuXG4gICBhZGRQcmVkZWZpbmVkVGFnKHRhZzogT2JqZWN0KTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMudGFncykgdGhpcy50YWdzID0gW107XG4gICAgICBpZiAoIXRoaXMubWF4aW11bU9mVGFnc1JlYWNoZWQoKSl7XG4gICAgICAgICAgdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICAgICAgICB0aGlzLnRhZ3NDaGFuZ2VkKCdhZGQnLCB0YWcpO1xuICAgICAgfVxuICB9XG5cbiAgIHJlbW92ZVRhZyh0YWdUb1JlbW92ZTogYW55KTogdm9pZCB7XG4gICAgICBpZighdGhpcy5pc0RlbGV0ZWFibGUodGFnVG9SZW1vdmUpKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRhZ3MgPSB0aGlzLnRhZ3MuZmlsdGVyKHRhZyA9PiB0YWdUb1JlbW92ZSAhPT0gdGFnKTtcbiAgICAgIHRoaXMudGFnc0NoYW5nZWQoJ3JlbW92ZScsIHRhZ1RvUmVtb3ZlKTtcbiAgfVxuXG4gICBtYXhpbXVtT2ZUYWdzUmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5tYXhUYWdzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnRhZ3MubGVuZ3RoPj10aGlzLm1heFRhZ3M7XG4gIH1cblxuICAgaXNEZWxldGVhYmxlKHRhZzogYW55KSB7XG4gICAgICBpZih0eXBlb2YgdGFnLmRlbGV0ZWFibGUgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRhZy5kZWxldGVhYmxlKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jYW5EZWxldGVUYWdzO1xuICB9XG4gIFxuICAgdHlwZWFoZWFkT25TZWxlY3QoZTphbnkpOnZvaWQge1xuICAgICAgaWYodHlwZW9mIGUuaXRlbSA9PT0gJ3N0cmluZycpe1xuICAgICAgICAgIHRoaXMuYWRkUHJlZGVmaW5lZFRhZyh7IFt0aGlzLmRpc3BsYXlGaWVsZF06IGUudmFsdWUgfSk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRQcmVkZWZpbmVkVGFnKGUuaXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG4gIH1cblxuICAgdHlwZWFoZWFkT25Ob01hdGNoKGU6YW55KTp2b2lkIHtcbiAgICAgIGlmKHR5cGVvZiB0aGlzLm9uTm9PcHRpb25zTWF0Y2ggIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICB0aGlzLm9uTm9PcHRpb25zTWF0Y2guZW1pdChlKVxuICAgICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMudGFncykge1xuICAgICAgICAgIHRoaXMudGFncyA9IHZhbHVlLm1hcCAoKHY6YW55KSA9PiAoeyBbdGhpcy5kaXNwbGF5RmllbGRdOiB2IH0pKTtcbiAgICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxufVxuIl19