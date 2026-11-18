import { Component, viewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { TurmasLayout } from '../../layout/turmas-layout/turmas-layout';
import { Card } from '../../layout/card/card';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarTurma } from '../../popups/visualizar-turma/visualizar-turma';
import { CadastrarTurma } from '../../popups/cadastrar-turma/cadastrar-turma';

@Component({
  selector: 'app-turmas',
  imports: [Header, Nav, Card, TurmasLayout, BotaoCriar, VisualizarTurma, CadastrarTurma],
  templateUrl: './turmas.html',
  styleUrl: './turmas.scss',
})
export class Turmas {
  private turmasLayout = viewChild(TurmasLayout);

  mostrarVisualizarTurma: boolean = false;
  mostrarCadastrarTurma: boolean = false;

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

}
