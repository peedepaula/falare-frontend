import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadeTurma } from '../unidade-turma/unidade-turma';
import { TurmaService } from '../../core/services/turma.service';

@Component({
  selector: 'app-turmas-layout',
  imports: [UnidadeTurma],
  templateUrl: './turmas-layout.html',
  styleUrl: './turmas-layout.scss',
})
export class TurmasLayout implements OnInit {
  private turmaService = inject(TurmaService);
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(){
    this.mostrar.emit();
  }

  turmas = signal<any[]>([]);

  ngOnInit(): void {
    this.turmaService.buscarTurmas().subscribe({
      next: (res) => {
        this.turmas.set(res);
        console.log('Turmas carregadas:', this.turmas());
      },
      error: (err) => {
        console.error('Erro ao buscar turmas:', err);
      }
    });
  }

}
