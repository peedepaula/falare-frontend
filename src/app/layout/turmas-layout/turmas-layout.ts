import { Component } from '@angular/core';
import { UnidadeTurma } from '../unidade-turma/unidade-turma';

@Component({
  selector: 'app-turmas-layout',
  imports: [UnidadeTurma],
  templateUrl: './turmas-layout.html',
  styleUrl: './turmas-layout.scss',
})
export class TurmasLayout {}
