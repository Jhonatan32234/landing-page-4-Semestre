import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDataComponent } from './product-data/product-data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ProductDataComponent
  ]
})
export class BuyStructureModule { }
