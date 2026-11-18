import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';
import { TurmaService } from '../../core/services/turma.service';

@Component({
  selector: 'app-visualizar-turma',
  imports: [UnidadeAluno],
  templateUrl: './visualizar-turma.html',
  styleUrl: './visualizar-turma.scss',
})
export class VisualizarTurma {
  private turmaService = inject(TurmaService);

  @Input() turmaSelecionada: any;

  @Output() fechar = new EventEmitter<void>();
  @Output() recarregarTurmas = new EventEmitter<void>();
  @Output() editarTurma = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  mostrarEditarTurma(){
    this.editarTurma.emit()
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
}
