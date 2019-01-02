import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisplayEmployeeService } from '../services/display-employee.service';
import { Router } from '@angular/router';

import { Employee } from './../employeeClass';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit {

  id: number;
  employeeForm: FormGroup;
  wageTypes = [{value: undefined, viewValue: '-'},
     {value: 177.70, viewValue: 177.70},
     {value: 209.68, viewValue: 209.68},
     {value: 222.13, viewValue: 222.13},
     {value: 231.01, viewValue: 231.01},
     {value: 310.98, viewValue: 310.98},
     {value: 355.40, viewValue: 355.40},
     {value: 399.83, viewValue: 399.83}];
  name: string;
  surname: string;
  wage: number;
  hours: number;
  gross: number;
  net: number;
  employees: Array<Employee> = this.displayEmployeeService.employees;
 // employee = new Employee(this.name, this.surname, this.hours, this.wage, this.gross, this.net, this.id);

  constructor(private displayEmployeeService: DisplayEmployeeService, private router: Router) {}

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      hours: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(250)]),
      wage: new FormControl(null, Validators.required),
    });
  }

  public onReset(): void {
    this.employeeForm.reset();
  }

  addEmployee() {
   this.displayEmployeeService.addEmployee(
   this.employeeForm.value, this.employees.length),
   this.router.navigate(['/employees']);
  }
}
