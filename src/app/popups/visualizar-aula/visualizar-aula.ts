import { Component } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';

@Component({
  selector: 'app-visualizar-aula',
  imports: [UnidadeAluno],
  templateUrl: './visualizar-aula.html',
  styleUrl: './visualizar-aula.scss',
})
export class VisualizarAula {
  sessaoTela: string = "dados";

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }

}
