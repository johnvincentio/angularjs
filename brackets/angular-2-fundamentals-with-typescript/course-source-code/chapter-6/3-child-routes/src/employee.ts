import {Component} from 'angular2/core';
import {RouteParams, RouteData} from 'angular2/router';
import  {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {DependentComponent} from './dependent';
import {DescriptionComponent} from './description';

@Component({

 selector: 'employee',

 template: `<h1 class="employee1"> Employee Page for  {{employeeID}}</h1>
  <router-outlet></router-outlet>
 <a [routerLink]="['./Dependent']">Dependent Info link</a>

 `,
 styles: ['.employee1 {background: yellow}'],
   directives: [ROUTER_DIRECTIVES]

})

@RouteConfig([
   {path: '/', component: DescriptionComponent, as: 'Description'  }
    {path: '/dependent', component: DependentComponent, as: 'Dependent'  }
])

export class EmployeeDetailComponent{
    employeeID: string;

    constructor(params: RouteParams, data: RouteData){
      this.employeeID = params.get('id');
      console.log("this is prod env" + data.get('isProd'));
    }
}
