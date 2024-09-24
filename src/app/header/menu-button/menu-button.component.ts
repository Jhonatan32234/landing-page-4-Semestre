import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css'
})
export class MenuButtonComponent {
  isVisible = false;

  mostrarMenu(){
    this.isVisible = !this.isVisible
  }

}
