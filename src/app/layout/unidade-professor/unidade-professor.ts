import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unidade-professor',
  imports: [],
  templateUrl: './unidade-professor.html',
  styleUrl: './unidade-professor.scss',
})
export class UnidadeProfessor {
  @Input() professor: any;
}
