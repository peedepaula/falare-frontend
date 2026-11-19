import { Component, Input } from '@angular/core';
import { formatarData } from '../../utils/formatadores';

@Component({
  selector: 'app-unidade-pagamento',
  imports: [],
  templateUrl: './unidade-pagamento.html',
  styleUrl: './unidade-pagamento.scss',
})
export class UnidadePagamento {
  @Input() pagamento: any;

  formatarData = formatarData;
}
