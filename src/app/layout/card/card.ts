import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  nomeCampo = input<string>('nome');
  dadoCampo = input<number>(0);
  botaoAtivo = input<boolean>(false);

  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }
}
