import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-pagamento',
  imports: [],
  templateUrl: './cadastrar-pagamento.html',
  styleUrl: './cadastrar-pagamento.scss',
})
export class CadastrarPagamento {
  mostrarBuscarAlunos: boolean = false;
  mostrarStatus: boolean = false;

  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
