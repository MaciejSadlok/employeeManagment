import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisplayEmployeeService } from '../services/display-employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  
  employee = new Employee;
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
  employees = this.displayEmployeeService.employees;

  constructor(private displayEmployeeService: DisplayEmployeeService, private router: Router) {}
  
  ngOnInit() {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      hours: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(250)]),
      wage: new FormControl(null, Validators.required),
    });
  }

  onReset() {
    this.employeeForm.reset()
  }

  addEmployee() {
    this.displayEmployeeService.addEmployee(this.employee.name = this.employeeForm.get('name').value,
    this.employee.surname = this.employeeForm.get('surname').value,
    this.employee.hours = this.employeeForm.get('hours').value,
    this.employee.wage = this.employeeForm.get('wage').value, this.gross, this.net,
    this.employees.length)
    this.router.navigate(['/employees'])
  }
}

class Employee{
  constructor(
    public name?: string,
    public surname?: string,
    public hours?: number,
    public wage?: number,
    public gross?: number,
    public net?: number,
    public id?: number
  ) {}

}

