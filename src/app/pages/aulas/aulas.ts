import { Component, viewChild } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { AulasLayout } from '../../layout/aulas-layout/aulas-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { VisualizarAula } from '../../popups/visualizar-aula/visualizar-aula';
import { CadastrarAula } from '../../popups/cadastrar-aula/cadastrar-aula';

@Component({
  selector: 'app-aulas',
  imports: [Nav, Header, Card, AulasLayout, BotaoCriar, VisualizarAula, CadastrarAula],
  templateUrl: './aulas.html',
  styleUrl: './aulas.scss',
})
export class Aulas {
  private aulasLayout = viewChild(AulasLayout);

  mostrarVisualizarAula: boolean = false;
  mostrarCadastrarAula: boolean = false;
  aulaSelecionada: any = null;

  abrirVisualizarAula(aula: any) {
    this.aulaSelecionada = aula;
    this.mostrarVisualizarAula = true;
  }

  fecharVisualizarAula() {
    this.mostrarVisualizarAula = false;
    this.aulaSelecionada = null;
  }

  recarregarAulas(){
    this.aulasLayout()?.carregarAulas();
  }

}
