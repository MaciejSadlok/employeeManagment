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
  ratePerHourTypes: Array<any> = [undefined, 177.70, 209.68, 222.13, 231.01, 310.98, 355.40, 399.83];
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

  getWageValueFromForm(event) {
    this.selectedRate = event.target.value;
 }



}
