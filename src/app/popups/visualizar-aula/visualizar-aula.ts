import { Component, EventEmitter, inject, Input, OnInit, Output, output, signal, viewChild } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';
import { Chamada } from '../chamada/chamada';
import { AulaService } from '../../core/services/aula.service';
import { AlunoService } from '../../core/services/aluno.service';
import { AulasLayout } from '../../layout/aulas-layout/aulas-layout';
import { formatarData } from '../../utils/formatadores';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-visualizar-aula',
  imports: [UnidadeAluno, Chamada],
  templateUrl: './visualizar-aula.html',
  styleUrl: './visualizar-aula.scss',
})
export class VisualizarAula implements OnInit{
  private popup = inject(PopupService);
  
  private AulaService = inject(AulaService)
  private alunoService = inject(AlunoService)

  formatarData = formatarData;

  private aulasLayout = viewChild(AulasLayout);

  sessaoTela: string = "dados";
  mostrarChamada: boolean = false;

  @Output() fechar = new EventEmitter<void>();
  @Output() aulaDeletada = new EventEmitter<void>();
  @Input() aula: any;

  alunos = signal<any[]>([]);

  fecharPopup(){
    this.fechar.emit();
  }

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  deletarAula(){
    console.log("Fui")
    if(!this.aula.id)return

    this.AulaService.deletarAula(this.aula.id).subscribe({
      next: () => {
        this.aulaDeletada.emit();
        this.fecharPopup();
        console.log('Aula deletada')
        this.popup.erro('Aula deletada com sucesso.')
      },
      error: (err) => {
        console.error('Erro ao tentar deletar Aula', err)
        this.popup.erro('Erro ao tentar Deletar Aula.')
      }
    })
  }

  buscarAlunos(){
    if(!this.aula.turmaId)return;

    this.alunoService.buscarAlunosPorTurma(this.aula.turmaId).subscribe({
      next: (res) => {
        this.alunos.set(res);
        console.log('Alunos buscado com sucesso');
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Alunos', err);
        this.popup.erro('Erro ao tentar buscar Alunos.')
      }
    })
  }

  recarregarAulas(){
    this.aulasLayout()?.carregarAulas();
  }

}
