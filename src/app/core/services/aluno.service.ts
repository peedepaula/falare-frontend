import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CadastrarAlunoRequest {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

export interface AtualizarAlunoRequest {
  nome?: string;
  email?: string;
  senha?: string;
  telefone?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/Aluno`;

  buscarAlunos(): Observable<any> {
    return this.http.get(`${this.api}/alunos`);
  }

  cadastrarAluno(aluno: CadastrarAlunoRequest): Observable<any> {
    return this.http.post(`${this.api}/aluno`, aluno)
  }

  atualizarAluno(id: number, dados: AtualizarAlunoRequest): Observable<any> {
    return this.http.patch(`${this.api}/aluno/${id}`, dados);
  }

  apagarAluno(id: number): Observable<any> {
    return this.http.delete(`${this.api}/aluno/${id}`);
  }
}