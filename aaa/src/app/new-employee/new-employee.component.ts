import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeClass';
import { FilterPipe } from '../filter.pipe';
import { Sort } from '@angular/material';
import { DisplayEmployeeService } from '../services/display-employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  ngOnInit() {

  }

}
