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

  buscarAlunosPorTurma(turmaId: string): Observable<any> {
    return this.http.get(`${this.api}/alunos/por-turma/${turmaId}`);
  }

  buscarAlunoCompleto(alunoId: string): Observable<any> {
    return this.http.get(`${this.api}/aluno/completo/${alunoId}`);
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


  // Para usuario tipo Aluno
  buscarAlunoFrequencia(): Observable<any> {
    return this.http.get(`${this.api}/aluno/frequencia`);
  }
  buscarAlunoNota(): Observable<any> {
    return this.http.get(`${this.api}/aluno/nota`);
  }
  buscarAlunoFinanceiro(): Observable<any> {
    return this.http.get(`${this.api}/aluno/financeiro`);
  }
}