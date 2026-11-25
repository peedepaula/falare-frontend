import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadePagamento } from '../../layout/unidade-pagamento/unidade-pagamento';
import { AlunoService } from '../../core/services/aluno.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-visualizar-aluno-financeiro',
  imports: [UnidadePagamento],
  templateUrl: './visualizar-aluno-financeiro.html',
  styleUrl: './visualizar-aluno-financeiro.scss',
})
export class VisualizarAlunoFinanceiro implements OnInit{
  private popup = inject(PopupService);

  private alunoService = inject(AlunoService);
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  ngOnInit(): void {
    this.buscarPagamentos();
  }

  dadosFinanceiro = signal<any | null>(null);

  buscarPagamentos(){
    this.alunoService.buscarAlunoFinanceiro().subscribe({
      next: (res) => {
        this.dadosFinanceiro.set(res);
        console.log('Financeiro buscada com sucesso');
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Financeiro', err);
        this.popup.erro('Erro ao tentar buscar Pagamentos.')
      }
    })
  }
}
