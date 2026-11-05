import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-aula',
  imports: [],
  templateUrl: './cadastrar-aula.html',
  styleUrl: './cadastrar-aula.scss',
})
export class CadastrarAula {
  mostrarTrumas: boolean = false;
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
