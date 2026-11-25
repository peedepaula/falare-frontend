import { Component, Input } from '@angular/core';
import { IniciaisPipe } from '../../pipe/iniciais-pipe';

@Component({
  selector: 'app-unidade-matricula',
  imports: [IniciaisPipe],
  templateUrl: './unidade-matricula.html',
  styleUrl: './unidade-matricula.scss',
})
export class UnidadeMatricula {
  @Input() matricula: any;
}
