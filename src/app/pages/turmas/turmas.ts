import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { TurmasLayout } from '../../layout/turmas-layout/turmas-layout';
import { Card } from '../../layout/card/card';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarTurma } from '../../popups/visualizar-turma/visualizar-turma';
import { CadastrarTurma } from '../../popups/cadastrar-turma/cadastrar-turma';
import { PopupService } from '../../core/services/popup.service';
import { AnalyticsService } from '../../core/services/analytics.service';

interface AnalyticsDadosTurma {
  totalTurmas: number;
  mediaAlunos: number;
  mediaFaltas: number;
}

@Component({
  selector: 'app-turmas',
  imports: [Header, Nav, Card, TurmasLayout, BotaoCriar, VisualizarTurma, CadastrarTurma],
  templateUrl: './turmas.html',
  styleUrl: './turmas.scss',
})
export class Turmas implements OnInit{
  private analyticsService = inject(AnalyticsService);
  private popup = inject(PopupService);

  private turmasLayout = viewChild(TurmasLayout);

  mostrarVisualizarTurma: boolean = false;
  mostrarCadastrarTurma: boolean = false;

  podeVer: boolean = localStorage.getItem('tipoUsuario') === 'Secretaria';

  turmaSelecionada: any;

  visualizarTurma(turma: any){
    this.turmaSelecionada = turma;
    this.mostrarVisualizarTurma = true;
  }

  fecharTurma(){
    this.turmaSelecionada = null;
    this.mostrarVisualizarTurma = false;
  }

  recarregarTurmas(){
    this.turmasLayout()?.buscarTurmas();
  }

  fecharEditarCadastrarTurma(){
    this.turmaSelecionada = null;
    this.mostrarCadastrarTurma = false;
  }

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAnalytics();
  }

  analyticsDados = signal<AnalyticsDadosTurma | null>(null);

  buscarAnalytics(){
    this.analyticsService.buscarAnalyticsTurma().subscribe({
      next: (res) => {
          this.analyticsDados.set(res);
          console.log("o que chega: ", this.analyticsDados)
      },
      error: (err) => {
        console.log('Erro ao tentar bsucar Analytics Turma', err);
        this.popup.erro("Erro ao tentar buscar Analytics");
      }
    });
  }
}
