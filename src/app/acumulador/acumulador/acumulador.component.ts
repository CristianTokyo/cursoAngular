import { Component } from "@angular/core";

@Component({
    selector: 'app-acumular',
    template: `
        <h1>{{ title }}</h1>

        <h3>
        La base es: <strong>{{ base }}</strong>
        </h3>
        
        <button (click)="acum(-base)">-</button>
        <!--Evento ()-->
        
        <span> {{ num }} </span>
        
        <button (click)="acum(base)">+</button>
    `
})

export class AcumuladorComponent {
    title: string = 'Acumular App'
    num: number = 10
    base: number = 5

    acum(value: number) {
        this.num += value
    }
}