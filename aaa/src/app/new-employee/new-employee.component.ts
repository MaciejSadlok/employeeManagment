import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeClass';
import { FilterPipe } from '../filter.pipe';
import { Sort } from '@angular/material';
import { DisplayEmployeeService } from '../services/display-employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  selectedRate: any;
  name: any;
  hours: any;
  ratePerHourTypes = [{value: undefined, viewValue: '-'},
     {value: 177.70, viewValue: 177.70},
     {value: 209.68, viewValue: 209.68}, 
     {value: 222.13, viewValue: 222.13}, 
     {value: 231.01, viewValue: 231.01}, 
     {value: 310.98, viewValue: 310.98}, 
     {value: 355.40, viewValue: 355.40}, 
     {value: 399.83, viewValue: 399.83}];
  summaryBrutto: number;
  summaryNetto: number;
  employees = this.displayEmployeeService.employees;

  constructor(private displayEmployeeService: DisplayEmployeeService) { }

  ngOnInit() {
  }

    addEmployee() {
      if (this.name !== undefined && this.hours !== undefined && this.selectedRate !== undefined) {
      this.displayEmployeeService.addEmployee(this.name, this.hours, this.selectedRate, this.summaryBrutto, this.summaryNetto,
      this.employees.length);
      this.name = undefined;
      this.hours = undefined;
    } else {
      alert('Proszę podać dane!');
    }
  }

}
