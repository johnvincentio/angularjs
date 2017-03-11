//our root app component
import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <p> The employee birthday is {{ birthday | date }} </p>
     
      <p> The employee birthday is {{ birthday | date:"MM/dd/yy" }} </p> 
      
      <p> Uppercase Birthday {{birthday | date | uppercase }}</p>
      
    </div>
  `,
  directives: []
})
export class App {
  birthday = new Date(1990, 2,15);
}