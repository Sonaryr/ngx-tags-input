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
    TagsInputModule
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
This section will be updated when the API is getting close to it's final form

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Maarten Schroeven](maarten@sonaryr.be)
