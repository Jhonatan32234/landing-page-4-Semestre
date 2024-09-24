import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderContainerComponent,
    MenuButtonComponent,
    SearchBarComponent,
    HomeButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderContainerComponent
  ]
})
export class HeaderModule { }
