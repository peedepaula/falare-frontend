import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-matricula',
  imports: [],
  templateUrl: './cadastrar-matricula.html',
  styleUrl: './cadastrar-matricula.scss',
})
export class CadastrarMatricula {
  mostrarBuscarAlunos: boolean = false;
  mostrarBuscarTurmas: boolean = false;
  mostrarStatus: boolean = false;

  @Output() fechar = new EventEmitter<void>();


  fecharPopup(){
    this.fechar.emit();
  }

}
