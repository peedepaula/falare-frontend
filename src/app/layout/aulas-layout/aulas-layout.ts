import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadeAula } from '../unidade-aula/unidade-aula';
import { AulaService } from '../../core/services/aula.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-aulas-layout',
  imports: [UnidadeAula],
  templateUrl: './aulas-layout.html',
  styleUrl: './aulas-layout.scss',
})
export class AulasLayout implements OnInit {
  private popup = inject(PopupService);

  private AulaService = inject(AulaService);
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(aula: any){
    this.mostrar.emit(aula);
  }

  aulas = signal<any[]>([]);

  ngOnInit(): void {
    this.carregarAulas();
  }

  carregarAulas() {
    this.AulaService.buscarAulas().subscribe({
      next: (res) => {
        this.aulas.set(res);
        console.log('Aulas', this.aulas());
      },
      error: (err) => {
        console.error('Erro ao buscar aulas:', err);
        this.popup.erro('Erro ao tentar buscar Aulas.')
      }
    });
  }
}
