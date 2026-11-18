import { Component, inject, viewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { PagamentosLayout } from '../../layout/pagamentos-layout/pagamentos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarPagamento } from '../../popups/visualizar-pagamento/visualizar-pagamento';
import { CadastrarPagamento } from '../../popups/cadastrar-pagamento/cadastrar-pagamento';
import { PagamentoService } from '../../core/services/pagamento.service';

@Component({
  selector: 'app-pagamentos',
  imports: [Header, Nav, Card, PagamentosLayout, BotaoCriar, VisualizarPagamento, CadastrarPagamento],
  templateUrl: './pagamentos.html',
  styleUrl: './pagamentos.scss',
})
export class Pagamentos {
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

}
