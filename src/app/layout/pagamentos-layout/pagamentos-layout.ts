import { Component } from '@angular/core';
import { UnidadePagamento } from '../unidade-pagamento/unidade-pagamento';

@Component({
  selector: 'app-pagamentos-layout',
  imports: [UnidadePagamento],
  templateUrl: './pagamentos-layout.html',
  styleUrl: './pagamentos-layout.scss',
})
export class PagamentosLayout {}
