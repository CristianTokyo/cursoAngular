import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // cosas visibles fuera de este modulo, para pasar a app
        ListadoComponent,
        HeroeComponent
    ],
    imports: [ // modulos
        CommonModule // es para ngif, ngfor, directivas...
    ]
})

export class HeroesModule {

}