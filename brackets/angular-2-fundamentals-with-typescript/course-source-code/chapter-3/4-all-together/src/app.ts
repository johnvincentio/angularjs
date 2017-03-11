import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: `
    <input #newEmployee
      (keyup.enter)="addEmployee(newEmployee.value)"
      (blur)="addEmployee(newEmployee.value); newEmployee.value='' ">
    <button (click)=addHero(newEmployee.value)>Add</button>
    <ul><li *ngFor="#employee of employees">{{employee}}</li></ul>
  `
})
 export class App{ 
	employees = ['Mark', 'Martin', 'John', 'Arpan'];
	addEmployee(newEmployee: string) {
		if (newEmployee) {
			this.employees.push(newEmployee);
		}
	}
}


