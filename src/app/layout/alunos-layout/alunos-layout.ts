import { Component, EventEmitter, inject, Output, OnInit, signal } from '@angular/core';
import { UnidadeAluno } from '../unidade-aluno/unidade-aluno';
import { AlunoService } from '../../core/services/aluno.service';
import { PopupService } from '../../core/services/popup.service';
import { Carregamento } from '../carregamento/carregamento';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-alunos-layout',
  imports: [UnidadeAluno, Carregamento],
  templateUrl: './alunos-layout.html',
  styleUrl: './alunos-layout.scss',
})
export class AlunosLayout implements OnInit {
  private popup = inject(PopupService);

  private alunoService = inject(AlunoService);

  @Output() mostrar = new EventEmitter<void>();

  // alunosEmRisco: boolean = false;
  // carregandoComponente: boolean = true;

  // alunos = signal<any[]>([]);

  ngOnInit(): void {
    this.buscarAlunos();
  }

  alunosEmRisco = signal(false);
  carregandoComponente = signal(true);
  alunos = signal<any[]>([]);

buscarAlunos(): void {
  this.carregandoComponente.set(true);

  this.alunoService.buscarAlunos(this.alunosEmRisco())
    .pipe(finalize(() => this.carregandoComponente.set(false)))
    .subscribe({
      next: (res) => this.alunos.set(res),
      error: (err) => {
        console.error('Erro ao buscar alunos:', err);
        this.popup.erro('Erro ao tentar buscar Alunos.');
      }
    });
}

alternarAlunosEmRisco(): void {
  this.alunosEmRisco.update(v => !v);
  this.buscarAlunos();
}

  mostrarPopup(aluno: any) {
    this.mostrar.emit(aluno);
  }
}