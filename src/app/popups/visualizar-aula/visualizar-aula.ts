import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { UnidadeAluno } from '../../layout/unidade-aluno/unidade-aluno';
import { Chamada } from '../chamada/chamada';
import { AulaService } from '../../core/services/aula.service';

@Component({
  selector: 'app-visualizar-aula',
  imports: [UnidadeAluno, Chamada],
  templateUrl: './visualizar-aula.html',
  styleUrl: './visualizar-aula.scss',
})
export class VisualizarAula {
  private AulaService = inject(AulaService)

  sessaoTela: string = "dados";
  mostrarChamada: boolean = false;

  @Output() fechar = new EventEmitter<void>();
  @Output() aulaDeletada = new EventEmitter<void>();
  @Input() aula: any;

  fecharPopup(){
    this.fechar.emit();
  }

  trocarSessaoTela(sessao: string){
    this.sessaoTela = sessao;
  }

  deletarAula(){
    console.log("Fui")
    if(!this.aula.id)return

    this.AulaService.deletarAula(this.aula.id).subscribe({
      next: () => {
        this.aulaDeletada.emit();
        this.fecharPopup();
        console.log('Aula criada')
      },
      error: (err) => {
        console.error('Erro ao tentar deletar Aula')
      }
    })
  }

}
