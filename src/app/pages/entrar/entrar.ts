import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Router, RouterLink } from '@angular/router';
import { AuthService, TipoUsuario } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entrar',
  imports: [Header, FormsModule],
  templateUrl: './entrar.html',
  styleUrl: './entrar.scss',
})
export class Entrar implements OnInit {
  private router = inject(Router);
  private auth = inject(AuthService);

  isAdmin = false;
  typeUser: 'professor' | 'secretaria' = 'professor';

  email = '';
  senha = '';
  erro = '';
  carregando = false;

  ngOnInit(): void {
    this.isAdmin = this.router.url.includes('entrar-admin');
  }

  entrar(): void {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha e-mail e senha.';
      return;
    }

    this.erro = '';
    this.carregando = true;

    this.auth.login({
      email: this.email,
      senha: this.senha,
      tipoUsuario: this.getTipoUsuario(),
    }).subscribe({
      next: () => {
        this.carregando = false;
        localStorage.setItem('tipoUsuario', this.getTipoUsuario().toString());
        this.router.navigate([this.isAdmin ? '/geral' : '/geral/aluno']);
      },
      error: (err) => {
        this.carregando = false;
        this.erro = err.status === 401
          ? 'E-mail ou senha inválidos.'
          : 'Não foi possível entrar. Tente novamente.';
      },
    });
  }

  public getTipoUsuario(): TipoUsuario {
    if (!this.isAdmin) return TipoUsuario.Aluno;
    return this.typeUser === 'professor'
      ? TipoUsuario.Professor
      : TipoUsuario.Secretaria;
  }
}
