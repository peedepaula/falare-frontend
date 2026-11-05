import { Component, EventEmitter, Output, output } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';
import { Chamada } from '../chamada/chamada';

@Component({
  selector: 'app-visualizar-aula',
  imports: [UnidadeAluno, Chamada],
  templateUrl: './visualizar-aula.html',
  styleUrl: './visualizar-aula.scss',
})
export class VisualizarAula {
  sessaoTela: string = "dados";
  mostrarChamada: boolean = false;

  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }

}
