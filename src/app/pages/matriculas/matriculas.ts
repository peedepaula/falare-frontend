import { Component, viewChild } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { MatriculasLayout } from '../../layout/matriculas-layout/matriculas-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { UnidadeMatricula } from '../../layout/unidade-matricula/unidade-matricula';
import { CadastrarMatricula } from '../../popups/cadastrar-matricula/cadastrar-matricula';
import { AtualizarMatricula } from '../../popups/atualizar-matricula/atualizar-matricula';

@Component({
  selector: 'app-matriculas',
  imports: [Header, Nav, Card, MatriculasLayout, BotaoCriar, CadastrarMatricula, AtualizarMatricula],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.scss',
})
export class Matriculas {
  private matriculasLayout = viewChild(MatriculasLayout);

  mostrarCadastrarMatricula: boolean = false;
  mostrarAtualizarMatricula: boolean = false;

  matriculaSelecionada: any;

  mostrarEditarMatricula(matricula: any){
    this.matriculaSelecionada = matricula;
    this.mostrarAtualizarMatricula = true;
  }

  fecharEditarMatricula(){
    this.matriculaSelecionada = null;
    this.mostrarAtualizarMatricula = false;
  }

  recarregarMatriculas(){
    this.matriculasLayout()?.buscarMatriculas();
  }
}
