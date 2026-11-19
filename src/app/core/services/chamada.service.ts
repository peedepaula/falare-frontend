import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface cadastrarChamada {
  turmaId: string;
  data: string;
  itens: cadastrarChamadaAluno[]

} 

export interface cadastrarChamadaAluno {
    matriculaId: string;
    presente: boolean;
    comAtestado: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ChamadaService {

  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/Chamada`;

    buscarChamadas(turmaId: string, data: string): Observable<any> {
    const params = new HttpParams().set('turmaId', turmaId).set('data', data);
    return this.http.get(`${this.api}/chamada`, { params });
    }

  cadastrarChamada(chamada: cadastrarChamada): Observable<any> {
    return this.http.post(`${this.api}/chamada`, chamada);
  }

}