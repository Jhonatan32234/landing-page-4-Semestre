import { Component } from '@angular/core';
import { HeaderModule } from "../header/header.module";
import { BuyStructureModule } from "../buy-structure/buy-structure.module";

@Component({
  selector: 'app-section-buy',
  standalone: true,
  imports: [HeaderModule, BuyStructureModule],
  templateUrl: './section-buy.component.html',
  styleUrl: './section-buy.component.css'
})
export class SectionBuyComponent {

}
