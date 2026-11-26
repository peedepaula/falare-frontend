import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadePagamento } from '../../layout/unidade-pagamento/unidade-pagamento';
import { AlunoService } from '../../core/services/aluno.service';
import { PopupService } from '../../core/services/popup.service';
import { Carregamento } from '../../layout/carregamento/carregamento';

@Component({
  selector: 'app-visualizar-aluno-financeiro',
  imports: [UnidadePagamento, Carregamento],
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

  carregandoComponente: boolean = true;
  dadosFinanceiro = signal<any | null>(null);

  buscarPagamentos(){
    this.carregandoComponente = true;
    this.alunoService.buscarAlunoFinanceiro().subscribe({
      next: (res) => {
        this.dadosFinanceiro.set(res);
        console.log('Financeiro buscada com sucesso');
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Financeiro', err);
        this.popup.erro('Erro ao tentar buscar Pagamentos.')
      }
    });
    this.carregandoComponente = false;
  };

  matriculaTrancada = signal(false);

  alternarTrancamento(): void {
    this.alunoService.alternarTrancamento().subscribe({
      next: (res) => {
        this.matriculaTrancada.set(res.status === 'Trancada');
        this.popup.acerto(
          res.status === 'Trancada' ? 'Matrícula trancada.' : 'Matrícula reativada.'
        );
      },
      error: (err) => this.popup.erro(err.error?.mensagem ?? 'Erro ao alterar a matrícula.')
    });
  }
}
