import { Component, EventEmitter, inject, Output, OnInit, signal } from '@angular/core';
import { UnidadeAluno } from '../unidade-aluno/unidade-aluno';
import { AlunoService } from '../../core/services/aluno.service';
import { PopupService } from '../../core/services/popup.service';
import { Carregamento } from '../carregamento/carregamento';

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

  carregandoComponente: boolean = true;

  alunos = signal<any[]>([]);

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos(): void {
    this.carregandoComponente = true;
    this.alunoService.buscarAlunos().subscribe({
      next: (res) => {
        this.alunos.set(res);
        console.log('Alunos carregados:', this.alunos());
      },
      error: (err) => {
        console.error('Erro ao buscar alunos:', err);
        this.popup.erro('Erro ao tentar buscar Alunos.')
      }
    });
    this.carregandoComponente = false;
  }

  mostrarPopup(aluno: any) {
    this.mostrar.emit(aluno);
  }
}