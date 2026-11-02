import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';

@Component({
  selector: 'app-visualizar-turma',
  imports: [UnidadeAluno],
  templateUrl: './visualizar-turma.html',
  styleUrl: './visualizar-turma.scss',
})
export class VisualizarTurma {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
