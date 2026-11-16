import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-visualizar-aluno',
  imports: [],
  templateUrl: './visualizar-aluno.html',
  styleUrl: './visualizar-aluno.scss',
})
export class VisualizarAluno {
  @Input() aluno: any;
  sessaoTela: string = "dados";
  
  @Output() fechar = new EventEmitter<void>();
  @Output() editar = new EventEmitter<void>();
  @Output() apagar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  mostrarEditar(){
    this.editar.emit()
  }
  
  mostrarApagar(){
    this.apagar.emit()
  }

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }
}
