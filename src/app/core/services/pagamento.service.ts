import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface CadatroPagamento {
    alunoId: string;
    status: StatusPagamentos;
    valor: number;
}

export interface AtualizarPagamento {
    status: StatusPagamentos;
    valor: number;
}

export type StatusPagamentos =
  | 'paga'
  | 'pendente';

@Injectable({
    providedIn: 'root'
})

export class PagamentoService {
    private http = inject(HttpClient);
    private api = `${environment.apiUrl}/Pagamento`;

    buscarPagamentos(): Observable<any> {
        return this.http.get(`${this.api}/pagamentos`);
    }

    buscarPagamento(id: number): Observable<any> {
        return this.http.get(`${this.api}/pagamento/${id}`);
    }

    cadastrarPagamento(pagamento: CadatroPagamento): Observable<any> {
        return this.http.post(`${this.api}/pagamento`, pagamento);
    }
    
    atualizarPagamento(id: number, dados: AtualizarPagamento): Observable<any> {
        return this.http.patch(`${this.api}/pagamento/${id}`, dados);
    }

    deletarPagamento(id: number): Observable<any> {
        return this.http.delete(`${this.api}/pagamento/${id}`);
    }
}