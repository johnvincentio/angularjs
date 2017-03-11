//our root app component
import {Component} from 'angular2/core'
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {EmployeeDetailComponent} from './employee';
import {HomeComponent} from './home';

@Component({
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS],
  template: `
    <div>
      <h2>Home Page</h2>
    <nav>
      <a [routerLink]="['/Home']">Home</a>
      <a [routerLink]="['/Employee']">Employee</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `,
   directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', component: HomeComponent, as: 'Home'},
  {
    path: '/employee',
    name: 'Employee',
    component: EmployeeDetailComponent,
  }
])

export class App {

}
