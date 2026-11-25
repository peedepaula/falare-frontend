import { Component, EventEmitter, inject, input, Input, OnInit, Output, signal } from '@angular/core';
import { cadastrarChamadaAluno, ChamadaService } from '../../core/services/chamada.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-chamada',
  imports: [],
  templateUrl: './chamada.html',
  styleUrl: './chamada.scss',
})
export class Chamada implements OnInit{
  private popup = inject(PopupService);

  private chamadaService = inject(ChamadaService);

  alunos = signal<any[]>([]);
  turmaId = signal<string>('');
  data = signal<string>('');

  @Output() fechar = new EventEmitter<void>();
  @Output() recarregarAulas = new EventEmitter<void>();
  @Output() chamadaSalva = new EventEmitter<void>();

  @Input({ alias: 'alunos' })
  set alunosEntrada(valor: any[] | null | undefined) {
    this.alunos.set(valor ?? []);
  }

  @Input({ alias: 'turmaId' })
  set turmaIdEntrada(valor: string | null | undefined) {
    this.turmaId.set(valor ?? '');
  }

  @Input({ alias: 'data' })
  set dataEntrada(valor: string | null | undefined) {
    this.data.set(valor ?? '');
  }
  ngOnInit(): void {
    this.verificarChamada();

    console.log("Meus alunos: ", this.alunos(), "turma: ", this.turmaId, "data: ", this.data);
    console.log("Minha turma: ", this.turmaId());
    console.log("Minha data: ", this.data());
  }

  presencas = signal<Record<string, boolean>>({});
  atestados = signal<Record<string, boolean>>({});
  salvando = signal(false);

  fecharPopup() {
    this.fechar.emit();
  }

  estaPresente(matriculaId: string): boolean {
    return this.presencas()[matriculaId] ?? true;
  }

  alternarPresenca(matriculaId: string, presente: boolean) {
    this.presencas.update((p) => ({ ...p, [matriculaId]: presente }));
  }

  alternarAtestado(matriculaId: string, atestado: boolean) {
    this.atestados.update((a) => ({ ...a, [matriculaId]: atestado }));
  }

  salvarChamada() {
    const itens: cadastrarChamadaAluno[] = this.alunos().map((a: any) => {
      const presente = this.estaPresente(a.matriculaId);
      return {
        matriculaId: a.matriculaId as string,
        presente,
        comAtestado: !presente && (this.atestados()[a.matriculaId] ?? false),
      };
    });


if (!this.turmaId() || !this.data() || itens.length === 0
    || itens.some((i) => !i.matriculaId) || this.salvando() || this.jaTemChamada()) return;

    this.salvando.set(true);

    this.chamadaService
      .cadastrarChamada({
        turmaId: this.turmaId(),
        data: this.data(),
        itens,
      })
      .subscribe({
        next: () => {
          this.salvando.set(false);
          this.recarregarAulas.emit();
          this.fechar.emit();
          this.popup.acerto('Chamada cadastrada com sucesso.')
        },
        error: (err) => {
          this.salvando.set(false);
          console.log('Erro ao tentar criar Chamada', err.error);
          this.popup.erro('Erro ao tentar cadastrar Chamada.')
        },
      });
  }

  jaTemChamada = signal(false);
  carregando = signal(true);

  verificarChamada() {
    this.chamadaService.buscarChamadas(this.turmaId(), this.data()).subscribe({
      next: (res) => {
        const lista: any[] = res?.alunos ?? [];

        this.alunos.set(lista.map((a) => ({
          matriculaId: a.matriculaId,
          id: a.alunoId,
          nome: a.alunoNome,
        })));

        const lancada = res?.aulaId != null && lista.some((a) => a.presente !== null);

        if (lancada) {
          const presencas: Record<string, boolean> = {};
          const atestados: Record<string, boolean> = {};
          for (const a of lista) {
            presencas[a.matriculaId] = a.presente ?? true;
            atestados[a.matriculaId] = a.comAtestado;
          }
          this.presencas.set(presencas);
          this.atestados.set(atestados);
          this.jaTemChamada.set(true);
          this.popup.informacao('Chamada já realizada.')
        }
        this.carregando.set(false);
      },
      error: (err) => {
        console.log('Erro ao verificar chamada', err.status, err.error);
        this.carregando.set(false);
        this.popup.erro('Erro ao tentar buscar Chamada.')
      },
    });
  }

}
