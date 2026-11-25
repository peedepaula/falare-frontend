import { Component, Input } from '@angular/core';
import { formatarData } from '../../utils/formatadores';
import { IniciaisPipe } from '../../pipe/iniciais-pipe';

@Component({
  selector: 'app-unidade-aula',
  imports: [IniciaisPipe],
  templateUrl: './unidade-aula.html',
  styleUrl: './unidade-aula.scss',
})
export class UnidadeAula {
  @Input() aula: any;

  formatarData = formatarData;
}
