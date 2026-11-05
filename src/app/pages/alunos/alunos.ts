import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { AlunosLayout } from '../../layout/alunos-layout/alunos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarAluno } from '../../popups/visualizar-aluno/visualizar-aluno';
import { CadastrarAluno } from '../../popups/cadastrar-aluno/cadastrar-aluno';

@Component({
  selector: 'app-alunos',
  imports: [Header, Nav, Card, AlunosLayout, BotaoCriar, VisualizarAluno, CadastrarAluno],
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss',
})
export class Alunos {
  mostrarVisualizarAluno: boolean = false;
  mostrarCadastrarAluno: boolean = false;

  trocarVisualizarAluno(){
    this.mostrarVisualizarAluno = !this.mostrarVisualizarAluno;
  }

}
