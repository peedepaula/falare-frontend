import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../../core/services/professor.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-cadastrar-professor',
  imports: [FormsModule],
  templateUrl: './cadastrar-professor.html',
  styleUrl: './cadastrar-professor.scss',
})
export class CadastrarProfessor implements OnInit {
  private popup = inject(PopupService);
  private professorService = inject(ProfessorService);

  @Input() professor: any = null;
  @Output() fechar = new EventEmitter<void>();
  @Output() salvou = new EventEmitter<void>();

  nome = '';
  email = '';
  senha = '';
  carregando = signal(false);

  get editando(): boolean {
    return !!this.professor;
  }

  ngOnInit(): void {
    if (this.professor) {
      this.nome = this.professor.nome;
      this.email = this.professor.email;
    }
  }

  fecharPopup() {
    this.fechar.emit();
  }

  salvar() {
    if (!this.nome || !this.email) {
      this.popup.erro('Preencha todos os campos.')
      return;
    };
    if (!this.editando && !this.senha) {
      this.popup.erro('Senha é um campo obrigatório.')
      return;
    };

    this.carregando.set(true);

    if (this.editando) {
      const dados: any = { nome: this.nome, email: this.email };
      if (this.senha) dados.senha = this.senha;

      this.professorService.atualizarProfessor(this.professor.id, dados).subscribe({
        next: () => this.finalizar(),
        error: (err) => this.erro('atualizar', err),
      });
    } else {
      this.professorService
        .cadastrarProfessor({ nome: this.nome, email: this.email, senha: this.senha })
        .subscribe({
          next: () => this.finalizar(),
          error: (err) => this.erro('cadastrar', err),
        });
    }
  }

  apagar() {
    if (!this.editando) return;
    if (!confirm(`Apagar o professor ${this.professor.nome}?`)) return;

    this.carregando.set(true);
    this.professorService.apagarProfessor(this.professor.id).subscribe({
      next: () => this.finalizar(),
      error: (err) => this.erro('apagar', err),
    });
  }

  private finalizar() {
    this.carregando.set(false);
    this.salvou.emit();
    this.fecharPopup();
  }

  private erro(acao: string, err: any) {
    this.carregando.set(false);
    console.error(`Erro ao ${acao} professor`, err);
  }
}
