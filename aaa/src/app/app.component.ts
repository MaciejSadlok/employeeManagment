import { Component } from '@angular/core';
import { Employee } from './employeeClass';
import { FilterPipe } from './filter.pipe';
import { Sort } from '@angular/material';
import { DeletedEmployee } from './deletedEmployeeClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  /* deletedEmployeeArray = [
    {name: 'Dziki Don', hours: 1550, ratePerHour: 231.01, summaryBrutto: 33333, summaryNetto: 22523, id: 6}
  ];



  deleteEmployee(event,name,hours,ratePerHour,summaryBrutto,summaryNetto,id){
    let deleteEmployeeOrNot = prompt("Czy chcesz usunąć pracownika " + [event.target.value] + " ?");
    if(deleteEmployeeOrNot == "tak"){
      let deletedEmployee = new DeletedEmployee(name,hours,ratePerHour,summaryBrutto,summaryNetto,id);
      deletedEmployee.name = this.employees[event.target.id].name;
      deletedEmployee.hours = this.employees[event.target.id].hours;
      deletedEmployee.ratePerHour = this.employees[event.target.id].ratePerHour;
      deletedEmployee.summaryBrutto = this.employees[event.target.id].summaryBrutto;
      deletedEmployee.summaryNetto = this.employees[event.target.id].summaryNetto;
      deletedEmployee.id = this.employees[event.target.id].id;
      this.deletedEmployeeArray.push(deletedEmployee);
      this.employees.splice(event.target.id, 1);
      this.employees.filter(function(employee){}).splice(event.target.id, 1);
      for(let i=0;i< this.employees.length;i++){
        this.employees[i].id = i;
      }
    this.term = undefined;
    this.deletedTerm = undefined;
  }
 }

  /* displayDeletedEmployee(){
   /*var txt = " ";
   [1]["0"].name
   for(let i=0;i<this.deletedEmployeeArray.length;i++){
    for(let x in this.deletedEmployeeArray[i]){
      txt += this.deletedEmployeeArray[x].name + " ";
      document.getElementById("deletedEmployee").innerHTML = txt;
      console.log(this.deletedEmployeeArray);
    }


  changeValueOfSelectedEmployee(event){
    let insertedValue: any = prompt(document.getElementById(event.target.id).innerHTML);
    if(insertedValue == ''){
      document.getElementById(event.target.id).innerHTML = document.getElementById(event.target.id).innerHTML;
      }
    else if(event.target.id === this.hours + this.id){
      this.employees[2].summaryBrutto = Math.round(insertedValue * this.employees[2].ratePerHour);
    }
    else{
      document.getElementById(event.target.id).innerHTML = insertedValue;
    }
  }

  constructor() {
    this.employees = this.employees.slice();
  }

  sortData(sort: Sort) {
    const data = this.employees.slice();
    if (!sort.active || sort.direction == '') {
      this.employees = data;
      return;
    }

    this.employees = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'hours': return compare(a.hours, b.hours, isAsc);
        case 'ratePerHour': return compare(a.ratePerHour, b.ratePerHour, isAsc);
        case 'summaryBrutto': return compare(a.summaryBrutto, b.summaryBrutto, isAsc);
        case 'summaryNetto': return compare(a.summaryNetto, b.summaryNetto, isAsc);
        default: return 0;
      }
    });
 }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
} */

}

