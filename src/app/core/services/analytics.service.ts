import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/Analytics`;

  buscarAnalyticsAluno(): Observable<any> {
    return this.http.get(`${this.api}/aluno`);
  }
  buscarAnalyticsGeral(): Observable<any> {
    return this.http.get(`${this.api}/geral`);
  }
  buscarAnalyticsAula(): Observable<any> {
    return this.http.get(`${this.api}/aula`);
  }
  buscarAnalyticsTurma(): Observable<any> {
    return this.http.get(`${this.api}/turma`);
  }
  buscarAnalyticsPagamento(): Observable<any> {
    return this.http.get(`${this.api}/pagamento`);
  }
  buscarAnalyticsMatricula(): Observable<any> {
    return this.http.get(`${this.api}/matricula`);
  }
  buscarAnalyticsProfessor(): Observable<any> {
    return this.http.get(`${this.api}/professor`);
  }

}