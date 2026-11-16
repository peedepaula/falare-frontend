import { Component, inject, ViewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { AlunosLayout } from '../../layout/alunos-layout/alunos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarAluno } from '../../popups/visualizar-aluno/visualizar-aluno';
import { CadastrarAluno } from '../../popups/cadastrar-aluno/cadastrar-aluno';
import { GlobalConfirmacao } from '../../popups/global-confirmacao/global-confirmacao';
import { AlunoService } from '../../core/services/aluno.service';

@Component({
  selector: 'app-alunos',
  imports: [Header, Nav, Card, AlunosLayout, BotaoCriar, VisualizarAluno, CadastrarAluno, GlobalConfirmacao],
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss',
})
export class Alunos {
  @ViewChild(AlunosLayout) alunosLayout!: AlunosLayout;
  private alunoService = inject(AlunoService);

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

  abrirEdicao() {
    this.mostrarVisualizarAluno = false;
    this.mostrarCadastrarAluno = true;
  }

  aoSalvar() {
    this.alunosLayout.buscarAlunos();
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
        this.alunosLayout.buscarAlunos();
      },
      error: (err) => {
        console.error('Erro ao apagar aluno:', err);
      }
    });
  }

}
