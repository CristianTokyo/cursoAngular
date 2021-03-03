import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // characters: Character[] = [] // toma el valor del servicio, definido abajo en el constructor

  newCharacter: Character = {
    name: 'Trunks',
    power: 7000
  }

  // get characters():Character[]{ // otra opcion con getters
  //   return this.dbzService.characters
  // }

  // addNewCharacter(arg : Character){
  //   debugger // como auto breakpoint
  //   this.characters.push(arg)
  // }

  // constructor(private dbzService: DbzService){ // inyeccion de dependencias, inyecto en el main y puso en todos
  //   // this.characters = this.dbzService.characters
  // }

  constructor(){

  }
}
