import { Component, Input } from '@angular/core';
import { IniciaisPipe } from '../../pipe/iniciais-pipe';

@Component({
  selector: 'app-unidade-aluno',
  imports: [IniciaisPipe],
  templateUrl: './unidade-aluno.html',
  styleUrl: './unidade-aluno.scss',
})
export class UnidadeAluno {
  @Input() aluno: any;
}
