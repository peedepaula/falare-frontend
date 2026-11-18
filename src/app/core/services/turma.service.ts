import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface TurmaCadastrarAtualizar {
  idioma: IdiomaTurma;
  nivel: NivelTurma;
  dias: string[];
  horarioInicio: string;
  horarioFim: string;
  professorId: string;
  vagas: number;
}

export type NivelTurma =
  | 'ingles1' | 'ingles2' | 'ingles3'
  | 'espanhol1' | 'espanhol2' | 'espanhol3';

export type IdiomaTurma =
  | 'ingles'
  | 'espanhol';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/Turma`;

  buscarTurmas(): Observable<any> {
    return this.http.get(`${this.api}/turmas`);
  }

  cadastrarTurmas(turma: TurmaCadastrarAtualizar): Observable<any> {
    return this.http.post(`${this.api}/turma`, turma);
  }

  atualizarTurmas(id: string, dados: TurmaCadastrarAtualizar): Observable<any> {
    return this.http.patch(`${this.api}/turma/${id}`, dados);
  }
  deletarTurmas(id: string): Observable<any> {
    return this.http.delete(`${this.api}/turma/${id}`);
  }
}