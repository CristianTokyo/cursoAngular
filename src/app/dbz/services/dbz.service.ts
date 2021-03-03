import { Inject, Injectable } from "@angular/core";
//import { Injectable} from '@angular/core'
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    private _characters: Character[] = [
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

    get characters(): Character[] {
        return [...this._characters] // separa el arreglo, 'spread' rompre referencia
    }

    constructor() {}

    addCharacter(data: Character) {
        this._characters.push(data)
    }

    deleteCharacter(index : number){
        this._characters.splice(index, 1);
    }

}