import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { MatriculasLayout } from '../../layout/matriculas-layout/matriculas-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { UnidadeMatricula } from '../../layout/unidade-matricula/unidade-matricula';
import { CadastrarMatricula } from '../../popups/cadastrar-matricula/cadastrar-matricula';
import { AtualizarMatricula } from '../../popups/atualizar-matricula/atualizar-matricula';
import { AnalyticsService } from '../../core/services/analytics.service';
import { PopupService } from '../../core/services/popup.service';

interface AnalyticsDadosMatricula {
  totalMatriculas: number;
  matriculasInativas: number;
  criadasEsteMes: number;
}

@Component({
  selector: 'app-matriculas',
  imports: [Header, Nav, Card, MatriculasLayout, BotaoCriar, CadastrarMatricula, AtualizarMatricula],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.scss',
})
export class Matriculas implements OnInit{
  private analyticsService = inject(AnalyticsService);
  private popup = inject(PopupService);
  private matriculasLayout = viewChild(MatriculasLayout);

  mostrarCadastrarMatricula: boolean = false;
  mostrarAtualizarMatricula: boolean = false;

  matriculaSelecionada: any;

  mostrarEditarMatricula(matricula: any){
    this.matriculaSelecionada = matricula;
    this.mostrarAtualizarMatricula = true;
  }

  fecharEditarMatricula(){
    this.matriculaSelecionada = null;
    this.mostrarAtualizarMatricula = false;
  }

  recarregarMatriculas(){
    this.matriculasLayout()?.buscarMatriculas();
  }

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAnalytics();
  }

  analyticsDados = signal<AnalyticsDadosMatricula | null>(null);

  buscarAnalytics(){
    this.analyticsService.buscarAnalyticsMatricula().subscribe({
      next: (res) => {
          this.analyticsDados.set(res);
          console.log("o que chega: ", this.analyticsDados)
      },
      error: (err) => {
        console.log('Erro ao tentar bsucar Analytics Matrícula', err);
        this.popup.erro("Erro ao tentar buscar Analytics");
      }
    })
  }
}
