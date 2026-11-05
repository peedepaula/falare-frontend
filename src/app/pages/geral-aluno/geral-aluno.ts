import { Component } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { VisualizarAlunoNotas } from '../../popups/visualizar-aluno-notas/visualizar-aluno-notas';
import { VisualizarAlunoFrequencia } from '../../popups/visualizar-aluno-frequencia/visualizar-aluno-frequencia';
import { VisualizarAlunoFinanceiro } from '../../popups/visualizar-aluno-financeiro/visualizar-aluno-financeiro';

@Component({
  selector: 'app-geral-aluno',
  imports: [Header, Nav, Card, VisualizarAlunoNotas, VisualizarAlunoFrequencia, VisualizarAlunoFinanceiro],
  templateUrl: './geral-aluno.html',
  styleUrl: './geral-aluno.scss',
})
export class GeralAluno {
  mostrarFrequencia: boolean = false;
  mostrarNotas: boolean = false;
  mostrarFinanceiro: boolean = false;
}
