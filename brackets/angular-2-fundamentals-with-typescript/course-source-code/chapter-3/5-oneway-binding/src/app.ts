//our root app component
import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
       <img src="{{heroImageUrl}}" style="height:130px">
       <span [hidden]="isValid">This field is required</span>
       <button [attr.aria-label]="actionName">{{actionName}} with Aria</button>
       <button [style.color] = "isSpecial ? 'red' : 'green'">Red</button>
    </div>
  `,
  directives: []
})
export class App {
  constructor() {
    this.heroImageUrl = 'https://avatars3.githubusercontent.com/u/1474860?v=3&s=400';
    this.isValid = false;
    this.actionName = "post";
    this.isSpecial = true;
  }
}