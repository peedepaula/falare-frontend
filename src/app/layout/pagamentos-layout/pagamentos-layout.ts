import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadePagamento } from '../unidade-pagamento/unidade-pagamento';
import { PagamentoService } from '../../core/services/pagamento.service';

@Component({
  selector: 'app-pagamentos-layout',
  imports: [UnidadePagamento],
  templateUrl: './pagamentos-layout.html',
  styleUrl: './pagamentos-layout.scss',
})
export class PagamentosLayout implements OnInit {
  private PagamentoService = inject(PagamentoService);
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }

  pagamentos = signal<any[]>([]);

  ngOnInit(): void {
    this.PagamentoService.buscarPagamentos().subscribe({
      next: (res) => {
        this.pagamentos.set(res);
        console.log('Pagamentos', this.pagamentos());
      },
      error: (err) => {
        console.error('Erro ao buscar Pagamentos:', err);
      }
    })
  }
}
