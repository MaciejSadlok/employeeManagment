import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employeeClass';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(employees: any, term: any) {

        if(term == undefined) return employees

        return employees.filter(function(employee){
            return employee.name.toLowerCase().includes(term.toLowerCase());
        })
    }
}