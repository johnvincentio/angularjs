import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Employee}  from './employee';

@Component({
    selector: 'employee-form',
    templateUrl: 'src/employee-form.component.html'
})

export class EmployeeFormComponent{
    model = new Employee('Arpan Solanki', 'Divorced');
    submitted = false;

    onSubmit() {this.submitted = true;}

    active = true;

    newEmployee() {
        this.model = new Employee('John Wick', 'Married');
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    options = ['Married', 'Divorced', 'Single', 'Widowed'];

//    my_options = [{key: '1', value='Married'}, {key='2', value='Divorced'}, {key='3', value='Single'}, {key='4', value='Widowed'}];
}
