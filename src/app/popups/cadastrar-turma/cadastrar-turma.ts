import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { IdiomaTurma, NivelTurma, TurmaService } from '../../core/services/turma.service';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../../core/services/professor.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-cadastrar-turma',
  imports: [FormsModule],
  templateUrl: './cadastrar-turma.html',
  styleUrl: './cadastrar-turma.scss',
})
export class CadastrarTurma implements OnInit{
  private popup = inject(PopupService);

  private turmaService = inject(TurmaService);
  private professorService = inject(ProfessorService);

  mostrarIdiomas: boolean = false;
  mostrarNivel: boolean = false;
  mostrarProfessores: boolean = false;

  @Input() turmaSelecionada: any;

  @Output() fechar = new EventEmitter<void>();
  @Output() recarregarTurmas = new EventEmitter<void>();

  idioma: IdiomaTurma | '' = '';
  nivel: number | null = null;
  diasDaSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
  diasSelecionados: string[] = [];
  horarioInicio = '';
  horarioFim = '';
  professorSelecionado: { id?: string; nome?: string } = {};
  vagas: number | null = null;

  professores = signal<any[]>([]);

  fecharPopup(){
    this.fechar.emit();
  }

  ngOnInit(): void {
    this.buscarProfessores();

    if (this.turmaSelecionada) {
      const t = this.turmaSelecionada;

      this.idioma = String(t.idioma).toLowerCase() as IdiomaTurma;
      this.nivel = Number(String(t.nivel).match(/\d+$/)?.[0]) || null;
      this.diasSelecionados = (t.dias ?? []).map(
        (d: string) => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase()
      );
      this.horarioInicio = String(t.horarioInicio).slice(0, 5);
      this.horarioFim = String(t.horarioFim).slice(0, 5);
      this.professorSelecionado = { id: t.professorId, nome: t.professorNome };
      this.vagas = t.vagas;
    }
  }

  salvarTurma() {
    const nivel = this.montarNivel();

    if (
      !this.idioma ||
      !nivel ||
      this.diasSelecionados.length === 0 ||
      !this.horarioInicio ||
      !this.horarioFim ||
      !this.professorSelecionado.id ||
      !this.vagas ||
      this.vagas <= 0
    ) {
      this.popup.erro('Preencha todos os campos.')
      return;
    }

    const dados = {
      idioma: this.idioma,
      nivel,
      dias: this.diasSelecionados.map(d => d.toLowerCase()),
      horarioInicio: `${this.horarioInicio}:00`,
      horarioFim: `${this.horarioFim}:00`,
      professorId: this.professorSelecionado.id,
      vagas: this.vagas,
    };

    const requisicao = this.turmaSelecionada
      ? this.turmaService.atualizarTurmas(this.turmaSelecionada.id, dados)
      : this.turmaService.cadastrarTurmas(dados);

    requisicao.subscribe({
      next: () => {
        this.fechar.emit();
        this.recarregarTurmas.emit();
        this.popup.acerto('Turma salva com sucesso.')
      },
      error: (err) => {
        console.log('Erro ao salvar turma: ', err.error)
        this.popup.erro('Erro ao tentar salvar Turma.')
      } 
    });
  }

  buscarProfessores() {
    this.professorService.buscarProfessores().subscribe({
      next: (res) => this.professores.set(res),
      error: (err) => {
        console.error('Erro ao buscar professores:', err)
        this.popup.erro('Erro ao tentar buscar Professores.')
      },
    });
  }

  selecionarIdioma(idioma: IdiomaTurma) {
    this.idioma = idioma;
  }

  alternarDia(dia: string) {
    this.diasSelecionados = this.diasSelecionados.includes(dia)
      ? this.diasSelecionados.filter((d) => d !== dia)
      : [...this.diasSelecionados, dia];
  }

  get labelIdioma(): string {
    return this.idioma === 'ingles' ? 'Inglês' : this.idioma === 'espanhol' ? 'Espanhol' : '';
  }

  private montarNivel(): NivelTurma | null {
    if (!this.idioma || !this.nivel) return null;
    return `${this.idioma}${this.nivel}` as NivelTurma;   // 'ingles1', 'espanhol2'...
  }
}
