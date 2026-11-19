import { Component, Input } from '@angular/core';
import { formatarData } from '../../utils/formatadores';

@Component({
  selector: 'app-unidade-turma',
  imports: [],
  templateUrl: './unidade-turma.html',
  styleUrl: './unidade-turma.scss',
})
export class UnidadeTurma {
  @Input() turma: any;

  formatarData = formatarData;
}
