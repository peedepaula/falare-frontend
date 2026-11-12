import { Component, EventEmitter, inject, Output, OnInit, signal } from '@angular/core';
import { UnidadeAluno } from '../unidade-aluno/unidade-aluno';
import { AlunoService } from '../../core/services/aluno.service';

@Component({
  selector: 'app-alunos-layout',
  imports: [UnidadeAluno],
  templateUrl: './alunos-layout.html',
  styleUrl: './alunos-layout.scss',
})
export class AlunosLayout implements OnInit {

  private alunoService = inject(AlunoService);

  @Output() mostrar = new EventEmitter<void>();

  alunos = signal<any[]>([]);

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos(): void {
    this.alunoService.buscarAlunos().subscribe({
      next: (res) => {
        this.alunos.set(res);
        console.log('Alunos carregados:', this.alunos());
      },
      error: (err) => {
        console.error('Erro ao buscar alunos:', err);
      }
    });
  }

  mostrarPopup() {
    this.mostrar.emit();
  }
}