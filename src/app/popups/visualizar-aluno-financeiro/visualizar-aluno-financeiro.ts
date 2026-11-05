import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadePagamento } from '../../layout/unidade-pagamento/unidade-pagamento';

@Component({
  selector: 'app-visualizar-aluno-financeiro',
  imports: [UnidadePagamento],
  templateUrl: './visualizar-aluno-financeiro.html',
  styleUrl: './visualizar-aluno-financeiro.scss',
})
export class VisualizarAlunoFinanceiro {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
