import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  //@Input('charactersSon') characters: Character[] = [] // characters explicitos
  @Input('newCharacterSon') newCharacter: Character = {
    name: '',
    power: undefined
  } // me trae el trunks

  @Output() onNewCharacter : EventEmitter<Character> = new EventEmitter() // va a emitir un personaje

  add() {
    if (this.newCharacter.name.trim().length === 0 || this.newCharacter.power == undefined) { // validacion no nulo
      return
    }
    //this.characters.push(this.newCharacter)
    this.onNewCharacter.emit(this.newCharacter) // coinciden los tipos de interfaz, ($event )-> html
    // se emite lo que quiera con ese evento, para mandar al padre

    this.newCharacter = {
      name: '',
      power: undefined
    }
    //console.log(this.characters)
  }

}
