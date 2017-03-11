import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Employee} from  './employee'

@Component({
  selector: 'app',
  template: `  			 
<h1>{{title}}</h1>
  <h2>My favorite Employee is: {{myEmployee.name}}</h2>
  <p>Employees:</p>
  <ul>
    <li *ngFor="#employee of employees">
      {{ employee.name }}
      </li>
  </ul>
  <p *ngIf="employees.length > 3">There are many employees!</p>
  			`
})
 export class App{ 
	title = 'Employees';
	employees = [
		new Employee(1, 'Tom'),
		new Employee(13, 'John'),
		new Employee(15, 'Mark'),
		new Employee(20, 'Tim')
	];
	myEmployee = this.employees[0];
	
}


