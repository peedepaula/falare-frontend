import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { PagamentosLayout } from '../../layout/pagamentos-layout/pagamentos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarPagamento } from '../../popups/visualizar-pagamento/visualizar-pagamento';

@Component({
  selector: 'app-pagamentos',
  imports: [Header, Nav, Card, PagamentosLayout, BotaoCriar, VisualizarPagamento],
  templateUrl: './pagamentos.html',
  styleUrl: './pagamentos.scss',
})
export class Pagamentos {
  mostrarVisualizarPagamento: boolean = false;

  trocarVisualizarPagamento(){
    this.mostrarVisualizarPagamento = !this.mostrarVisualizarPagamento;
  }

}
