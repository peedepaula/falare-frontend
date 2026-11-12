import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unidade-aula',
  imports: [],
  templateUrl: './unidade-aula.html',
  styleUrl: './unidade-aula.scss',
})
export class UnidadeAula {
  @Input() aula: any;
}
