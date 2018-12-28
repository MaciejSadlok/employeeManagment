export class Employee {

    name: string;
    surname: string;
    hours: number;
    wage: number;
    gross: number;
    net: number;
    id: number;

    constructor(name, surname, hours, wage, gross, net, id){
        this.name = name;
        this.surname = surname;
        this.hours = hours;
        this.wage = wage;
        this.gross = gross;
        this.net = net;
        this.id = id;
    }
}
