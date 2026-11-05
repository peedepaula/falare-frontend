import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  nomeCampo = input<string>('nome');
  dadoCampo = input<string>('');
  botaoAtivo = input<boolean>(false);

  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }
}
