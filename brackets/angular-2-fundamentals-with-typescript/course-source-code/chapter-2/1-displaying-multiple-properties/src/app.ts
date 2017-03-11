//our root app component
import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>{{title}}</h2>
      <h2>{{myEmployee}}</h2>
     </div>
  `,
  directives: []
})
export class App {
  title = 'Employee Data';
  myEmployee = 'Mr John';
}
