//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <h2>Hello {{employeeName}}</h2>

    </div>
  `,
  directives: []
})
export class App {
    public employeeName: String

    employeeName = "someone"

  constructor() {
    this.name = 'Angular2 (Release Candidate!)'
  }
}
