import { Injectable, signal } from '@angular/core';

export type TipoPopUp = 'erro' | 'acerto' | 'informacao';

export interface PopUp {
  id: number;
  tipo: TipoPopUp;
  titulo: string;
  descricao: string;
}

@Injectable({ providedIn: 'root' })
export class PopupService {
  private contador = 0;
  readonly popups = signal<PopUp[]>([]);

  erro(descricao: string, titulo = 'Erro') {
    this.mostrar('erro', titulo, descricao);
  }

  acerto(descricao: string, titulo = 'Sucesso') {
    this.mostrar('acerto', titulo, descricao);
  }

  informacao(descricao: string, titulo = 'Informação') {
    this.mostrar('informacao', titulo, descricao);
  }

  private mostrar(tipo: TipoPopUp, titulo: string, descricao: string, duracao = 4000) {
    const id = ++this.contador;
    this.popups.update(lista => [...lista, { id, tipo, titulo, descricao }]);
    setTimeout(() => this.remover(id), duracao);
  }

  remover(id: number) {
    this.popups.update(lista => lista.filter(p => p.id !== id));
  }
}