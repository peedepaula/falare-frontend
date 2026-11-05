import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadeMatricula } from '../unidade-matricula/unidade-matricula';

@Component({
  selector: 'app-matriculas-layout',
  imports: [UnidadeMatricula],
  templateUrl: './matriculas-layout.html',
  styleUrl: './matriculas-layout.scss',
})
export class MatriculasLayout {
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }

}
