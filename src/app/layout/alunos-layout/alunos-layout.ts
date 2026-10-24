import { Component } from '@angular/core';
import { UnidadeAluno } from '../unidade-aluno/unidade-aluno';

@Component({
  selector: 'app-alunos-layout',
  imports: [UnidadeAluno],
  templateUrl: './alunos-layout.html',
  styleUrl: './alunos-layout.scss',
})
export class AlunosLayout {}
