import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: ` <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>`
})
export class App {
	values = '';
	onKey(value: string) {
		this.values += value + ' | ';
	}
}


