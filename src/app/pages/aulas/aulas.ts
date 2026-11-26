import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { AulasLayout } from '../../layout/aulas-layout/aulas-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarAula } from '../../popups/visualizar-aula/visualizar-aula';
import { CadastrarAula } from '../../popups/cadastrar-aula/cadastrar-aula';
import { PopupService } from '../../core/services/popup.service';
import { AnalyticsService } from '../../core/services/analytics.service';

interface AnalyticsDados {
  totalAulas: number;
  mediaNotas: number;
  mediaFaltasPorAula: number;
}

@Component({
  selector: 'app-aulas',
  imports: [Nav, Header, Card, AulasLayout, BotaoCriar, VisualizarAula, CadastrarAula],
  templateUrl: './aulas.html',
  styleUrl: './aulas.scss',
})
export class Aulas implements OnInit{
  private analyticsService = inject(AnalyticsService);
  private popup = inject(PopupService);
  private aulasLayout = viewChild(AulasLayout);

  mostrarVisualizarAula: boolean = false;
  mostrarCadastrarAula: boolean = false;
  aulaSelecionada: any = null;

  abrirVisualizarAula(aula: any) {
    this.aulaSelecionada = aula;
    this.mostrarVisualizarAula = true;
  }

  fecharVisualizarAula() {
    this.mostrarVisualizarAula = false;
    this.aulaSelecionada = null;
  }

  recarregarAulas(){
    this.aulasLayout()?.carregarAulas();
  }

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAnalytics();
  }

  analyticsDados = signal<AnalyticsDados | null>(null);

  buscarAnalytics(){
    this.analyticsService.buscarAnalyticsAula().subscribe({
      next: (res) => {
          this.analyticsDados.set(res);
          console.log("o que chega: ", this.analyticsDados)
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Analytics Aula', err);
        this.popup.erro("Erro ao tentar buscar Analytics");
      }
    })
  }
}
