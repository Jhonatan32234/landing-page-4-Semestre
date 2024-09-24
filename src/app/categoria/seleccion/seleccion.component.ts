import { Component } from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent {
  categorias=['Categoria1','Categoria2','Categoria3'];
  selectedCategorias:{[key:string]:boolean}={};

  constructor(){
    this.categorias.forEach(category =>{
      this.selectedCategorias[category]= false;
    }
    )
  }
}
