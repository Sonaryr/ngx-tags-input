(function (global, factory) { 
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('ngx-bootstrap/typeahead')) :
    typeof define === 'function' && define.amd ? define('ngx-tags-input', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'ngx-bootstrap/typeahead'], factory) :
    (factory((global['ngx-tags-input'] = {}),global.ng.core,global.ng.common,global.ng.forms,global.typeahead));
}(this, (function (exports,i0,common,forms,typeahead) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TagsInputService = /** @class */ (function () {
        function TagsInputService() {
        }
        TagsInputService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TagsInputService.ctorParameters = function () { return []; };
        /** @nocollapse */ TagsInputService.ngInjectableDef = i0.defineInjectable({ factory: function TagsInputService_Factory() { return new TagsInputService(); }, token: TagsInputService, providedIn: "root" });
        return TagsInputService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () { };
    /** @type {?} */
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return TagsInputComponent; }),
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
            this.onTagsChanged = new i0.EventEmitter();
            this.onMaxTagsReached = new i0.EventEmitter();
            this.onNoOptionsMatch = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'tags-input',
                        template: "<div class=\"tags-input form-group\">\n    <div class=\"form-control\">\n        <span class=\"tags-input__tag badge\" ngClass=\"badge-{{ type }}\" *ngFor=\"let tag of tags\">\n            {{tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" \n                role=\"button\" \n                class=\"tags-input__tag-remove-btn\" \n                (click)=\"removeTag(tag)\" \n                (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n    </div>\n</div>",
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        styles: [":host{overflow:auto;white-space:nowrap}.tags-input{align-items:center;display:flex;flex-wrap:wrap}.tags-input__tag{display:inline-block;margin-bottom:2px;margin-right:5px;padding-right:.3em;font-size:110%;font-weight:initial;border:1px solid grey}.tags-input__tag-remove-btn{cursor:pointer;display:inline-block;font-size:12px;margin:-3px 0 0 3px;padding:0;vertical-align:top}.tags-input__input-field{border:none;flex-grow:1;outline:0}"]
                    }] }
        ];
        /** @nocollapse */
        TagsInputComponent.ctorParameters = function () { return []; };
        TagsInputComponent.propDecorators = {
            maxTags: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            removeLastOnBackspace: [{ type: i0.Input }],
            canDeleteTags: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            displayField: [{ type: i0.Input }],
            minLengthBeforeOptions: [{ type: i0.Input }],
            scrollableOptions: [{ type: i0.Input }],
            scrollableOptionsInView: [{ type: i0.Input }],
            onTagsChanged: [{ type: i0.Output }],
            onMaxTagsReached: [{ type: i0.Output }],
            onNoOptionsMatch: [{ type: i0.Output }]
        };
        return TagsInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TagsInputModule = /** @class */ (function () {
        function TagsInputModule() {
        }
        /**
         * @return {?}
         */
        TagsInputModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TagsInputModule,
                    providers: []
                };
            };
        TagsInputModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [TagsInputComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            typeahead.TypeaheadModule
                        ],
                        exports: [TagsInputComponent]
                    },] }
        ];
        return TagsInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TagsInputService = TagsInputService;
    exports.TagsInputComponent = TagsInputComponent;
    exports.TagsInputModule = TagsInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-tags-input.umd.js.map