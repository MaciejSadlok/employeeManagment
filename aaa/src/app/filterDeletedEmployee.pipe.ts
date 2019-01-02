import { Pipe, PipeTransform } from '@angular/core';
import { DeletedEmployee } from './deletedEmployeeClass';

@Pipe({
    name: 'filterDeletedEmployee'
})

export class FilterDeletedEmployeePipe implements PipeTransform {

    transform(deletedEmployeeArray: any, deletedTerm: any) {

        if (deletedTerm === undefined) {
        return deletedEmployeeArray;
      }

        return deletedEmployeeArray.filter(function(deletedEmployeeArray){
            return deletedEmployeeArray.name.toLowerCase().includes(deletedTerm.toLowerCase());
        })
    }
}
