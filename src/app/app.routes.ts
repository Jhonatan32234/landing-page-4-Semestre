import { Routes } from '@angular/router';
import { SectionHomeComponent } from './section-home/section-home.component';
import { SectionSellComponent } from './section-sell/section-sell.component';
import { SectionBuyComponent } from './section-buy/section-buy.component';

export const routes: Routes = [

    {path:'home',component:SectionHomeComponent},
    {path:'sell',component:SectionSellComponent},
    {path:'buy',component:SectionBuyComponent},
    {path:'**',redirectTo:'home'}
];
