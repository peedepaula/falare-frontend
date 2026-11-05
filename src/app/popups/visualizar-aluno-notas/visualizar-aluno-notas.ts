import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-visualizar-aluno-notas',
  imports: [],
  templateUrl: './visualizar-aluno-notas.html',
  styleUrl: './visualizar-aluno-notas.scss',
})
export class VisualizarAlunoNotas {
  mostrarSemestre: boolean = false;
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
