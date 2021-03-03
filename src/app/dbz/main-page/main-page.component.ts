import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    },
    {
      name: 'Krillin',
      power: 700
    }
  ]

  newCharacter: Character = {
    name: 'Trunks',
    power: 7000
  }

  addNewCharacter(arg : Character){
    this.characters.push(arg)
  }

  
}
