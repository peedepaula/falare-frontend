import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlunoService } from '../../core/services/aluno.service';

@Component({
  selector: 'app-cadastrar-aluno',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastrar-aluno.html',
  styleUrl: './cadastrar-aluno.scss',
})
export class CadastrarAluno implements OnInit {
  private fb = inject(FormBuilder);
  private alunoService = inject(AlunoService);

  @Input() aluno: any | null = null;
  @Output() fechar = new EventEmitter<void>();
  @Output() salvo = new EventEmitter<void>();

  salvando = false;

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    telefone: ['', Validators.required],
  });

  get editando(): boolean {
    return !!this.aluno;
  }

  ngOnInit(): void {
    if (this.aluno) {
      this.form.patchValue({
        nome: this.aluno.nome,
        email: this.aluno.email,
        telefone: this.aluno.telefone,
      });

      const senha = this.form.controls.senha;
      senha.setValidators([Validators.minLength(6)]);
      senha.updateValueAndValidity();
    }
  }

  fecharPopup() {
    this.fechar.emit();
  }

  salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.salvando = true;
    const { senha, ...resto } = this.form.getRawValue();

    const requisicao$ = this.aluno
      ? this.alunoService.atualizarAluno(
          this.aluno.id,
          senha ? { ...resto, senha } : resto
        )
      : this.alunoService.cadastrarAluno({ ...resto, senha });

    requisicao$.subscribe({
      next: () => {
        this.salvando = false;
        this.salvo.emit();
        this.fecharPopup();
      },
      error: (err) => {
        this.salvando = false;
        console.error('Erro ao salvar aluno:', err);
      }
    });
  }
}