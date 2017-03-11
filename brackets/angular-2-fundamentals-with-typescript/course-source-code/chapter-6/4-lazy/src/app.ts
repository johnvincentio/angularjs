//our root app component
import {Component} from 'angular2/core'
import {EmployeeDetailComponent} from './employee';
import {HomeComponent} from './home';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS],
  template: `
    <div>
      <h2>Home Page</h2>
      <nav>
      <a [routerLink]="['/Home']">Home</a>
      <a [routerLink]="['/Employee',{id:1234}]">Employee</a>
      <a [routerLink]="['/History']">History</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

// example of lazy loading
@RouteConfig([
  { path: '/', component:HomeComponent, as: 'Home'},
  {
    path:'/employee/:id',
    name:'Employee',
    component: EmployeeDetailComponent,
    data:{isProd:true}
  },
    {
        path: '/history',
    loader:() => System.import('src/history')
        .then(libModule => libModule.HistoryComponent),
        as: 'History'
    }
])

export class App {

}
