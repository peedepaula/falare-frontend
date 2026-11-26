import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadeMatricula } from '../unidade-matricula/unidade-matricula';
import { MatriculaService } from '../../core/services/matricula.service';
import { PopupService } from '../../core/services/popup.service';
import { Carregamento } from '../carregamento/carregamento';

@Component({
  selector: 'app-matriculas-layout',
  imports: [UnidadeMatricula, Carregamento],
  templateUrl: './matriculas-layout.html',
  styleUrl: './matriculas-layout.scss',
})
export class MatriculasLayout implements OnInit {
  private popup = inject(PopupService);

  private MatriculaService = inject(MatriculaService);
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(matricula: any){
    this.mostrar.emit(matricula);
  }

  carregandoComponente: boolean = true;
  matriculas = signal<any[]>([]);

  ngOnInit(): void {
    this.buscarMatriculas();
  }

  buscarMatriculas() {
    this.carregandoComponente = true;
    this.MatriculaService.buscarMatriculas().subscribe({
      next: (res) => {
        this.matriculas.set(res);
        console.log('Matriculas', this.matriculas());
      },
      error: (err) => {
        console.error('Erro ao buscar Matriculas:', err);
        this.popup.erro('Erro ao tentar buscar Matrículas.')
      }
    });
    this.carregandoComponente = false;
  }
}