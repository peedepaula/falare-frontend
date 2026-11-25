import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { PagamentoService } from '../../core/services/pagamento.service';
import { formatarData } from '../../utils/formatadores';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-visualizar-pagamento',
  imports: [],
  templateUrl: './visualizar-pagamento.html',
  styleUrl: './visualizar-pagamento.scss',
})
export class VisualizarPagamento implements OnInit{
  private popup = inject(PopupService);

  private pagamentoService = inject(PagamentoService);

  formatarData = formatarData;

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

  ngOnInit(): void {
    this.buscarPagamentoDetalhe();
  }

  deletarPagamento(){
    if(!this.pagamentoSelecionado.id)return;

    this.pagamentoService.deletarPagamento(this.pagamentoSelecionado.id).subscribe({
      next: (res) => {
        this.fechar.emit();
        this.recarregarPagamentos.emit();
        console.log('Pagamento deletado')
        this.popup.acerto('Pagamento deletado com sucesso.')
      },
      error: (err) => {
        console.log('Erro ao tentar deletar o Pagamento', err);
        this.popup.erro('Erro ao tentar deletar Pagamento.');
      }
    }
    )
  }

  pagamento = signal<any>(null);

  buscarPagamentoDetalhe(){
    if(!this.pagamentoSelecionado.id)return;
    this.pagamentoService.buscarPagamento(this.pagamentoSelecionado.id).subscribe({
      next: (res) => {
        this.pagamento.set(res);
        console.log('Pagamento buscado com sucesso');
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Pagamento detalhado', err);
        this.popup.erro('Erro ao tentar buscar Pagamento.');
      }
    })
  }
}
