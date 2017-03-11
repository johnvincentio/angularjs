//our root app component
import {Component, OnInit, Provide} from 'angular2/core'
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-app',
  providers: [EmployeeService],
// provide(EmployeeService, {useClass:MasterEmployeeService})

  template: `
    <div>
      <h2>Employee List</h2>
      <ul>
      <li *ngFor="#employee of employees">
        {{employee.id}}{{employee.name}}
      </li>
      </ul>
    </div>
  `,
  directives: []
})

export class App {
  employees: Employee[];

  constructor(private _employeeService: EmployeeService){}

  getEmployes(){
    this._employeeService.getEmployees().then(employees=>this.employees = employees);   // as using Promise
   //this.employees = this._employeeService.getEmployees();
  }

  ngOnInit(){
    this.getEmployes();
  }
}
