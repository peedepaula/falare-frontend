import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-visualizar-aluno',
  imports: [],
  templateUrl: './visualizar-aluno.html',
  styleUrl: './visualizar-aluno.scss',
})
export class VisualizarAluno {
  sessaoTela: string = "dados";
  
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }
}
