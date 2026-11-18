import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { AlunoService } from '../../core/services/aluno.service';
import { TurmaService } from '../../core/services/turma.service';
import { Turma } from '../cadastrar-aula/cadastrar-aula';
import { MatriculaService } from '../../core/services/matricula.service';

@Component({
  selector: 'app-cadastrar-matricula',
  imports: [],
  templateUrl: './cadastrar-matricula.html',
  styleUrl: './cadastrar-matricula.scss',
})
export class CadastrarMatricula implements OnInit{
  private AlunoService = inject(AlunoService);
  private TurmaService = inject(TurmaService);
  private MatriculaService = inject(MatriculaService);

  mostrarBuscarAlunos: boolean = false;
  mostrarBuscarTurmas: boolean = false;

  @Output() fechar = new EventEmitter<void>();
  @Output() matriculaCadastrada = new EventEmitter<void>();


  fecharPopup(){
    this.fechar.emit();
  }

  ngOnInit(): void {
    this.buscarTurmas();
    this.buscarAlunos();
  }

  alunos = signal<any[]>([])
  turmas = signal<any[]>([])

  alunoSelecionado: any; 

  turmaSelecionada: Turma = {
    id: '',
    idioma: '',
    nivel: '',
    dias: [],
    horario: '',
    professorId: '',
    professorNome: '',
    matriculados: 0,
    vagas: 0
  };

  cadastrarMatricula(){
    if(!this.alunoSelecionado.id || !this.turmaSelecionada.id)return;

    this.MatriculaService.cadastrarMatricula(
      {
        alunoId: this.alunoSelecionado.id,
        turmaId: this.turmaSelecionada.id
      }
    ).subscribe({
      next: (res) => {
        this.fechar.emit();
        this.matriculaCadastrada.emit();
        console.log('Mátricula cadastrada')
      },
      error: (err) => {
        console.error('Erro ao cadastrar Mátricula:', err);
      }
    })
  }

  buscarTurmas(){
      this.TurmaService.buscarTurmas().subscribe({
        next: (res) => {
          this.turmas.set(res);
          console.log("Turmas: ", this.turmas())
        },
        error: (err) => {
          console.error('Erro ao buscar Turmas:', err);
        }
      },
    )
  };

  buscarAlunos(){
      this.AlunoService.buscarAlunos().subscribe({
        next: (res) => {
          this.alunos.set(res);
          console.log("Alunos: ", this.alunos())
        },
        error: (err) => {
          console.error('Erro ao buscar Alunos:', err);
        }
      },
    )
  };

}
