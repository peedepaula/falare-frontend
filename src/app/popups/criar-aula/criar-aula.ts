import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-criar-aula',
  imports: [],
  templateUrl: './criar-aula.html',
  styleUrl: './criar-aula.scss',
})
export class CriarAula {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
