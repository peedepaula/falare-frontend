import { Component, Input } from '@angular/core';
import { formatarData } from '../../utils/formatadores';
import { IniciaisPipe } from '../../pipe/iniciais-pipe';

@Component({
  selector: 'app-unidade-pagamento',
  imports: [IniciaisPipe],
  templateUrl: './unidade-pagamento.html',
  styleUrl: './unidade-pagamento.scss',
})
export class UnidadePagamento {
  @Input() pagamento: any;

  formatarData = formatarData;
}
