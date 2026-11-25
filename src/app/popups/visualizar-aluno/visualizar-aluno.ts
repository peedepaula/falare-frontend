import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { AlunoService } from '../../core/services/aluno.service';
import { MatriculaService } from '../../core/services/matricula.service';
import { FormsModule } from '@angular/forms';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-visualizar-aluno',
  imports: [FormsModule],
  templateUrl: './visualizar-aluno.html',
  styleUrl: './visualizar-aluno.scss',
})
export class VisualizarAluno implements OnInit{
  private popup = inject(PopupService);

  private alunoService = inject(AlunoService);
  private matriculaService = inject(MatriculaService);

  @Input() alunoSelecionado: any;
  sessaoTela: string = "dados";
  
  @Output() fechar = new EventEmitter<void>();
  @Output() editar = new EventEmitter<void>();
  @Output() apagar = new EventEmitter<void>();
  @Output() recarregarAlunos = new EventEmitter<void>();

  podeVer: boolean = localStorage.getItem('tipoUsuario') === 'Secretaria';

  fecharPopup(){
    this.fechar.emit();
  }

  mostrarEditar(){
    this.editar.emit()
  }
  
  mostrarApagar(){
    this.apagar.emit()
  }

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }

  ngOnInit(): void {
    this.alunoCompleto();
  }

  aluno = signal<any>(null);

  alunoCompleto(){
    if(!this.alunoSelecionado.id)return;

    this.alunoService.buscarAlunoCompleto(this.alunoSelecionado.id).subscribe({
      next: (res) => {
        const m = res.matriculas?.[0];
        this.matriculaId = m?.matriculaId ?? null;
        this.p1 = m?.p1 ?? null;
        this.p2 = m?.p2 ?? null;
        this.trabalho = m?.trabalho ?? null;

        this.aluno.set(res);
        console.log('Alunos buscado com sucesso')
      },
      error: (err) => {
        console.log('Erro ao tentar buscar o aluno', err)
        this.popup.erro('Erro ao tentar buscar Aluno.')
      }
    })
  }

  p1: string | number | null = null;
  p2: string | number | null = null;
  trabalho: string | number | null = null;
  matriculaId: string | null = null;

  private paraNumero(valor: string | number | null): number | undefined {
    if (valor === null || valor === '') return undefined;
    const n = Number(String(valor).replace(',', '.'));
    return isNaN(n) ? undefined : n;
  }

  salvarNotas(){
    if (!this.aluno().matriculas[0].matriculaId) return;

    const p1 = this.paraNumero(this.p1);
    const p2 = this.paraNumero(this.p2);
    const trabalho = this.paraNumero(this.trabalho);
    const matriculaId = this.aluno().matriculas[0].matriculaId

    const invalida = [p1, p2, trabalho].some((n) => n !== undefined && (n < 0 || n > 10));
    if (invalida) {
      console.log('Notas devem estar entre 0 e 10');
      return;
    }

    this.matriculaService.notasMatricula(
      matriculaId,
      {
        p1,
        p2,
        trabalho
      }
    ).subscribe({
      next: (res) => {
        this.recarregarAlunos.emit();
        console.log('Notas salvas')
        this.popup.acerto('Notas salvas com sucesso.')
      },
      error: (err) => {
        console.log('Erro ao tentar salvar as notas', err)
        this.popup.erro('Erro ao tentar salvar Notas.')
      }
    })
  }
}
