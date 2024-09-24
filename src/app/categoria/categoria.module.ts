import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { OrdenComponent } from './orden/orden.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContenedorComponent,
    OrdenComponent,
    SeleccionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ContenedorComponent
  ]
})
export class CategoriaModule { }
