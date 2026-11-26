import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadeTurma } from '../unidade-turma/unidade-turma';
import { TurmaService } from '../../core/services/turma.service';
import { PopupService } from '../../core/services/popup.service';
import { Carregamento } from '../carregamento/carregamento';

@Component({
  selector: 'app-turmas-layout',
  imports: [UnidadeTurma, Carregamento],
  templateUrl: './turmas-layout.html',
  styleUrl: './turmas-layout.scss',
})
export class TurmasLayout implements OnInit {
  private popup = inject(PopupService);
  
  private turmaService = inject(TurmaService);
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(turma: any){
    this.mostrar.emit(turma);
  }

  carregandoComponente: boolean = true;
  turmas = signal<any[]>([]);

  ngOnInit(): void {
    this.buscarTurmas();
  }

  buscarTurmas(){
    this.carregandoComponente = true;
    this.turmaService.buscarTurmas().subscribe({
      next: (res) => {
        this.turmas.set(res);
        console.log('Turmas carregadas:', this.turmas());
      },
      error: (err) => {
        console.error('Erro ao buscar turmas:', err);
        this.popup.erro('Erro ao tentar buscar Turma.')
      }
    });
    this.carregandoComponente = false;
  }

}
