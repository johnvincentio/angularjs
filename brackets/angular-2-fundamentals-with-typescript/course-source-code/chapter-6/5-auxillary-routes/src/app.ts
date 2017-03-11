//our root app component
import {Component} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'employee',
    template: '<h1 >Employee Detail Component</h1>'})
export class EmployeeDetailComponent {}

@Component({
    selector: 'home',
    template: `<h1 >Home Component</h1>`,
    styles: [`.home {background: red; padding: 15px 0 0 30px;  height: 80px; width:70%;
                    font-size: 30px; float:left; box-sizing:border-box;}`]})
export class HomeComponent {}

@Component({
    selector: 'chat',
    template: `<h1 >Chat Component</h1>`,
    styles: [`.chat {background: #eee; height: 80px;width:30%; font-size: 30px;
                     float:left; display:block; box-sizing:border-box;} `]})
export class ChatComponent {}

@Component({
    selector: 'my-app',
      providers: [ROUTER_PROVIDERS],
    template: `<div><a [routerLink]="['/Home']">Home</a>
              <a [routerLink]="['/EmployeeDetail']">Employee Details</a>
              <a [routerLink]="['./Home', ['Chat']]">Chat</a></div>

              <div>
              <router-outlet></router-outlet>
              <router-outlet name="chat"></router-outlet></div>`,
    directives: [ ROUTER_DIRECTIVES]})

@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/employee', component: EmployeeDetailComponent, as: 'EmployeeDetail'  },
    {aux: '/chat', component: ChatComponent, as: 'Chat'}
])

export class App {
  constructor() {
    this.name = 'Angular2'
  }
}
