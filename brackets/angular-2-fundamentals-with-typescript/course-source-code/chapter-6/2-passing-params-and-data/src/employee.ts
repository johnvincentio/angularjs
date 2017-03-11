import {Component} from 'angular2/core';
import {RouteParams, RouteData} from 'angular2/router';

@Component({
  selector:'employee',
  template: '<h1 class="employee"> Employee Page for :{{employeeID}}</h1>'
  styles:['.employee {background: yellow}']

})

export class EmployeeDetailComponent{
  productID: string;

  constructor(params: RouteParams, data: RouteData){
    this.employeeID = params.get('id');
    console.log(" this is prod env" + data.get('isProd'));
  }
}
