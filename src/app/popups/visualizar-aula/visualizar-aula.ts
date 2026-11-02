import { Component, EventEmitter, Output, output } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';

@Component({
  selector: 'app-visualizar-aula',
  imports: [UnidadeAluno],
  templateUrl: './visualizar-aula.html',
  styleUrl: './visualizar-aula.scss',
})
export class VisualizarAula {
  sessaoTela: string = "dados";

  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }

}
