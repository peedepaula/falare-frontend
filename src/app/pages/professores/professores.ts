import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { ProfessoresLayout } from '../../layout/professores-layout/professores-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { CadastrarProfessor } from '../../popups/cadastrar-professor/cadastrar-professor';
import { AnalyticsService } from '../../core/services/analytics.service';
import { PopupService } from '../../core/services/popup.service';

interface AnalyticsDadosProfessor {
  totalAulas: number;
  totalAlunos: number;
  totalTurmas: number;
}


@Component({
  selector: 'app-professores',
  imports: [Header, Nav, Card, ProfessoresLayout, BotaoCriar, CadastrarProfessor],
  templateUrl: './professores.html',
  styleUrl: './professores.scss',
})
export class Professores implements OnInit{
  private analyticsService = inject(AnalyticsService);
  private popup = inject(PopupService);

  mostrarPopup = false;
  professorSelecionado: any = null;

  private professoresLayout = viewChild(ProfessoresLayout);

  abrirCadastro() {
    this.professorSelecionado = null;
    this.mostrarPopup = true;
  }

  abrirEdicao(professor: any) {
    this.professorSelecionado = professor;
    this.mostrarPopup = true;
  }

  fecharPopup() {
    this.mostrarPopup = false;
    this.professorSelecionado = null;
  }

  recarregarProfessores() {
    this.professoresLayout()?.carregarProfessores();
  }

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAnalytics();
  }

  analyticsDados = signal<AnalyticsDadosProfessor | null>(null);

  buscarAnalytics(){
    this.analyticsService.buscarAnalyticsProfessor().subscribe({
      next: (res) => {
          this.analyticsDados.set(res);
          console.log("o que chega: ", this.analyticsDados)
      },
      error: (err) => {
        console.log('Erro ao tentar bsucar Analytics Professor', err);
        this.popup.erro("Erro ao tentar buscar Analytics");
      }
    })
  }
}
