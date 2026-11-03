import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-professor',
  imports: [],
  templateUrl: './cadastrar-professor.html',
  styleUrl: './cadastrar-professor.scss',
})
export class CadastrarProfessor {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
