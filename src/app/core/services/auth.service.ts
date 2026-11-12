// core/services/auth.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Usuario {
  // ajuste conforme o retorno do seu /Auth/me
  id: number;
  nome: string;
  email: string;
  perfil: string;
}

const TOKEN_KEY = 'token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private api = `${environment.apiUrl}/Auth`;

  usuario = signal<Usuario | null>(null);

    login(dados: LoginRequest) {
    return this.http
        .post<{ token: string }>(`${this.api}/entrar`, dados)
        .pipe(tap(res => this.setToken(res.token)));
    }

  me(): Observable<Usuario> {
    return this.http
      .get<Usuario>(`${this.api}/me`)
      .pipe(tap(u => this.usuario.set(u)));
  }

  /** true se o token é válido (a API confirma via /me) */
  validarSessao(): Observable<boolean> {
    if (!this.getToken()) return of(false);
    return this.me().pipe(
      map(() => true),
      catchError(() => {
        this.limparSessao();
        return of(false);
      })
    );
  }

  logout() {
    this.limparSessao();
    this.router.navigate(['/']);
  }

  getToken() { return localStorage.getItem(TOKEN_KEY); }
  private setToken(t: string) { localStorage.setItem(TOKEN_KEY, t); }
  private limparSessao() {
    localStorage.removeItem(TOKEN_KEY);
    this.usuario.set(null);
  }
}

export enum TipoUsuario {
  Aluno = 'Aluno',
  Professor = 'Professor',
  Secretaria = 'Secretaria',
}

export interface LoginRequest {
  email: string;
  senha: string;
  tipoUsuario: TipoUsuario;
}