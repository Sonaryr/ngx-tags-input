# ngx-tags-input

## Installation

To install this library, run:

```bash
$ npm install ngx-tags-input --save
```

## Consuming the library

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { TagsInputModule } from 'ngx-tags-input/dist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    TagsInputModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use it in your code

```xml
...
<tags-input class="form-control input-lg" (onTagsChanged)="onTagsChanged($event)" [removeLastOnBackspace]="removeLastOnBackspace" [(ngModel)]="tags" name="tags"></tags-input>
...
```

## API
| Key     | Default | Remarks |
|------   |------|------|
| `ngModel` |N/A|The variable you whish to bind your tags to. Must be an Array|
| `removeLastOnBackspace` |`false`|Boolean indicating that you can remove the last tag in the row when you press backspace in the input area when it is empty |
| `canDeleteTags` |`true`| Boolean indicating wether tags can be removed or not |
| `placeholder` |`''`| Placeholder text to display when not tags are present |
| `maxTags` |N/A| maximum number tags allowed to select |
| `options` |N/A| List of selectable options to add via the typeahead. Can be Array of strings, objects or an Observable for external matching process |
| `displayField` |`'displayValue'`| Name of the property to show in the dropdown |
|`minLengthBeforeOptions`|`1`| The length of the typed string before the dropdown is shown. Putting this to `0` will display it on focus |
|`scrollableOptions`|`false`| Boolean indicator wether the user can scroll in the dropdown |
|`scrollableOptionsInView`|`5`| Amount of options shown in the view when the dropdown is scrollable |
| `onNoOptionsMatch` |N/A| Will be called on every keystroke. `$event` will be `true` when none of the given options match the entered text |
| `onTagsChanged` |N/A|Will be called when a change is made to the tags `$event` will have the following structure: `{change: 'add', tag: {}}` where `change` can be `add` or `remove`|
| `onMaxTagsReached` |N/A|Will be called when the maximum amount of tags has been reached|

## Development

To generate all the necessary files:

```bash
$ npm run ngc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Maarten Schroeven](maarten@sonaryr.be)
