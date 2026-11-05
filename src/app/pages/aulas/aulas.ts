import { Component } from '@angular/core';
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
  mostrarVisualizarAula: boolean = false;
  mostrarCadastrarAula: boolean = false;

  trocarVisualizarAula(){
    this.mostrarVisualizarAula = !this.mostrarVisualizarAula;
  }

}
