import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chamada',
  imports: [],
  templateUrl: './chamada.html',
  styleUrl: './chamada.scss',
})
export class Chamada {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
