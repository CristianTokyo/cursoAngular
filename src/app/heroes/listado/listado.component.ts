import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Ferralkon', 'Goku', 'Vegeta', 'Trunks']
  deletedHero: string = ''

  deleteHero(index: number): void {
    let res: boolean = confirm('Eliminar?')
    if (res) {
      this.deletedHero = this.heroes.splice(index, 1).join(',')
      console.log("Borrado...")
    }
  }

}

