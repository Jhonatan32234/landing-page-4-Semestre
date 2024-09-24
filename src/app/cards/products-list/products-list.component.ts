import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products = [
    {image:'image 9.png',name:'Crema corporal AVON 1L.',price:'$65.25'},
    {image:'image 10.png',name:'Lapiceros de colores, punta fina.',price:'$125.50'},
    {image:'image 12.png',name:'Caja de galletas emperador 382g.',price:'$150.90'},
    {image:'image 13.png',name:'Limpiador multiusos Pinol repelente aroma citricos 1.65L',price:'$87.94'},
    {image:'image 11.png',name:'Rolecitos de canela 220g.',price:'$97.99'},
    {image:'image 14.png',name:'Fabuloso Limpiador - Aroma a Mar Fresco, Botella de 1 Galon',price:'$450.99'}
  ]
}
