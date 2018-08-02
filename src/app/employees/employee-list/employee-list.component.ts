import { ToastrService } from 'ngx-toastr';
import { Employee } from './../shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'angFb-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private _service: EmployeeService,
    private _toastr: ToastrService) { }

  ngOnInit() {
    let empLoyees = this._service.getRecords();
    empLoyees.snapshotChanges().subscribe((item) => {
      this.employeeList = [];
      item.forEach(element => {
        let payload: any = element.payload.toJSON();
        payload['$key'] = element.key;
        this.employeeList.push(payload);
      });
    })
  }

  onEdit(emp: Employee) {
    this._service.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if(confirm("Do you wanna delete this?")) {
      this._service.deleteRecord(key);
      this._toastr.warning("Employee delete successfully", "Employee Registration");  
    }
  }

}
