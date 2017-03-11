//our root app component
import {Component} from 'angular2/core'
import {EmployeeFormComponent} from './employee-form.component'

@Component({
    selector: 'my-app',
    providers: [],
    template: `
        <employee-form></employee-form>
    `,
    directives: [EmployeeFormComponent]
})

export class App {

}
