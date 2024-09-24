import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrl: './cards-products.component.css'
})
export class CardsProductsComponent {
  
  @Input()  product!:{image:string,name:string,price:string}

}
