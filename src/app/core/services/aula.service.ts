import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/Aula`;

  buscarAulas(): Observable<any> {
    return this.http.get(`${this.api}/aulas`);
  }
}