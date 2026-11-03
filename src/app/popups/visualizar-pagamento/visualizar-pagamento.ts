import { Component, EventEmitter, Output } from '@angular/core';
import { UnidadePagamento } from '../../layout/unidade-pagamento/unidade-pagamento';

@Component({
  selector: 'app-visualizar-pagamento',
  imports: [UnidadePagamento],
  templateUrl: './visualizar-pagamento.html',
  styleUrl: './visualizar-pagamento.scss',
})
export class VisualizarPagamento {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }
}
