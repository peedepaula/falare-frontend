import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface CadastrarProfessorRequest{
  nome: string;
  email: string;
  senha: string;
}

export interface AtualizarProfessorRequest{
  nome?: string;
  email?: string;
  senha?: string;
}


@Injectable({
    providedIn: 'root'
})

export class ProfessorService {
    private http = inject(HttpClient);
    private api = `${environment.apiUrl}/Professor`

    buscarProfessores(): Observable<any> {
        return this.http.get(`${this.api}/professores`)
    }

    cadastrarProfessor(professor: CadastrarProfessorRequest): Observable<any> {
        return this.http.post(`${this.api}/professor`, professor)
    }

    atualizarProfessor(id: number, dados: AtualizarProfessorRequest): Observable<any> {
        return this.http.patch(`${this.api}/professor/${id}`, dados);
    }

    apagarProfessor(id: number): Observable<any> {
        return this.http.delete(`${this.api}/professor/${id}`);
    }
}