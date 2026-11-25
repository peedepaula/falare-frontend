import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { AlunoService } from '../../core/services/aluno.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-visualizar-aluno-notas',
  imports: [],
  templateUrl: './visualizar-aluno-notas.html',
  styleUrl: './visualizar-aluno-notas.scss',
})
export class VisualizarAlunoNotas implements OnInit{
  private popup = inject(PopupService);
  
  private alunoService = inject(AlunoService);
  mostrarSemestre: boolean = false;

  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  ngOnInit(): void {
    this.buscarNotas();
  }

  dadosNotas = signal<any[]>([]);
  matriculaAtual = signal<any | null>(null)

  buscarNotas(){
    this.alunoService.buscarAlunoNota().subscribe({
      next: (res) => {
        this.dadosNotas.set(res);
        this.matriculaAtual.set(res[0] ?? null);
        console.log('Notas buscada com sucesso');
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Notas', err);
        this.popup.erro('Erro ao tentar buscar Notas.');
      }
    })
  }

  selecionarMatricula(item: any) {
    this.matriculaAtual.set(item);
  }
}
