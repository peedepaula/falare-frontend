import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PagamentoService } from '../../core/services/pagamento.service';

@Component({
  selector: 'app-visualizar-pagamento',
  imports: [],
  templateUrl: './visualizar-pagamento.html',
  styleUrl: './visualizar-pagamento.scss',
})
export class VisualizarPagamento {
  private pagamentoService = inject(PagamentoService);

  @Input() pagamentoSelecionado: any;

  @Output() fechar = new EventEmitter<void>();
  @Output() recarregarPagamentos = new EventEmitter<void>();
  @Output() mostrarEditarPagamento = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  passarPagamento(){
    if(!this.pagamentoSelecionado)return;
    this.mostrarEditarPagamento.emit();
  }

  deletarPagamento(){
    if(!this.pagamentoSelecionado.id)return;

    this.pagamentoService.deletarPagamento(this.pagamentoSelecionado.id).subscribe({
      next: (res) => {
        this.fechar.emit();
        this.recarregarPagamentos.emit();
        console.log('Pagamento deletado')
      },
      error: (err) => {
        console.log('Erro ao tentar deletar o Pagamento', err);
      }
    }
    )
  }
}
