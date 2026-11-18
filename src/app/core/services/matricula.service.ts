import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface CadastroMatricula{
    alunoId: string;
    turmaId: string;
}

export interface AtualizarMatricula{
    status?: StatusMatricula;
    p1?: number;
    p2?: number;
    trabalho?: number;
}

export type StatusMatricula =
  | 'ativa'
  | 'concluida'
  | 'certificada'
  | 'reprovada_falta'
  | 'reprovada_nota'
  | 'trancada';

@Injectable({
    providedIn: 'root'
})

export class MatriculaService {
    private http = inject(HttpClient);
    private api = `${environment.apiUrl}/Matricula`

    buscarMatriculas(): Observable<any> {
        return this.http.get(`${this.api}/matriculas`)
    }

    cadastrarMatricula(matricula: CadastroMatricula): Observable<any> {
        return this.http.post(`${this.api}/matricula`, matricula)
    }

    atualizarMatricula(id: Number, dados: AtualizarMatricula): Observable<any> {
        return this.http.patch(`${this.api}/matricula/${id}`, dados)
    }

    deletarMatricula(id: Number): Observable<any> {
        return this.http.delete(`${this.api}/matricula/${id}`)
    }
}