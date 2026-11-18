import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface cadastrarAula {
  turmaId: string;
  data: string;

} 

@Injectable({
  providedIn: 'root'
})

export class AulaService {

  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/Aula`;

  buscarAulas(): Observable<any> {
    return this.http.get(`${this.api}/aulas`);
  }

  cadastrarAula(aula: cadastrarAula): Observable<any> {
    return this.http.post(`${this.api}/aula`, aula);
  }

  deletarAula(id: number): Observable<any> {
    return this.http.delete(`${this.api}/aula/${id}`);
  }
}