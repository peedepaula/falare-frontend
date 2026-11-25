import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { AlunoService } from '../../core/services/aluno.service';
import { CadatroPagamento, PagamentoService } from '../../core/services/pagamento.service';
import { FormsModule } from '@angular/forms';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-cadastrar-pagamento',
  imports: [FormsModule],
  templateUrl: './cadastrar-pagamento.html',
  styleUrl: './cadastrar-pagamento.scss',
})
export class CadastrarPagamento implements OnInit{
  private popup = inject(PopupService);

  private alunoService = inject(AlunoService);
  private pagamentoService = inject(PagamentoService);

  mostrarBuscarAlunos: boolean = false;
  mostrarStatus: boolean = false;

  @Input() pagamentoSelecionado: any;

  @Output() fechar = new EventEmitter<void>();
  @Output() recarregarPagamentos = new EventEmitter<void>();

  fecharPopup(){
    this.fechar.emit();
  }

  ngOnInit(): void {
    this.buscarAlunos();

    if(this.pagamentoSelecionado){
      this.alunoSelecionado.nome = this.pagamentoSelecionado.alunoNome;
      this.pagamento.alunoId = this.pagamentoSelecionado.alunoId;
      this.pagamento.status = this.pagamentoSelecionado.status;
      this.pagamento.valor = this.pagamentoSelecionado.valor;
    }
  }

  pagamento: CadatroPagamento = {
      alunoId: '',
      status: 'pendente',
      valor: 0
  };

  alunos = signal<any[]>([])
  alunoSelecionado: { id?: string; nome?: string } = {nome: ''};

  private paraNumero(valor: string | number): number | undefined {
    if (valor === '' || valor === null || valor === undefined) return undefined;
    const n = Number(String(valor).replace(',', '.'));
    return isNaN(n) ? undefined : n;
  }

  cadastrarAtualizarPagamento(){
    const valor = this.paraNumero(this.pagamento.valor);
    if (valor === undefined || valor <= 0) return;

    if(this.pagamentoSelecionado){
      this.pagamentoService.atualizarPagamento(
        this.pagamentoSelecionado.id,
        {
          status: this.pagamento.status,
          valor: valor
        }
      ).subscribe({
        next: (res) => {
          this.fechar.emit();
          this.recarregarPagamentos.emit();
  
          console.log('Pagamento atualizado');
          this.popup.acerto('Pagamento atualizado com sucesso.')
        },
        error: (err) => {
          console.log('Erro ao tentar atualizar pagamento: ', err);
          this.popup.erro('Erro ao tentar atualizar Pagamento.')
        }
      })
      return;
    }

    if (!this.alunoSelecionado.id) return;

    this.pagamentoService.cadastrarPagamento(
      {
        alunoId: this.alunoSelecionado.id,
        status: this.pagamento.status,
        valor: valor
      }
    ).subscribe({
      next: (res) => {
        this.fechar.emit();
        this.recarregarPagamentos.emit();

        console.log('Pagamento cadastrado');
        this.popup.acerto('Pagamento cadastrado com sucesso.')
      },
      error: (err) => {
        console.log('Erro ao tentar cadastrar pagamento: ', err);
        this.popup.erro('Erro ao tentar cadastrar Pagamento.')
      }
    })

  }

  buscarAlunos(){
      this.alunoService.buscarAlunos().subscribe({
        next: (res) => {
          this.alunos.set(res);
          console.log("Alunos: ", this.alunos())
        },
        error: (err) => {
          console.error('Erro ao buscar Alunos:', err);
          this.popup.erro('Erro ao tentar buscar Alunos.')
        }
      },
    )
  };

}
