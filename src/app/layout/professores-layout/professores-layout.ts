import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadeProfessor } from '../unidade-professor/unidade-professor';

@Component({
  selector: 'app-professores-layout',
  imports: [UnidadeProfessor],
  templateUrl: './professores-layout.html',
  styleUrl: './professores-layout.scss',
})
export class ProfessoresLayout {
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }
}
