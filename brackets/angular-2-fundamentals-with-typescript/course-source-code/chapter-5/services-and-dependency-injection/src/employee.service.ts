import {Employee} from './employee';
import {EMPLOYEES} from './mock-employees';
import {Injectable} from 'angular2/core';

@Injectable()
export class EmployeeService {
  getEmployees() {
    //return EMPLOYEES;
    return Promise.resolve(EMPLOYEES);
  }
}
