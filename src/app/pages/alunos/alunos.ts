import { Component, inject, OnInit, signal, viewChild, ViewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { AlunosLayout } from '../../layout/alunos-layout/alunos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarAluno } from '../../popups/visualizar-aluno/visualizar-aluno';
import { CadastrarAluno } from '../../popups/cadastrar-aluno/cadastrar-aluno';
import { GlobalConfirmacao } from '../../popups/global-confirmacao/global-confirmacao';
import { AlunoService } from '../../core/services/aluno.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { PopupService } from '../../core/services/popup.service';

interface AnalyticsDadosAluno {
  totalAlunos: number;
  mediaNotas: number;
  mediaFaltas: number;
}

@Component({
  selector: 'app-alunos',
  imports: [Header, Nav, Card, AlunosLayout, BotaoCriar, VisualizarAluno, CadastrarAluno, GlobalConfirmacao],
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss',
})
export class Alunos implements OnInit{
  private analyticsService = inject(AnalyticsService);
  private popup = inject(PopupService);
  private alunoService = inject(AlunoService);
  private alunoLayout = viewChild(AlunosLayout);

  podeVer: boolean = localStorage.getItem('tipoUsuario') === 'Secretaria';

  mostrarVisualizarAluno: boolean = false;
  mostrarCadastrarAluno: boolean = false;
  mostrarApagarAluno: boolean = false;
  alunoSelecionado: any | null = null;

  abrirVisualizar(aluno: any) {
    this.alunoSelecionado = aluno;
    this.mostrarVisualizarAluno = true;
  }
  
  fecharVisualizar() {
    this.mostrarVisualizarAluno = false;
  }

  abrirCadastro() {
    this.alunoSelecionado = null;
    this.mostrarCadastrarAluno = true;
  }

  abrirAlunosEmRiscos(){

  }

  abrirEdicao() {
    this.mostrarVisualizarAluno = false;
    this.mostrarCadastrarAluno = true;
  }

  aoSalvar() {
    this.recarregarAlunos();
  }

  abrirApagar() {
    this.mostrarApagarAluno = true
  }

  fecharApagar() {
    this.mostrarApagarAluno = false;
  }

  apagarUsuario() {
    if (!this.alunoSelecionado) return;

    const id = this.alunoSelecionado.id;
    this.mostrarApagarAluno = false
    this.mostrarVisualizarAluno = false;

    this.alunoService.apagarAluno(id).subscribe({
      next: () => {
        this.alunoSelecionado = null;
        this.recarregarAlunos();
      },
      error: (err) => {
        console.error('Erro ao apagar aluno:', err);
      }
    });
  }

  recarregarAlunos(){
    this.alunoLayout()?.buscarAlunos();
  }

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAnalytics();
  }

  analyticsDados = signal<AnalyticsDadosAluno | null>(null);

  buscarAnalytics(){
    this.analyticsService.buscarAnalyticsAluno().subscribe({
      next: (res) => {
          this.analyticsDados.set(res);
          console.log("o que chega: ", this.analyticsDados)
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Analytics Aluno', err);
        this.popup.erro("Erro ao tentar buscar Analytics");
      }
    })
  }

}
