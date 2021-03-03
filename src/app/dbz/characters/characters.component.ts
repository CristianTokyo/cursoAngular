import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})

export class CharactersComponent {
  @Input('charactersSon') characters: Character[] = [] // van a venir desde el componente padre

}
