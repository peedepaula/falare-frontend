import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-turma',
  imports: [],
  templateUrl: './cadastrar-turma.html',
  styleUrl: './cadastrar-turma.scss',
})
export class CadastrarTurma {
  mostrarIdiomas: boolean = false;
  mostrarNivel: boolean = false;
  mostrarProfessores: boolean = false;

  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
