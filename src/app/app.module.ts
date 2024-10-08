import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ContenedorComponent } from './categoria/contenedor/contenedor.component';
import { CardsModule } from './cards/cards.module';
import { SectionHomeComponent } from './section-home/section-home.component';
import { ProductDataComponent } from './buy-structure/product-data/product-data.component';
import { BuyStructureModule } from './buy-structure/buy-structure.module';
import { SectionBuyComponent } from "./section-buy/section-buy.component";
import { SectionSellComponent } from './section-sell/section-sell.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SellStructureModule } from "./sell-structure/sell-structure.module";

@NgModule({
  declarations: [
    AppComponent,
    SectionHomeComponent,
    SectionBuyComponent,   
    SectionSellComponent,

  ],
  imports: [
    BrowserModule,
    HeaderModule,
    CategoriaModule,
    CardsModule,
    BuyStructureModule,
    RouterModule.forRoot(routes),
    SellStructureModule
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
