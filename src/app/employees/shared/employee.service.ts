import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private _fb: AngularFireDatabase) { }

  getRecords(): AngularFireList<any> | null {
    this.employeeList = this._fb.list('employees')
    return this.employeeList;
  }

  insertRecord(employee: Employee): void {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  updateRecord(employee: Employee): void {
    this.employeeList.update(employee.$key, {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary      
    })
  }

  deleteRecord($key: string): void {
    this.employeeList.remove($key);
  }
}