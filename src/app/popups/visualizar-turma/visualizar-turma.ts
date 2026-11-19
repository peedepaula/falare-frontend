import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';
import { TurmaService } from '../../core/services/turma.service';
import { AlunoService } from '../../core/services/aluno.service';
import { formatarData } from '../../utils/formatadores';

@Component({
  selector: 'app-visualizar-turma',
  imports: [UnidadeAluno],
  templateUrl: './visualizar-turma.html',
  styleUrl: './visualizar-turma.scss',
})
export class VisualizarTurma implements OnInit{
  private turmaService = inject(TurmaService);
  private alunoService = inject(AlunoService);

  formatarData = formatarData;

  @Input() turmaSelecionada: any;

  @Output() fechar = new EventEmitter<void>();
  @Output() recarregarTurmas = new EventEmitter<void>();
  @Output() editarTurma = new EventEmitter<void>();

  podeVer: boolean = localStorage.getItem('tipoUsuario') === 'Secretaria';

  fecharPopup(){
    this.fechar.emit();
  }

  mostrarEditarTurma(){
    this.editarTurma.emit()
  }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  deletarTurma(){
    if(!this.turmaSelecionada.id)return;
    this.turmaService.deletarTurmas(this.turmaSelecionada.id).subscribe({
      next: (res) => {
        this.fechar.emit();
        this.recarregarTurmas.emit();
        console.log('Turma deletada com sucesso');
      },
      error: (err) => {
        console.log('Erro ao tentar deletar a turma', err)
      }
    })
  }

  alunos = signal<any[]>([]);

  buscarAlunos(){
    if(!this.turmaSelecionada.id)return;

    this.alunoService.buscarAlunosPorTurma(this.turmaSelecionada.id).subscribe({
      next: (res) => {
        this.alunos.set(res);
        console.log('Alunos buscado com sucesso');
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Alunos');
      }
    })
  }
}
