import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `<button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})
 export class App{ 
	clickMessage = '';

	onClickMe() {
		this.clickMessage = 'You are my fav employee!';
	}
}

