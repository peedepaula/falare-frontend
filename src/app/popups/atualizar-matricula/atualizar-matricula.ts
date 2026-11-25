import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatriculaService, StatusMatricula } from '../../core/services/matricula.service';
import { FormsModule } from '@angular/forms';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-atualizar-matricula',
  imports: [FormsModule],
  templateUrl: './atualizar-matricula.html',
  styleUrl: './atualizar-matricula.scss',
})
export class AtualizarMatricula implements OnInit {
  private popup = inject(PopupService);

  private matriculaService = inject(MatriculaService);

  mostrarBuscarAlunos: boolean = false;
  mostrarStatus: boolean = false;

  @Output() fechar = new EventEmitter<void>();
  @Output() matriculaAtualizada = new EventEmitter<void>();
  @Input() matricula: any;

  readonly statusOpcoes: StatusMatricula[] = [
    'ativa',
    'concluida',
    'certificada',
    'reprovada_falta',
    'reprovada_nota',
    'trancada',
  ];

  form: {
    status: StatusMatricula | undefined;
    p1: string;
    p2: string;
    trabalho: string;
  } = {
    status: undefined,
    p1: '',
    p2: '',
    trabalho: '',
  };

  selecionarStatus(status: StatusMatricula) {
    this.form.status = status;
    this.mostrarStatus = false;
  }
  
  ngOnInit(): void {
    this.form = {
      status: this.matricula?.status ?? '',
      p1: this.matricula?.p1 ?? '',
      p2: this.matricula?.p2 ?? '',
      trabalho: this.matricula?.trabalho ?? '',
    };
  }
  
  fecharPopup(){
    this.fechar.emit();
  }

  deletarMatricula(){
    if(!this.matricula.id)return;
    this.matriculaService.deletarMatricula(this.matricula.id).subscribe({
      next: (res) => {
        this.fechar.emit();
        this.matriculaAtualizada.emit();
        console.log('Matrícula deletada')
        this.popup.acerto('Matrícula deletada com sucesso.')
      },
      error: (err) => {
        console.log('Erro ao tentar deletar a Matrícula: ', err)
        this.popup.acerto('Erro ao tentar deletar Matrícula.')
      }
    })
  }

  private paraNumero(valor: string | number): number | undefined {
    if (valor === '' || valor === null || valor === undefined) return undefined;
    const n = Number(String(valor).replace(',', '.'));
    return isNaN(n) ? undefined : n;
  }

  atualizarMatricula(){
    if(!this.matricula)return;

    this.matriculaService.atualizarMatricula(
      this.matricula.id,
      {
        status: this.form.status,
        p1: this.paraNumero(this.form.p1),
        p2: this.paraNumero(this.form.p2),
        trabalho: this.paraNumero(this.form.trabalho),
      }).subscribe({
      next: (res) => {
        this.fechar.emit();
        this.matriculaAtualizada.emit();
        console.log('Matrícula atualizada')
        this.popup.acerto('Matrícula atualizada com sucesso.')
      },
      error: (err) => {
        console.log('Erro ao tentar atualizar a Matrícula: ', err)
        this.popup.erro('Erro ao tentar atualizar Matrícula.')
      }
    })
  }
}
