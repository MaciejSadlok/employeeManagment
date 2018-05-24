export class Employee {

    name: string;
    hours: number;
    ratePerHour: number;
    summaryBrutto: number;
    summaryNetto: number;
    id: number;

    constructor(name, hours, ratePerHour, summaryBrutto, summaryNetto, id){
        this.name = name;
        this.hours = hours;
        this.ratePerHour = ratePerHour;
        this.summaryBrutto = summaryBrutto;
        this.summaryNetto = summaryNetto;
        this.id = id;
    }
}
