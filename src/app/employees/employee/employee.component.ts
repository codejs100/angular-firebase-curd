import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'angFb-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: Employee;
  @ViewChild('form') formRef: NgForm;
  constructor(private _service: EmployeeService,
              private _toastr: ToastrService) { }

  ngOnInit() {
  //  this.selectedEmployee = this._service.selectedEmployee;
    this.resetForm(this.formRef);
  }

  onSubmit(formRef: NgForm): void {
    if(formRef.value.$key == null) {
      this._service.insertRecord(formRef.value);
      this._toastr.success('Sumitted Successfully.', 'Employee Registration');    
    } else {
      this._service.updateRecord(formRef.value);
      this._toastr.success('Updated Successfully.', 'Employee Registration');    
    }
    this.resetForm(formRef);
  }

  resetForm(formRef?: NgForm): void {
    formRef.reset();
    this.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0
    };
  }
}
