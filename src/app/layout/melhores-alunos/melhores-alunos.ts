import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadeAluno } from '../unidade-aluno/unidade-aluno';

@Component({
  selector: 'app-melhores-alunos',
  imports: [UnidadeAluno],
  templateUrl: './melhores-alunos.html',
  styleUrl: './melhores-alunos.scss',
})
export class MelhoresAlunos {
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }

}
