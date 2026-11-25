import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { TurmaService } from '../../core/services/turma.service';
import { AulaService } from '../../core/services/aula.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-cadastrar-aula',
  imports: [],
  templateUrl: './cadastrar-aula.html',
  styleUrl: './cadastrar-aula.scss',
})


export class CadastrarAula implements OnInit{
  private popup = inject(PopupService);
  
  private TurmaService = inject(TurmaService);
  private AulaService = inject(AulaService);

  mostrarTrumas: boolean = false;
  @Output() fechar = new EventEmitter<void>();
  @Output() aulaCriada = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  turmas = signal<any[]>([])
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

  private hoje(): string {
    const d = new Date();
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

  data: string = this.hoje();

  ngOnInit(): void {
    this.TurmaService.buscarTurmas().subscribe({
      next: (res) => {
        this.turmas.set(res);
        console.log('Turmas', this.turmas());
      },
      error: (err) => {
        console.error('Erro ao buscar Turmas', err)
        this.popup.erro('Erro ao tentar buscar Turmas.')
      }
    });
  }

  cadastrarAula(){
    if(!this.turmaSelecionada.id)return;
    
    this.AulaService.cadastrarAula({
        turmaId: this.turmaSelecionada.id,
        data: this.data,
    }).subscribe({
      next: () => {
        this.fecharPopup();
        this.aulaCriada.emit();
        console.log("Aula criada")
        this.popup.acerto('Turma cadastrada com sucesso.')
      },
      error: (err) => {
        console.log("Erro ao cria Aula", err)
        this.popup.erro('Erro ao tentar cadastrar Turma.')
      }
    })
  }
}


export interface Turma  {
  id: string;
  idioma: string;
  nivel: string;
  dias: string[];
  horario: string;
  professorId: string;
  professorNome: string;
  matriculados: number;
  vagas: number;
};