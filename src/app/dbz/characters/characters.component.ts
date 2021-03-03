import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})

export class CharactersComponent {
  // @Input('charactersSon') characters: Character[] = [] // van a venir desde el componente padre
  get characters(){
    return this.dbzService.characters
  }

  delete(index: number){
    this.dbzService.deleteCharacter(index)
  }

  constructor( private dbzService: DbzService){}

}
