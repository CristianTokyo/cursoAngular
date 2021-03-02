import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    name: string = 'IronMan'
    age: number = 45

    get upperName(): string{
        return this.name.toUpperCase()
    }

    getName(): string {
        return `${this.name} -- ${this.age}`
    }

    changeName():void{
        this.name= 'SpiderMan'
    }

    changeAge():void{
        console.log('hey...')
        this.age = 30
    }

}