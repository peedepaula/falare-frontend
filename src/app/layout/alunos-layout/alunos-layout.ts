import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadeAluno } from '../unidade-aluno/unidade-aluno';

@Component({
  selector: 'app-alunos-layout',
  imports: [UnidadeAluno],
  templateUrl: './alunos-layout.html',
  styleUrl: './alunos-layout.scss',
})
export class AlunosLayout {
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }

}
