import { Component, Input } from '@angular/core';
import { IniciaisPipe } from '../../pipe/iniciais-pipe';

@Component({
  selector: 'app-unidade-professor',
  imports: [IniciaisPipe],
  templateUrl: './unidade-professor.html',
  styleUrl: './unidade-professor.scss',
})
export class UnidadeProfessor {
  @Input() professor: any;
}
