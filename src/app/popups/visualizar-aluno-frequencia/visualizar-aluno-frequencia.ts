import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-visualizar-aluno-frequencia',
  imports: [],
  templateUrl: './visualizar-aluno-frequencia.html',
  styleUrl: './visualizar-aluno-frequencia.scss',
})
export class VisualizarAlunoFrequencia {
  mostrarSemestre: boolean = false;
  
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
