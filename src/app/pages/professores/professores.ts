import { Component } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { ProfessoresLayout } from '../../layout/professores-layout/professores-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';

@Component({
  selector: 'app-professores',
  imports: [Header, Nav, Card, ProfessoresLayout, BotaoCriar],
  templateUrl: './professores.html',
  styleUrl: './professores.scss',
})
export class Professores {}
