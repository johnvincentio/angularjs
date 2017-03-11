import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: '<h1 class="home"> Dependent Component</h1>',
  styles: ['.home {background: blue}']
})

export class DependentComponent{

}
