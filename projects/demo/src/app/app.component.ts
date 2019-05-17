import { Component } from '@angular/core';
import { TagsChangedEvent } from 'ngx-tags-input/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngModelParam = [{
    displayValue: 'list'
  }, {
    displayValue: 'of'
  }, {
    displayValue: 'predefined'
  }, {
    displayValue: 'tags'
  }];

  canDeleteTagsParam = [{
    displayValue: 'can not'
  }, {
    displayValue: 'be removed'
  }];

  canAddTagsParam = [{
    displayValue: 'not able'
  }, {
    displayValue: 'to add'
  }]

  removeLastOnBackspaceParam = [{
    displayValue: 'can be'
  }, {
    displayValue: 'removed'
  }];

  maxTagsParams = [];

  optionsParam1 = [];
  optionsParam2 = [];
  optionsParam3 = [];
  
  optionsArray = [{
    displayValue: 'English'
  }, {
    displayValue: 'Dutch'
  }, {
    displayValue: 'French'
  }, {
    displayValue: 'German'
  }, {
    displayValue: 'Swedish'
  }, {
    displayValue: 'Finnish'
  }, {
    displayValue: 'Russian'
  }, {
    displayValue: 'Chinese'
  }, {
    displayValue: 'Japanese'
  }, {
    displayValue: 'Spanish'
  }, {
    displayValue: 'Portugese'
  }];

  onTagsChangedParam = [{
    displayValue: 'list'
  }, {
    displayValue: 'of'
  }, {
    displayValue: 'predefined'
  }, {
    displayValue: 'tags'
  }]

  onTagsChangedOutput ='';

  public onTagsChangedEventHandler(event: TagsChangedEvent): void {
    this.onTagsChangedOutput = JSON.stringify(event);
  }

  onMaxTagsReachedParam = [];
  onMaxTagsReachedFired = false;

  public onMaxTagsReachedEventHandler(): void {
    this.onMaxTagsReachedFired = true;
  }

  onNoOptionsMatchParam = [];
  onNoOptionsMatchOutput = false;

  public onNoOptionsMatchEventHandler(noOptionsMatched): void {
    this.onNoOptionsMatchOutput = noOptionsMatched;
  }
}
