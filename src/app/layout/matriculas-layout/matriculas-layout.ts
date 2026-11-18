import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadeMatricula } from '../unidade-matricula/unidade-matricula';
import { MatriculaService } from '../../core/services/matricula.service';

@Component({
  selector: 'app-matriculas-layout',
  imports: [UnidadeMatricula],
  templateUrl: './matriculas-layout.html',
  styleUrl: './matriculas-layout.scss',
})
export class MatriculasLayout implements OnInit {
  private MatriculaService = inject(MatriculaService);
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(matricula: any){
    this.mostrar.emit(matricula);
  }

  matriculas = signal<any[]>([]);

  ngOnInit(): void {
    this.buscarMatriculas();
  }

  buscarMatriculas() {
    this.MatriculaService.buscarMatriculas().subscribe({
      next: (res) => {
        this.matriculas.set(res);
        console.log('Matriculas', this.matriculas());
      },
      error: (err) => {
        console.error('Erro ao buscar Matriculas:', err);
      }
    })
  }
}