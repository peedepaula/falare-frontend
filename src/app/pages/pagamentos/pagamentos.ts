import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { PagamentosLayout } from '../../layout/pagamentos-layout/pagamentos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarPagamento } from '../../popups/visualizar-pagamento/visualizar-pagamento';
import { CadastrarPagamento } from '../../popups/cadastrar-pagamento/cadastrar-pagamento';
import { PagamentoService } from '../../core/services/pagamento.service';
import { PopupService } from '../../core/services/popup.service';
import { AnalyticsService } from '../../core/services/analytics.service';

interface AnalyticsDadosPagamento {
  totalPago: number;
  totalPendente: number;
  totalAtrasado: number;
}


@Component({
  selector: 'app-pagamentos',
  imports: [Header, Nav, Card, PagamentosLayout, BotaoCriar, VisualizarPagamento, CadastrarPagamento],
  templateUrl: './pagamentos.html',
  styleUrl: './pagamentos.scss',
})
export class Pagamentos implements OnInit{
  private analyticsService = inject(AnalyticsService);
  private popup = inject(PopupService);

  private pagamentosLayout = viewChild(PagamentosLayout);

  mostrarVisualizarPagamento: boolean = false;
  mostrarCadastrarPagamento: boolean = false;

  pagamentoSelecionado: any;

  visualizarPagamento(pagamento: any){
    this.mostrarVisualizarPagamento = true;
    this.pagamentoSelecionado = pagamento;
  }

  fecharVisualizarPagamento(){
    this.mostrarVisualizarPagamento = false;
    this.pagamentoSelecionado = null;
  }

  recarregarPagamentos(){
    this.pagamentosLayout()?.buscarPagamentos();
  }

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAnalytics();
  }

  analyticsDados = signal<AnalyticsDadosPagamento | null>(null);

  buscarAnalytics(){
    this.analyticsService.buscarAnalyticsPagamento().subscribe({
      next: (res) => {
          this.analyticsDados.set(res);
          console.log("o que chega: ", this.analyticsDados)
      },
      error: (err) => {
        console.log('Erro ao tentar bsucar Analytics Pagamentos', err);
        this.popup.erro("Erro ao tentar buscar Analytics");
      }
    })
  }
}
