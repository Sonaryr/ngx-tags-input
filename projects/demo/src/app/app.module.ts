import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxTagsInputModule } from 'ngx-tags-input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgxTagsInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
