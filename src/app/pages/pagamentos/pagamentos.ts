import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { PagamentosLayout } from '../../layout/pagamentos-layout/pagamentos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';

@Component({
  selector: 'app-pagamentos',
  imports: [Header, Nav, Card, PagamentosLayout, BotaoCriar],
  templateUrl: './pagamentos.html',
  styleUrl: './pagamentos.scss',
})
export class Pagamentos {}
