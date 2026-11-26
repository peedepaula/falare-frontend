import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { AlunoService } from '../../core/services/aluno.service';
import { PopupService } from '../../core/services/popup.service';
import { Carregamento } from '../../layout/carregamento/carregamento';

@Component({
  selector: 'app-visualizar-aluno-frequencia',
  imports: [Carregamento],
  templateUrl: './visualizar-aluno-frequencia.html',
  styleUrl: './visualizar-aluno-frequencia.scss',
})
export class VisualizarAlunoFrequencia implements OnInit{
  private popup = inject(PopupService);

  private alunoService = inject(AlunoService);
  mostrarSemestre: boolean = false;
  
  @Output() fechar = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  ngOnInit(): void {
    this.buscarFrequencia();
  }

  carregandoComponente: boolean = true;
  dadosFrequencia = signal<any[]>([]);
  matriculaAtual = signal<any | null>(null)

  buscarFrequencia() {
    this.carregandoComponente = true;
    this.alunoService.buscarAlunoFrequencia().subscribe({
      next: (res) => {
        this.dadosFrequencia.set(res);
        this.matriculaAtual.set(res[0] ?? null);
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Frequência', err)
        this.popup.erro('Erro ao tentar buscar Frequência.')
      }
    });
    this.carregandoComponente = false;
  }

  selecionarMatricula(item: any) {
    this.matriculaAtual.set(item);
  }
}
