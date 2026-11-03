import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadeAula } from '../unidade-aula/unidade-aula';

@Component({
  selector: 'app-aulas-layout',
  imports: [UnidadeAula],
  templateUrl: './aulas-layout.html',
  styleUrl: './aulas-layout.scss',
})
export class AulasLayout {
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }
}
