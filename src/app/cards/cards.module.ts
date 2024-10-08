import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsProductsComponent } from './cards-products/cards-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardsProductsComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ProductsListComponent
  ]
})
export class CardsModule { }
