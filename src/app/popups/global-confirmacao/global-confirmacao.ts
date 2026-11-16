import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-global-confirmacao',
  imports: [],
  templateUrl: './global-confirmacao.html',
  styleUrl: './global-confirmacao.scss',
})
export class GlobalConfirmacao {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() tipo: 'apagar' | 'editar' | 'aviso' = 'aviso';

  @Output() fechar = new EventEmitter<void>();
  @Output() confirmado = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  confirmarPopup(){
    this.confirmado.emit();
  }
}
