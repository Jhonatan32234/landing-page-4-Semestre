import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellCardComponent } from './sell-card/sell-card.component';



@NgModule({
  declarations: [SellCardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SellCardComponent
  ]
})
export class SellStructureModule { }
