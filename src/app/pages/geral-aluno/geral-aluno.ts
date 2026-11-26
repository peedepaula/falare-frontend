import { Component, inject, OnInit, signal } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { VisualizarAlunoNotas } from '../../popups/visualizar-aluno-notas/visualizar-aluno-notas';
import { VisualizarAlunoFrequencia } from '../../popups/visualizar-aluno-frequencia/visualizar-aluno-frequencia';
import { VisualizarAlunoFinanceiro } from '../../popups/visualizar-aluno-financeiro/visualizar-aluno-financeiro';
import { AuthService } from '../../core/services/auth.service';
import { AlunoService } from '../../core/services/aluno.service';
import { PopupService } from '../../core/services/popup.service';
import { finalize } from 'rxjs';

interface AlunoStatusInicio {
  statusFalta: string;
  statusCertificado: string;
}

@Component({
  selector: 'app-geral-aluno',
  imports: [Header, Nav, Card, VisualizarAlunoNotas, VisualizarAlunoFrequencia, VisualizarAlunoFinanceiro],
  templateUrl: './geral-aluno.html',
  styleUrl: './geral-aluno.scss',
})
export class GeralAluno implements OnInit{
  private alunoService = inject(AlunoService);
  private popup = inject(PopupService);

  auth = inject(AuthService);
  usuario = this.auth.usuario;

  mostrarFrequencia: boolean = false;
  mostrarNotas: boolean = false;
  mostrarFinanceiro: boolean = false;


  statusAluno: boolean = false;

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAlunoNoInicio();
  }

  dadosAlunoInicio = signal<AlunoStatusInicio | null>(null);

  buscarAlunoNoInicio(){
    this.alunoService.buscarAlunoInicio().subscribe({
      next: (res) => {
        this.dadosAlunoInicio.set(res);
      },
      error: (err) => {
        console.log('Erro ao tentar buscar Aluno inicio.', err);
        this.popup.erro("Erro ao tentar buscar Aluno inicio.");
      }
    });
  }

  emitindoCertificado = signal(false);

  emitirCertificado(): void {
    if (this.emitindoCertificado()) return;
    this.emitindoCertificado.set(true);

    this.alunoService.emitirCertificado()
      .pipe(finalize(() => this.emitindoCertificado.set(false)))
      .subscribe({
        next: (blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'certificado-falare.pdf';
          a.click();
          URL.revokeObjectURL(url);
        },
        error: async (err) => {
          let mensagem = 'Erro ao emitir o certificado.';
          try {
            const corpo = JSON.parse(await err.error.text());
            mensagem = corpo.mensagem ?? mensagem;
          } catch {}
          this.popup.erro(mensagem);
        }
      });
  }
}
