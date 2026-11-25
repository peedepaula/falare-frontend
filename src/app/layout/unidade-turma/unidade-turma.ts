import { Component, Input } from '@angular/core';
import { formatarData } from '../../utils/formatadores';
import { IniciaisPipe } from '../../pipe/iniciais-pipe';

@Component({
  selector: 'app-unidade-turma',
  imports: [IniciaisPipe],
  templateUrl: './unidade-turma.html',
  styleUrl: './unidade-turma.scss',
})
export class UnidadeTurma {
  @Input() turma: any;

  formatarData = formatarData;
}
