//our root app component
import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
        <input type="text" placeholder="Enter first name" [(ngModel)]="firstName">
        <input type="text" placeholder="Enter last name" [(ngModel)]="lastName">
        <p>output</p>
    {{firstName}} {{lastName}}
    </div>
  `,
  directives: []
})
export class App {
    firstName: String;
    lastName: String;
  }
}
