import { Component } from '@angular/core';
import { UnidadeAluno } from '../unidade-aluno/unidade-aluno';

@Component({
  selector: 'app-piores-alunos',
  imports: [UnidadeAluno],
  templateUrl: './piores-alunos.html',
  styleUrl: './piores-alunos.scss',
})
export class PioresAlunos {}
