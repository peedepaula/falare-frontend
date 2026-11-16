import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unidade-matricula',
  imports: [],
  templateUrl: './unidade-matricula.html',
  styleUrl: './unidade-matricula.scss',
})
export class UnidadeMatricula {
  @Input() matricula: any;
}
