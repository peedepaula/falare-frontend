import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-aluno',
  imports: [],
  templateUrl: './cadastrar-aluno.html',
  styleUrl: './cadastrar-aluno.scss',
})
export class CadastrarAluno {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
