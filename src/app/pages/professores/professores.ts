import { Component, viewChild } from '@angular/core';
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
  mostrarPopup = false;
  professorSelecionado: any = null;

  private professoresLayout = viewChild(ProfessoresLayout);

  abrirCadastro() {
    this.professorSelecionado = null;
    this.mostrarPopup = true;
  }

  abrirEdicao(professor: any) {
    this.professorSelecionado = professor;
    this.mostrarPopup = true;
  }

  fecharPopup() {
    this.mostrarPopup = false;
    this.professorSelecionado = null;
  }

  recarregarProfessores() {
    this.professoresLayout()?.carregarProfessores();
  }

  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }
}
