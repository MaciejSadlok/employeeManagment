import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeClass';
import { FilterPipe } from '../filter.pipe';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  id: number;
  hours: number;
  ratePerHour: number;
  selectedRate: number;
  term: any;
  deletedTerm: any;
  ratePerHourTypes: Array<number> = [0, 177.70, 209.68, 222.13, 231.01, 310.98, 355.40, 399.83];
  summaryBrutto: number;
  summaryNetto: number;



  constructor() { }

  ngOnInit() {
  }


  getWageValueFromForm(event) {
     this.selectedRate = event.target.value;
  }
}
