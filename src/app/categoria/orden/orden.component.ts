import { Component } from '@angular/core';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrl: './orden.component.css'
})
export class OrdenComponent {

  opciones=["Ordenar por:","Nombre","Fecha","Importancia"];
  opcionSeleccionada = this.opciones[0]

}
