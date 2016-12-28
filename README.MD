# ng2-tags-input
## Disclaimer
This package is still under active development and might undergo heavy (breaking) changes. please be aware of this when using it.

## Installation

To install this library, run:

```bash
$ npm install ng2-tags-input --save
```

## Consuming the library

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { TagsInputModule } from 'ng2-tags-input/dist';

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
| `ngModel` |N/A|The variable you whish to bind your tags to.|
| `onTagsChanged ` |N/A|Will be called when a change is made to the tags `$event` will have the following structure: `{change: 'add', tag: {}}` where `change` can be `add` or `remove`|
| `removeLastOnBackspace` |`false`|Boolean indicating that you can remove the last tag in the row when you press backspace in the input area when it is empty |
|`canDeleteTags`|`true`| Boolean indicating wether tags can be removed or not |
|`placeholder`|`''`| Placeholder text to display when not tags are present |
|`options`|N/A| List of selectable options to add via the typeahead. Can be Array of strings, objects or an Observable for external matching process 

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
