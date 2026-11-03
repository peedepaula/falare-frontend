import { Component } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { ProfessoresLayout } from '../../layout/professores-layout/professores-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { CadastrarProfessor } from '../../popups/cadastrar-professor/cadastrar-professor';

@Component({
  selector: 'app-professores',
  imports: [Header, Nav, Card, ProfessoresLayout, BotaoCriar, CadastrarProfessor],
  templateUrl: './professores.html',
  styleUrl: './professores.scss',
})
export class Professores {
  mostrarVisualizarCadastrarProfessor: boolean = false;

  trocarVisualizarCadastrarProfessor(){
    this.mostrarVisualizarCadastrarProfessor = !this.mostrarVisualizarCadastrarProfessor;
  }
}
